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
    return <h1 id='test'>Test2, <Link to='/test-b'>{this.props.name}</Link></h1>;
  }
}

export default Element;