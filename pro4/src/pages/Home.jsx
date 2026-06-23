const watches = [
  {
    id: 1,
    name: "Rolex Submariner",
    price: "$12,000",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    price: "$8,500",
    img: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=500"
  },
  {
    id: 3,
    name: "Tag Heuer Carrera",
    price: "$3,200",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500"
  },
  {
    id: 4,
    name: "Audemars Piguet",
    price: "$25,000",
    img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500"
  },
  {
    id: 5,
    name: "Patek Philippe",
    price: "$45,000",
    img: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=500"
  },
  
]

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Luxury Watch Collection</h1>
        <p>Discover timeless elegance and precision craftsmanship</p>
      </div>

      <div className="watch-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.img} alt={watch.name} className="watch-img" />
            <div className="watch-info">
              <h3>{watch.name}</h3>
              <p className="price">{watch.price}</p>
              <button className="buy-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home