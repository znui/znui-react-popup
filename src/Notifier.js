var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

var TYPE_ICONS = {
	heart: 'M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z',
	secondary: 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z',
	success: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
	warning: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
	error: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
	info: 'M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z',
	message: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
}

var Notifier = React.createClass({
	displayName:'ZRNotification',
	componentDidMount: function (){
		if(this.props.delay != 0) {
			this._timeout = window.setTimeout(this.out, this.props.delay || 3000);
		}
	},
	componentWillUnmount: function (){
		if(this._timeout) {
			window.clearTimeout(this._timeout);
		}
	},
	out: function (){
		var _dom = ReactDOM.findDOMNode(this);
		_dom.classList.add('notification-out');
		_dom.addEventListener("animationend", function (){
			if(this._timeout){
				window.clearTimeout(this._timeout);
			}
			if(_dom.parentNode && _dom.parentNode.parentNode){
				_dom.parentNode.parentNode.removeChild(_dom.parentNode);
				ReactDOM.unmountComponentAtNode(_dom.parentNode);
			}
		}, false);
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-popup-notifier notification-in', this.props.type)} >
				<div className="icon">
					<svg aria-hidden="true" focusable="false" data-prefix="fas"  className={znui.react.classname("svg-inline--fa fa-check fa-w-16 ", this.props.className)} style={this.props.style} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="currentColor" d={TYPE_ICONS[this.props.type||'info']}></path>
					</svg>
				</div>
				<div className="content">
					{this.props.content}
				</div>
				{
					this.props.delay === 0 && <i className="close fa fa-times" onClick={this.out} />
				}
			</div>
		);
	}
});

module.exports = {
	Notifier: Notifier,
	notifier: zn.Class({
		static: true,
		methods: {
			init: function (){
				this._dom = zn.dom.createRootElement("div", { class: 'zr-popup-notifier-container' });
			},
			open: function (type, content, delay){
				var _ref = <Notifier type={type} content={content} delay={delay} />;
				ReactDOM.render(_ref, zn.dom.createElement('div', {}, this._dom));
				return _ref;
			},
			success: function (content, delay){
				return this.open('success', content, delay);
			},
			warning: function (content, delay){
				return this.open('warning', content, delay);
			},
			error: function (content, delay){
				return this.open('error', content, delay);
			},
			info: function (content, delay){
				return this.open('info', content, delay);
			},
			message: function (content, delay){
				return this.open('message', content, delay);
			}
		}
	})
};