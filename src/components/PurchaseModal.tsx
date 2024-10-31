import React from 'react';
import { X, ShoppingCart } from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  producer: {
    name: string;
    products: string[];
  };
}

export default function PurchaseModal({ isOpen, onClose, producer }: PurchaseModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send order to backend
    alert('¡Gracias por tu pedido! El productor se pondrá en contacto contigo pronto.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-green-800">
            Realizar Pedido - {producer.name}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Productos Disponibles
            </label>
            <select
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Selecciona un producto</option>
              {producer.products.map((product, index) => (
                <option key={index} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cantidad
            </label>
            <input
              type="number"
              required
              min="1"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Información de Contacto
            </label>
            <input
              type="email"
              required
              placeholder="Correo electrónico"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 mb-2"
            />
            <input
              type="tel"
              required
              placeholder="Teléfono"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Realizar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}