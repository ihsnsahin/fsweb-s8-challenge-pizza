import './Order.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import OrderDetail from './OrderDetail';

function Order() {
   
    return (
    <>
    <div className='order-header-container'>
            <div className='order-header-content'>
                <h2> Teknolojik Yemekler</h2>
            </div>
    </div>
    <div className='order-header-link'>
        <div className='order-header-content'>
        <Link to="/">Ana Sayfa</Link>
        <span> - </span>
        <span>Sipariş Oluştur</span>
        </div>
    </div>
    <OrderDetail/>
    </>
    )
}
export default Order;
