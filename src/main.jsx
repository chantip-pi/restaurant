import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Homepage from './components/Homepage.jsx'
import Aboutpage from './components/Aboutpage.jsx'
import MenuPage from './components/MenuPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Homepage />
  },
  {
    path: "about",
    element:<Aboutpage />
  },
  {
    path: "menu",
    element:<MenuPage />
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)