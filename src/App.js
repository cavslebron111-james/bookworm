import React from 'react';
import {Route} from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';


const App = () => {
  return (
<div className="ui container">
<Route path = "/"  exact component={Homepage} />
<Route path = "/Login"  component={Login} />
</div>
  
);
  }
export default App; 
