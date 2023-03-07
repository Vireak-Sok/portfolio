import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import CaseStudy from './pages/CaseStudy/CaseStudy'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='casestudy' element={<CaseStudy />}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
