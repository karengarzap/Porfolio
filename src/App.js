import './App.css';
import './pages/nav.css'
import { Route, Routes } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Navbar from './pages/Navbar';
import Header from './pages/Header';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Footer from './pages/Footer';


function App() {
  return (
    <>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element ={<Header />} />
        <Route path="/aboutme" element ={<Aboutme />} />
        <Route path="/resume" element ={<Resume />} />
        <Route path="/projects" element ={<Projects />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
