require('./Alert.less');
var React = require('react');

var Alert = React.createClass({
	displayName:'Alert',
	getDefaultProps: function (){
		return {
			title: '',
			content: null,
			onClick: null,
			buttons: [
				{ text: '确认' }
			]
		};
	},
	__onClick: function (item, index){
		znui.react.modal.close();
		var _result = this.props.onClick && this.props.onClick(item, index, this);
			_result = item.onClick && item.onClick(item, index, this);
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-alert', this.props.className)} style={this.props.style} >
				<div className="alert-inner">
					{this.props.title && <div className="alert-title">{this.props.title}</div>}
					{this.props.content && <div className="alert-content">{this.props.content}</div>}
				</div>
				<div className="alert-btns">
					{
						this.props.buttons.map(function (item, index){
							return <div key={index} className="alert-btn" onClick={()=>this.__onClick(item, index)}>{item.text}</div>;
						}.bind(this))
					}
				</div>
			</div>
		);
	}
});

znui.react.alert = function (content, title, callback, props){
	znui.react.modal.open(<Alert content={content} title={title} onClick={callback} {...props} />, {
		showOverlay: true,
		contentStyles: function (dom, modal){
			return {
				"margin-top": -(dom.offsetHeight/2)+'px',
				"margin-left": -(dom.offsetWidth/2)+'px'
			};
		}
	});
};

znui.react.confirm = function (content, title, confirm, cancel, options){
	var _options = zn.extend({ cancel: '取消', confirm: '确定' }, options);
	znui.react.modal.open(<Alert
			content={content}
			title={title}
			buttons={[
				{ text: _options.cancel, onClick: cancel },
				{ text: _options.confirm, onClick: confirm }
			]} />, {
				showOverlay: true,
				contentStyles: function (dom, modal){
					return {
						"margin-top": -(dom.offsetHeight/2)+'px',
						"margin-left": -(dom.offsetWidth/2)+'px'
					};
				}
			});
};

znui.react.prompt = function (title, confirm, cancel){
	var _input = <input className="alert-input" type="text" />;
	znui.react.modal.open(<Alert
			content={_input}
			title={title}
			buttons={[
				{ text:'取消', onClick: cancel },
				{
					text:'确定',
					onClick: function (item, index, alert){
						confirm && confirm(alert.props.content, item, index, alert);
					}
				}
			]} />, {
				showOverlay: true,
				contentStyles: function (dom, modal){
					return {
						"margin-top": -(dom.offsetHeight/2)+'px',
						"margin-left": -(dom.offsetWidth/2)+'px'
					};
				}
			});
};

module.exports = Alert;