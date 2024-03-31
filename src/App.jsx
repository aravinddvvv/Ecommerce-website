// App.jsx

import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import CategoryList from './components/CategoryList';
import UserList from './components/UserList';
import Header from './Header';
import Carosel from './Carosel';
import Footer from './Footer';

function App() {
  const location = useLocation();

  return (
    <Router>
      <div>
        <Header />
        <br/>  <br/> 
      
        {location.pathname === '/' && <Carosel />}
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/:productId" component={ProductDetails} />
          <Route path="/categories" exact component={CategoryList} />
          <Route path="/users" exact component={UserList} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
