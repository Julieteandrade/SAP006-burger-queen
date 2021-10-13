
import "./services/firebase"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Cadastro from './pages/cadastro';



function App() {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/menu">
          {/* {user ? <Menu /> : <Redirect to="/" />} */}
        </Route>
        <Route exact path="/">
          {/* {user ? <Redirect to="/menu" />: <Login />} */}
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


