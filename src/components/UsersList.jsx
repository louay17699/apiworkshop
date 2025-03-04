import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function UsersList() {
    const [users,setusers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setusers(res.data)
        )
    },[])
    console.log(users);
    
  return (
    <div>   
<table>
    

    <tr>
        <th>name</th>
        <th>email</th>
        <th>phone</th>
    </tr>

   {users.map(users=>
  <tr>
    <th>{users.name}</th>
    <td>{users.email}</td>
    <td>{users.phone}</td>
 
  </tr>
   )}

</table>

    </div>
  )
}

export default UsersList