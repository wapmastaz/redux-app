import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './services/state/store';
import {
	decrement,
	incrementByAmount,
	incrementAsync,
} from './services/state/counter/counterSlice';

function App() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<h1>Hello Redux</h1>
			<div className='card'>
				<h2>count is {count}</h2>

				<button onClick={() => dispatch(incrementAsync(10))}>Increment</button>

				<button onClick={() => dispatch(decrement())}>Decrement</button>

				<button onClick={() => dispatch(incrementByAmount(20))}>
					Increment by 20
				</button>
			</div>
			<p className='read-the-docs'>Demmy</p>
		</>
	);
}

export default App;
