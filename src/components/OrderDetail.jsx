
import Form from './Form';
import './OrderDetail.css';
function OrderDetail(){
return ( 
  <div className="order-detail-wrapper">
    <div className="pizza-detail">
    <h3>Position Absolute Acı Pizza</h3>
    <div >
        <span id="price">85.50₺</span>
        <div className="rating">
            <span>4.9</span>
            <span>(200)</span>
        </div> 
        </div>
          <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
    </div>
     <Form />
  </div>
)
}
export default OrderDetail;