(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Alert.js":
/*!******************!*\
  !*** ./Alert.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "./Modal.js").modal;

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
    modal.close();

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
module.exports = {
  Alert: Alert,
  alert: function alert(content, title, callback, props) {
    modal.create(React.createElement(Alert, _extends({
      content: content,
      title: title,
      onClick: callback
    }, props)), {
      "class": 'modal-middle modal-overlay'
    });
  },
  confirm: function confirm(content, title, _confirm, cancel, options) {
    var _options = zn.extend({
      cancel: '取消',
      confirm: '确定'
    }, options);

    modal.create(React.createElement(Alert, {
      content: content,
      title: title,
      buttons: [{
        text: _options.cancel,
        onClick: cancel
      }, {
        text: _options.confirm,
        onClick: _confirm
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    });
  },
  prompt: function prompt(title, confirm, cancel) {
    var _input = React.createElement("input", {
      className: "alert-input",
      type: "text"
    });

    modal.create(React.createElement(Alert, {
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
  }
};

/***/ }),

/***/ "./Dialog.js":
/*!*******************!*\
  !*** ./Dialog.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "./Modal.js").modal;

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

/***/ }),

/***/ "./Dropdown.js":
/*!*********************!*\
  !*** ./Dropdown.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

module.exports = {
  Dropdown: React.createClass({
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
    componentWillUnmount: function componentWillUnmount() {
      ReactDOM.findDOMNode(this).removeEventListener(this.props.eventType, this.__eventHandler, false);
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
          _popover = zn.extend({}, this.props.popover);

      if (_target && _popover && _popover.render) {
        var _render = _popover.render;

        if (zn.is(_render, 'function')) {
          if (!_render.prototype || !_render.prototype.render) {
            _render = _render(event, this);
          }
        }

        if (_render) {
          event.stopPropagation();
          _popover.render = null;
          delete _popover.render;
          znui.react.popover.render(_render, zn.extend({
            reset: true,
            event: event,
            target: _target
          }, _popover));
        }
      }
    },
    render: function render() {
      return React.createElement("div", {
        className: znui.react.classname("zr-dropdown", this.props.className),
        style: this.props.style
      }, this.props.children);
    }
  })
};

/***/ }),

/***/ "./Loader.js":
/*!*******************!*\
  !*** ./Loader.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "./Modal.js").modal;

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

/***/ }),

/***/ "./Modal.js":
/*!******************!*\
  !*** ./Modal.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Modal = React.createClass({
  displayName: 'Modal',
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
  },
  destroy: function destroy() {
    if (!this.__isMounted) {
      return false;
    }

    var _dom = ReactDOM.findDOMNode(this);

    var _result = this.props.onDestroyBefore && this.props.onDestroyBefore(_dom);

    if (_result === false) {
      return false;
    }

    if (_dom && _dom.parentNode.parentNode) {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);

      ReactDOM.unmountComponentAtNode(_dom.parentNode);
    }

    this.props.onDestroy && this.props.onDestroy();
  },
  render: function render() {
    return React.createElement(React.Fragment, null, this.props.children);
  }
});
;
module.exports = {
  Modal: Modal,
  modal: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-modal-container"
        });
        this._modals = [];
      },
      create: function create(content, options) {
        var _this = this;

        var _ref = null;
        return ReactDOM.render(React.createElement(Modal, _extends({}, options, {
          ref: function ref(_ref2) {
            return _ref = _ref2;
          }
        }), content), zn.dom.createElement('div', {
          "class": znui.classname('zr-modal', options["class"]),
          style: znui.style(options.style)
        }, this._dom), function () {
          _this._modals.push(_ref);

          options.ref && options.ref(_ref);
        });
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
  })
};

/***/ }),

/***/ "./Notification.js":
/*!*************************!*\
  !*** ./Notification.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var TYPE_ICONS = {
  heart: 'fa-heart',
  secondary: 'fa-comment',
  success: 'fa-check',
  warning: 'fa-exclamation',
  error: 'fa-times',
  info: 'fa-info'
};
var Notification = React.createClass({
  displayName: 'Notification',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1500);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('notification-out');

    _dom.addEventListener("animationend", function () {
      if (_dom.parentNode.parentNode) {
        _dom.parentNode.parentNode.removeChild(_dom.parentNode);
      }
    }, false);
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-notification notification-in', this.props.type)
    }, React.createElement("div", {
      className: "icon"
    }, React.createElement("i", {
      className: "fa " + TYPE_ICONS[this.props.type || 'info']
    })), React.createElement("div", {
      className: "content"
    }, this.props.content), React.createElement("i", {
      className: "close fa fa-times",
      onClick: this.out
    }));
  }
});
module.exports = {
  Notification: Notification,
  notification: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": 'zr-notification-container'
        });
      },
      open: function open(type, content, delay) {
        ReactDOM.render(React.createElement(Notification, {
          type: type,
          content: content,
          delay: delay
        }), zn.dom.createElement('div', {}, this._dom));
      },
      success: function success(content, delay) {
        return this.open('success', content, delay);
      },
      warning: function warning(content, delay) {
        return this.open('warning', content, delay);
      },
      error: function error(content, delay) {
        return this.open('error', content, delay);
      },
      info: function info(content, delay) {
        return this.open('info', content, delay);
      }
    }
  })
};

/***/ }),

