import { useState } from "react"


function TestForm () {
    const [text,setText] = useState("Hello world")

    return(
        <div>
            <h1>Первая форма</h1>
            <input 
                type="text"
                 value={text}
                onChange={(event)=>{
                    setText(event.target.value)
                    
                }}
             />

             <p>{text}</p>
        </div>
    )
}


export default TestForm