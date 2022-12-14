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
// API p??ringuid tegema nr 1 v??tame pakiautomaadid Omniva lehelt++++
// Firebase-i j??lle projekti++++
// Paneme ebay tooted Firebase-i++++


// Firebase-st teeme API p??ringuid, et sealt andmeid k??tte saada++++
// Firebase-i hakkame andmeid sisestama API p??ringute kaudu++++

// Kategooriad Firebase andmebaasi++++
// Poed Firebase andmebaasi -> koju saadetud
// Makse API p??ring++++

// 13.nes   19.12
// D??naamiline CSS klass++++
// Props ehk child componendid
// CSS moodulid
// T??stame t??lked eraldi failidesse
// KOJU: print-screenidena poed andmebaasi
// KOJU: Nortali Proovit????

// 14.nes   21.12
// useContext ehk globaalsed muutujad
// Sisselogimine/Registreerumine API p??ringut
// KOJU: Nortali Proovit???? edasi tegemine

// 15.nes   26.12
// Karusell-galerii
// Piltide URL asemel failide ??leslaadimine
// Radio buttonid 
// URL t??lke alla ---> i18n.js

// 16.nes   28.12
// lahendame proovit???? 1. punkti: Nortali proovit????
// Lehek??ljenumbrid
// Maksma juures saab valida ka arvega --> emailjs.com
//        saadetakse e-mail koos kogusumma ja toodetega -> vormi kaudu k??siks ka nime ja e-maili
// KOJU: Nortali 2-4 punkt + Iseseisev l??puprojekt

// 17.nes   02.01
// lahendame: Nortali proovit???? --> teeme l??puni ??ra
// t??statada iseseisva projekti mingeid teemasid
// ?????
// KOJU: Iseseisev l??puprojekt

// Ei tee:
// N??ita veel tooteid ---> mul pole ??nnestunud
// Toastid t??ita - mingid kustutamise/muutmised
// Terve projekt t??lge ---> i18n.js

// 18.nes 10.01   T
//mina midagi ei r????gi, teie poolt l??puprojekti esitlus
// 11.01

// L??puprojekt: oleks tehtud Reactis
// https://proovitoo.twn.ee/
