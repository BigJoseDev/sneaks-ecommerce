import './App.css'
import Navbar from './Components/Navbar/Navbar'
import 'typeface-racing-sans-one';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/products' element={<Product/>}/>
        {/* <Route path = '/about' element={<About/>}/> */}
        {/* <Route path = '/contact' element={<Contact/>}/> */}
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>



      </BrowserRouter>
    </div>
  )
}

export default App
