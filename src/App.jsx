import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css'
import Home from './Home'
import Quiz from './Quiz'
import Ecommerce from './Ecommerce'
import Socialmedia from './Socialmedia'
import QuoteGenerator from './QuoteGenerator'
function App() {

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='quiz/' element={<Quiz/>}/>
        <Route path='ecommerce/' element={<Ecommerce/>}/>
        <Route path='socialmedia/' element={<Socialmedia/>}/>
        <Route path='quotegenerator/' element={<QuoteGenerator/>}/>




      </Routes>
    </Router>

  )
}

export default App
