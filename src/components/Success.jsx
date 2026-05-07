import { useState } from "react";
import "./Success.css"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import SummaryCard from "./SummaryCard";
function Success () {
    const location = useLocation();
    const {state} = location;
    return (
    <div className="success">
            <h2>Teknolojik Yemekler</h2>
            <p id="lezzet">lezzetin yolda</p>
            <h1>SİPARİŞ ALINDI</h1>
            <div className="pizza-data">
                <h3>{state.productName}</h3>
                <div className="selections">
                    <p>Boyut: <strong>{state.size}</strong></p>
                    <p>Hamur: <strong>{state.thickness}</strong></p>
                    <p>Ekler: <strong>{state.add.length > 0 ? state.add.join(", "):"Seçim yapılmadı."}</strong></p>
                </div>
            </div>
            <SummaryCard addPrice={state.selectPrice} totalPrice={state.totalPrice} customCard="-success"/>
    </div>
)}
export default Success;