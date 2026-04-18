import { useState } from "react"

function PriceFilter({cards, setSearchFilter}) {
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    function applyFilters(min, max){
        let filtered = [...cards]

        if (min !== "") {
            const minNum = parseFloat(min)
            if (!isNaN(minNum)) {
                filtered = filtered.filter(card => card.price >= minNum)
            }
        }

        if (max !== "") {
            const maxNum = parseFloat(max)
            if (!isNaN(maxNum)) {
                filtered = filtered.filter(card => card.price <= maxNum)
            }
        }

        setSearchFilter(filtered)
    }

    function handleMinChange(event){
        const value = event.target.value
        setMinPrice(value)
        applyFilters(value, maxPrice)
    }

    function handleMaxChange(event){
        const value = event.target.value
        setMaxPrice(value)
        applyFilters(minPrice, value)
    }

    return(
        <div>
            <style>{`
                input[type=number]::-webkit-inner-spin-button,
                input[type=number]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                input[type=number] {
                    -moz-appearance: textfield;
                    appearance: textfield;
                }
            `}</style>
            
            <input 
                type="number"
                value={minPrice}
                placeholder="Мин. цена"
                onChange={handleMinChange}
            />
            
            <input 
                type="number"
                value={maxPrice}
                placeholder="Макс. цена"
                onChange={handleMaxChange}
            />
        </div>
    )
}

export default PriceFilter