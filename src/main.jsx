import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { AuthProvider } from './providers/AuthProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './providers/ProductProvider.jsx';
import { MovieProvider } from './providers/MovieProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <MovieProvider>
        <ProductProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </ProductProvider>
      </MovieProvider>
    </AuthProvider>
  </React.StrictMode>,
)
