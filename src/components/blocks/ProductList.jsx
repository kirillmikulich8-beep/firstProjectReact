import ProductCard from "./ProductCard"

function ProductList() {

  const cards=[
    {id:"1",title:"Ноутбук",price:"1000$",description:"Description1"},
    {id:"2",title:"Телефон",price:"300$",description:"Description2"},
    {id:"3",title:"Компьютер",price:"1200$",description:"Description3"},
    {id:"4",title:"Клавиатура",price:"50$",description:"Description4"},
    {id:"5",title:"Наушники",price:"60$",description:"Description5"},
    {id:"6",title:"Мышка",price:"70$",description:"Description6"}
    
  ]
    return(

        <div className='flex flex-wrap gap-5 mt-15'>
      {cards.map((card)=>(
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