import { useState } from "react";
import {add} from "./data";
import axios from "axios";


const initialForm = {
  name:"",
  productName:"",
  size: "",
  thickness: "",
  add: [],
  orderNote: "",
}
function Form() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    let newValue;
    if (type==="checkbox"){
      const oldValues = form[name];
      if(oldValues.includes(value)) {
        newValue=oldValues.filter((item)=> item!==value)
      } else {
        newValue=[...oldValues,value]
      }
    } else {
      newValue = value
    }
     setForm({ ...form, [name]: newValue });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios.post("https://reqres.in/api/pizza ", form, {
      headers: {"x-api-key": "pub_bb6e669884e959413fd1a4f9d6750f26f9a75699353266f035534be0c29b5f3b"}
    })
    .then((res)=>console.log("Sipariş Özeti", res.data))
    .catch((err)=>console.log(err))
  }
    return (
    <form onSubmit={handleSubmit}>
        <div className="pizza-size">
            <div className="size">
                <h4>Boyut Seç</h4>
                  <label>
                    <input 
                      type="radio" 
                      name="size" 
                      value="Küçük" 
                      onChange={handleChange}
                    /> Küçük
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="size" 
                      value="Orta"
                      onChange={handleChange}
                    /> Orta
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="size" 
                      value="Büyük" 
                      onChange={handleChange}
                    /> Büyük
                  </label>
            </div>
            <div className="thickness">
                  <h4>Hamur Seç</h4>
                  <select name="thickness" onChange={handleChange}>
                      <option value="" disabled>Hamur Kalınlığı Seçiniz</option>
                      <option value="Kalın" >Kalın</option>
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
                value={item}
                onChange={handleChange}
                />{item}
                </label> )}
          </div>
        </div>
        <div className="name-input">
          <label  htmlFor='name'>Ad Soyad</label>
          <input  type="text" 
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Ad Soyad Giriniz"></input>
        </div>
        <div className="product-input">
          <label  htmlFor='productName'>Ürün</label>
          <input  type="text"
                  id="productName"
                  name="productName"
                  onChange={handleChange}
                  placeholder="Ürün Adı Giriniz"></input>
        </div>
        <div className="text-input">
          <label htmlFor="orderNote">Sipariş Notu</label>
          <textarea id="orderNote" 
                    name="orderNote" 
                    onChange={handleChange}
                    placeholder="Siparişine eklemek istediğin bir not var mı?" rows="2"></textarea>
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
                <button type="submit" >Sipariş Ver</button>
            </div>
        </div>
    </form>)
}
export default Form;