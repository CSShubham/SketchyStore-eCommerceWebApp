import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import {Provider} from 'react-redux'
import App from './App.jsx'
import { store } from './store/Store.js';

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>

)
