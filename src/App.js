import { Products } from './components/Products/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ProductDetail } from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className='.app'>
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
