import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import * as actions from '@/store/actions';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() { }
	componentWillUnmount() { }
	render() {
		return (
			<div>
				{this.props.stateName}
				<style jsx>{`
					div {
						color: #fff;
					}
				`}</style>
			</div>
		);
	}
}
export default connect(state => state)(Page);