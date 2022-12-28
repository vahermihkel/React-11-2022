import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Article from './pages/Article';
import List from './pages/List';

function App() {
  return (
    <div className="App">
      <Link to="/article">
        <button>Artikkel</button>
      </Link>
      <Link to="/list">
        <button>Tabel</button>
      </Link>

      <Routes>
        <Route path="article" element={ <Article /> } />
        <Route path="list" element={ < List /> } />
      </Routes>
    </div>
  );
}

export default App;
