import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Element extends Component {
	constructor(props) {
		// 调用父级的constructor(props)
		super(props);
		// 初始化 state
		this.state = {
			test: this.props.obj,
			bool: false,
		}
	}
	// mounted
	componentDidMount() { }
	// destroyed
	componentWillUnmount() { }
	// 自定义事件
	setClick = () => {
		this.setState({
			bool: !this.state.bool,
		});
		// vue $emit
		this.props.onCustomEvent('changed');
	}
	render() {
		// 条件渲染
		let component = <span>toggle</span>;
		if (this.state.bool) {
			// 列表渲染
			component = [1,2].map(e => {
				return <span key={e}>changed </span>;
			});
		}
		// 返回组件
		return <h1 onClick={this.setClick}>
			Test,
			{this.props.name}
			{component}
			<ReactCSSTransitionGroup
				transitionName="test"
				transitionEnterTimeout={1000}
				transitionLeaveTimeout={1000}
			>
				{/* 动画组件下的元素必须有key */}
				<span key={this.state.bool ? 1: 0}>{this.state.bool && 145}</span>
			</ReactCSSTransitionGroup>
		</h1>;
	}
}

export default Element;