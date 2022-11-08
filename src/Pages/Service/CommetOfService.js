import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const CommetOfService = ({ id }) => {
    const { updateData } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    //console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(err => console.log(err.message))
    }, [id, updateData])

    return (
        <div className='w-9/12 grid grid-cols-2 gap-4 mx-auto'>
            {
                reviews.length > 0 ?
                    <>
                        {
                            reviews.map(review =>
                                <Reviews
                                    key={review._id}
                                    review={review}
                                ></Reviews>)
                        }

                    </>
                    :
                    <>
                        <h1>No review added yet!</h1>
                    </>

            }
        </div>
    );
};

export default CommetOfService;