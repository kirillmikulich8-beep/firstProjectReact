import { useState } from "react"

function SearchBlock2({cards, setSearchFilter}) {
    const [query, setQuery] = useState("")

    function handleChange(event){
        const value = event.target.value
        const listFiltered = cards.filter(card =>
            card.title.toLowerCase().includes(value.toLowerCase())
        ) 
        
        setSearchFilter(listFiltered)   
        setQuery(value)
        console.log(value)
    }

    function handleClear() {
        setQuery("")
        setSearchFilter(cards)
    }

    return(
        <div className="relative w-full max-w-md">
            <div className="relative">
                
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                
                
                <input 
                    type="text"
                    value={query}
                    placeholder="Поиск..."
                    onChange={handleChange}
                    className="w-full py-2.5 pl-10 pr-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
                />
                
               
                {query && (
                    <button
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                        type="button"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
}

export default SearchBlock2