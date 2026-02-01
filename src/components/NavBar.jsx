import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px', 
      backgroundColor: '#1a1a1a', 
      color: 'white' 
    }}>
      <h2 style={{ margin: 0 }}>Tienda Tech</h2>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Procesadores</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Monitores</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Teclados</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;