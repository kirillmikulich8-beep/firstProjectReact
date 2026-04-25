import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import SearchBlock2 from "../SearchBlock2"
import PriceFilter from "../PriceFilter"

function ProductList() {
    const [cards, setCards] = useState([])
    const [filteredCards, setFilteredCards] = useState([])

    useEffect(() => {
        console.log("Страница загрузилась")
        
        fetch("https://69ec8be9af4ff533142b1365.mockapi.io/productlist")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setCards(data)
                setFilteredCards(data)
            })
    }, [])

    
    const applyFilters = (searchFiltered, priceFiltered) => {
        if (searchFiltered && priceFiltered) {
            
            const combined = searchFiltered.filter(card => 
                priceFiltered.some(pCard => pCard.id === card.id)
            )
            setFilteredCards(combined)
        } else if (searchFiltered) {
            setFilteredCards(searchFiltered)
        } else if (priceFiltered) {
            setFilteredCards(priceFiltered)
        }
    }

    return (
        <div>
            
            <div className="flex gap-5 mb-5">
                <SearchBlock2 cards={cards} setSearchFilter={(results) => {
                    applyFilters(results, null)
                }} />
                <PriceFilter cards={cards} setSearchFilter={(results) => {
                    applyFilters(null, results)
                }} />
            </div>
            
            <div className='flex flex-wrap gap-5 mt-15'>
                {filteredCards.map((card) => (
                    <ProductCard 
                        key={card.id}
                        title={card.title}
                        price={card.price}
                        description={card.description}
                        id={card.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList