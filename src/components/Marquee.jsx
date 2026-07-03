import './Marquee.css'

function Marquee({ items }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
