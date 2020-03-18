var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

var Modal = React.createClass({
	displayName:'Modal',
	destroy: function (){
		var _dom = ReactDOM.findDOMNode(this);
		var _result = this.props.onDestroyBefore && this.props.onDestroyBefore(_dom);
		if(_result === false) {
			return false;
		}
		if(_dom && _dom.parentNode.parentNode){
			_dom.parentNode.parentNode.removeChild(_dom.parentNode);
		}
		this.props.onDestroy && this.props.onDestroy();
	},
	render: function(){
		return (
			<>{this.props.children}</>
		);
	}
});;

module.exports = {
	Modal: Modal,
	modal: zn.Class({
		static: true,
		methods: {
			init: function (){
				this._dom = zn.dom.createRootElement("div", { class: "zr-modal-container" });
				this._modals = [];
			},
			create: function (content, options){
				var _modal = ReactDOM.render(<Modal {...options} >{content}</Modal>, zn.dom.createElement('div', {
					class: znui.classname('zr-modal', options.class),
					style: znui.style(options.style)
				}, this._dom));
	
				return this._modals.push(_modal), _modal;
			},
			close: function (delay){
				var _modal = this._modals.pop();
				if(_modal){
					if(delay){
						setTimeout(() => _modal.destroy(), delay);
					}else{
						_modal.destroy();
					}
				}
	
				return this;
			},
			closeAll: function (delay){
				if(this._modals.length){
					this.close(delay);
					this.closeAll();
				}
	
				return this;
			},
			size: function (){
				return this._modals.length;
			}
		}
	})
};
