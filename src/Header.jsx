import { Link } from "react-router-dom"

function Header({isVisible, setIsVisible}){

    return(
        <header className="flex justify-between items-center p-4">
            <h1>Интернет-магазин</h1>
            
            <div className="flex gap-3">
                <Link to={"/admin"}>
                    <button className="!bg-gray-600 !text-white px-4 py-2 rounded hover:!bg-gray-700 transition duration-200">
                        Админка
                    </button>
                </Link>

                <Link to={"/login"}>
                    {isVisible === true ? (
                        <button 
                            onClick={() => setIsVisible(false)}
                            className="!bg-gray-600 !text-white px-4 py-2 rounded hover:!bg-gray-700 transition duration-200"
                        >
                            Выйти
                        </button> 
                    ) : (
                        <button 
                            onClick={() => setIsVisible(true)}
                            className="!bg-gray-600 !text-white px-4 py-2 rounded hover:!bg-gray-700 transition duration-200"
                        >
                            Войти
                        </button> 
                    )} 
                </Link>
            </div>
        </header>
    )
}

export default Header

