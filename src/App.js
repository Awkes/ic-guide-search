import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Search from './views/Search';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={'/'} component={Search} />        
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
