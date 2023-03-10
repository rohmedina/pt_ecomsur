import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import Navbar from "../Navbar/Navbar"


import "./ProductsPage.css"


const ProductsPage = () => {

const {detail, buyProducts} = useContext(dataContext);



return(
  detail.map((product) => {
      return (
      <>
      <Navbar />
   <div className="productContainer" key={product._id}>
    <img src={`http://localhost:5000${product.image}`} alt="" />

     <div className="productData">
        <div className="productData_pri">
          <p className="productBrand">{product.brand}</p>
          <p className="productName">{product.name}</p>
        </div>

        <div className="productData_sec">
          <div className="productData_review">
            <p className="productRatio">Puntuación: {product.rating}</p>
             <p className="productReview">({product.numReviews})
             <span className="tooltip">Ver comentarios</span>
             </p>
        </div>
        <div className="productData_tri">
          <p className="productPrice">${product.price}</p>
          <button className="productButton" onClick={() => buyProducts(product)} >Lo quiero</button>
        </div>
      </div>
    </div>
   </div>

    </>
  )
  })

)
}

export default ProductsPage