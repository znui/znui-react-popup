"use strict";

var React = require('react') || znui.React;
var Loader = znui.react.createClass({
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
      className: znui.react.classname('zr-loader', this.props.className)
    }, this.__renderContent());
  }
});
module.exports = znui.react.loader = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._loader = null;
    },
    create: function create(argv) {
      if (this._loader) {
        this._loader.destroy();
      }

      this._loader = znui.react.modal.create(React.createElement(Loader, argv), {
        "class": 'modal-middle modal-overlay'
      });
      return this;
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
});