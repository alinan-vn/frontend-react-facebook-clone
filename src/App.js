import logo from './logo.svg';
import './App.css';

import './scss/main.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/global/nav/index';
import Footer from './components/global/footer/index';
import Sidebar from './components/global/sidebar/index';

import Home from './components/home/index';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Sidebar />

        <Route exact path='/' component={Home} />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