/***/ "./Popover.js":
/*!********************!*\
  !*** ./Popover.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

var Popover = React.createClass({
  displayName: 'ZRPopover',
  getDefaultProps: function getDefaultProps() {
    return {
      hiddenHeight: 5,
      closeable: false,
      popoverWidth: null,
      popoverHeight: null
    };
  },
  getInitialState: function getInitialState() {
    return {
      arrowClassName: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._dom = ReactDOM.findDOMNode(this);

    if (this.props.event) {
      this._eventType = this.props.event.type || this.props.event;
      window.addEventListener(this._eventType, this.__onWindowClick, false);

      this._dom.addEventListener(this._eventType, function (event) {
        var _result = this.props.onContainerEvent && this.props.onContainerEvent(event, this);

        if (_result === true) {//event.stopPropagation();
        }
      }.bind(this), true);

      setTimeout(function () {
        this.fixPosition(this.props.target);
      }.bind(this), 0);
    }

    this.props.onPopoverDidMount && this.props.onPopoverDidMount(this);
  },
  __isMatchParent: function __isMatchParent(target, parent) {
    if (target) {
      if (target.tagName == 'BODY' || target.tagName == 'HTML') {
        return false;
      }

      if (target !== parent) {
        return this.__isMatchParent(target.parentNode, parent);
      } else {
        return true;
      }
    } else {
      return true;
    }
  },
  __onWindowClick: function __onWindowClick(event) {
    if (!this.__isMatchParent(event.target, this._dom)) {
      var _result = this.props.onWindowOutsideContainerEvent && this.props.onWindowOutsideContainerEvent(event, this);

      if (_result !== true) {
        this.close("Popover: on window outside container event");
      }
    } else {
      var _result = this.props.onWindowInsideContainerEvent && this.props.onWindowInsideContainerEvent(event, this);

      if (_result === true) {
        this.close("Popover: on window inside container event");
      }
    }
  },
  close: function close(tag) {
    //zn.info('Popover.close:', tag);
    if (this._dom) {
      window.removeEventListener(this._eventType, this.__onWindowClick, false);

      if (this._dom.parentNode) {
        this._dom.parentNode.style = '';
        ReactDOM.unmountComponentAtNode(this._dom.parentNode);
      }

      this._dom = null;
      this._eventType = null;
    }
  },
  fixPosition: function fixPosition(target) {
    var _popover = this._dom;

    var _t = zn.dom.getPosition(target),
        _popoverWidth = this.props.popoverWidth || _t.width,
        _popoverHeight = this.props.popoverHeight || zn.dom.getPosition(_popover).height,
        _left = null,
        _top = null,
        _arrowClassNames = [];

    if (_popoverWidth == '100%') {
      _popoverWidth = _t.width;
    }

    if (_popoverHeight < this.props.hiddenHeight) {
      this.props.onHidden && this.props.onHidden();
      return;
    }

    if (_t.x + _popoverWidth > window.screen.availWidth) {
      _arrowClassNames.push('zr-arrow-placement-right');

      _left = document.body.scrollWidth - _t.x - _t.width;
      _popover.style.right = _left + 'px';
      _popover.parentNode.style.right = '0px';
    } else {
      _left = _t.x;

      _arrowClassNames.push('zr-arrow-placement-left');

      _popover.style.left = _left + 'px';
    }

    if (_t.y + _popoverHeight > window.screen.availHeight) {
      _arrowClassNames.push('zr-arrow-direction-bottom');

      _top = _t.height + 10;
      _popover.style.bottom = _top + 'px';
      _popover.parentNode.style.bottom = '0px';
    } else {
      _top = _t.y + _t.height + 10;

      _arrowClassNames.push('zr-arrow-direction-top');

      _popover.style.top = _top + 'px';
    }

    if (this.props.popoverWidth) {
      _popover.style.width = _popoverWidth + 'px';
    }

    if (this.props.popoverHeight) {
      if (_popover.offsetHeight != _popoverHeight) {
        _popover.style.height = _popoverHeight + 'px';
      }
    }

    _popover.style.visibility = 'visible';

    _arrowClassNames.push('zn-animate-scale-up');

    _popover.className = _popover.className + ' ' + _arrowClassNames.join(' ');
  },
  render: function render() {
    var _this = this;

    var _style = {};

    if (this.props.height) {
      _style.maxHeight = this.props.height + 'px';
    } else {
      _style.height = 'auto';
    }

    return React.createElement("div", {
      className: znui.react.classname('zr-popover zr-arrow zr-arrow-color-white', this.state.arrowClassName)
    }, this.props.closeable && React.createElement("span", {
      className: "popover-close zr-hover-self-loading",
      onClick: function onClick() {
        return _this.close('self close');
      }
    }, React.createElement(SVGIcon, {
      icon: "faTimes"
    })), React.createElement("div", {
      className: znui.react.classname("popover-content", this.props.className),
      style: (zn.extend({}, this.props.style), _style)
    }, this.props.content));
  }
});
module.exports = {
  Popover: Popover,
  popover: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popover-container"
        });
      },
      render: function render(content, options) {
        if (options && options.reset) {
          this.close('zn.popover:render');
        }

        return this._popover = ReactDOM.render(React.createElement(Popover, _extends({}, options, {
          content: content
        })), this._dom), this._popover;
      },
      close: function close(tag) {
        if (this._popover) {
          this._popover.close(tag);

          this._popover = null;
        }

        return this;
      }
    }
  })
};

/***/ }),

/***/ "./Toast.js":
/*!******************!*\
  !*** ./Toast.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Toast = React.createClass({
  displayName: 'Toast',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1500);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('toast-out');

    _dom.addEventListener("animationend", function () {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);
    }, false);
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-toast toast-in', this.props.type)
    }, this.props.content);
  }
});
module.exports = {
  Toast: Toast,
  toast: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-toast-container"
        });
      },
      open: function open(type, content, delay) {
        var _dom = document.createElement('div');

        ReactDOM.render(React.createElement(Toast, {
          type: type,
          content: content,
          delay: delay
        }), _dom);

        this._dom.appendChild(_dom);
      },
      success: function success(content, delay) {
        return this.open('success', content, delay);
      },
      warning: function warning(content, delay) {
        return this.open('warning', content, delay);
      },
      error: function error(content, delay) {
        return this.open('danger', content, delay);
      },
      info: function info(content, delay) {
        return this.open('info', content, delay);
      }
    }
  })
};

/***/ }),

/***/ "./Tooltip.js":
/*!********************!*\
  !*** ./Tooltip.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var popover = __webpack_require__(/*! ./Popover */ "./Popover.js").popover;

