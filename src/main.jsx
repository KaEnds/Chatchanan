import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import Nawintrade from './Components/Nawintrade.jsx'
import Caraball from './Components/Caraball.jsx';
import Califonia from './Components/Califonia.jsx';

import './index.css'

const router = createBrowserRouter([
  {path: "/Chatchanan", element: <App />,},
  {path: "/Chatchanan/project/nawintrade", element: <Nawintrade />},
  {path: "/Chatchanan/project/Caraball", element: <Caraball />},
  {path: "/Chatchanan/project/Califonia", element: <Califonia />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
