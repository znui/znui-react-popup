var React = znui.React || require('react');
var modal = require('./Modal').modal;
var Dialog = React.createClass({
	displayName:'ZRDialog',
	getDefaultProps: function (){
		return {
			title: '',
			content: null
		};
	},
	getInitialState: function (){
		return {
			fullscreen: false
		};
	},
	__onClose: function (event){
		var _result = this.props.onClose && this.props.onClose(event, this);
		if(_result !== false){
			var _dom = ReactDOM.findDOMNode(this);
			_dom.classList.add('dialog-out');
			_dom.addEventListener("animationend", function (){
				modal.close();
			}, false);
		}
	},
	__renderFullscreen: function (){
		if(this.state.fullscreen){
			return <span onClick={()=>this.setState({fullscreen: false})} className="full-screen">
				<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-restore" className="svg-inline--fa fa-window-restore fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"></path></svg>
			</span>;
		}else{
			return <span onClick={()=>this.setState({fullscreen: true})} className="full-screen">
				<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-maximize" className="svg-inline--fa fa-window-maximize fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"></path></svg>
			</span>;
		}
	},
	__headerRender: function (){ 
		if(this.props.header){
			return znui.react.createReactElement(this.props.header, this.props);
		}
		return (
			<div className="dialog-header">
				{this.props.title && <div className="dialog-title">{this.props.title}</div>}
				<div className="btns">
					{this.props.fullscreen && this.__renderFullscreen()}
					{this.props.closeable && <span onClick={this.__onClose} className="dialog-close">x</span>}
				</div>
			</div>
		);
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-popup-dialog dialog-in', this.props.className, this.props.autoWidth?'auto-width':'min-width')} style={this.props.style} data-focus={this.props.focus} data-fullscreen={this.state.fullscreen} >
				{this.__headerRender()}
				<div className={znui.react.classname("dialog-body", this.props.contentClassName)} style={this.props.contentStyle}>
					{this.props.content}
				</div>
			</div>
		);
	}
});

module.exports = {
	Dialog: Dialog,
	dialog: function (argv, ifPush){
		var _dialog = modal.create(<Dialog {...argv} />, {
			class: 'modal-middle modal-overlay'
		}, ifPush);

		return _dialog;
	}
};