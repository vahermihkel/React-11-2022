import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Article } from './pages/Article';
import Home from './pages/Home';
import { List } from './pages/List';

function App() {
  
  return (
    <div className="App" >
      <div><img className="picture" src="https://proovitoo.twn.ee/assets/imgs/bg-deco-left.svg" alt="" /></div>
      <div><img className="picture2" src="https://proovitoo.twn.ee/assets/imgs/bg-deco-right.svg" alt=""/></div>      
    
      <div >

      {/* <Link to="/article">
      <button>Artikkel</button>
      </Link> */}
      {/* <Link to="/list">
      <button className="loll" >Tabel</button>
      </Link> */}

      <div className="sidebar">
        <Link to="home">
          <img  className="sidebar-image" src="https://proovitoo.twn.ee/assets/imgs/logo.svg" alt=""/>
        </Link>
      
        <div className="sidebar-links" >NÕUDED</div> <br />
      
        <Link to="/article">
          <div>ARTIKKEL</div> <br />
        </Link>
        <Link to="/list">
          <div>TABEL</div> <br />
        </Link>
        <Link>
          <div>GAME OF LIFE</div> 
        </Link> 
      </div>

      <Routes>
        <Route path="home" element={ <Home />}/>
        <Route path="article" element={ <Article/> } />
        <Route path="list" element={ <List/> } /> 
      </Routes>
    </div>
  </div>  
  );
}

export default App;
