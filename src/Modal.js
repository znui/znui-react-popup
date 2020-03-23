var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

var Modal = React.createClass({
	displayName:'ZRModal',
	componentDidMount: function (){
		this.props.onComponentDidMount && this.props.onComponentDidMount(this);
	},
	destroy: function (callback){
		if(!this.__isMounted){
			return false;
		}
		var _dom = ReactDOM.findDOMNode(this);
		var _result = this.props.onDestroyBefore && this.props.onDestroyBefore(_dom);
		if(_result === false) {
			return false;
		}
		if(_dom && _dom.parentNode.parentNode){
			_dom.parentNode.parentNode.removeChild(_dom.parentNode);
			ReactDOM.unmountComponentAtNode(_dom.parentNode);
		}
		this.props.onDestroy && this.props.onDestroy();
		callback && callback();
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
				this._dom = zn.dom.createRootElement("div", { class: "zr-popup-modal-container" });
				this._modals = [];
			},
			create: function (content, options){
				var _ref = null;
				return ReactDOM.render(<Modal {...options} ref={(ref)=>_ref = ref}>{content}</Modal>, zn.dom.createElement('div', {
					class: znui.classname('zr-popup-modal', options.class),
					style: znui.style(options.style)
				}, this._dom), ()=>{
					this._modals.push(_ref);
					options.ref && options.ref(_ref);
				});
			},
			close: function (delay, callback){
				var _modal = this._modals.pop();
				if(_modal){
					if(delay){
						setTimeout(() => _modal.destroy(callback), delay);
					}else{
						_modal.destroy(callback);
					}
				}
	
				return this;
			},
			closeAll: function (delay){
				if(this._modals.length){
					this.close(delay, this.closeAll);
				}
	
				return this;
			},
			size: function (){
				return this._modals.length;
			}
		}
	})
};
