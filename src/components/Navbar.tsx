import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-800">Riqueza Loca</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">Inicio</Link>
            <Link to="/producers" className="text-gray-700 hover:text-green-600">Productores</Link>
            <Link to="/admin/login" className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
              <UserCircle className="h-5 w-5" />
              <span>Admin</span>
            </Link>
            <a href="mailto:contact@riquezeloca.com" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}