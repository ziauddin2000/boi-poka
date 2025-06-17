import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import BookDetails from './components/Home/BookDetails/BookDetails.jsx';
import List from './components/List/List.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/book/:id",
        loader: () => fetch('../booksData.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path: "/listed-books",
        loader: () => fetch('../booksData.json'),
        element: <List></List>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
