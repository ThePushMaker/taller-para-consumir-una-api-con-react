import { ProductCard } from './components/ProductCard/ProductCard.jsx';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // setProducts es la funcion que vamos a utilizar para poder cambiar el valor de nuestros productos
  const[products, setProducts] = useState([])
  
  return (
    <div className="App">
     <h1>Lista de productos</h1>
      <ProductCard 
        title="Producto prueba"
        price="12.50"
      />
    </div>
  );
}

export default App;
