import React, { useEffect } from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Filter from '../components/Filter';
export default function Homescreen() {
	const getallproductsstate = useSelector(
		(state) => state.getAllProductsReducer
	);

	const { loading, error, products } = getallproductsstate;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllProducts());
	}, []);
	return (
		<div>
			<Filter />
			<div className='row justify-content-center'>
				{loading ? (
					<Loader />
				) : error ? (
					<Error error='Something went wrong' />
				) : (
					products.map((product) => {
						return (
							<div className='col-md-3 m-3 card p-2 ' key={product._id}>
								<Product product={product} />
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}
