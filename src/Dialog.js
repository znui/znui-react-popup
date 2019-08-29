require('./Dialog.less');
var React = require('react');
var ReactDOM = require('react-dom');

var Dialog = znui.react.createClass({
	displayName:'Dialog',
	getDefaultProps: function (){
		return {
			title: '',
			content: null
		};
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-dialog', this.props.className)} style={this.props.style} >
				<div className="dialog-header">
					{this.props.title && <div className="dialog-title">{this.props.title}</div>}
				</div>
				<div className="dialog-body">
					{this.props.content}
				</div>
			</div>
		);
	}
});

znui.react.dialog = function (argv){
	return znui.react.modal.create(<Dialog {...argv} />, {
		class: 'modal-middle modal-overlay'
	});
};

module.exports = Dialog;