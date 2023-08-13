
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductCard } from "../ProductCard/ProductCard";
import './ProductDetail.css'

export const ProductDetail = () => {
  let { id } = useParams(); 

  const [product, setProduct] = useState([]);
  
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>{
      setProduct(result.data);
    })
  }, []);

  return(
    <div className='productDetail'>
      <h1>Información del producto con  id {id}</h1>
        {product && 
          <ProductCard 
            id={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            category={product.category}
          />
        }
    </div>    
  );
}
