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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      
      <BrowserRouter>
        <Navigation />
        {/* <Sidebar /> */}

        {/* <Route exact path='/' component={Home} /> */}

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
