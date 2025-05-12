import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css'
import Home from './Home'
import Pdf from './Pdf'
import Ecommerce from './Ecommerce'
import Socialmedia from './Socialmedia'
import QuoteGenerator from './QuoteGenerator'
function App() {

  return(
  <div>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='pdf/' element={<Pdf/>}/>
      <Route path='ecommerce/' element={<Ecommerce/>}/>
      <Route path='socialmedia/' element={<Socialmedia/>}/>
      <Route path='quotegenerator/' element={<QuoteGenerator/>}/>




    </Routes>
  </Router>
</div>
  )
}

export default App
