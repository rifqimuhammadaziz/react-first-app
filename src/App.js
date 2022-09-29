import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <div className='brand'>
        Blog Application
      </div>
      <nav className='nav'>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/blog' className='nav-item'>Blog</Link>
          <Link to='/profile' className='nav-item'>Profile</Link>
          <Link to='/contact' className='nav-item'>Contact</Link>
      </nav>
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}>
          <Route path='team' element={<AboutTeam />}/>
          <Route path='team2' element={<AboutTeam2 />}/>
        </Route>
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/:slug' element={<BlogDetail />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog/:id' element={<BlogDetail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
