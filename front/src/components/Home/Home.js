import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"
import Products from "../Products/Products"


const Home = () => {
  return (
 <>
<Navbar />
 <Banner />
 <div className="productCardContainer">
  <Products />
 </div>
 </>
  )
}

export default Home