import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Element extends Component {
	constructor(props) {
		// 调用父级的constructor(props)
		super(props);
		// 初始化 state
		this.state = {
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
		let component = <span> Toggle</span>;
		if (this.state.bool) {
			// 列表渲染
			component = [1].map(e => {
				return <span key={e}> Changed </span>;
			});
		}
		// 返回组件
		return <h1 onClick={this.setClick}>
			<ReactCSSTransitionGroup
				transitionName="tran"
				transitionEnterTimeout={1000}
				transitionLeaveTimeout={1000}
			>
				{/* 动画组件下的元素必须有key */}
				<span key={this.state.bool ? 1 : 0}> Animate <br /></span>
			</ReactCSSTransitionGroup>
			{this.props.name} <br />
			{component} <br />
			<style jsx>{`
				h1 {
					color: #ccc;
				}
				.tran-enter {
					opacity: 0.01;
				}
				.tran-enter.tran-enter-active {
					opacity: 1;
					transition: opacity 500ms ease-in;
				}
				.tran-leave {
					opacity: 1;
				}
				.tran-leave.tran-leave-active {
					opacity: 0.01;
					transition: opacity 300ms ease-in;
				}
			`}</style>
		</h1>;
	}
}

export default Element;