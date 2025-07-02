import React from 'react';
import CartWidget from './CartWidget';

const StoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-indigo-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

// Componente NavBar
function NavBar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center rounded-b-lg">
      {}
      <div className="flex items-center space-x-2">
        <StoreIcon />
        <span className="text-2xl font-bold text-gray-800">Mi Tienda</span>
      </div>

      {}
      <ul className="flex space-x-6 text-lg">
        <li>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">
            Productos
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">
            Categorías
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">
            Contacto
          </a>
        </li>
      </ul>

      {}
      <CartWidget />
    </nav>
  );
}

export default NavBar;
