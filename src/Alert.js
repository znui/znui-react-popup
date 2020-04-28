var React = znui.React || require('react');
var modal = require('./Modal').modal;
var Alert = React.createClass({
	displayName:'ZRAlert',
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
		item.index = index;
		var _result = this.props.onClick && this.props.onClick(item, this);
			_result = item.onClick && item.onClick(item, this);
		if(_result !== false){
			zn.debug('alert.close');
			modal.close();
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-popup-alert', this.props.className)} style={this.props.style} >
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

module.exports = {
	Alert: Alert,
	alert: function (content, title, callback, props){
		var _alert = modal.create(<Alert 
			content={content} 
			title={title} 
			onClick={callback} {...props} />, {
				class: 'modal-middle modal-overlay'
			}, false);
 
        return _alert;
	},
	confirm: function (content, title, confirm, cancel, options){
		var _options = zn.extend({ cancel: '取消', confirm: '确定' }, options);
		var _confirm = modal.create(<Alert
			content={content}
			title={title}
			buttons={[
				{ 
					text: _options.cancel, 
					onClick: function (){
						var _return = cancel && cancel(_confirm);
						if(_return !== false){
							_confirm.destroy();
						}

						return false;
					} 
				},
				{ 
					text: _options.confirm, 
					onClick: function (){
						var _return = confirm && confirm(_confirm);
						if(_return !== false){
							_confirm.destroy();
						}
						
						return false;
					} 
				}
			]} />, {
				class: 'modal-middle modal-overlay'
			}, false);

        return _confirm;
	},
	prompt: function (argv){
		var _argv = zn.extend({
			title: argv.title,
			content: <input className="alert-input" onChange={argv.onChange} type="text" />,
			confirm: argv.confirm,
			cancel: argv.cancel
		}, argv);
		var _prompt = modal.create(<Alert
			content={_argv.content}
			title={_argv.title}
			buttons={[
				{ 
					text: _argv.cancelText || '取消', 
					onClick: function (event, alert){
						var _return = _argv.cancel && _argv.cancel(event, alert);
						if(_return !== false){
							_prompt.destroy();
						}

						return false;
					} 
				},
				{
					text: _argv.confirmText || '确定',
					onClick: function (event, alert){
						var _return = _argv.confirm && _argv.confirm(event, alert);
						if(_return !== false){
							_prompt.destroy();
						}

						return false;
					}
				}
			]} />, {
				class: 'modal-middle modal-overlay'
			}, false);

		return _prompt;
	}
};