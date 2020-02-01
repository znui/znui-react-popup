var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
	displayName:'ZRDropdown',
	getDefaultProps: function (){
		return {
			disabled: false,
			eventType: 'click'
		}
	},
	componentDidMount: function (){
		ReactDOM.findDOMNode(this).addEventListener(this.props.eventType, this.__eventHandler, false);
	},
	getParent: function (target){
		if(target.classList.contains('zr-dropdown')){
			return target;
		}else {
			return this.getParent(target.parentNode);
		}
	},
	__eventHandler: function (event){
		if(this.props.disabled){ 
			return; 
		}
		var _target = this.getParent(event.target),
			_render = this.props.popoverRender && this.props.popoverRender(event, this);
		if(_target && _render){
			event.stopPropagation();
			znui.react.popover.render(_render, zn.extend({
				event: event,
				reset: true,
				target: _target,
				height: this.props.height
			}, this.props.popover));
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-dropdown", this.props.className)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
});
