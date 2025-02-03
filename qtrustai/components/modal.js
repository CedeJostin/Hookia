import React from "react";

export default function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto overflow-hidden">
        <div className="flex justify-end p-2">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            X
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}