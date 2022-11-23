import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './App.css';

import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Shops from './pages/Shops';
import SingleProduct from './pages/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainShops from './pages/admin/MaintainShops';

function App() {
  return (
    <div className="App">

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
        <Route path="" element={ <Homepage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="product" element={ <SingleProduct /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="add-product" element={ <AddProduct /> } />
        <Route path="edit-product" element={ <EditProduct /> } />
        <Route path="maintain-categories" element={ <MaintainCategories /> } />
        <Route path="maintain-products" element={ <MaintainProducts /> } />
        <Route path="maintain-shops" element={ <MaintainShops /> } />
      </Routes>
    </div>
  );
}

export default App;
