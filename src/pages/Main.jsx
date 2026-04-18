import { useState } from "react"
import Header from "../Header"
import ProductList from "../components/blocks/ProductList"

function Main() {
    const [isVisible, setIsVisible] = useState(false)

    return(
        <div>
            <Header isVisible={isVisible} setIsVisible={setIsVisible} />
            <h2>Главная страница</h2>
            <ProductList />
            
           
        </div>
    )
}

export default Main