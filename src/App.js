import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Errors from './pages/Error'
function App () {
  return (
    <BrowserRouter>
      <nav> Our navbar</nav>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Errors />} />
      </Routes>

      <footer>Our footer</footer>
    </BrowserRouter>
  )
}

export default App
