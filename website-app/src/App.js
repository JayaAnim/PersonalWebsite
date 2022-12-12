import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import UserNav from './components/UserNav';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={ <> <UserNav/> <HomePage/> </> }/>
            <Route path='AboutPage' element={ <> <UserNav/> <AboutPage/> </> }/>
            <Route path='ProjectPage' element={ <> <UserNav/> <ProjectPage/> </> }/>
            <Route path='ResumePage' element={ <> <UserNav/> <ResumePage/> </> }/>
            <Route path='ContactPage' element={ <> <UserNav/> <ContactPage/> </> }/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
