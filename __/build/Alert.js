"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var modal = require('./Modal').modal;

var Alert = React.createClass({
  displayName: 'ZRAlert',
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
    item.index = index;

    var _result = this.props.onClick && this.props.onClick(item, this);

    _result = item.onClick && item.onClick(item, this);

    if (_result !== false) {
      //zn.debug('alert.close');
      modal.close();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-alert', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "alert-inner"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "alert-title"
    }, this.props.title), this.props.content && /*#__PURE__*/React.createElement("div", {
      className: "alert-content"
    }, this.props.content)), /*#__PURE__*/React.createElement("div", {
      className: "alert-btns"
    }, this.props.buttons.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "alert-btn",
        onClick: function onClick() {
          return _this.__onClick(item, index);
        }
      }, item.text);
    }.bind(this))));
  }
});
module.exports = {
  Alert: Alert,
  alert: function alert(content, title, callback, props) {
    var _alert = modal.create( /*#__PURE__*/React.createElement(Alert, _extends({
      content: content,
      title: title,
      onClick: callback
    }, props)), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _alert;
  },
  confirm: function confirm(content, title, _confirm2, cancel, options) {
    var _options = zn.extend({
      cancel: '取消',
      confirm: '确定'
    }, options);

    var _confirm = modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: content,
      title: title,
      buttons: [{
        text: _options.cancel,
        onClick: function onClick() {
          var _return = cancel && cancel(_confirm);

          if (_return !== false) {
            _confirm.destroy();
          }

          return false;
        }
      }, {
        text: _options.confirm,
        onClick: function onClick() {
          var _return = _confirm2 && _confirm2(_confirm);

          if (_return !== false) {
            _confirm.destroy();
          }

          return false;
        }
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _confirm;
  },
  prompt: function prompt(argv) {
    var _argv = zn.extend({
      title: argv.title,
      content: /*#__PURE__*/React.createElement("input", {
        className: "alert-input",
        onChange: argv.onChange,
        type: "text"
      }),
      confirm: argv.confirm,
      cancel: argv.cancel
    }, argv);

    var _prompt = modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: _argv.content,
      title: _argv.title,
      buttons: [{
        text: _argv.cancelText || '取消',
        onClick: function onClick(event, alert) {
          var _return = _argv.cancel && _argv.cancel(event, alert);

          if (_return !== false) {
            _prompt.destroy();
          }

          return false;
        }
      }, {
        text: _argv.confirmText || '确定',
        onClick: function onClick(event, alert) {
          var _return = _argv.confirm && _argv.confirm(event, alert);

          if (_return !== false) {
            _prompt.destroy();
          }

          return false;
        }
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _prompt;
  }
};