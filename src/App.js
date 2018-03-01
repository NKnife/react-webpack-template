import '@/css/app.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import TestA from '@/pages/test-a';
import TestB from '@/pages/test-b';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={TestA} />
          <Route exact path="/test-b" component={TestB} />
        </div>
      </Router>
    );
  }
}

export default App;
