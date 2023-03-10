import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import {Link} from "react-router-dom"
import "./Products.css"

const Products = () => {

const {data, buyProducts, detailProduct} = useContext(dataContext);

return(
  data.map((product) =>{
return(
  <div className="card" key={product._id}>
    <img src={`http://localhost:5000${product.image}`} alt="" />
    <div className="cardData">
    <p className="cardBrand">{product.brand}</p>
    <p className="cardName">{product.name}</p>
    <p className="cardPrice">${product.price}</p>
    <p className="cardRatio">Puntuación: {product.rating}</p>
    <button className="cardButton" id="botoncomprar" onClick={() => buyProducts(product)}  disabled={product.quanty >= product.countInStock} >Lo quiero</button>

    <Link to={"/detail"} onClick={() =>detailProduct(product) }>Ver detalle</Link>
    </div>
  </div>
)


  })
)
  
}

export default Products;