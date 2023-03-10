import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
// import { useState } from "react";



const CartItemCounter = ({product}) => {

const {cart, setCart, buyProducts} = useContext(dataContext);

const decrese = ()=>{ 
  const productRepeat = cart.find((item) => item._id === product._id)
  productRepeat.quanty !== 1 &&   setCart(cart.map((item) => item._id === product._id ? {...product, quanty: productRepeat.quanty - 1  } : item))
}

  return (
<>
   <button className="counterButton" onClick={decrese} disabled={product.quanty <= 1}>➖</button>
    <p>{product.quanty}</p>
   <button className="counterButton"  onClick={() => buyProducts(product)} disabled={product.quanty >= product.countInStock}>➕</button>
</>
  )
}

export default CartItemCounter