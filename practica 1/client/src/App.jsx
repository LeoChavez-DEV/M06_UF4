import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Pages/Auth/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Header from './Components/nav/header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
)

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

App.propTypes = {
  routes: PropTypes.array 
};

export default App;