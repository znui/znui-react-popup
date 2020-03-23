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
    return modal.create( /*#__PURE__*/React.createElement(Alert, _extends({
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

    return modal.create( /*#__PURE__*/React.createElement(Alert, {
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

    return modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: _argv.content,
      title: _argv.title,
      buttons: [{
        text: _argv.cancelText || '取消',
        onClick: function onClick(event, alert) {
          return _argv.cancel && _argv.cancel(event, alert);
        }
      }, {
        text: _argv.confirmText || '确定',
        onClick: function onClick(event, alert) {
          return _argv.confirm && _argv.confirm(event, alert);
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
  __onClose: function __onClose(event) {
    var _result = this.props.onClose && this.props.onClose(event, this);

    if (_result !== false) {
      modal.close();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-dialog', this.props.className),
      style: this.props.style
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
  dialog: function dialog(argv) {
    return modal.create( /*#__PURE__*/React.createElement(Dialog, argv), {
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
  displayName: 'ZRModal',
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
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

    if (_dom && _dom.parentNode.parentNode) {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);

      ReactDOM.unmountComponentAtNode(_dom.parentNode);
    }

    this.props.onDestroy && this.props.onDestroy();
    callback && callback();
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
      create: function create(content, options) {
        var _this = this;

        var _ref = null;
        return ReactDOM.render( /*#__PURE__*/React.createElement(Modal, _extends({}, options, {
          ref: function ref(_ref2) {
            return _ref = _ref2;
          }
        }), content), zn.dom.createElement('div', {
          "class": znui.classname('zr-popup-modal', options["class"]),
          style: znui.style(options.style)
        }, this._dom), function () {
          _this._modals.push(_ref);

          options.ref && options.ref(_ref);
        });
      },
      close: function close(delay, callback) {
        var _modal = this._modals.pop();

        if (_modal) {
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
      __onWindowMouseOver: function __onWindowMouseOver(event) {
        var _target = event.target;

        if (_target && _target.getAttribute && _target.getAttribute('data-zr-popup-tooltip')) {
          if (this._tooltip && this._tooltip.props.target !== _target) {
            this.close('znui.react.popup.tooltip: window.mouseover');
          }

          this.render(_target.getAttribute('data-zr-popup-tooltip'), {
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
          if (zn.is(callback, 'string') && process && process.env && "development" == 'development') {
            zn.debug(callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vRGlhbG9nLmpzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9Qb3BvdmVyLmpzIiwid2VicGFjazovLy8uL1RvYXN0LmpzIiwid2VicGFjazovLy8uL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJtb2RhbCIsIkFsZXJ0IiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRpdGxlIiwiY29udGVudCIsIm9uQ2xpY2siLCJidXR0b25zIiwidGV4dCIsIl9fb25DbGljayIsIml0ZW0iLCJpbmRleCIsIl9yZXN1bHQiLCJwcm9wcyIsImNsb3NlIiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcCIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWxlcnQiLCJjYWxsYmFjayIsImNyZWF0ZSIsImNvbmZpcm0iLCJjYW5jZWwiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJ6biIsImV4dGVuZCIsInByb21wdCIsImFyZ3YiLCJfYXJndiIsIm9uQ2hhbmdlIiwiY2FuY2VsVGV4dCIsImV2ZW50IiwiY29uZmlybVRleHQiLCJEaWFsb2ciLCJfX29uQ2xvc2UiLCJvbkNsb3NlIiwiY2xvc2VhYmxlIiwiZGlhbG9nIiwiUmVhY3RET00iLCJwb3BvdmVyIiwiRHJvcGRvd24iLCJkaXNhYmxlZCIsImV2ZW50VHlwZSIsImNvbXBvbmVudERpZE1vdW50IiwiZmluZERPTU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX19ldmVudEhhbmRsZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRQYXJlbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJfdGFyZ2V0IiwiX3BvcG92ZXIiLCJfcmVuZGVyIiwiaXMiLCJwcm90b3R5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXNldCIsImNoaWxkcmVuIiwiTG9hZGVyIiwiX19yZW5kZXJDb250ZW50IiwibG9hZGVyIiwiQ2xhc3MiLCJtZXRob2RzIiwiX2xvYWRlciIsImRlc3Ryb3kiLCJyZWYiLCJsb2FkaW5nIiwiTW9kYWwiLCJvbkNvbXBvbmVudERpZE1vdW50IiwiX19pc01vdW50ZWQiLCJfZG9tIiwib25EZXN0cm95QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwib25EZXN0cm95IiwiaW5pdCIsImRvbSIsImNyZWF0ZVJvb3RFbGVtZW50IiwiX21vZGFscyIsIl9yZWYiLCJjcmVhdGVFbGVtZW50IiwicHVzaCIsImRlbGF5IiwiX21vZGFsIiwicG9wIiwic2V0VGltZW91dCIsImNsb3NlQWxsIiwibGVuZ3RoIiwic2l6ZSIsIlRZUEVfSUNPTlMiLCJoZWFydCIsInNlY29uZGFyeSIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbmZvIiwiTm90aWZpZXIiLCJ3aW5kb3ciLCJvdXQiLCJhZGQiLCJ0eXBlIiwibm90aWZpZXIiLCJvcGVuIiwiUG9wb3ZlciIsImhpZGRlbkhlaWdodCIsInBvcG92ZXJXaWR0aCIsInBvcG92ZXJIZWlnaHQiLCJnZXRJbml0aWFsU3RhdGUiLCJhcnJvd0NsYXNzTmFtZSIsIl9ldmVudFR5cGUiLCJfX29uV2luZG93Q2xpY2siLCJvbkNvbnRhaW5lckV2ZW50IiwiZml4UG9zaXRpb24iLCJvblBvcG92ZXJEaWRNb3VudCIsIl9faXNNYXRjaFBhcmVudCIsInBhcmVudCIsInRhZ05hbWUiLCJvbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudCIsIm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQiLCJ0YWciLCJfdCIsImdldFBvc2l0aW9uIiwiX3BvcG92ZXJXaWR0aCIsIndpZHRoIiwiX3BvcG92ZXJIZWlnaHQiLCJoZWlnaHQiLCJfbGVmdCIsIl90b3AiLCJfYXJyb3dDbGFzc05hbWVzIiwib25IaWRkZW4iLCJ4Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFdpZHRoIiwicmlnaHQiLCJsZWZ0IiwieSIsImF2YWlsSGVpZ2h0IiwiYm90dG9tIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwidmlzaWJpbGl0eSIsImpvaW4iLCJfc3R5bGUiLCJtYXhIZWlnaHQiLCJzdGF0ZSIsIlRvYXN0IiwidG9hc3QiLCJhcHBlbmRDaGlsZCIsIlRvb2x0aXAiLCJFcnJvciIsIl9kb21XaWR0aCIsIm9mZnNldFdpZHRoIiwiX2RvbUhlaWdodCIsIl9jbGFzc05hbWUiLCJzY3JvbGxIZWlnaHQiLCJ0b29sdGlwIiwiX19vbldpbmRvd01vdXNlT3ZlciIsIl9fb25XaW5kb3dSZXNpemUiLCJnZXRBdHRyaWJ1dGUiLCJfdG9vbHRpcCIsInByb2Nlc3MiLCJlbnYiLCJkZWJ1ZyIsImRlZXBBc3NpZ25zIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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SixRQUFSLEVBQWlCO0FBQ2hCLGNBQUc5SSxFQUFFLENBQUNpQyxFQUFILENBQU12QyxRQUFOLEVBQWdCLFFBQWhCLEtBQTZCcUosT0FBN0IsSUFBd0NBLE9BQU8sQ0FBQ0MsR0FBaEQsSUFBdURELGFBQUEsSUFBd0IsYUFBbEYsRUFBaUc7QUFDaEcvSSxjQUFFLENBQUNpSixLQUFILENBQVN2SixRQUFUO0FBQ0E7O0FBQ0RvQixrQkFBUSxDQUFDdUMsc0JBQVQsQ0FBZ0MsS0FBS0gsSUFBckM7O0FBQ0EsZUFBSzRGLFFBQUwsQ0FBY2xHLE9BQWQsQ0FBc0JsRCxRQUF0Qjs7QUFDQSxlQUFLb0osUUFBTCxHQUFnQixJQUFoQjtBQUNBOztBQUVELGVBQU8sSUFBUDtBQUNBO0FBckNPO0FBRlEsR0FBVDtBQUZPLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQzNFQXZKLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlEsRUFBRSxDQUFDa0osV0FBSCxDQUNiLEVBRGEsRUFFYm5MLG1CQUFPLENBQUMsMkJBQUQsQ0FGTSxFQUdiQSxtQkFBTyxDQUFDLDZCQUFELENBSE0sRUFJYkEsbUJBQU8sQ0FBQyxpQ0FBRCxDQUpNLEVBS2JBLG1CQUFPLENBQUMsNkJBQUQsQ0FMTSxFQU1iQSxtQkFBTyxDQUFDLDJCQUFELENBTk0sRUFPYkEsbUJBQU8sQ0FBQyxpQ0FBRCxDQVBNLEVBUWJBLG1CQUFPLENBQUMsK0JBQUQsQ0FSTSxFQVNiQSxtQkFBTyxDQUFDLDJCQUFELENBVE0sRUFVYkEsbUJBQU8sQ0FBQywrQkFBRCxDQVZNLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xudmFyIEFsZXJ0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJBbGVydCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGNvbnRlbnQ6IG51bGwsXG5cdFx0XHRvbkNsaWNrOiBudWxsLFxuXHRcdFx0YnV0dG9uczogW1xuXHRcdFx0XHR7IHRleHQ6ICfnoa7orqQnIH1cblx0XHRcdF1cblx0XHR9O1xuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXHRcdFx0X3Jlc3VsdCA9IGl0ZW0ub25DbGljayAmJiBpdGVtLm9uQ2xpY2soaXRlbSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCAhPT0gZmFsc2Upe1xuXHRcdFx0bW9kYWwuY2xvc2UoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1hbGVydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydC1pbm5lclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj59XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudCAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWNvbnRlbnRcIj57dGhpcy5wcm9wcy5jb250ZW50fTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtYnRuc1wiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYWxlcnQtYnRuXCIgb25DbGljaz17KCk9PnRoaXMuX19vbkNsaWNrKGl0ZW0sIGluZGV4KX0+e2l0ZW0udGV4dH08L2Rpdj47XG5cdFx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0QWxlcnQ6IEFsZXJ0LFxuXHRhbGVydDogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjYWxsYmFjaywgcHJvcHMpe1xuXHRcdHJldHVybiBtb2RhbC5jcmVhdGUoPEFsZXJ0IFxuXHRcdFx0Y29udGVudD17Y29udGVudH0gXG5cdFx0XHR0aXRsZT17dGl0bGV9IFxuXHRcdFx0b25DbGljaz17Y2FsbGJhY2t9IHsuLi5wcm9wc30gLz4sIHtcblx0XHRcdFx0Y2xhc3M6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcblx0XHRcdH0pO1xuXHR9LFxuXHRjb25maXJtOiBmdW5jdGlvbiAoY29udGVudCwgdGl0bGUsIGNvbmZpcm0sIGNhbmNlbCwgb3B0aW9ucyl7XG5cdFx0dmFyIF9vcHRpb25zID0gem4uZXh0ZW5kKHsgY2FuY2VsOiAn5Y+W5raIJywgY29uZmlybTogJ+ehruWumicgfSwgb3B0aW9ucyk7XG5cdFx0cmV0dXJuIG1vZGFsLmNyZWF0ZSg8QWxlcnRcblx0XHRcdGNvbnRlbnQ9e2NvbnRlbnR9XG5cdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRidXR0b25zPXtbXG5cdFx0XHRcdHsgdGV4dDogX29wdGlvbnMuY2FuY2VsLCBvbkNsaWNrOiBjYW5jZWwgfSxcblx0XHRcdFx0eyB0ZXh0OiBfb3B0aW9ucy5jb25maXJtLCBvbkNsaWNrOiBjb25maXJtIH1cblx0XHRcdF19IC8+LCB7XG5cdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0XHR9KTtcblx0fSxcblx0cHJvbXB0OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0dmFyIF9hcmd2ID0gem4uZXh0ZW5kKHtcblx0XHRcdHRpdGxlOiBhcmd2LnRpdGxlLFxuXHRcdFx0Y29udGVudDogPGlucHV0IGNsYXNzTmFtZT1cImFsZXJ0LWlucHV0XCIgb25DaGFuZ2U9e2FyZ3Yub25DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgLz4sXG5cdFx0XHRjb25maXJtOiBhcmd2LmNvbmZpcm0sXG5cdFx0XHRjYW5jZWw6IGFyZ3YuY2FuY2VsXG5cdFx0fSwgYXJndik7XG5cdFx0cmV0dXJuIG1vZGFsLmNyZWF0ZSg8QWxlcnRcblx0XHRcdGNvbnRlbnQ9e19hcmd2LmNvbnRlbnR9XG5cdFx0XHR0aXRsZT17X2FyZ3YudGl0bGV9XG5cdFx0XHRidXR0b25zPXtbXG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0dGV4dDogX2FyZ3YuY2FuY2VsVGV4dCB8fCAn5Y+W5raIJywgXG5cdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gKGV2ZW50LCBhbGVydCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2FyZ3YuY2FuY2VsICYmIF9hcmd2LmNhbmNlbChldmVudCwgYWxlcnQpO1xuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBfYXJndi5jb25maXJtVGV4dCB8fCAn56Gu5a6aJyxcblx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGFsZXJ0KXtcblx0XHRcdFx0XHRcdHJldHVybiBfYXJndi5jb25maXJtICYmIF9hcmd2LmNvbmZpcm0oZXZlbnQsIGFsZXJ0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF19IC8+LCB7XG5cdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0XHR9KTtcblx0fVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG52YXIgRGlhbG9nID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJEaWFsb2cnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRjb250ZW50OiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19vbkNsb3NlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsb3NlICYmIHRoaXMucHJvcHMub25DbG9zZShldmVudCwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCAhPT0gZmFsc2Upe1xuXHRcdFx0bW9kYWwuY2xvc2UoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1kaWFsb2cnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWhlYWRlclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNsb3NlYWJsZSAmJiA8c3BhbiBvbkNsaWNrPXt0aGlzLl9fb25DbG9zZX0gY2xhc3NOYW1lPVwiZGlhbG9nLWNsb3NlXCI+eDwvc3Bhbj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1ib2R5XCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdERpYWxvZzogRGlhbG9nLFxuXHRkaWFsb2c6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRyZXR1cm4gbW9kYWwuY3JlYXRlKDxEaWFsb2cgey4uLmFyZ3Z9IC8+LCB7XG5cdFx0XHRjbGFzczogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuXHRcdH0pO1xuXHR9XG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgcG9wb3ZlciA9IHJlcXVpcmUoJy4vUG9wb3ZlcicpLnBvcG92ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHREcm9wZG93bjogUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRcdGRpc3BsYXlOYW1lOidaUkRyb3Bkb3duJyxcblx0XHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0XHRldmVudFR5cGU6ICdjbGljaydcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsIHRoaXMuX19ldmVudEhhbmRsZXIsIGZhbHNlKTtcblx0XHR9LFxuXHRcdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsIHRoaXMuX19ldmVudEhhbmRsZXIsIGZhbHNlKTtcblx0XHR9LFxuXHRcdGdldFBhcmVudDogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0XHRpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd6ci1wb3B1cC1kcm9wZG93bicpKXtcblx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdH1lbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFyZW50KHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9fZXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7IFxuXHRcdFx0XHRyZXR1cm47IFxuXHRcdFx0fVxuXHRcdFx0dmFyIF90YXJnZXQgPSB0aGlzLmdldFBhcmVudChldmVudC50YXJnZXQpLFxuXHRcdFx0XHRfcG9wb3ZlciA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5wb3BvdmVyKTtcblx0XHRcdGlmKF90YXJnZXQgJiYgX3BvcG92ZXIgJiYgX3BvcG92ZXIucmVuZGVyKXtcblx0XHRcdFx0dmFyIF9yZW5kZXIgPSBfcG9wb3Zlci5yZW5kZXI7XG5cdFx0XHRcdGlmKHpuLmlzKF9yZW5kZXIsICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdFx0aWYoIV9yZW5kZXIucHJvdG90eXBlIHx8ICFfcmVuZGVyLnByb3RvdHlwZS5yZW5kZXIpe1xuXHRcdFx0XHRcdFx0X3JlbmRlciA9IF9yZW5kZXIoZXZlbnQsIHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihfcmVuZGVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0X3BvcG92ZXIucmVuZGVyID0gbnVsbDtcblx0XHRcdFx0XHRkZWxldGUgX3BvcG92ZXIucmVuZGVyO1xuXHRcdFx0XHRcdHBvcG92ZXIucmVuZGVyKF9yZW5kZXIsIHpuLmV4dGVuZCh7XG5cdFx0XHRcdFx0XHRyZXNldDogdHJ1ZSxcblx0XHRcdFx0XHRcdGV2ZW50OiBldmVudCxcblx0XHRcdFx0XHRcdHRhcmdldDogX3RhcmdldCxcblx0XHRcdFx0XHR9LCBfcG9wb3ZlcikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1kcm9wZG93blwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fSlcbn07XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG52YXIgTG9hZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMb2FkZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb250ZW50OiBudWxsLFxuXHRcdFx0dGl0bGU6ICdMb2FkaW5nIC4uLiAnXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuY29udGVudCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jb250ZW50O1xuXHRcdH1lbHNlIGlmKHRoaXMucHJvcHMudGl0bGUpe1xuXHRcdFx0cmV0dXJuIDw+XG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImxvYWRlclwiIGRhdGEtbG9hZGVyPVwic3Bpbm5lclwiLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cdFx0XHQ8Lz47XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtbG9hZGVyJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0TG9hZGVyOiBMb2FkZXIsXG5cdGxvYWRlcjogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjcmVhdGU6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0aWYodGhpcy5fbG9hZGVyKXtcblx0XHRcdFx0XHR0aGlzLl9sb2FkZXIuZGVzdHJveSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtb2RhbC5jcmVhdGUoPExvYWRlciB7Li4uYXJndn0gLz4sIHsgXG5cdFx0XHRcdFx0Y2xhc3M6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheScsXG5cdFx0XHRcdFx0cmVmOiAocmVmKSA9PiB0aGlzLl9sb2FkZXIgPSByZWZcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0bG9hZGluZzogZnVuY3Rpb24gKHRpdGxlKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZSh7XG5cdFx0XHRcdFx0dGl0bGU6IHRpdGxlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0aWYodGhpcy5fbG9hZGVyKXtcblx0XHRcdFx0XHR0aGlzLl9sb2FkZXIuZGVzdHJveSgpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBNb2RhbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTW9kYWwnLFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZihfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvPlxuXHRcdCk7XG5cdH1cbn0pOztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdE1vZGFsOiBNb2RhbCxcblx0bW9kYWw6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXBvcHVwLW1vZGFsLWNvbnRhaW5lclwiIH0pO1xuXHRcdFx0XHR0aGlzLl9tb2RhbHMgPSBbXTtcblx0XHRcdH0sXG5cdFx0XHRjcmVhdGU6IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKXtcblx0XHRcdFx0dmFyIF9yZWYgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gUmVhY3RET00ucmVuZGVyKDxNb2RhbCB7Li4ub3B0aW9uc30gcmVmPXsocmVmKT0+X3JlZiA9IHJlZn0+e2NvbnRlbnR9PC9Nb2RhbD4sIHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG5cdFx0XHRcdFx0Y2xhc3M6IHpudWkuY2xhc3NuYW1lKCd6ci1wb3B1cC1tb2RhbCcsIG9wdGlvbnMuY2xhc3MpLFxuXHRcdFx0XHRcdHN0eWxlOiB6bnVpLnN0eWxlKG9wdGlvbnMuc3R5bGUpXG5cdFx0XHRcdH0sIHRoaXMuX2RvbSksICgpPT57XG5cdFx0XHRcdFx0dGhpcy5fbW9kYWxzLnB1c2goX3JlZik7XG5cdFx0XHRcdFx0b3B0aW9ucy5yZWYgJiYgb3B0aW9ucy5yZWYoX3JlZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAoZGVsYXksIGNhbGxiYWNrKXtcblx0XHRcdFx0dmFyIF9tb2RhbCA9IHRoaXMuX21vZGFscy5wb3AoKTtcblx0XHRcdFx0aWYoX21vZGFsKXtcblx0XHRcdFx0XHRpZihkZWxheSl7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKSwgZGVsYXkpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0X21vZGFsLmRlc3Ryb3koY2FsbGJhY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2VBbGw6IGZ1bmN0aW9uIChkZWxheSl7XG5cdFx0XHRcdGlmKHRoaXMuX21vZGFscy5sZW5ndGgpe1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoZGVsYXksIHRoaXMuY2xvc2VBbGwpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRzaXplOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUWVBFX0lDT05TID0ge1xuXHRoZWFydDogJ000NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45eicsXG5cdHNlY29uZGFyeTogJ000NDggMEg2NEMyOC43IDAgMCAyOC43IDAgNjR2Mjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0aDk2djg0YzAgOS44IDExLjIgMTUuNSAxOS4xIDkuN0wzMDQgNDE2aDE0NGMzNS4zIDAgNjQtMjguNyA2NC02NFY2NGMwLTM1LjMtMjguNy02NC02NC02NHonLFxuXHRzdWNjZXNzOiAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicsXG5cdHdhcm5pbmc6ICdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jyxcblx0ZXJyb3I6ICdNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Jyxcblx0aW5mbzogJ00yMCA0MjQuMjI5aDIwVjI3OS43NzFIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwVjIxMmMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMGgxMTJjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB2MjEyLjIyOWgyMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMFY0OTJjMCAxMS4wNDYtOC45NTQgMjAtMjAgMjBIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwdi00Ny43NzFjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjB6TTk2IDBDNTYuMjM1IDAgMjQgMzIuMjM1IDI0IDcyczMyLjIzNSA3MiA3MiA3MiA3Mi0zMi4yMzUgNzItNzJTMTM1Ljc2NCAwIDk2IDB6J1xufVxuXG52YXIgTm90aWZpZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5vdGlmaWNhdGlvbicsXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCwgdGhpcy5wcm9wcy5kZWxheSB8fCAxNTAwKTtcblx0fSxcblx0b3V0OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdF9kb20uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLW91dCcpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdGlmKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdFx0X2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdFx0UmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pbicsIHRoaXMucHJvcHMudHlwZSl9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG5cdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e1RZUEVfSUNPTlNbdGhpcy5wcm9wcy50eXBlfHwnaW5mbyddfT48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiY2xvc2UgZmEgZmEtdGltZXNcIiBvbkNsaWNrPXt0aGlzLm91dH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Tm90aWZpZXI6IE5vdGlmaWVyLFxuXHRub3RpZmllcjogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6ICd6ci1wb3B1cC1ub3RpZmllci1jb250YWluZXInIH0pO1xuXHRcdFx0fSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICh0eXBlLCBjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdFJlYWN0RE9NLnJlbmRlcig8Tm90aWZpZXIgdHlwZT17dHlwZX0gY29udGVudD17Y29udGVudH0gZGVsYXk9e2RlbGF5fSAvPiwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCB0aGlzLl9kb20pKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdHdhcm5pbmc6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2Vycm9yJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdGluZm86IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2luZm8nLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgUG9wb3ZlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUG9wb3ZlcicsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhpZGRlbkhlaWdodDogNSxcblx0XHRcdGNsb3NlYWJsZTogZmFsc2UsXG5cdFx0XHRwb3BvdmVyV2lkdGg6IG51bGwsXG5cdFx0XHRwb3BvdmVySGVpZ2h0OiBudWxsXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcnJvd0NsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRpZih0aGlzLnByb3BzLmV2ZW50KXtcblx0XHRcdHRoaXMuX2V2ZW50VHlwZSA9IHRoaXMucHJvcHMuZXZlbnQudHlwZSB8fCB0aGlzLnByb3BzLmV2ZW50O1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9fb25XaW5kb3dDbGljaywgZmFsc2UpO1xuXHRcdFx0dGhpcy5fZG9tLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdFx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25Db250YWluZXJFdmVudCAmJiB0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXHRcdFx0XHRpZihfcmVzdWx0ID09PSB0cnVlKXtcblx0XHRcdFx0XHQvL2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LmJpbmQodGhpcyksIHRydWUpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCk7XG5cdFx0XHR9LmJpbmQodGhpcyksIDApO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCh0aGlzKTtcblx0fSxcblx0X19pc01hdGNoUGFyZW50OiBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpe1xuXHRcdGlmKHRhcmdldCl7XG5cdFx0XHRpZih0YXJnZXQudGFnTmFtZSA9PSAnQk9EWScgfHwgdGFyZ2V0LnRhZ05hbWUgPT0gJ0hUTUwnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmKHRhcmdldCAhPT0gcGFyZW50KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX19pc01hdGNoUGFyZW50KHRhcmdldC5wYXJlbnROb2RlLCBwYXJlbnQpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9LFxuXHRfX29uV2luZG93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYoIXRoaXMuX19pc01hdGNoUGFyZW50KGV2ZW50LnRhcmdldCwgdGhpcy5fZG9tKSl7XG5cdFx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cdFx0XHRpZihfcmVzdWx0ICE9PSB0cnVlKXtcblx0XHRcdFx0dGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBvdXRzaWRlIGNvbnRhaW5lciBldmVudFwiKTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cdFx0XHRpZihfcmVzdWx0ID09PSB0cnVlKXtcblx0XHRcdFx0dGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBpbnNpZGUgY29udGFpbmVyIGV2ZW50XCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0Y2xvc2U6IGZ1bmN0aW9uICh0YWcpe1xuXHRcdC8vem4uaW5mbygnUG9wb3Zlci5jbG9zZTonLCB0YWcpO1xuXHRcdGlmKHRoaXMuX2RvbSl7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX19vbldpbmRvd0NsaWNrLCBmYWxzZSk7XG5cdFx0XHRpZih0aGlzLl9kb20ucGFyZW50Tm9kZSl7XG5cdFx0XHRcdHRoaXMuX2RvbS5wYXJlbnROb2RlLnN0eWxlID0gJyc7XG5cdFx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZG9tID0gbnVsbDtcblx0XHRcdHRoaXMuX2V2ZW50VHlwZSA9IG51bGw7XG5cdFx0fVxuXHR9LFxuXHRmaXhQb3NpdGlvbjogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0dmFyIF9wb3BvdmVyID0gdGhpcy5fZG9tO1xuXHRcdHZhciBfdCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuXHRcdFx0X3BvcG92ZXJXaWR0aCA9IHRoaXMucHJvcHMucG9wb3ZlcldpZHRoIHx8IF90LndpZHRoLFxuXHRcdFx0X3BvcG92ZXJIZWlnaHQgPSB0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQgfHwgem4uZG9tLmdldFBvc2l0aW9uKF9wb3BvdmVyKS5oZWlnaHQsXG5cdFx0XHRfbGVmdCA9IG51bGwsXG5cdFx0XHRfdG9wID0gbnVsbCxcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMgPSBbXTtcblxuXHRcdGlmKF9wb3BvdmVyV2lkdGggPT0gJzEwMCUnKXtcblx0XHRcdF9wb3BvdmVyV2lkdGggPSBfdC53aWR0aDtcblx0XHR9XG5cblx0XHRpZihfcG9wb3ZlckhlaWdodCA8IHRoaXMucHJvcHMuaGlkZGVuSGVpZ2h0KXtcblx0XHRcdHRoaXMucHJvcHMub25IaWRkZW4gJiYgdGhpcy5wcm9wcy5vbkhpZGRlbigpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKChfdC54ICsgX3BvcG92ZXJXaWR0aCkgPiB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgpe1xuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1wbGFjZW1lbnQtcmlnaHQnKTtcblx0XHRcdF9sZWZ0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCAtIF90LnggLSBfdC53aWR0aDtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLnJpZ2h0ID0gX2xlZnQgKyAncHgnO1xuXHRcdFx0X3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5yaWdodCA9ICcwcHgnO1xuXHRcdH1lbHNlIHtcblx0XHRcdF9sZWZ0ID0gX3QueDtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LWxlZnQnKTtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLmxlZnQgPSBfbGVmdCArICdweCc7XG5cdFx0fVxuXG5cdFx0aWYoKF90LnkgKyBfcG9wb3ZlckhlaWdodCkgPiB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0KXtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbScpO1xuXHRcdFx0X3RvcCA9IF90LmhlaWdodCArIDEwO1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUuYm90dG9tID0gX3RvcCArICdweCc7XG5cdFx0XHRfcG9wb3Zlci5wYXJlbnROb2RlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdG9wID0gX3QueSArIF90LmhlaWdodCArIDEwO1xuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tdG9wJyk7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS50b3AgPSBfdG9wICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCl7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS53aWR0aCA9IF9wb3BvdmVyV2lkdGggKyAncHgnO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMucG9wb3ZlckhlaWdodCl7XG5cdFx0XHRpZihfcG9wb3Zlci5vZmZzZXRIZWlnaHQgIT0gX3BvcG92ZXJIZWlnaHQpe1xuXHRcdFx0XHRfcG9wb3Zlci5zdHlsZS5oZWlnaHQgPSBfcG9wb3ZlckhlaWdodCArICdweCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0X3BvcG92ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3puLWFuaW1hdGUtc2NhbGUtdXAnKTtcblx0XHRfcG9wb3Zlci5jbGFzc05hbWUgPSBfcG9wb3Zlci5jbGFzc05hbWUgKyAnICcgKyBfYXJyb3dDbGFzc05hbWVzLmpvaW4oJyAnKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfc3R5bGUgPSB7fTtcblx0XHRpZih0aGlzLnByb3BzLmhlaWdodCl7XG5cdFx0XHRfc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQgKyAncHgnO1xuXHRcdH1lbHNlIHtcblx0XHRcdF9zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLXBvcG92ZXIgenItYXJyb3cgenItYXJyb3ctY29sb3Itd2hpdGUnLCB0aGlzLnN0YXRlLmFycm93Q2xhc3NOYW1lKX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jbG9zZWFibGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwicG9wb3Zlci1jbG9zZSB6ci1ob3Zlci1zZWxmLWxvYWRpbmdcIiBvbkNsaWNrPXsoKT0+dGhpcy5jbG9zZSgnc2VsZiBjbG9zZScpfT5cblx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJwb3BvdmVyLWNvbnRlbnRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17em4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLnN0eWxlKSwgX3N0eWxlfSA+e3RoaXMucHJvcHMuY29udGVudH08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0UG9wb3ZlcjogUG9wb3Zlcixcblx0cG9wb3Zlcjogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwienItcG9wdXAtcG9wb3Zlci1jb250YWluZXJcIiB9KTtcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKXtcblx0XHRcdFx0aWYob3B0aW9ucyAmJiBvcHRpb25zLnJlc2V0KXtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCd6bi5wb3BvdmVyOnJlbmRlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLl9wb3BvdmVyID0gUmVhY3RET00ucmVuZGVyKDxQb3BvdmVyIHsuLi5vcHRpb25zfSBjb250ZW50PXtjb250ZW50fSAvPiwgdGhpcy5fZG9tKSwgdGhpcy5fcG9wb3Zlcjtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKHRhZyl7XG5cdFx0XHRcdGlmKHRoaXMuX3BvcG92ZXIpe1xuXHRcdFx0XHRcdHRoaXMuX3BvcG92ZXIuY2xvc2UodGFnKTtcblx0XHRcdFx0XHR0aGlzLl9wb3BvdmVyID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUb2FzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVG9hc3QnLFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0d2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsIHRoaXMucHJvcHMuZGVsYXkgfHwgMTgwMCk7XG5cdH0sXG5cdG91dDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRfZG9tLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LW91dCcpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcblx0XHR9LCBmYWxzZSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC10b2FzdCB0b2FzdC1pbicsIHRoaXMucHJvcHMudHlwZSl9ID5cblx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VG9hc3Q6IFRvYXN0LFxuXHR0b2FzdDogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwienItcG9wdXAtdG9hc3QtY29udGFpbmVyXCIgfSk7XG5cdFx0XHR9LFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKHR5cGUsIGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0dmFyIF9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0UmVhY3RET00ucmVuZGVyKDxUb2FzdCB0eXBlPXt0eXBlfSBjb250ZW50PXtjb250ZW50fSBkZWxheT17ZGVsYXl9IC8+LCBfZG9tKTtcblx0XHRcdFx0dGhpcy5fZG9tLmFwcGVuZENoaWxkKF9kb20pO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3N1Y2Nlc3MnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0d2FybmluZzogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3Blbignd2FybmluZycsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3BlbignZGFuZ2VyJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdGluZm86IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2luZm8nLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVG9vbHRpcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVG9vbHRpcCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFycm93Q2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpO1xuXHR9LFxuXHRmaXhQb3NpdGlvbjogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0aWYoIXRhcmdldCl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpeFBvc2l0aW9uIHRhcmdldCBpcyBudWxsLicpO1xuXHRcdH1cblx0XHR2YXIgX2RvbVdpZHRoID0gdGhpcy5fZG9tLm9mZnNldFdpZHRoLFxuXHRcdFx0X2RvbUhlaWdodCA9IHRoaXMuX2RvbS5vZmZzZXRIZWlnaHQsXG5cdFx0XHRfdGFyZ2V0ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG5cdFx0XHRfbGVmdCA9IG51bGwsXG5cdFx0XHRfdG9wID0gbnVsbCxcblx0XHRcdF9jbGFzc05hbWUgPSAnJztcblxuXHRcdGlmKChfdGFyZ2V0LnggKyBfZG9tV2lkdGgpID4gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCl7XG5cdFx0XHRfbGVmdCA9IF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGg7XG5cdFx0fWVsc2Uge1xuXHRcdFx0X2xlZnQgPSBfdGFyZ2V0LnggKyAoX3RhcmdldC53aWR0aCAtIF9kb21XaWR0aCkgLyAyO1xuXHRcdH1cblxuXHRcdGlmKChfdGFyZ2V0LnkgKyBfZG9tSGVpZ2h0KSA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KXtcblx0XHRcdF90b3AgPSBfdGFyZ2V0LnkgLSBfZG9tSGVpZ2h0IC0gMTY7XG5cdFx0XHRfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi1ib3R0b20nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdG9wID0gX3RhcmdldC55ICsgX3RhcmdldC5oZWlnaHQgKyAxNjtcblx0XHRcdF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLXRvcCc7XG5cdFx0fVxuXG5cdFx0aWYoX2xlZnQ8MCl7XG5cdFx0XHRfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi1sZWZ0Jztcblx0XHRcdF9sZWZ0ID0gX3RhcmdldC54ICsgX3RhcmdldC53aWR0aCArIDQ7XG5cdFx0XHRfdG9wID0gX3RhcmdldC55ICsgNDtcblx0XHR9XG5cblx0XHR0aGlzLl9kb20uc3R5bGUudG9wID0gX3RvcCArICdweCc7XG5cdFx0dGhpcy5fZG9tLnN0eWxlLmxlZnQgPSBfbGVmdCArICdweCc7XG5cdFx0X2NsYXNzTmFtZSAmJiB0aGlzLl9kb20uY2xhc3NMaXN0LmFkZChfY2xhc3NOYW1lKTtcblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZihfZG9tICYmIF9kb20ucGFyZW50Tm9kZSl7XG5cdFx0XHRfZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cdFx0aWYoem4uaXMoY2FsbGJhY2ssICdmdW5jdGlvbicpKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC10b29sdGlwIHpyLWFycm93IHpyLWFycm93LWNvbG9yLWJsYWNrIHpyLWFycm93LXBsYWNlbWVudC1jZW50ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFRvb2x0aXA6IFRvb2x0aXAsXG5cdHRvb2x0aXA6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXBvcHVwLXRvb2x0aXAtY29udGFpbmVyXCIgfSk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9fb25XaW5kb3dNb3VzZU92ZXIuYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9fb25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXHRcdFx0fSxcblx0XHRcdF9fb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5yZXNpemluZycpO1xuXHRcdFx0fSxcblx0XHRcdF9fb25XaW5kb3dNb3VzZU92ZXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0XHRcdHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0XHRpZihfdGFyZ2V0ICYmIF90YXJnZXQuZ2V0QXR0cmlidXRlICYmIF90YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXpyLXBvcHVwLXRvb2x0aXAnKSl7XG5cdFx0XHRcdFx0aWYodGhpcy5fdG9vbHRpcCAmJiB0aGlzLl90b29sdGlwLnByb3BzLnRhcmdldCAhPT0gX3RhcmdldCl7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXInKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXIoX3RhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtenItcG9wdXAtdG9vbHRpcCcpLCB7IHRhcmdldDogX3RhcmdldCB9KTtcblx0XHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucyl7XG5cdFx0XHRcdGlmKHRoaXMuX3Rvb2x0aXApe1xuXHRcdFx0XHRcdHRoaXMuX3Rvb2x0aXAuZGVzdHJveSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3Rvb2x0aXAgPSBSZWFjdERPTS5yZW5kZXIoPFRvb2x0aXAgey4uLm9wdGlvbnN9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+LCB0aGlzLl9kb20pO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLl90b29sdGlwKXtcblx0XHRcdFx0XHRpZih6bi5pcyhjYWxsYmFjaywgJ3N0cmluZycpICYmIHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jykge1xuXHRcdFx0XHRcdFx0em4uZGVidWcoY2FsbGJhY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbSk7XG5cdFx0XHRcdFx0dGhpcy5fdG9vbHRpcC5kZXN0cm95KGNhbGxiYWNrKTtcblx0XHRcdFx0XHR0aGlzLl90b29sdGlwID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHpuLmRlZXBBc3NpZ25zKFxuICAgIHsgfSwgXG4gICAgcmVxdWlyZSgnLi9BbGVydCcpLCBcbiAgICByZXF1aXJlKCcuL0RpYWxvZycpLFxuICAgIHJlcXVpcmUoJy4vRHJvcGRvd24nKSxcbiAgICByZXF1aXJlKCcuL0xvYWRlcicpLFxuICAgIHJlcXVpcmUoJy4vTW9kYWwnKSxcbiAgICByZXF1aXJlKCcuL05vdGlmaWVyJyksXG4gICAgcmVxdWlyZSgnLi9Qb3BvdmVyJyksXG4gICAgcmVxdWlyZSgnLi9Ub2FzdCcpLFxuICAgIHJlcXVpcmUoJy4vVG9vbHRpcCcpXG4pOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9