import { useContext } from "react"
import { dataContext } from "../Context/DataContext"


const CartTotal = () => {

const {cart} = useContext(dataContext);

const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0)

  return (
    <div>
      <h3 className="cartTotal">Total a pagar:  <span>&nbsp;${total.toFixed(2)}</span></h3>
    </div>
  )
}

export default CartTotal