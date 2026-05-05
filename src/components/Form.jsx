import { useEffect, useState } from "react";
import {add} from "./data";
import axios from "axios";
import { product } from "./data";


const initialForm = {
  name:"",
  productName:"",
  size: "",
  thickness: "",
  add: [],
  orderNote: "",
  quantity: 1,
  totalPrice: product.fiyat,
}
function Form() {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    productName: false,
    size: false,
    thickness: false,
    add: false,
    orderNote: false,
  })
  
  const addPrice = form.add.length*product.ek;
  const totalPrice = form.quantity*product.fiyat + addPrice;

  const handleQuantityChange = (amount) => {
    if(form.quantity + amount >= 1) {
      setForm({...form, quantity: form.quantity + amount})
    }
  }

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    let newValue;
    if (type==="checkbox"){
      const oldValues = form[name];
      if(oldValues.includes(value)) {
        newValue=oldValues.filter((item)=> item!==value)
      } else {
        newValue=[...oldValues, value]
      }
    } else {
      newValue = value
    }
     setForm({ ...form, [name]: newValue });

    if (name === 'name') {
      if (value.trim().length>=3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    };
     if (name === 'productName') {
      if (newValue.trim().length>=3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    };
    if (name === 'size') {
      if (newValue) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    };
    if (name === 'thickness') {
      if (newValue) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    };
    if (name === 'add') {
      if ( newValue.length>=4 && newValue.length<=10) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    };

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const finalForm = {...form, totalPrice:totalPrice};
    setForm(finalForm);
    if(!isValid) return;
    axios.post("https://reqres.in/api/pizza ", form, {
      headers: {"x-api-key": "pub_bb6e669884e959413fd1a4f9d6750f26f9a75699353266f035534be0c29b5f3b"}
    })
    .then((res)=>console.log("Sipariş Özeti", res.data))
    .catch((err)=>console.log(err))
  };
   useEffect(() => {
    if (
      form.name.trim().length>=3 && 
      form.productName.trim().length>=3 &&
      form.size && 
      form.thickness &&
      form.add.length>=4 && 
      form.add.length<=10
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
   }, [form])
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
                      checked={form.size==="Küçük"}
                      onChange={handleChange}
                    /> Küçük
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="size" 
                      value="Orta"
                     checked={form.size==="Orta"}
                      onChange={handleChange}
                    /> Orta
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="size" 
                      value="Büyük"
                     checked={form.size==="Büyük"}
                      onChange={handleChange}
                    /> Büyük
                  </label>
            </div>
            <div className="thickness">
                  <h4>Hamur Seç</h4>
                  <select name="thickness" value={form.thickness} onChange={handleChange}>
                      <option value="" disabled>Hamur Kalınlığı Seçiniz</option>
                      <option value="Kalın" >Kalın</option>
                      <option value="İnce" >İnce</option>
                  </select>
                      </div>
                      </div>
        <div className="pizza-additional">
          <h4>Ek Malzemeler</h4>
          <p>En Fazla 10 malzeme seçebilirsiniz. {product.ek}₺</p>
          <div className="checkbox">
              {add.map((item)=> <label key={item}>
              <input 
                type="checkbox" 
                name= "add"
                value={item}
                checked={form.add.includes(item)}
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
                  value={form.name}
                  placeholder="Ad Soyad Giriniz"></input>
        </div>
        <div className="product-input">
          <label  htmlFor='productName'>Ürün</label>
          <input  type="text"
                  id="productName"
                  name="productName"
                  onChange={handleChange}
                  value={form.productName}
                  placeholder="Ürün Adı Giriniz"></input>
        </div>
        <div className="text-input">
          <label htmlFor="orderNote">Sipariş Notu</label>
          <textarea id="orderNote" 
                    name="orderNote"
                    value={form.orderNote}
                    onChange={handleChange}
                    placeholder="Siparişine eklemek istediğin bir not var mı?" rows="2"></textarea>
        </div>
        <div className="order-footer">
            <div className="counter">
              <button type="button" onClick={()=>handleQuantityChange(-1)} disabled={form.quantity <= 1}>-</button>
              <span>{form.quantity}</span>
              <button type="button" onClick={()=>handleQuantityChange(1)}>+</button>
            </div>
            <div className="summary-card">
                <h4>Sipariş Toplamı</h4>
                <div className="summarry-row">
                <span>Seçimler</span>
                <span>{addPrice.toFixed(2)}₺</span>
            </div>
            <div className="summarry-total">
                <span>Toplam</span>
                <span>{totalPrice.toFixed(2)}₺</span>
                </div>
                <button type="submit" disabled={!isValid}>Sipariş Ver</button>
            </div>
        </div>
    </form>)
}
export default Form;