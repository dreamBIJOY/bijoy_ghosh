import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home page/HomePage';
import ServicesPage from './pages/services page/ServicesPage';
import ProjectPage from './pages/project page/ProjectPage';
import AboutPage from './pages/about page/AboutPage';
import ContactPage from './pages/contact page/ContactPage';
import Root from './Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
