import '@/css/app.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import PageA from '@/pages/page-a';
import PageB from '@/pages/page-b';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PageA} />
          <Route exact path="/page-b" component={PageB} />
          <style global jsx>{`
            body {
              background: #000;
              h1 {
                font-size: 20px;
              }
            }
          `}</style>
        </div>
      </Router>
    );
  }
}

export default App;
