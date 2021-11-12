import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Navigation/Header';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";


import './Dashboard.css';
// import MyBookings from '../../MyBookings/MyBookings';
import Review from '../../Review/Review';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import AddProducts from '../../AddProducts/AddProducts';
import ManageOrders from '../../ManageOrders/ManageOrders';
import { Button} from 'react-bootstrap';
import Payment from '../../Payment/Payment';
import MyOrders from '../../MyOrders/MyOrders';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Header></Header>
            <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
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
                <li className="dashboard-menu mt-2">Orders list</li>

                {/* {isAdmi && ( */}
                  <Link  style={{textDecoration: 'none'}} to={`${url}/addProducts`}>
                    <li className="dashboard-menu">Add Products</li>
                  </Link>
                {/* )} */}
                <Link style={{textDecoration: 'none'}} to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to={`${url}/manageOrders`}>
                  <li className="dashboard-menu">Manage Orders</li>
                </Link>
                <Button className="m-4 btn-secondary">LogOut</Button>
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