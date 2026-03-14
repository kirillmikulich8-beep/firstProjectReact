import { useState } from "react"


function MyList() {
    
    const [items,setItems] = useState([
        {id:"1",name:"один",price:213},
        {id:"2",name:"два",price:413},
        {id:"3",name:"три",price:725}
    ])


    

    function removeItem(id) {
        const updateList = items.filter((item)=> item.id !=id)

        setItems(updateList)
        console.log("Удалён",updateList)
    }


    return(
        <div className="flex flex-col gap-10 w-50">
            {items.map((item)=>(
                <div key={item["id"]}  className="border border-rose-500">
                    <h2 >{item["name"]}</h2>
                    <p>{item["price"]}$</p>
                    <button onClick={()=>removeItem(item["id"])}>Удалить</button>
                </div>
            ))}
        </div>
    )
}
export default MyList