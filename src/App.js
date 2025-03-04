import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './components/ProductList';
import UsersList from './components/UsersList';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/prod' element={ <ProductList/> }/>
        
        <Route path='/prod/:id' element={<SingleProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<Dashboard/>}>
        <Route index element={<UsersList/>}/>
        </Route>
      </Routes>
          

    </div>
  );
}

export default App;
