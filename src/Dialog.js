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
	__onClose: function (event){
		var _result = this.props.onClose && this.props.onClose(event, this);
		if(_result !== false){
			modal.close();
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-popup-dialog', this.props.className)} style={this.props.style} data-focus={this.props.focus} >
				<div className="dialog-header">
					{this.props.title && <div className="dialog-title">{this.props.title}</div>}
					{this.props.closeable && <span onClick={this.__onClose} className="dialog-close">x</span>}
				</div>
				<div className="dialog-body">
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