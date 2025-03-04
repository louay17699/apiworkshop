import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Herosection from './Herosection';

function ProductList() {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(res=>setproducts(res.data)
        )
    },[])
    
    
  return (
    <>
     <div style={{height:"600px"}}><Herosection/></div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"start",gap:"10px",flexWrap:"wrap"}}>
       
        {products.map(product=>
        <Link to={"/prod/"+product.id}>
                <Card key={product.id} style={{ width: '18rem' }}>
                <Card.Img style={{height:"400px"}} variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title style={{fontSize:"1rem",height:"100px"}}>{product.title}</Card.Title>
                  <Card.Text style={{height:"100px",overflowY:"auto"}}>
                   {product.description}
                  </Card.Text>
                  <Card.Text>
                   price:{product.price}$
                  </Card.Text>
                  <Card.Text>
                   rate:{product.rating.rate}
                  </Card.Text>
                  
                </Card.Body>
              </Card>
              </Link>
        )}
    </div>
    </>
  )
}

export default ProductList