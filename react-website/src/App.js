import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import FAQ from './pages/FAQ';
import Guide from './pages/Guidelines';
import Quize from './Quize';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Guide' element={<Guide />} />
        <Route path='/Quize' element={<Quize />} />

      </Routes>
    </Router>
  );
}



export default App;
