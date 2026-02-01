const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#333' }}>{greeting}</h1>
      <p style={{ color: '#666' }}>El catálogo se cargará aquí próximamente.</p>
    </div>
  );
};

export default ItemListContainer;