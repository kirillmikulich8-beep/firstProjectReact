import Header from "../Header"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ProductPage() {
    const params = useParams()
    const [productData, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://69ec8be9af4ff533142b1365.mockapi.io/productlist/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Товар с id=" + params.id + ":", data)
                setProductData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Ошибка:", error)
                setLoading(false)
            })
    }, [params.id])

    if (loading) {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl text-gray-500">Загрузка товара...</div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <Header/>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    
                    {productData && productData.title ? (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="md:flex">
                                {/* Левая колонка - изображение */}
                                <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
                                    <div className="text-9xl">
                                        {productData.image || "🛍️"}
                                    </div>
                                </div>
                                
                                {/* Правая колонка - информация */}
                                <div className="md:w-1/2 p-8">
                                    <div className="mb-4">
                                        <span className="text-sm text-gray-500 uppercase tracking-wide">
                                            Артикул: #{productData.id}
                                        </span>
                                    </div>
                                    
                                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                        {productData.title}
                                    </h1>
                                    
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold text-red-600">
                                                {productData.price} ₽
                                            </span>
                                            {productData.oldPrice && (
                                                <span className="text-lg text-gray-400 line-through">
                                                    {productData.oldPrice} ₽
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Описание товара */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                            Описание:
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {productData.description || "Описание отсутствует"}
                                        </p>
                                    </div>
                                    
                                    {/* Характеристики */}
                                    {productData.features && (
                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                                Характеристики:
                                            </h3>
                                            <ul className="space-y-2">
                                                {Object.entries(productData.features).map(([key, value]) => (
                                                    <li key={key} className="flex justify-between border-b py-2">
                                                        <span className="text-gray-600">{key}:</span>
                                                        <span className="font-medium">{value}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {/* Кнопки */}
                                    <div className="flex gap-4 mt-8">
                                        <button className="flex-1 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition font-semibold shadow-lg">
                                            Купить сейчас
                                        </button>
                                        <button className="px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-red-600 hover:text-red-600 transition font-semibold">
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl shadow">
                            <div className="text-6xl mb-4">🔍</div>
                            <h2 className="text-2xl font-bold text-gray-700 mb-2">Товар не найден</h2>
                            <p className="text-gray-500">Товар с ID {params.id} не существует</p>
                            <button 
                                onClick={() => window.location.href = '/'}
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Вернуться в каталог
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductPage