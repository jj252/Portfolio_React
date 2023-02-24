
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import NucampLogo from './app/assets/img/logo.png';

import Header from './components/Header';
import Footer from './components/Footer';

import CampsiteDirectoryPage from './pages/CampsitesDirectoryPage';
import EducationDirectoryPage from './pages/EducationDirectoryPage';
import {Routes, Route} from  'react-router-dom';
import ContactPage from './pages/ContactPage';

import CampsiteDetailPage from './pages/CampsiteDetailPage';
import EducationDetailPage from './pages/EducationDetailPage';
import AboutPage from './pages/AboutPage';


const test2 = (name) =>{
  
  return name;
}

const basicBtn = {
  border:'solid 2px purple',
  color: 'blue',
  backgroundColor:'yellow'
}

const test3 = 'this is a test';

const peaceOnEarth = () =>{
  console.log("peace on earth")
}

function App() {

  return (
            <>
            <Header />
            <Routes>
              <Route path='/' element={<CampsiteDirectoryPage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='education' element={<EducationDirectoryPage />} />
              <Route path='about' element={<AboutPage />} />
              <Route 
                path='/:campsiteId'
                element={<CampsiteDetailPage />}
              />
              <Route 
                path='education/:campsiteId'
                element={<EducationDetailPage />}
              />
            </Routes>
            
            <Footer />
            </>
    
  )
}

export default App;
