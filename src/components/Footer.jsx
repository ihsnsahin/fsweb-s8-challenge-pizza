import './Footer.css'
function Footer () {
    return (<footer className="main-footer">
      <div className="footer-container maxwidth">
        <div className="footer-contact dflexc">
          <h1>Teknolojik<br/>Yemekler</h1>
          <div className="contact-info">
            <img src="/src/assets/footer/icons/icon-1.png" alt="location"/>
            <p><a href="">341 Londonderry Road, <br/>Istanbul Türkiye</a></p>
          </div>
          <div className="contact-info">
            <img src="/src/assets/footer/icons/icon-2.png" alt="envelope"/>
            <p><a href="">aciktim@teknolojikyemekler.com</a></p>
          </div>
          <div className="contact-info">
            <img src="/src/assets/footer/icons/icon-3.png" alt="phone"/>
            <p><a href="">+90 216 123 45 67</a></p>
          </div>
        </div>
        <div className="footer-menu dflexc">
            <h2>Hot Menu</h2>
            <nav>
              <ul>
                <li><a href="">Terminal Pizza</a></li>
                <li><a href="">5 Kişilik Hackathlon Pizza</a></li>
                <li><a href="">useEffect Tavuklu Pizza</a></li>
                <li><a href="">Beyaz  Console Frosty</a></li>
                <li><a href="">Testler Geçti Mutlu Burger</a></li>
                <li><a href="">Position Absolute Acı Burger</a></li>
              </ul>
            </nav>
        </div>
        <div className="footer-instagram dflexc">
            <h2>Instagram</h2>
            <div className="insta-grid">
              <img src="/src/assets/footer/other/footer-1.png" alt=""/>
              <img src="/src/assets/footer/other/footer-2.png" alt=""/>
              <img src="/src/assets/footer/other/footer-3.png" alt=""/>
            </div>
            <div className="insta-grid">
              <img src="/src/assets/footer/other/footer-4.png" alt=""/>
              <img src="/src/assets/footer/other/footer-5.png" alt=""/>
              <img src="/src/assets/footer/other/footer-6.png" alt=""/>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright dflex-sb maxwidth">
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </footer>)
}
export default Footer;