
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Form from './Form';
import './OrderDetail.css';
import { useEffect, useState } from 'react';
import { products } from './data';

function OrderDetail(props){
  const {handleFinalOrder} = props;
  const {id} = useParams();
  const [product, setProduct] = useState(null)
  useEffect(() => {
  const pro = products.find((p) => p.id === Number(id));
  setProduct(pro);
  }, []);
  if(!product) {
    return (<p>Yükleniyor</p>)
  }
  const {isim, fiyat, text, ek, rating1, rating2} = product;

return ( 
  <div className="order-detail-wrapper">
    <div className="pizza-detail">
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
     <Form product={product} handleFinalOrder={handleFinalOrder}/>
  </div>
)
}
export default OrderDetail;