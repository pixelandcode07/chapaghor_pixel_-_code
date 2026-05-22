"use client";

import { useState, useEffect, FormEvent } from "react";
import { Plus, Edit, Trash2, X, Loader2, Image as ImageIcon } from "lucide-react";

// API থেকে আসা ব্যানারের টাইপ
type Banner = {
  _id: string;
  title: string;
  imageUrl: string;
  link: string;
  isActive: boolean;
};

export default function BannerManager() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal & Submit States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Edit & Delete Tracking States
  const [editId, setEditId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    link: "",
    isActive: true,
  });

  // ১. ব্যানার ফেচ করার ফাংশন (GET)
  const fetchBanners = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/v1/banners");
      const data = await res.json();
      if (data.success) {
        setBanners(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch banners", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Create Modal Open
  const openCreateModal = () => {
    setEditId(null);
    setFormData({ title: "", imageUrl: "", link: "", isActive: true });
    setIsModalOpen(true);
  };

  // Edit Modal Open
  const openEditModal = (banner: Banner) => {
    setEditId(banner._id);
    setFormData({
      title: banner.title,
      imageUrl: banner.imageUrl,
      link: banner.link || "",
      isActive: banner.isActive,
    });
    setIsModalOpen(true);
  };

  // ২. সাবমিট ফাংশন (POST & PATCH)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = editId ? `/api/v1/banners/${editId}` : "/api/v1/banners";
      const method = editId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setIsModalOpen(false);
        fetchBanners(); 
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      alert(`Failed to ${editId ? 'update' : 'create'} banner`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ৩. ডিলিট ফাংশন (DELETE)
  const handleDelete = async (id: string) => {
    const isConfirm = window.confirm("Are you sure you want to delete this banner?");
    if (!isConfirm) return;

    try {
      setDeletingId(id);
      const res = await fetch(`/api/v1/banners/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (data.success) {
        fetchBanners();
      } else {
        alert(data.message || "Failed to delete banner");
      }
    } catch (error) {
      alert("Error deleting banner");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[500px] relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <ImageIcon className="text-[#F05A28]" size={24} /> 
          Banner Management
        </h1>
        <button 
          onClick={openCreateModal}
          className="bg-[#F05A28] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2"
        >
          <Plus size={18} /> Add New Banner
        </button>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold rounded-tl-lg">Image</th>
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Link</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-400">
                  <Loader2 className="animate-spin mx-auto mb-2" size={24} />
                  Loading banners...
                </td>
              </tr>
            ) : banners.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-400">
                  No banners found. Click "Add New Banner" to create one.
                </td>
              </tr>
            ) : (
              banners.map((banner) => (
                <tr key={banner._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">
                    <img 
                      src={banner.imageUrl} 
                      alt={banner.title} 
                      className="w-24 h-12 rounded-lg object-cover bg-gray-100 border border-gray-200" 
                      onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/100x50?text=No+Img")} 
                    />
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-gray-800">{banner.title}</p>
                  </td>
                  <td className="p-4">
                    {banner.link ? (
                      <a href={banner.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline text-xs truncate max-w-[150px] block">
                        {banner.link}
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400">No Link</span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${banner.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {banner.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button onClick={() => openEditModal(banner)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={16} /></button>
                    <button onClick={() => handleDelete(banner._id)} disabled={deletingId === banner._id} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50">
                      {deletingId === banner._id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* --- Add/Edit Banner Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50">
              <h2 className="font-bold text-gray-800">{editId ? "Edit Banner" : "Add New Banner"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500"><X size={20} /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Banner Title *</label>
                <input required type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="e.g. Summer Sale" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F05A28]" />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Image URL *</label>
                <input required type="url" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} placeholder="https://example.com/banner.jpg" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F05A28]" />
                {/* Image Preview */}
                {formData.imageUrl && (
                   <div className="mt-2 w-full h-24 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                     <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
                   </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Redirect Link (Optional)</label>
                <input type="url" name="link" value={formData.link} onChange={handleInputChange} placeholder="https://..." className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F05A28]" />
              </div>

              {editId && (
                <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" id="isActive" name="isActive" checked={formData.isActive} onChange={handleInputChange} className="w-4 h-4 text-[#F05A28] focus:ring-[#F05A28] border-gray-300 rounded"/>
                  <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Active Banner</label>
                </div>
              )}

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-2 bg-[#F05A28] text-white rounded-lg font-medium hover:bg-orange-600 disabled:opacity-70 flex items-center justify-center gap-2">
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : (editId ? "Update Banner" : "Save Banner")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}