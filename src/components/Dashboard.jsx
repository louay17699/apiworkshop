import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div style={{display:"flex",width:"100%",height:"100%"}}>
        <div style={{width:"20%",backgroundColor:"black",color:"white"}}>
            <Link>products</Link>
            <Link>orders</Link>
            <Link to={"/admin"}>users</Link>
        </div>
        <div style={{width:"80%"}}>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard