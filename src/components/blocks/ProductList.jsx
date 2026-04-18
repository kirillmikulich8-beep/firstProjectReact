import ProductCard from "./ProductCard"
import { useEffect } from "react"
import SearchBlock2 from "../SearchBlock2"
import { useState } from "react"
import PriceFilter from "../PriceFilter"

function ProductList() {
    const [cards, setCards] = useState([])
    const [filteredCards, setFilteredCards] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const cards = [
                { id: "1", title: "Ноутбук", price: 1000, description: "Description1" },
                { id: "2", title: "Телефон", price: 300, description: "Description2" },
                { id: "3", title: "Компьютер", price: 1200, description: "Description3" },
                { id: "4", title: "Клавиатура", price: 50, description: "Description4" },
                { id: "5", title: "Наушники", price: 60, description: "Description5" },
                { id: "6", title: "Мышка", price: 70, description: "Description6" }
            ]
            setCards(cards)
            setFilteredCards(cards)
        }, 3000)
    }, [])

    // Функция для применения всех фильтров
    const applyFilters = (searchFiltered, priceFiltered) => {
        if (searchFiltered && priceFiltered) {
            // Если есть оба фильтра - комбинируем
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
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList