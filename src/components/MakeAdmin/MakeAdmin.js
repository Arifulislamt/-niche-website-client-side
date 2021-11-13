import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, } = useForm(); //watch, errors
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch('https://gentle-inlet-34373.herokuapp.com/makeAdmin', {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(data);
    };
    return (
        <div>
            <h1 className="text-center fw-bold text-warning my-5">Admin</h1>
            <div className="package-box border border rounded shadow-lg d-flex justify-content-center align-items-center">
                <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h4 className="text-center my-2 fw-bold text-secondary">Make Admin</h4>
                        <br />
                        <input
                            className="input-field cost py-2 m-2"
                            name="email"
                            defaultValue={user.email}
                            placeholder="Email"
                            type="email"
                            {...register("email", { required: true })}
                        />
                        <br />
                        <input className="submit-btn ms-2 btn btn-secondary w-100 mt-2" type="submit" value="Make Admin" />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;