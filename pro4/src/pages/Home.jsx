import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{padding: '50px', textAlign: 'center'}}>
      <h1 style={{fontSize: '50px', color: 'black'}}>
        WATCH PRO
      </h1>
      <h2 style={{color: 'blue'}}>
        Premium Watches
      </h2>
      <img 
        src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500" 
        alt="Watch"
        style={{width: '400px', borderRadius: '20px', marginTop: '20px'}}
      />
      <br/>
      <Link to="/shop">
        <button style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          marginTop: '30px',
          cursor: 'pointer'
        }}>
          Go to Shop
        </button>
      </Link>
    </div>
  )
}

export default Home