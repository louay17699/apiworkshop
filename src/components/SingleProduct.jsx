import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


function SingleProduct() {
    const [product,setproduct]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/"+id).then(res=>setproduct(res.data)
        )
    },[])
   
  return (
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"100px"}}>
        
        <img style={{width:"20%"}} src={product.image} alt="" />
        <Card style={{ width: '40%' }}>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
                {product.description}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default SingleProduct