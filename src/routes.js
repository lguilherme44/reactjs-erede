import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Config from './pages/Config';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/configuration' component={Config} />
      </Switch>
    </BrowserRouter>
  );
}
