
import React, {useState,useEffect} from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Nav() {

    const [activeItem, setActiveItem] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const [cartCount, setCartCount] = useState(0)

    const updateItem = function(item){
        setActiveItem(item)
    }

  
       useEffect(()=>{
            const cart = JSON.parse(localStorage.getItem('ordersId'))

            setCartCount(cart? cart.length : 0)
        
       },[localStorage.getItem('ordersId')])
  
  useEffect(()=>{
    

            const onScroll = function(){
                if(window.scrollY > 50){
                    setScrolled(true)
                }
                
                else{
                    setScrolled(false)
                }
            
            }
        window.addEventListener('scroll',onScroll)

   return()=>{
    window.removeEventListener('scroll',onScroll)
   }

       
            
  },[])
    return(
        <div id="nav" className= {scrolled === true? 'navBackground' : ''}>

            <div className="logo">
                  <img className="logoImg" src="./Miam.png" alt="logo" />
            </div>
                    
          

            <nav className="Navbar">                                                                                                            
                <a href="#" className={activeItem === 'home'? 'activeLink' : ''} onClick={()=>{updateItem('home')}}>Home</a>
                <a href="#about" className={activeItem === 'about'? 'activeLink' : ''} onClick={()=>{updateItem('about')}}>About Us</a>
                <a href="#service" className={activeItem === 'service'? 'activeLink' : ''} onClick={()=>{updateItem('service')}}>Services</a>
                <a href="#order"className={activeItem === 'order'? 'activeLink' : ''} onClick={()=>{updateItem('order')}}>Order now</a>
                <NavLink to='/panier'><FontAwesomeIcon icon="cart-shopping"/>({cartCount})</NavLink>
               <span><NavLink to='/login'>Mon compte <FontAwesomeIcon icon="user"/></NavLink></span> 
            </nav>
        </div>
    )

}