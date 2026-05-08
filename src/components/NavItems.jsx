function NavItems (props) {
  const {img, text, navClass} = props;
 return (
   <div className={`nav-items${navClass ? navClass : ""}`}>
            <a className={`nav-link${navClass ? navClass : ""}`} href="">
              <img src={img} alt={text}/>
              <span>{text}</span>
            </a>
    </div>
 )
}
export default NavItems;