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
	__onClose: function (){
		modal.close();
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-dialog', this.props.className)} style={this.props.style} >
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
	dialog: function (argv){
		return modal.create(<Dialog {...argv} />, {
			class: 'modal-middle modal-overlay'
		});
	}
};