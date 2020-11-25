import React from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import { Cart } from './context/cart';

function App() {
  return (
    <Cart>
      <Routes />
      <ToastContainer />
    </Cart>
  );
}

export default App;
