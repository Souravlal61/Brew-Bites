
import { useState } from 'react'
import Flowfooter from './component/footer'
import Flownavbar from './component/navbar'
import About from './pages/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrer from './pages/carrer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Flownavbar></Flownavbar>
   <Routes>
   
   <Route path="/about" element={<About/>}></Route>
   <Route path="/carrer" element={<Carrer/>}></Route>
   </Routes>
   </BrowserRouter>
   <Flowfooter></Flowfooter></>
  )
}

export default App
