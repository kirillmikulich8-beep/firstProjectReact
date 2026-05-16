import Header from "../Header"
import { useState } from "react"

function Auth() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        if(!email.includes("@")) {
            setError("Введите корректный email")
            return
        }

        if(password.length < 6) {
            setError("Введите корректный пароль")
            return
        }

        console.log("Форма отправлена")
    }

    return(
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <div className="flex flex-col items-center justify-center px-4 py-12">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Авторизация</h1>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <input 
                                type="text"
                                placeholder="Введите email"
                                value={email}
                                onChange={(event)=>setEmail(event.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                            />
                        </div>

                        <div className="flex gap-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Введите пароль"
                                value={password}
                                onChange={(event)=>setPassword(event.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition duration-200"
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm bg-red-50 p-2 rounded-lg">
                                {error}
                            </p>
                        )}

                        <button 
                            type="submit"
                            className="bg-black text-black font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02]"
                        >
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth