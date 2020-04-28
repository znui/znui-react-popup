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
      zn.debug('alert.close');
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
        }, this._dom));

        zn.debug('Modal created(' + (this._modals.length + 1) + '): ', _modal);

        if (ifPush !== false) {
          this._modals.push(_modal);
        }

        return _modal;
      },
      close: function close(delay, callback) {
        zn.debug('Modal close(' + this._modals.length + '): ');

        var _modal = this._modals.pop();

        console.log(this._modals);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vRGlhbG9nLmpzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9Qb3BvdmVyLmpzIiwid2VicGFjazovLy8uL1RvYXN0LmpzIiwid2VicGFjazovLy8uL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJtb2RhbCIsIkFsZXJ0IiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRpdGxlIiwiY29udGVudCIsIm9uQ2xpY2siLCJidXR0b25zIiwidGV4dCIsIl9fb25DbGljayIsIml0ZW0iLCJpbmRleCIsIl9yZXN1bHQiLCJwcm9wcyIsInpuIiwiZGVidWciLCJjbG9zZSIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXAiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsImFsZXJ0IiwiY2FsbGJhY2siLCJfYWxlcnQiLCJjcmVhdGUiLCJjb25maXJtIiwiY2FuY2VsIiwib3B0aW9ucyIsIl9vcHRpb25zIiwiZXh0ZW5kIiwiX2NvbmZpcm0iLCJfcmV0dXJuIiwiZGVzdHJveSIsInByb21wdCIsImFyZ3YiLCJfYXJndiIsIm9uQ2hhbmdlIiwiX3Byb21wdCIsImNhbmNlbFRleHQiLCJldmVudCIsImNvbmZpcm1UZXh0IiwiRGlhbG9nIiwiX19vbkNsb3NlIiwib25DbG9zZSIsImZvY3VzIiwiY2xvc2VhYmxlIiwiZGlhbG9nIiwiaWZQdXNoIiwiX2RpYWxvZyIsIlJlYWN0RE9NIiwicG9wb3ZlciIsIkRyb3Bkb3duIiwiZGlzYWJsZWQiLCJldmVudFR5cGUiLCJjb21wb25lbnREaWRNb3VudCIsImZpbmRET01Ob2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fZXZlbnRIYW5kbGVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0UGFyZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiX3RhcmdldCIsIl9wb3BvdmVyIiwiX3JlbmRlciIsImlzIiwicHJvdG90eXBlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVzZXQiLCJjaGlsZHJlbiIsIkxvYWRlciIsIl9fcmVuZGVyQ29udGVudCIsImxvYWRlciIsIkNsYXNzIiwibWV0aG9kcyIsIl9sb2FkZXIiLCJyZWYiLCJsb2FkaW5nIiwiTW9kYWwiLCJnZXRJbml0aWFsU3RhdGUiLCJkZXN0cm95ZWQiLCJvbkNvbXBvbmVudERpZE1vdW50IiwiX19pc01vdW50ZWQiLCJzdGF0ZSIsIl9kb20iLCJvbkRlc3Ryb3lCZWZvcmUiLCJyZW1vdmVDaGlsZCIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJvbkRlc3Ryb3kiLCJpbml0IiwiZG9tIiwiY3JlYXRlUm9vdEVsZW1lbnQiLCJfbW9kYWxzIiwiX21vZGFsIiwiY3JlYXRlRWxlbWVudCIsImxlbmd0aCIsInB1c2giLCJkZWxheSIsInBvcCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiY2xvc2VBbGwiLCJzaXplIiwiVFlQRV9JQ09OUyIsImhlYXJ0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsIndhcm5pbmciLCJlcnJvciIsImluZm8iLCJOb3RpZmllciIsIndpbmRvdyIsIm91dCIsImFkZCIsInR5cGUiLCJub3RpZmllciIsIm9wZW4iLCJQb3BvdmVyIiwiaGlkZGVuSGVpZ2h0IiwicG9wb3ZlcldpZHRoIiwicG9wb3ZlckhlaWdodCIsImFycm93Q2xhc3NOYW1lIiwiX2V2ZW50VHlwZSIsIl9fb25XaW5kb3dDbGljayIsIm9uQ29udGFpbmVyRXZlbnQiLCJmaXhQb3NpdGlvbiIsIm9uUG9wb3ZlckRpZE1vdW50IiwiX19pc01hdGNoUGFyZW50IiwicGFyZW50IiwidGFnTmFtZSIsIm9uV2luZG93T3V0c2lkZUNvbnRhaW5lckV2ZW50Iiwib25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCIsInRhZyIsIl90IiwiZ2V0UG9zaXRpb24iLCJfcG9wb3ZlcldpZHRoIiwid2lkdGgiLCJfcG9wb3ZlckhlaWdodCIsImhlaWdodCIsIl9sZWZ0IiwiX3RvcCIsIl9hcnJvd0NsYXNzTmFtZXMiLCJvbkhpZGRlbiIsIngiLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsV2lkdGgiLCJyaWdodCIsImxlZnQiLCJ5IiwiYXZhaWxIZWlnaHQiLCJib3R0b20iLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJ2aXNpYmlsaXR5Iiwiam9pbiIsIl9zdHlsZSIsIm1heEhlaWdodCIsIlRvYXN0IiwidG9hc3QiLCJhcHBlbmRDaGlsZCIsIlRvb2x0aXAiLCJFcnJvciIsIl9kb21XaWR0aCIsIm9mZnNldFdpZHRoIiwiX2RvbUhlaWdodCIsIl9jbGFzc05hbWUiLCJzY3JvbGxIZWlnaHQiLCJ0b29sdGlwIiwiX19vbldpbmRvd01vdXNlT3ZlciIsIl9fb25XaW5kb3dSZXNpemUiLCJfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlIiwiZ2V0QXR0cmlidXRlIiwiX3ZhbHVlIiwiX3Rvb2x0aXAiLCJwcm9jZXNzIiwiZW52IiwiZGVlcEFzc2lnbnMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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LEtBQUgsQ0FBU1ksUUFBVDtBQUNBOztBQUNEMkIsa0JBQVEsQ0FBQ3lDLHNCQUFULENBQWdDLEtBQUtILElBQXJDOztBQUNBLGVBQUs2RixRQUFMLENBQWNwSixPQUFkLENBQXNCVixRQUF0Qjs7QUFDQSxlQUFLOEosUUFBTCxHQUFnQixJQUFoQjtBQUNBOztBQUVELGVBQU8sSUFBUDtBQUNBO0FBbERPO0FBRlEsR0FBVDtBQUZPLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQzNFQWpLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsRUFBRSxDQUFDOEssV0FBSCxDQUNiLEVBRGEsRUFFYjlMLG1CQUFPLENBQUMsMkJBQUQsQ0FGTSxFQUdiQSxtQkFBTyxDQUFDLDZCQUFELENBSE0sRUFJYkEsbUJBQU8sQ0FBQyxpQ0FBRCxDQUpNLEVBS2JBLG1CQUFPLENBQUMsNkJBQUQsQ0FMTSxFQU1iQSxtQkFBTyxDQUFDLDJCQUFELENBTk0sRUFPYkEsbUJBQU8sQ0FBQyxpQ0FBRCxDQVBNLEVBUWJBLG1CQUFPLENBQUMsK0JBQUQsQ0FSTSxFQVNiQSxtQkFBTyxDQUFDLDJCQUFELENBVE0sRUFVYkEsbUJBQU8sQ0FBQywrQkFBRCxDQVZNLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xudmFyIEFsZXJ0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJBbGVydCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGNvbnRlbnQ6IG51bGwsXG5cdFx0XHRvbkNsaWNrOiBudWxsLFxuXHRcdFx0YnV0dG9uczogW1xuXHRcdFx0XHR7IHRleHQ6ICfnoa7orqQnIH1cblx0XHRcdF1cblx0XHR9O1xuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtLCB0aGlzKTtcblx0XHRcdF9yZXN1bHQgPSBpdGVtLm9uQ2xpY2sgJiYgaXRlbS5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXHRcdGlmKF9yZXN1bHQgIT09IGZhbHNlKXtcblx0XHRcdHpuLmRlYnVnKCdhbGVydC5jbG9zZScpO1xuXHRcdFx0bW9kYWwuY2xvc2UoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1hbGVydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydC1pbm5lclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj59XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudCAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWNvbnRlbnRcIj57dGhpcy5wcm9wcy5jb250ZW50fTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtYnRuc1wiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYWxlcnQtYnRuXCIgb25DbGljaz17KCk9PnRoaXMuX19vbkNsaWNrKGl0ZW0sIGluZGV4KX0+e2l0ZW0udGV4dH08L2Rpdj47XG5cdFx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0QWxlcnQ6IEFsZXJ0LFxuXHRhbGVydDogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjYWxsYmFjaywgcHJvcHMpe1xuXHRcdHZhciBfYWxlcnQgPSBtb2RhbC5jcmVhdGUoPEFsZXJ0IFxuXHRcdFx0Y29udGVudD17Y29udGVudH0gXG5cdFx0XHR0aXRsZT17dGl0bGV9IFxuXHRcdFx0b25DbGljaz17Y2FsbGJhY2t9IHsuLi5wcm9wc30gLz4sIHtcblx0XHRcdFx0Y2xhc3M6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcblx0XHRcdH0sIGZhbHNlKTtcbiBcbiAgICAgICAgcmV0dXJuIF9hbGVydDtcblx0fSxcblx0Y29uZmlybTogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjb25maXJtLCBjYW5jZWwsIG9wdGlvbnMpe1xuXHRcdHZhciBfb3B0aW9ucyA9IHpuLmV4dGVuZCh7IGNhbmNlbDogJ+WPlua2iCcsIGNvbmZpcm06ICfnoa7lrponIH0sIG9wdGlvbnMpO1xuXHRcdHZhciBfY29uZmlybSA9IG1vZGFsLmNyZWF0ZSg8QWxlcnRcblx0XHRcdGNvbnRlbnQ9e2NvbnRlbnR9XG5cdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRidXR0b25zPXtbXG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0dGV4dDogX29wdGlvbnMuY2FuY2VsLCBcblx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0XHRcdHZhciBfcmV0dXJuID0gY2FuY2VsICYmIGNhbmNlbChfY29uZmlybSk7XG5cdFx0XHRcdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdFx0XHRcdF9jb25maXJtLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0dGV4dDogX29wdGlvbnMuY29uZmlybSwgXG5cdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdFx0XHR2YXIgX3JldHVybiA9IGNvbmZpcm0gJiYgY29uZmlybShfY29uZmlybSk7XG5cdFx0XHRcdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdFx0XHRcdF9jb25maXJtLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdF19IC8+LCB7XG5cdFx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0XHR9LCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIF9jb25maXJtO1xuXHR9LFxuXHRwcm9tcHQ6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHR2YXIgX2FyZ3YgPSB6bi5leHRlbmQoe1xuXHRcdFx0dGl0bGU6IGFyZ3YudGl0bGUsXG5cdFx0XHRjb250ZW50OiA8aW5wdXQgY2xhc3NOYW1lPVwiYWxlcnQtaW5wdXRcIiBvbkNoYW5nZT17YXJndi5vbkNoYW5nZX0gdHlwZT1cInRleHRcIiAvPixcblx0XHRcdGNvbmZpcm06IGFyZ3YuY29uZmlybSxcblx0XHRcdGNhbmNlbDogYXJndi5jYW5jZWxcblx0XHR9LCBhcmd2KTtcblx0XHR2YXIgX3Byb21wdCA9IG1vZGFsLmNyZWF0ZSg8QWxlcnRcblx0XHRcdGNvbnRlbnQ9e19hcmd2LmNvbnRlbnR9XG5cdFx0XHR0aXRsZT17X2FyZ3YudGl0bGV9XG5cdFx0XHRidXR0b25zPXtbXG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0dGV4dDogX2FyZ3YuY2FuY2VsVGV4dCB8fCAn5Y+W5raIJywgXG5cdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gKGV2ZW50LCBhbGVydCl7XG5cdFx0XHRcdFx0XHR2YXIgX3JldHVybiA9IF9hcmd2LmNhbmNlbCAmJiBfYXJndi5jYW5jZWwoZXZlbnQsIGFsZXJ0KTtcblx0XHRcdFx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0XHRcdFx0X3Byb21wdC5kZXN0cm95KCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogX2FyZ3YuY29uZmlybVRleHQgfHwgJ+ehruWumicsXG5cdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gKGV2ZW50LCBhbGVydCl7XG5cdFx0XHRcdFx0XHR2YXIgX3JldHVybiA9IF9hcmd2LmNvbmZpcm0gJiYgX2FyZ3YuY29uZmlybShldmVudCwgYWxlcnQpO1xuXHRcdFx0XHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHRcdFx0XHRfcHJvbXB0LmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XX0gLz4sIHtcblx0XHRcdFx0Y2xhc3M6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcblx0XHRcdH0sIGZhbHNlKTtcblxuXHRcdHJldHVybiBfcHJvbXB0O1xuXHR9XG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcbnZhciBEaWFsb2cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkRpYWxvZycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGNvbnRlbnQ6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX29uQ2xvc2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xvc2UgJiYgdGhpcy5wcm9wcy5vbkNsb3NlKGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmVzdWx0ICE9PSBmYWxzZSl7XG5cdFx0XHRtb2RhbC5jbG9zZSgpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWRpYWxvZycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGRhdGEtZm9jdXM9e3RoaXMucHJvcHMuZm9jdXN9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctaGVhZGVyXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj59XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2xvc2VhYmxlICYmIDxzcGFuIG9uQ2xpY2s9e3RoaXMuX19vbkNsb3NlfSBjbGFzc05hbWU9XCJkaWFsb2ctY2xvc2VcIj54PC9zcGFuPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWJvZHlcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0RGlhbG9nOiBEaWFsb2csXG5cdGRpYWxvZzogZnVuY3Rpb24gKGFyZ3YsIGlmUHVzaCl7XG5cdFx0dmFyIF9kaWFsb2cgPSBtb2RhbC5jcmVhdGUoPERpYWxvZyB7Li4uYXJndn0gLz4sIHtcblx0XHRcdGNsYXNzOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG5cdFx0fSwgaWZQdXNoKTtcblxuXHRcdHJldHVybiBfZGlhbG9nO1xuXHR9XG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgcG9wb3ZlciA9IHJlcXVpcmUoJy4vUG9wb3ZlcicpLnBvcG92ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHREcm9wZG93bjogUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRcdGRpc3BsYXlOYW1lOidaUkRyb3Bkb3duJyxcblx0XHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0XHRldmVudFR5cGU6ICdjbGljaydcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsIHRoaXMuX19ldmVudEhhbmRsZXIsIGZhbHNlKTtcblx0XHR9LFxuXHRcdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsIHRoaXMuX19ldmVudEhhbmRsZXIsIGZhbHNlKTtcblx0XHR9LFxuXHRcdGdldFBhcmVudDogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0XHRpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd6ci1wb3B1cC1kcm9wZG93bicpKXtcblx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdH1lbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFyZW50KHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9fZXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7IFxuXHRcdFx0XHRyZXR1cm47IFxuXHRcdFx0fVxuXHRcdFx0dmFyIF90YXJnZXQgPSB0aGlzLmdldFBhcmVudChldmVudC50YXJnZXQpLFxuXHRcdFx0XHRfcG9wb3ZlciA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5wb3BvdmVyKTtcblx0XHRcdGlmKF90YXJnZXQgJiYgX3BvcG92ZXIgJiYgX3BvcG92ZXIucmVuZGVyKXtcblx0XHRcdFx0dmFyIF9yZW5kZXIgPSBfcG9wb3Zlci5yZW5kZXI7XG5cdFx0XHRcdGlmKHpuLmlzKF9yZW5kZXIsICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdFx0aWYoIV9yZW5kZXIucHJvdG90eXBlIHx8ICFfcmVuZGVyLnByb3RvdHlwZS5yZW5kZXIpe1xuXHRcdFx0XHRcdFx0X3JlbmRlciA9IF9yZW5kZXIoZXZlbnQsIHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihfcmVuZGVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0X3BvcG92ZXIucmVuZGVyID0gbnVsbDtcblx0XHRcdFx0XHRkZWxldGUgX3BvcG92ZXIucmVuZGVyO1xuXHRcdFx0XHRcdHBvcG92ZXIucmVuZGVyKF9yZW5kZXIsIHpuLmV4dGVuZCh7XG5cdFx0XHRcdFx0XHRyZXNldDogdHJ1ZSxcblx0XHRcdFx0XHRcdGV2ZW50OiBldmVudCxcblx0XHRcdFx0XHRcdHRhcmdldDogX3RhcmdldCxcblx0XHRcdFx0XHR9LCBfcG9wb3ZlcikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1kcm9wZG93blwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fSlcbn07XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG52YXIgTG9hZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMb2FkZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb250ZW50OiBudWxsLFxuXHRcdFx0dGl0bGU6ICdMb2FkaW5nIC4uLiAnXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuY29udGVudCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jb250ZW50O1xuXHRcdH1lbHNlIGlmKHRoaXMucHJvcHMudGl0bGUpe1xuXHRcdFx0cmV0dXJuIDw+XG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImxvYWRlclwiIGRhdGEtbG9hZGVyPVwic3Bpbm5lclwiLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cdFx0XHQ8Lz47XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtbG9hZGVyJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0TG9hZGVyOiBMb2FkZXIsXG5cdGxvYWRlcjogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjcmVhdGU6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0aWYodGhpcy5fbG9hZGVyKXtcblx0XHRcdFx0XHR0aGlzLl9sb2FkZXIuZGVzdHJveSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtb2RhbC5jcmVhdGUoPExvYWRlciB7Li4uYXJndn0gLz4sIHsgXG5cdFx0XHRcdFx0Y2xhc3M6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheScsXG5cdFx0XHRcdFx0cmVmOiAocmVmKSA9PiB0aGlzLl9sb2FkZXIgPSByZWZcblx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0fSxcblx0XHRcdGxvYWRpbmc6IGZ1bmN0aW9uICh0aXRsZSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGUoe1xuXHRcdFx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdGlmKHRoaXMuX2xvYWRlcil7XG5cdFx0XHRcdFx0dGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgTW9kYWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk1vZGFsJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVzdHJveWVkOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRjbG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5kZXN0cm95KGNhbGxiYWNrKTtcblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCB8fCB0aGlzLnN0YXRlLmRlc3Ryb3llZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZihfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0dGhpcy5zdGF0ZS5kZXN0cm95ZWQgPSB0cnVlO1xuXHRcdHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD57dGhpcy5wcm9wcy5jaGlsZHJlbn08Lz5cblx0XHQpO1xuXHR9XG59KTs7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRNb2RhbDogTW9kYWwsXG5cdG1vZGFsOiB6bi5DbGFzcyh7XG5cdFx0c3RhdGljOiB0cnVlLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ6ci1wb3B1cC1tb2RhbC1jb250YWluZXJcIiB9KTtcblx0XHRcdFx0dGhpcy5fbW9kYWxzID0gW107XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlOiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucywgaWZQdXNoKXtcblx0XHRcdFx0dmFyIF9tb2RhbCA9ICBSZWFjdERPTS5yZW5kZXIoPE1vZGFsIHsuLi5vcHRpb25zfT57Y29udGVudH08L01vZGFsPiwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdFx0XHRjbGFzczogem51aS5jbGFzc25hbWUoJ3pyLXBvcHVwLW1vZGFsJywgb3B0aW9ucy5jbGFzcyksXG5cdFx0XHRcdFx0c3R5bGU6IHpudWkuc3R5bGUob3B0aW9ucy5zdHlsZSlcblx0XHRcdFx0fSwgdGhpcy5fZG9tKSk7XG5cdFx0XHRcdHpuLmRlYnVnKCdNb2RhbCBjcmVhdGVkKCcgKyAodGhpcy5fbW9kYWxzLmxlbmd0aCArIDEpICsgJyk6ICcsIF9tb2RhbCk7XG5cdFx0XHRcdGlmKGlmUHVzaCAhPT0gZmFsc2Upe1xuXHRcdFx0XHRcdHRoaXMuX21vZGFscy5wdXNoKF9tb2RhbClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBfbW9kYWw7XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uIChkZWxheSwgY2FsbGJhY2spe1xuXHRcdFx0XHR6bi5kZWJ1ZygnTW9kYWwgY2xvc2UoJyArIHRoaXMuX21vZGFscy5sZW5ndGggKyAnKTogJyk7XG5cdFx0XHRcdHZhciBfbW9kYWwgPSB0aGlzLl9tb2RhbHMucG9wKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuX21vZGFscyk7XG5cdFx0XHRcdGlmKF9tb2RhbCl7XG5cdFx0XHRcdFx0aWYoX21vZGFsLnN0YXRlLmRlc3Ryb3llZCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jbG9zZShkZWxheSwgY2FsbGJhY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihkZWxheSl7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKSwgZGVsYXkpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0X21vZGFsLmRlc3Ryb3koY2FsbGJhY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2VBbGw6IGZ1bmN0aW9uIChkZWxheSl7XG5cdFx0XHRcdGlmKHRoaXMuX21vZGFscy5sZW5ndGgpe1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoZGVsYXksIHRoaXMuY2xvc2VBbGwpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRzaXplOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUWVBFX0lDT05TID0ge1xuXHRoZWFydDogJ000NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45eicsXG5cdHNlY29uZGFyeTogJ000NDggMEg2NEMyOC43IDAgMCAyOC43IDAgNjR2Mjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0aDk2djg0YzAgOS44IDExLjIgMTUuNSAxOS4xIDkuN0wzMDQgNDE2aDE0NGMzNS4zIDAgNjQtMjguNyA2NC02NFY2NGMwLTM1LjMtMjguNy02NC02NC02NHonLFxuXHRzdWNjZXNzOiAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicsXG5cdHdhcm5pbmc6ICdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jyxcblx0ZXJyb3I6ICdNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Jyxcblx0aW5mbzogJ00yMCA0MjQuMjI5aDIwVjI3OS43NzFIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwVjIxMmMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMGgxMTJjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB2MjEyLjIyOWgyMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMFY0OTJjMCAxMS4wNDYtOC45NTQgMjAtMjAgMjBIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwdi00Ny43NzFjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjB6TTk2IDBDNTYuMjM1IDAgMjQgMzIuMjM1IDI0IDcyczMyLjIzNSA3MiA3MiA3MiA3Mi0zMi4yMzUgNzItNzJTMTM1Ljc2NCAwIDk2IDB6J1xufVxuXG52YXIgTm90aWZpZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5vdGlmaWNhdGlvbicsXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCwgdGhpcy5wcm9wcy5kZWxheSB8fCAxNTAwKTtcblx0fSxcblx0b3V0OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdF9kb20uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLW91dCcpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdGlmKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKXtcblx0XHRcdFx0X2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblx0XHRcdFx0UmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pbicsIHRoaXMucHJvcHMudHlwZSl9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG5cdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e1RZUEVfSUNPTlNbdGhpcy5wcm9wcy50eXBlfHwnaW5mbyddfT48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jb250ZW50fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiY2xvc2UgZmEgZmEtdGltZXNcIiBvbkNsaWNrPXt0aGlzLm91dH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Tm90aWZpZXI6IE5vdGlmaWVyLFxuXHRub3RpZmllcjogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6ICd6ci1wb3B1cC1ub3RpZmllci1jb250YWluZXInIH0pO1xuXHRcdFx0fSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICh0eXBlLCBjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdFJlYWN0RE9NLnJlbmRlcig8Tm90aWZpZXIgdHlwZT17dHlwZX0gY29udGVudD17Y29udGVudH0gZGVsYXk9e2RlbGF5fSAvPiwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCB0aGlzLl9kb20pKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoY29udGVudCwgZGVsYXkpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdHdhcm5pbmc6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2Vycm9yJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdGluZm86IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2luZm8nLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgUG9wb3ZlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUG9wb3ZlcicsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhpZGRlbkhlaWdodDogNSxcblx0XHRcdGNsb3NlYWJsZTogZmFsc2UsXG5cdFx0XHRwb3BvdmVyV2lkdGg6IG51bGwsXG5cdFx0XHRwb3BvdmVySGVpZ2h0OiBudWxsXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcnJvd0NsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRpZih0aGlzLnByb3BzLmV2ZW50KXtcblx0XHRcdHRoaXMuX2V2ZW50VHlwZSA9IHRoaXMucHJvcHMuZXZlbnQudHlwZSB8fCB0aGlzLnByb3BzLmV2ZW50O1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9fb25XaW5kb3dDbGljaywgZmFsc2UpO1xuXHRcdFx0dGhpcy5fZG9tLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdFx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25Db250YWluZXJFdmVudCAmJiB0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXHRcdFx0XHRpZihfcmVzdWx0ID09PSB0cnVlKXtcblx0XHRcdFx0XHQvL2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LmJpbmQodGhpcyksIHRydWUpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCk7XG5cdFx0XHR9LmJpbmQodGhpcyksIDApO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCh0aGlzKTtcblx0fSxcblx0X19pc01hdGNoUGFyZW50OiBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpe1xuXHRcdGlmKHRhcmdldCl7XG5cdFx0XHRpZih0YXJnZXQudGFnTmFtZSA9PSAnQk9EWScgfHwgdGFyZ2V0LnRhZ05hbWUgPT0gJ0hUTUwnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmKHRhcmdldCAhPT0gcGFyZW50KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX19pc01hdGNoUGFyZW50KHRhcmdldC5wYXJlbnROb2RlLCBwYXJlbnQpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9LFxuXHRfX29uV2luZG93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYoIXRoaXMuX19pc01hdGNoUGFyZW50KGV2ZW50LnRhcmdldCwgdGhpcy5fZG9tKSl7XG5cdFx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cdFx0XHRpZihfcmVzdWx0ICE9PSB0cnVlKXtcblx0XHRcdFx0dGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBvdXRzaWRlIGNvbnRhaW5lciBldmVudFwiKTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cdFx0XHRpZihfcmVzdWx0ID09PSB0cnVlKXtcblx0XHRcdFx0dGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBpbnNpZGUgY29udGFpbmVyIGV2ZW50XCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0Y2xvc2U6IGZ1bmN0aW9uICh0YWcpe1xuXHRcdC8vem4uaW5mbygnUG9wb3Zlci5jbG9zZTonLCB0YWcpO1xuXHRcdGlmKHRoaXMuX2RvbSl7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX19vbldpbmRvd0NsaWNrLCBmYWxzZSk7XG5cdFx0XHRpZih0aGlzLl9kb20ucGFyZW50Tm9kZSl7XG5cdFx0XHRcdHRoaXMuX2RvbS5wYXJlbnROb2RlLnN0eWxlID0gJyc7XG5cdFx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tLnBhcmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZG9tID0gbnVsbDtcblx0XHRcdHRoaXMuX2V2ZW50VHlwZSA9IG51bGw7XG5cdFx0fVxuXHR9LFxuXHRmaXhQb3NpdGlvbjogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0dmFyIF9wb3BvdmVyID0gdGhpcy5fZG9tO1xuXHRcdHZhciBfdCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuXHRcdFx0X3BvcG92ZXJXaWR0aCA9IHRoaXMucHJvcHMucG9wb3ZlcldpZHRoIHx8IF90LndpZHRoLFxuXHRcdFx0X3BvcG92ZXJIZWlnaHQgPSB0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQgfHwgem4uZG9tLmdldFBvc2l0aW9uKF9wb3BvdmVyKS5oZWlnaHQsXG5cdFx0XHRfbGVmdCA9IG51bGwsXG5cdFx0XHRfdG9wID0gbnVsbCxcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMgPSBbXTtcblxuXHRcdGlmKF9wb3BvdmVyV2lkdGggPT0gJzEwMCUnKXtcblx0XHRcdF9wb3BvdmVyV2lkdGggPSBfdC53aWR0aDtcblx0XHR9XG5cblx0XHRpZihfcG9wb3ZlckhlaWdodCA8IHRoaXMucHJvcHMuaGlkZGVuSGVpZ2h0KXtcblx0XHRcdHRoaXMucHJvcHMub25IaWRkZW4gJiYgdGhpcy5wcm9wcy5vbkhpZGRlbigpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKChfdC54ICsgX3BvcG92ZXJXaWR0aCkgPiB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgpe1xuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1wbGFjZW1lbnQtcmlnaHQnKTtcblx0XHRcdF9sZWZ0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCAtIF90LnggLSBfdC53aWR0aDtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLnJpZ2h0ID0gX2xlZnQgKyAncHgnO1xuXHRcdFx0X3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5yaWdodCA9ICcwcHgnO1xuXHRcdH1lbHNlIHtcblx0XHRcdF9sZWZ0ID0gX3QueDtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LWxlZnQnKTtcblx0XHRcdF9wb3BvdmVyLnN0eWxlLmxlZnQgPSBfbGVmdCArICdweCc7XG5cdFx0fVxuXG5cdFx0aWYoKF90LnkgKyBfcG9wb3ZlckhlaWdodCkgPiB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0KXtcblx0XHRcdF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbScpO1xuXHRcdFx0X3RvcCA9IF90LmhlaWdodCArIDEwO1xuXHRcdFx0X3BvcG92ZXIuc3R5bGUuYm90dG9tID0gX3RvcCArICdweCc7XG5cdFx0XHRfcG9wb3Zlci5wYXJlbnROb2RlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdG9wID0gX3QueSArIF90LmhlaWdodCArIDEwO1xuXHRcdFx0X2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tdG9wJyk7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS50b3AgPSBfdG9wICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCl7XG5cdFx0XHRfcG9wb3Zlci5zdHlsZS53aWR0aCA9IF9wb3BvdmVyV2lkdGggKyAncHgnO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMucG9wb3ZlckhlaWdodCl7XG5cdFx0XHRpZihfcG9wb3Zlci5vZmZzZXRIZWlnaHQgIT0gX3BvcG92ZXJIZWlnaHQpe1xuXHRcdFx0XHRfcG9wb3Zlci5zdHlsZS5oZWlnaHQgPSBfcG9wb3ZlckhlaWdodCArICdweCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0X3BvcG92ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3puLWFuaW1hdGUtc2NhbGUtdXAnKTtcblx0XHRfcG9wb3Zlci5jbGFzc05hbWUgPSBfcG9wb3Zlci5jbGFzc05hbWUgKyAnICcgKyBfYXJyb3dDbGFzc05hbWVzLmpvaW4oJyAnKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfc3R5bGUgPSB7fTtcblx0XHRpZih0aGlzLnByb3BzLmhlaWdodCl7XG5cdFx0XHRfc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQgKyAncHgnO1xuXHRcdH1lbHNlIHtcblx0XHRcdF9zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLXBvcG92ZXIgenItYXJyb3cgenItYXJyb3ctY29sb3Itd2hpdGUnLCB0aGlzLnN0YXRlLmFycm93Q2xhc3NOYW1lKX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jbG9zZWFibGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwicG9wb3Zlci1jbG9zZSB6ci1ob3Zlci1zZWxmLWxvYWRpbmdcIiBvbkNsaWNrPXsoKT0+dGhpcy5jbG9zZSgnc2VsZiBjbG9zZScpfT5cblx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJwb3BvdmVyLWNvbnRlbnRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17em4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLnN0eWxlKSwgX3N0eWxlfSA+e3RoaXMucHJvcHMuY29udGVudH08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0UG9wb3ZlcjogUG9wb3Zlcixcblx0cG9wb3Zlcjogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwienItcG9wdXAtcG9wb3Zlci1jb250YWluZXJcIiB9KTtcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKXtcblx0XHRcdFx0aWYob3B0aW9ucyAmJiBvcHRpb25zLnJlc2V0KXtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCd6bi5wb3BvdmVyOnJlbmRlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLl9wb3BvdmVyID0gUmVhY3RET00ucmVuZGVyKDxQb3BvdmVyIHsuLi5vcHRpb25zfSBjb250ZW50PXtjb250ZW50fSAvPiwgdGhpcy5fZG9tKSwgdGhpcy5fcG9wb3Zlcjtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKHRhZyl7XG5cdFx0XHRcdGlmKHRoaXMuX3BvcG92ZXIpe1xuXHRcdFx0XHRcdHRoaXMuX3BvcG92ZXIuY2xvc2UodGFnKTtcblx0XHRcdFx0XHR0aGlzLl9wb3BvdmVyID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUb2FzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVG9hc3QnLFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0d2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsIHRoaXMucHJvcHMuZGVsYXkgfHwgMTgwMCk7XG5cdH0sXG5cdG91dDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRfZG9tLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LW91dCcpO1xuXHRcdF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKXtcblx0XHRcdF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcblx0XHR9LCBmYWxzZSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC10b2FzdCB0b2FzdC1pbicsIHRoaXMucHJvcHMudHlwZSl9ID5cblx0XHRcdFx0e3RoaXMucHJvcHMuY29udGVudH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VG9hc3Q6IFRvYXN0LFxuXHR0b2FzdDogem4uQ2xhc3Moe1xuXHRcdHN0YXRpYzogdHJ1ZSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0dGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwienItcG9wdXAtdG9hc3QtY29udGFpbmVyXCIgfSk7XG5cdFx0XHR9LFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKHR5cGUsIGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0dmFyIF9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0UmVhY3RET00ucmVuZGVyKDxUb2FzdCB0eXBlPXt0eXBlfSBjb250ZW50PXtjb250ZW50fSBkZWxheT17ZGVsYXl9IC8+LCBfZG9tKTtcblx0XHRcdFx0dGhpcy5fZG9tLmFwcGVuZENoaWxkKF9kb20pO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ3N1Y2Nlc3MnLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9LFxuXHRcdFx0d2FybmluZzogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3Blbignd2FybmluZycsIGNvbnRlbnQsIGRlbGF5KTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKGNvbnRlbnQsIGRlbGF5KXtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3BlbignZGFuZ2VyJywgY29udGVudCwgZGVsYXkpO1xuXHRcdFx0fSxcblx0XHRcdGluZm86IGZ1bmN0aW9uIChjb250ZW50LCBkZWxheSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wZW4oJ2luZm8nLCBjb250ZW50LCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVG9vbHRpcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVG9vbHRpcCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFycm93Q2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpO1xuXHR9LFxuXHRmaXhQb3NpdGlvbjogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0aWYoIXRhcmdldCl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpeFBvc2l0aW9uIHRhcmdldCBpcyBudWxsLicpO1xuXHRcdH1cblx0XHR2YXIgX2RvbVdpZHRoID0gdGhpcy5fZG9tLm9mZnNldFdpZHRoLFxuXHRcdFx0X2RvbUhlaWdodCA9IHRoaXMuX2RvbS5vZmZzZXRIZWlnaHQsXG5cdFx0XHRfdGFyZ2V0ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG5cdFx0XHRfbGVmdCA9IG51bGwsXG5cdFx0XHRfdG9wID0gbnVsbCxcblx0XHRcdF9jbGFzc05hbWUgPSAnJztcblxuXHRcdGlmKChfdGFyZ2V0LnggKyBfZG9tV2lkdGgpID4gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCl7XG5cdFx0XHRfbGVmdCA9IF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGg7XG5cdFx0fWVsc2Uge1xuXHRcdFx0X2xlZnQgPSBfdGFyZ2V0LnggKyAoX3RhcmdldC53aWR0aCAtIF9kb21XaWR0aCkgLyAyO1xuXHRcdH1cblxuXHRcdGlmKChfdGFyZ2V0LnkgKyBfZG9tSGVpZ2h0KSA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KXtcblx0XHRcdF90b3AgPSBfdGFyZ2V0LnkgLSBfZG9tSGVpZ2h0IC0gMTY7XG5cdFx0XHRfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi1ib3R0b20nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdG9wID0gX3RhcmdldC55ICsgX3RhcmdldC5oZWlnaHQgKyAxNjtcblx0XHRcdF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLXRvcCc7XG5cdFx0fVxuXG5cdFx0aWYoX2xlZnQ8MCl7XG5cdFx0XHRfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi1sZWZ0Jztcblx0XHRcdF9sZWZ0ID0gX3RhcmdldC54ICsgX3RhcmdldC53aWR0aCArIDQ7XG5cdFx0XHRfdG9wID0gX3RhcmdldC55ICsgNDtcblx0XHR9XG5cblx0XHR0aGlzLl9kb20uc3R5bGUudG9wID0gX3RvcCArICdweCc7XG5cdFx0dGhpcy5fZG9tLnN0eWxlLmxlZnQgPSBfbGVmdCArICdweCc7XG5cdFx0X2NsYXNzTmFtZSAmJiB0aGlzLl9kb20uY2xhc3NMaXN0LmFkZChfY2xhc3NOYW1lKTtcblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRpZighdGhpcy5fX2lzTW91bnRlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZihfZG9tICYmIF9kb20ucGFyZW50Tm9kZSl7XG5cdFx0XHRfZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cdFx0aWYoem4uaXMoY2FsbGJhY2ssICdmdW5jdGlvbicpKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC10b29sdGlwIHpyLWFycm93IHpyLWFycm93LWNvbG9yLWJsYWNrIHpyLWFycm93LXBsYWNlbWVudC1jZW50ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNvbnRlbnR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFRvb2x0aXA6IFRvb2x0aXAsXG5cdHRvb2x0aXA6IHpuLkNsYXNzKHtcblx0XHRzdGF0aWM6IHRydWUsXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInpyLXBvcHVwLXRvb2x0aXAtY29udGFpbmVyXCIgfSk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9fb25XaW5kb3dNb3VzZU92ZXIuYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9fb25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXHRcdFx0fSxcblx0XHRcdF9fb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHR0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5yZXNpemluZycpO1xuXHRcdFx0fSxcblx0XHRcdF9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWU6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdFx0XHRpZih0YXJnZXQpe1xuXHRcdFx0XHRcdGlmKHRhcmdldC50YWdOYW1lID09ICdCT0RZJyB8fCB0YXJnZXQudGFnTmFtZSA9PSAnSFRNTCcpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYodGFyZ2V0LmdldEF0dHJpYnV0ZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXpyLXBvcHVwLXRvb2x0aXAnKSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS16ci1wb3B1cC10b29sdGlwJyk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfX29uV2luZG93TW91c2VPdmVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdFx0XHR2YXIgX3RhcmdldCA9IGV2ZW50LnRhcmdldCxcblx0XHRcdFx0XHRfdmFsdWUgPSB0aGlzLl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUoX3RhcmdldCk7XG5cdFx0XHRcdGlmKF90YXJnZXQgJiYgX3ZhbHVlKXtcblx0XHRcdFx0XHRpZih0aGlzLl90b29sdGlwICYmIHRoaXMuX3Rvb2x0aXAucHJvcHMudGFyZ2V0ICE9PSBfdGFyZ2V0KXtcblx0XHRcdFx0XHRcdHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnJlbmRlcihfdmFsdWUsIHsgdGFyZ2V0OiBfdGFyZ2V0IH0pO1xuXHRcdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKXtcblx0XHRcdFx0aWYodGhpcy5fdG9vbHRpcCl7XG5cdFx0XHRcdFx0dGhpcy5fdG9vbHRpcC5kZXN0cm95KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fdG9vbHRpcCA9IFJlYWN0RE9NLnJlbmRlcig8VG9vbHRpcCB7Li4ub3B0aW9uc30gY29udGVudD17Y29udGVudH0gLz4sIHRoaXMuX2RvbSk7XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0XHRcdGlmKHRoaXMuX3Rvb2x0aXApe1xuXHRcdFx0XHRcdGlmKHpuLmlzKGNhbGxiYWNrLCAnc3RyaW5nJykgJiYgcHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKSB7XG5cdFx0XHRcdFx0XHR6bi5kZWJ1ZyhjYWxsYmFjayk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tKTtcblx0XHRcdFx0XHR0aGlzLl90b29sdGlwLmRlc3Ryb3koY2FsbGJhY2spO1xuXHRcdFx0XHRcdHRoaXMuX3Rvb2x0aXAgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9XG5cdH0pXG59OyIsIm1vZHVsZS5leHBvcnRzID0gem4uZGVlcEFzc2lnbnMoXG4gICAgeyB9LCBcbiAgICByZXF1aXJlKCcuL0FsZXJ0JyksIFxuICAgIHJlcXVpcmUoJy4vRGlhbG9nJyksXG4gICAgcmVxdWlyZSgnLi9Ecm9wZG93bicpLFxuICAgIHJlcXVpcmUoJy4vTG9hZGVyJyksXG4gICAgcmVxdWlyZSgnLi9Nb2RhbCcpLFxuICAgIHJlcXVpcmUoJy4vTm90aWZpZXInKSxcbiAgICByZXF1aXJlKCcuL1BvcG92ZXInKSxcbiAgICByZXF1aXJlKCcuL1RvYXN0JyksXG4gICAgcmVxdWlyZSgnLi9Ub29sdGlwJylcbik7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=