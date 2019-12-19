"use strict";

var React = require('react') || znui.React;
var ReactDOM = require('react-dom') || znui.ReactDOM;
var Modal = znui.react.createClass({
  displayName: 'Modal',
  destroy: function destroy() {
    var _dom = ReactDOM.findDOMNode(this);

    if (_dom && _dom.parentNode.parentNode) {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);
    }
  },
  render: function render() {
    return React.createElement(React.Fragment, null, this.props.children);
  }
});
;
module.exports = znui.react.modal = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": "zr-modal-container"
      });
      this._modals = [];
    },
    create: function create(content, options) {
      var _modal = ReactDOM.render(React.createElement(Modal, options, content), zn.dom.createElement('div', {
        "class": znui.classname('zr-modal', options["class"]),
        style: znui.style(options.style)
      }, this._dom));

      return this._modals.push(_modal), _modal;
    },
    close: function close(delay) {
      var _modal = this._modals.pop();

      if (_modal) {
        if (delay) {
          setTimeout(function () {
            return _modal.destroy();
          }, delay);
        } else {
          _modal.destroy();
        }
      }

      return this;
    },
    closeAll: function closeAll(delay) {
      if (this._modals.length) {
        this.close(delay);
        this.closeAll();
      }

      return this;
    },
    size: function size() {
      return this._modals.length;
    }
  }
});