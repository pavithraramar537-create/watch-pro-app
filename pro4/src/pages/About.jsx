import { Link, useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail') || 'User';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="page-container">
      <nav className="navbar">
        <h1 className="nav-logo">Watch <span>Pro</span></h1>
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-right">
          <span className="user-email">{userEmail}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="page-content">
        <h1 className="page-title">About <span>Watch Pro</span></h1>
        <p className="page-subtitle">
          We are the leading luxury watch marketplace, bringing you the finest timepieces from around the world.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">⌚</div>
            <h3>Premium Collection</h3>
            <p>Discover over 1000+ luxury watches from Rolex, Omega, Patek Philippe, and more exclusive brands.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">🛡️</div>
            <h3>Authenticity Guaranteed</h3>
            <p>Every watch is verified by our expert team. 100% authentic with full warranty and certification.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Free worldwide shipping with insurance. Get your dream watch delivered to your doorstep safely.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;