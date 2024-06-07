import React, { useState } from 'react';
import '../App.css';
import { useLocalStorage } from '../hooks/useLocalStorage';

function LocalStorage() {
	const [value, setValue] = useState('');

	const { setItem, getItem, removeItem } = useLocalStorage('name');

	return (
		<>
			<h1>Hello Redux</h1>

			<input
				type='text'
				id='text'
				name='text'
				onChange={(event) => setValue(event.target.value)}
			/>

			<div
				className='card'
				style={{ gap: 4 }}
			>
				<button onClick={() => setItem(value)}>Set Item</button>

				<button onClick={() => console.log(getItem())}>Get Item</button>

				<button onClick={() => removeItem()}>Remove Item</button>
			</div>
			<p className='read-the-docs'>Demmy</p>
		</>
	);
}

export default LocalStorage;
