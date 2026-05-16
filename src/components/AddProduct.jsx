import { useState, useEffect } from "react"
import Header from "../Header"
import ProductCard from "./blocks/ProductCard"

function AddProduct() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        fetch("https://69ec8be9af4ff533142b1365.mockapi.io/productlist")
            .then((res) => res.json())
            .then((data) => {
                console.log("Загруженные товары:", data)
                setProducts(data)
            })
            .catch((error) => console.error("Ошибка загрузки:", error))
    }

    function handleSubmit(event) {
        event.preventDefault()

        if(!title.trim()) {
            setError("Введите название товара")
            return
        }

        if(!price || price <= 0) {
            setError("Введите корректную цену")
            return
        }

        if(!description.trim()) {
            setError("Введите описание товара")
            return
        }

        const newProduct = {
            title: title,
            price: price,
            description: description,
            image: image || "👛",
            createdAt: new Date().toISOString()
        }

        console.log("Данные нового товара:", newProduct)
        
        setTitle('')
        setPrice('')
        setDescription('')
        setImage('')
        setError('')
    }

    const deleteProduct = (id) => {
        console.log("Кнопка удаления нажата. ID товара:", id)
    }

    return(
        <div className="min-h-screen bg-gray-100">
            <Header />
            
            <div className="flex flex-col items-center justify-center px-4 py-8">
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Добавление товара</h1>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <input 
                                type="text"
                                placeholder="Введите название товара"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 text-lg"
                            />
                        </div>

                        <div>
                            <input 
                                type="text"
                                placeholder="Введите цену"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 text-lg"
                            />
                        </div>

                        <div>
                            <textarea 
                                placeholder="Введите описание товара"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                rows="6"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 resize-none text-lg"
                            />
                        </div>

                        <div>
                            <input 
                                type="text"
                                placeholder="Ссылка на изображение (необязательно)"
                                value={image}
                                onChange={(event) => setImage(event.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 text-lg"
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                                {error}
                            </p>
                        )}

                        <div className="flex gap-3 mt-4">
                            <button 
                                type="submit"
                                className="flex-1 bg-black text-black font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] text-lg"
                            >
                                Добавить товар
                            </button>
                            
                            <button 
                                type="button"
                                onClick={() => {
                                    setTitle('')
                                    setPrice('')
                                    setDescription('')
                                    setImage('')
                                    setError('')
                                }}
                                className="flex-1 bg-gray-500 text-black font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] text-lg"
                            >
                                Очистить форму
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Все товары в магазине</h2>
                <div className='flex flex-wrap gap-5 justify-center'>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard 
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                isAdmin={true}
                                onDelete={deleteProduct}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">Нет доступных товаров</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddProduct