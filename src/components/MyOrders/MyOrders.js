import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Table } from 'react-bootstrap';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [controls, setControls] = useState(false);


    useEffect(()=> {
        fetch(`https://gentle-inlet-34373.herokuapp.com/myOrder/${user?.email}`)
       .then(res => res.json())
       .then(data => setOrders(data));
    },[controls]);

    const handleDeletes = (id) => {
        fetch(`https://gentle-inlet-34373.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount) {
                setControls(!controls);
                alert('Are you sure?');
      
              }
              else {
                setControls(false);
              }
            });
          console.log(id);
        
    }

    return (
        <div className="container">
        <h1 className="text-warning fw-bold text-center mt-5">MY Orders</h1>
           <div>
             <h3>MY Orders: {orders?.length}</h3>
             <Table striped bordered hover>
               <thead>
                 <tr>
                   <th className="text-warning bg-dark">#</th>
                   <th className="text-warning bg-dark">Name</th>
                   <th className="text-warning bg-dark">Email</th>
                   <th className="text-warning bg-dark">Order Product</th>
                   <th className="text-warning bg-dark">Date</th>
                   <th className="text-warning bg-dark">Action</th>
                 </tr>
               </thead>
               {orders?.map((pd, index) => (
                 <tbody>
                   <tr>
                     <td>{index}</td>
                     <td>{pd?.name}</td>
                     <td>{pd?.email}</td>
                     <td>{pd?.order}</td>
                     <td>{pd?.date}</td>
                     <button onClick={() => handleDeletes(pd._id)}  className="btn bg-warning m-2 p-2">Delete</button>
                   </tr>
                 </tbody>
               ))}
             </Table>
           </div>
       </div>
    );
};

export default MyOrders;