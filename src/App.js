import './App.css';
import './components/ProductCard/ProductCard.jsx'
import { ProductCard } from './components/ProductCard/ProductCard.jsx';

function App() {
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
