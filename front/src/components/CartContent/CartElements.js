import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import CartItemCounter from "./CartItemCounter"

import "./CartContent.css"

import {Link} from "react-router-dom"

const CartElements = () => {

const {cart, setCart, detailProduct} = useContext(dataContext)

const deleteProduct = (_id) => {
  const foundId = cart.find((element) => element._id === _id);

  const newCart = cart.filter((element) => {
    return element !== foundId
  });
  setCart(newCart)
}

  return cart.map((product) =>{

    return(
      <div className="cartContent" key={product._id}>
          <p className="cartBrand">{product.brand}</p>
          <Link className="cartDetail" to={"/detail"} onClick={() =>detailProduct(product) }><p className="cartName">{product.name}</p></Link>
          <CartItemCounter product={product}  />
          <p className="cartPrice">${(product.price * product.quanty).toFixed(2) }</p>

          <p className="cartButton" onClick={()=> deleteProduct(product._id)}>❌
          <span className="tooltipText">Eliminar producto</span>
          </p>
      </div>
    )
  })
}

export default CartElements

