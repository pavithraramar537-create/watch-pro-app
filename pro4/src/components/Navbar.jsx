import { Link } from 'react-router-dom'
<Link to="/contact">Contact</Link>

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0a0a0a',
      padding: '18px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 15px rgba(0,0,0,0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* LOGO - Home ku pogum */}
      <Link to="/" style={{textDecoration: 'none'}}>
        <h1 style={{
          color: '#FFD700',
          fontSize: '30px',
          margin: 0,
          fontFamily: 'Arial Black',
          letterSpacing: '2px'
        }}>
          ⌚ WATCH PRO
        </h1>
      </Link>

      {/* MENU LINKS */}
      <div style={{
        display: 'flex', 
        gap: '45px', 
        alignItems: 'center'
      }}>
        <Link 
          to="/" 
          style={{
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '17px',
            fontWeight: '500',
            transition: 'color 0.3s'
          }}
        >
          Home
        </Link>
        
        <Link 
          to="/about" 
          style={{
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '17px',
            fontWeight: '500'
          }}
        >
          About
        </Link>
        
        <Link 
          to="/shop" 
          style={{
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '17px',
            fontWeight: '500'
          }}
        >
          Shop
        </Link>
        
        {/* CART BUTTON - Click panna /cart ku pogum */}
        <Link to="/cart" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: '#007bff',
            padding: '10px 20px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            🛒 Cart <span style={{
              backgroundColor: 'white',
              color: '#007bff',
              padding: '2px 8px',
              borderRadius: '50%',
              fontSize: '14px'
            }}>0</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar