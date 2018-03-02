import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillUnmount() { }
  render() {
    return <h1>
      <br />
      <div>{this.props.name}</div>
      <div>{this.props.value}</div>
      <Link to='/page-b'><span>Tap to jump</span></Link>
      <style jsx>{`
        h1 {
          div {
            color: #666;
          }
          span {
            color: #7ac2ef;
          }
        }
      `}
      </style>
    </h1>
  }
}

export default Element;