var Tooltip = React.createClass({
  displayName: 'ZRTooltip',
  getInitialState: function getInitialState() {
    return {
      arrowClassName: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._dom = ReactDOM.findDOMNode(this);
    this.fixPosition(this.props.target);
  },
  fixPosition: function fixPosition(target) {
    if (!target) {
      throw new Error('fixPosition target is null.');
    }

    var _domWidth = this._dom.offsetWidth,
        _domHeight = this._dom.offsetHeight,
        _target = zn.dom.getPosition(target),
        _left = null,
        _top = null,
        _className = '';

    if (_target.x + _domWidth > document.body.scrollWidth) {
      _left = _target.width - _domWidth;
    } else {
      _left = _target.x + (_target.width - _domWidth) / 2;
    }

    if (_target.y + _domHeight > document.body.scrollHeight) {
      _top = _target.y - _domHeight - 16;
      _className = 'zr-arrow-direction-bottom';
    } else {
      _top = _target.y + _target.height + 16;
      _className = 'zr-arrow-direction-top';
    }

    if (_left < 0) {
      _className = 'zr-arrow-direction-left';
      _left = _target.x + _target.width + 4;
      _top = _target.y + 4;
    }

    this._dom.style.top = _top + 'px';
    this._dom.style.left = _left + 'px';
    _className && this._dom.classList.add(_className);
  },
  close: function close() {
    if (!this.__isMounted) {
      return false;
    }

    if (this._dom) {
      if (this._dom.parentNode) {
        this._dom.parentNode.removeChild(this._dom);
      }

      this._dom = null;
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname("zr-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center", this.props.className),
      style: this.props.style
    }, this.props.content);
  }
});
module.exports = {
  Tooltip: Tooltip,
  tooltip: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-tooltip-container"
        });
        window.addEventListener('mouseover', this.__onWindowMouseOver.bind(this), true);
        window.addEventListener('resize', this.__onWindowResize.bind(this), false);
      },
      __onWindowResize: function __onWindowResize() {
        this.close('tooltip:window.resizing');
        popover.close('tooltip:window.resizing');
      },
      __onWindowMouseOver: function __onWindowMouseOver(event) {
        var _target = event.target;

        if (_target && _target.getAttribute && _target.getAttribute('data-tooltip')) {
          if (this._tooltip && this._tooltip.props.target !== _target) {
            this.close();
          }

          this.render(_target.getAttribute('data-tooltip'), {
            target: _target
          });
        } else {
          this.close();
        }
      },
      render: function render(content, options) {
        this._tooltip = ReactDOM.render(React.createElement(Tooltip, _extends({}, options, {
          content: content
        })), this._dom);
      },
      close: function close() {
        if (this._tooltip) {
          this._tooltip.close();

          this._tooltip = null;
        }

        return this;
      }
    }
  })
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.deepAssigns({}, __webpack_require__(/*! ./Alert */ "./Alert.js"), __webpack_require__(/*! ./Dialog */ "./Dialog.js"), __webpack_require__(/*! ./Dropdown */ "./Dropdown.js"), __webpack_require__(/*! ./Loader */ "./Loader.js"), __webpack_require__(/*! ./Modal */ "./Modal.js"), __webpack_require__(/*! ./Notification */ "./Notification.js"), __webpack_require__(/*! ./Popover */ "./Popover.js"), __webpack_require__(/*! ./Toast */ "./Toast.js"), __webpack_require__(/*! ./Tooltip */ "./Tooltip.js"));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vRGlhbG9nLmpzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9Ub29sdGlwLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29uXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZGFsIiwiQWxlcnQiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwidGl0bGUiLCJjb250ZW50Iiwib25DbGljayIsImJ1dHRvbnMiLCJ0ZXh0IiwiX19vbkNsaWNrIiwiaXRlbSIsImluZGV4IiwiY2xvc2UiLCJfcmVzdWx0IiwicHJvcHMiLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFwIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhbGVydCIsImNhbGxiYWNrIiwiY3JlYXRlIiwiY29uZmlybSIsImNhbmNlbCIsIm9wdGlvbnMiLCJfb3B0aW9ucyIsInpuIiwiZXh0ZW5kIiwicHJvbXB0IiwiX2lucHV0IiwiRGlhbG9nIiwiX19vbkNsb3NlIiwiY2xvc2VhYmxlIiwiZGlhbG9nIiwiYXJndiIsIlJlYWN0RE9NIiwiRHJvcGRvd24iLCJkaXNhYmxlZCIsImV2ZW50VHlwZSIsImNvbXBvbmVudERpZE1vdW50IiwiZmluZERPTU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX19ldmVudEhhbmRsZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRQYXJlbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJldmVudCIsIl90YXJnZXQiLCJfcG9wb3ZlciIsInBvcG92ZXIiLCJfcmVuZGVyIiwiaXMiLCJwcm90b3R5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXNldCIsImNoaWxkcmVuIiwiTG9hZGVyIiwiX19yZW5kZXJDb250ZW50IiwibG9hZGVyIiwiQ2xhc3MiLCJtZXRob2RzIiwiX2xvYWRlciIsImRlc3Ryb3kiLCJyZWYiLCJsb2FkaW5nIiwiTW9kYWwiLCJvbkNvbXBvbmVudERpZE1vdW50IiwiX19pc01vdW50ZWQiLCJfZG9tIiwib25EZXN0cm95QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwib25EZXN0cm95IiwiaW5pdCIsImRvbSIsImNyZWF0ZVJvb3RFbGVtZW50IiwiX21vZGFscyIsIl9yZWYiLCJjcmVhdGVFbGVtZW50IiwicHVzaCIsImRlbGF5IiwiX21vZGFsIiwicG9wIiwic2V0VGltZW91dCIsImNsb3NlQWxsIiwibGVuZ3RoIiwic2l6ZSIsIlRZUEVfSUNPTlMiLCJoZWFydCIsInNlY29uZGFyeSIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbmZvIiwiTm90aWZpY2F0aW9uIiwid2luZG93Iiwib3V0IiwiYWRkIiwidHlwZSIsIm5vdGlmaWNhdGlvbiIsIm9wZW4iLCJTVkdJY29uIiwiUG9wb3ZlciIsImhpZGRlbkhlaWdodCIsInBvcG92ZXJXaWR0aCIsInBvcG92ZXJIZWlnaHQiLCJnZXRJbml0aWFsU3RhdGUiLCJhcnJvd0NsYXNzTmFtZSIsIl9ldmVudFR5cGUiLCJfX29uV2luZG93Q2xpY2siLCJvbkNvbnRhaW5lckV2ZW50IiwiZml4UG9zaXRpb24iLCJvblBvcG92ZXJEaWRNb3VudCIsIl9faXNNYXRjaFBhcmVudCIsInBhcmVudCIsInRhZ05hbWUiLCJvbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudCIsIm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQiLCJ0YWciLCJfdCIsImdldFBvc2l0aW9uIiwiX3BvcG92ZXJXaWR0aCIsIndpZHRoIiwiX3BvcG92ZXJIZWlnaHQiLCJoZWlnaHQiLCJfbGVmdCIsIl90b3AiLCJfYXJyb3dDbGFzc05hbWVzIiwib25IaWRkZW4iLCJ4Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFdpZHRoIiwicmlnaHQiLCJsZWZ0IiwieSIsImF2YWlsSGVpZ2h0IiwiYm90dG9tIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwidmlzaWJpbGl0eSIsImpvaW4iLCJfc3R5bGUiLCJtYXhIZWlnaHQiLCJzdGF0ZSIsIlRvYXN0IiwidG9hc3QiLCJhcHBlbmRDaGlsZCIsIlRvb2x0aXAiLCJFcnJvciIsIl9kb21XaWR0aCIsIm9mZnNldFdpZHRoIiwiX2RvbUhlaWdodCIsIl9jbGFzc05hbWUiLCJzY3JvbGxIZWlnaHQiLCJ0b29sdGlwIiwiX19vbldpbmRvd01vdXNlT3ZlciIsIl9fb25XaW5kb3dSZXNpemUiLCJnZXRBdHRyaWJ1dGUiLCJfdG9vbHRpcCIsImRlZXBBc3NpZ25zIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFzQixpQkFBTyxFQUFFeEI7QUFBL0IsV0FBaEIsRUFBNEQsS0FBS3dFLElBQWpFLENBQWhCO0FBQ0EsT0F2Qk87QUF3QlJqRSxXQUFLLEVBQUUsaUJBQVc7QUFDakIsWUFBRyxLQUFLOEosUUFBUixFQUFpQjtBQUNoQixlQUFLQSxRQUFMLENBQWM5SixLQUFkOztBQUNBLGVBQUs4SixRQUFMLEdBQWdCLElBQWhCO0FBQ0E7O0FBRUQsZUFBTyxJQUFQO0FBQ0E7QUEvQk87QUFGUSxHQUFUO0FBRk8sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUN0RUFwSixNQUFNLENBQUNDLE9BQVAsR0FBaUJRLEVBQUUsQ0FBQzRJLFdBQUgsQ0FDYixFQURhLEVBRWI3SyxtQkFBTyxDQUFDLDJCQUFELENBRk0sRUFHYkEsbUJBQU8sQ0FBQyw2QkFBRCxDQUhNLEVBSWJBLG1CQUFPLENBQUMsaUNBQUQsQ0FKTSxFQUtiQSxtQkFBTyxDQUFDLDZCQUFELENBTE0sRUFNYkEsbUJBQU8sQ0FBQywyQkFBRCxDQU5NLEVBT2JBLG1CQUFPLENBQUMseUNBQUQsQ0FQTSxFQVFiQSxtQkFBTyxDQUFDLCtCQUFELENBUk0sRUFTYkEsbUJBQU8sQ0FBQywyQkFBRCxDQVRNLEVBVWJBLG1CQUFPLENBQUMsK0JBQUQsQ0FWTSxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLCtCQUErQixFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG52YXIgQWxlcnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkFsZXJ0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0Y29udGVudDogbnVsbCxcblx0XHRcdG9uQ2xpY2s6IG51bGwsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdGV4dDogJ+ehruiupCcgfVxuXHRcdFx0XVxuXHRcdH07XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRtb2RhbC5jbG9zZSgpO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtLCBpbmRleCwgdGhpcyk7XG5cdFx0XHRfcmVzdWx0ID0gaXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayhpdGVtLCBpbmRleCwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1hbGVydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydC1pbm5lclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj59XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudCAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWNvbnRlbnRcIj57dGhpcy5wcm9wcy5jb250ZW50fTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtYnRuc1wiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYWxlcnQtYnRuXCIgb25DbGljaz17KCk9PnRoaXMuX19vbkNsaWNrKGl0ZW0sIGluZGV4KX0+e2l0ZW0udGV4dH08L2Rpdj47XG5cdFx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0QWxlcnQ6IEFsZXJ0LFxuXHRhbGVydDogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjYWxsYmFjaywgcHJvcHMpe1xuXHRcdG1vZGFsLmNyZWF0ZSg8QWxlcnQgY29udGVudD17Y29udGVudH0gdGl0bGU9e3RpdGxlfSBvbkNsaWNrPXtjYWxsYmFja30gey4uLnByb3BzfSAvPiwge1xuXHRcdFx0Y2xhc3M6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcblx0XHR9KTtcblx0fSxcblx0Y29uZmlybTogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjb25maXJtLCBjYW5jZWwsIG9wdGlvbnMpe1xuXHRcdHZhciBfb3B0aW9ucyA9IHpuLmV4dGVuZCh7IGNhbmNlbDogJ+WPlua2iCcsIGNvbmZpcm06ICfnoa7lrponIH0sIG9wdGlvbnMpO1xuXHRcdG1vZGFsLmNyZWF0ZSg8QWxlcnRcblx0XHRcdGNvbnRlbnQ9e2NvbnRlbnR9XG5cdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRidXR0b25zPXtbXG5cdFx0XHRcdHsgdGV4dDogX29wdGlvbnMuY2FuY2VsLCBvbkNsaWNrOiBjYW5jZWwgfSxcblx0XHRcdFx0eyB0ZXh0OiBfb3B0aW9ucy5jb25maXJtLCBvbkNsaWNrOiBjb25maXJtIH1cblx0XHRcdF19IC8+LCB7XG5cdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0XHR9KTtcblx0fSxcblx0cHJvbXB0OiBmdW5jdGlvbiAodGl0bGUsIGNvbmZpcm0sIGNhbmNlbCl7XG5cdFx0dmFyIF9pbnB1dCA9IDxpbnB1dCBjbGFzc05hbWU9XCJhbGVydC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgLz47XG5cdFx0bW9kYWwuY3JlYXRlKDxBbGVydFxuXHRcdFx0Y29udGVudD17X2lucHV0fVxuXHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0YnV0dG9ucz17W1xuXHRcdFx0XHR7IHRleHQ6J+WPlua2iCcsIG9uQ2xpY2s6IGNhbmNlbCB9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDon56Gu5a6aJyxcblx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFsZXJ0KXtcblx0XHRcdFx0XHRcdGNvbmZpcm0gJiYgY29uZmlybShhbGVydC5wcm9wcy5jb250ZW50LCBpdGVtLCBpbmRleCwgYWxlcnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XX0gLz4sIHtcblx0XHRcdFx0Y2xhc3M6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcblx0XHRcdH0pO1xuXHR9XG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcbnZhciBEaWFsb2cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkRpYWxvZycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGNvbnRlbnQ6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX29uQ2xvc2U6IGZ1bmN0aW9uICgpe1xuXHRcdG1vZGFsLmNsb3NlKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1kaWFsb2cnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWhlYWRlclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNsb3NlYWJsZSAmJiA8c3BhbiBvbkNsaWNrPXt0aGlzLl9fb25DbG9zZX0gY2xhc3NOYW1lPVwiZGlhbG9nLWNsb3NlXCI+eDwvc3Bhbj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1ib2R5XCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdERpYWxvZzogRGlhbG9nLFxuXHRkaWFsb2c6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRyZXR1cm4gbW9kYWwuY3JlYXRlKDxEaWFsb2cgey4uLmFyZ3Z9IC8+LCB7XG5cdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdH0pO1xuXHR9XG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHREcm9wZG93bjogUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRcdGRpc3BsYXlOYW1lOidaUkRyb3Bkb3duJyxcblx0XHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0XHRldmVudFR5cGU6ICdjbGljaydcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsIHRoaXMuX19ldmVudEhhbmRsZXIsIGZhbHNlKTtcblx0XHR9LFxuXHRcdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsIHRoaXMuX19ldmVudEhhbmRsZXIsIGZhbHNlKTtcblx0XHR9LFxuXHRcdGdldFBhcmVudDogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0XHRpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd6ci1kcm9wZG93bicpKXtcblx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdH1lbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFyZW50KHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9fZXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7IFxuXHRcdFx0XHRyZXR1cm47IFxuXHRcdFx0fVxuXHRcdFx0dmFyIF90YXJnZXQgPSB0aGlzLmdldFBhcmVudChldmVudC50YXJnZXQpLFxuXHRcdFx0XHRfcG9wb3ZlciA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5wb3BvdmVyKTtcblx0XHRcdGlmKF90YXJnZXQgJiYgX3BvcG92ZXIgJiYgX3BvcG92ZXIucmVuZGVyKXtcblx0XHRcdFx0dmFyIF9yZW5kZXIgPSBfcG9wb3Zlci5yZW5kZXI7XG5cdFx0XHRcdGlmKHpuLmlzKF9yZW5kZXIsICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdFx0aWYoIV9yZW5kZXIucHJvdG90eXBlIHx8ICFfcmVuZGVyLnByb3RvdHlwZS5yZW5kZXIpe1xuXHRcdFx0XHRcdFx0X3JlbmRlciA9IF9yZW5kZXIoZXZlbnQsIHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihfcmVuZGVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0X3BvcG92ZXIucmVuZGVyID0gbnVsbDtcblx0XHRcdFx0XHRkZWxldGUgX3BvcG92ZXIucmVuZGVyO1xuXHRcdFx0XHRcdHpudWkucmVhY3QucG9wb3Zlci5yZW5kZXIoX3JlbmRlciwgem4uZXh0ZW5kKHtcblx0XHRcdFx0XHRcdHJlc2V0OiB0cnVlLFxuXHRcdFx0XHRcdFx0ZXZlbnQ6IGV2ZW50LFxuXHRcdFx0XHRcdFx0dGFyZ2V0OiBfdGFyZ2V0LFxuXHRcdFx0XHRcdH0sIF9wb3BvdmVyKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWRyb3Bkb3duXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9KVxufTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcbnZhciBMb2FkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidMb2FkZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb250ZW50OiBudWxsLFxuXHRcdFx0dGl0bGU6ICdMb2FkaW5nIC4uLiAnXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuY29udGVudCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jb250ZW50O1xuXHRcdH1lbHNlIGlmKHRoaXMucHJvcHMudGl0bGUpe1xuXHRcdFx0cmV0dXJuIDw+XG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW5uZXIgbG9hZGVyLXNlbGYtbG9hZGluZ1wiIC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0PC8+O1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWxvYWRlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdExvYWRlcjogTG9hZGVyLFxuXHRsb2FkZXI6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbW9kYWwuY3JlYXRlKDxMb2FkZXIgey4uLmFyZ3Z9IC8+LCB7IFxuXHRcdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknLFxuXHRcdFx0XHRcdHJlZjogKHJlZikgPT4gdGhpcy5fbG9hZGVyID0gcmVmXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGxvYWRpbmc6IGZ1bmN0aW9uICh0aXRsZSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGUoe1xuXHRcdFx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgTW9kYWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidNb2RhbCcsXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRkZXN0cm95OiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZihfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD57dGhpcy5wcm9wcy5jaGlsZHJlbn08Lz5cblx0XHQpO1xuXHR9XG59KTs7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRNb2RhbDogTW9kYWwsXG5cdG1vZGFsOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1tb2RhbC1jb250YWluZXJcIiB9KTtcblx0XHRcdFx0dGhpcy5fbW9kYWxzID0gW107XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucyl7XG5cdFx0XHRcdHZhciBfcmVmID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIFJlYWN0RE9NLnJlbmRlcig8TW9kYWwgey4uLm9wdGlvbnN9IHJlZj17KHJlZik9Pl9yZWYgPSByZWZ9Pntjb250ZW50fTwvTW9kYWw+LCB6bi5kb20uY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0XHRcdGNsYXNzOiB6bnVpLmNsYXNzbmFtZSgnenItbW9kYWwnLCBvcHRpb25zLmNsYXNzKSxcblx0XHRcdFx0XHRzdHlsZTogem51aS5zdHlsZShvcHRpb25zLnN0eWxlKVxuXHRcdFx0XHR9LCB0aGlzLl9kb20pLCAoKT0+e1xuXHRcdFx0XHRcdHRoaXMuX21vZGFscy5wdXNoKF9yZWYpO1xuXHRcdFx0XHRcdG9wdGlvbnMucmVmICYmIG9wdGlvbnMucmVmKF9yZWYpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKGRlbGF5KXtcblx0XHRcdFx0dmFyIF9tb2RhbCA9IHRoaXMuX21vZGFscy5wb3AoKTtcblx0XHRcdFx0aWYoX21vZGFsKXtcblx0XHRcdFx0XHRpZihkZWxheSl7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IF9tb2RhbC5kZXN0cm95KCksIGRlbGF5KTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdF9tb2RhbC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRjbG9zZUFsbDogZnVuY3Rpb24gKGRlbGF5KXtcblx0XHRcdFx0aWYodGhpcy5fbW9kYWxzLmxlbmd0aCl7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZShkZWxheSk7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZUFsbCgpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRzaXplOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUWVBFX0lDT05TID0ge1xuXHRoZWFydDogJ2ZhLWhlYXJ0Jyxcblx0c2Vjb25kYXJ5OiAnZmEtY29tbWVudCcsXG5cdHN1Y2Nlc3M6ICdmYS1jaGVjaycsXG5cdHdhcm5pbmc6ICdmYS1leGNsYW1hdGlvbicsXG5cdGVycm9yOiAnZmEtdGltZXMnLFxuXHRpbmZvOiAnZmEtaW5mbydcbn1cblxudmFyIE5vdGlmaWNhdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J05vdGlmaWNhdGlvbicsXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCwgdGhpcy5wcm9wcy5kZWxheSB8fCAxNTAwKTtcblx0fSxcblx0b3V0OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdF9kb20uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLW91dCcpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdGlmKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdFx0X2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1ub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLWluJywgdGhpcy5wcm9wcy50eXBlKX0gPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e1wiZmEgXCIgKyBUWVBFX0lDT05TW3RoaXMucHJvcHMudHlwZXx8J2luZm8nXX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJjbG9zZSBmYSBmYS10aW1lc1wiIG9uQ2xpY2s9e3RoaXMub3V0fSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHROb3RpZmljYXRpb246IE5vdGlmaWNhdGlvbixcblx0bm90aWZpY2F0aW9uOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogJ3pyLW5vdGlmaWNhdGlvbi1jb250YWluZXInIH0pO1xuXHRcdFx0fSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICh0eXBlLCBjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdFJlYWN0RE9NLnJlbmRlcig8Tm90aWZpY2F0aW9uIHR5cGU9e3R5cGV9IGNvbnRlbnQ9e2NvbnRlbnR9IGRlbGF5PXtkZWxheX0gLz4sIHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgdGhpcy5fZG9tKSk7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3Blbignc3VjY2VzcycsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHR3YXJuaW5nOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCd3YXJuaW5nJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdlcnJvcicsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRpbmZvOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcblxudmFyIFBvcG92ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBvcG92ZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRoaWRkZW5IZWlnaHQ6IDUsXG5cdFx0XHRjbG9zZWFibGU6IGZhbHNlLFxuXHRcdFx0cG9wb3ZlcldpZHRoOiBudWxsLFxuXHRcdFx0cG9wb3ZlckhlaWdodDogbnVsbFxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJyb3dDbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5fZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0aWYodGhpcy5wcm9wcy5ldmVudCl7XG5cdFx0XHR0aGlzLl9ldmVudFR5cGUgPSB0aGlzLnByb3BzLmV2ZW50LnR5cGUgfHwgdGhpcy5wcm9wcy5ldmVudDtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgdGhpcy5fX29uV2luZG93Q2xpY2ssIGZhbHNlKTtcblx0XHRcdHRoaXMuX2RvbS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRcdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50KGV2ZW50LCB0aGlzKTtcblx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gdHJ1ZSl7XG5cdFx0XHRcdFx0Ly9ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKHRoaXMpLCB0cnVlKTtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpO1xuXHRcdFx0fS5iaW5kKHRoaXMpLCAwKTtcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50ICYmIHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQodGhpcyk7XG5cdH0sXG5cdF9faXNNYXRjaFBhcmVudDogZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KXtcblx0XHRpZih0YXJnZXQpe1xuXHRcdFx0aWYodGFyZ2V0LnRhZ05hbWUgPT0gJ0JPRFknIHx8IHRhcmdldC50YWdOYW1lID09ICdIVE1MJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZih0YXJnZXQgIT09IHBhcmVudCl7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9faXNNYXRjaFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSwgcGFyZW50KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSxcblx0X19vbldpbmRvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKCF0aGlzLl9faXNNYXRjaFBhcmVudChldmVudC50YXJnZXQsIHRoaXMuX2RvbSkpe1xuXHRcdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uV2luZG93T3V0c2lkZUNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXHRcdFx0aWYoX3Jlc3VsdCAhPT0gdHJ1ZSl7XG5cdFx0XHRcdHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgb3V0c2lkZSBjb250YWluZXIgZXZlbnRcIik7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCAmJiB0aGlzLnByb3BzLm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXHRcdFx0aWYoX3Jlc3VsdCA9PT0gdHJ1ZSl7XG5cdFx0XHRcdHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgaW5zaWRlIGNvbnRhaW5lciBldmVudFwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGNsb3NlOiBmdW5jdGlvbiAodGFnKXtcblx0XHQvL3puLmluZm8oJ1BvcG92ZXIuY2xvc2U6JywgdGFnKTtcblx0XHRpZih0aGlzLl9kb20pe1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9fb25XaW5kb3dDbGljaywgZmFsc2UpO1xuXHRcdFx0aWYodGhpcy5fZG9tLnBhcmVudE5vZGUpe1xuXHRcdFx0XHR0aGlzLl9kb20ucGFyZW50Tm9kZS5zdHlsZSA9ICcnO1xuXHRcdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2RvbSA9IG51bGw7XG5cdFx0XHR0aGlzLl9ldmVudFR5cGUgPSBudWxsO1xuXHRcdH1cblx0fSxcblx0Zml4UG9zaXRpb246IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdHZhciBfcG9wb3ZlciA9IHRoaXMuX2RvbTtcblx0XHR2YXIgX3QgPSB6bi5kb20uZ2V0UG9zaXRpb24odGFyZ2V0KSxcblx0XHRcdF9wb3BvdmVyV2lkdGggPSB0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCB8fCBfdC53aWR0aCxcblx0XHRcdF9wb3BvdmVySGVpZ2h0ID0gdGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0IHx8IHpuLmRvbS5nZXRQb3NpdGlvbihfcG9wb3ZlcikuaGVpZ2h0LFxuXHRcdFx0X2xlZnQgPSBudWxsLFxuXHRcdFx0X3RvcCA9IG51bGwsXG5cdFx0XHRfYXJyb3dDbGFzc05hbWVzID0gW107XG5cblx0XHRpZihfcG9wb3ZlcldpZHRoID09ICcxMDAlJyl7XG5cdFx0XHRfcG9wb3ZlcldpZHRoID0gX3Qud2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYoX3BvcG92ZXJIZWlnaHQgPCB0aGlzLnByb3BzLmhpZGRlbkhlaWdodCl7XG5cdFx0XHR0aGlzLnByb3BzLm9uSGlkZGVuICYmIHRoaXMucHJvcHMub25IaWRkZW4oKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZigoX3QueCArIF9wb3BvdmVyV2lkdGgpID4gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoKXtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LXJpZ2h0Jyk7XG5cdFx0XHRfbGVmdCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBfdC54IC0gX3Qud2lkdGg7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS5yaWdodCA9IF9sZWZ0ICsgJ3B4Jztcblx0XHRcdF9wb3BvdmVyLnBhcmVudE5vZGUuc3R5bGUucmlnaHQgPSAnMHB4Jztcblx0XHR9ZWxzZSB7XG5cdFx0XHRfbGVmdCA9IF90Lng7XG5cdFx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LXBsYWNlbWVudC1sZWZ0Jyk7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS5sZWZ0ID0gX2xlZnQgKyAncHgnO1xuXHRcdH1cblxuXHRcdGlmKChfdC55ICsgX3BvcG92ZXJIZWlnaHQpID4gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCl7XG5cdFx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LWRpcmVjdGlvbi1ib3R0b20nKTtcblx0XHRcdF90b3AgPSBfdC5oZWlnaHQgKyAxMDtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLmJvdHRvbSA9IF90b3AgKyAncHgnO1xuXHRcdFx0X3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5ib3R0b20gPSAnMHB4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RvcCA9IF90LnkgKyBfdC5oZWlnaHQgKyAxMDtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLXRvcCcpO1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUudG9wID0gX3RvcCArICdweCc7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wb3BvdmVyV2lkdGgpe1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUud2lkdGggPSBfcG9wb3ZlcldpZHRoICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQpe1xuXHRcdFx0aWYoX3BvcG92ZXIub2Zmc2V0SGVpZ2h0ICE9IF9wb3BvdmVySGVpZ2h0KXtcblx0XHRcdFx0X3BvcG92ZXIuc3R5bGUuaGVpZ2h0ID0gX3BvcG92ZXJIZWlnaHQgKyAncHgnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF9wb3BvdmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6bi1hbmltYXRlLXNjYWxlLXVwJyk7XG5cdFx0X3BvcG92ZXIuY2xhc3NOYW1lID0gX3BvcG92ZXIuY2xhc3NOYW1lICsgJyAnICsgX2Fycm93Q2xhc3NOYW1lcy5qb2luKCcgJyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3N0eWxlID0ge307XG5cdFx0aWYodGhpcy5wcm9wcy5oZWlnaHQpe1xuXHRcdFx0X3N0eWxlLm1heEhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0ICsgJ3B4Jztcblx0XHR9ZWxzZSB7XG5cdFx0XHRfc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3BvdmVyIHpyLWFycm93IHpyLWFycm93LWNvbG9yLXdoaXRlJywgdGhpcy5zdGF0ZS5hcnJvd0NsYXNzTmFtZSl9ID5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2xvc2VhYmxlICYmIDxzcGFuIGNsYXNzTmFtZT1cInBvcG92ZXItY2xvc2UgenItaG92ZXItc2VsZi1sb2FkaW5nXCIgb25DbGljaz17KCk9PnRoaXMuY2xvc2UoJ3NlbGYgY2xvc2UnKX0+PFNWR0ljb24gaWNvbj1cImZhVGltZXNcIiAvPjwvc3Bhbj59XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInBvcG92ZXItY29udGVudFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt6bi5leHRlbmQoe30sIHRoaXMucHJvcHMuc3R5bGUpLCBfc3R5bGV9ID57dGhpcy5wcm9wcy5jb250ZW50fTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRQb3BvdmVyOiBQb3BvdmVyLFxuXHRwb3BvdmVyOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3BvdmVyLWNvbnRhaW5lclwiIH0pO1xuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjogZnVuY3Rpb24gKGNvbnRlbnQsIG9wdGlvbnMpe1xuXHRcdFx0XHRpZihvcHRpb25zICYmIG9wdGlvbnMucmVzZXQpe1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoJ3puLnBvcG92ZXI6cmVuZGVyJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXMuX3BvcG92ZXIgPSBSZWFjdERPTS5yZW5kZXIoPFBvcG92ZXIgey4uLm9wdGlvbnN9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+LCB0aGlzLl9kb20pLCB0aGlzLl9wb3BvdmVyO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAodGFnKXtcblx0XHRcdFx0aWYodGhpcy5fcG9wb3Zlcil7XG5cdFx0XHRcdFx0dGhpcy5fcG9wb3Zlci5jbG9zZSh0YWcpO1xuXHRcdFx0XHRcdHRoaXMuX3BvcG92ZXIgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvYXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonVG9hc3QnLFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0d2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsIHRoaXMucHJvcHMuZGVsYXkgfHwgMTUwMCk7XG5cdH0sXG5cdG91dDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRfZG9tLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LW91dCcpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0fSwgZmFsc2UpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdG9hc3QgdG9hc3QtaW4nLCB0aGlzLnByb3BzLnR5cGUpfSA+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFRvYXN0OiBUb2FzdCxcblx0dG9hc3Q6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXRvYXN0LWNvbnRhaW5lclwiIH0pO1xuXHRcdFx0fSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICh0eXBlLCBjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHZhciBfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFJlYWN0RE9NLnJlbmRlcig8VG9hc3QgdHlwZT17dHlwZX0gY29udGVudD17Y29udGVudH0gZGVsYXk9e2RlbGF5fSAvPiwgX2RvbSk7XG5cdFx0XHRcdHRoaXMuX2RvbS5hcHBlbmRDaGlsZChfZG9tKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdHdhcm5pbmc6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2RhbmdlcicsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRpbmZvOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBwb3BvdmVyID0gcmVxdWlyZSgnLi9Qb3BvdmVyJykucG9wb3ZlcjtcblxudmFyIFRvb2x0aXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRvb2x0aXAnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcnJvd0NsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHR0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcblx0fSxcblx0Zml4UG9zaXRpb246IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdGlmKCF0YXJnZXQpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdmaXhQb3NpdGlvbiB0YXJnZXQgaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0dmFyIF9kb21XaWR0aCA9IHRoaXMuX2RvbS5vZmZzZXRXaWR0aCxcblx0XHRcdF9kb21IZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0X3RhcmdldCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuXHRcdFx0X2xlZnQgPSBudWxsLFxuXHRcdFx0X3RvcCA9IG51bGwsXG5cdFx0XHRfY2xhc3NOYW1lID0gJyc7XG5cblx0XHRpZigoX3RhcmdldC54ICsgX2RvbVdpZHRoKSA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgpe1xuXHRcdFx0X2xlZnQgPSBfdGFyZ2V0LndpZHRoIC0gX2RvbVdpZHRoO1xuXHRcdH1lbHNlIHtcblx0XHRcdF9sZWZ0ID0gX3RhcmdldC54ICsgKF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGgpIC8gMjtcblx0XHR9XG5cblx0XHRpZigoX3RhcmdldC55ICsgX2RvbUhlaWdodCkgPiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCl7XG5cdFx0XHRfdG9wID0gX3RhcmdldC55IC0gX2RvbUhlaWdodCAtIDE2O1xuXHRcdFx0X2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RvcCA9IF90YXJnZXQueSArIF90YXJnZXQuaGVpZ2h0ICsgMTY7XG5cdFx0XHRfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi10b3AnO1xuXHRcdH1cblxuXHRcdGlmKF9sZWZ0PDApe1xuXHRcdFx0X2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tbGVmdCc7XG5cdFx0XHRfbGVmdCA9IF90YXJnZXQueCArIF90YXJnZXQud2lkdGggKyA0O1xuXHRcdFx0X3RvcCA9IF90YXJnZXQueSArIDQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZG9tLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuXHRcdHRoaXMuX2RvbS5zdHlsZS5sZWZ0ID0gX2xlZnQgKyAncHgnO1xuXHRcdF9jbGFzc05hbWUgJiYgdGhpcy5fZG9tLmNsYXNzTGlzdC5hZGQoX2NsYXNzTmFtZSk7XG5cdH0sXG5cdGNsb3NlOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX2RvbSl7XG5cdFx0XHRpZih0aGlzLl9kb20ucGFyZW50Tm9kZSl7XG5cdFx0XHRcdHRoaXMuX2RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2RvbSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9kb20gPSBudWxsO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10b29sdGlwIHpyLWFycm93IHpyLWFycm93LWNvbG9yLWJsYWNrIHpyLWFycm93LXBsYWNlbWVudC1jZW50ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFRvb2x0aXA6IFRvb2x0aXAsXG5cdHRvb2x0aXA6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXRvb2x0aXAtY29udGFpbmVyXCIgfSk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9fb25XaW5kb3dNb3VzZU92ZXIuYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9fb25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXHRcdFx0fSxcblx0XHRcdF9fb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLmNsb3NlKCd0b29sdGlwOndpbmRvdy5yZXNpemluZycpO1xuXHRcdFx0XHRwb3BvdmVyLmNsb3NlKCd0b29sdGlwOndpbmRvdy5yZXNpemluZycpO1xuXHRcdFx0fSxcblx0XHRcdF9fb25XaW5kb3dNb3VzZU92ZXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0XHRcdHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0XHRpZihfdGFyZ2V0ICYmIF90YXJnZXQuZ2V0QXR0cmlidXRlICYmIF90YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnKSl7XG5cdFx0XHRcdFx0aWYodGhpcy5fdG9vbHRpcCAmJiB0aGlzLl90b29sdGlwLnByb3BzLnRhcmdldCAhPT0gX3RhcmdldCl7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucmVuZGVyKF90YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnKSwgeyB0YXJnZXQ6IF90YXJnZXQgfSk7XG5cdFx0XHRcdH1lbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKXtcblx0XHRcdFx0dGhpcy5fdG9vbHRpcCA9IFJlYWN0RE9NLnJlbmRlcig8VG9vbHRpcCB7Li4ub3B0aW9uc30gY29udGVudD17Y29udGVudH0gLz4sIHRoaXMuX2RvbSk7XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRpZih0aGlzLl90b29sdGlwKXtcblx0XHRcdFx0XHR0aGlzLl90b29sdGlwLmNsb3NlKCk7XG5cdFx0XHRcdFx0dGhpcy5fdG9vbHRpcCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB6bi5kZWVwQXNzaWducyhcbiAgICB7IH0sIFxuICAgIHJlcXVpcmUoJy4vQWxlcnQnKSwgXG4gICAgcmVxdWlyZSgnLi9EaWFsb2cnKSxcbiAgICByZXF1aXJlKCcuL0Ryb3Bkb3duJyksXG4gICAgcmVxdWlyZSgnLi9Mb2FkZXInKSxcbiAgICByZXF1aXJlKCcuL01vZGFsJyksXG4gICAgcmVxdWlyZSgnLi9Ob3RpZmljYXRpb24nKSxcbiAgICByZXF1aXJlKCcuL1BvcG92ZXInKSxcbiAgICByZXF1aXJlKCcuL1RvYXN0JyksXG4gICAgcmVxdWlyZSgnLi9Ub29sdGlwJylcbik7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9