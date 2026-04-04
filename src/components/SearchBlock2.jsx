import { useState } from "react"

function SearchBlock2({cards,setSearchFilter}) {
    const [query,setQuery] = useState("")


    function handleChange(event){
        const value = event.target.value
        const listFiltered = cards.filter(card=>
                card.title.toLowerCase().includes(value.toLowerCase())
            ) 
            
            
        setSearchFilter(listFiltered)   
        setQuery(value)



        console.log(value)
    }

    return(
        <input type="text"
        value={query}
        placeholder="Поиск..." 
        onChange={handleChange}
        />
    )
}

export default SearchBlock2