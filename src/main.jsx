import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/pages/HomePage.jsx';
import Login from './components/pages/Login/Login.jsx';
import Singup from './components/pages/Singup/Singup.jsx';
import LikePage from './components/pages/LikePage/LikePage.jsx';
import ExplorePage from './components/pages/ExplorePage/ExplorePage.jsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Singup></Singup>
      },
      {
        path: '/likes',
        element: <LikePage></LikePage>
      },
      {
        path: '/explore',
        element: <ExplorePage></ExplorePage>
      }
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} >
      </RouterProvider>
      <Toaster></Toaster>
    </QueryClientProvider>
  </React.StrictMode>
)
