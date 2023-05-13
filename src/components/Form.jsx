import React, {useState} from "react"
import axios from "axios"



export function Form(){
    const  instance = axios.create({
        baseURL : 'http://localhost:3000'
    })

    const [name_food, setName] = useState('')
    const [price, setPrice] = useState('')
    const [categorie, setCategorie ] = useState('')
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState(' ')
    
    
     const saveNamefood = (e)=>{
        setName(e.target.value)
             }
     const savePrice = (e)=>{
        setPrice(e.target.value)
     }
     const saveCategorie = (e)=>{
        setCategorie(e.target.value)
     }
     const saveImage= (e)=>{
       setFile( e.target.files[0])
       setFilename(e.target.files[0].name)
     }
    
     const formData = new FormData()
    
     formData.append("name_food", name_food)
     formData.append("price", price)
     formData.append("categorie", categorie)
     formData.append("image", file)
     formData.append("imageName", filename)

     const handleSubmit = (e)=>{
        
        e.preventDefault()       
        async  function sendData(){
           await instance.post('/products/addproduct',formData).then((response)=>{
            setName('')
            setPrice('')
            setCategorie('')
            setFile('')
            setFilename('')
           
                console.log(response.data.message)
            }).catch((err)=>{
                console.log(err)
            })
        }
        sendData()
       
     }
    return(
<div className="form">

                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="field">
                                <input type="text" name="name_food" placeholder="nom du produit" value={name_food} onChange={saveNamefood} />
                        </div>
                        <div className="field">
                                <input type="number" name="price" placeholder="prix en Ar" value={price} onChange={savePrice} />
                        </div>
                        <div className="field">
                            <select name="categorie" placeholder="categorie"  onChange={saveCategorie}>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="dessert">Dessert</option>
                                <option value="shake">Shake</option>
                            </select>
                        </div>
                        <div className="field">
                                <input type="file" name="image" accept="image/*" onChange={saveImage}/>
                        </div>

                        <button>Send</button>

                    </form>
        </div>
    )
}