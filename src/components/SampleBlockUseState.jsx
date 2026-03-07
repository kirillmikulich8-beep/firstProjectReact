import { useState } from "react"

function SampleBlockUseState () {
    const [active,setActive] = useState(false)
    return(
         
        <div className="p-4">
            <button onClick={()=>{setActive(!active)}}>
                Переключить
            </button>
            <p>{active.toString()}</p>
        </div>
    )
}

export default SampleBlockUseState