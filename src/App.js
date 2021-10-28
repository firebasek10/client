import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route } from 'react-router-dom';
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Orderinfo from './screens/Orderinfo';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Route path='/' component={Homescreen} exact></Route>
				<Route path='/product/:id' component={Productdescscreen}></Route>
				<Route path='/cart' component={Cartscreen}></Route>
				<Route path='/register' component={Registerscreen}></Route>
				<Route path='/login' component={Loginscreen}></Route>
				<Route path='/orders' component={Ordersscreen}></Route>
				<Route path='/orderinfo/:orderid' component={Orderinfo}></Route>
				<Route path='/profile' component={Profilescreen}></Route>
				<Route path='/admin' component={Adminscreen}></Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
