import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import Navbar from "../Navbar/Navbar"
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"


const CartContent = () => {

const {cart} = useContext(dataContext)

  return (
    <>
    <Navbar />
    {cart.length > 0 ?(
      <>
        <CartElements />
        <CartTotal />
      </>
    ) : (
      <h2>El Carro esta vacio</h2>
    ) }
    </>
  )
}

export default CartContent