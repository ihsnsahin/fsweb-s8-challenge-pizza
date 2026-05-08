import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Section.css';

function Section () {
    return (
        <>
        <nav className="nav-container">
        <div className="nav-content dflex-sb maxwidth">
          <div className="nav-items">
            <a className="nav-link" href="">
              <img src="src/assets/icons/1.svg" alt="YENİ!Kore"/>
              <span>YENİ!Kore</span>
            </a>
          </div>
          <div className="nav-items">
            <a className="nav-link" href="">
              <img src="src/assets/icons/2.svg" alt="Pizza" />
              <span>Pizza</span>
            </a>
          </div>
          <div className="nav-items">
            <a className="nav-link" href="">
              <img src="src/assets/icons/3.svg" alt="Burger" />
              <span>Burger</span>
            </a>
          </div>
          <div className="nav-items">
            <a className="nav-link" href="">
              <img src="src/assets/icons/4.svg" alt="Kızartmalar" />
              <span>Kızartmalar</span>
            </a>
          </div>
          <div className="nav-items">
            <a className="nav-link" href="">
              <img src="src/assets/icons/5.svg" alt="Burger" />
              <span>Burger</span>
            </a>
          </div>
          <div className="nav-items">
            <a className="nav-link" href=""><img src="src/assets/icons/6.svg" alt="Gazlı İçecek" />
            <span>Gazlı İçecek</span>
            </a>
          </div>
        </div>
      </nav>
      <section className="promotion-container maxwidth">
        <div className="promotion-content-left">
              <img src="src/assets/cta/kart-1.png" alt=""/>
              <div className="text-left">
              <h3>Özel<br/>Lezzetus</h3>
              <p>Position:Absolute Acı Burger</p>
              <Link to="/order/1">Sipariş Ver</Link>
              </div>
        </div>
        <div className="promotion-content-right">
            <div className="item-right-top">
              <img src="src/assets/cta/kart-2.png" alt=""/>
                <div className="text-right-top">
                <h3>Hackathlon<br/>Burger Menü</h3>
                <Link to="/order/2">Sipariş Ver</Link>
              </div>
           </div>
            <div className="item-right-bottom">
              <img src="src/assets/cta/kart-3.png" alt=""/>
                <div className="text-right-bottom">
                <h3><span>Çoooook</span> hızlı<br/>npm gibi kurye </h3>
                <Link to="/order/3">Sipariş Ver</Link>
              </div>
            </div>
        </div>
      </section>
      <section className="title-container">
        <div className="top-title-content">
          <p>en çok paketlenen menüler</p>
        </div>
        <div className="bottom-title-content">
          <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
        </div>
      </section>
      <nav className="nav-container-2 maxwidth">
        <div className="nav-content-2 dflex-sb">
          <div className="nav-items-2">
            <a className="nav-link-2" href="">
              <img src="src/assets/icons/1.svg" alt="YENİ!Kore" />
              <span>Ramen</span>
            </a>
          </div>
          <div className="nav-items-2">
            <a className="nav-link-2" href="">
              <img src="src/assets/icons/2.svg" alt="Pizza" />
              <span>Pizza</span>
            </a>
          </div>
          <div className="nav-items-2">
            <a className="nav-link-2" href="">
              <img src="src/assets/icons/3.svg" alt="Burger" />
              <span>Burger</span>
            </a>
          </div>
          <div className="nav-items-2">
            <a className="nav-link-2" href="">
              <img src="src/assets/icons/4.svg" alt="Kızartmalar" />
              <span>French Fries</span>
            </a>
          </div>
          <div className="nav-items-2">
            <a className="nav-link-2" href="">
              <img src="src/assets/icons/5.svg" alt="Burger" />
              <span>Fast-food</span>
            </a>
          </div>
          <div className="nav-items-2">
            <a className="nav-link-2" href=""><img src="src/assets/icons/6.svg" alt="Gazlı İçecek" />
            <span>Soft Drinks</span>
            </a>
          </div>
        </div>
      </nav>
      <section className="product-price dflex-sb maxwidth">
        <div className="product-items">
          <img src="src/assets/pictures/food-1.png" alt=""/>
          <h3>Terminal Pizza</h3>
          <div className="price">
            <p>4.9</p>
            <p>(200)</p>
            <p className="bold">60₺</p>
          </div>
        </div>
         <div className="product-items">
          <img src="src/assets/pictures/food-2.png" alt=""/>
          <h3>Position Absolute Acı Pizza</h3>
          <div className="price">
            <p>4.9</p>
            <p>(200)</p>
            <p className="bold">60₺</p>
          </div>
        </div>
         <div className="product-items">
          <img src="src/assets/pictures/food-3.png" alt=""/>
          <h3>useEffect Tavuklu Burger</h3>
          <div className="price">
            <p>4.9</p>
            <p>(200)</p>
            <p className="bold">60₺</p>
          </div>
        </div>
      </section>
      </>)
}
export default Section;