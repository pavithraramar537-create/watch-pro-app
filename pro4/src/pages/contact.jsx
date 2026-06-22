import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail') || 'User';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
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
        <h1 className="page-title">Contact <span>Us</span></h1>
        <p className="page-subtitle">
          Have questions? We're here to help you find your perfect timepiece.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>support@watchpro.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div className="contact-details">
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Type your message here..."
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;