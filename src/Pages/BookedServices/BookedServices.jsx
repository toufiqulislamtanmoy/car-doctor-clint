import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BokingRow from './BokingRow';

const BookedServices = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setbookings] = useState([]);
    const url = `http://localhost:5000/bookings/?email=${user.email}`;
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setbookings(data))
    }, [])

    const handelDelete = id => {
        console.log("delete success fully", id);
        const proced = confirm('Are you sure you cancel your Appointment');
        if (proced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            }).then(res => res.json()).then(data => {
                if(data.deletedCount>0){
                    alert("DS")
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setbookings(remaining);
                }
            })
        }
    }

    const handelConfrim = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
                method: "PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify({status:"confrimred"})
            }).then(res => res.json()).then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status='confrimred';
                    const newBookings = [updated,...remaining];
                    setbookings(newBookings);
                }
            })
    }
    return (
        <div>
            <h2 className='text-5xl font-semibold'>Your Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service & Date</th>
                            <th>Book Info</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking =>
                                <BokingRow
                                    key={booking._id} booking={booking}
                                    handelDelete={handelDelete}
                                    handelConfrim={handelConfrim}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedServices;