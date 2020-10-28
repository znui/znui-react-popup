"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = znui.React || require('react');

var modal = require('./Modal').modal;

var Loader = React.createClass({
  displayName: 'ZRLoader',
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
        className: "loader",
        "data-loader": "spinner"
      }), /*#__PURE__*/React.createElement("span", {
        className: "title"
      }, this.props.title));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-loader', this.props.className),
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

        return modal.create( /*#__PURE__*/React.createElement(Loader, argv), {
          "class": 'modal-middle modal-overlay',
          ref: function ref(_ref) {
            return _this._loader = _ref;
          }
        }, false);
      },
      loading: function loading(title) {
        if (typeof title == 'string') {
          return this.create({
            title: title
          });
        } else if (_typeof(title) == 'object') {
          return this.create(title);
        }
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