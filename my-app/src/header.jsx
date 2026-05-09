function Header({isVisible, setIsVisible}){

    return(
        <header className="flex justify-between items-center p-4">
            <h1>Интернет-магазин</h1>
            
            <div>
                {isVisible === true ? (
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="!bg-black !text-white px-4 py-2 rounded"
                    >
                        Выйти
                    </button>
                ) : (
                    <button 
                        onClick={() => setIsVisible(true)}
                        className="!bg-black !text-white px-4 py-2 rounded"
                    >
                        Войти
                    </button>
                )}
            </div>
        </header>
    )
}

export default Header