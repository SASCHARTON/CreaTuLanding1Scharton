import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="flex justify-center items-center h-96 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-4xl font-extrabold rounded-lg m-8 shadow-xl">
      {}
      <p className="text-center p-4">{greeting}</p>
    </div>
  );
}

export default ItemListContainer;
