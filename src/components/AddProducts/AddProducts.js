import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";


const AddProducts = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = (data,e) => {

        fetch('https://gentle-inlet-34373.herokuapp.com/addProducts',{
            method: "POST",
            headers: {"content-type": "application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        e.preventDefault();
        // console.log(data);
    }
    return (
        <div>
            <div>
                <h1 className="mt-5 text-center text-warning fw-bold ">Please Add Products</h1>
                <div className=" w-50 m-auto mt-5 shadow-lg p-5">
                    <div className=" ">
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="mt-5 text-center text-secondary ">Add Products</h1>
                                <input
                                    {...register("name")}
                                    placeholder="Name"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <input
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Add Product"
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

export default AddProducts;