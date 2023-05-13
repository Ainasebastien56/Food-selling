import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Footer } from "../components/Footer"


export function Panier(){
    const instance = axios.create({
        baseURL :'http://localhost:3000'
    })

    const [orders, setOrders] = useState([])
   

    
    useEffect(()=>{
        const ordersId = localStorage.getItem('ordersId')
         const ids = JSON.parse(ordersId)
            if(ordersId){
                    
                async function getOrders(){
                        
                    await instance.get(`/products/getOrders/${ids}`).then((response)=>{
                       
                                    setOrders(response.data)
                                    
                            }).catch((err)=>{
                                console.log(err)
                            })
                   
                }   
                getOrders()
              
            }

            
            
    },[localStorage.getItem('ordersId')])

   function ShowOrders(){

    return(
        <>
            {orders.map((product)=>{

                return(
                    <div className="cart" key={product.id_food}>
                            <img src={product.imagesrc} alt="image" />
                            <h3>{product.name_food}</h3>
                          <p><FontAwesomeIcon icon ="plus-square"/> {product.price}<FontAwesomeIcon icon ="minus-square"/></p> 
                          <button>valider</button>
                            

                    </div>
                )
            })}
        </>
    )
   } 
return(
    <div className="panier">
        <nav>
            <NavLink  to="/">Home</NavLink>
        </nav>

    <div className="contenu-panier">

    
      {localStorage.getItem('ordersId')? <h1>votre panier</h1> : <h1>votre panier est vide</h1> }  
        <div className="carts">
        <ShowOrders/>
        </div>
    </div>    
 
    </div>

) 



    
}