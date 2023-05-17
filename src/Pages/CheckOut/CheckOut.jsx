import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { img, title, _id, price} = service;
    const { user } = useContext(AuthContext);
    const handelCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value; 
        const email= form.email.value;
        const date= form.date.value;
        const orderInfo={
            customerName: name,
            email,
            date,
            service:title,
            service_id:_id,
            price,
            img
        }
        form.reset();
        console.log(orderInfo);
        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data =>console.log(data));
    }
    return (
        <div>
            <h2>Check Out {title}</h2>
            <div className='flex items-center content-center h-[100vh]'>
                <div className="hero bg-base-200 rounded-2xl">
                    <div className="card-body w-[80%]">
                        <form onSubmit={handelCheckOut}>
                            <h3 className='text-3xl text-center'>
                                <span className='font-bold'>
                                    {title}
                                </span>
                            </h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Name" defaultValue={user?.name} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" className="input input-bordered" name='date' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="Email" className="input input-bordered" defaultValue={user?.email}/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Paid Amount</span>
                                    </label>
                                    <input type="text" placeholder="Paid Amount" className="input input-bordered" name='Amount' defaultValue={'$ ' + price} />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Check Out" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;