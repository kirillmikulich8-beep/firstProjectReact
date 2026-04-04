import Header from "../Header"
import ProductList from "../components/blocks/ProductList"
import { useState } from "react"
import ProductCard from "../components/blocks/ProductCard"
function Main() {
    const[isShaded,setShaded]= useState(true)
    return(
        <div>
            <Header/>
            <h2>Главная страница</h2>
            <ProductList />
            
            
        </div>
    )
}
export default Main