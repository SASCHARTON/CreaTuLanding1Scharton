// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar'; // Importa el componente NavBar
import ItemListContainer from './components/ItemListContainer'; // Importa el componente ItemListContainer

// Componente principal de la aplicación
function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Renderiza el componente NavBar */}
      <NavBar />
      {/* Renderiza el componente ItemListContainer y le pasa una prop 'greeting' */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
