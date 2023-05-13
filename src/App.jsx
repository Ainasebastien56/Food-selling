import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Panier } from './pages/Panier'
import  './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faArrowRight, faBasketShopping, faPlusSquare, faMinusSquare, faUser} from '@fortawesome/free-solid-svg-icons'
import { Form } from './components/Form'
import { Home } from './pages/Home'


library.add(

  faCartShopping,
  faArrowRight,
  faBasketShopping,
  faPlusSquare, 
  faMinusSquare,
  faUser
  
)

function App() {


  return (
    <div className="App">
     
     <BrowserRouter>
 
        <Routes>
          <Route exact path='/panier' Component={Panier}/>
          <Route exact path='/form' Component={Form}/>
          <Route exact path='/' Component={Home}/>
        </Routes>
                             
     </BrowserRouter>
    </div>
  )
}

export default App
