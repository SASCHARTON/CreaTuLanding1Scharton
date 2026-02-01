const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <span style={{ fontSize: '1.5rem' }}>🛒</span>
      <strong style={{ color: 'white' }}>0</strong>
    </div>
  );
};

export default CartWidget;