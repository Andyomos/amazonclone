import React from 'react';
import './Products.css';
import { useStateValue } from '../services/StateProvider/StateProvider';

const Products = ({ id, title, image, price, rating }) => {
     const [, dispatch] = useStateValue();
    
    const addToBasket = () => {
        // Add item to basket

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            },
        })

       
    }

    return (
        <div className="product" >
            <div className="product__info" key={id}>
                <p>{title}</p>
                <p className="product__price">
                    <small><sup>CDN$</sup></small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {
                         Array(rating).fill().map((_) => (<p ><span role="img" aria-label="Rating star imoji" >⭐</span></p>))
                    }
                </div>
            </div >
            <img  src={image} alt="Amazon fire stick" />
            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Products
