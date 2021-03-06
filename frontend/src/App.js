import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Layout />
        </Route>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
