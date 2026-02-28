import ProductCard from "./ProductCard"

function ProductList() {
    return(
        <div className='flex flex-wrap gap-5 mt-15'>
      <ProductCard 
      title="Ноутбук"
      price="1000$"
      description="Description1"
      
      />
      <ProductCard 
      title="Телефон"
      price="300$"
      description="Description2"
      />
      <ProductCard 
      title="Компьютер"
      price="1200$"
      description="Description3"
      />
      <ProductCard 
      title="клавиатура"
      price="50$"
      description="Description4"
      />
      <ProductCard 
      title="Наушники"
      price="60$"
      description="Description5"
      />
      <ProductCard
      title="Ноутбук"
      price="1000$"
      description="Description6"
      />
      </div>
    )
}

export default ProductList