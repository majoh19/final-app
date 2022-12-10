import React, { useState, useEffect } from 'react';
import { listRestaurants } from '../service/restaurantService';
import Swal from 'sweetalert2';

export const Directory = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try {
            Swal.fire({ allowOutsideClick: false, text: 'Loading...' });
            Swal.showLoading();
            const restaurantsFirebase = await listRestaurants();
            setRestaurants(restaurantsFirebase);
            Swal.close();
        } catch (error) {
            Swal.close();
            console.log(error);
        }
    }

    return (
        <div className="container-fluid mt-3 mb-3">
            <div className='row row-cols-1 row-cols-md-4 g-2'>
                {
                    restaurants.map(restaurant => {
                        return (
                            <div className='col' key={restaurant.id}>
                                <div className='card border-dark bg-transparent'>
                                    <img src={restaurant.image} height='320' className='card-img-top' alt='...' />
                                    <div className='card-body text-dark'>
                                        <h4 className='card-title'>{restaurant.name}</h4>
                                        <p className='card-text'>{restaurant.description}</p>
                                        <p className='card-text'>{restaurant.location}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

