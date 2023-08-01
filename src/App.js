import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Errors from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProducts from './pages/SharedProducts'

function App () {
  const [user, setUser] = useState()
  return (
    <BrowserRouter>
      <nav> Our navbar</nav>

      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProducts />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user}></Dashboard>
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<Errors />} />
        </Route>
      </Routes>

      <footer>Our footer</footer>
    </BrowserRouter>
  )
}

export default App
