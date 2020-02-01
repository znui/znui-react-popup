"use strict";

var React = znui.React || require('react');

var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
  displayName: 'ZRDropdown',
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      eventType: 'click'
    };
  },
  componentDidMount: function componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener(this.props.eventType, this.__eventHandler, false);
  },
  getParent: function getParent(target) {
    if (target.classList.contains('zr-dropdown')) {
      return target;
    } else {
      return this.getParent(target.parentNode);
    }
  },
  __eventHandler: function __eventHandler(event) {
    if (this.props.disabled) {
      return;
    }

    var _target = this.getParent(event.target),
        _render = this.props.popoverRender && this.props.popoverRender(event, this);

    if (_target && _render) {
      event.stopPropagation();
      znui.react.popover.render(_render, zn.extend({
        event: event,
        reset: true,
        target: _target,
        height: this.props.height
      }, this.props.popover));
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname("zr-dropdown", this.props.className),
      style: this.props.style
    }, this.props.children);
  }
});