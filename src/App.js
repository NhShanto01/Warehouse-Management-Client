import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';
import Footer from './Pages/Sheard/Footer/Footer';
import Header from './Pages/Sheard/Header/Header';
import NotFound from './Pages/Sheard/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
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
