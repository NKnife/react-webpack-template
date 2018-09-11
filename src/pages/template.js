import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import * as actions from '@/store/actions';
import p from '@/js/plugins';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() { }
	componentDidMount() { }
	render() {
		return (
			<div>
			</div>
		);
	}
}
export default connect(state => state)(Page);