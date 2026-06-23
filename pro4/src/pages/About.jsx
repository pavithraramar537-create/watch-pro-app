function About() {
  return (
    <div style={styles.page}>
      <h1>About WatchPro</h1>
      <p>We are passionate about luxury timepieces since 2020.</p>
      <p>Our mission is to bring authentic premium watches to collectors worldwide.</p>
    </div>
  )
}

const styles = {
  page: { padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: 'auto' }
}

export default About