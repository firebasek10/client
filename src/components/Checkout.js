import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
export default function Checkout({ amount }) {
	const dispatch = useDispatch();
	const orderstate = useSelector((state) => state.placeOrderReducer);
	const { loading, success, error } = orderstate;
	function tokenHandler(token) {
		// console.log(token);
		dispatch(placeOrder(token, amount));
	}
	function validate() {
		if (!localStorage.getItem('currentUser')) {
			window.location.href = '/login';
		}
	}

	return (
		<div>
			{loading && <Loader />}
			{success && <Success success='Your order placed Successfully' />}
			{error && <Error error='Something went Wrong' />}
			<StripeCheckout
				token={tokenHandler}
				amount={amount * 100}
				shippingAddress
				currency='INR'
				stripeKey='pk_test_51JcOZCSAU12GMiTmkTjAief8T3uU1UiirsPj1gjdCtlIVrb623TkQlr3O0MI4owKnBkcVQAAyHX2zOA1wnzDdd3J00Jbs3PidI'
			>
				<button className='btn' onClick={validate}>
					PAY NOW
				</button>
			</StripeCheckout>
		</div>
	);
}
