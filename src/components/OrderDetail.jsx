
import Form from './Form';
import './OrderDetail.css';
import { product } from './data';

function OrderDetail(){
return ( 
  <div className="order-detail-wrapper">
    <div className="pizza-detail">
    <h3>{product.name}</h3>
    <div >
        <span id="price">{product.fiyat.toFixed(2)}₺</span>
        <div className="rating">
            <span>{product.rating1}</span>
            <span>({product.rating2})</span>
        </div> 
        </div>
          <p>{product.text}</p>
    </div>
     <Form />
  </div>
)
}
export default OrderDetail;