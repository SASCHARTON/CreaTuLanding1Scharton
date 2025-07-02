// src/components/NavBar.jsx
import React from 'react';
// NOTA: En este entorno de ejecución, CartWidget se define directamente aquí
// para evitar errores de resolución de módulos, ya que todos los componentes
// se compilan como una sola unidad. En un proyecto real, CartWidget
// estaría en su propio archivo (CartWidget.jsx) y se importaría.

// Icono de carrito (ejemplo simple con SVG inline)
const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

// Componente CartWidget (Definición incluida directamente aquí para la compilación en este entorno)
function CartWidget() {
  // Aquí podríamos usar useState para gestionar el número de ítems en el carrito
  const itemCount = 3; // Valor de ejemplo para el número de ítems

  return (
    <div className="relative flex items-center cursor-pointer p-2 rounded-full hover:bg-gray-200 transition duration-300">
      <ShoppingCartIcon />
      {/* Muestra el número de ítems en el carrito */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
        {itemCount}
      </span>
    </div>
  );
}


// Icono de la tienda (ejemplo simple con SVG inline)
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
      {/* Sección del logo de la tienda */}
      <div className="flex items-center space-x-2">
        <StoreIcon />
        <span className="text-2xl font-bold text-gray-800">Mi Tienda</span>
      </div>

      {/* Enlaces de navegación */}
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

      {/* Widget del carrito de compras */}
      <CartWidget />
    </nav>
  );
}

export default NavBar;
