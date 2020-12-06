import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './views/Home';
import Test from './views/Test'
import Status from './views/Status'

const App = () => {
  return (
    <Router>
      <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/test" exact component={Test}/>
         <Route path="/status" exact component={Status}/>

      </Switch>
    </Router>
  )
}

export default App

