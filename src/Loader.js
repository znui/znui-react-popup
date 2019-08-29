require('./Loader.less');
var React = require('react');
var ReactDOM = require('react-dom');

var Loader = React.createClass({
	displayName:'Preloader',
	getDefaultProps: function (){
		return {
			title: 'Loading ... '
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-loader', this.props.className)} >
				<i className="fa fa-spinner zr-self-loading" />
				<span>{this.props.content||this.props.title}</span>
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