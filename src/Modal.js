var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

var Modal = React.createClass({
	displayName:'ZRModal',
	getInitialState: function (){
		return {
			destroyed: false
		};
	},
	componentDidMount: function (){
		this.props.onComponentDidMount && this.props.onComponentDidMount(this);
	},
	close: function (callback){
		return this.destroy(callback);
	},
	destroy: function (callback){
		if(!this.__isMounted || this.state.destroyed){
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
		callback && callback();
		this.state.destroyed = true;
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
				this._dom = zn.dom.createRootElement("div", { class: "zr-popup-modal-container" });
				this._modals = [];
			},
			create: function (content, options, ifPush){
				var _modal =  ReactDOM.render(<Modal {...options}>{content}</Modal>, zn.dom.createElement('div', {
					class: znui.classname('zr-popup-modal', options.class),
					style: znui.style(options.style)
				}, this._dom));
				//zn.debug('Modal created(' + (this._modals.length + 1) + '): ', _modal);
				if(ifPush !== false){
					this._modals.push(_modal)
				}

				return _modal;
			},
			close: function (delay, callback){
				//zn.debug('Modal close(' + this._modals.length + '): ');
				var _modal = this._modals.pop();
				if(_modal){
					if(_modal.state.destroyed){
						return this.close(delay, callback);
					}
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
