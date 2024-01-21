




import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Auth0Provider
    domain="7pm.us.auth0.com"
    clientId="f6djLYXZrWPPz3zQxYXydLF9ki2l9EKf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>);


