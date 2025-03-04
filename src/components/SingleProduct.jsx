import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const [product,setproduct]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/"+id).then(res=>setproduct(res.data)
        )
    },[])
   
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt="" />
        
    </div>
  )
}

export default SingleProduct