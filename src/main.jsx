import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from '../src/Components/Home';
import {Login} from '../src/Components/Login';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
 
  </BrowserRouter>
    
)
