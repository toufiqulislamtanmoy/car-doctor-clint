import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServicees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services').then(res => res.json()).then(data => setServicees(data));
    }, [])
    return (
        <div className='mb-12'>
            <div className='text-center space-y-[20px]'>
                <h2 className='text-red-600 text-2xl'>Services</h2>
                <h3 className='text-5xl font-semibold'>Our Service Area</h3>
                <p className='lg:w-2/5 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;