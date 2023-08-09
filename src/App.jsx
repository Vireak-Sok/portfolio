import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Work from './pages/Work';
import { Route, Routes } from "@solidjs/router";

function App() {
  return (
    <Routes>
      <Route path={"/"} component={Home}/>
      <Route path={"/work"} component={Work}/>
      <Route path={"/work/:name"} component={Project}/>
      <Route path={"/contact"} component={Contact}/>
      <Route path={"/resume"} component={Resume}/>
    </Routes>
  );
}

export default App;
