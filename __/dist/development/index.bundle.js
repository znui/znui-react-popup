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
  __headerRender: function __headerRender() {
    if (this.props.header) {
      return znui.react.createReactElement(this.props.header, this.props);
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "dialog-title"
    }, this.props.title), /*#__PURE__*/React.createElement("div", {
      className: "btns"
    }, this.props.fullscreen && this.__renderFullscreen(), this.props.closeable && /*#__PURE__*/React.createElement("span", {
      onClick: this.__onClose,
      className: "dialog-close"
    }, "x")));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-dialog dialog-in', this.props.className, this.props.autoWidth ? 'auto-width' : 'min-width'),
      style: this.props.style,
      "data-focus": this.props.focus,
      "data-fullscreen": this.state.fullscreen
    }, this.__headerRender(), /*#__PURE__*/React.createElement("div", {
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
  info: 'M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z',
  message: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
};
var Notifier = React.createClass({
  displayName: 'ZRNotification',
  componentDidMount: function componentDidMount() {
    if (this.props.delay != 0) {
      this._timeout = window.setTimeout(this.out, this.props.delay || 3000);
    }
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
    }, this.props.content), this.props.delay === 0 && /*#__PURE__*/React.createElement("i", {
      className: "close fa fa-times",
      onClick: this.out
    }));
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
        var _ref = /*#__PURE__*/React.createElement(Notifier, {
          type: type,
          content: content,
          delay: delay
        });

        ReactDOM.render(_ref, zn.dom.createElement('div', {}, this._dom));
        return _ref;
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
      },
      message: function message(content, delay) {
        return this.open('message', content, delay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vRGlhbG9nLmpzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9Qb3BvdmVyLmpzIiwid2VicGFjazovLy8uL1RvYXN0LmpzIiwid2VicGFjazovLy8uL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJtb2RhbCIsIkFsZXJ0IiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRpdGxlIiwiY29udGVudCIsIm9uQ2xpY2siLCJidXR0b25zIiwidGV4dCIsIl9fb25DbGljayIsIml0ZW0iLCJpbmRleCIsIl9yZXN1bHQiLCJwcm9wcyIsImNsb3NlIiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcCIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWxlcnQiLCJjYWxsYmFjayIsIl9hbGVydCIsImNyZWF0ZSIsImNvbmZpcm0iLCJjYW5jZWwiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJ6biIsImV4dGVuZCIsIl9jb25maXJtIiwiX3JldHVybiIsImRlc3Ryb3kiLCJwcm9tcHQiLCJhcmd2IiwiX2FyZ3YiLCJvbkNoYW5nZSIsIl9wcm9tcHQiLCJjYW5jZWxUZXh0IiwiZXZlbnQiLCJjb25maXJtVGV4dCIsIkRpYWxvZyIsImdldEluaXRpYWxTdGF0ZSIsImZ1bGxzY3JlZW4iLCJfX29uQ2xvc2UiLCJvbkNsb3NlIiwiX2RvbSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiX19yZW5kZXJGdWxsc2NyZWVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsIl9faGVhZGVyUmVuZGVyIiwiaGVhZGVyIiwiY3JlYXRlUmVhY3RFbGVtZW50IiwiY2xvc2VhYmxlIiwiYXV0b1dpZHRoIiwiZm9jdXMiLCJjb250ZW50Q2xhc3NOYW1lIiwiY29udGVudFN0eWxlIiwiZGlhbG9nIiwiaWZQdXNoIiwiX2RpYWxvZyIsInBvcG92ZXIiLCJEcm9wZG93biIsImRpc2FibGVkIiwiZXZlbnRUeXBlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfX2V2ZW50SGFuZGxlciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFBhcmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImNsb3NlUG9wb3ZlciIsIl9wb3BvdmVyIiwiX3RhcmdldCIsIl9yZW5kZXIiLCJpcyIsInByb3RvdHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsInJlc2V0IiwiY2hpbGRyZW4iLCJMb2FkZXIiLCJfX3JlbmRlckNvbnRlbnQiLCJsb2FkZXIiLCJDbGFzcyIsIm1ldGhvZHMiLCJfbG9hZGVyIiwicmVmIiwibG9hZGluZyIsIk1vZGFsIiwiZGVzdHJveWVkIiwib25Db21wb25lbnREaWRNb3VudCIsIl9faXNNb3VudGVkIiwib25EZXN0cm95QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwib25EZXN0cm95IiwiaW5pdCIsImRvbSIsImNyZWF0ZVJvb3RFbGVtZW50IiwiX21vZGFscyIsIl9tb2RhbCIsImNyZWF0ZUVsZW1lbnQiLCJwdXNoIiwiZGVsYXkiLCJwb3AiLCJzZXRUaW1lb3V0IiwiY2xvc2VBbGwiLCJsZW5ndGgiLCJzaXplIiwiVFlQRV9JQ09OUyIsImhlYXJ0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsIndhcm5pbmciLCJlcnJvciIsImluZm8iLCJtZXNzYWdlIiwiTm90aWZpZXIiLCJfdGltZW91dCIsIndpbmRvdyIsIm91dCIsImNsZWFyVGltZW91dCIsInR5cGUiLCJub3RpZmllciIsIm9wZW4iLCJfcmVmIiwiUG9wb3ZlciIsImhpZGRlbkhlaWdodCIsInBvcG92ZXJXaWR0aCIsInBvcG92ZXJIZWlnaHQiLCJhcnJvd0NsYXNzTmFtZSIsIl9fZXZlbnRMaXN0ZW5lciIsImZpeFBvc2l0aW9uIiwib25Qb3BvdmVyRGlkTW91bnQiLCJvbkNvbnRhaW5lckV2ZW50IiwicHJldmVudERlZmF1bHQiLCJfdCIsImdldFBvc2l0aW9uIiwiX3BvcG92ZXJXaWR0aCIsIndpZHRoIiwiX3BvcG92ZXJIZWlnaHQiLCJoZWlnaHQiLCJfbGVmdCIsIl90b3AiLCJfYXJyb3dDbGFzc05hbWVzIiwib25IaWRkZW4iLCJ4Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFdpZHRoIiwicmlnaHQiLCJsZWZ0IiwieSIsImF2YWlsSGVpZ2h0IiwiYm90dG9tIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwidmlzaWJpbGl0eSIsImpvaW4iLCJfX29uQ29udGVudFNjcm9sbCIsIm9uQ29udGVudFNjcm9sbCIsIl9zdHlsZSIsIm1heEhlaWdodCIsIl9wb3BvdmVycyIsIl9fcmVzb2x2ZUFsbFBvcG92ZXIiLCJ2YWx1ZXMiLCJ0YWdOYW1lIiwiZ2V0QXR0cmlidXRlIiwiY29uY2F0IiwiX19pbml0V2luZG93RXZlbnQiLCJfdHlwZSIsIl9fem51aV9yZWFjdF9wb3B1cF9ldmVudHNfXyIsImluZGV4T2YiLCJfX29uV2luZG93Q2xpY2siLCJjbG9zZVRhcmdldCIsIl9pZCIsInV1aWQiLCJfcmVmaWRzIiwiX2F0dHJzIiwia2V5IiwidGFnIiwiVG9hc3QiLCJ0b2FzdCIsImFwcGVuZENoaWxkIiwiVG9vbHRpcCIsIkVycm9yIiwiX2RvbVdpZHRoIiwib2Zmc2V0V2lkdGgiLCJfZG9tSGVpZ2h0IiwiX2NsYXNzTmFtZSIsInNjcm9sbEhlaWdodCIsInRvb2x0aXAiLCJfX29uV2luZG93TW91c2VPdmVyIiwiX19vbldpbmRvd1Jlc2l6ZSIsIl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUiLCJfdmFsdWUiLCJfdG9vbHRpcCIsInByb2Nlc3MiLCJlbnYiLCJkZWVwQXNzaWducyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDdkx0QyxJQUFJQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxJQUFjRSxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUNBLElBQUlDLEtBQUssR0FBR0QsbUJBQU8sQ0FBQywyQkFBRCxDQUFQLENB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YkEsbUJBQU8sQ0FBQyxpQ0FBRCxDQVBNLEVBUWJBLG1CQUFPLENBQUMsK0JBQUQsQ0FSTSxFQVNiQSxtQkFBTyxDQUFDLDJCQUFELENBVE0sRUFVYkEsbUJBQU8sQ0FBQywrQkFBRCxDQVZNLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xudmFyIEFsZXJ0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJBbGVydCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGNvbnRlbnQ6IG51bGwsXG5cdFx0XHRvbkNsaWNrOiBudWxsLFxuXHRcdFx0YnV0dG9uczogW1xuXHRcdFx0XHR7IHRleHQ6ICfnoa7orqQnIH1cblx0XHRcdF1cblx0XHR9O1xuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtLCB0aGlzKTtcblx0XHRcdF9yZXN1bHQgPSBpdGVtLm9uQ2xpY2sgJiYgaXRlbS5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXHRcdGlmKF9yZXN1bHQgIT09IGZhbHNlKXtcblx0XHRcdC8vem4uZGVidWcoJ2FsZXJ0LmNsb3NlJyk7XG5cdFx0XHRtb2RhbC5jbG9zZSgpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWFsZXJ0IGFsZXJ0LWluJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWlubmVyXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydC10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2Pn1cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50ICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtY29udGVudFwiPnt0aGlzLnByb3BzLmNvbnRlbnR9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydC1idG5zXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJhbGVydC1idG5cIiBvbkNsaWNrPXsoKT0+dGhpcy5fX29uQ2xpY2soaXRlbSwgaW5kZXgpfT57aXRlbS50ZXh0fTwvZGl2Pjtcblx0XHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRBbGVydDogQWxlcnQsXG5cdGFsZXJ0OiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUsIGNhbGxiYWNrLCBwcm9wcyl7XG5cdFx0dmFyIF9hbGVydCA9IG1vZGFsLmNyZWF0ZSg8QWxlcnQgXG5cdFx0XHRjb250ZW50PXtjb250ZW50fSBcblx0XHRcdHRpdGxlPXt0aXRsZX0gXG5cdFx0XHRvbkNsaWNrPXtjYWxsYmFja30gey4uLnByb3BzfSAvPiwge1xuXHRcdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdFx0fSwgZmFsc2UpO1xuIFxuICAgICAgICByZXR1cm4gX2FsZXJ0O1xuXHR9LFxuXHRjb25maXJtOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUsIGNvbmZpcm0sIGNhbmNlbCwgb3B0aW9ucyl7XG5cdFx0dmFyIF9vcHRpb25zID0gem4uZXh0ZW5kKHsgY2FuY2VsOiAn5Y+W5raIJywgY29uZmlybTogJ+ehruWumicgfSwgb3B0aW9ucyk7XG5cdFx0dmFyIF9jb25maXJtID0gbW9kYWwuY3JlYXRlKDxBbGVydFxuXHRcdFx0Y29udGVudD17Y29udGVudH1cblx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdGJ1dHRvbnM9e1tcblx0XHRcdFx0eyBcblx0XHRcdFx0XHR0ZXh0OiBfb3B0aW9ucy5jYW5jZWwsIFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRcdFx0dmFyIF9yZXR1cm4gPSBjYW5jZWwgJiYgY2FuY2VsKF9jb25maXJtKTtcblx0XHRcdFx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0XHRcdFx0X2NvbmZpcm0uZGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBcblx0XHRcdFx0XHR0ZXh0OiBfb3B0aW9ucy5jb25maXJtLCBcblx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0XHRcdHZhciBfcmV0dXJuID0gY29uZmlybSAmJiBjb25maXJtKF9jb25maXJtKTtcblx0XHRcdFx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0XHRcdFx0X2NvbmZpcm0uZGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XX0gLz4sIHtcblx0XHRcdFx0Y2xhc3M6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcblx0XHRcdH0sIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gX2NvbmZpcm07XG5cdH0sXG5cdHByb21wdDogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdHZhciBfYXJndiA9IHpuLmV4dGVuZCh7XG5cdFx0XHR0aXRsZTogYXJndi50aXRsZSxcblx0XHRcdGNvbnRlbnQ6IDxpbnB1dCBjbGFzc05hbWU9XCJhbGVydC1pbnB1dFwiIG9uQ2hhbmdlPXthcmd2Lm9uQ2hhbmdlfSB0eXBlPVwidGV4dFwiIC8+LFxuXHRcdFx0Y29uZmlybTogYXJndi5jb25maXJtLFxuXHRcdFx0Y2FuY2VsOiBhcmd2LmNhbmNlbFxuXHRcdH0sIGFyZ3YpO1xuXHRcdHZhciBfcHJvbXB0ID0gbW9kYWwuY3JlYXRlKDxBbGVydFxuXHRcdFx0Y29udGVudD17X2FyZ3YuY29udGVudH1cblx0XHRcdHRpdGxlPXtfYXJndi50aXRsZX1cblx0XHRcdGJ1dHRvbnM9e1tcblx0XHRcdFx0eyBcblx0XHRcdFx0XHR0ZXh0OiBfYXJndi5jYW5jZWxUZXh0IHx8ICflj5bmtognLCBcblx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGFsZXJ0KXtcblx0XHRcdFx0XHRcdHZhciBfcmV0dXJuID0gX2FyZ3YuY2FuY2VsICYmIF9hcmd2LmNhbmNlbChldmVudCwgYWxlcnQpO1xuXHRcdFx0XHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHRcdFx0XHRfcHJvbXB0LmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBfYXJndi5jb25maXJtVGV4dCB8fCAn56Gu5a6aJyxcblx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGFsZXJ0KXtcblx0XHRcdFx0XHRcdHZhciBfcmV0dXJuID0gX2FyZ3YuY29uZmlybSAmJiBfYXJndi5jb25maXJtKGV2ZW50LCBhbGVydCk7XG5cdFx0XHRcdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdFx0XHRcdF9wcm9tcHQuZGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdfSAvPiwge1xuXHRcdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdFx0fSwgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIF9wcm9tcHQ7XG5cdH1cbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xudmFyIERpYWxvZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRGlhbG9nJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0Y29udGVudDogbnVsbFxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGZ1bGxzY3JlZW46IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0X19vbkNsb3NlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsb3NlICYmIHRoaXMucHJvcHMub25DbG9zZShldmVudCwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCAhPT0gZmFsc2Upe1xuXHRcdFx0dmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRcdF9kb20uY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW91dCcpO1xuXHRcdFx0X2RvbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRtb2RhbC5jbG9zZSgpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJGdWxsc2NyZWVuOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLmZ1bGxzY3JlZW4pe1xuXHRcdFx0cmV0dXJuIDxzcGFuIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtmdWxsc2NyZWVuOiBmYWxzZX0pfSBjbGFzc05hbWU9XCJmdWxsLXNjcmVlblwiPlxuXHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJ3aW5kb3ctcmVzdG9yZVwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXdpbmRvdy1yZXN0b3JlIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00NjQgMEgxNDRjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djQ4SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHYzMjBjMCAyNi41IDIxLjUgNDggNDggNDhoMzIwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4di00OGg0OGMyNi41IDAgNDgtMjEuNSA0OC00OFY0OGMwLTI2LjUtMjEuNS00OC00OC00OHptLTk2IDQ2NEg0OFYyNTZoMzIwdjIwOHptOTYtOTZoLTQ4VjE0NGMwLTI2LjUtMjEuNS00OC00OC00OEgxNDRWNDhoMzIwdjMyMHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHQ8L3NwYW4+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIDxzcGFuIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtmdWxsc2NyZWVuOiB0cnVlfSl9IGNsYXNzTmFtZT1cImZ1bGwtc2NyZWVuXCI+XG5cdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cIndpbmRvdy1tYXhpbWl6ZVwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXdpbmRvdy1tYXhpbWl6ZSBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDY0IDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODB2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDQxNmMyNi41IDAgNDgtMjEuNSA0OC00OFY4MGMwLTI2LjUtMjEuNS00OC00OC00OHptMCAzOTRjMCAzLjMtMi43IDYtNiA2SDU0Yy0zLjMgMC02LTIuNy02LTZWMTkyaDQxNnYyMzR6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0PC9zcGFuPjtcblx0XHR9XG5cdH0sXG5cdF9faGVhZGVyUmVuZGVyOiBmdW5jdGlvbiAoKXsgXG5cdFx0aWYodGhpcy5wcm9wcy5oZWFkZXIpe1xuXHRcdFx0cmV0dXJuIHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaGVhZGVyLCB0aGlzLnByb3BzKTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWhlYWRlclwiPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2Pn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidG5zXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuZnVsbHNjcmVlbiAmJiB0aGlzLl9fcmVuZGVyRnVsbHNjcmVlbigpfVxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNsb3NlYWJsZSAmJiA8c3BhbiBvbkNsaWNrPXt0aGlzLl9fb25DbG9zZX0gY2xhc3NOYW1lPVwiZGlhbG9nLWNsb3NlXCI+eDwvc3Bhbj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWRpYWxvZyBkaWFsb2ctaW4nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5hdXRvV2lkdGg/J2F1dG8td2lkdGgnOidtaW4td2lkdGgnKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGRhdGEtZm9jdXM9e3RoaXMucHJvcHMuZm9jdXN9IGRhdGEtZnVsbHNjcmVlbj17dGhpcy5zdGF0ZS5mdWxsc2NyZWVufSA+XG5cdFx0XHRcdHt0aGlzLl9faGVhZGVyUmVuZGVyKCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcImRpYWxvZy1ib2R5XCIsIHRoaXMucHJvcHMuY29udGVudENsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLmNvbnRlbnRTdHlsZX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdERpYWxvZzogRGlhbG9nLFxuXHRkaWFsb2c6IGZ1bmN0aW9uIChhcmd2LCBpZlB1c2gpe1xuXHRcdHZhciBfZGlhbG9nID0gbW9kYWwuY3JlYXRlKDxEaWFsb2cgey4uLmFyZ3Z9IC8+LCB7XG5cdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdH0sIGlmUHVzaCk7XG5cblx0XHRyZXR1cm4gX2RpYWxvZztcblx0fVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIHBvcG92ZXIgPSByZXF1aXJlKCcuL1BvcG92ZXInKS5wb3BvdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0RHJvcGRvd246IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0XHRkaXNwbGF5TmFtZTonWlJEcm9wZG93bicsXG5cdFx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdFx0ZXZlbnRUeXBlOiAnY2xpY2snXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5hZGRFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG5cdFx0fSxcblx0XHRjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG5cdFx0fSxcblx0XHRnZXRQYXJlbnQ6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdFx0aWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnenItcG9wdXAtZHJvcGRvd24nKSl7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjbG9zZVBvcG92ZXI6IGZ1bmN0aW9uICgpe1xuXHRcdFx0aWYodGhpcy5fcG9wb3Zlcil7XG5cdFx0XHRcdHRoaXMuX3BvcG92ZXIuY2xvc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRfX2V2ZW50SGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpeyBcblx0XHRcdFx0cmV0dXJuOyBcblx0XHRcdH1cblx0XHRcdHZhciBfdGFyZ2V0ID0gdGhpcy5nZXRQYXJlbnQoZXZlbnQudGFyZ2V0KSxcblx0XHRcdFx0X3BvcG92ZXIgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMucG9wb3Zlcik7XG5cdFx0XHRpZihfdGFyZ2V0ICYmIF9wb3BvdmVyICYmIF9wb3BvdmVyLnJlbmRlcil7XG5cdFx0XHRcdHZhciBfcmVuZGVyID0gX3BvcG92ZXIucmVuZGVyO1xuXHRcdFx0XHRpZih6bi5pcyhfcmVuZGVyLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRcdGlmKCFfcmVuZGVyLnByb3RvdHlwZSB8fCAhX3JlbmRlci5wcm90b3R5cGUucmVuZGVyKXtcblx0XHRcdFx0XHRcdF9yZW5kZXIgPSBfcmVuZGVyKGV2ZW50LCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoX3JlbmRlcikge1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdF9wb3BvdmVyLnJlbmRlciA9IG51bGw7XG5cdFx0XHRcdFx0ZGVsZXRlIF9wb3BvdmVyLnJlbmRlcjtcblx0XHRcdFx0XHR0aGlzLmNsb3NlUG9wb3ZlcigpO1xuXHRcdFx0XHRcdHRoaXMuX3BvcG92ZXIgPSBwb3BvdmVyLnJlbmRlcihfcmVuZGVyLCB6bi5leHRlbmQoe1xuXHRcdFx0XHRcdFx0cmVzZXQ6IHRydWUsXG5cdFx0XHRcdFx0XHRldmVudDogZXZlbnQsXG5cdFx0XHRcdFx0XHR0YXJnZXQ6IF90YXJnZXQsXG5cdFx0XHRcdFx0fSwgX3BvcG92ZXIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZHJvcGRvd25cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdH0pXG59O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xudmFyIExvYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTG9hZGVyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29udGVudDogbnVsbCxcblx0XHRcdHRpdGxlOiAnTG9hZGluZyAuLi4gJ1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmNvbnRlbnQpe1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY29udGVudDtcblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLnRpdGxlKXtcblx0XHRcdHJldHVybiA8PlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJsb2FkZXJcIiBkYXRhLWxvYWRlcj1cInNwaW5uZXJcIi8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0PC8+O1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWxvYWRlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdExvYWRlcjogTG9hZGVyLFxuXHRsb2FkZXI6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbW9kYWwuY3JlYXRlKDxMb2FkZXIgey4uLmFyZ3Z9IC8+LCB7IFxuXHRcdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknLFxuXHRcdFx0XHRcdHJlZjogKHJlZikgPT4gdGhpcy5fbG9hZGVyID0gcmVmXG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRsb2FkaW5nOiBmdW5jdGlvbiAodGl0bGUpIHtcblx0XHRcdFx0aWYodHlwZW9mIHRpdGxlID09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGUoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IHRpdGxlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1lbHNlIGlmKHR5cGVvZiB0aXRsZSA9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgTW9kYWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk1vZGFsJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVzdHJveWVkOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRjbG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5kZXN0cm95KGNhbGxiYWNrKTtcblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCB8fCB0aGlzLnN0YXRlLmRlc3Ryb3llZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZihfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0dGhpcy5zdGF0ZS5kZXN0cm95ZWQgPSB0cnVlO1xuXHRcdHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD57dGhpcy5wcm9wcy5jaGlsZHJlbn08Lz5cblx0XHQpO1xuXHR9XG59KTs7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRNb2RhbDogTW9kYWwsXG5cdG1vZGFsOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3B1cC1tb2RhbC1jb250YWluZXJcIiB9KTtcblx0XHRcdFx0dGhpcy5fbW9kYWxzID0gW107XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucywgaWZQdXNoKXtcblx0XHRcdFx0dmFyIF9tb2RhbCA9ICBSZWFjdERPTS5yZW5kZXIoPE1vZGFsIHsuLi5vcHRpb25zfT57Y29udGVudH08L01vZGFsPiwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdFx0XHRjbGFzczogem51aS5jbGFzc25hbWUoJ3pyLXBvcHVwLW1vZGFsJywgb3B0aW9ucy5jbGFzcyksXG5cdFx0XHRcdFx0c3R5bGU6IHpudWkuc3R5bGUob3B0aW9ucy5zdHlsZSlcblx0XHRcdFx0fSwgdGhpcy5fZG9tKSk7XG5cdFx0XHRcdC8vem4uZGVidWcoJ01vZGFsIGNyZWF0ZWQoJyArICh0aGlzLl9tb2RhbHMubGVuZ3RoICsgMSkgKyAnKTogJywgX21vZGFsKTtcblx0XHRcdFx0aWYoaWZQdXNoICE9PSBmYWxzZSl7XG5cdFx0XHRcdFx0dGhpcy5fbW9kYWxzLnB1c2goX21vZGFsKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIF9tb2RhbDtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKGRlbGF5LCBjYWxsYmFjayl7XG5cdFx0XHRcdC8vem4uZGVidWcoJ01vZGFsIGNsb3NlKCcgKyB0aGlzLl9tb2RhbHMubGVuZ3RoICsgJyk6ICcpO1xuXHRcdFx0XHR2YXIgX21vZGFsID0gdGhpcy5fbW9kYWxzLnBvcCgpO1xuXHRcdFx0XHRpZihfbW9kYWwpe1xuXHRcdFx0XHRcdGlmKF9tb2RhbC5zdGF0ZS5kZXN0cm95ZWQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2xvc2UoZGVsYXksIGNhbGxiYWNrKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoZGVsYXkpe1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiBfbW9kYWwuZGVzdHJveShjYWxsYmFjayksIGRlbGF5KTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlQWxsOiBmdW5jdGlvbiAoZGVsYXkpe1xuXHRcdFx0XHRpZih0aGlzICYmIHRoaXMuX21vZGFscy5sZW5ndGgpe1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoZGVsYXksIHRoaXMuY2xvc2VBbGwpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRzaXplOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUWVBFX0lDT05TID0ge1xuXHRoZWFydDogJ000NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45eicsXG5cdHNlY29uZGFyeTogJ000NDggMEg2NEMyOC43IDAgMCAyOC43IDAgNjR2Mjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0aDk2djg0YzAgOS44IDExLjIgMTUuNSAxOS4xIDkuN0wzMDQgNDE2aDE0NGMzNS4zIDAgNjQtMjguNyA2NC02NFY2NGMwLTM1LjMtMjguNy02NC02NC02NHonLFxuXHRzdWNjZXNzOiAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicsXG5cdHdhcm5pbmc6ICdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jyxcblx0ZXJyb3I6ICdNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Jyxcblx0aW5mbzogJ00yMCA0MjQuMjI5aDIwVjI3OS43NzFIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwVjIxMmMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMGgxMTJjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB2MjEyLjIyOWgyMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMFY0OTJjMCAxMS4wNDYtOC45NTQgMjAtMjAgMjBIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwdi00Ny43NzFjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjB6TTk2IDBDNTYuMjM1IDAgMjQgMzIuMjM1IDI0IDcyczMyLjIzNSA3MiA3MiA3MiA3Mi0zMi4yMzUgNzItNzJTMTM1Ljc2NCAwIDk2IDB6Jyxcblx0bWVzc2FnZTogJ001MDIuMyAxOTAuOGMzLjktMy4xIDkuNy0uMiA5LjcgNC43VjQwMGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTk1LjZjMC01IDUuNy03LjggOS43LTQuNyAyMi40IDE3LjQgNTIuMSAzOS41IDE1NC4xIDExMy42IDIxLjEgMTUuNCA1Ni43IDQ3LjggOTIuMiA0Ny42IDM1LjcuMyA3Mi0zMi44IDkyLjMtNDcuNiAxMDItNzQuMSAxMzEuNi05Ni4zIDE1NC0xMTMuN3pNMjU2IDMyMGMyMy4yLjQgNTYuNi0yOS4yIDczLjQtNDEuNCAxMzIuNy05Ni4zIDE0Mi44LTEwNC43IDE3My40LTEyOC43IDUuOC00LjUgOS4yLTExLjUgOS4yLTE4Ljl2LTE5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjE5YzAgNy40IDMuNCAxNC4zIDkuMiAxOC45IDMwLjYgMjMuOSA0MC43IDMyLjQgMTczLjQgMTI4LjcgMTYuOCAxMi4yIDUwLjIgNDEuOCA3My40IDQxLjR6J1xufVxuXG52YXIgTm90aWZpZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5vdGlmaWNhdGlvbicsXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmRlbGF5ICE9IDApIHtcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCwgdGhpcy5wcm9wcy5kZWxheSB8fCAzMDAwKTtcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLl90aW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0fSxcblx0b3V0OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdF9kb20uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLW91dCcpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdGlmKHRoaXMuX3RpbWVvdXQpe1xuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdFx0fVxuXHRcdFx0aWYoX2RvbS5wYXJlbnROb2RlICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdFx0X2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdFx0UmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pbicsIHRoaXMucHJvcHMudHlwZSl9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG5cdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e1RZUEVfSUNPTlNbdGhpcy5wcm9wcy50eXBlfHwnaW5mbyddfT48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGVsYXkgPT09IDAgJiYgPGkgY2xhc3NOYW1lPVwiY2xvc2UgZmEgZmEtdGltZXNcIiBvbkNsaWNrPXt0aGlzLm91dH0gLz5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHROb3RpZmllcjogTm90aWZpZXIsXG5cdG5vdGlmaWVyOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogJ3pyLXBvcHVwLW5vdGlmaWVyLWNvbnRhaW5lcicgfSk7XG5cdFx0XHR9LFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKHR5cGUsIGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0dmFyIF9yZWYgPSA8Tm90aWZpZXIgdHlwZT17dHlwZX0gY29udGVudD17Y29udGVudH0gZGVsYXk9e2RlbGF5fSAvPjtcblx0XHRcdFx0UmVhY3RET00ucmVuZGVyKF9yZWYsIHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgdGhpcy5fZG9tKSk7XG5cdFx0XHRcdHJldHVybiBfcmVmO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3N1Y2Nlc3MnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0d2FybmluZzogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3Blbignd2FybmluZycsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3BlbignZXJyb3InLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0aW5mbzogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3BlbignaW5mbycsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRtZXNzYWdlOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdtZXNzYWdlJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFBvcG92ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBvcG92ZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRoaWRkZW5IZWlnaHQ6IDUsXG5cdFx0XHRzdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuXHRcdFx0Y2xvc2VhYmxlOiBmYWxzZSxcblx0XHRcdHBvcG92ZXJXaWR0aDogbnVsbCxcblx0XHRcdHBvcG92ZXJIZWlnaHQ6IG51bGxcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFycm93Q2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdHRoaXMuX2RvbS5hZGRFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnQudHlwZSwgdGhpcy5fX2V2ZW50TGlzdGVuZXIsIGZhbHNlKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xuXHRcdFx0dGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCk7XG5cdFx0fS5iaW5kKHRoaXMpLCAwKTtcblxuXHRcdHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCh0aGlzKTtcblx0fSxcblx0X19ldmVudExpc3RlbmVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25Db250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cdFx0aWYodGhpcy5wcm9wcy5zdG9wUHJvcGFnYXRpb24pIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdFx0aWYoX3Jlc3VsdCAhPT0gZmFsc2UgKXtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH0sXG5cdGNsb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdGlmKCF0aGlzLl9kb20pIHJldHVybjtcblx0XHR2YXIgX2RvbSA9IHRoaXMuX2RvbTtcblx0XHRfZG9tLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItb3V0Jyk7XG5cdFx0X2RvbS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnQudHlwZSwgdGhpcy5fX2V2ZW50TGlzdGVuZXIsIGZhbHNlKTtcblx0XHRfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCl7XG5cdFx0XHRpZihfZG9tLnBhcmVudE5vZGUgJiYgX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUpe1xuXHRcdFx0XHRfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpO1xuXHR9LFxuXHRmaXhQb3NpdGlvbjogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0dmFyIF9wb3BvdmVyID0gdGhpcy5fZG9tO1xuXHRcdHZhciBfdCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuXHRcdFx0X3BvcG92ZXJXaWR0aCA9IHRoaXMucHJvcHMucG9wb3ZlcldpZHRoIHx8IF90LndpZHRoLFxuXHRcdFx0X3BvcG92ZXJIZWlnaHQgPSB0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQgfHwgem4uZG9tLmdldFBvc2l0aW9uKF9wb3BvdmVyKS5oZWlnaHQsXG5cdFx0XHRfbGVmdCA9IG51bGwsXG5cdFx0XHRfdG9wID0gbnVsbCxcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMgPSBbXTtcblxuXHRcdGlmKF9wb3BvdmVyV2lkdGggPT0gJzEwMCUnKXtcblx0XHRcdF9wb3BvdmVyV2lkdGggPSBfdC53aWR0aDtcblx0XHR9XG5cblx0XHRpZihfcG9wb3ZlckhlaWdodCA8IHRoaXMucHJvcHMuaGlkZGVuSGVpZ2h0KXtcblx0XHRcdHRoaXMucHJvcHMub25IaWRkZW4gJiYgdGhpcy5wcm9wcy5vbkhpZGRlbigpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKChfdC54ICsgX3BvcG92ZXJXaWR0aCkgPiB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgpe1xuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1wbGFjZW1lbnQtcmlnaHQnKTtcblx0XHRcdF9sZWZ0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCAtIF90LnggLSBfdC53aWR0aDtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLnJpZ2h0ID0gX2xlZnQgKyAncHgnO1xuXHRcdFx0X3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5yaWdodCA9ICcwcHgnO1xuXHRcdH1lbHNlIHtcblx0XHRcdF9sZWZ0ID0gX3QueDtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LWxlZnQnKTtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLmxlZnQgPSBfbGVmdCArICdweCc7XG5cdFx0fVxuXG5cdFx0aWYoKF90LnkgKyBfcG9wb3ZlckhlaWdodCkgPiB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0KXtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbScpO1xuXHRcdFx0X3RvcCA9IF90LmhlaWdodCArIDEwO1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUuYm90dG9tID0gX3RvcCArICdweCc7XG5cdFx0XHRfcG9wb3Zlci5wYXJlbnROb2RlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdG9wID0gX3QueSArIF90LmhlaWdodCArIDEwO1xuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tdG9wJyk7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS50b3AgPSBfdG9wICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCl7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS53aWR0aCA9IF9wb3BvdmVyV2lkdGggKyAncHgnO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMucG9wb3ZlckhlaWdodCl7XG5cdFx0XHRpZihfcG9wb3Zlci5vZmZzZXRIZWlnaHQgIT0gX3BvcG92ZXJIZWlnaHQpe1xuXHRcdFx0XHRfcG9wb3Zlci5zdHlsZS5oZWlnaHQgPSBfcG9wb3ZlckhlaWdodCArICdweCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0X3BvcG92ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFuaW1hdGUtc2NhbGUtdXAnKTtcblx0XHRfcG9wb3Zlci5jbGFzc05hbWUgPSBfcG9wb3Zlci5jbGFzc05hbWUgKyAnICcgKyBfYXJyb3dDbGFzc05hbWVzLmpvaW4oJyAnKTtcblx0fSxcblx0X19vbkNvbnRlbnRTY3JvbGw6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbnRlbnRTY3JvbGwgJiYgdGhpcy5wcm9wcy5vbkNvbnRlbnRTY3JvbGwoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9zdHlsZSA9IHt9O1xuXHRcdGlmKHRoaXMucHJvcHMuaGVpZ2h0KXtcblx0XHRcdF9zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCArICdweCc7XG5cdFx0fWVsc2Uge1xuXHRcdFx0X3N0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtcG9wb3ZlciBwb3BvdmVyLWluIHpyLWFycm93IHpyLWFycm93LWNvbG9yLXdoaXRlJywgdGhpcy5zdGF0ZS5hcnJvd0NsYXNzTmFtZSl9ID5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuY2xvc2VhYmxlICYmIDxzcGFuIGNsYXNzTmFtZT1cInBvcG92ZXItY2xvc2UgenItaG92ZXItc2VsZi1sb2FkaW5nXCIgb25DbGljaz17KCk9PnRoaXMuY2xvc2UoJ3NlbGYgY2xvc2UnKX0+XG5cdFx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBvblNjcm9sbD17dGhpcy5fX29uQ29udGVudFNjcm9sbH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInBvcG92ZXItY29udGVudFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt6bi5leHRlbmQoe30sIHRoaXMucHJvcHMuc3R5bGUpLCBfc3R5bGV9ID57dGhpcy5wcm9wcy5jb250ZW50fTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRQb3BvdmVyOiBQb3BvdmVyLFxuXHRwb3BvdmVyOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3B1cC1wb3BvdmVyLWNvbnRhaW5lclwiIH0pO1xuXHRcdFx0XHR0aGlzLl9wb3BvdmVycyA9IHt9O1xuXHRcdFx0fSxcblx0XHRcdF9fcmVzb2x2ZUFsbFBvcG92ZXI6IGZ1bmN0aW9uICh0YXJnZXQsIHZhbHVlcyl7XG5cdFx0XHRcdHZhbHVlcyA9IHZhbHVlcyB8fCBbXTtcblx0XHRcdFx0aWYodGFyZ2V0KXtcblx0XHRcdFx0XHRpZih0YXJnZXQudGFnTmFtZSA9PSAnQk9EWScpIHJldHVybiB2YWx1ZXM7XG5cdFx0XHRcdFx0aWYodGFyZ2V0LmdldEF0dHJpYnV0ZSl7XG5cdFx0XHRcdFx0XHRpZih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3BvdmVyLWlkXCIpKXtcblx0XHRcdFx0XHRcdFx0dmFsdWVzLnB1c2godGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcG9wb3Zlci1pZFwiKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3BvdmVyLXJlZi1pZHNcIikpe1xuXHRcdFx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcG92ZXItcmVmLWlkc1wiKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19yZXNvbHZlQWxsUG9wb3Zlcih0YXJnZXQucGFyZW50Tm9kZSwgdmFsdWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0fSxcblx0XHRcdF9faW5pdFdpbmRvd0V2ZW50OiBmdW5jdGlvbiAob3B0aW9ucyl7XG5cdFx0XHRcdHZhciBfdHlwZSA9IG9wdGlvbnMuZXZlbnQudHlwZTtcblx0XHRcdFx0d2luZG93Ll9fem51aV9yZWFjdF9wb3B1cF9ldmVudHNfXyA9IHdpbmRvdy5fX3pudWlfcmVhY3RfcG9wdXBfZXZlbnRzX18gfHwgW107XG5cdFx0XHRcdGlmKHdpbmRvdy5fX3pudWlfcmVhY3RfcG9wdXBfZXZlbnRzX18uaW5kZXhPZihfdHlwZSkgPT09IC0xKXtcblx0XHRcdFx0XHR3aW5kb3cuX196bnVpX3JlYWN0X3BvcHVwX2V2ZW50c19fLnB1c2goX3R5cGUpO1xuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKF90eXBlLCAoZXZlbnQpPT50aGlzLl9fb25XaW5kb3dDbGljayhldmVudCwgb3B0aW9ucyksIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9fb25XaW5kb3dDbGljazogZnVuY3Rpb24gKGV2ZW50LCBvcHRpb25zKXtcblx0XHRcdFx0dGhpcy5jbG9zZVRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjogZnVuY3Rpb24gKGNvbnRlbnQsIG9wdGlvbnMpe1xuXHRcdFx0XHRpZihvcHRpb25zKXtcblx0XHRcdFx0XHRpZihvcHRpb25zLnJlc2V0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlVGFyZ2V0KG9wdGlvbnMudGFyZ2V0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYob3B0aW9ucy5ldmVudCl7XG5cdFx0XHRcdFx0XHR0aGlzLl9faW5pdFdpbmRvd0V2ZW50KG9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBfaWQgPSB6bi51dWlkKCksXG5cdFx0XHRcdFx0X3JlZmlkcyA9IHRoaXMuX19yZXNvbHZlQWxsUG9wb3ZlcihvcHRpb25zLmV2ZW50LnRhcmdldCksXG5cdFx0XHRcdFx0X2F0dHJzID0ge1xuXHRcdFx0XHRcdFx0XCJkYXRhLXBvcG92ZXItaWRcIjogX2lkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0aWYoX3JlZmlkcy5sZW5ndGgpe1xuXHRcdFx0XHRcdF9hdHRyc1tcImRhdGEtcG9wb3Zlci1yZWYtaWRzXCJdID0gX3JlZmlkcy5qb2luKCcsJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIF9kb20gPSB6bi5kb20uY3JlYXRlRWxlbWVudCgnZGl2JywgX2F0dHJzLCB0aGlzLl9kb20pO1xuXHRcdFx0XHR2YXIgX3BvcG92ZXIgPSBSZWFjdERPTS5yZW5kZXIoPFBvcG92ZXIgey4uLm9wdGlvbnN9IFxuXHRcdFx0XHRcdGNvbnRlbnQ9e2NvbnRlbnR9IFxuXHRcdFx0XHRcdG9uQ29udGVudFNjcm9sbD17KGV2ZW50LCBwb3BvdmVyKT0+e1xuXHRcdFx0XHRcdFx0dGhpcy5jbG9zZVRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdFx0XHRcdH19IC8+LCBfZG9tKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcG9wb3ZlcnNbX2lkXSA9IF9wb3BvdmVyLCBfcG9wb3Zlcjtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZVRhcmdldDogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0XHRcdHZhciBfcG9wb3ZlcnMgPSB0aGlzLl9fcmVzb2x2ZUFsbFBvcG92ZXIodGFyZ2V0LCBbXSkgfHwgW107XG5cdFx0XHRcdGZvcih2YXIga2V5IGluIHRoaXMuX3BvcG92ZXJzKXtcblx0XHRcdFx0XHRpZihfcG9wb3ZlcnMuaW5kZXhPZihrZXkpID09PSAtMSl7XG5cdFx0XHRcdFx0XHR0aGlzLl9wb3BvdmVyc1trZXldLmNsb3NlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9wb3BvdmVyc1trZXldID0gbnVsbDtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLl9wb3BvdmVyc1trZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNsb3NlQWxsOiBmdW5jdGlvbiAodGFnKXtcblx0XHRcdFx0aWYodGhpcy5fcG9wb3Zlcil7XG5cdFx0XHRcdFx0dGhpcy5fcG9wb3Zlci5jbG9zZSh0YWcpO1xuXHRcdFx0XHRcdHRoaXMuX3BvcG92ZXIgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvYXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUb2FzdCcsXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCwgdGhpcy5wcm9wcy5kZWxheSB8fCAxODAwKTtcblx0fSxcblx0b3V0OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdF9kb20uY2xhc3NMaXN0LmFkZCgndG9hc3Qtb3V0Jyk7XG5cdFx0X2RvbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpe1xuXHRcdFx0X2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuXHRcdH0sIGZhbHNlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLXRvYXN0IHRvYXN0LWluJywgdGhpcy5wcm9wcy50eXBlKX0gPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRUb2FzdDogVG9hc3QsXG5cdHRvYXN0OiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3B1cC10b2FzdC1jb250YWluZXJcIiB9KTtcblx0XHRcdH0sXG5cdFx0XHRvcGVuOiBmdW5jdGlvbiAodHlwZSwgY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHR2YXIgX2RvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRSZWFjdERPTS5yZW5kZXIoPFRvYXN0IHR5cGU9e3R5cGV9IGNvbnRlbnQ9e2NvbnRlbnR9IGRlbGF5PXtkZWxheX0gLz4sIF9kb20pO1xuXHRcdFx0XHR0aGlzLl9kb20uYXBwZW5kQ2hpbGQoX2RvbSk7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3Blbignc3VjY2VzcycsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHR3YXJuaW5nOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCd3YXJuaW5nJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdkYW5nZXInLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0aW5mbzogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3BlbignaW5mbycsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUb29sdGlwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUb29sdGlwJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJyb3dDbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5fZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCk7XG5cdH0sXG5cdGZpeFBvc2l0aW9uOiBmdW5jdGlvbiAodGFyZ2V0KXtcblx0XHRpZighdGFyZ2V0KXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignZml4UG9zaXRpb24gdGFyZ2V0IGlzIG51bGwuJyk7XG5cdFx0fVxuXHRcdHZhciBfZG9tV2lkdGggPSB0aGlzLl9kb20ub2Zmc2V0V2lkdGgsXG5cdFx0XHRfZG9tSGVpZ2h0ID0gdGhpcy5fZG9tLm9mZnNldEhlaWdodCxcblx0XHRcdF90YXJnZXQgPSB6bi5kb20uZ2V0UG9zaXRpb24odGFyZ2V0KSxcblx0XHRcdF9sZWZ0ID0gbnVsbCxcblx0XHRcdF90b3AgPSBudWxsLFxuXHRcdFx0X2NsYXNzTmFtZSA9ICcnO1xuXG5cdFx0aWYoKF90YXJnZXQueCArIF9kb21XaWR0aCkgPiBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoKXtcblx0XHRcdF9sZWZ0ID0gX3RhcmdldC53aWR0aCAtIF9kb21XaWR0aDtcblx0XHR9ZWxzZSB7XG5cdFx0XHRfbGVmdCA9IF90YXJnZXQueCArIChfdGFyZ2V0LndpZHRoIC0gX2RvbVdpZHRoKSAvIDI7XG5cdFx0fVxuXG5cdFx0aWYoKF90YXJnZXQueSArIF9kb21IZWlnaHQpID4gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpe1xuXHRcdFx0X3RvcCA9IF90YXJnZXQueSAtIF9kb21IZWlnaHQgLSAxNjtcblx0XHRcdF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90b3AgPSBfdGFyZ2V0LnkgKyBfdGFyZ2V0LmhlaWdodCArIDE2O1xuXHRcdFx0X2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tdG9wJztcblx0XHR9XG5cblx0XHRpZihfbGVmdDwwKXtcblx0XHRcdF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLWxlZnQnO1xuXHRcdFx0X2xlZnQgPSBfdGFyZ2V0LnggKyBfdGFyZ2V0LndpZHRoICsgNDtcblx0XHRcdF90b3AgPSBfdGFyZ2V0LnkgKyA0O1xuXHRcdH1cblxuXHRcdHRoaXMuX2RvbS5zdHlsZS50b3AgPSBfdG9wICsgJ3B4Jztcblx0XHR0aGlzLl9kb20uc3R5bGUubGVmdCA9IF9sZWZ0ICsgJ3B4Jztcblx0XHRfY2xhc3NOYW1lICYmIHRoaXMuX2RvbS5jbGFzc0xpc3QuYWRkKF9jbGFzc05hbWUpO1xuXHR9LFxuXHRkZXN0cm95OiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdGlmKCF0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlICYmIHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlKF9kb20pO1xuXHRcdGlmKF9yZXN1bHQgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKF9kb20gJiYgX2RvbS5wYXJlbnROb2RlKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkRlc3Ryb3kgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3koKTtcblx0XHRpZih6bi5pcyhjYWxsYmFjaywgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXRvb2x0aXAgenItYXJyb3cgenItYXJyb3ctY29sb3ItYmxhY2sgenItYXJyb3ctcGxhY2VtZW50LWNlbnRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VG9vbHRpcDogVG9vbHRpcCxcblx0dG9vbHRpcDogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwienItcG9wdXAtdG9vbHRpcC1jb250YWluZXJcIiB9KTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuX19vbldpbmRvd01vdXNlT3Zlci5iaW5kKHRoaXMpLCB0cnVlKTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX19vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cdFx0XHR9LFxuXHRcdFx0X19vbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93LnJlc2l6aW5nJyk7XG5cdFx0XHR9LFxuXHRcdFx0X19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZTogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0XHRcdGlmKHRhcmdldCl7XG5cdFx0XHRcdFx0aWYodGFyZ2V0LnRhZ05hbWUgPT0gJ0JPRFknIHx8IHRhcmdldC50YWdOYW1lID09ICdIVE1MJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0YXJnZXQuZ2V0QXR0cmlidXRlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtenItcG9wdXAtdG9vbHRpcCcpKXtcblx0XHRcdFx0XHRcdHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXpyLXBvcHVwLXRvb2x0aXAnKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUodGFyZ2V0LnBhcmVudE5vZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9fb25XaW5kb3dNb3VzZU92ZXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0XHRcdHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuXHRcdFx0XHRcdF92YWx1ZSA9IHRoaXMuX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZShfdGFyZ2V0KTtcblx0XHRcdFx0aWYoX3RhcmdldCAmJiBfdmFsdWUpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX3Rvb2x0aXAgJiYgdGhpcy5fdG9vbHRpcC5wcm9wcy50YXJnZXQgIT09IF90YXJnZXQpe1xuXHRcdFx0XHRcdFx0dGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucmVuZGVyKF92YWx1ZSwgeyB0YXJnZXQ6IF90YXJnZXQgfSk7XG5cdFx0XHRcdH1lbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjogZnVuY3Rpb24gKGNvbnRlbnQsIG9wdGlvbnMpe1xuXHRcdFx0XHRpZih0aGlzLl90b29sdGlwKXtcblx0XHRcdFx0XHR0aGlzLl90b29sdGlwLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl90b29sdGlwID0gUmVhY3RET00ucmVuZGVyKDxUb29sdGlwIHsuLi5vcHRpb25zfSBjb250ZW50PXtjb250ZW50fSAvPiwgdGhpcy5fZG9tKTtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRcdFx0aWYodGhpcy5fdG9vbHRpcCl7XG5cdFx0XHRcdFx0aWYoem4uaXMoY2FsbGJhY2ssICdzdHJpbmcnKSAmJiBwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpIHtcblx0XHRcdFx0XHRcdC8vem4uZGVidWcoY2FsbGJhY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbSk7XG5cdFx0XHRcdFx0dGhpcy5fdG9vbHRpcC5kZXN0cm95KGNhbGxiYWNrKTtcblx0XHRcdFx0XHR0aGlzLl90b29sdGlwID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHpuLmRlZXBBc3NpZ25zKFxuICAgIHsgfSwgXG4gICAgcmVxdWlyZSgnLi9BbGVydCcpLCBcbiAgICByZXF1aXJlKCcuL0RpYWxvZycpLFxuICAgIHJlcXVpcmUoJy4vRHJvcGRvd24nKSxcbiAgICByZXF1aXJlKCcuL0xvYWRlcicpLFxuICAgIHJlcXVpcmUoJy4vTW9kYWwnKSxcbiAgICByZXF1aXJlKCcuL05vdGlmaWVyJyksXG4gICAgcmVxdWlyZSgnLi9Qb3BvdmVyJyksXG4gICAgcmVxdWlyZSgnLi9Ub2FzdCcpLFxuICAgIHJlcXVpcmUoJy4vVG9vbHRpcCcpXG4pOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9