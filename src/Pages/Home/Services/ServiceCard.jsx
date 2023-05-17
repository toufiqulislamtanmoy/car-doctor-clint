import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const {_id, price, title, img } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="text-red-600 text-xl">
                            <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;