import './Order.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import OrderDetail from './OrderDetail';

function Order() {
   
    return (
    <div className='container'>
    <header>
        <div className='content'>
        <h2>
            Teknolojik Yemekler
        </h2>
        <div>
            <Link to="/">Ana Sayfa</Link>
            <span>-</span>
            <span>Sipariş Oluştur</span>
        </div>
        </div>
    </header>
    <OrderDetail/>
    </div>
    )
}
export default Order;
