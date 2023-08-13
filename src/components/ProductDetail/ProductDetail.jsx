
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetail = () => {
  let { id } = useParams(); 

  const [product, setProduct] = useState([]);
  
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>{
      setProduct(result);
    })
  }, []);

  return(
    <div>
      <h1>Información del producto con id {id}</h1>

    </div>    
  );
}
