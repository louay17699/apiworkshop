import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './components/ProductList';
import UsersList from './components/UsersList';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/prod' element={ <ProductList/> }/>
        <Route path='/users' element={ <UsersList/> }/>
        <Route path='/prod/:id' element={<SingleProduct/>}/>
      </Routes>
          

    </div>
  );
}

export default App;
