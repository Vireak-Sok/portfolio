import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Work from './pages/Work';
import { Route, Routes } from "@solidjs/router";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path={"/"} component={Home}/>
      <Route path={"/work"} component={Work}/>
      <Route path={"/work/:name"} component={Project}/>
      <Route path={"/contact"} component={Contact}/>
      <Route path={"/about"} component={About}/>
      <Route path={"*"} component={NotFound}/>
    </Routes>
  );
}

export default App;
