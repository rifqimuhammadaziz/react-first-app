import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import AboutTeam from './AboutTeam';
import AboutTeam2 from './AboutTeam2';
import Blog from './Blog';
import BlogDetail from './BlogDetail';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}>
          <Route path='team' element={<AboutTeam />}/>
          <Route path='team2' element={<AboutTeam2 />}/>
        </Route>
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/:slug' element={<BlogDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
