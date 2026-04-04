import { useState } from "react"
import { useEffect } from "react"
import SearchBlock from "./SearchBlock"



function MyList() {
    
    const [items,setItems] = useState([])
    const [filteredItems,setFilteredItems] = useState([])
    const [search,setSearch] = useState("")
    



    useEffect(()=>{
        console.log("Загрузилась страница MyList")
        setTimeout(()=>{
            const data=
        [{id:"1",name:"один",price:213},
        {id:"2",name:"два",price:413},
        {id:"3",name:"три",price:725}]
        setItems(data)
        setFilteredItems(data)
        },3000)


        
    },[])
    

    



    function removeItem(id) {
        const updateList = items.filter((item)=> item.id !=id)

        setItems(updateList)
        console.log("Удалён",updateList)
    }



    if(items.length==0){
        return <h3>Загрузка...</h3>
    }

    return(
        <div className="flex flex-col gap-10 w-50">
            <h2>Состояние useEffect</h2>
            <SearchBlock items={items} setSearchFilter={setFilteredItems}/>
            {filteredItems.map((item)=>(
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