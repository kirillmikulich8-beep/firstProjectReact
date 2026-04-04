import { useState } from "react"

function SearchBlock({items,setSearchFilter}) {
    const [query,setQuery] = useState("test")


    function handleChange(event){
        const value = event.target.value
        const listFiltered = items.filter(item=>
                item.name.toLowerCase().includes(value.toLowerCase())
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

export default SearchBlock