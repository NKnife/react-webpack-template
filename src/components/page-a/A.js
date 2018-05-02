import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Element extends Component {
	constructor(props) {
		// 调用父级的 constructor(props)
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
		let component = <span>Tap to toggle</span>;
		if (this.state.bool) {
			// 列表渲染
			component = [1].map(e => {
				return <span key={e}> Changed </span>;
			});
		}
		// 返回组件
		return <h1 onClick={this.setClick}>
			{this.props.name} <br />
			{component} <br />
			<TransitionGroup>
				{!this.state.bool && (
					<CSSTransition
						classNames="tran"
						timeout={9400}
						in={this.state.bool}
					>
						<div>
							<span> Animate <br /></span>
						</div>
					</CSSTransition>
				)}
			</TransitionGroup>
			<style jsx>{`
				h1 {
					color: #ccc;
				}
				.tran-enter, .tran-exit.tran-exit-active {
					span {
						opacity: 0;
					}
				}
				.tran-exit, .tran-enter.tran-enter-active {
					* {
						transition: all .4s;
					}
					span {
						opacity: 1;
					}
				}
			`}</style>
		</h1>;
	}
}

export default Element;