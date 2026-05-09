import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Section.css';
import {nav, products2} from "./data"
import NavItems from './NavItems.jsx';
import ProductItem from './ProductItem.jsx';

function Section () {
    return (
        <>
        <nav className="nav-container">
        <div className="nav-content dflex-sb maxwidth">
          {nav.map((item)=> (
            <NavItems key={item.id} text={item.textTr} img={item.img}/>
          ))}
        </div>
      </nav>
      <section className="promotion-container maxwidth">
          <div className="promotion-content-left">
                <img src="src/assets/cta/kart-1.png" alt=""/>
                <div className="text-left">
                <h3>Özel<br/>Lezzetus</h3>
                <p>Position:Absolute Acı Burger</p>
                <Link data-cy="order-link-2" to="/order/1">Sipariş Ver</Link>
                </div>
          </div>
                <div className="promotion-content-right">
                    <div className="item-right-top">
                      <img src="src/assets/cta/kart-2.png" alt=""/>
                        <div className="text-right-top">
                        <h3>Hackathlon<br/>Burger Menü</h3>
                        <Link data-cy="order-link-3" to="/order/2">Sipariş Ver</Link>
                      </div>
                  </div>
            <div className="item-right-bottom">
              <img src="src/assets/cta/kart-3.png" alt=""/>
                <div className="text-right-bottom">
                <h3><span>Çoooook</span> hızlı<br/>npm gibi kurye </h3>
                <Link data-cy="order-link-4" to="/order/3">Sipariş Ver</Link>
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
           {nav.map((item)=> (
            <NavItems key={item.id} text={item.textEn} img={item.img} navClass="-2"/>
          ))}
        </div>
      </nav>
      <section className="product-price dflex-sb maxwidth">
       {products2.map((item)=>(
        <ProductItem  key={item.id} product={item}/>
       ))}
      </section>
      </>)
}
export default Section;