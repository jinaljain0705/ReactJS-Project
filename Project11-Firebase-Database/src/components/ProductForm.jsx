import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { ref, push } from 'firebase/database';

const ProductForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productsRef = ref(db, 'products');
    await push(productsRef, {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    });
    setFormData({ name: '', category: '', price: '', stock: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[2.5rem] w-full max-w-md p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Product</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Product Name</label>
            <input 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
            <input 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 outline-none"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Price ($)</label>
              <input 
                required type="number" step="0.01"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 outline-none"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Initial Stock</label>
              <input 
                required type="number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 outline-none"
                value={formData.stock}
                onChange={(e) => setFormData({...formData, stock: e.target.value})}
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-[#00a36c] text-white py-4 rounded-xl font-bold mt-4 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
