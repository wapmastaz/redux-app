import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import './index.css';

import { store } from './services/state/store.ts';
import { Provider } from 'react-redux';
import LocalStorage from './components/LocalStorage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<LocalStorage/>
		</Provider>
	</React.StrictMode>
);
