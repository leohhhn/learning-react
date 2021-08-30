import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import {FavoritesContextProvider} from "./store/favorites-context";
import {Web3ContextProvider} from "./store/web3-context";

ReactDOM.render(
    <React.StrictMode>
        <Web3ContextProvider>
            <FavoritesContextProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </FavoritesContextProvider>
        </Web3ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

