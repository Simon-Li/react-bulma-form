(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("mobx"), require("mobx-react"));
	else if(typeof define === 'function' && define.amd)
		define("buForm", ["react", "mobx", "mobx-react"], factory);
	else if(typeof exports === 'object')
		exports["buForm"] = factory(require("react"), require("mobx"), require("mobx-react"));
	else
		root["buForm"] = factory(root["react"], root["mobx"], root["mobx-react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _mobx = __webpack_require__(2);

var _mobxReact = __webpack_require__(3);

var _datepicker = __webpack_require__(4);

var _datepicker2 = _interopRequireDefault(_datepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * label component wrapper
 * @param {string} label Label
 * @param {string} size Size
 * @returns {object} label node
 */
function Label(_ref) {
    var label = _ref.label,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 'is-normal' : _ref$size,
        alignment = _ref.alignment;

    if (alignment === 'is-horizontal') {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                { className: 'field-label label ' + size },
                label
            )
        );
    }

    return _react2.default.createElement(
        'label',
        { className: 'label ' + size },
        label
    );
}

var BuForm = (0, _mobxReact.observer)(function (_React$Component) {
    _inherits(_BuForm, _React$Component);

    function _BuForm(props) {
        _classCallCheck(this, _BuForm);

        var _this = _possibleConstructorReturn(this, (_BuForm.__proto__ || Object.getPrototypeOf(_BuForm)).call(this, props));

        _this.data = _this.props.data;
        _this.setPropValue = (0, _mobx.action)(function (prop, value) {
            _this.data[prop] = value;
        });
        return _this;
    }

    _createClass(_BuForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.dpInstances = [];

            var flattened = this.props.fields.reduce(function (prev, curr) {
                return prev.concat(curr);
            }, []);
            var datepickers = flattened.filter(function (elem) {
                return elem.type === 'datepicker';
            });

            datepickers.forEach(function (elem) {
                var domNode = document.getElementsByName(elem.name)[0];
                var dp = new _datepicker2.default(domNode, {
                    onSelect: function onSelect(val) {
                        return _this2.setPropValue(elem.name, val);
                    },
                    dataFormat: 'yyyy/mm/dd'
                });
                _this2.dpInstances.push(dp);
            });

            if (this.props.debug) {
                (0, _mobx.autorun)(function () {
                    console.log('[Mobx] data store', (0, _mobx.toJS)(_this2.data)); // eslint-disable-line no-console
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.dpInstances.length > 0) {
                this.dpInstances.forEach(function (dp) {
                    return dp && dp.destroy();
                });
            }
        }
    }, {
        key: 'BmText',
        value: function BmText(element) {
            var _this3 = this;

            var name = element.name,
                label = element.label,
                css = element.css,
                placeholder = element.placeholder;

            return [_react2.default.createElement(Label, { key: '1', label: label, alignment: this.props.alignment }), _react2.default.createElement(
                'div',
                { key: '2', className: 'field-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement('input', { name: name, className: 'input ' + css, type: 'text', placeholder: placeholder,
                            value: this.data[name], onChange: function onChange(ev) {
                                return _this3.setPropValue(name, ev.target.value);
                            } })
                    )
                )
            )];
        }
    }, {
        key: 'BmCheck',
        value: function BmCheck(element) {
            var _this4 = this;

            var name = element.name,
                label = element.label,
                css = element.css,
                options = element.options;

            return [_react2.default.createElement(Label, { key: '1', label: label, alignment: this.props.alignment }), _react2.default.createElement(
                'div',
                { key: '2', className: 'field-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        options.map(function (option, key) {
                            return _react2.default.createElement(
                                'label',
                                { key: key, className: 'checkbox' },
                                _react2.default.createElement('input', { name: name, className: css, type: 'checkbox',
                                    value: _this4.data[option.name],
                                    checked: _this4.data[option.name],
                                    onChange: function onChange(ev) {
                                        return _this4.setPropValue(option.name, ev.target.checked);
                                    } }),
                                option.label
                            );
                        })
                    )
                )
            )];
        }
    }, {
        key: 'BmSelect',
        value: function BmSelect(element) {
            var _this5 = this;

            var name = element.name,
                label = element.label,
                css = element.css,
                options = element.options;


            return [_react2.default.createElement(Label, { key: '1', label: label, alignment: this.props.alignment }), _react2.default.createElement(
                'div',
                { key: '2', className: 'field-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement(
                            'div',
                            { className: 'select is-fullwidth' },
                            _react2.default.createElement(
                                'select',
                                { name: name, className: css, value: this.data[name], onChange: function onChange(ev) {
                                        return _this5.setPropValue(name, ev.target.value);
                                    } },
                                options.map(function (option, key) {
                                    return _react2.default.createElement(
                                        'option',
                                        { key: key, value: option.value },
                                        option.label
                                    );
                                })
                            )
                        )
                    )
                )
            )];
        }
    }, {
        key: 'BmRadio',
        value: function BmRadio(element) {
            var _this6 = this;

            var name = element.name,
                label = element.label,
                css = element.css,
                options = element.options;


            return [_react2.default.createElement(Label, { key: '1', label: label, size: '', alignment: this.props.alignment }), _react2.default.createElement(
                'div',
                { key: '2', className: 'field-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        options.map(function (option, key) {
                            return _react2.default.createElement(
                                'label',
                                { key: key, className: 'radio' },
                                _react2.default.createElement('input', { name: name, className: css, type: 'radio',
                                    value: option.value,
                                    checked: _this6.data[name] === option.value,
                                    onChange: function onChange() {
                                        return _this6.setPropValue(name, option.value);
                                    } }),
                                option.label
                            );
                        })
                    )
                )
            )];
        }
    }, {
        key: 'BmDatePicker',
        value: function BmDatePicker(element) {
            var name = element.name,
                label = element.label,
                css = element.css;


            return [_react2.default.createElement(Label, { key: '1', label: label, alignment: this.props.alignment }), _react2.default.createElement(
                'div',
                { key: '2', className: 'field-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement('input', { name: name, className: 'input ' + css, type: 'text' })
                    )
                )
            )];
        }
    }, {
        key: 'BmTextarea',
        value: function BmTextarea(element) {
            var _this7 = this;

            var name = element.name,
                label = element.label,
                css = element.css,
                placeholder = element.placeholder;


            return [_react2.default.createElement(Label, { key: '1', label: label, alignment: this.props.alignment }), _react2.default.createElement(
                'div',
                { key: '2', className: 'field-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement('textarea', { name: name, className: 'textarea ' + css, type: 'text', placeholder: placeholder,
                            value: this.data[name], onChange: function onChange(ev) {
                                return _this7.setPropValue(name, ev.target.value);
                            } })
                    )
                )
            )];
        }
    }, {
        key: 'genElem',
        value: function genElem(elem) {
            var _this8 = this;

            /**
             * element wrapper
             * @param {object} element Element
             * @returns {object} element vdom
             */
            var elemWrapper = function elemWrapper(element) {
                switch (element.type) {
                    case 'text':
                        return _this8.BmText(element);
                    case 'checkbox':
                        return _this8.BmCheck(element);
                    case 'select':
                        return _this8.BmSelect(element);
                    case 'radio':
                        return _this8.BmRadio(element);
                    case 'datepicker':
                        return _this8.BmDatePicker(element);
                    case 'textarea':
                        return _this8.BmTextarea(element);
                    default:
                        break;
                }
                throw new Error('Unrecognized element type!');
            };

            return _react2.default.createElement(
                'div',
                { className: 'field ' + (this.props.alignment || '') },
                elemWrapper(elem)
            );
        }
    }, {
        key: 'genRow',
        value: function genRow(row) {
            var _this9 = this;

            return row.map(function (elem, key) {
                return _react2.default.createElement(
                    'div',
                    { key: key, className: 'column' },
                    _this9.genElem(elem)
                );
            });
        }
    }, {
        key: 'genForm',
        value: function genForm(fields) {
            var _this10 = this;

            return fields.map(function (row, key) {
                return _react2.default.createElement(
                    'div',
                    { key: key, className: 'columns is-2' },
                    _this10.genRow(row)
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                fields = _props.fields;

            return _react2.default.createElement(
                'form',
                { name: name, onSubmit: this.props.onSubmit },
                this.genForm(fields)
            );
        }
    }]);

    return _BuForm;
}(_react2.default.Component));

