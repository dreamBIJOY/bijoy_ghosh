import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './router/router';
import HomePage from './pages/home page/HomePage';
import ServicesPage from './pages/services page/ServicesPage';
import ProjectPage from './pages/project page/ProjectPage';
import AboutPage from './pages/about page/AboutPage';
import ContactPage from './pages/contact page/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/services",
        element: <ServicesPage/>
      },
      {
        path: "/projects",
        element: <ProjectPage/>
      },
      {
        path: "/aboutme",
        element: <AboutPage/>
      },
      {
        path: "/contactme",
        element: <ContactPage/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
