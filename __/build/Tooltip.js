"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var ReactDOM = znui.ReactDOM || require('react-dom');

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
          if (zn.is(callback, 'string') && process && process.env && process.env.NODE_ENV == 'development') {//zn.debug(callback);
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