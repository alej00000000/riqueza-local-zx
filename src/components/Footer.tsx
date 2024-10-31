import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">Riqueza Loca</span>
            </div>
            <p className="mt-4">
              Conectando productores locales con consumidores conscientes para un futuro más sostenible.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Email: contacto@riquezeloca.com</li>
              <li>Teléfono: +506 2222-1111</li>
              <li>San José, Costa Rica</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-300">Inicio</a></li>
              <li><a href="/producers" className="hover:text-green-300">Productores</a></li>
              <li><a href="/about" className="hover:text-green-300">Sobre Nosotros</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; {new Date().getFullYear()} Riqueza Loca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}