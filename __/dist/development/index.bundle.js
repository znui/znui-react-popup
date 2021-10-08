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

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

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
      className: znui.react.classname('zr-popup-alert alert-in', this.props.className),
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
  getInitialState: function getInitialState() {
    return {
      fullscreen: false
    };
  },
  __onClose: function __onClose(event) {
    var _result = this.props.onClose && this.props.onClose(event, this);

    if (_result !== false) {
      var _dom = ReactDOM.findDOMNode(this);

      _dom.classList.add('dialog-out');

      _dom.addEventListener("animationend", function () {
        modal.close();
      }, false);
    }
  },
  __renderFullscreen: function __renderFullscreen() {
    var _this = this;

    if (this.state.fullscreen) {
      return /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return _this.setState({
            fullscreen: false
          });
        },
        className: "full-screen"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "far",
        "data-icon": "window-restore",
        className: "svg-inline--fa fa-window-restore fa-w-16 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"
      })));
    } else {
      return /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return _this.setState({
            fullscreen: true
          });
        },
        className: "full-screen"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "far",
        "data-icon": "window-maximize",
        className: "svg-inline--fa fa-window-maximize fa-w-16 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"
      })));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-dialog dialog-in', this.props.className, this.props.autoWidth ? 'auto-width' : 'min-width'),
      style: this.props.style,
      "data-focus": this.props.focus,
      "data-fullscreen": this.state.fullscreen
    }, /*#__PURE__*/React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "dialog-title"
    }, this.props.title), /*#__PURE__*/React.createElement("div", {
      className: "btns"
    }, this.props.fullscreen && this.__renderFullscreen(), this.props.closeable && /*#__PURE__*/React.createElement("span", {
      onClick: this.__onClose,
      className: "dialog-close"
    }, "x"))), /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("dialog-body", this.props.contentClassName),
      style: this.props.contentStyle
    }, this.props.content));
  }
});
module.exports = {
  Dialog: Dialog,
  dialog: function dialog(argv, ifPush) {
    var _dialog = modal.create( /*#__PURE__*/React.createElement(Dialog, argv), {
      "class": 'modal-middle modal-overlay'
    }, ifPush);

    return _dialog;
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

var popover = __webpack_require__(/*! ./Popover */ "./Popover.js").popover;

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
      if (target.classList.contains('zr-popup-dropdown')) {
        return target;
      } else {
        return this.getParent(target.parentNode);
      }
    },
    closePopover: function closePopover() {
      if (this._popover) {
        this._popover.close();
      }

      return this;
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
          this.closePopover();
          this._popover = popover.render(_render, zn.extend({
            reset: true,
            event: event,
            target: _target
          }, _popover));
        }
      }
    },
    render: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: znui.react.classname("zr-popup-dropdown", this.props.className),
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "./Modal.js").modal;

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

/***/ }),

