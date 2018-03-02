import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '@/store/actions';
import A from '@/components/page-a/A';
import B from '@/components/page-a/B';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.reduxDemo();
	}
	componentDidMount() { }
	componentWillUnmount() { }
	// 捕获 $emit
	change(e) {
		console.log(e);
	}
	// redux demo
	reduxDemo() {
		setTimeout(() => {
			this.props.dispatch(actions.actionTemplate('state change template'));
		}, 1000)
	}
	// 渲染
	render() {
		return (
			<div>
				<A name='Componet A name' onCustomEvent={this.change} />
				<B name='Componet B name' value={this.props.stateName} />
			</div>
		);
	}
}
export default connect(state => state)(Page);