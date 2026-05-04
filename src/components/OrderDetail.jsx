
import './OrderDetail.css';
import {add} from "./data";

function OrderDetail(){
return ( 
  <div className="order-detail-wrapper">
    <form>
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
        <div className="pizza-size">
    <div className="size">
     <h4>Boyut Seç</h4>
      <label>
        <input 
          type="radio" 
          name="size" 
          value="Küçük" 
        /> Küçük
      </label>
      <label>
        <input 
          type="radio" 
          name="size" 
          value="Orta" 
        /> Orta
      </label>
      <label>
        <input 
          type="radio" 
          name="size" 
          value="Büyük" 
        /> Büyük
      </label>
      </div>
    <div className="kalınlık">
        <h4>Hamur Seç</h4>
        <select>
            <option value="" disabled>Hamur Kalınlığı</option>
            <option value="Kalın">Kalın</option>
            <option value="İnce" >İnce</option>
        </select>
    </div>
        </div>
        <div className="pizza-additional">
    <h4>Ek Malzemeler</h4>
    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
    <div className="checkbox">
      {add.map((item)=> <label key={item}>
      <input 
        type="checkbox" 
        name= "add"
        value="{item}"
      />{item}
      </label> )}
    </div>

        </div>
        <div className="name-input">
          <label htmlFor='fullName'>Ad Soyad</label>
          <input type="text" id="fullName" placeholder="Ad Soyad Yazınız"></input>
        </div>
        <div className="text-input">
          <label>Sipariş Notu</label>
          <input type="text" placeholder="Siparişine eklemek istediğin bir not var mı?"></input>
        </div>
        <div className="order-footer">
          <div className="counter">
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
          </div>
          <div className="summary-card">
          <h4>Sipariş Toplamı</h4>
            <div className="summarry-row">
              <span>Seçimler</span>
              <span>25.00₺</span>
            </div>
            <div className="summarry-total">
              <span>Toplam</span>
              <span>110.50₺</span>
            </div>
            <button type="submit">Sipariş Ver</button>
            </div>
        </div>
    </form>
  </div>
)
}
export default OrderDetail;