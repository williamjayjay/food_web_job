import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Recipes from './components/Recipes'
import Blog from './components/Blog'
import Join from './components/Join'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Register} path="/register" />
      <Route component={Recipes} path="/recipes" />
      <Route component={Blog} path="/blog" />
      <Route component={Join} path="/join" />
    </BrowserRouter>
    
  );
}

export default Routes;