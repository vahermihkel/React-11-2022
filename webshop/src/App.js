import { Navigate, Route, Routes } from 'react-router-dom';

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
import { ContactUs } from './pages/ContactUs';
import NavigationBar from './components/NavigationBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';
import MaintainImages from './pages/admin/MaintainImages';
import { useTranslation } from 'react-i18next';

function App() {
  const authCtx = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <div className="App">

      <NavigationBar />

      <Routes>
        <Route path="" element={ <Homepage /> } />
        <Route path={t("url.cart")} element={ <Cart /> } />
        <Route path={t("url.shops")} element={ <Shops /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        { authCtx.loggedIn === true &&
         <>
          <Route path="admin" element={ <AdminHome /> } />
          <Route path="admin/add-product" element={ <AddProduct /> } />
          <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
          <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
          <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
          <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
          <Route path="admin/maintain-images" element={ <MaintainImages /> } />
        </>}
        { authCtx.loggedIn === false &&
          <Route path="admin/*" element={ <Navigate to="/login" /> } />
          }
      </Routes>
    </div>
  );
}

export default App;

// 8.12
// Leaflet kaardirakenduse, kuhu kuvame meie poed++++
// API päringuid tegema nr 1 võtame pakiautomaadid Omniva lehelt++++
// Firebase-i jälle projekti++++
// Paneme ebay tooted Firebase-i++++


// Firebase-st teeme API päringuid, et sealt andmeid kätte saada++++
// Firebase-i hakkame andmeid sisestama API päringute kaudu++++

// Kategooriad Firebase andmebaasi++++
// Poed Firebase andmebaasi -> koju saadetud
// Makse API päring++++

// 13.nes   19.12
// Dünaamiline CSS klass++++
// Props ehk child componendid
// CSS moodulid
// Tõstame tõlked eraldi failidesse
// KOJU: print-screenidena poed andmebaasi
// KOJU: Nortali Proovitöö

// 14.nes   21.12
// useContext ehk globaalsed muutujad
// Sisselogimine/Registreerumine API päringut
// KOJU: Nortali Proovitöö edasi tegemine

// 15.nes   26.12
// Karusell-galerii
// Piltide URL asemel failide üleslaadimine
// Radio buttonid 
// URL tõlke alla ---> i18n.js

// 16.nes   28.12
// lahendame proovitöö 1. punkti: Nortali proovitöö
// Leheküljenumbrid
// Maksma juures saab valida ka arvega --> emailjs.com
//        saadetakse e-mail koos kogusumma ja toodetega -> vormi kaudu küsiks ka nime ja e-maili
// KOJU: Nortali 2-4 punkt + Iseseisev lõpuprojekt

// 17.nes   02.01
// lahendame: Nortali proovitöö --> teeme lõpuni ära
// tõstatada iseseisva projekti mingeid teemasid
// ?????
// KOJU: Iseseisev lõpuprojekt

// Ei tee:
// Näita veel tooteid ---> mul pole õnnestunud
// Toastid täita - mingid kustutamise/muutmised
// Terve projekt tõlge ---> i18n.js

// 18.nes 10.01   T
//mina midagi ei räägi, teie poolt lõpuprojekti esitlus
// 11.01

// Lõpuprojekt: oleks tehtud Reactis
// https://proovitoo.twn.ee/
