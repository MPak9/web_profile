
import { HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ScrollToTop from './Hooks/ScrollToTop';
import Layout from './Components/Layout';
import HomeList from './Components/Home/HomeList';
import Project_Toasty from './Components/Projects/Project_Toasty';
import Project_GUSDA from './Components/Projects/Project_GUSDA';
import Notes_CSSColors from './Components/Notes/Notes_CSSColors';
import Project_Portfolio from './Components/Projects/Project_Portfolio';

function App() {
  return (
    //Github Pages doesn't work well with BrowserRouter
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path = '/' element ={<Layout/>}>
            <Route index element={<HomeList />} />
            <Route path='Home/:id'element={<HomeList />} />
            <Route path='Project/Toasty' element={<Project_Toasty />}/>
            <Route path='Project/GUSDA' element={<Project_GUSDA />}/>
            <Route path='Project/Portfolio' element={<Project_Portfolio />}/>
            <Route path='Notes/CssColors' element={<Notes_CSSColors />}/>
            <Route path="*" element={<div>404 Error</div>}/>
          </Route>
          {/*Catch All Others */}
          <Route path="*" element={<Layout><div>404 Error</div></Layout>}/>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
