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
	componentWillUnmount: function (){
		ReactDOM.findDOMNode(this).removeEventListener(this.props.eventType, this.__eventHandler, false);
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
			_popover = zn.extend({}, this.props.popover);
		if(_target && _popover && _popover.render){
			var _render = _popover.render;
			if(zn.is(_render, 'function')) {
				if(!_render.prototype || !_render.prototype.render){
					_render = _render(event, this);
				}
			}
			if(_render) {
				event.stopPropagation();
				_popover.render = null;
				delete _popover.render;
				znui.react.popover.render(_render, zn.extend({
					reset: true,
					event: event,
					target: _target,
				}, _popover));
			}
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
