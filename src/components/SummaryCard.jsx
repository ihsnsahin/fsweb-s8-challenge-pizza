import './SummaryCard.css'
function SummaryCard (props) {
const {addPrice,totalPrice, customCard=""} = props;
return ( <div className={`summary-card${customCard}`}>
                <h4>Sipariş Toplamı</h4>
                <div className={`summary-row${customCard}`}>
                    <span>Seçimler</span>
                    <span>{addPrice.toFixed(2)}₺</span>
                </div>
                <div className={`summary-total${customCard}`}>
                    <span>Toplam</span>
                    <span>{totalPrice.toFixed(2)}₺</span>
                </div>
            </div>)
}
export default SummaryCard;