import { useEffect, useState } from "react";
import {add} from "./data";
import axios from "axios";
import { FormFeedback, FormGroup, Input, Label} from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SummaryCard from "./SummaryCard";
import './Form.css'


const initialForm = {
  name:"",
  productName: "",
  size: "",
  thickness: "",
  add: [],
  orderNote: "",
  quantity: 1,
  selectPrice:null,
  totalPrice: null,
}
function Form(props) {
  const {product, handleFinalOrder} = props;
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
  const history= useHistory();
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
    if(!isValid) return;
    const finalForm = {
      ...form, 
      totalPrice:totalPrice,
      productName:product.isim,
      selectPrice: addPrice
    };
    axios.post("https://reqres.in/api/pizza ", finalForm, {
      headers: {"x-api-key": "pub_bb6e669884e959413fd1a4f9d6750f26f9a75699353266f035534be0c29b5f3b"}
    })
    .then((res)=>{
      console.log("Sipariş Özeti", res.data);
      handleFinalOrder(res.data);
  })
    .catch((err)=>console.log(err))
  };
   useEffect(() => {
    if (
      form.name.trim().length>=3 && 
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
            <h4>Boyut Seç <span> *</span></h4>
            <div className="formGroup-size">
              <FormGroup check>
                  <Input
                  type="radio" 
                  name="size"
                  id="Küçük"
                  value="S"
                  checked={form.size==="S"}
                  onChange={handleChange}
                  
                  />
                  {' '}
                <Label htmlFor="Küçük" data-cy="radio-S" className={`size-btn${form.size==="S"?"-active": ""}`}check>
                S
                </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                  type="radio" 
                  id="Orta"
                  name="size" 
                  value="M"
                  checked={form.size==="M"}
                  onChange={handleChange}
                  
                  />
                  {' '}
              <Label htmlFor="Orta" data-cy="radio-M" className={`size-btn${form.size==="M"?"-active": ""}`} check>
              M
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                  type="radio" 
                  name="size" 
                  id="Büyük"
                  value="L"
                  checked={form.size==="L"}
                  onChange={handleChange}
                  
                  />
                  {' '}
              <Label htmlFor="Büyük" data-cy="radio-L" className={`size-btn${form.size==="L"?"-active": ""}`} check>
              L
              </Label>
            </FormGroup>
            </div>  
            </div>
           
            <div className="thickness">
                  <h4>Hamur Seç<span> *</span></h4>
                  <select name="thickness" data-cy="dropdown" className="dropdown"value={form.thickness} onChange={handleChange}>
                      <option value=""  disabled>Hamur Kalınlığı Seçiniz</option>
                      <option value="Kalın">Kalın</option>
                      <option value="Orta(Normal)" >Orta (Normal)</option>
                      <option value="İnce">İnce</option>
                      <option value="Süper İnce">Süper İnce</option>
                  </select>
            </div>
        </div>
        <div className="pizza-additional">
          <h4>Ek Malzemeler</h4>
          <p>En Fazla 10 malzeme seçebilirsiniz. {product.ek}₺</p>
          <FormGroup className="checkbox">
              {add.map((item)=> (<Label key={item}>
              <Input
                type="checkbox" 
                name= "add"
                value={item}
                checked={form.add.includes(item)}
                onChange={handleChange}
                invalid={errors.add}
                data-cy={`checkbox-${item}`}
                />{item}
                </Label>
              ))}
            {errors.add&& <p id="error">En az 4 - En fazla 10 adet seçim yapılmalı.
    </p>}    
          </FormGroup>
        </div>
          <FormGroup className="name-input">
            <Label for="name">
             Ad Soyad
            </Label >
            <Input
                  type="text" 
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  invalid={errors.name}
                  data-cy="input-name"
                  placeholder="Ad Soyad Giriniz"
            />
            {errors.name&&<FormFeedback id="error">Ad soyad en az 3 hane olmalı
    </FormFeedback>}
            </FormGroup>
        
          <FormGroup className="text-input">
            <Label for="orderNote">
              Sipariş Notu
            </Label>
          <Input
          id="orderNote" 
          name="orderNote"
          value={form.orderNote}
          onChange={handleChange}
          invalid={errors.orderNote}
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          type="textarea"
          />
          </FormGroup>
        <div className="order-footer">
            <div className="counter">
              <button type="button" onClick={()=>handleQuantityChange(-1)} disabled={form.quantity <= 1}>-</button>
              <span>{form.quantity}</span>
              <button type="button" onClick={()=>handleQuantityChange(1)}>+</button>
            </div>
            <div className="summary">
               <SummaryCard addPrice={addPrice} totalPrice={totalPrice}/>
            <button type="submit" data-cy="input-button" disabled={!isValid}>Sipariş Ver</button>
            </div>
           
      </div>
    </form>)
}
export default Form;