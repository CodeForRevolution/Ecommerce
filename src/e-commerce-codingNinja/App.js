import React, { Children, useEffect, useState } from 'react'
import { createBrowserRouter, router, RouterProvider, Route, BrowserRouter } from "react-router-dom";
import { productContext } from './contextApi/contex';
import Navbar from './components/Navbar/Navbar';
import ProductContainer from './components/productContainer/productContainer';
import Login from './components/login/Login';
import Create from './components/create/Create';
import cart from './components/cartContainer/Cart'
import './App.css'
import Cart from './components/cartContainer/Cart';
import { Provider, useSelector } from 'react-redux';
import { store } from './components/redux/store';
import { useDispatch } from 'react-redux';
import { productAction, productSelector } from './components/redux/Reducer/productReducer';
import ProductInfo from "./components/productInfo/productInfo"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { json } from 'body-parser';
import { cartAction } from './components/redux/Reducer/cartReducer';









const App = () => {
  const dispatch = useDispatch();
  const settproduct = useSelector(productSelector);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=2000', { method: "GET" });
      const products = await response.json();
      const newP = products.products
      setProducts(newP)

      var cartItem=[];
      if(localStorage.getItem('cartItem')){
       cartItem=await JSON.parse(localStorage.getItem('cartItem'));
      console.log('you come to fetch the data from the local storage',cartItem);
      dispatch(cartAction.setCart(cartItem)); 
      }

      const ReduxProduct = [...newP];
      dispatch(productAction.setProduct(ReduxProduct));
  
    }
    fetchProduct();
  }, [])


  
  // const [cartProduct, setCartproduct] = useState([]);





  const browerrouter = createBrowserRouter(
    [
      {
        path: '/', element: <Navbar />, children: [
          { index: true, element: <ProductContainer /> },
          { path: 'cart', element: <Cart /> },
          { path: 'login', element: <Login /> },
          { path: 'create', element: <Create /> },
          { path: 'moreInfo', element: <ProductInfo /> },
        ],
      },
    ])







  return (
    <>
      {/* <productContext.Provider value={{ products, setProducts, cartProduct, setCartproduct }}> */}
        <div className='App_main'>
          <RouterProvider router={browerrouter} />
          < ToastContainer
          position='top-right'
          autoClose={1000}
         
          />
        </div>
      {/* </productContext.Provider> */}
    </>
  )
}




export default App;