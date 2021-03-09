import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const App = props => {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/*' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
