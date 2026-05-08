import { useState } from "react";
import "./Success.css"
import SummaryCard from "./SummaryCard";
import Footer from './Footer';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function Success (props) {
    const {orderInfo} = props;
    return (
    <>
    <div className="success">
            <h2>Teknolojik Yemekler</h2>
            <p id="lezzet">lezzetin yolda</p>
            <h1>SİPARİŞ ALINDI</h1>
            <div className="pizza-data">
                <h3>{orderInfo.productName}</h3>
                <div className="selections">
                    <p>Boyut: <strong>{orderInfo.size}</strong></p>
                    <p>Hamur: <strong>{orderInfo.thickness}</strong></p>
                    <p>Ekler: <strong>{orderInfo.add.length > 0 ? orderInfo.add.join(", "):"Seçim yapılmadı."}</strong></p>
                </div>
            </div>
            <SummaryCard addPrice={orderInfo.selectPrice} totalPrice={orderInfo.totalPrice} customCard="-success"/>
    </div>
    <Footer/>
    </>
)}
export default Success;