import './Order.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import OrderDetail from './OrderDetail';

function Order(props) {
    const {handleFinalOrder, modal, modalToggle} = props;
   
    return (
    <>
    <div className='order-header-container'>
            <div className='order-header-content'>
                <h2> Teknolojik Yemekler</h2>
            </div>
    </div>
    <OrderDetail handleFinalOrder={handleFinalOrder} modal={modal} modalToggle={modalToggle}/>
    </>
    )
}
export default Order;
