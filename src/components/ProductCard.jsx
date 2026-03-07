import ProductCount from "./ProductCount"

function ProductCard({title,price,description}) {

    return(
        <div className="bg-white shadow-md rounded-lg p-4 max-w-sm w-full text-center">
        {/* Иконка */}
        <div className="text-4xl mb-2">👛</div>
        
        {/* Заголовок */}
        <h3 className="text-lg font-semibold mb-2">Заголовок:{title}</h3>
        
        {/* Цена - пример с разными значениями */}
        <p className="text-gray-800 mb-4 font-bold text-xl">Цена:{price}</p>
        
        
        {/* Краткое описание */}
        <p className="text-gray-600 mb-4">Описание:{description}</p>
        <ProductCount/>
        {/* Кнопка */}
        <button className="bg-red-600 text-black font-semibold text-lg py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out">
          Купить
        </button>
      </div>
    )
}

export default ProductCard