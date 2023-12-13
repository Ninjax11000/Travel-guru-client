import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/routes.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import ImageProvider from './providers/ImageProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <ImageProvider>
    <RouterProvider router={router} />
    </ImageProvider>
    </AuthProviders>
  </React.StrictMode>,
)
