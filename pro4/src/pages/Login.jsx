import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Yaaru email/password potaalum login aagum da
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      alert('Welcome to Watch Pro! 🔥');
      navigate('/dashboard');
    } else {
      alert('Please enter email and password 😅');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">
          Watch <span>Pro</span>
        </h2>
        <p className="login-subtitle">Login to your account</p>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter any password"
              required
            />
          </div>

          <div className="btn-wrapper">
            <button type="submit" className="login-btn">
              SIGN IN
            </button>
          </div>
        </form>

        <p className="test-info">
          Enter any email & password to continue
        </p>
      </div>
    </div>
  );
}

export default Login;