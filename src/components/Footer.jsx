import SocialIcons from './SocialIcons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Bapa Rao Pendyala</span>
        <SocialIcons />
        <a href="#top" className="back-to-top">
          Back to top
        </a>
      </div>
    </footer>
  )
}

export default Footer
