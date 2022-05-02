import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Home from './Pages/Home/Home/Home';
import ManageQuantity from './Pages/Products/ManageQuantity/ManageQuantity';
// import Product from './Pages/Products/Product/Product';
import Products from './Pages/Products/Products/Products';
import UpdateQuantity from './Pages/Products/UpdateQuantity/UpdateQuantity';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/products' element={<Products></Products>}></Route>

        {/* <Route path='/product/:productId' element={<UpdateQuantity></UpdateQuantity>}></Route> */}

        <Route path='/product/:id' element={<ManageQuantity></ManageQuantity>}></Route>

        <Route path='/signin' element={<SignIn></SignIn>}></Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
