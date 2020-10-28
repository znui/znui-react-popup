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
  __onClose: function __onClose(event) {
    var _result = this.props.onClose && this.props.onClose(event, this);

    if (_result !== false) {
      modal.close();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-dialog', this.props.className),
      style: this.props.style,
      "data-focus": this.props.focus
    }, /*#__PURE__*/React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "dialog-title"
    }, this.props.title), this.props.closeable && /*#__PURE__*/React.createElement("span", {
      onClick: this.__onClose,
      className: "dialog-close"
    }, "x")), /*#__PURE__*/React.createElement("div", {
      className: "dialog-body"
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
          popover.render(_render, zn.extend({
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
        if (this._modals.length) {
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
    window.setTimeout(this.out, this.props.delay || 1500);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('notification-out');

    _dom.addEventListener("animationend", function () {
      if (_dom.parentNode.parentNode) {
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
    }, this.props.content), /*#__PURE__*/React.createElement("i", {
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

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-popover zr-arrow zr-arrow-color-white', this.state.arrowClassName)
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
      },
      render: function render(content, options) {
        if (options && options.reset) {
          this.close('zn.popover:render');
        }

        return this._popover = ReactDOM.render( /*#__PURE__*/React.createElement(Popover, _extends({}, options, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vRGlhbG9nLmpzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9Qb3BvdmVyLmpzIiwid2VicGFjazovLy8uL1RvYXN0LmpzIiwid2VicGFjazovLy8uL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJtb2RhbCIsIkFsZXJ0IiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRpdGxlIiwiY29udGVudCIsIm9uQ2xpY2siLCJidXR0b25zIiwidGV4dCIsIl9fb25DbGljayIsIml0ZW0iLCJpbmRleCIsIl9yZXN1bHQiLCJwcm9wcyIsImNsb3NlIiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcCIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWxlcnQiLCJjYWxsYmFjayIsIl9hbGVydCIsImNyZWF0ZSIsImNvbmZpcm0iLCJjYW5jZWwiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJ6biIsImV4dGVuZCIsIl9jb25maXJtIiwiX3JldHVybiIsImRlc3Ryb3kiLCJwcm9tcHQiLCJhcmd2IiwiX2FyZ3YiLCJvbkNoYW5nZSIsIl9wcm9tcHQiLCJjYW5jZWxUZXh0IiwiZXZlbnQiLCJjb25maXJtVGV4dCIsIkRpYWxvZyIsIl9fb25DbG9zZSIsIm9uQ2xvc2UiLCJmb2N1cyIsImNsb3NlYWJsZSIsImRpYWxvZyIsImlmUHVzaCIsIl9kaWFsb2ciLCJSZWFjdERPTSIsInBvcG92ZXIiLCJEcm9wZG93biIsImRpc2FibGVkIiwiZXZlbnRUeXBlIiwiY29tcG9uZW50RGlkTW91bnQiLCJmaW5kRE9NTm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX2V2ZW50SGFuZGxlciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFBhcmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIl90YXJnZXQiLCJfcG9wb3ZlciIsIl9yZW5kZXIiLCJpcyIsInByb3RvdHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsInJlc2V0IiwiY2hpbGRyZW4iLCJMb2FkZXIiLCJfX3JlbmRlckNvbnRlbnQiLCJsb2FkZXIiLCJDbGFzcyIsIm1ldGhvZHMiLCJfbG9hZGVyIiwicmVmIiwibG9hZGluZyIsIk1vZGFsIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGVzdHJveWVkIiwib25Db21wb25lbnREaWRNb3VudCIsIl9faXNNb3VudGVkIiwic3RhdGUiLCJfZG9tIiwib25EZXN0cm95QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwib25EZXN0cm95IiwiaW5pdCIsImRvbSIsImNyZWF0ZVJvb3RFbGVtZW50IiwiX21vZGFscyIsIl9tb2RhbCIsImNyZWF0ZUVsZW1lbnQiLCJwdXNoIiwiZGVsYXkiLCJwb3AiLCJzZXRUaW1lb3V0IiwiY2xvc2VBbGwiLCJsZW5ndGgiLCJzaXplIiwiVFlQRV9JQ09OUyIsImhlYXJ0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsIndhcm5pbmciLCJlcnJvciIsImluZm8iLCJOb3RpZmllciIsIndpbmRvdyIsIm91dCIsImFkZCIsInR5cGUiLCJub3RpZmllciIsIm9wZW4iLCJQb3BvdmVyIiwiaGlkZGVuSGVpZ2h0IiwicG9wb3ZlcldpZHRoIiwicG9wb3ZlckhlaWdodCIsImFycm93Q2xhc3NOYW1lIiwiX2V2ZW50VHlwZSIsIl9fb25XaW5kb3dDbGljayIsIm9uQ29udGFpbmVyRXZlbnQiLCJmaXhQb3NpdGlvbiIsIm9uUG9wb3ZlckRpZE1vdW50IiwiX19pc01hdGNoUGFyZW50IiwicGFyZW50IiwidGFnTmFtZSIsIm9uV2luZG93T3V0c2lkZUNvbnRhaW5lckV2ZW50Iiwib25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCIsInRhZyIsIl90IiwiZ2V0UG9zaXRpb24iLCJfcG9wb3ZlcldpZHRoIiwid2lkdGgiLCJfcG9wb3ZlckhlaWdodCIsImhlaWdodCIsIl9sZWZ0IiwiX3RvcCIsIl9hcnJvd0NsYXNzTmFtZXMiLCJvbkhpZGRlbiIsIngiLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsV2lkdGgiLCJyaWdodCIsImxlZnQiLCJ5IiwiYXZhaWxIZWlnaHQiLCJib3R0b20iLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJ2aXNpYmlsaXR5Iiwiam9pbiIsIl9zdHlsZSIsIm1heEhlaWdodCIsIlRvYXN0IiwidG9hc3QiLCJhcHBlbmRDaGlsZCIsIlRvb2x0aXAiLCJFcnJvciIsIl9kb21XaWR0aCIsIm9mZnNldFdpZHRoIiwiX2RvbUhlaWdodCIsIl9jbGFzc05hbWUiLCJzY3JvbGxIZWlnaHQiLCJ0b29sdGlwIiwiX19vbldpbmRvd01vdXNlT3ZlciIsIl9fb25XaW5kb3dSZXNpemUiLCJfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlIiwiZ2V0QXR0cmlidXRlIiwiX3ZhbHVlIiwiX3Rvb2x0aXAiLCJwcm9jZXNzIiwiZW52IiwiZGVlcEFzc2lnbnMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QWhCO0FBQ0E7O0FBRUQsZUFBTyxJQUFQO0FBQ0E7QUFsRE87QUFGUSxHQUFUO0FBRk8sQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDM0VBaEssTUFBTSxDQUFDQyxPQUFQLEdBQWlCUyxFQUFFLENBQUN5SixXQUFILENBQ2IsRUFEYSxFQUViM0wsbUJBQU8sQ0FBQywyQkFBRCxDQUZNLEVBR2JBLG1CQUFPLENBQUMsNkJBQUQsQ0FITSxFQUliQSxtQkFBTyxDQUFDLGlDQUFELENBSk0sRUFLYkEsbUJBQU8sQ0FBQyw2QkFBRCxDQUxNLEVBTWJBLG1CQUFPLENBQUMsMkJBQUQsQ0FOTSxFQU9iQSxtQkFBTyxDQUFDLGlDQUFELENBUE0sRUFRYkEsbUJBQU8sQ0FBQywrQkFBRCxDQVJNLEVBU2JBLG1CQUFPLENBQUMsMkJBQUQsQ0FUTSxFQVViQSxtQkFBTyxDQUFDLCtCQUFELENBVk0sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG52YXIgQWxlcnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkFsZXJ0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0Y29udGVudDogbnVsbCxcblx0XHRcdG9uQ2xpY2s6IG51bGwsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdGV4dDogJ+ehruiupCcgfVxuXHRcdFx0XVxuXHRcdH07XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXHRcdFx0X3Jlc3VsdCA9IGl0ZW0ub25DbGljayAmJiBpdGVtLm9uQ2xpY2soaXRlbSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCAhPT0gZmFsc2Upe1xuXHRcdFx0Ly96bi5kZWJ1ZygnYWxlcnQuY2xvc2UnKTtcblx0XHRcdG1vZGFsLmNsb3NlKCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtYWxlcnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtaW5uZXJcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnQgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1jb250ZW50XCI+e3RoaXMucHJvcHMuY29udGVudH08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWJ0bnNcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImFsZXJ0LWJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLl9fb25DbGljayhpdGVtLCBpbmRleCl9PntpdGVtLnRleHR9PC9kaXY+O1xuXHRcdFx0XHRcdFx0fS5iaW5kKHRoaXMpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEFsZXJ0OiBBbGVydCxcblx0YWxlcnQ6IGZ1bmN0aW9uIChjb250ZW50LCB0aXRsZSwgY2FsbGJhY2ssIHByb3BzKXtcblx0XHR2YXIgX2FsZXJ0ID0gbW9kYWwuY3JlYXRlKDxBbGVydCBcblx0XHRcdGNvbnRlbnQ9e2NvbnRlbnR9IFxuXHRcdFx0dGl0bGU9e3RpdGxlfSBcblx0XHRcdG9uQ2xpY2s9e2NhbGxiYWNrfSB7Li4ucHJvcHN9IC8+LCB7XG5cdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0XHR9LCBmYWxzZSk7XG4gXG4gICAgICAgIHJldHVybiBfYWxlcnQ7XG5cdH0sXG5cdGNvbmZpcm06IGZ1bmN0aW9uIChjb250ZW50LCB0aXRsZSwgY29uZmlybSwgY2FuY2VsLCBvcHRpb25zKXtcblx0XHR2YXIgX29wdGlvbnMgPSB6bi5leHRlbmQoeyBjYW5jZWw6ICflj5bmtognLCBjb25maXJtOiAn56Gu5a6aJyB9LCBvcHRpb25zKTtcblx0XHR2YXIgX2NvbmZpcm0gPSBtb2RhbC5jcmVhdGUoPEFsZXJ0XG5cdFx0XHRjb250ZW50PXtjb250ZW50fVxuXHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0YnV0dG9ucz17W1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IF9vcHRpb25zLmNhbmNlbCwgXG5cdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdFx0XHR2YXIgX3JldHVybiA9IGNhbmNlbCAmJiBjYW5jZWwoX2NvbmZpcm0pO1xuXHRcdFx0XHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHRcdFx0XHRfY29uZmlybS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IF9vcHRpb25zLmNvbmZpcm0sIFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRcdFx0dmFyIF9yZXR1cm4gPSBjb25maXJtICYmIGNvbmZpcm0oX2NvbmZpcm0pO1xuXHRcdFx0XHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHRcdFx0XHRfY29uZmlybS5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRdfSAvPiwge1xuXHRcdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdFx0fSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBfY29uZmlybTtcblx0fSxcblx0cHJvbXB0OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0dmFyIF9hcmd2ID0gem4uZXh0ZW5kKHtcblx0XHRcdHRpdGxlOiBhcmd2LnRpdGxlLFxuXHRcdFx0Y29udGVudDogPGlucHV0IGNsYXNzTmFtZT1cImFsZXJ0LWlucHV0XCIgb25DaGFuZ2U9e2FyZ3Yub25DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgLz4sXG5cdFx0XHRjb25maXJtOiBhcmd2LmNvbmZpcm0sXG5cdFx0XHRjYW5jZWw6IGFyZ3YuY2FuY2VsXG5cdFx0fSwgYXJndik7XG5cdFx0dmFyIF9wcm9tcHQgPSBtb2RhbC5jcmVhdGUoPEFsZXJ0XG5cdFx0XHRjb250ZW50PXtfYXJndi5jb250ZW50fVxuXHRcdFx0dGl0bGU9e19hcmd2LnRpdGxlfVxuXHRcdFx0YnV0dG9ucz17W1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IF9hcmd2LmNhbmNlbFRleHQgfHwgJ+WPlua2iCcsIFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYWxlcnQpe1xuXHRcdFx0XHRcdFx0dmFyIF9yZXR1cm4gPSBfYXJndi5jYW5jZWwgJiYgX2FyZ3YuY2FuY2VsKGV2ZW50LCBhbGVydCk7XG5cdFx0XHRcdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdFx0XHRcdF9wcm9tcHQuZGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IF9hcmd2LmNvbmZpcm1UZXh0IHx8ICfnoa7lrponLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYWxlcnQpe1xuXHRcdFx0XHRcdFx0dmFyIF9yZXR1cm4gPSBfYXJndi5jb25maXJtICYmIF9hcmd2LmNvbmZpcm0oZXZlbnQsIGFsZXJ0KTtcblx0XHRcdFx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0XHRcdFx0X3Byb21wdC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF19IC8+LCB7XG5cdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0XHR9LCBmYWxzZSk7XG5cblx0XHRyZXR1cm4gX3Byb21wdDtcblx0fVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG52YXIgRGlhbG9nID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJEaWFsb2cnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRjb250ZW50OiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19vbkNsb3NlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsb3NlICYmIHRoaXMucHJvcHMub25DbG9zZShldmVudCwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCAhPT0gZmFsc2Upe1xuXHRcdFx0bW9kYWwuY2xvc2UoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1kaWFsb2cnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBkYXRhLWZvY3VzPXt0aGlzLnByb3BzLmZvY3VzfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWhlYWRlclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNsb3NlYWJsZSAmJiA8c3BhbiBvbkNsaWNrPXt0aGlzLl9fb25DbG9zZX0gY2xhc3NOYW1lPVwiZGlhbG9nLWNsb3NlXCI+eDwvc3Bhbj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1ib2R5XCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdERpYWxvZzogRGlhbG9nLFxuXHRkaWFsb2c6IGZ1bmN0aW9uIChhcmd2LCBpZlB1c2gpe1xuXHRcdHZhciBfZGlhbG9nID0gbW9kYWwuY3JlYXRlKDxEaWFsb2cgey4uLmFyZ3Z9IC8+LCB7XG5cdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdH0sIGlmUHVzaCk7XG5cblx0XHRyZXR1cm4gX2RpYWxvZztcblx0fVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIHBvcG92ZXIgPSByZXF1aXJlKCcuL1BvcG92ZXInKS5wb3BvdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0RHJvcGRvd246IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0XHRkaXNwbGF5TmFtZTonWlJEcm9wZG93bicsXG5cdFx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdFx0ZXZlbnRUeXBlOiAnY2xpY2snXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5hZGRFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG5cdFx0fSxcblx0XHRjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG5cdFx0fSxcblx0XHRnZXRQYXJlbnQ6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdFx0aWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnenItcG9wdXAtZHJvcGRvd24nKSl7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfX2V2ZW50SGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpeyBcblx0XHRcdFx0cmV0dXJuOyBcblx0XHRcdH1cblx0XHRcdHZhciBfdGFyZ2V0ID0gdGhpcy5nZXRQYXJlbnQoZXZlbnQudGFyZ2V0KSxcblx0XHRcdFx0X3BvcG92ZXIgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMucG9wb3Zlcik7XG5cdFx0XHRpZihfdGFyZ2V0ICYmIF9wb3BvdmVyICYmIF9wb3BvdmVyLnJlbmRlcil7XG5cdFx0XHRcdHZhciBfcmVuZGVyID0gX3BvcG92ZXIucmVuZGVyO1xuXHRcdFx0XHRpZih6bi5pcyhfcmVuZGVyLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRcdGlmKCFfcmVuZGVyLnByb3RvdHlwZSB8fCAhX3JlbmRlci5wcm90b3R5cGUucmVuZGVyKXtcblx0XHRcdFx0XHRcdF9yZW5kZXIgPSBfcmVuZGVyKGV2ZW50LCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoX3JlbmRlcikge1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdF9wb3BvdmVyLnJlbmRlciA9IG51bGw7XG5cdFx0XHRcdFx0ZGVsZXRlIF9wb3BvdmVyLnJlbmRlcjtcblx0XHRcdFx0XHRwb3BvdmVyLnJlbmRlcihfcmVuZGVyLCB6bi5leHRlbmQoe1xuXHRcdFx0XHRcdFx0cmVzZXQ6IHRydWUsXG5cdFx0XHRcdFx0XHRldmVudDogZXZlbnQsXG5cdFx0XHRcdFx0XHR0YXJnZXQ6IF90YXJnZXQsXG5cdFx0XHRcdFx0fSwgX3BvcG92ZXIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZHJvcGRvd25cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdH0pXG59O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xudmFyIExvYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTG9hZGVyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29udGVudDogbnVsbCxcblx0XHRcdHRpdGxlOiAnTG9hZGluZyAuLi4gJ1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmNvbnRlbnQpe1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY29udGVudDtcblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLnRpdGxlKXtcblx0XHRcdHJldHVybiA8PlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJsb2FkZXJcIiBkYXRhLWxvYWRlcj1cInNwaW5uZXJcIi8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0PC8+O1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWxvYWRlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdExvYWRlcjogTG9hZGVyLFxuXHRsb2FkZXI6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbW9kYWwuY3JlYXRlKDxMb2FkZXIgey4uLmFyZ3Z9IC8+LCB7IFxuXHRcdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknLFxuXHRcdFx0XHRcdHJlZjogKHJlZikgPT4gdGhpcy5fbG9hZGVyID0gcmVmXG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRsb2FkaW5nOiBmdW5jdGlvbiAodGl0bGUpIHtcblx0XHRcdFx0aWYodHlwZW9mIHRpdGxlID09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGUoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IHRpdGxlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1lbHNlIGlmKHR5cGVvZiB0aXRsZSA9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgTW9kYWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk1vZGFsJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVzdHJveWVkOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRjbG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5kZXN0cm95KGNhbGxiYWNrKTtcblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCB8fCB0aGlzLnN0YXRlLmRlc3Ryb3llZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZihfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0dGhpcy5zdGF0ZS5kZXN0cm95ZWQgPSB0cnVlO1xuXHRcdHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD57dGhpcy5wcm9wcy5jaGlsZHJlbn08Lz5cblx0XHQpO1xuXHR9XG59KTs7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRNb2RhbDogTW9kYWwsXG5cdG1vZGFsOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3B1cC1tb2RhbC1jb250YWluZXJcIiB9KTtcblx0XHRcdFx0dGhpcy5fbW9kYWxzID0gW107XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucywgaWZQdXNoKXtcblx0XHRcdFx0dmFyIF9tb2RhbCA9ICBSZWFjdERPTS5yZW5kZXIoPE1vZGFsIHsuLi5vcHRpb25zfT57Y29udGVudH08L01vZGFsPiwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdFx0XHRjbGFzczogem51aS5jbGFzc25hbWUoJ3pyLXBvcHVwLW1vZGFsJywgb3B0aW9ucy5jbGFzcyksXG5cdFx0XHRcdFx0c3R5bGU6IHpudWkuc3R5bGUob3B0aW9ucy5zdHlsZSlcblx0XHRcdFx0fSwgdGhpcy5fZG9tKSk7XG5cdFx0XHRcdC8vem4uZGVidWcoJ01vZGFsIGNyZWF0ZWQoJyArICh0aGlzLl9tb2RhbHMubGVuZ3RoICsgMSkgKyAnKTogJywgX21vZGFsKTtcblx0XHRcdFx0aWYoaWZQdXNoICE9PSBmYWxzZSl7XG5cdFx0XHRcdFx0dGhpcy5fbW9kYWxzLnB1c2goX21vZGFsKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIF9tb2RhbDtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKGRlbGF5LCBjYWxsYmFjayl7XG5cdFx0XHRcdC8vem4uZGVidWcoJ01vZGFsIGNsb3NlKCcgKyB0aGlzLl9tb2RhbHMubGVuZ3RoICsgJyk6ICcpO1xuXHRcdFx0XHR2YXIgX21vZGFsID0gdGhpcy5fbW9kYWxzLnBvcCgpO1xuXHRcdFx0XHRpZihfbW9kYWwpe1xuXHRcdFx0XHRcdGlmKF9tb2RhbC5zdGF0ZS5kZXN0cm95ZWQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2xvc2UoZGVsYXksIGNhbGxiYWNrKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoZGVsYXkpe1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiBfbW9kYWwuZGVzdHJveShjYWxsYmFjayksIGRlbGF5KTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlQWxsOiBmdW5jdGlvbiAoZGVsYXkpe1xuXHRcdFx0XHRpZih0aGlzLl9tb2RhbHMubGVuZ3RoKXtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKGRlbGF5LCB0aGlzLmNsb3NlQWxsKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0c2l6ZTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9tb2RhbHMubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVFlQRV9JQ09OUyA9IHtcblx0aGVhcnQ6ICdNNDYyLjMgNjIuNkM0MDcuNSAxNS45IDMyNiAyNC4zIDI3NS43IDc2LjJMMjU2IDk2LjVsLTE5LjctMjAuM0MxODYuMSAyNC4zIDEwNC41IDE1LjkgNDkuNyA2Mi42Yy02Mi44IDUzLjYtNjYuMSAxNDkuOC05LjkgMjA3LjlsMTkzLjUgMTk5LjhjMTIuNSAxMi45IDMyLjggMTIuOSA0NS4zIDBsMTkzLjUtMTk5LjhjNTYuMy01OC4xIDUzLTE1NC4zLTkuOC0yMDcuOXonLFxuXHRzZWNvbmRhcnk6ICdNNDQ4IDBINjRDMjguNyAwIDAgMjguNyAwIDY0djI4OGMwIDM1LjMgMjguNyA2NCA2NCA2NGg5NnY4NGMwIDkuOCAxMS4yIDE1LjUgMTkuMSA5LjdMMzA0IDQxNmgxNDRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWNjRjMC0zNS4zLTI4LjctNjQtNjQtNjR6Jyxcblx0c3VjY2VzczogJ00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonLFxuXHR3YXJuaW5nOiAnTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicsXG5cdGVycm9yOiAnTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eicsXG5cdGluZm86ICdNMjAgNDI0LjIyOWgyMFYyNzkuNzcxSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMFYyMTJjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBoMTEyYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwdjIxMi4yMjloMjBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjBWNDkyYzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMHYtNDcuNzcxYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwek05NiAwQzU2LjIzNSAwIDI0IDMyLjIzNSAyNCA3MnMzMi4yMzUgNzIgNzIgNzIgNzItMzIuMjM1IDcyLTcyUzEzNS43NjQgMCA5NiAweidcbn1cblxudmFyIE5vdGlmaWVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJOb3RpZmljYXRpb24nLFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0d2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsIHRoaXMucHJvcHMuZGVsYXkgfHwgMTUwMCk7XG5cdH0sXG5cdG91dDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRfZG9tLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbi1vdXQnKTtcblx0XHRfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCl7XG5cdFx0XHRpZihfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZSl7XG5cdFx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1ub3RpZmllciBub3RpZmljYXRpb24taW4nLCB0aGlzLnByb3BzLnR5cGUpfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuXHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiICBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPXtUWVBFX0lDT05TW3RoaXMucHJvcHMudHlwZXx8J2luZm8nXX0+PC9wYXRoPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImNsb3NlIGZhIGZhLXRpbWVzXCIgb25DbGljaz17dGhpcy5vdXR9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdE5vdGlmaWVyOiBOb3RpZmllcixcblx0bm90aWZpZXI6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiAnenItcG9wdXAtbm90aWZpZXItY29udGFpbmVyJyB9KTtcblx0XHRcdH0sXG5cdFx0XHRvcGVuOiBmdW5jdGlvbiAodHlwZSwgY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRSZWFjdERPTS5yZW5kZXIoPE5vdGlmaWVyIHR5cGU9e3R5cGV9IGNvbnRlbnQ9e2NvbnRlbnR9IGRlbGF5PXtkZWxheX0gLz4sIHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgdGhpcy5fZG9tKSk7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3Blbignc3VjY2VzcycsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHR3YXJuaW5nOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCd3YXJuaW5nJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdlcnJvcicsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRpbmZvOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFBvcG92ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBvcG92ZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRoaWRkZW5IZWlnaHQ6IDUsXG5cdFx0XHRjbG9zZWFibGU6IGZhbHNlLFxuXHRcdFx0cG9wb3ZlcldpZHRoOiBudWxsLFxuXHRcdFx0cG9wb3ZlckhlaWdodDogbnVsbFxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJyb3dDbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5fZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0aWYodGhpcy5wcm9wcy5ldmVudCl7XG5cdFx0XHR0aGlzLl9ldmVudFR5cGUgPSB0aGlzLnByb3BzLmV2ZW50LnR5cGUgfHwgdGhpcy5wcm9wcy5ldmVudDtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgdGhpcy5fX29uV2luZG93Q2xpY2ssIGZhbHNlKTtcblx0XHRcdHRoaXMuX2RvbS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRcdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50KGV2ZW50LCB0aGlzKTtcblx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gdHJ1ZSl7XG5cdFx0XHRcdFx0Ly9ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKHRoaXMpLCB0cnVlKTtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpO1xuXHRcdFx0fS5iaW5kKHRoaXMpLCAwKTtcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50ICYmIHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQodGhpcyk7XG5cdH0sXG5cdF9faXNNYXRjaFBhcmVudDogZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KXtcblx0XHRpZih0YXJnZXQpe1xuXHRcdFx0aWYodGFyZ2V0LnRhZ05hbWUgPT0gJ0JPRFknIHx8IHRhcmdldC50YWdOYW1lID09ICdIVE1MJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZih0YXJnZXQgIT09IHBhcmVudCl7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9faXNNYXRjaFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSwgcGFyZW50KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSxcblx0X19vbldpbmRvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKCF0aGlzLl9faXNNYXRjaFBhcmVudChldmVudC50YXJnZXQsIHRoaXMuX2RvbSkpe1xuXHRcdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uV2luZG93T3V0c2lkZUNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXHRcdFx0aWYoX3Jlc3VsdCAhPT0gdHJ1ZSl7XG5cdFx0XHRcdHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgb3V0c2lkZSBjb250YWluZXIgZXZlbnRcIik7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCAmJiB0aGlzLnByb3BzLm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXHRcdFx0aWYoX3Jlc3VsdCA9PT0gdHJ1ZSl7XG5cdFx0XHRcdHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgaW5zaWRlIGNvbnRhaW5lciBldmVudFwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGNsb3NlOiBmdW5jdGlvbiAodGFnKXtcblx0XHQvL3puLmluZm8oJ1BvcG92ZXIuY2xvc2U6JywgdGFnKTtcblx0XHRpZih0aGlzLl9kb20pe1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9fb25XaW5kb3dDbGljaywgZmFsc2UpO1xuXHRcdFx0aWYodGhpcy5fZG9tLnBhcmVudE5vZGUpe1xuXHRcdFx0XHR0aGlzLl9kb20ucGFyZW50Tm9kZS5zdHlsZSA9ICcnO1xuXHRcdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2RvbSA9IG51bGw7XG5cdFx0XHR0aGlzLl9ldmVudFR5cGUgPSBudWxsO1xuXHRcdH1cblx0fSxcblx0Zml4UG9zaXRpb246IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdHZhciBfcG9wb3ZlciA9IHRoaXMuX2RvbTtcblx0XHR2YXIgX3QgPSB6bi5kb20uZ2V0UG9zaXRpb24odGFyZ2V0KSxcblx0XHRcdF9wb3BvdmVyV2lkdGggPSB0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCB8fCBfdC53aWR0aCxcblx0XHRcdF9wb3BvdmVySGVpZ2h0ID0gdGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0IHx8IHpuLmRvbS5nZXRQb3NpdGlvbihfcG9wb3ZlcikuaGVpZ2h0LFxuXHRcdFx0X2xlZnQgPSBudWxsLFxuXHRcdFx0X3RvcCA9IG51bGwsXG5cdFx0XHRfYXJyb3dDbGFzc05hbWVzID0gW107XG5cblx0XHRpZihfcG9wb3ZlcldpZHRoID09ICcxMDAlJyl7XG5cdFx0XHRfcG9wb3ZlcldpZHRoID0gX3Qud2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYoX3BvcG92ZXJIZWlnaHQgPCB0aGlzLnByb3BzLmhpZGRlbkhlaWdodCl7XG5cdFx0XHR0aGlzLnByb3BzLm9uSGlkZGVuICYmIHRoaXMucHJvcHMub25IaWRkZW4oKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZigoX3QueCArIF9wb3BvdmVyV2lkdGgpID4gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoKXtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LXJpZ2h0Jyk7XG5cdFx0XHRfbGVmdCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBfdC54IC0gX3Qud2lkdGg7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS5yaWdodCA9IF9sZWZ0ICsgJ3B4Jztcblx0XHRcdF9wb3BvdmVyLnBhcmVudE5vZGUuc3R5bGUucmlnaHQgPSAnMHB4Jztcblx0XHR9ZWxzZSB7XG5cdFx0XHRfbGVmdCA9IF90Lng7XG5cdFx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LXBsYWNlbWVudC1sZWZ0Jyk7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS5sZWZ0ID0gX2xlZnQgKyAncHgnO1xuXHRcdH1cblxuXHRcdGlmKChfdC55ICsgX3BvcG92ZXJIZWlnaHQpID4gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCl7XG5cdFx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LWRpcmVjdGlvbi1ib3R0b20nKTtcblx0XHRcdF90b3AgPSBfdC5oZWlnaHQgKyAxMDtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLmJvdHRvbSA9IF90b3AgKyAncHgnO1xuXHRcdFx0X3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5ib3R0b20gPSAnMHB4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RvcCA9IF90LnkgKyBfdC5oZWlnaHQgKyAxMDtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLXRvcCcpO1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUudG9wID0gX3RvcCArICdweCc7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wb3BvdmVyV2lkdGgpe1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUud2lkdGggPSBfcG9wb3ZlcldpZHRoICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQpe1xuXHRcdFx0aWYoX3BvcG92ZXIub2Zmc2V0SGVpZ2h0ICE9IF9wb3BvdmVySGVpZ2h0KXtcblx0XHRcdFx0X3BvcG92ZXIuc3R5bGUuaGVpZ2h0ID0gX3BvcG92ZXJIZWlnaHQgKyAncHgnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF9wb3BvdmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6bi1hbmltYXRlLXNjYWxlLXVwJyk7XG5cdFx0X3BvcG92ZXIuY2xhc3NOYW1lID0gX3BvcG92ZXIuY2xhc3NOYW1lICsgJyAnICsgX2Fycm93Q2xhc3NOYW1lcy5qb2luKCcgJyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3N0eWxlID0ge307XG5cdFx0aWYodGhpcy5wcm9wcy5oZWlnaHQpe1xuXHRcdFx0X3N0eWxlLm1heEhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0ICsgJ3B4Jztcblx0XHR9ZWxzZSB7XG5cdFx0XHRfc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1wb3BvdmVyIHpyLWFycm93IHpyLWFycm93LWNvbG9yLXdoaXRlJywgdGhpcy5zdGF0ZS5hcnJvd0NsYXNzTmFtZSl9ID5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuY2xvc2VhYmxlICYmIDxzcGFuIGNsYXNzTmFtZT1cInBvcG92ZXItY2xvc2UgenItaG92ZXItc2VsZi1sb2FkaW5nXCIgb25DbGljaz17KCk9PnRoaXMuY2xvc2UoJ3NlbGYgY2xvc2UnKX0+XG5cdFx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwicG9wb3Zlci1jb250ZW50XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3puLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5zdHlsZSksIF9zdHlsZX0gPnt0aGlzLnByb3BzLmNvbnRlbnR9PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFBvcG92ZXI6IFBvcG92ZXIsXG5cdHBvcG92ZXI6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXBvcHVwLXBvcG92ZXItY29udGFpbmVyXCIgfSk7XG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucyl7XG5cdFx0XHRcdGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXNldCl7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZSgnem4ucG9wb3ZlcjpyZW5kZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcG9wb3ZlciA9IFJlYWN0RE9NLnJlbmRlcig8UG9wb3ZlciB7Li4ub3B0aW9uc30gY29udGVudD17Y29udGVudH0gLz4sIHRoaXMuX2RvbSksIHRoaXMuX3BvcG92ZXI7XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uICh0YWcpe1xuXHRcdFx0XHRpZih0aGlzLl9wb3BvdmVyKXtcblx0XHRcdFx0XHR0aGlzLl9wb3BvdmVyLmNsb3NlKHRhZyk7XG5cdFx0XHRcdFx0dGhpcy5fcG9wb3ZlciA9IG51bGw7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVG9hc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRvYXN0Jyxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDE4MDApO1xuXHR9LFxuXHRvdXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0X2RvbS5jbGFzc0xpc3QuYWRkKCd0b2FzdC1vdXQnKTtcblx0XHRfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCl7XG5cdFx0XHRfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0UmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG5cdFx0fSwgZmFsc2UpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtdG9hc3QgdG9hc3QtaW4nLCB0aGlzLnByb3BzLnR5cGUpfSA+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFRvYXN0OiBUb2FzdCxcblx0dG9hc3Q6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXBvcHVwLXRvYXN0LWNvbnRhaW5lclwiIH0pO1xuXHRcdFx0fSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICh0eXBlLCBjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHZhciBfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFJlYWN0RE9NLnJlbmRlcig8VG9hc3QgdHlwZT17dHlwZX0gY29udGVudD17Y29udGVudH0gZGVsYXk9e2RlbGF5fSAvPiwgX2RvbSk7XG5cdFx0XHRcdHRoaXMuX2RvbS5hcHBlbmRDaGlsZChfZG9tKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdHdhcm5pbmc6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2RhbmdlcicsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRpbmZvOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvb2x0aXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRvb2x0aXAnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcnJvd0NsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHR0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcblx0fSxcblx0Zml4UG9zaXRpb246IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdGlmKCF0YXJnZXQpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdmaXhQb3NpdGlvbiB0YXJnZXQgaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0dmFyIF9kb21XaWR0aCA9IHRoaXMuX2RvbS5vZmZzZXRXaWR0aCxcblx0XHRcdF9kb21IZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0X3RhcmdldCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuXHRcdFx0X2xlZnQgPSBudWxsLFxuXHRcdFx0X3RvcCA9IG51bGwsXG5cdFx0XHRfY2xhc3NOYW1lID0gJyc7XG5cblx0XHRpZigoX3RhcmdldC54ICsgX2RvbVdpZHRoKSA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgpe1xuXHRcdFx0X2xlZnQgPSBfdGFyZ2V0LndpZHRoIC0gX2RvbVdpZHRoO1xuXHRcdH1lbHNlIHtcblx0XHRcdF9sZWZ0ID0gX3RhcmdldC54ICsgKF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGgpIC8gMjtcblx0XHR9XG5cblx0XHRpZigoX3RhcmdldC55ICsgX2RvbUhlaWdodCkgPiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCl7XG5cdFx0XHRfdG9wID0gX3RhcmdldC55IC0gX2RvbUhlaWdodCAtIDE2O1xuXHRcdFx0X2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RvcCA9IF90YXJnZXQueSArIF90YXJnZXQuaGVpZ2h0ICsgMTY7XG5cdFx0XHRfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi10b3AnO1xuXHRcdH1cblxuXHRcdGlmKF9sZWZ0PDApe1xuXHRcdFx0X2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tbGVmdCc7XG5cdFx0XHRfbGVmdCA9IF90YXJnZXQueCArIF90YXJnZXQud2lkdGggKyA0O1xuXHRcdFx0X3RvcCA9IF90YXJnZXQueSArIDQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZG9tLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuXHRcdHRoaXMuX2RvbS5zdHlsZS5sZWZ0ID0gX2xlZnQgKyAncHgnO1xuXHRcdF9jbGFzc05hbWUgJiYgdGhpcy5fZG9tLmNsYXNzTGlzdC5hZGQoX2NsYXNzTmFtZSk7XG5cdH0sXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0aWYoIXRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoX2RvbSk7XG5cdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoX2RvbSAmJiBfZG9tLnBhcmVudE5vZGUpe1xuXHRcdFx0X2RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20pO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRGVzdHJveSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveSgpO1xuXHRcdGlmKHpuLmlzKGNhbGxiYWNrLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtdG9vbHRpcCB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci1ibGFjayB6ci1hcnJvdy1wbGFjZW1lbnQtY2VudGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRUb29sdGlwOiBUb29sdGlwLFxuXHR0b29sdGlwOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3B1cC10b29sdGlwLWNvbnRhaW5lclwiIH0pO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fX29uV2luZG93TW91c2VPdmVyLmJpbmQodGhpcyksIHRydWUpO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fX29uV2luZG93UmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRfX29uV2luZG93UmVzaXplOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cucmVzaXppbmcnKTtcblx0XHRcdH0sXG5cdFx0XHRfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlOiBmdW5jdGlvbiAodGFyZ2V0KXtcblx0XHRcdFx0aWYodGFyZ2V0KXtcblx0XHRcdFx0XHRpZih0YXJnZXQudGFnTmFtZSA9PSAnQk9EWScgfHwgdGFyZ2V0LnRhZ05hbWUgPT0gJ0hUTUwnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS16ci1wb3B1cC10b29sdGlwJykpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtenItcG9wdXAtdG9vbHRpcCcpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZSh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X19vbldpbmRvd01vdXNlT3ZlcjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRcdFx0dmFyIF90YXJnZXQgPSBldmVudC50YXJnZXQsXG5cdFx0XHRcdFx0X3ZhbHVlID0gdGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKF90YXJnZXQpO1xuXHRcdFx0XHRpZihfdGFyZ2V0ICYmIF92YWx1ZSl7XG5cdFx0XHRcdFx0aWYodGhpcy5fdG9vbHRpcCAmJiB0aGlzLl90b29sdGlwLnByb3BzLnRhcmdldCAhPT0gX3RhcmdldCl7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXInKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXIoX3ZhbHVlLCB7IHRhcmdldDogX3RhcmdldCB9KTtcblx0XHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucyl7XG5cdFx0XHRcdGlmKHRoaXMuX3Rvb2x0aXApe1xuXHRcdFx0XHRcdHRoaXMuX3Rvb2x0aXAuZGVzdHJveSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3Rvb2x0aXAgPSBSZWFjdERPTS5yZW5kZXIoPFRvb2x0aXAgey4uLm9wdGlvbnN9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+LCB0aGlzLl9kb20pO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLl90b29sdGlwKXtcblx0XHRcdFx0XHRpZih6bi5pcyhjYWxsYmFjaywgJ3N0cmluZycpICYmIHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jykge1xuXHRcdFx0XHRcdFx0Ly96bi5kZWJ1ZyhjYWxsYmFjayk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tKTtcblx0XHRcdFx0XHR0aGlzLl90b29sdGlwLmRlc3Ryb3koY2FsbGJhY2spO1xuXHRcdFx0XHRcdHRoaXMuX3Rvb2x0aXAgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59OyIsIm1vZHVsZS5leHBvcnRzID0gem4uZGVlcEFzc2lnbnMoXG4gICAgeyB9LCBcbiAgICByZXF1aXJlKCcuL0FsZXJ0JyksIFxuICAgIHJlcXVpcmUoJy4vRGlhbG9nJyksXG4gICAgcmVxdWlyZSgnLi9Ecm9wZG93bicpLFxuICAgIHJlcXVpcmUoJy4vTG9hZGVyJyksXG4gICAgcmVxdWlyZSgnLi9Nb2RhbCcpLFxuICAgIHJlcXVpcmUoJy4vTm90aWZpZXInKSxcbiAgICByZXF1aXJlKCcuL1BvcG92ZXInKSxcbiAgICByZXF1aXJlKCcuL1RvYXN0JyksXG4gICAgcmVxdWlyZSgnLi9Ub29sdGlwJylcbik7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=