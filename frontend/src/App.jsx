import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navigation from './assets/components/Navigation'
import Home from './pages/Home'
import Products from './assets/components/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import AppFooter from './assets/components/Footer'


function App() {

  return (
    <>
      <Navigation />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <AppFooter />
    </>
  )
}

export default App
