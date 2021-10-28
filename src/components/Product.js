import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
// import products from '../../../db';

export default function Product({ product }) {
	return (
		<div className='text-start'>
			<div>
				<Link className='ecd' to={`product/${product._id}`}>
					<div className='text-center'>
						<img src={product.image} className='img-fluid' alt={product.name} />
					</div>
					<h1>{product.name}</h1>
					<StarRatings
						rating={product.rating}
						starRatedColor='orange'
						numberOfStars={5}
						readonly={true}
						starDimension='15px'
						starSpacing='2px'
					/>

					<h1>Price: {product.price}</h1>
				</Link>
			</div>
		</div>
	);
}
