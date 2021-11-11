import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Navigation/Header';
import { useForm } from "react-hook-form";
import './Register.css';
import img from '../../images/image.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Alert, Button, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, } = useForm(); //watch, errors
    const { user, registerUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();



    const onSubmit = (data,e)=> {
        registerUser(data.email, data.password, location, history);
        // alert('Register Successfully')
        e.preventDefault();
        console.log(data);
    };
    return (
        <div>
            <Header></Header>
            <div className="bag-img d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-white fw-bold">Register</h1>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6 ">
                        <div className="package-box border border rounded shadow-lg d-flex justify-content-center align-items-center">
                            <div className="login-form">
                                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className="text-center my-2 fw-bold text-warning">Register Fast</h4>
                                    <br />
                                    <input
                                        className="input-field cost py-2 m-2"
                                        name="name"
                                        placeholder="Name"
                                        {...register("name", { required: true })}
                                    />
                                    <br />
                                    <input
                                        className="input-field cost py-2 m-2"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        {...register("email", { required: true })}
                                    />
                                    <br />
                                    <input
                                        className="input-field cost py-2 m-2"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        {...register("password", { required: true })}
                                    />
                                    <br />
                                    <input className="submit-btn ms-2" type="submit" value="Register" />
                                    <br />
                                    <NavLink to="/login">
                                        <Button variant="text">Already Registered? Please Login</Button>
                                    </NavLink>
                                </form>}
                                {isLoading && <Spinner animation="border" variant="secondary" />}
                                {user?.email && 
                                    <Alert variant="success">User Create Successfully</Alert>}
                                {authError && <Alert variant="danger">{authError}</Alert>} 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100" src={img} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;