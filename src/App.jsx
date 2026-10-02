import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import Pdf from './Pdf'
import Ecommerce from './Ecommerce'
import Socialmedia from './Socialmedia'
import QuoteGenerator from './QuoteGenerator'

/* AnimatedRoutes must be inside Router to use useLocation */
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='pdf/' element={<Pdf />} />
        <Route path='ecommerce/' element={<Ecommerce />} />
        <Route path='socialmedia/' element={<Socialmedia />} />
        <Route path='quotegenerator/' element={<QuoteGenerator />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <div>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App
