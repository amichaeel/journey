import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import {AuthProvider} from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = 'dev-jxbudcqtavwz1zve.us.auth0.com'
const clientId = 'jIkKWicUtq6YZc9pAby9AK7pDDOjFC3H'

root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    >
        <AuthProvider>
            <App />
        </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>
);