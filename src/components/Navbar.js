import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userActions';

export default function Navbar() {
	const cartReducer = useSelector((state) => state.cartReducer);
	const { cartItems } = cartReducer;

	const currentUser = JSON.parse(localStorage.getItem('currentUser'));
	const dispatch = useDispatch();

	return (
		<div>
			<nav className='navbar navbar-expand-lg '>
				<a className='navbar-brand' href='/'>
					PRESHOP
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<div className='navbar-nav ms-auto'>
						{currentUser && currentUser.isAdmin ? (
							<div className='dropdown'>
								<button
									className='btn btn-secondary dropdown-toggle'
									href='#'
									role='button'
									id='dropdownMenuLink'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									{currentUser.email}
								</button>

								<ul class='dropdown-menu' aria-labelledby='dropdownMenuLink'>
									<li>
										<a className='dropdown-item' href='/admin'>
											admin
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='/admin/productslist'>
											Products list
										</a>
									</li>
									<li>
										<li
											className='dropdown-item'
											onClick={() => {
												dispatch(logoutUser());
											}}
										>
											Logout <i class='fas fa-sign-out-alt'></i>
										</li>
									</li>
								</ul>
							</div>
						) : (
							<li className='nav-item'>
								<a className='nav-link' href='/login'></a>
							</li>
						)}
						{currentUser ? (
							<div className='dropdown'>
								<button
									className='btn btn-secondary dropdown-toggle'
									href='#'
									role='button'
									id='dropdownMenuLink'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									{currentUser.name}
								</button>

								<ul class='dropdown-menu' aria-labelledby='dropdownMenuLink'>
									<li>
										<a className='dropdown-item' href='/profile'>
											Profile
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='/orders'>
											Orders
										</a>
									</li>
									<li>
										<li
											className='dropdown-item'
											onClick={() => {
												dispatch(logoutUser());
											}}
										>
											Logout <i class='fas fa-sign-out-alt'></i>
										</li>
									</li>
								</ul>
							</div>
						) : (
							<li className='nav-item'>
								<a className='nav-link' href='/login'>
									Login
								</a>
							</li>
						)}

						<li className='nav-item'>
							<a className='nav-link ' href='/cart'>
								<i class='fas fa-shopping-cart'></i>
								{cartItems.length}
							</a>
						</li>
					</div>
				</div>
			</nav>
		</div>
	);
}
