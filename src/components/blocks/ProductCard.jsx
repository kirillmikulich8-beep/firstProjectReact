import { useState } from "react"
import { Link } from "react-router-dom"
import ProductCount from "../ui/ProductCount"

function ProductCard({id, title, price, description, isAdmin, onDelete}) {

    const [isShaded, setIsShaded] = useState(false)
    const [count, setCount] = useState(1)
    
    function addToBasket(idProduct, count) {
        console.log(idProduct, count)
    }
    
    return(
        <div className="bg-white shadow-md rounded-lg p-4 max-w-sm w-full text-center flex flex-col">
            {/* Сердечко показываем только если не в админке */}
            {!isAdmin && (
                <button onClick={() => setIsShaded(!isShaded)}>
                    {isShaded ? "❤️" : "🤍"}
                </button>
            )}
            
            {/* Иконка */}
            <div className="text-4xl mb-2">👛</div>
            
            {/* Ссылка на товар - работает везде */}
            <Link to={'/product/' + id} className="no-underline text-inherit">
                <h3 className="text-lg font-semibold mb-2">
                    Заголовок:{title}
                </h3>
            </Link>
            
            {/* Цена */}
            <p className="text-gray-800 mb-4 font-bold text-xl">Цена:{price}</p>
            
            {/* Краткое описание */}
            <p className="text-gray-600 mb-4">Описание:{description}</p>
            
            {/* Счетчик и кнопку "Купить" показываем только если не в админке */}
            {!isAdmin && (
                <>
                    {/* Счетчик */}
                    <ProductCount count={count} setCount={setCount} />
                    
                    {/* Кнопка */}
                    <button 
                        className="bg-red-600 text-black font-semibold text-lg py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
                        onClick={() => addToBasket(id, count)}  
                    >
                        Купить
                    </button>
                </>
            )}

            {/* Кнопка удаления для админки */}
            {isAdmin && onDelete && (
                <button
                    onClick={() => onDelete(id)}
                    className="mt-4 bg-red-600 text-black px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition duration-200"
                >
                    Удалить
                </button>
            )}
        </div>
    )
}

export default ProductCard