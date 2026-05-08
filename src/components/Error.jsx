import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Error.css"
import Footer from './Footer';
function Error() {
    return (
    <>
    <div className="error">
            <h2>Teknolojik Yemekler</h2>
            <h1>HATA OLUŞTU<br/>LÜTFEN <br/>TEKRAR DENEYİNİZ</h1>
            <Link to="/">ANA SAYFA</Link>
    </div>
    <Footer/>
    </>
)}
export default Error;