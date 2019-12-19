"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react') || znui.React;
var Alert = znui.react.createClass({
  displayName: 'Alert',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null,
      onClick: null,
      buttons: [{
        text: '确认'
      }]
    };
  },
  __onClick: function __onClick(item, index) {
    znui.react.modal.close();

    var _result = this.props.onClick && this.props.onClick(item, index, this);

    _result = item.onClick && item.onClick(item, index, this);
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-alert', this.props.className),
      style: this.props.style
    }, React.createElement("div", {
      className: "alert-inner"
    }, this.props.title && React.createElement("div", {
      className: "alert-title"
    }, this.props.title), this.props.content && React.createElement("div", {
      className: "alert-content"
    }, this.props.content)), React.createElement("div", {
      className: "alert-btns"
    }, this.props.buttons.map(function (item, index) {
      var _this = this;

      return React.createElement("div", {
        key: index,
        className: "alert-btn",
        onClick: function onClick() {
          return _this.__onClick(item, index);
        }
      }, item.text);
    }.bind(this))));
  }
});

znui.react.alert = function (content, title, callback, props) {
  znui.react.modal.create(React.createElement(Alert, _extends({
    content: content,
    title: title,
    onClick: callback
  }, props)), {
    "class": 'modal-middle modal-overlay'
  });
};

znui.react.confirm = function (content, title, confirm, cancel, options) {
  var _options = zn.extend({
    cancel: '取消',
    confirm: '确定'
  }, options);

  znui.react.modal.create(React.createElement(Alert, {
    content: content,
    title: title,
    buttons: [{
      text: _options.cancel,
      onClick: cancel
    }, {
      text: _options.confirm,
      onClick: confirm
    }]
  }), {
    "class": 'modal-middle modal-overlay'
  });
};

znui.react.prompt = function (title, confirm, cancel) {
  var _input = React.createElement("input", {
    className: "alert-input",
    type: "text"
  });

  znui.react.modal.create(React.createElement(Alert, {
    content: _input,
    title: title,
    buttons: [{
      text: '取消',
      onClick: cancel
    }, {
      text: '确定',
      onClick: function onClick(item, index, alert) {
        confirm && confirm(alert.props.content, item, index, alert);
      }
    }]
  }), {
    "class": 'modal-middle modal-overlay'
  });
};

module.exports = Alert;