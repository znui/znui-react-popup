var React = znui.React || require('react');
var modal = require('./Modal').modal;
var Loader = React.createClass({
	displayName:'ZRLoader',
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
				<i className="loader" data-loader="spinner"/>
				<span className="title">{this.props.title}</span>
			</>;
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-popup-loader', this.props.className)} style={znui.react.style(this.props.style)} >
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
			create: function (argv){
				if(this._loader){
					this._loader.destroy();
				}
				return modal.create(<Loader {...argv} />, { 
					class: 'modal-middle modal-overlay',
					ref: (ref) => this._loader = ref
				}, false);
			},
			loading: function (title) {
				if(typeof title == 'string'){
					return this.create({
						title: title
					});
				}else if(typeof title == 'object') {
					return this.create(title);
				}
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