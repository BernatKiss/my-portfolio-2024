import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Particles } from 'react-tsparticles';
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Home from './containers/home';
import Navbar from './components/navBar';
import particles from './untils.js/particles';

function App() {

  const location = useLocation();
  console.log(location)

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === '/';

  return (
    <div className="App">
      {/* particle js */}

      {
        renderParticleJsInHomePage && <Particles id='particles' options={particles} init={handleInit}/>
      }

      {/* navbar */}

      <Navbar/>

      {/* main page content */}
      <div className='App__main-page-content'>
        <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='resume' element={<Resume />} />
        <Route path='skills' element={<Skills />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
</div>
      
    </div>
  );
}

export default App;
