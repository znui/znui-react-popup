require('./Loader.less');
var React = require('react');

var Loader = znui.react.createClass({
	displayName:'Preloader',
	getDefaultProps: function (){
		return {
			content: null,
			title: 'Loading ... '
		}
	},
	__renderContent: function (){
		if(this.props.content){
			return this.props.content;
		}else if(this.props.title){
			return <>
				<i className="fa fa-spinner loader-self-loading" />
				<span className="title">{this.props.title}</span>
			</>;
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-loader', this.props.className)} >
				{this.__renderContent()}
			</div>
		);
	}
});

module.exports = znui.react.loader = zn.Class({
	static: true,
	methods: {
		init: function (){
			this._loader = null;
		},
		create: function (argv){
			if(this._loader){
				this._loader.destroy();
			}
			this._loader = znui.react.modal.create(<Loader {...argv} />, { class: 'modal-middle modal-overlay' });

			return this;
		},
		loading: function (title) {
			return this.create({
				title: title
			});
		},
		close: function (){
			if(this._loader){
				this._loader.destroy();
			}

			return this;
		}
	}
});