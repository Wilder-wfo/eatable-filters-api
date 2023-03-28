import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { reset, global } from './styles';
import { AuthProvider } from './useContext/useContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={global} />
    <Global styles={reset} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
