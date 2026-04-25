import { useState } from "react"
import ProductCount from "../ui/ProductCount"

function ProductCard({id, title, price, description}) {

    const [isShaded, setIsShaded] = useState(false)
    const [count, setCount] = useState(1) // 👈 ДОБАВЬ ЭТУ СТРОКУ - создаем state для счетчика
    
    function addToBasket(idProduct, count) {
        console.log(idProduct, count)
    }
    
    return(
        <div className="bg-white shadow-md rounded-lg p-4 max-w-sm w-full text-center">
            <button onClick={() => setIsShaded(!isShaded)}>
                {isShaded ? "❤️" : "🤍"}
            </button>
            
            {/* Иконка */}
            <div className="text-4xl mb-2">👛</div>
            
            {/* Заголовок */}
            <h3 className="text-lg font-semibold mb-2">Заголовок:{title}</h3>
            
            {/* Цена */}
            <p className="text-gray-800 mb-4 font-bold text-xl">Цена:{price}</p>
            
            {/* Краткое описание */}
            <p className="text-gray-600 mb-4">Описание:{description}</p>
            
            {/* 👇 ТЕПЕРЬ count и setCount определены */}
            <ProductCount count={count} setCount={setCount} />
            
            {/* Кнопка */}
            <button 
                className="bg-red-600 text-black font-semibold text-lg py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
                onClick={() => addToBasket(id, count)}  
            >
                Купить
            </button>
        </div>
    )
}

export default ProductCard