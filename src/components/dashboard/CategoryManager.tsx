"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Plus, Edit, Trash2, X, Loader2, UploadCloud, Star, ArrowDownUp, Globe } from "lucide-react";
import Link from "next/link";

type Category = {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  banners: string[];
  isFeatured: boolean;
  isActive: boolean;
  isNavhead: boolean; // নতুন যুক্ত হলো
  order: number;
};

export default function CategoryManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [uploading, setUploading] = useState({ icon: false, b1: false, b2: false });
  const [editId, setEditId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // ফর্মে isNavhead যুক্ত করা হলো (ডিফল্ট true)
  const [formData, setFormData] = useState({
    name: "", slug: "", icon: "", banner1: "", banner2: "", isFeatured: false, isActive: true, isNavhead: true,
  });

  // Image Upload Logic (Cloudinary)
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>, field: 'icon' | 'banner1' | 'banner2') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(prev => ({ ...prev, [field === 'icon' ? 'icon' : field === 'banner1' ? 'b1' : 'b2']: true }));

    try {
      const form = new FormData();
      form.append("image", file);
      const res = await fetch("/api/v1/upload", { method: "POST", body: form });
      const data = await res.json();

      if (data.success) {
        setFormData(prev => ({ ...prev, [field]: data.data.url }));
      } else {
        alert("Upload failed: " + data.message);
      }
    } catch (err) {
      alert("Error uploading image");
    } finally {
      setUploading(prev => ({ ...prev, [field === 'icon' ? 'icon' : field === 'banner1' ? 'b1' : 'b2']: false }));
    }
  };

  const fetchCategories = async () => {
    setIsLoading(true);
    const res = await fetch("/api/v1/categories");
    const data = await res.json();
    if (data.success) setCategories(data.data);
    setIsLoading(false);
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
      return;
    }
    
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === "name" && !editId) {
        newData.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      }
      return newData;
    });
  };

  const openCreateModal = () => {
    setEditId(null);
    setFormData({ name: "", slug: "", icon: "", banner1: "", banner2: "", isFeatured: false, isActive: true, isNavhead: true });
    setIsModalOpen(true);
  };

  const openEditModal = (cat: Category) => {
    setEditId(cat._id);
    setFormData({
      name: cat.name, 
      slug: cat.slug, 
      icon: cat.icon,
      banner1: cat.banners[0] || "", 
      banner2: cat.banners[1] || "", 
      isFeatured: cat.isFeatured, 
      isActive: cat.isActive, 
      isNavhead: cat.isNavhead ?? true, // যদি undefined থাকে তবে true হবে
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const banners = [formData.banner1, formData.banner2].filter(Boolean);
    
    // ✅ ফিক্স: payload এর ভেতরে isNavhead পাঠানো হচ্ছে
    const payload = { 
      name: formData.name,
      slug: formData.slug,
      icon: formData.icon,
      isFeatured: formData.isFeatured,
      isActive: formData.isActive,
      isNavhead: formData.isNavhead, // এটি আগে মিসিং ছিল
      banners 
    };

    const url = editId ? `/api/v1/categories/${editId}` : "/api/v1/categories";
    const method = editId ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method, 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setIsModalOpen(false);
        fetchCategories(); // টেবিল আপডেট করার জন্য আবার কল করা হলো
      } else {
        alert("Failed to save: " + data.message);
      }
    } catch (error) {
      console.error("Save error:", error);
    }
    
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setDeletingId(id);
      await fetch(`/api/v1/categories/${id}`, { method: "DELETE" });
      fetchCategories();
      setDeletingId(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[500px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-xl font-bold text-gray-800">Category Management</h1>
        <div className="flex items-center gap-3">
          <Link 
            href="/dashboard/category/rearrange"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <ArrowDownUp size={18} /> Rearrange
          </Link>
          <button onClick={openCreateModal} className="bg-[#F05A28] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
            <Plus size={18} /> Add Category
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold rounded-tl-lg">Icon</th>
              <th className="p-4 font-semibold">Name & Slug</th>
              <th className="p-4 font-semibold">Featured</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? <tr><td colSpan={5} className="p-8 text-center text-gray-400"><Loader2 className="animate-spin mx-auto mb-2" size={24} />Loading...</td></tr> : 
             categories.length === 0 ? <tr><td colSpan={5} className="p-8 text-center text-gray-400">No categories found.</td></tr> :
             categories.map((cat) => (
              <tr key={cat._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4">
                  <img src={cat.icon} alt={cat.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100 border border-gray-200" onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/40")} />
                </td>
                <td className="p-4">
                  <p className="font-bold text-gray-800">{cat.name}</p>
                  <p className="text-xs text-gray-400">/{cat.slug}</p>
                </td>
                <td className="p-4">
                  {cat.isFeatured ? <Star size={18} className="text-yellow-500 fill-yellow-500" /> : <Star size={18} className="text-gray-300" />}
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1.5 items-start">
                    <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wide ${cat.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {cat.isActive ? 'Active' : 'Inactive'}
                    </span>
                    {/* ✅ isNavhead true থাকলে ব্যাজ দেখাবে */}
                    {cat.isNavhead && (
                      <span className="flex items-center gap-1 text-[10px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wide bg-blue-50 text-blue-600 border border-blue-100">
                        <Globe size={10} /> In Navbar
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <button onClick={() => openEditModal(cat)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Edit size={16} /></button>
                  <button onClick={() => handleDelete(cat._id)} disabled={deletingId === cat._id} className="p-2 text-red-500 hover:bg-red-50 rounded-lg disabled:opacity-50">
                    {deletingId === cat._id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50">
              <h2 className="font-bold text-gray-800">{editId ? "Edit" : "Add New"} Category</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500"><X size={20} /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F05A28]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Slug *</label>
                  <input required type="text" name="slug" value={formData.slug} onChange={handleInputChange} placeholder="Slug" className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none" />
                </div>
              </div>

              <div className="space-y-3">
                 <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Icon Upload *</label>
                    <div className="flex items-center gap-2">
                        <input type="file" onChange={(e) => handleFileUpload(e, 'icon')} className="hidden" id="icon-upload" />
                        <label htmlFor="icon-upload" className="cursor-pointer bg-gray-100 p-2 rounded flex items-center gap-2 text-sm whitespace-nowrap"><UploadCloud size={16}/> {uploading.icon ? "Uploading..." : "Upload Icon"}</label>
                        <input required type="text" name="icon" value={formData.icon} onChange={handleInputChange} placeholder="Icon URL" className="flex-1 p-2 border border-gray-200 rounded-lg text-sm" />
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Banner 1</label>
                        <input type="file" onChange={(e) => handleFileUpload(e, 'banner1')} className="text-xs w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Banner 2</label>
                        <input type="file" onChange={(e) => handleFileUpload(e, 'banner2')} className="text-xs w-full" />
                    </div>
                 </div>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="isActive" name="isActive" checked={formData.isActive} onChange={handleInputChange} className="w-4 h-4 text-[#F05A28] focus:ring-[#F05A28] border-gray-300 rounded" />
                  <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Active Status</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="isFeatured" name="isFeatured" checked={formData.isFeatured} onChange={handleInputChange} className="w-4 h-4 text-[#F05A28] focus:ring-[#F05A28] border-gray-300 rounded" />
                  <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700">Featured</label>
                </div>
                <div className="flex items-center gap-2">
                  {/* ✅ isNavhead চেকবক্স */}
                  <input type="checkbox" id="isNavhead" name="isNavhead" checked={formData.isNavhead} onChange={handleInputChange} className="w-4 h-4 text-[#F05A28] focus:ring-[#F05A28] border-gray-300 rounded" />
                  <label htmlFor="isNavhead" className="text-sm font-medium text-gray-700">Show in Navbar</label>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 p-2 bg-gray-100 text-gray-600 rounded-lg font-medium">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 p-2 bg-[#F05A28] text-white rounded-lg font-medium flex justify-center items-center gap-2">
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : "Save Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}