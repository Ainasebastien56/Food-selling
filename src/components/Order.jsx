import React, {useState,useEffect} from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export function Order(){
const instance = axios.create({
    baseURL :'http://localhost:3000'
})
    const [activeTab,  setActiveTab] =useState('breakfast')
    const [categories, setCategories] = useState([])
    const [filter, setFilter ] = useState([])
    const [orders, setOrders] = useState([])
   

    const addOrder = (order)=>{
        if(orders.includes(order)){
            return false
        }
        else{ 
            setOrders([...orders, order])
            const ordersStr = JSON.stringify([...orders, order])
            localStorage.setItem('ordersId',ordersStr);
        }
       
    }
  

    const updateActive = (item) =>{
        setActiveTab(item)
 
         
    }
    useEffect(()=>{
        if (activeTab !==''){
            async function getProduct(){
                await  instance.get('/products/getProduct'+ activeTab).then((response)=>{
                     setCategories(response.data)
                     setFilter(categories.slice())
                  
                }).catch((error)=>{
                 console.log(error)
                })
           }
           getProduct()
        }

        
         
          
    },[activeTab])

   

    function ShowFood(){

        return(
            <>
         

           
                {categories.map((food, index)=>{
                    return(
                        <div className="card" key={index}>
                               <img src={food.imagesrc} alt="" />
                               <h3>{food.name_food}</h3>
                               <p>{food.price} Ar</p>
                              <button onClick={()=>{addOrder(food.id_food)}}>Add <FontAwesomeIcon icon="basket-shopping"/></button> 
                        </div>
                    )
                })}
                 
            </>
        )
    }
    return(
        <div id="order" className="order">
                <h1>Our Product</h1>

                <h3>Our Specility Cuisine</h3>

                <div className="tabs">
                    <a href="#breakfast" className={activeTab === 'breakfast'? 'active-tab' : ''} onClick={()=>{updateActive('breakfast')}}>Breakfast  </a>
                    <a href="#launch"  className={activeTab === 'lunch'? 'active-tab' : ''}  onClick={()=>{updateActive('lunch')}}>Lunch</a>
                    <a href="#dinner"   className={activeTab === 'dinner'? 'active-tab' : ''} onClick={()=>{updateActive('dinner')}}>Dinner</a>
                    <a href="#shake"   className={activeTab === 'shake'? 'active-tab' : ''} onClick={()=>{updateActive('shake')}}>Shake</a>
                    <a href="#dessert"  className={activeTab === 'dessert'? 'active-tab' : ''} onClick={()=>{updateActive('dessert')}}>Dessert</a>
                </div>

        
                <div className=" tabs-contents">
                    <ShowFood/>
                </div>

              
        </div>
    )
}