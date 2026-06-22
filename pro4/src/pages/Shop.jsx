import { useState } from 'react'

function Shop() {
  // Cart count ah store panna
  const [cartCount, setCartCount] = useState(0)

  // Button click panna call aagura function
  const handleAddToCart = (watchName) => {
    setCartCount(cartCount + 1)
    alert(`${watchName} added to cart! Total items: ${cartCount + 1}`)
  }

  return (
    <div style={{
      padding: '60px 20px', 
      textAlign: 'center', 
      fontFamily: 'Arial',
      backgroundColor: 'white'
    }}>
      <h1 style={{fontSize: '48px', marginBottom: '15px', color: '#1a1a1a'}}>
        Our Watch Collection
      </h1>
      
      <p style={{fontSize: '20px', color: '#666', marginBottom: '50px'}}>
        Cart Items: <strong style={{color: '#007bff'}}>{cartCount}</strong>
      </p>
      
      <div style={{
        display: 'flex', 
        gap: '40px', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* WATCH 1 */}
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '20px',
          padding: '25px',
          width: '300px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400" 
            alt="Royal Gold Edition"
            style={{width: '100%', borderRadius: '15px'}} 
          />
          <h3 style={{marginTop: '20px', fontSize: '22px'}}>Royal Gold Edition</h3>
          <p style={{color: '#666', fontSize: '15px'}}>Premium automatic movement</p>
          <p style={{fontSize: '26px', color: '#007bff', fontWeight: 'bold', margin: '15px 0'}}>₹45,999</p>
          
          {/* ONCLICK POTACHU PAARU */}
          <button 
            onClick={() => handleAddToCart('Royal Gold Edition')}
            style={{
              padding: '12px 30px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              width: '100%'
            }}>
            Add to Cart
          </button>
        </div>

        {/* WATCH 2 */}
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '20px',
          padding: '25px',
          width: '300px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400" 
            alt="Pro Smart Watch"
            style={{width: '100%', borderRadius: '15px'}} 
          />
          <h3 style={{marginTop: '20px', fontSize: '22px'}}>Pro Smart Watch</h3>
          <p style={{color: '#666', fontSize: '15px'}}>Health tracking & notifications</p>
          <p style={{fontSize: '26px', color: '#007bff', fontWeight: 'bold', margin: '15px 0'}}>₹12,499</p>
          
          <button 
            onClick={() => handleAddToCart('Pro Smart Watch')}
            style={{
              padding: '12px 30px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              width: '100%'
            }}>
            Add to Cart
          </button>
        </div>

        {/* WATCH 3 */}
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '20px',
          padding: '25px',
          width: '300px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400" 
            alt="Classic Leather"
            style={{width: '100%', borderRadius: '15px'}} 
          />
          <h3 style={{marginTop: '20px', fontSize: '22px'}}>Classic Leather</h3>
          <p style={{color: '#666', fontSize: '15px'}}>Timeless design, everyday wear</p>
          <p style={{fontSize: '26px', color: '#007bff', fontWeight: 'bold', margin: '15px 0'}}>₹22,999</p>
          
          <button 
            onClick={() => handleAddToCart('Classic Leather')}
            style={{
              padding: '12px 30px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              width: '100%'
            }}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default Shop