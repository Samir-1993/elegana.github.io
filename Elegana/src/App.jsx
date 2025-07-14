import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sustainability } from './pages/Sustainability'
import { Shop } from './pages/Shop'
import { Collection } from './pages/Collection'
import { Contact } from './pages/Contact'
import { Footer } from './Components/Footer/Footer'
import { ShopDetails } from './pages/ShopDetails'
import { Cart } from './pages/Cart'
import { FAQs } from './pages/FAQs'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsAndConditions } from './pages/TermsAndConditions'
import { ReturnsAndRefunds } from './pages/ReturnsAndRefunds'
import { ThankYou } from './pages/ThankYou'
import { OrderSuccess } from './pages/OrderSuccess'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sustainability' element={<Sustainability />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Collection' element={<Collection />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/ShopDetails' element={<ShopDetails />} />
          <Route path="/shopdetails/:id" element={<ShopDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/ReturnsAndRefunds" element={<ReturnsAndRefunds />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/OrderSuccess" element={<OrderSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
