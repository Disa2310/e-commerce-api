import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import { Provider } from 'react-redux'
// import { store } from './redux/Store';
import store from './redux/Store';
import Checkout from './redux/Checkout';

function App() {
  return (
    <>
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='Product/:id' element={<Product/>}/>
    </Routes>
    </Provider>
    </>
  );
}

export default App;
