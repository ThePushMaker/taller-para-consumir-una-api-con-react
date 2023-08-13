import { ProductCard } from './components/ProductCard/ProductCard.jsx';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // setProducts es la funcion que vamos a utilizar para poder cambiar el valor de nuestros productos
  const[products, setProducts] = useState([])
  
  useEffect( ()=> {
    axios.get('https://fakestoreapi.com/products').then((result)=>{
      setProducts(result.data);
      // console.log(products)
    })
  }, []);

  return (
    <div className="App">
      <h1>Lista de productos</h1>
      {products && products.map((product)=>{
        return(
          <ProductCard 
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default App;