/***/ "./Modal.js":
/*!******************!*\
  !*** ./Modal.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Modal = React.createClass({
  displayName: 'ZRModal',
  getInitialState: function getInitialState() {
    return {
      destroyed: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
  },
  close: function close(callback) {
    return this.destroy(callback);
  },
  destroy: function destroy(callback) {
    if (!this.__isMounted || this.state.destroyed) {
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

    callback && callback();
    this.state.destroyed = true;
    this.props.onDestroy && this.props.onDestroy();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children);
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
          "class": "zr-popup-modal-container"
        });
        this._modals = [];
      },
      create: function create(content, options, ifPush) {
        var _modal = ReactDOM.render( /*#__PURE__*/React.createElement(Modal, options, content), zn.dom.createElement('div', {
          "class": znui.classname('zr-popup-modal', options["class"]),
          style: znui.style(options.style)
        }, this._dom)); //zn.debug('Modal created(' + (this._modals.length + 1) + '): ', _modal);


        if (ifPush !== false) {
          this._modals.push(_modal);
        }

        return _modal;
      },
      close: function close(delay, callback) {
        //zn.debug('Modal close(' + this._modals.length + '): ');
        var _modal = this._modals.pop();

        if (_modal) {
          if (_modal.state.destroyed) {
            return this.close(delay, callback);
          }

          if (delay) {
            setTimeout(function () {
              return _modal.destroy(callback);
            }, delay);
          } else {
            _modal.destroy(callback);
          }
        }

        return this;
      },
      closeAll: function closeAll(delay) {
        if (this && this._modals.length) {
          this.close(delay, this.closeAll);
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

/***/ "./Notifier.js":
/*!*********************!*\
  !*** ./Notifier.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var TYPE_ICONS = {
  heart: 'M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z',
  secondary: 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z',
  success: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
  warning: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
  error: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
  info: 'M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z'
};
var Notifier = React.createClass({
  displayName: 'ZRNotification',
  componentDidMount: function componentDidMount() {
    this._timeout = window.setTimeout(this.out, this.props.delay || 3000);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._timeout) {
      window.clearTimeout(this._timeout);
    }
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('notification-out');

    _dom.addEventListener("animationend", function () {
      if (this._timeout) {
        window.clearTimeout(this._timeout);
      }

      if (_dom.parentNode && _dom.parentNode.parentNode) {
        _dom.parentNode.parentNode.removeChild(_dom.parentNode);

        ReactDOM.unmountComponentAtNode(_dom.parentNode);
      }
    }, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-notifier notification-in', this.props.type)
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      className: znui.react.classname("svg-inline--fa fa-check fa-w-16 ", this.props.className),
      style: this.props.style,
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: TYPE_ICONS[this.props.type || 'info']
    }))), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, this.props.content));
  }
});
module.exports = {
  Notifier: Notifier,
  notifier: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": 'zr-popup-notifier-container'
        });
      },
      open: function open(type, content, delay) {
        ReactDOM.render( /*#__PURE__*/React.createElement(Notifier, {
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

var Popover = React.createClass({
  displayName: 'ZRPopover',
  getDefaultProps: function getDefaultProps() {
    return {
      hiddenHeight: 5,
      stopPropagation: false,
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

    this._dom.addEventListener(this.props.event.type, this.__eventListener, false);

    setTimeout(function () {
      this.fixPosition(this.props.target);
    }.bind(this), 0);
    this.props.onPopoverDidMount && this.props.onPopoverDidMount(this);
  },
  __eventListener: function __eventListener(event) {
    var _result = this.props.onContainerEvent && this.props.onContainerEvent(event, this);

    if (this.props.stopPropagation) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (_result !== false) {
      this.close();
    }
  },
  close: function close(callback) {
    if (!this._dom) return;
    var _dom = this._dom;

    _dom.classList.add('popover-out');

    _dom.removeEventListener(this.props.event.type, this.__eventListener, false);

    _dom.addEventListener("animationend", function () {
      if (_dom.parentNode && _dom.parentNode.parentNode) {
        _dom.parentNode.parentNode.removeChild(_dom.parentNode);

        ReactDOM.unmountComponentAtNode(_dom.parentNode);
        callback && callback();
      }
    }, false);
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

    _arrowClassNames.push('zr-animate-scale-up');

    _popover.className = _popover.className + ' ' + _arrowClassNames.join(' ');
  },
  __onContentScroll: function __onContentScroll(event) {
    this.props.onContentScroll && this.props.onContentScroll(event, this);
  },
  render: function render() {
    var _this = this;

    var _style = {};

    if (this.props.height) {
      _style.maxHeight = this.props.height + 'px';
    } else {
      _style.height = 'auto';
    }

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-popover popover-in zr-arrow zr-arrow-color-white', this.state.arrowClassName)
    }, this.props.closeable && /*#__PURE__*/React.createElement("span", {
      className: "popover-close zr-hover-self-loading",
      onClick: function onClick() {
        return _this.close('self close');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      className: "svg-inline--fa fa-check fa-w-16 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    }))), /*#__PURE__*/React.createElement("div", {
      onScroll: this.__onContentScroll,
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
          "class": "zr-popup-popover-container"
        });
        this._popovers = {};
      },
      __resolveAllPopover: function __resolveAllPopover(target, values) {
        values = values || [];

        if (target) {
          if (target.tagName == 'BODY') return values;

          if (target.getAttribute) {
            if (target.getAttribute("data-popover-id")) {
              values.push(target.getAttribute("data-popover-id"));
            }

            if (target.getAttribute("data-popover-ref-ids")) {
              values = values.concat(target.getAttribute("data-popover-ref-ids"));
            }
          }

          return this.__resolveAllPopover(target.parentNode, values);
        }

        return values;
      },
      __initWindowEvent: function __initWindowEvent(options) {
        var _this2 = this;

        var _type = options.event.type;
        window.__znui_react_popup_events__ = window.__znui_react_popup_events__ || [];

        if (window.__znui_react_popup_events__.indexOf(_type) === -1) {
          window.__znui_react_popup_events__.push(_type);

          window.addEventListener(_type, function (event) {
            return _this2.__onWindowClick(event, options);
          }, false);
        }
      },
      __onWindowClick: function __onWindowClick(event, options) {
        this.closeTarget(event.target);
      },
      render: function render(content, options) {
        var _this3 = this;

        if (options) {
          if (options.reset) {
            this.closeTarget(options.target);
          }

          if (options.event) {
            this.__initWindowEvent(options);
          }
        }

        var _id = zn.uuid(),
            _refids = this.__resolveAllPopover(options.event.target),
            _attrs = {
          "data-popover-id": _id
        };

        if (_refids.length) {
          _attrs["data-popover-ref-ids"] = _refids.join(',');
        }

        var _dom = zn.dom.createElement('div', _attrs, this._dom);

        var _popover = ReactDOM.render( /*#__PURE__*/React.createElement(Popover, _extends({}, options, {
          content: content,
          onContentScroll: function onContentScroll(event, popover) {
            _this3.closeTarget(event.target);
          }
        })), _dom);

        return this._popovers[_id] = _popover, _popover;
      },
      closeTarget: function closeTarget(target) {
        var _popovers = this.__resolveAllPopover(target, []) || [];

        for (var key in this._popovers) {
          if (_popovers.indexOf(key) === -1) {
            this._popovers[key].close();

            this._popovers[key] = null;
            delete this._popovers[key];
          }
        }
      },
      closeAll: function closeAll(tag) {
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
  displayName: 'ZRToast',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1800);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('toast-out');

    _dom.addEventListener("animationend", function () {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);

      ReactDOM.unmountComponentAtNode(_dom.parentNode.parentNode);
    }, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-toast toast-in', this.props.type)
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
          "class": "zr-popup-toast-container"
        });
      },
      open: function open(type, content, delay) {
        var _dom = document.createElement('div');

        ReactDOM.render( /*#__PURE__*/React.createElement(Toast, {
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

/* WEBPACK VAR INJECTION */(function(process) {function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

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
  destroy: function destroy(callback) {
    if (!this.__isMounted) {
      return false;
    }

    var _dom = ReactDOM.findDOMNode(this);

    var _result = this.props.onDestroyBefore && this.props.onDestroyBefore(_dom);

    if (_result === false) {
      return false;
    }

    if (_dom && _dom.parentNode) {
      _dom.parentNode.removeChild(_dom);
    }

    this.props.onDestroy && this.props.onDestroy();

    if (zn.is(callback, 'function')) {
      callback();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-popup-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center", this.props.className),
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
          "class": "zr-popup-tooltip-container"
        });
        window.addEventListener('mouseover', this.__onWindowMouseOver.bind(this), true);
        window.addEventListener('resize', this.__onWindowResize.bind(this), false);
      },
      __onWindowResize: function __onWindowResize() {
        this.close('znui.react.popup.tooltip: window.resizing');
      },
      __findZRPopupTooltipValue: function __findZRPopupTooltipValue(target) {
        if (target) {
          if (target.tagName == 'BODY' || target.tagName == 'HTML') {
            return false;
          }

          if (target.getAttribute && target.getAttribute('data-zr-popup-tooltip')) {
            return target.getAttribute('data-zr-popup-tooltip');
          } else {
            return this.__findZRPopupTooltipValue(target.parentNode);
          }
        }
      },
      __onWindowMouseOver: function __onWindowMouseOver(event) {
        var _target = event.target,
            _value = this.__findZRPopupTooltipValue(_target);

        if (_target && _value) {
          if (this._tooltip && this._tooltip.props.target !== _target) {
            this.close('znui.react.popup.tooltip: window.mouseover');
          }

          this.render(_value, {
            target: _target
          });
        } else {
          this.close('znui.react.popup.tooltip: window.mouseover');
        }
      },
      render: function render(content, options) {
        if (this._tooltip) {
          this._tooltip.destroy();
        }

        this._tooltip = ReactDOM.render( /*#__PURE__*/React.createElement(Tooltip, _extends({}, options, {
          content: content
        })), this._dom);
      },
      close: function close(callback) {
        if (this._tooltip) {
          if (zn.is(callback, 'string') && process && process.env && "development" == 'development') {//zn.debug(callback);
          }

          ReactDOM.unmountComponentAtNode(this._dom);

          this._tooltip.destroy(callback);

          this._tooltip = null;
        }

        return this;
      }
    }
  })
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.deepAssigns({}, __webpack_require__(/*! ./Alert */ "./Alert.js"), __webpack_require__(/*! ./Dialog */ "./Dialog.js"), __webpack_require__(/*! ./Dropdown */ "./Dropdown.js"), __webpack_require__(/*! ./Loader */ "./Loader.js"), __webpack_require__(/*! ./Modal */ "./Modal.js"), __webpack_require__(/*! ./Notifier */ "./Notifier.js"), __webpack_require__(/*! ./Popover */ "./Popover.js"), __webpack_require__(/*! ./Toast */ "./Toast.js"), __webpack_require__(/*! ./Tooltip */ "./Tooltip.js"));

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

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vRGlhbG9nLmpzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9Qb3BvdmVyLmpzIiwid2VicGFjazovLy8uL1RvYXN0LmpzIiwid2VicGFjazovLy8uL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJtb2RhbCIsIkFsZXJ0IiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRpdGxlIiwiY29udGVudCIsIm9uQ2xpY2siLCJidXR0b25zIiwidGV4dCIsIl9fb25DbGljayIsIml0ZW0iLCJpbmRleCIsIl9yZXN1bHQiLCJwcm9wcyIsImNsb3NlIiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcCIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWxlcnQiLCJjYWxsYmFjayIsIl9hbGVydCIsImNyZWF0ZSIsImNvbmZpcm0iLCJjYW5jZWwiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJ6biIsImV4dGVuZCIsIl9jb25maXJtIiwiX3JldHVybiIsImRlc3Ryb3kiLCJwcm9tcHQiLCJhcmd2IiwiX2FyZ3YiLCJvbkNoYW5nZSIsIl9wcm9tcHQiLCJjYW5jZWxUZXh0IiwiZXZlbnQiLCJjb25maXJtVGV4dCIsIkRpYWxvZyIsImdldEluaXRpYWxTdGF0ZSIsImZ1bGxzY3JlZW4iLCJfX29uQ2xvc2UiLCJvbkNsb3NlIiwiX2RvbSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiX19yZW5kZXJGdWxsc2NyZWVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImF1dG9XaWR0aCIsImZvY3VzIiwiY2xvc2VhYmxlIiwiY29udGVudENsYXNzTmFtZSIsImNvbnRlbnRTdHlsZSIsImRpYWxvZyIsImlmUHVzaCIsIl9kaWFsb2ciLCJwb3BvdmVyIiwiRHJvcGRvd24iLCJkaXNhYmxlZCIsImV2ZW50VHlwZSIsImNvbXBvbmVudERpZE1vdW50IiwiX19ldmVudEhhbmRsZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRQYXJlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJjbG9zZVBvcG92ZXIiLCJfcG9wb3ZlciIsIl90YXJnZXQiLCJfcmVuZGVyIiwiaXMiLCJwcm90b3R5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXNldCIsImNoaWxkcmVuIiwiTG9hZGVyIiwiX19yZW5kZXJDb250ZW50IiwibG9hZGVyIiwiQ2xhc3MiLCJtZXRob2RzIiwiX2xvYWRlciIsInJlZiIsImxvYWRpbmciLCJNb2RhbCIsImRlc3Ryb3llZCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJfX2lzTW91bnRlZCIsIm9uRGVzdHJveUJlZm9yZSIsInJlbW92ZUNoaWxkIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsIm9uRGVzdHJveSIsImluaXQiLCJkb20iLCJjcmVhdGVSb290RWxlbWVudCIsIl9tb2RhbHMiLCJfbW9kYWwiLCJjcmVhdGVFbGVtZW50IiwicHVzaCIsImRlbGF5IiwicG9wIiwic2V0VGltZW91dCIsImNsb3NlQWxsIiwibGVuZ3RoIiwic2l6ZSIsIlRZUEVfSUNPTlMiLCJoZWFydCIsInNlY29uZGFyeSIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbmZvIiwiTm90aWZpZXIiLCJfdGltZW91dCIsIndpbmRvdyIsIm91dCIsImNsZWFyVGltZW91dCIsInR5cGUiLCJub3RpZmllciIsIm9wZW4iLCJQb3BvdmVyIiwiaGlkZGVuSGVpZ2h0IiwicG9wb3ZlcldpZHRoIiwicG9wb3ZlckhlaWdodCIsImFycm93Q2xhc3NOYW1lIiwiX19ldmVudExpc3RlbmVyIiwiZml4UG9zaXRpb24iLCJvblBvcG92ZXJEaWRNb3VudCIsIm9uQ29udGFpbmVyRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIl90IiwiZ2V0UG9zaXRpb24iLCJfcG9wb3ZlcldpZHRoIiwid2lkdGgiLCJfcG9wb3ZlckhlaWdodCIsImhlaWdodCIsIl9sZWZ0IiwiX3RvcCIsIl9hcnJvd0NsYXNzTmFtZXMiLCJvbkhpZGRlbiIsIngiLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsV2lkdGgiLCJyaWdodCIsImxlZnQiLCJ5IiwiYXZhaWxIZWlnaHQiLCJib3R0b20iLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJ2aXNpYmlsaXR5Iiwiam9pbiIsIl9fb25Db250ZW50U2Nyb2xsIiwib25Db250ZW50U2Nyb2xsIiwiX3N0eWxlIiwibWF4SGVpZ2h0IiwiX3BvcG92ZXJzIiwiX19yZXNvbHZlQWxsUG9wb3ZlciIsInZhbHVlcyIsInRhZ05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJfX2luaXRXaW5kb3dFdmVudCIsIl90eXBlIiwiX196bnVpX3JlYWN0X3BvcHVwX2V2ZW50c19fIiwiaW5kZXhPZiIsIl9fb25XaW5kb3dDbGljayIsImNsb3NlVGFyZ2V0IiwiX2lkIiwidXVpZCIsIl9yZWZpZHMiLCJfYXR0cnMiLCJrZXkiLCJ0YWciLCJUb2FzdCIsInRvYXN0IiwiYXBwZW5kQ2hpbGQiLCJUb29sdGlwIiwiRXJyb3IiLCJfZG9tV2lkdGgiLCJvZmZzZXRXaWR0aCIsIl9kb21IZWlnaHQiLCJfY2xhc3NOYW1lIiwic2Nyb2xsSGVpZ2h0IiwidG9vbHRpcCIsIl9fb25XaW5kb3dNb3VzZU92ZXIiLCJfX29uV2luZG93UmVzaXplIiwiX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZSIsIl92YWx1ZSIsIl90b29sdGlwIiwicHJvY2VzcyIsImVudiIsImRlZXBBc3NpZ25zIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QWhCO0FBQ0E7O0FBRUQsZUFBTyxJQUFQO0FBQ0E7QUFsRE87QUFGUSxHQUFUO0FBRk8sQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDM0VBdEwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUyxFQUFFLENBQUMrSyxXQUFILENBQ2IsRUFEYSxFQUViak4sbUJBQU8sQ0FBQywyQkFBRCxDQUZNLEVBR2JBLG1CQUFPLENBQUMsNkJBQUQsQ0FITSxFQUliQSxtQkFBTyxDQUFDLGlDQUFELENBSk0sRUFLYkEsbUJBQU8sQ0FBQyw2QkFBRCxDQUxNLEVBTWJBLG1CQUFPLENBQUMsMkJBQUQsQ0FOTSxFQU9iQSxtQkFBTyxDQUFDLGlDQUFELENBUE0sRUFRYkEsbUJBQU8sQ0FBQywrQkFBRCxDQVJNLEVBU2JBLG1CQUFPLENBQUMsMkJBQUQsQ0FUTSxFQVViQSxtQkFBTyxDQUFDLCtCQUFELENBVk0sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG52YXIgQWxlcnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkFsZXJ0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0Y29udGVudDogbnVsbCxcblx0XHRcdG9uQ2xpY2s6IG51bGwsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdGV4dDogJ+ehruiupCcgfVxuXHRcdFx0XVxuXHRcdH07XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXHRcdFx0X3Jlc3VsdCA9IGl0ZW0ub25DbGljayAmJiBpdGVtLm9uQ2xpY2soaXRlbSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCAhPT0gZmFsc2Upe1xuXHRcdFx0Ly96bi5kZWJ1ZygnYWxlcnQuY2xvc2UnKTtcblx0XHRcdG1vZGFsLmNsb3NlKCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtYWxlcnQgYWxlcnQtaW4nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtaW5uZXJcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnQgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1jb250ZW50XCI+e3RoaXMucHJvcHMuY29udGVudH08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWJ0bnNcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImFsZXJ0LWJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLl9fb25DbGljayhpdGVtLCBpbmRleCl9PntpdGVtLnRleHR9PC9kaXY+O1xuXHRcdFx0XHRcdFx0fS5iaW5kKHRoaXMpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEFsZXJ0OiBBbGVydCxcblx0YWxlcnQ6IGZ1bmN0aW9uIChjb250ZW50LCB0aXRsZSwgY2FsbGJhY2ssIHByb3BzKXtcblx0XHR2YXIgX2FsZXJ0ID0gbW9kYWwuY3JlYXRlKDxBbGVydCBcblx0XHRcdGNvbnRlbnQ9e2NvbnRlbnR9IFxuXHRcdFx0dGl0bGU9e3RpdGxlfSBcblx0XHRcdG9uQ2xpY2s9e2NhbGxiYWNrfSB7Li4ucHJvcHN9IC8+LCB7XG5cdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0XHR9LCBmYWxzZSk7XG4gXG4gICAgICAgIHJldHVybiBfYWxlcnQ7XG5cdH0sXG5cdGNvbmZpcm06IGZ1bmN0aW9uIChjb250ZW50LCB0aXRsZSwgY29uZmlybSwgY2FuY2VsLCBvcHRpb25zKXtcblx0XHR2YXIgX29wdGlvbnMgPSB6bi5leHRlbmQoeyBjYW5jZWw6ICflj5bmtognLCBjb25maXJtOiAn56Gu5a6aJyB9LCBvcHRpb25zKTtcblx0XHR2YXIgX2NvbmZpcm0gPSBtb2RhbC5jcmVhdGUoPEFsZXJ0XG5cdFx0XHRjb250ZW50PXtjb250ZW50fVxuXHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0YnV0dG9ucz17W1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IF9vcHRpb25zLmNhbmNlbCwgXG5cdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdFx0XHR2YXIgX3JldHVybiA9IGNhbmNlbCAmJiBjYW5jZWwoX2NvbmZpcm0pO1xuXHRcdFx0XHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHRcdFx0XHRfY29uZmlybS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IF9vcHRpb25zLmNvbmZpcm0sIFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRcdFx0dmFyIF9yZXR1cm4gPSBjb25maXJtICYmIGNvbmZpcm0oX2NvbmZpcm0pO1xuXHRcdFx0XHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHRcdFx0XHRfY29uZmlybS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRdfSAvPiwge1xuXHRcdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdFx0fSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBfY29uZmlybTtcblx0fSxcblx0cHJvbXB0OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0dmFyIF9hcmd2ID0gem4uZXh0ZW5kKHtcblx0XHRcdHRpdGxlOiBhcmd2LnRpdGxlLFxuXHRcdFx0Y29udGVudDogPGlucHV0IGNsYXNzTmFtZT1cImFsZXJ0LWlucHV0XCIgb25DaGFuZ2U9e2FyZ3Yub25DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgLz4sXG5cdFx0XHRjb25maXJtOiBhcmd2LmNvbmZpcm0sXG5cdFx0XHRjYW5jZWw6IGFyZ3YuY2FuY2VsXG5cdFx0fSwgYXJndik7XG5cdFx0dmFyIF9wcm9tcHQgPSBtb2RhbC5jcmVhdGUoPEFsZXJ0XG5cdFx0XHRjb250ZW50PXtfYXJndi5jb250ZW50fVxuXHRcdFx0dGl0bGU9e19hcmd2LnRpdGxlfVxuXHRcdFx0YnV0dG9ucz17W1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IF9hcmd2LmNhbmNlbFRleHQgfHwgJ+WPlua2iCcsIFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYWxlcnQpe1xuXHRcdFx0XHRcdFx0dmFyIF9yZXR1cm4gPSBfYXJndi5jYW5jZWwgJiYgX2FyZ3YuY2FuY2VsKGV2ZW50LCBhbGVydCk7XG5cdFx0XHRcdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdFx0XHRcdF9wcm9tcHQuZGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IF9hcmd2LmNvbmZpcm1UZXh0IHx8ICfnoa7lrponLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYWxlcnQpe1xuXHRcdFx0XHRcdFx0dmFyIF9yZXR1cm4gPSBfYXJndi5jb25maXJtICYmIF9hcmd2LmNvbmZpcm0oZXZlbnQsIGFsZXJ0KTtcblx0XHRcdFx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0XHRcdFx0X3Byb21wdC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF19IC8+LCB7XG5cdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0XHR9LCBmYWxzZSk7XG5cblx0XHRyZXR1cm4gX3Byb21wdDtcblx0fVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG52YXIgRGlhbG9nID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJEaWFsb2cnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRjb250ZW50OiBudWxsXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZnVsbHNjcmVlbjogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXHRfX29uQ2xvc2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xvc2UgJiYgdGhpcy5wcm9wcy5vbkNsb3NlKGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmVzdWx0ICE9PSBmYWxzZSl7XG5cdFx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdFx0X2RvbS5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctb3V0Jyk7XG5cdFx0XHRfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCl7XG5cdFx0XHRcdG1vZGFsLmNsb3NlKCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckZ1bGxzY3JlZW46IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuZnVsbHNjcmVlbil7XG5cdFx0XHRyZXR1cm4gPHNwYW4gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2Z1bGxzY3JlZW46IGZhbHNlfSl9IGNsYXNzTmFtZT1cImZ1bGwtc2NyZWVuXCI+XG5cdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cIndpbmRvdy1yZXN0b3JlXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtd2luZG93LXJlc3RvcmUgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ2NCAwSDE0NGMtMjYuNSAwLTQ4IDIxLjUtNDggNDh2NDhINDhjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzMjBjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTQ4aDQ4YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tOTYgNDY0SDQ4VjI1NmgzMjB2MjA4em05Ni05NmgtNDhWMTQ0YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDE0NFY0OGgzMjB2MzIwelwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdDwvc3Bhbj47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPHNwYW4gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2Z1bGxzY3JlZW46IHRydWV9KX0gY2xhc3NOYW1lPVwiZnVsbC1zY3JlZW5cIj5cblx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwid2luZG93LW1heGltaXplXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtd2luZG93LW1heGltaXplIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00NjQgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoNDE2YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0wIDM5NGMwIDMuMy0yLjcgNi02IDZINTRjLTMuMyAwLTYtMi43LTYtNlYxOTJoNDE2djIzNHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHQ8L3NwYW4+O1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWRpYWxvZyBkaWFsb2ctaW4nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5hdXRvV2lkdGg/J2F1dG8td2lkdGgnOidtaW4td2lkdGgnKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGRhdGEtZm9jdXM9e3RoaXMucHJvcHMuZm9jdXN9IGRhdGEtZnVsbHNjcmVlbj17dGhpcy5zdGF0ZS5mdWxsc2NyZWVufSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWhlYWRlclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnRuc1wiPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZnVsbHNjcmVlbiAmJiB0aGlzLl9fcmVuZGVyRnVsbHNjcmVlbigpfVxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2xvc2VhYmxlICYmIDxzcGFuIG9uQ2xpY2s9e3RoaXMuX19vbkNsb3NlfSBjbGFzc05hbWU9XCJkaWFsb2ctY2xvc2VcIj54PC9zcGFuPn1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcImRpYWxvZy1ib2R5XCIsIHRoaXMucHJvcHMuY29udGVudENsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLmNvbnRlbnRTdHlsZX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdERpYWxvZzogRGlhbG9nLFxuXHRkaWFsb2c6IGZ1bmN0aW9uIChhcmd2LCBpZlB1c2gpe1xuXHRcdHZhciBfZGlhbG9nID0gbW9kYWwuY3JlYXRlKDxEaWFsb2cgey4uLmFyZ3Z9IC8+LCB7XG5cdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdH0sIGlmUHVzaCk7XG5cblx0XHRyZXR1cm4gX2RpYWxvZztcblx0fVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIHBvcG92ZXIgPSByZXF1aXJlKCcuL1BvcG92ZXInKS5wb3BvdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0RHJvcGRvd246IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0XHRkaXNwbGF5TmFtZTonWlJEcm9wZG93bicsXG5cdFx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdFx0ZXZlbnRUeXBlOiAnY2xpY2snXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5hZGRFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG5cdFx0fSxcblx0XHRjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG5cdFx0fSxcblx0XHRnZXRQYXJlbnQ6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdFx0aWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnenItcG9wdXAtZHJvcGRvd24nKSl7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjbG9zZVBvcG92ZXI6IGZ1bmN0aW9uICgpe1xuXHRcdFx0aWYodGhpcy5fcG9wb3Zlcil7XG5cdFx0XHRcdHRoaXMuX3BvcG92ZXIuY2xvc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRfX2V2ZW50SGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpeyBcblx0XHRcdFx0cmV0dXJuOyBcblx0XHRcdH1cblx0XHRcdHZhciBfdGFyZ2V0ID0gdGhpcy5nZXRQYXJlbnQoZXZlbnQudGFyZ2V0KSxcblx0XHRcdFx0X3BvcG92ZXIgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMucG9wb3Zlcik7XG5cdFx0XHRpZihfdGFyZ2V0ICYmIF9wb3BvdmVyICYmIF9wb3BvdmVyLnJlbmRlcil7XG5cdFx0XHRcdHZhciBfcmVuZGVyID0gX3BvcG92ZXIucmVuZGVyO1xuXHRcdFx0XHRpZih6bi5pcyhfcmVuZGVyLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRcdGlmKCFfcmVuZGVyLnByb3RvdHlwZSB8fCAhX3JlbmRlci5wcm90b3R5cGUucmVuZGVyKXtcblx0XHRcdFx0XHRcdF9yZW5kZXIgPSBfcmVuZGVyKGV2ZW50LCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoX3JlbmRlcikge1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdF9wb3BvdmVyLnJlbmRlciA9IG51bGw7XG5cdFx0XHRcdFx0ZGVsZXRlIF9wb3BvdmVyLnJlbmRlcjtcblx0XHRcdFx0XHR0aGlzLmNsb3NlUG9wb3ZlcigpO1xuXHRcdFx0XHRcdHRoaXMuX3BvcG92ZXIgPSBwb3BvdmVyLnJlbmRlcihfcmVuZGVyLCB6bi5leHRlbmQoe1xuXHRcdFx0XHRcdFx0cmVzZXQ6IHRydWUsXG5cdFx0XHRcdFx0XHRldmVudDogZXZlbnQsXG5cdFx0XHRcdFx0XHR0YXJnZXQ6IF90YXJnZXQsXG5cdFx0XHRcdFx0fSwgX3BvcG92ZXIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZHJvcGRvd25cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdH0pXG59O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xudmFyIExvYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTG9hZGVyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29udGVudDogbnVsbCxcblx0XHRcdHRpdGxlOiAnTG9hZGluZyAuLi4gJ1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmNvbnRlbnQpe1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY29udGVudDtcblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLnRpdGxlKXtcblx0XHRcdHJldHVybiA8PlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJsb2FkZXJcIiBkYXRhLWxvYWRlcj1cInNwaW5uZXJcIi8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0PC8+O1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWxvYWRlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdExvYWRlcjogTG9hZGVyLFxuXHRsb2FkZXI6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbW9kYWwuY3JlYXRlKDxMb2FkZXIgey4uLmFyZ3Z9IC8+LCB7IFxuXHRcdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknLFxuXHRcdFx0XHRcdHJlZjogKHJlZikgPT4gdGhpcy5fbG9hZGVyID0gcmVmXG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRsb2FkaW5nOiBmdW5jdGlvbiAodGl0bGUpIHtcblx0XHRcdFx0aWYodHlwZW9mIHRpdGxlID09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGUoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IHRpdGxlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1lbHNlIGlmKHR5cGVvZiB0aXRsZSA9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgTW9kYWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk1vZGFsJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVzdHJveWVkOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRjbG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5kZXN0cm95KGNhbGxiYWNrKTtcblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCB8fCB0aGlzLnN0YXRlLmRlc3Ryb3llZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZihfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0dGhpcy5zdGF0ZS5kZXN0cm95ZWQgPSB0cnVlO1xuXHRcdHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD57dGhpcy5wcm9wcy5jaGlsZHJlbn08Lz5cblx0XHQpO1xuXHR9XG59KTs7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRNb2RhbDogTW9kYWwsXG5cdG1vZGFsOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3B1cC1tb2RhbC1jb250YWluZXJcIiB9KTtcblx0XHRcdFx0dGhpcy5fbW9kYWxzID0gW107XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucywgaWZQdXNoKXtcblx0XHRcdFx0dmFyIF9tb2RhbCA9ICBSZWFjdERPTS5yZW5kZXIoPE1vZGFsIHsuLi5vcHRpb25zfT57Y29udGVudH08L01vZGFsPiwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdFx0XHRjbGFzczogem51aS5jbGFzc25hbWUoJ3pyLXBvcHVwLW1vZGFsJywgb3B0aW9ucy5jbGFzcyksXG5cdFx0XHRcdFx0c3R5bGU6IHpudWkuc3R5bGUob3B0aW9ucy5zdHlsZSlcblx0XHRcdFx0fSwgdGhpcy5fZG9tKSk7XG5cdFx0XHRcdC8vem4uZGVidWcoJ01vZGFsIGNyZWF0ZWQoJyArICh0aGlzLl9tb2RhbHMubGVuZ3RoICsgMSkgKyAnKTogJywgX21vZGFsKTtcblx0XHRcdFx0aWYoaWZQdXNoICE9PSBmYWxzZSl7XG5cdFx0XHRcdFx0dGhpcy5fbW9kYWxzLnB1c2goX21vZGFsKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIF9tb2RhbDtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKGRlbGF5LCBjYWxsYmFjayl7XG5cdFx0XHRcdC8vem4uZGVidWcoJ01vZGFsIGNsb3NlKCcgKyB0aGlzLl9tb2RhbHMubGVuZ3RoICsgJyk6ICcpO1xuXHRcdFx0XHR2YXIgX21vZGFsID0gdGhpcy5fbW9kYWxzLnBvcCgpO1xuXHRcdFx0XHRpZihfbW9kYWwpe1xuXHRcdFx0XHRcdGlmKF9tb2RhbC5zdGF0ZS5kZXN0cm95ZWQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2xvc2UoZGVsYXksIGNhbGxiYWNrKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoZGVsYXkpe1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiBfbW9kYWwuZGVzdHJveShjYWxsYmFjayksIGRlbGF5KTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlQWxsOiBmdW5jdGlvbiAoZGVsYXkpe1xuXHRcdFx0XHRpZih0aGlzICYmIHRoaXMuX21vZGFscy5sZW5ndGgpe1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoZGVsYXksIHRoaXMuY2xvc2VBbGwpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRzaXplOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUWVBFX0lDT05TID0ge1xuXHRoZWFydDogJ000NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45eicsXG5cdHNlY29uZGFyeTogJ000NDggMEg2NEMyOC43IDAgMCAyOC43IDAgNjR2Mjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0aDk2djg0YzAgOS44IDExLjIgMTUuNSAxOS4xIDkuN0wzMDQgNDE2aDE0NGMzNS4zIDAgNjQtMjguNyA2NC02NFY2NGMwLTM1LjMtMjguNy02NC02NC02NHonLFxuXHRzdWNjZXNzOiAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicsXG5cdHdhcm5pbmc6ICdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jyxcblx0ZXJyb3I6ICdNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Jyxcblx0aW5mbzogJ00yMCA0MjQuMjI5aDIwVjI3OS43NzFIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwVjIxMmMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMGgxMTJjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB2MjEyLjIyOWgyMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMFY0OTJjMCAxMS4wNDYtOC45NTQgMjAtMjAgMjBIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwdi00Ny43NzFjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjB6TTk2IDBDNTYuMjM1IDAgMjQgMzIuMjM1IDI0IDcyczMyLjIzNSA3MiA3MiA3MiA3Mi0zMi4yMzUgNzItNzJTMTM1Ljc2NCAwIDk2IDB6J1xufVxuXG52YXIgTm90aWZpZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5vdGlmaWNhdGlvbicsXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsIHRoaXMucHJvcHMuZGVsYXkgfHwgMzAwMCk7XG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLl90aW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0fSxcblx0b3V0OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdF9kb20uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLW91dCcpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdGlmKHRoaXMuX3RpbWVvdXQpe1xuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYoX2RvbS5wYXJlbnROb2RlICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdFx0X2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdFx0UmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pbicsIHRoaXMucHJvcHMudHlwZSl9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG5cdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e1RZUEVfSUNPTlNbdGhpcy5wcm9wcy50eXBlfHwnaW5mbyddfT48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8qXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJjbG9zZSBmYSBmYS10aW1lc1wiIG9uQ2xpY2s9e3RoaXMub3V0fSAvPlxuXHRcdFx0XHRcdCovXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Tm90aWZpZXI6IE5vdGlmaWVyLFxuXHRub3RpZmllcjogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6ICd6ci1wb3B1cC1ub3RpZmllci1jb250YWluZXInIH0pO1xuXHRcdFx0fSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICh0eXBlLCBjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdFJlYWN0RE9NLnJlbmRlcig8Tm90aWZpZXIgdHlwZT17dHlwZX0gY29udGVudD17Y29udGVudH0gZGVsYXk9e2RlbGF5fSAvPiwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCB0aGlzLl9kb20pKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdHdhcm5pbmc6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2Vycm9yJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdGluZm86IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2luZm8nLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgUG9wb3ZlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUG9wb3ZlcicsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhpZGRlbkhlaWdodDogNSxcblx0XHRcdHN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG5cdFx0XHRjbG9zZWFibGU6IGZhbHNlLFxuXHRcdFx0cG9wb3ZlcldpZHRoOiBudWxsLFxuXHRcdFx0cG9wb3ZlckhlaWdodDogbnVsbFxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJyb3dDbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5fZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dGhpcy5fZG9tLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudC50eXBlLCB0aGlzLl9fZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG5cdFx0XHR0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcblx0XHR9LmJpbmQodGhpcyksIDApO1xuXG5cdFx0dGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRfX2V2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50KGV2ZW50LCB0aGlzKTtcblx0XHRpZih0aGlzLnByb3BzLnN0b3BQcm9wYWdhdGlvbikge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0XHRpZihfcmVzdWx0ICE9PSBmYWxzZSApe1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fSxcblx0Y2xvc2U6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0aWYoIXRoaXMuX2RvbSkgcmV0dXJuO1xuXHRcdHZhciBfZG9tID0gdGhpcy5fZG9tO1xuXHRcdF9kb20uY2xhc3NMaXN0LmFkZCgncG9wb3Zlci1vdXQnKTtcblx0XHRfZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudC50eXBlLCB0aGlzLl9fZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdGlmKF9kb20ucGFyZW50Tm9kZSAmJiBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZSl7XG5cdFx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cdH0sXG5cdGZpeFBvc2l0aW9uOiBmdW5jdGlvbiAodGFyZ2V0KXtcblx0XHR2YXIgX3BvcG92ZXIgPSB0aGlzLl9kb207XG5cdFx0dmFyIF90ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG5cdFx0XHRfcG9wb3ZlcldpZHRoID0gdGhpcy5wcm9wcy5wb3BvdmVyV2lkdGggfHwgX3Qud2lkdGgsXG5cdFx0XHRfcG9wb3ZlckhlaWdodCA9IHRoaXMucHJvcHMucG9wb3ZlckhlaWdodCB8fCB6bi5kb20uZ2V0UG9zaXRpb24oX3BvcG92ZXIpLmhlaWdodCxcblx0XHRcdF9sZWZ0ID0gbnVsbCxcblx0XHRcdF90b3AgPSBudWxsLFxuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcyA9IFtdO1xuXG5cdFx0aWYoX3BvcG92ZXJXaWR0aCA9PSAnMTAwJScpe1xuXHRcdFx0X3BvcG92ZXJXaWR0aCA9IF90LndpZHRoO1xuXHRcdH1cblxuXHRcdGlmKF9wb3BvdmVySGVpZ2h0IDwgdGhpcy5wcm9wcy5oaWRkZW5IZWlnaHQpe1xuXHRcdFx0dGhpcy5wcm9wcy5vbkhpZGRlbiAmJiB0aGlzLnByb3BzLm9uSGlkZGVuKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoKF90LnggKyBfcG9wb3ZlcldpZHRoKSA+IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCl7XG5cdFx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LXBsYWNlbWVudC1yaWdodCcpO1xuXHRcdFx0X2xlZnQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoIC0gX3QueCAtIF90LndpZHRoO1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUucmlnaHQgPSBfbGVmdCArICdweCc7XG5cdFx0XHRfcG9wb3Zlci5wYXJlbnROb2RlLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG5cdFx0fWVsc2Uge1xuXHRcdFx0X2xlZnQgPSBfdC54O1xuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1wbGFjZW1lbnQtbGVmdCcpO1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUubGVmdCA9IF9sZWZ0ICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpZigoX3QueSArIF9wb3BvdmVySGVpZ2h0KSA+IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQpe1xuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJyk7XG5cdFx0XHRfdG9wID0gX3QuaGVpZ2h0ICsgMTA7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS5ib3R0b20gPSBfdG9wICsgJ3B4Jztcblx0XHRcdF9wb3BvdmVyLnBhcmVudE5vZGUuc3R5bGUuYm90dG9tID0gJzBweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90b3AgPSBfdC55ICsgX3QuaGVpZ2h0ICsgMTA7XG5cdFx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LWRpcmVjdGlvbi10b3AnKTtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMucG9wb3ZlcldpZHRoKXtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLndpZHRoID0gX3BvcG92ZXJXaWR0aCArICdweCc7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0KXtcblx0XHRcdGlmKF9wb3BvdmVyLm9mZnNldEhlaWdodCAhPSBfcG9wb3ZlckhlaWdodCl7XG5cdFx0XHRcdF9wb3BvdmVyLnN0eWxlLmhlaWdodCA9IF9wb3BvdmVySGVpZ2h0ICsgJ3B4Jztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRfcG9wb3Zlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYW5pbWF0ZS1zY2FsZS11cCcpO1xuXHRcdF9wb3BvdmVyLmNsYXNzTmFtZSA9IF9wb3BvdmVyLmNsYXNzTmFtZSArICcgJyArIF9hcnJvd0NsYXNzTmFtZXMuam9pbignICcpO1xuXHR9LFxuXHRfX29uQ29udGVudFNjcm9sbDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnByb3BzLm9uQ29udGVudFNjcm9sbCAmJiB0aGlzLnByb3BzLm9uQ29udGVudFNjcm9sbChldmVudCwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3N0eWxlID0ge307XG5cdFx0aWYodGhpcy5wcm9wcy5oZWlnaHQpe1xuXHRcdFx0X3N0eWxlLm1heEhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0ICsgJ3B4Jztcblx0XHR9ZWxzZSB7XG5cdFx0XHRfc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1wb3BvdmVyIHBvcG92ZXItaW4genItYXJyb3cgenItYXJyb3ctY29sb3Itd2hpdGUnLCB0aGlzLnN0YXRlLmFycm93Q2xhc3NOYW1lKX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jbG9zZWFibGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwicG9wb3Zlci1jbG9zZSB6ci1ob3Zlci1zZWxmLWxvYWRpbmdcIiBvbkNsaWNrPXsoKT0+dGhpcy5jbG9zZSgnc2VsZiBjbG9zZScpfT5cblx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IG9uU2Nyb2xsPXt0aGlzLl9fb25Db250ZW50U2Nyb2xsfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwicG9wb3Zlci1jb250ZW50XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3puLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5zdHlsZSksIF9zdHlsZX0gPnt0aGlzLnByb3BzLmNvbnRlbnR9PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFBvcG92ZXI6IFBvcG92ZXIsXG5cdHBvcG92ZXI6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXBvcHVwLXBvcG92ZXItY29udGFpbmVyXCIgfSk7XG5cdFx0XHRcdHRoaXMuX3BvcG92ZXJzID0ge307XG5cdFx0XHR9LFxuXHRcdFx0X19yZXNvbHZlQWxsUG9wb3ZlcjogZnVuY3Rpb24gKHRhcmdldCwgdmFsdWVzKXtcblx0XHRcdFx0dmFsdWVzID0gdmFsdWVzIHx8IFtdO1xuXHRcdFx0XHRpZih0YXJnZXQpe1xuXHRcdFx0XHRcdGlmKHRhcmdldC50YWdOYW1lID09ICdCT0RZJykgcmV0dXJuIHZhbHVlcztcblx0XHRcdFx0XHRpZih0YXJnZXQuZ2V0QXR0cmlidXRlKXtcblx0XHRcdFx0XHRcdGlmKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcG92ZXItaWRcIikpe1xuXHRcdFx0XHRcdFx0XHR2YWx1ZXMucHVzaCh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3BvdmVyLWlkXCIpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcG92ZXItcmVmLWlkc1wiKSl7XG5cdFx0XHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcG9wb3Zlci1yZWYtaWRzXCIpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX3Jlc29sdmVBbGxQb3BvdmVyKHRhcmdldC5wYXJlbnROb2RlLCB2YWx1ZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXHRcdFx0X19pbml0V2luZG93RXZlbnQ6IGZ1bmN0aW9uIChvcHRpb25zKXtcblx0XHRcdFx0dmFyIF90eXBlID0gb3B0aW9ucy5ldmVudC50eXBlO1xuXHRcdFx0XHR3aW5kb3cuX196bnVpX3JlYWN0X3BvcHVwX2V2ZW50c19fID0gd2luZG93Ll9fem51aV9yZWFjdF9wb3B1cF9ldmVudHNfXyB8fCBbXTtcblx0XHRcdFx0aWYod2luZG93Ll9fem51aV9yZWFjdF9wb3B1cF9ldmVudHNfXy5pbmRleE9mKF90eXBlKSA9PT0gLTEpe1xuXHRcdFx0XHRcdHdpbmRvdy5fX3pudWlfcmVhY3RfcG9wdXBfZXZlbnRzX18ucHVzaChfdHlwZSk7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoX3R5cGUsIChldmVudCk9PnRoaXMuX19vbldpbmRvd0NsaWNrKGV2ZW50LCBvcHRpb25zKSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X19vbldpbmRvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIG9wdGlvbnMpe1xuXHRcdFx0XHR0aGlzLmNsb3NlVGFyZ2V0KGV2ZW50LnRhcmdldCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucyl7XG5cdFx0XHRcdGlmKG9wdGlvbnMpe1xuXHRcdFx0XHRcdGlmKG9wdGlvbnMucmVzZXQpIHtcblx0XHRcdFx0XHRcdHRoaXMuY2xvc2VUYXJnZXQob3B0aW9ucy50YXJnZXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihvcHRpb25zLmV2ZW50KXtcblx0XHRcdFx0XHRcdHRoaXMuX19pbml0V2luZG93RXZlbnQob3B0aW9ucyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIF9pZCA9IHpuLnV1aWQoKSxcblx0XHRcdFx0XHRfcmVmaWRzID0gdGhpcy5fX3Jlc29sdmVBbGxQb3BvdmVyKG9wdGlvbnMuZXZlbnQudGFyZ2V0KSxcblx0XHRcdFx0XHRfYXR0cnMgPSB7XG5cdFx0XHRcdFx0XHRcImRhdGEtcG9wb3Zlci1pZFwiOiBfaWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRpZihfcmVmaWRzLmxlbmd0aCl7XG5cdFx0XHRcdFx0X2F0dHJzW1wiZGF0YS1wb3BvdmVyLXJlZi1pZHNcIl0gPSBfcmVmaWRzLmpvaW4oJywnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgX2RvbSA9IHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCBfYXR0cnMsIHRoaXMuX2RvbSk7XG5cdFx0XHRcdHZhciBfcG9wb3ZlciA9IFJlYWN0RE9NLnJlbmRlcig8UG9wb3ZlciB7Li4ub3B0aW9uc30gXG5cdFx0XHRcdFx0Y29udGVudD17Y29udGVudH0gXG5cdFx0XHRcdFx0b25Db250ZW50U2Nyb2xsPXsoZXZlbnQsIHBvcG92ZXIpPT57XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlVGFyZ2V0KGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdFx0fX0gLz4sIF9kb20pO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLl9wb3BvdmVyc1tfaWRdID0gX3BvcG92ZXIsIF9wb3BvdmVyO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlVGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KXtcblx0XHRcdFx0dmFyIF9wb3BvdmVycyA9IHRoaXMuX19yZXNvbHZlQWxsUG9wb3Zlcih0YXJnZXQsIFtdKSB8fCBbXTtcblx0XHRcdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5fcG9wb3ZlcnMpe1xuXHRcdFx0XHRcdGlmKF9wb3BvdmVycy5pbmRleE9mKGtleSkgPT09IC0xKXtcblx0XHRcdFx0XHRcdHRoaXMuX3BvcG92ZXJzW2tleV0uY2xvc2UoKTtcblx0XHRcdFx0XHRcdHRoaXMuX3BvcG92ZXJzW2tleV0gPSBudWxsO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX3BvcG92ZXJzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2VBbGw6IGZ1bmN0aW9uICh0YWcpe1xuXHRcdFx0XHRpZih0aGlzLl9wb3BvdmVyKXtcblx0XHRcdFx0XHR0aGlzLl9wb3BvdmVyLmNsb3NlKHRhZyk7XG5cdFx0XHRcdFx0dGhpcy5fcG9wb3ZlciA9IG51bGw7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVG9hc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRvYXN0Jyxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDE4MDApO1xuXHR9LFxuXHRvdXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0X2RvbS5jbGFzc0xpc3QuYWRkKCd0b2FzdC1vdXQnKTtcblx0XHRfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCl7XG5cdFx0XHRfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0UmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG5cdFx0fSwgZmFsc2UpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtdG9hc3QgdG9hc3QtaW4nLCB0aGlzLnByb3BzLnR5cGUpfSA+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFRvYXN0OiBUb2FzdCxcblx0dG9hc3Q6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXBvcHVwLXRvYXN0LWNvbnRhaW5lclwiIH0pO1xuXHRcdFx0fSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICh0eXBlLCBjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHZhciBfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFJlYWN0RE9NLnJlbmRlcig8VG9hc3QgdHlwZT17dHlwZX0gY29udGVudD17Y29udGVudH0gZGVsYXk9e2RlbGF5fSAvPiwgX2RvbSk7XG5cdFx0XHRcdHRoaXMuX2RvbS5hcHBlbmRDaGlsZChfZG9tKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdHdhcm5pbmc6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2RhbmdlcicsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRpbmZvOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvb2x0aXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRvb2x0aXAnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcnJvd0NsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHR0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcblx0fSxcblx0Zml4UG9zaXRpb246IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdGlmKCF0YXJnZXQpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdmaXhQb3NpdGlvbiB0YXJnZXQgaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0dmFyIF9kb21XaWR0aCA9IHRoaXMuX2RvbS5vZmZzZXRXaWR0aCxcblx0XHRcdF9kb21IZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0X3RhcmdldCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuXHRcdFx0X2xlZnQgPSBudWxsLFxuXHRcdFx0X3RvcCA9IG51bGwsXG5cdFx0XHRfY2xhc3NOYW1lID0gJyc7XG5cblx0XHRpZigoX3RhcmdldC54ICsgX2RvbVdpZHRoKSA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgpe1xuXHRcdFx0X2xlZnQgPSBfdGFyZ2V0LndpZHRoIC0gX2RvbVdpZHRoO1xuXHRcdH1lbHNlIHtcblx0XHRcdF9sZWZ0ID0gX3RhcmdldC54ICsgKF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGgpIC8gMjtcblx0XHR9XG5cblx0XHRpZigoX3RhcmdldC55ICsgX2RvbUhlaWdodCkgPiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCl7XG5cdFx0XHRfdG9wID0gX3RhcmdldC55IC0gX2RvbUhlaWdodCAtIDE2O1xuXHRcdFx0X2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RvcCA9IF90YXJnZXQueSArIF90YXJnZXQuaGVpZ2h0ICsgMTY7XG5cdFx0XHRfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi10b3AnO1xuXHRcdH1cblxuXHRcdGlmKF9sZWZ0PDApe1xuXHRcdFx0X2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tbGVmdCc7XG5cdFx0XHRfbGVmdCA9IF90YXJnZXQueCArIF90YXJnZXQud2lkdGggKyA0O1xuXHRcdFx0X3RvcCA9IF90YXJnZXQueSArIDQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZG9tLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuXHRcdHRoaXMuX2RvbS5zdHlsZS5sZWZ0ID0gX2xlZnQgKyAncHgnO1xuXHRcdF9jbGFzc05hbWUgJiYgdGhpcy5fZG9tLmNsYXNzTGlzdC5hZGQoX2NsYXNzTmFtZSk7XG5cdH0sXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0aWYoIXRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoX2RvbSk7XG5cdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoX2RvbSAmJiBfZG9tLnBhcmVudE5vZGUpe1xuXHRcdFx0X2RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20pO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRGVzdHJveSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveSgpO1xuXHRcdGlmKHpuLmlzKGNhbGxiYWNrLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtdG9vbHRpcCB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci1ibGFjayB6ci1hcnJvdy1wbGFjZW1lbnQtY2VudGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRUb29sdGlwOiBUb29sdGlwLFxuXHR0b29sdGlwOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3B1cC10b29sdGlwLWNvbnRhaW5lclwiIH0pO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fX29uV2luZG93TW91c2VPdmVyLmJpbmQodGhpcyksIHRydWUpO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fX29uV2luZG93UmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRfX29uV2luZG93UmVzaXplOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cucmVzaXppbmcnKTtcblx0XHRcdH0sXG5cdFx0XHRfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlOiBmdW5jdGlvbiAodGFyZ2V0KXtcblx0XHRcdFx0aWYodGFyZ2V0KXtcblx0XHRcdFx0XHRpZih0YXJnZXQudGFnTmFtZSA9PSAnQk9EWScgfHwgdGFyZ2V0LnRhZ05hbWUgPT0gJ0hUTUwnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS16ci1wb3B1cC10b29sdGlwJykpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtenItcG9wdXAtdG9vbHRpcCcpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZSh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X19vbldpbmRvd01vdXNlT3ZlcjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRcdFx0dmFyIF90YXJnZXQgPSBldmVudC50YXJnZXQsXG5cdFx0XHRcdFx0X3ZhbHVlID0gdGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKF90YXJnZXQpO1xuXHRcdFx0XHRpZihfdGFyZ2V0ICYmIF92YWx1ZSl7XG5cdFx0XHRcdFx0aWYodGhpcy5fdG9vbHRpcCAmJiB0aGlzLl90b29sdGlwLnByb3BzLnRhcmdldCAhPT0gX3RhcmdldCl7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXInKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXIoX3ZhbHVlLCB7IHRhcmdldDogX3RhcmdldCB9KTtcblx0XHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucyl7XG5cdFx0XHRcdGlmKHRoaXMuX3Rvb2x0aXApe1xuXHRcdFx0XHRcdHRoaXMuX3Rvb2x0aXAuZGVzdHJveSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3Rvb2x0aXAgPSBSZWFjdERPTS5yZW5kZXIoPFRvb2x0aXAgey4uLm9wdGlvbnN9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+LCB0aGlzLl9kb20pO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLl90b29sdGlwKXtcblx0XHRcdFx0XHRpZih6bi5pcyhjYWxsYmFjaywgJ3N0cmluZycpICYmIHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jykge1xuXHRcdFx0XHRcdFx0Ly96bi5kZWJ1ZyhjYWxsYmFjayk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tKTtcblx0XHRcdFx0XHR0aGlzLl90b29sdGlwLmRlc3Ryb3koY2FsbGJhY2spO1xuXHRcdFx0XHRcdHRoaXMuX3Rvb2x0aXAgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59OyIsIm1vZHVsZS5leHBvcnRzID0gem4uZGVlcEFzc2lnbnMoXG4gICAgeyB9LCBcbiAgICByZXF1aXJlKCcuL0FsZXJ0JyksIFxuICAgIHJlcXVpcmUoJy4vRGlhbG9nJyksXG4gICAgcmVxdWlyZSgnLi9Ecm9wZG93bicpLFxuICAgIHJlcXVpcmUoJy4vTG9hZGVyJyksXG4gICAgcmVxdWlyZSgnLi9Nb2RhbCcpLFxuICAgIHJlcXVpcmUoJy4vTm90aWZpZXInKSxcbiAgICByZXF1aXJlKCcuL1BvcG92ZXInKSxcbiAgICByZXF1aXJlKCcuL1RvYXN0JyksXG4gICAgcmVxdWlyZSgnLi9Ub29sdGlwJylcbik7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=