import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Navigation/Header';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";


import './Dashboard.css';
import Review from '../../Review/Review';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import AddProducts from '../../AddProducts/AddProducts';
import ManageOrders from '../../ManageOrders/ManageOrders';
import { Button} from 'react-bootstrap';
import Payment from '../../Payment/Payment';
import MyOrders from '../../MyOrders/MyOrders';
import useAuth from '../../../Hooks/useAuth';
import ManageProducts from '../../ManageProducts/ManageProducts';

const Dashboard = () => {
    const {user,logout} = useAuth();
    let { path, url } = useRouteMatch();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=> {
      fetch(`https://gentle-inlet-34373.herokuapp.com/checkAdmin/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        if(data[0]?.role === "admin"){
          setIsAdmin(true);
        }
        else{
          setIsAdmin(false);
        }
      });
    },[user?.email]);
    console.log(isAdmin);

    return (
        <div>
            <Header></Header>
            <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5 className="text-center fw-bold text-warning pt-5">Dashboard</h5>
              <Link style={{textDecoration: 'none'}} to={`${url}`}>
                <li className="dashboard-menu mt-5">Book</li>
              </Link>

              <Link style={{textDecoration: 'none'}} to={`${url}/myOrders`}>
                <li className="dashboard-menu mt-2">My Orders</li>
              </Link>

              <Link style={{textDecoration: 'none'}} to={`${url}/review`}>
                <li className="dashboard-menu mt-2">Review</li>
              </Link>

              <Link style={{textDecoration: 'none'}} to={`${url}/payment`}>
                <li className="dashboard-menu mt-2">Payment</li>
              </Link>
              <div className="admin-dashboard">
                {isAdmin &&(
                 <div>
                    <Link  style={{textDecoration: 'none'}} to={`${url}/addProducts`}>
                    <li className="dashboard-menu">Add Products</li>
                  </Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/manageOrders`}>
                  <li className="dashboard-menu">Manage Orders</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/manageProducts`}>
                  <li className="dashboard-menu">Manage Products</li>
                </Link>
                 </div>)} 
                <Button onClick={logout} className="m-4 btn-secondary">LogOut</Button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route exact path={`${path}/myOrders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addProducts`}>
                <AddProducts></AddProducts>
              </Route>
              <Route exact path={`${path}/manageOrders`}>
                <ManageOrders></ManageOrders>
              </Route>
              <Route exact path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;