import './App.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { Box } from '@mui/system'

function App() {
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState()

  const products = [
    { name: "iPhone", price: "2500 BYN", description: "Хороший телефон" },
    { name: "Samsung", price: "1700 BYN", description: "Хороший, но подешевле" },
    { name: "Xiaomi", price: "1000 BYN", description: "Хороший, но ещё дешевле" }
  ]

  return (
    <div style={{ padding: 20 }}>
      <h1>Магазин📱</h1>
      
      <div style={{ display: 'flex', gap: 10 }}>
        {products.map((item, i) => (
          <Card key={i} style={{ width: 200 }}> {/* можно и sx */}
            <CardContent>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <Button onClick={() => {
                setProduct(item)
                setOpen(true)
              }}>
                О товаре
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ bgcolor: 'white', p: 3, width: 250, margin: '100px auto' }}>
          {product && (
            <>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <Button onClick={() => setOpen(false)}>Закрыть</Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  )
}

export default App
