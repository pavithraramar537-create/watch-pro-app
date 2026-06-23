import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>⌚ WatchPro</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#1a1a1a',
    color: 'gold'
  },
  links: {
    display: 'flex',
    gap: '2rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem'
  }
}

export default Navbar