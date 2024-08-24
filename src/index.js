import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
 
const router= createBrowserRouter([
  { path :'/',
    element:<App/>,
    errorElement: <div>Error page</div>,
    children :[
      {path:'one' ,element :<One/>},
      {path:'two' ,element :<Two/>},
      {path:'three' ,element :<Three/>},
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider  router = {router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
