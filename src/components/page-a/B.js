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
      <Link to='/page-b'>{this.props.name}</Link>
      <style jsx>{`
      `}
      </style>
    </h1>
  }
}

export default Element;