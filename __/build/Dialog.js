"use strict";

var React = znui.React || require('react');

var modal = require('./Modal').modal;

var Dialog = React.createClass({
  displayName: 'ZRDialog',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null
    };
  },
  __onClose: function __onClose() {
    modal.close();
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
module.exports = {
  Dialog: Dialog,
  dialog: function dialog(argv) {
    return modal.create(React.createElement(Dialog, argv), {
      "class": 'modal-middle modal-overlay'
    });
  }
};