import { ArrowRight, Leaf, Users, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: 'Productos Orgánicos',
      description: 'Alimentos frescos y saludables cultivados de manera sostenible.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Productores Locales',
      description: 'Apoyo directo a agricultores y productores de nuestra comunidad.'
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: 'Compra Directa',
      description: 'Conectamos consumidores directamente con los productores.'
    }
  ];

  const images = [
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Riqueza Loca
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Conectando productores locales con consumidores conscientes
            </p>
            <Link
              to="/producers"
              className="inline-flex items-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-100"
            >
              Ver Productores
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nuestros Productores
          </h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Producer ${index + 1}`}
                className="w-80 h-60 object-cover rounded-lg shadow-md flex-none"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}