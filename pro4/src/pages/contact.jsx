import { useState } from 'react'

function Contact() {
  const [msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully!')
    setMsg('')
  }

  return (
    <div style={styles.page}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea 
          placeholder="Your Message" 
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          style={styles.input} 
          rows="4"
          required 
        />
        <button type="submit" style={styles.btn}>Send Message</button>
      </form>
    </div>
  )
}

const styles = {
  page: { padding: '2rem', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto' },
  input: { padding: '0.8rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' },
  btn: { padding: '1rem', background: 'gold', border: 'none', cursor: 'pointer', fontSize: '1rem' }
}

export default Contact