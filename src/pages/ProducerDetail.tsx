import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook, ShoppingCart } from 'lucide-react';
import PurchaseModal from '../components/PurchaseModal';

const producerData = {
  id: 1,
  name: 'Finca Orgánica Luna Nueva',
  legalRep: 'María González',
  mission: 'Producir alimentos orgánicos de la más alta calidad, respetando la tierra y sus ciclos naturales.',
  vision: 'Ser líderes en la producción orgánica sostenible, inspirando a otros a adoptar prácticas agrícolas responsables.',
  schedule: 'Lunes a Sábado: 7:00 AM - 4:00 PM',
  location: 'Valle Central, Costa Rica',
  type: 'Agricultura Orgánica',
  organization: 'Cooperativa',
  products: ['Vegetales Orgánicos', 'Hierbas Aromáticas', 'Frutas Tropicales'],
  phone: '+506 2222-3333',
  social: {
    instagram: '@fincalunanueva',
    facebook: '/fincalunanueva',
  },
  history: 'Fundada en 2010, Finca Orgánica Luna Nueva comenzó como un pequeño proyecto familiar...',
  images: [
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800',
  ],
};

export default function ProducerDetail() {
  const { id } = useParams();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold text-green-800">
                {producerData.name}
              </h1>
              <button
                onClick={() => setIsPurchaseModalOpen(true)}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Comprar Productos</span>
              </button>
            </div>
            
            {/* Rest of the producer details */}
            {/* ... (previous content remains the same) ... */}
          </div>
          
          {/* Rest of the component */}
          {/* ... (previous content remains the same) ... */}
        </div>
      </div>

      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        producer={producerData}
      />
    </div>
  );
}