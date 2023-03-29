// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './components/Shop/Shop'
import Enventory from './components/enventory/Enventory';
import About from './components/about/About';
import Orders from './components/orders/Orders';
import { ProductsAndCartLoadersData } from './loaders/ProductsAndCartLoaderData';
import Login from './components/Login/Login';
import Singup from './components/Singup/Singup';
import Shipping from './components/Shipping/Shipping';
import PrivetRoutes from './Routes/PrivetRoutes';


function App() {
  const router = createBrowserRouter([
    {
    
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>{
            return fetch('products.json')
          },
          element:<Shop></Shop>
        },
        {
          path:'/enventory',
          element:<Enventory></Enventory>
        },
        {
          path:'/shipping',
          element:<PrivetRoutes><Shipping></Shipping></PrivetRoutes>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/orders',
          loader:ProductsAndCartLoadersData,
          element:<Orders></Orders>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<Singup></Singup>
        }
      ]
    },
   
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    <FontAwesomeIcon></FontAwesomeIcon>
    </div>
  );
}

export default App;
