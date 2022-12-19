import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; // Navbar võtab tervikuna mis asub react-bootstrap/Navbar
// import { Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'; // useTranslation võtab tüki react-i18nextist
import { Link } from 'react-router-dom'; // Link võtab tüki react-router-dom'st

// rafce
const NavigationBar = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  }

  return (
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
  )
}

export default NavigationBar