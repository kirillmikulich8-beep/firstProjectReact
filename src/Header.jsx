function Header({isVisible, setIsVisible}){

    return(
        <header className="flex justify-between items-center p-4">
            <h1>Интернет-магазин</h1>
            
            <button 
                onClick={() => setIsVisible(!isVisible)}
                className="!bg-black !text-white px-4 py-2 rounded"
            >
                {isVisible ? "выход" : "вход"}
            </button>
        </header>
    )
}

export default Header