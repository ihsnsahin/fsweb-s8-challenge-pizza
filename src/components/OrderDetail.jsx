
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Form from './Form';
import './OrderDetail.css';
import { useEffect, useState } from 'react';
import { products } from './data';
import Footer from './Footer';


function OrderDetail(props){
  const {handleFinalOrder, modal, modalToggle} = props;
  const {id} = useParams();
  const [product, setProduct] = useState(null)
  useEffect(() => {
  const pro = products.find((p) => p.id === Number(id));
  setProduct(pro);
  }, []);
  if(!product) {
    return (<p>Yükleniyor</p>)
  }
  const {isim, fiyat, text, ek, rating1, rating2, src} = product;

return (
  <>
   <div className="order-detail-wrapper">
    <div className="pizza-detail">
    <div className="img-wrapper">
      <img src={src}/>
    </div>
    <div className='order-header-link'>
        <div className='order-header-content'>
        <Link to="/">Ana Sayfa</Link>
        <span> - </span>
        <span>Sipariş Oluştur</span>
        </div>
    </div>
    <h3>{isim}</h3>
    <div >
        <span id="price">{fiyat.toFixed(2)}₺</span>
        <div className="rating">
            <span>{rating1}</span>
            <span>({rating2})</span>
        </div> 
        </div>
          <p>{text}</p>
    </div>
  </div>
  <Form product={product} handleFinalOrder={handleFinalOrder} modal={modal} modalToggle={modalToggle}/>
  <Footer/>
  </>
 
)
}
export default OrderDetail;