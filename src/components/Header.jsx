import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';

function Header () {
    return(<div className="hero">
            <h2>Teknolojik Yemekler</h2>
            <div className="hero-content">
                <p>fırsatı kaçırma</p>
            <h1>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h1>
            <Link data-cy="order-link-1" to="/order/1">ACIKTIM</Link>
            </div>
        </div>)
}
export default Header;