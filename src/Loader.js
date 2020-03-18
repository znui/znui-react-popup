var React = znui.React || require('react');
var modal = require('./Modal').modal;
var Loader = React.createClass({
	displayName:'Loader',
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
			<div className={znui.react.classname('zr-loader', this.props.className)} style={znui.react.style(this.props.style)} >
				{this.__renderContent()}
			</div>
		);
	}
});

module.exports = {
	Loader: Loader,
	loader: zn.Class({
		static: true,
		methods: {
			init: function (){
				this._loader = null;
			},
			create: function (argv){
				if(this._loader){
					this._loader.destroy();
				}
				this._loader = modal.create(<Loader {...argv} />, { class: 'modal-middle modal-overlay' });
	
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
	})
};