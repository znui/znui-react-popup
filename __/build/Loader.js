"use strict";

var React = znui.React || require('react');

var modal = require('./Modal').modal;

var Loader = React.createClass({
  displayName: 'Loader',
  getDefaultProps: function getDefaultProps() {
    return {
      content: null,
      title: 'Loading ... '
    };
  },
  __renderContent: function __renderContent() {
    if (this.props.content) {
      return this.props.content;
    } else if (this.props.title) {
      return React.createElement(React.Fragment, null, React.createElement("i", {
        className: "fa fa-spinner loader-self-loading"
      }), React.createElement("span", {
        className: "title"
      }, this.props.title));
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-loader', this.props.className),
      style: znui.react.style(this.props.style)
    }, this.__renderContent());
  }
});
module.exports = {
  Loader: Loader,
  loader: zn.Class({
    "static": true,
    methods: {
      create: function create(argv) {
        var _this = this;

        if (this._loader) {
          this._loader.destroy();
        }

        return modal.create(React.createElement(Loader, argv), {
          "class": 'modal-middle modal-overlay',
          ref: function ref(_ref) {
            return _this._loader = _ref;
          }
        });
      },
      loading: function loading(title) {
        return this.create({
          title: title
        });
      },
      close: function close() {
        if (this._loader) {
          this._loader.destroy();
        }

        return this;
      }
    }
  })
};