exports.default = BuForm;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable */

var datepicker_langs = {
  en: {
    weekStart: 1,
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  fr: {
    weekStart: 1,
    previousMonth: 'Mois précédent',
    nextMonth: 'Mois suivant',
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthsShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Auo', 'Sep', 'Oct', 'Nov', 'Déc'],
    weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  },
  de: {
    weekStart: 1,
    previousMonth: 'Vorheriger Monat',
    nextMonth: 'Nächster Monat',
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthsShort: ['Jan', 'Febr', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'],
    weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  },
  tr: {
    weekStart: 1,
    previousMonth: 'Önceki Ay',
    nextMonth: 'Gelecek Ay',
    months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    monthsShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    weekdays: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    weekdaysShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
  },
  it: {
    weekStart: 1,
    previousMonth: 'Mese Precedente',
    nextMonth: 'Prossimo Mese',
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthsShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
  },
  th: {
    weekStart: 1,
    previousMonth: 'เดือนก่อนหน้า',
    nextMonth: 'เดือนถัดไป',
    months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    monthsShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    weekdays: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
    weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  },
  hr: {
    weekStart: 2,
    previousMonth: 'Prošli mjesec',
    nextMonth: 'Slijedeći mjesec',
    months: ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'],
    monthsShort: ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro'],
    weekdays: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
    weekdaysShort: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']
  },
  sr: {
    weekStart: 2,
    previousMonth: 'Prošli mesec',
    nextMonth: 'Sledeći mesec',
    months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
    monthsShort: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
    weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
    weekdaysShort: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub']
  }
};

var MOUSE_EVENTS = ['click', 'touchstart'];

var DatePicker = function () {
  function DatePicker(selector, options) {
    _classCallCheck(this, DatePicker);

    if (!options) options = {};

    var defaultOptions = {
      startDate: new Date(),
      // the default data format `field` value
      dataFormat: 'yyyy/mm/dd',
      // internationalization
      lang: 'en',
      overlay: false,
      closeOnSelect: true,
      // callback function
      onSelect: null,
      onOpen: null,
      onClose: null,
      onRender: null
    };

    this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    this.parent = this.element.parentElement;
    this.lang = typeof datepicker_langs[this.lang] !== 'undefined' ? this.lang : 'en';

    this.options = Object.assign({}, defaultOptions, options);

    this.month = this.options.startDate.getMonth(), this.year = this.options.startDate.getFullYear(), this.open = false;

    this.build();
  }

  _createClass(DatePicker, [{
    key: 'build',
    value: function build() {
      var _this2 = this;

      var _this = this;

      this.datePickerContainer = document.createElement('div');
      this.datePickerContainer.id = 'datePicker' + new Date().getTime();
      if (this.options.overlay) {
        this.datePickerContainer.classList.add('modal');
      }
      this.datePickerContainer.classList.add('datepicker');

      this.calendarContainer = document.createElement('div');
      this.calendarContainer.id = 'datePicker' + new Date().getTime();
      this.calendarContainer.classList.add('calendar');
      this.renderCalendar();

      if (this.options.overlay) {
        var datePickerOverlay = document.createElement('div');
        datePickerOverlay.classList.add('modal-background');
        this.datePickerContainer.appendChild(datePickerOverlay);
      }

      var modalClose = document.createElement('button');
      modalClose.className = 'modal-close';
      MOUSE_EVENTS.forEach(function (event) {
        modalClose.addEventListener(event, function (e) {
          e.preventDefault();

          _this.datePickerContainer.classList.remove('is-active');
        });
      });

      this.datePickerContainer.appendChild(this.calendarContainer);
      this.datePickerContainer.appendChild(modalClose);
      document.body.appendChild(this.datePickerContainer);

      MOUSE_EVENTS.forEach(function (event) {
        _this2.element.addEventListener(event, function (e) {
          e.preventDefault();

          if (_this.open) {
            _this.hide();
            _this.open = false;
          } else {
            _this.show();
            _this.open = true;
          }
        });
      });
    }

    /**
     * templating functions to abstract HTML rendering
     */

  }, {
    key: 'renderDayName',
    value: function renderDayName(day) {
      var abbr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      day += datepicker_langs[this.options.lang].weekStart;
      while (day >= 7) {
        day -= 7;
      }

      return abbr ? datepicker_langs[this.options.lang].weekdaysShort[day] : datepicker_langs[this.options.lang].weekdays[day];
    }
  }, {
    key: 'renderDay',
    value: function renderDay(day, month, year, isSelected, isToday, isDisabled, isEmpty, isBetween, isSelectedIn, isSelectedOut) {
      var _this = this;
      var newDayContainer = document.createElement('div');
      var newDayButton = document.createElement('button');

      newDayButton.classList.add('date-item');
      newDayButton.innerHTML = day;
      MOUSE_EVENTS.forEach(function (event) {
        newDayButton.addEventListener(event, function (e) {
          if (typeof _this.options.onSelect != 'undefined' && _this.options.onSelect != null && _this.options.onSelect) {
            _this.options.onSelect(new Date(year, month, day));
          }
          _this.element.value = _this.getFormatedDate(new Date(year, month, day), _this.options.dataFormat);
          if (_this.options.closeOnSelect) {
            _this.hide();
          }
        });
      });

      newDayContainer.classList.add('calendar-date');
      newDayContainer.appendChild(newDayButton);

      if (isDisabled) {
        newDayContainer.setAttribute('disabled', 'disabled');
      }
      if (isToday) {
        newDayContainer.classList.add('is-today');
      }
      if (isSelected) {
        newDayContainer.classList.add('is-active');
      }
      if (isBetween) {
        newDayContainer.classList.add('calendar-range');
      }
      if (isSelectedIn) {
        newDayContainer.classList.add('range-start');
      }
      if (isSelectedOut) {
        newDayContainer.classList.add('range-end');
      }

      return newDayContainer;
    }
  }, {
    key: 'renderNav',
    value: function renderNav(year, month) {
      var _this3 = this;

      var _this = this;
      var calendarNav = document.createElement('div');
      calendarNav.classList.add('calendar-nav');

      var previousButtonContainer = document.createElement('div');
      previousButtonContainer.classList.add('calendar-nav-left');
      this.previousYearButton = document.createElement('div');
      this.previousYearButton.classList.add('button');
      this.previousYearButton.classList.add('is-text');
      var previousButtonIcon = document.createElement('i');
      previousButtonIcon.classList.add('fa');
      previousButtonIcon.classList.add('fa-backward');
      this.previousYearButton.appendChild(previousButtonIcon);
      MOUSE_EVENTS.forEach(function (event) {
        _this3.previousYearButton.addEventListener(event, function (e) {
          e.preventDefault();

          _this.prevYear();
        });
      });
      previousButtonContainer.appendChild(this.previousYearButton);

      this.previousMonthButton = document.createElement('div');
      this.previousMonthButton.classList.add('button');
      this.previousMonthButton.classList.add('is-text');
      var previousMonthButtonIcon = document.createElement('i');
      previousMonthButtonIcon.classList.add('fa');
      previousMonthButtonIcon.classList.add('fa-chevron-left');
      this.previousMonthButton.appendChild(previousMonthButtonIcon);
      MOUSE_EVENTS.forEach(function (event) {
        _this3.previousMonthButton.addEventListener(event, function (e) {
          e.preventDefault();

          _this.prevMonth();
        });
      });
      previousButtonContainer.appendChild(this.previousMonthButton);

      var calendarTitle = document.createElement('div');
      calendarTitle.innerHTML = datepicker_langs[this.options.lang].months[month] + ' ' + year;

      var nextButtonContainer = document.createElement('div');
      nextButtonContainer.classList.add('calendar-nav-right');
      this.nextMonthButton = document.createElement('div');
      this.nextMonthButton.classList.add('button');
      this.nextMonthButton.classList.add('is-text');
      var nextMonthButtonIcon = document.createElement('i');
      nextMonthButtonIcon.classList.add('fa');
      nextMonthButtonIcon.classList.add('fa-chevron-right');
      this.nextMonthButton.appendChild(nextMonthButtonIcon);
      MOUSE_EVENTS.forEach(function (event) {
        _this3.nextMonthButton.addEventListener(event, function (e) {
          e.preventDefault();

          _this.nextMonth();
        });
      });
      nextButtonContainer.appendChild(this.nextMonthButton);
      this.nextYearButton = document.createElement('div');
      this.nextYearButton.classList.add('button');
      this.nextYearButton.classList.add('is-text');
      var nextYearButtonIcon = document.createElement('i');
      nextYearButtonIcon.classList.add('fa');
      nextYearButtonIcon.classList.add('fa-forward');
      this.nextYearButton.appendChild(nextYearButtonIcon);
      MOUSE_EVENTS.forEach(function (event) {
        _this3.nextYearButton.addEventListener('click', function (e) {
          e.preventDefault();

          _this.nextYear();
        });
      });
      nextButtonContainer.appendChild(this.nextYearButton);

      calendarNav.appendChild(previousButtonContainer);
      calendarNav.appendChild(calendarTitle);
      calendarNav.appendChild(nextButtonContainer);

      return calendarNav;
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var calendarHeader = document.createElement('div');
      calendarHeader.classList.add('calendar-header');

      for (var i = 0; i < 7; i++) {
        var newDay = document.createElement('div');
        newDay.classList.add('calendar-date');
        newDay.innerHTML = this.renderDayName(i, true);
        calendarHeader.appendChild(newDay);
      }

      return calendarHeader;
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      var calendarBody = document.createElement('div');
      calendarBody.classList.add('calendar-body');

      return calendarBody;
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      var now = new Date();

      var calendarNav = this.renderNav(this.year, this.month);
      var calendarHeader = this.renderHeader();
      var calendarBody = this.renderBody();

      this.calendarContainer.appendChild(calendarNav);
      this.calendarContainer.appendChild(calendarHeader);
      this.calendarContainer.appendChild(calendarBody);

      var days = this.getDaysInMonth(this.year, this.month),
          before = new Date(this.year, this.month, 1).getDay();

      if (typeof this.options.onRender != 'undefined' && this.options.onRender != null && this.options.onRender) {
        this.options.onRender(this);
      }

      if (datepicker_langs[this.options.lang].weekStart > 0) {
        before -= datepicker_langs[this.options.lang].weekStart;
        if (before < 0) {
          before += 7;
        }
      }

      var cells = days + before,
          after = cells;
      while (after > 7) {
        after -= 7;
      }

      cells += 7 - after;
      for (var i = 0; i < cells; i++) {
        var day = new Date(this.year, this.month, 1 + (i - before)),
            isBetween = false,
            isSelected = false,
            isSelectedIn = false,
            isSelectedOut = false,
            isToday = this.compareDates(day, now),
            isEmpty = i < before || i >= days + before,
            isDisabled = false;

        if (!isSelected) {
          isSelectedIn = false;
          isSelectedOut = false;
        }

        if (day.getMonth() !== this.month) {
          isDisabled = true;
        }

        calendarBody.appendChild(this.renderDay(day.getDate(), this.month, this.year, isSelected, isToday, isDisabled, isEmpty, isBetween, isSelectedIn, isSelectedOut));
      }
    }
  }, {
    key: 'prevMonth',
    value: function prevMonth() {
      this.month -= 1;
      this.adjustCalendar();
      this.renderCalendar();
    }
  }, {
    key: 'nextMonth',
    value: function nextMonth() {
      this.month += 1;
      this.adjustCalendar();
      this.renderCalendar();
    }
  }, {
    key: 'prevYear',
    value: function prevYear() {
      this.year -= 1;
      this.adjustCalendar();
      this.renderCalendar();
    }
  }, {
    key: 'nextYear',
    value: function nextYear() {
      this.year += 1;
      this.adjustCalendar();
      this.renderCalendar();
    }
  }, {
    key: 'show',
    value: function show() {
      if (typeof this.options.onOpen != 'undefined' && this.options.onOpen != null && this.options.onOpen) {
        this.options.onOpen(this);
      }
      this.datePickerContainer.classList.add('is-active');
      if (!this.options.overlay) {
        this.adjustPosition();
      }
      this.open = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.open = false;
      if (typeof this.options.onClose != 'undefined' && this.options.onClose != null && this.options.onClose) {
        this.options.onClose(this);
      }
      this.datePickerContainer.classList.remove('is-active');
    }
  }, {
    key: 'adjustCalendar',
    value: function adjustCalendar() {
      if (this.month < 0) {
        this.year -= Math.ceil(Math.abs(this.month) / 12);
        this.month += 12;
      }
      if (this.month > 11) {
        this.year += Math.floor(Math.abs(this.month) / 12);
        this.month -= 12;
      }
      this.calendarContainer.innerHTML = '';
      return this;
    }
  }, {
    key: 'adjustPosition',
    value: function adjustPosition() {
      var width = this.calendarContainer.offsetWidth,
          height = this.calendarContainer.offsetHeight,
          viewportWidth = window.innerWidth || document.documentElement.clientWidth,
          viewportHeight = window.innerHeight || document.documentElement.clientHeight,
          scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
          left,
          top,
          clientRect;

      if (typeof this.element.getBoundingClientRect === 'function') {
        clientRect = this.element.getBoundingClientRect();
        left = clientRect.left + window.pageXOffset;
        top = clientRect.bottom + window.pageYOffset;
      } else {
        left = this.element.offsetLeft;
        top = this.element.offsetTop + this.element.offsetHeight;
        while (this.element = this.element.offsetParent) {
          left += this.element.offsetLeft;
          top += this.element.offsetTop;
        }
      }

      this.calendarContainer.style.position = 'absolute';
      this.calendarContainer.style.left = left + 'px';
      this.calendarContainer.style.top = top + 'px';
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.calendarContainer.remove();
    }

    /**
     * Returns date according to passed format
     *
     * @param {Date}   dt     Date object
     * @param {String} format Format string
     *      d    - day of month
     *      dd   - 2-digits day of month
     *      D    - day of week
     *      m    - month number
     *      mm   - 2-digits month number
     *      M    - short month name
     *      MM   - full month name
     *      yy   - 2-digits year number
     *      yyyy - 4-digits year number
     */

  }, {
    key: 'getFormatedDate',
    value: function getFormatedDate(dt, format) {
      var items = {
        d: dt.getDate(),
        dd: dt.getDate(),
        D: dt.getDay(),
        m: dt.getMonth() + 1,
        mm: dt.getMonth() + 1,
        M: dt.getMonth(),
        MM: dt.getMonth(),
        yy: dt.getFullYear().toString().substr(-2),
        yyyy: dt.getFullYear()
      };

      items.dd < 10 && (items.dd = '0' + items.dd);
      items.mm < 10 && (items.mm = '0' + items.mm);
      items.D = datepicker_langs[this.options.lang].weekdays[items.D ? items.D - 1 : 6];
      items.M = datepicker_langs[this.options.lang].monthsShort[items.M];
      items.MM = datepicker_langs[this.options.lang].months[items.MM];

      return format.replace(/(?:[dmM]{1,2}|D|yyyy|yy)/g, function (m) {
        return typeof items[m] !== 'undefined' ? items[m] : m;
      });
    }

    /**
     * Returns true if date picker is visible now
     *
     * @returns {Boolean}
     */

  }, {
    key: 'isActive',
    value: function isActive() {
      return this.calendarContainer.classList.contains('is-active');
    }
  }, {
    key: 'isDate',
    value: function isDate(obj) {
      return (/Date/.test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime())
      );
    }
  }, {
    key: 'isLeapYear',
    value: function isLeapYear(year) {
      // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
  }, {
    key: 'getDaysInMonth',
    value: function getDaysInMonth(year, month) {
      return [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }
  }, {
    key: 'compareDates',
    value: function compareDates(a, b) {
      // weak date comparison (use setToStartOfDay(date) to ensure correct result)
      return a.getTime() === b.getTime();
    }
  }]);

  return DatePicker;
}();

exports.default = DatePicker;

/***/ })
/******/ ]);
});