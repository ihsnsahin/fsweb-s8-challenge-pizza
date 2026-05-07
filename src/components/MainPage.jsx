import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './MainPage.css';

function MainPage() {

    return (
        <div className="hero">
            <h2>Teknolojik Yemekler</h2>
            <h1>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h1>
            <Link to="/order/3">ACIKTIM</Link>
        </div>
    )
}
export default MainPage;