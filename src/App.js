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
          path:'/about',
          element:<About></About>
        },
        {
          path:'/orders',
          loader:ProductsAndCartLoadersData,
          element:<Orders></Orders>
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
