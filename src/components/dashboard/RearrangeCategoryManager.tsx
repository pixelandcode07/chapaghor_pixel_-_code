"use client"; // এটি Client Component

import { useState, useEffect } from "react";
import { 
  DndContext, closestCenter, KeyboardSensor, PointerSensor, 
  useSensor, useSensors, DragEndEvent 
} from "@dnd-kit/core";
import { 
  arrayMove, SortableContext, sortableKeyboardCoordinates, 
  verticalListSortingStrategy, useSortable 
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { GripVertical, Loader2, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

// সিঙ্গেল ক্যাটাগরি আইটেম কম্পোনেন্ট
function SortableCategoryItem({ category }: { category: any }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: category._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-between p-4 mb-3 bg-white border rounded-lg shadow-sm transition-all ${
        isDragging ? "border-[#F05A28] shadow-md opacity-90 scale-[1.01]" : "border-gray-200"
      }`}
    >
      <div className="flex items-center gap-4">
        <div 
          {...attributes} 
          {...listeners} 
          className="cursor-grab active:cursor-grabbing p-1 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <GripVertical size={20} />
        </div>
        <div className="flex items-center gap-3">
          {category.icon && (
            <img 
              src={category.icon} 
              alt={category.name} 
              className="w-8 h-8 rounded object-cover bg-gray-50 border border-gray-100"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/32")}
            />
          )}
          <span className="font-semibold text-gray-700">{category.name}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400 font-medium">Position: {category.order || 0}</span>
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${category.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {category.isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
    </div>
  );
}

export default function RearrangeCategoryManager() {
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/v1/categories");
      const data = await res.json();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error("Failed to load categories", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setCategories((items) => {
        const oldIndex = items.findIndex((item) => item._id === active.id);
        const newIndex = items.findIndex((item) => item._id === over.id);
        const updatedItems = arrayMove(items, oldIndex, newIndex);
        
        return updatedItems.map((item, index) => ({
          ...item,
          order: index + 1
        }));
      });
    }
  };

  const handleSaveOrder = async () => {
    try {
      setIsSaving(true);
      const payload = categories.map((cat, index) => ({
        _id: cat._id,
        order: index + 1, 
      }));

      const res = await fetch("/api/v1/categories/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const data = await res.json();
      if (data.success) {
        alert("Categories order saved successfully!");
        fetchCategories(); 
      } else {
        alert(data.message || "Failed to save order");
      }
    } catch (error) {
      alert("Error connection to server");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4 md:p-6 animate-in fade-in duration-300">
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Link 
              href="/dashboard/category" 
              className="text-gray-400 hover:text-[#F05A28] transition-colors p-1 hover:bg-gray-50 rounded-lg"
              title="Back to Categories"
            >
              <ArrowLeft size={22} />
            </Link>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Rearrange Categories</h1>
          </div>
          <p className="text-sm text-gray-500 ml-8">
            Drag and drop to change the order. Click 'Save Order' to persist changes.
          </p>
        </div>
        
        <button 
          onClick={handleSaveOrder} 
          disabled={isSaving || isLoading || categories.length === 0}
          className="bg-[#111827] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all flex items-center gap-2 disabled:opacity-50 w-full sm:w-auto justify-center shadow-sm"
        >
          {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save Order
        </button>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm min-h-[400px]">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-60 text-gray-400 gap-2">
            <Loader2 className="animate-spin text-[#F05A28]" size={32} /> 
            <p className="text-sm font-medium">Loading categories...</p>
          </div>
        ) : categories.length === 0 ? (
          <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
            No categories found to rearrange.
          </div>
        ) : (
          <DndContext 
            sensors={sensors} 
            collisionDetection={closestCenter} 
            onDragEnd={handleDragEnd} 
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext 
              items={categories.map((c) => c._id)} 
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-1">
                {categories.map((category) => (
                  <SortableCategoryItem key={category._id} category={category} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
}