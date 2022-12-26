import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; // Navbar võtab tervikuna mis asub react-bootstrap/Navbar
// import { Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'; // useTranslation võtab tüki react-i18nextist
import { Link, useNavigate } from 'react-router-dom'; // Link võtab tüki react-router-dom'st
import { useContext } from 'react';
import CartSumContext from '../store/CartSumContext';
import AuthContext from '../store/AuthContext';

// rafce
const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const cartSumCtx = useContext(CartSumContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const changeLang = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // window.location.href = "http://" + window.location.href.split("/")[2] + "/" + t("url." + window.location.href.split("/")[3]);
    // console.log(window.location.href.split("/"));
    navigate("/");
  }

  const logout = () => {
    // authCtx.setLoggedIn(false);
    authCtx.logout();
  }

  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            { authCtx.loggedIn === true && <Nav.Link as={Link} to="/admin">{t('nav.admin')}</Nav.Link>}
            <Nav.Link as={Link} to={"/"+ t("url.shops")}>{t('nav.shops')}</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontakteeru meiega</Nav.Link>
            <Nav.Link as={Link} to={"/"+ t("url.cart")}>{t('nav.cart')}</Nav.Link>
            { authCtx.loggedIn === false && <Nav.Link as={Link} to="/login">Logi sisse</Nav.Link>}
            { authCtx.loggedIn === false && <Nav.Link as={Link} to="/signup">Registreeru</Nav.Link>}
            { authCtx.loggedIn === true && <Nav.Link onClick={logout}>Logi välja</Nav.Link>}
          </Nav>
          <div>{cartSumCtx.cartSum} €</div>
          <img className="lang" src="/english.png" alt="" onClick={() => changeLang("en")} />
          <img className="lang" src="/estonia.png" alt="" onClick={() => changeLang("ee")} />
        </Container>
      </Navbar>
  )
}

export default NavigationBar