import React from 'react';
import { useSelector } from 'react-redux';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase/firebaseConfig';

const ProductTable = () => {
  const { items } = useSelector((state) => state.inventory);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      remove(ref(db, `products/${id}`));
    }
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mt-6">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/50 border-b border-gray-100">
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Product Name</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Stock</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4 text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                  {item.category}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-900 font-semibold">${Number(item.price).toFixed(2)}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${item.stock < 5 ? 'text-red-500' : 'text-gray-700'}`}>
                    {item.stock}
                  </span>
                  {item.stock < 5 && <AlertCircle size={14} className="text-red-500" />}
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td colSpan="5" className="px-6 py-10 text-center text-gray-400">
                No products found. Add some to get started!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
