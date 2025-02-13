import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';

// Paginas 
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import ErrorPage from './routes/ErrorPage';
import Posts from './routes/posts';
import Admin from './routes/Admin';
import EditPost from './routes/EditPost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/new",
        element: <NewPost/>
      },
      {
        path: "/posts/:id",
        element: <Posts/>,
      },
      {
        path: "/admin",
        element: <Admin/>,
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
