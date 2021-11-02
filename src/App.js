
import "./services/firebase";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Menu from './pages/menu';


function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


