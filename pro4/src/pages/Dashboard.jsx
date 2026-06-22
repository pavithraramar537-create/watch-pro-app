import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail') || 'User';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
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

      <div className="dashboard-content">
        <h2 className="welcome-text">Welcome to Dashboard</h2>
        <p className="subtitle">Your luxury watch collection overview</p>
        
        <div className="cards-grid">
          <div className="dash-card">
            <h3>Total Watches</h3>
            <p className="card-number">1,234</p>
            <span className="card-badge">+12% from last month</span>
          </div>
          <div className="dash-card">
            <h3>Orders Today</h3>
            <p className="card-number">56</p>
            <span className="card-badge">Active orders</span>
          </div>
          <div className="dash-card">
            <h3>Total Revenue</h3>
            <p className="card-number">$89,420</p>
            <span className="card-badge">+8.2% growth</span>
          </div>
          <div className="dash-card">
            <h3>Customers</h3>
            <p className="card-number">892</p>
            <span className="card-badge">New: 24 today</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;