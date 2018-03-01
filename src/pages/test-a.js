import '../css/test.css';
import React, { Component } from 'react';
import A from '../components/test-a/A';
import B from '../components/test-a/B';

const prop = '3233';
const obj = { a: 1, b: 2}
class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() { }
	componentWillUnmount() { }
	// 捕获$emit
	change = (e) => {
		console.log(e);
	}
	// 渲染
	render() {
		return (
			<div>
				<A name='test' obj={obj} onCustomEvent={this.change}/>
				<B name={prop} />
			</div>
		);
	}
}
export default Page;