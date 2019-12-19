"use strict";

var React = require('react') || znui.React;
var Dialog = znui.react.createClass({
  displayName: 'Dialog',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null
    };
  },
  __onClose: function __onClose() {
    znui.react.modal.close();
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-dialog', this.props.className),
      style: this.props.style
    }, React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && React.createElement("div", {
      className: "dialog-title"
    }, this.props.title), this.props.closeable && React.createElement("span", {
      onClick: this.__onClose,
      className: "dialog-close"
    }, "x")), React.createElement("div", {
      className: "dialog-body"
    }, this.props.content));
  }
});

znui.react.dialog = function (argv) {
  return znui.react.modal.create(React.createElement(Dialog, argv), {
    "class": 'modal-middle modal-overlay'
  });
};

module.exports = Dialog;