import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const dataContext = createContext();

  const baseURL = "http://localhost:5000/api/products";



const DataProvider = ({children}) => {

  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [detail, setDetail] = useState([]);


  useEffect(()=>{
 axios(baseURL).then((response) => {setData(response.data)})
  },[]);



const buyProducts = (product) =>{

const productRepeat = cart.find((item) => item._id === product._id)

if(productRepeat){
  setCart(cart.map((item) => item._id === product._id ? {...product, quanty: productRepeat.quanty + 1  } : item))
}else (
setCart([...cart, product])
)
    
  // const limitProduct = cart.find((product) => (product.quanty + 1) >= product.countInStock )
  
  // if(limitProduct){
  //   console.log("supera el limite")

  //   const b = document.getElementById("botoncomprar")

  //   b.setAttribute("disabled","")
  // }

};

const detailProduct = (product) =>{
  setDetail([product])
}

  return (
    <dataContext.Provider value={{data, cart, setCart, buyProducts, detail, setDetail, detailProduct}}>
      {children}
    </dataContext.Provider>
  )
}

export default DataProvider