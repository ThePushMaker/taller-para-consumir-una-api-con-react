import { Link } from "react-router-dom";
import './ProductCard.css'

export const ProductCard = ( {id, title, price, image, description, category} ) => {
  return(
    <div>
      <h2 className="productInfo">
        <Link to={`/product/${id}`}>
          {title}
        </Link>
      </h2>

      <img className="productImage" src={image} alt="imagen de producto"/>
      {description && <p>{description}</p>}
      {category && <p>{category}</p>}
      <p>$ {price}</p>
    </div>
  );
}
