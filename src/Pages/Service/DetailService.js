import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CommetOfService from './CommetOfService';
import ServiceReview from './ServiceReview';

const DetailService = () => {
    const detailService = useLoaderData();
    const { _id, title, description } = detailService[0]
    return (
        <div>
            {/* Service Detail Section */}
            <div className='w-9/12 mx-auto'>
                <h1 className='text-center'>{title}</h1>
                <p>{description}</p>
            </div>

            {/* All Reviews about the Service */}
            <div className='my-10'>
                <CommetOfService id={_id}></CommetOfService>
            </div>

            {/* Review Input Section */}
            <div className='w-9/12 mx-auto my-10'>
                <ServiceReview id={_id}></ServiceReview>
            </div>
        </div>
    );
};

export default DetailService;