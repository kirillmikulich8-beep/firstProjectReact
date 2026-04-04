import { useState } from "react"
import CounterView from "../CounterView"
import CounterButtons from "../CounterButtons"
import { useEffect } from "react"


function Counter () {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("Значение count = ",count)
    }, [count])


    return(
        <div className="p-4">
            <h2>Общий счётчик</h2>
            <CounterView
            count={count}
            />
            <CounterButtons
            count={count}
            setCount={setCount}
            />
        </div>
    )
}

export default Counter