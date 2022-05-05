import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import AddItems from './Pages/Products/AddItems/AddItems';
// import ManageInventory from './Pages/Products/ManageInventory/ManageInventory';
import ManageQuantity from './Pages/Products/ManageQuantity/ManageQuantity';
// import Product from './Pages/Products/Product/Product';
import Products from './Pages/Products/Products/Products';
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

        <Route path='/products' element={<RequireAuth>
          <Products></Products>
        </RequireAuth>}></Route>

        <Route path='/additem' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/product/:id' element={<RequireAuth>
          <ManageQuantity></ManageQuantity>
        </RequireAuth>}></Route>

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
