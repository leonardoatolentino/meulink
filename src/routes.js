import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Links from './pages/Links';

function RoutesApp(){
  return(
   <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/links" component={Links} />
    </BrowserRouter> 
    
  );
}

export default RoutesApp;