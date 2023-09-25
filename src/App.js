
import { HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ScrollToTop from './Hooks/ScrollToTop';
import Layout from './Components/Layout';
import HomeList from './Components/Home/HomeList';

function App() {
  return (
    //Github Pages doesn't work well with BrowserRouter
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path = '/' element ={<Layout/>}>
            <Route index element={<HomeList />} />
            <Route path='Home/:id'element={<HomeList />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
