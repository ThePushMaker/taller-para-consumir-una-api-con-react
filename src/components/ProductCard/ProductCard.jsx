import './ProductCard.css';

export const ProductCard = ( {title, price, image} ) => {
  return(
    <div>
      <a href="" className="productInfo">{title}</a>
      <img className="productImage" src={image} alt="imagen de producto"/>
      <p>{price}</p>
    </div>
  );
}
