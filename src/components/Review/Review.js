import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = (data,e) => {
        fetch('https://gentle-inlet-34373.herokuapp.com/addReview',{
            method: "POST",
            headers: {"content-type": "application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
        e.preventDefault();
        console.log(data);
    }
    return (
        <div>
        <div>
        <h1 className="mt-5 text-center text-warning fw-bold ">Review Please</h1>
            <div className=" w-50 m-auto mt-5 shadow-lg p-5">
                <div className="">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="mt-5 text-center text-secondary">Thanks For Your Compliment</h2>
                            <input
                                {...register("name", { required: true })}
                                placeholder="Name"
                                defaultValue={user.displayName}
                                className="p-2 m-2 w-100 input-field"
                            />
                            <input
                                {...register("email", { required: true })}
                                placeholder="Email"
                                defaultValue={user?.email}
                                className="p-2 m-2 w-100 input-field"
                            />
                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100 input-field"
                            />
                               <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100 input-field"
                            />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Comment"
                                className="btn btn-secondary w-100 ms-2"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Review;