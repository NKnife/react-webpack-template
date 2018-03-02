import '@/css/app.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import PageA from '@/pages/page-a';
import PageB from '@/pages/page-b';
import image from '@/assets/image.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='box'>
            <span>top</span>
            <img src='/static/static-image.jpg' />
          </div>
          <Route exact path="/" component={PageA} />
          <Route exact path="/page-b" component={PageB} />
          <div className='box'>
            <span>bottom</span>
            <img src={image} />
          </div>
          <style global jsx>{`
            body {
              background: #000;
              .box {
                background: #222;
                color: #fff;
                height: 60px;
                width: 100%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                span {
                  display: block;
                  width: 100px;
                }
              }
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
