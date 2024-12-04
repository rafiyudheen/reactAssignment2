import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Products from './Products'
import MainRoot from './routs/root';
import ProductDetails from './pages/ProductDetails';
import store from './app/store';
import { Provider } from 'react-redux'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router=createBrowserRouter(
  [
    {
      path: "/",
      element: <Products></Products>,
     }
     ,
       {
         path: "/Products",
         element: <Products/>,
        
        },        
        {
          path: "/Products/:id",
          element: <ProductDetails/>,
        },
  ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <RouterProvider router={router}> 
      </RouterProvider>
    </Provider>

  </StrictMode>,
)
