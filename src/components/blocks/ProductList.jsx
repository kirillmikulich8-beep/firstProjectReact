import ProductCard from "./ProductCard"
import { useEffect } from "react"
import SearchBlock2 from "../SearchBlock2"
import { useState } from "react"


function ProductList() {

  



  const [cards,setCards] = useState([])
    const [filteredCards,setFilteredCards] = useState([])
    const [search,setSearch] = useState("")
    



    useEffect(()=>{
        
        setTimeout(()=>{
          const cards=[
            {id:"1",title:"Ноутбук",price:"1000$",description:"Description1",},
            {id:"2",title:"Телефон",price:"300$",description:"Description2"},
            {id:"3",title:"Компьютер",price:"1200$",description:"Description3"},
            {id:"4",title:"Клавиатура",price:"50$",description:"Description4"},
            {id:"5",title:"Наушники",price:"60$",description:"Description5"},
            {id:"6",title:"Мышка",price:"70$",description:"Description6"}
            
          ]
        setCards(cards)
        setFilteredCards(cards)
        },3000)


        
    },[])
    

    



    return(
      
        <div className='flex flex-wrap gap-5 mt-15'>
          <SearchBlock2 cards={cards} setSearchFilter={setFilteredCards}/>
      {filteredCards.map((card)=>(
        
        <ProductCard 
        
        title={card.title}
        price={card.price}
        description={card.description}
        
        />
                 
                    
                    
                
            ))}
            
      </div>
    )
}

export default ProductList