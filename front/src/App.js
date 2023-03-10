import React, { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import CartContent from './components/CartContent/CartContent'
import ProductsPage from './components/Products/ProductsPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DataProvider from './components/Context/DataContext'

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------

  return (
<>
 <div style={{ textAlign: 'center' }}>
      <h1> Prueba tecnica front Ecomsur 2021</h1>
   
<DataProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<CartContent />} />
    <Route path="/detail" element={<ProductsPage />} />
  </Routes>
  </BrowserRouter>
</DataProvider>

      {/* Check to see if express server is running correctly */}
      <h5>{response}</h5>
    </div>
</>


  
  )
}

export default App
