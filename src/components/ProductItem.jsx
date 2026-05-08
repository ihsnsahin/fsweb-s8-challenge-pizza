function ProductItem (props) {
  const {product} = props;
 return (
   <div className="product-items">
          <img src={product.src} alt=""/>
          <h3>{product.isim}</h3>
          <div className="price">
            <p>{product.rating1}</p>
            <p>({product.rating2})</p>
            <p className="bold">{product.fiyat.toFixed(2)}₺</p>
          </div>
        </div>
 )
}
export default ProductItem;