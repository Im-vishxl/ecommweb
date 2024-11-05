import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import ProductDetails from './components/Productdetails'
import PaymentMethods from './components/PaymentMethod'
import OrderSuccess from './components/OrderSuccess'
import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductDetails />} /> 
          <Route path="/payment" element={<PaymentMethods />} /> 
          <Route path="/order" element={<OrderSuccess />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
