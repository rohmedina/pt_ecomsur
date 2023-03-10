import { useContext } from "react";
import {dataContext} from "../Context/DataContext"
import TotalItems from "../CartContent/TotalItems"
import "./Navbar.css"

import {Link} from "react-router-dom"



const Navbar = () => {

  const {cart} = useContext(dataContext)

  return (
   <div className="navContainer">
    <div className="navbar">
      <Link className="navbarLogo" to={"/"}>Logo</Link>
      <Link className="navbarCarrito" to={"/cart"}>🛒
      {cart.length > 0 ? <TotalItems /> : null}
      </Link>
    </div>
   </div>
  )
}

export default Navbar