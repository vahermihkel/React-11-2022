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
import { useTranslation } from 'react-i18next';
import { ContactUs } from './pages/ContactUs';

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  }

  return (
    <div className="App">

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t('admin')}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t('shops')}</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontakteeru meiega</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t('cart')}</Nav.Link>
          </Nav>
          <img className="lang" src="/english.png" alt="" onClick={() => changeLang("en")} />
          <img className="lang" src="/estonia.png" alt="" onClick={() => changeLang("ee")} />
        </Container>
      </Navbar>
      

      <Routes>
        <Route path="" element={ <Homepage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
      </Routes>
    </div>
  );
}

export default App;
