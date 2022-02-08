import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Links from './pages/Links';
import Error from './pages/Error';

function RoutesApp(){
  return(
   <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/links" component={Links} />
        <Route  path='*' component={Error} />
      </Switch>
    </BrowserRouter> 
    
  );
}

export default RoutesApp;