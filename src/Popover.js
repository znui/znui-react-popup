var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

var Popover = React.createClass({
	displayName:'ZRPopover',
	getDefaultProps: function (){
		return {
			hiddenHeight: 5,
			stopPropagation: false,
			closeable: false,
			popoverWidth: null,
			popoverHeight: null
		}
	},
	getInitialState: function (){
		return {
			arrowClassName: ''
		}
	},
	componentDidMount: function (){
		this._dom = ReactDOM.findDOMNode(this);
		this._dom.addEventListener(this.props.event.type, this.__eventListener, false);
		setTimeout(function (){
			this.fixPosition(this.props.target);
		}.bind(this), 0);

		this.props.onPopoverDidMount && this.props.onPopoverDidMount(this);
	},
	__eventListener: function (event){
		var _result = this.props.onContainerEvent && this.props.onContainerEvent(event, this);
		if(this.props.stopPropagation) {
			event.stopPropagation();
			event.preventDefault();
		}
		if(_result !== false ){
			this.close();
		}
	},
	close: function (callback){
		if(!this._dom) return;
		var _dom = this._dom;
		_dom.classList.add('popover-out');
		_dom.removeEventListener(this.props.event.type, this.__eventListener, false);
		_dom.addEventListener("animationend", function (){
			if(_dom.parentNode && _dom.parentNode.parentNode){
				_dom.parentNode.parentNode.removeChild(_dom.parentNode);
				ReactDOM.unmountComponentAtNode(_dom.parentNode);
				callback && callback();
			}
		}, false);
	},
	fixPosition: function (target){
		var _popover = this._dom;
		var _t = zn.dom.getPosition(target),
			_popoverWidth = this.props.popoverWidth || _t.width,
			_popoverHeight = this.props.popoverHeight || zn.dom.getPosition(_popover).height,
			_left = null,
			_top = null,
			_arrowClassNames = [];

		if(_popoverWidth == '100%'){
			_popoverWidth = _t.width;
		}

		if(_popoverHeight < this.props.hiddenHeight){
			this.props.onHidden && this.props.onHidden();
			return;
		}

		if((_t.x + _popoverWidth) > window.screen.availWidth){
			_arrowClassNames.push('zr-arrow-placement-right');
			_left = document.body.scrollWidth - _t.x - _t.width;
			_popover.style.right = _left + 'px';
			_popover.parentNode.style.right = '0px';
		}else {
			_left = _t.x;
			_arrowClassNames.push('zr-arrow-placement-left');
			_popover.style.left = _left + 'px';
		}

		if((_t.y + _popoverHeight) > window.screen.availHeight){
			_arrowClassNames.push('zr-arrow-direction-bottom');
			_top = _t.height + 10;
			_popover.style.bottom = _top + 'px';
			_popover.parentNode.style.bottom = '0px';
		} else {
			_top = _t.y + _t.height + 10;
			_arrowClassNames.push('zr-arrow-direction-top');
			_popover.style.top = _top + 'px';
		}

		if(this.props.popoverWidth){
			_popover.style.width = _popoverWidth + 'px';
		}

		if(this.props.popoverHeight){
			if(_popover.offsetHeight != _popoverHeight){
				_popover.style.height = _popoverHeight + 'px';
			}
		}

		_popover.style.visibility = 'visible';
		_arrowClassNames.push('zr-animate-scale-up');
		_popover.className = _popover.className + ' ' + _arrowClassNames.join(' ');
	},
	__onContentScroll: function (event){
		this.props.onContentScroll && this.props.onContentScroll(event, this);
	},
	render: function(){
		var _style = {};
		if(this.props.height){
			_style.maxHeight = this.props.height + 'px';
		}else {
			_style.height = 'auto';
		}
		return (
			<div className={znui.react.classname('zr-popup-popover popover-in zr-arrow zr-arrow-color-white', this.state.arrowClassName)} >
				{
					this.props.closeable && <span className="popover-close zr-hover-self-loading" onClick={()=>this.close('self close')}>
						<svg aria-hidden="true" focusable="false" data-prefix="fas"  className="svg-inline--fa fa-check fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
						</svg>
					</span>
				}
				<div onScroll={this.__onContentScroll} className={znui.react.classname("popover-content", this.props.className)} style={zn.extend({}, this.props.style), _style} >{this.props.content}</div>
			</div>
		);
	}
});

module.exports = {
	Popover: Popover,
	popover: zn.Class({
		static: true,
		methods: {
			init: function (){
				this._dom = zn.dom.createRootElement("div", { class: "zr-popup-popover-container" });
				this._popovers = {};
			},
			__resolveAllPopover: function (target, values){
				values = values || [];
				if(target){
					if(target.tagName == 'BODY') return values;
					if(target.getAttribute){
						if(target.getAttribute("data-popover-id")){
							values.push(target.getAttribute("data-popover-id"));
						}
						if(target.getAttribute("data-popover-ref-ids")){
							values = values.concat(target.getAttribute("data-popover-ref-ids"));
						}
					}

					return this.__resolveAllPopover(target.parentNode, values);
				}
				return values;
			},
			__initWindowEvent: function (options){
				var _type = options.event.type;
				window.__znui_react_popup_events__ = window.__znui_react_popup_events__ || [];
				if(window.__znui_react_popup_events__.indexOf(_type) === -1){
					window.__znui_react_popup_events__.push(_type);
					window.addEventListener(_type, (event)=>this.__onWindowClick(event, options), false);
				}
			},
			__onWindowClick: function (event, options){
				this.closeTarget(event.target);
			},
			render: function (content, options){
				if(options){
					if(options.reset) {
						this.closeTarget(options.target);
					}
					if(options.event){
						this.__initWindowEvent(options);
					}
				}

				var _id = zn.uuid(),
					_refids = this.__resolveAllPopover(options.event.target),
					_attrs = {
						"data-popover-id": _id
					};
				if(_refids.length){
					_attrs["data-popover-ref-ids"] = _refids.join(',');
				}
				var _dom = zn.dom.createElement('div', _attrs, this._dom);
				var _popover = ReactDOM.render(<Popover {...options} 
					content={content} 
					onContentScroll={(event, popover)=>{
						this.closeTarget(event.target);
					}} />, _dom);

				return this._popovers[_id] = _popover, _popover;
			},
			closeTarget: function (target){
				var _popovers = this.__resolveAllPopover(target, []) || [];
				for(var key in this._popovers){
					if(_popovers.indexOf(key) === -1){
						this._popovers[key].close();
						this._popovers[key] = null;
						delete this._popovers[key];
					}
				}
			},
			closeAll: function (tag){
				if(this._popover){
					this._popover.close(tag);
					this._popover = null;
				}
	
				return this;
			}
		}
	})
};
