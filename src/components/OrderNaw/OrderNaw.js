import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import { useForm } from "react-hook-form";
import Header from '../Navigation/Header';
import './OrderNaw.css';
import useAuth from '../../Hooks/useAuth';

const OrderNaw = () => {
    const { user } = useAuth();
    const { productsId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://gentle-inlet-34373.herokuapp.com/singleProducts/${productsId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = (data, e) => {
        fetch('https://gentle-inlet-34373.herokuapp.com/addOrders', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data));
        alert('order confirm')
        e.preventDefault();
        console.log(data);
    }

    return (
        <div>
            <Header></Header>
            <div className="bag-img d-flex justify-content-center align-items-center">
                <div>
                    <h1 style={{ color: "#FFF224", fontWeight: "bold" }}>Order Naw</h1>
                </div>
            </div>
            {/* main part  */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row row-cols-1 row-cols-md-1 g-4 mar">
                            <div className="col">
                                <div className="card h-100 shadow-lg">
                                    <img src={product?.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{product?.name}</h5>
                                        <h6 className="card-title">Price: <span style={{ color: "tomato", fontWeight: "bold" }}>${product?.price}</span></h6>
                                        <p className="card-text">{product?.description}</p>
                                    </div>
                                    <div className="card-footer">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* form section  */}

                    <div className="col-md-6">
                        {/* form  */}
                        <div>
                            <div className="d-flex justify-content-center align-items-center mb-5">
                                <div className="package-box border border d-flex justify-content-center align-items-center">
                                    <div className="login-form ">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <h3 className="text-center mt-3">
                                                <span style={{color: '#6C757D', fontWeight: 'bold'}}>Please Order Now</span>
                                            </h3>
                                            <br />
                                            <input
                                                {...register("name")}
                                                placeholder="Name"
                                                defaultValue={user?.displayName}
                                                className="input-field cost py-2 m-2"
                                            />
                                            <br />

                                            <input
                                                {...register("email", { required: true })}
                                                placeholder="Email"
                                                defaultValue={user?.email}
                                                className="input-field cost py-2 m-2"
                                            />
                                            <br />
                                            <input
                                                {...register("order", { required: true })}
                                                placeholder="Order product"
                                                defaultValue={product?.name}
                                                className="input-field cost py-2 m-2"
                                            />
                                            <br />
                                            <input
                                                {...register("date", { required: true })}
                                                placeholder="date"
                                                defaultValue={new Date()}
                                                className="input-field cost py-2 m-2"
                                            />
                                            <br />
                                            {errors.exampleRequired && <span>This field is required</span>}

                                            <input type="submit" value="Order Now" className="btn btn-secondary w-100 ms-2 fw-bold my-4" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* form  */}
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div >
    );
};

export default OrderNaw;