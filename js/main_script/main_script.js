/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5039:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('[data-anim="item"]')) {
    var animItems = document.querySelectorAll('[data-anim="item"]');

    if (animItems.length > 0) {
      var animOnScroll = function animOnScroll() {
        animItems.forEach(function (item) {
          var itemHeight = item.offsetHeight;
          var itemOffset = offset(item).top;
          var animStart = 2;
          var itemPoint = window.innerHeight - itemHeight / animStart;

          if (itemHeight > window.innerHeight) {
            itemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          if (pageYOffset > itemOffset - itemPoint && pageYOffset < itemOffset + itemHeight && !item.classList.contains('is-animate')) {
            item.classList.add('is-animate');
          }
        });
      };

      var offset = function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        };
      };

      window.addEventListener('scroll', animOnScroll);
      setTimeout(function () {
        animOnScroll();
      }, 300);
    }
  }
});

/***/ }),

/***/ 1676:
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

addEventListener('DOMContentLoaded', function () {
  var smoothLinks = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(smoothLinks),
      _step;

  try {
    var _loop = function _loop() {
      var smoothLink = _step.value;
      smoothLink.addEventListener('click', function (e) {
        var id = smoothLink.getAttribute('href');
        e.preventDefault();

        if (id != "#") {
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
});

/***/ }),

/***/ 1021:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
;// CONCATENATED MODULE: ./src/components/cookies/scripts.js



var Cookies = /*#__PURE__*/function () {
  function Cookies() {
    (0,classCallCheck/* default */.Z)(this, Cookies);

    if (!Cookies.hasCookiesAcceptation()) {
      this.initComponent();
    }
  }

  (0,createClass/* default */.Z)(Cookies, [{
    key: "initComponent",
    value: function initComponent() {
      this.buildTemplate();
      this.attachEvents();
    }
  }, {
    key: "buildTemplate",
    value: function buildTemplate() {
      this.element = document.createElement('div');
      this.element.classList.add('cookies');
      this.element.innerHTML = "\n        <div class=\"cookies__inner\">\n            <div class=\"text-md cookies__text\">\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C cookie \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E</div>\n            <button class=\"button cookies__button jsCookiesButton\" type=\"button\">\n                <span>\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E</span>\n            </button>\n        </div>\n        ";
      document.body.append(this.element);
      setTimeout(function () {
        document.querySelector('.cookies').classList.add('is-show');
      }, 2000);
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this = this;

      document.querySelector('.jsCookiesButton').addEventListener('click', function (e) {
        Cookies.createEntity();
        document.querySelector('.cookies').classList.remove('is-show');
        setTimeout(function () {
          _this.element.remove();
        }, 750);
      });
    }
  }], [{
    key: "hasCookiesAcceptation",
    value: function hasCookiesAcceptation() {
      return window.localStorage.getItem('cookiesAcceptation');
    }
  }, {
    key: "createEntity",
    value: function createEntity() {
      window.localStorage.setItem('cookiesAcceptation', 'true');
    }
  }]);

  return Cookies;
}();

/* harmony default export */ var scripts = (Cookies);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(9755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./src/components/animations/scripts.js
var animations_scripts = __webpack_require__(5039);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js + 1 modules
var bootstrap_esm = __webpack_require__(4712);
;// CONCATENATED MODULE: ./src/components/modal/scripts.js

var modals = document.querySelectorAll('.modal');
var modalCallback = new bootstrap_esm/* Modal */.u_(document.querySelector('#callback')); // window.modals.list =  document.querySelectorAll('.modal');

document.addEventListener('DOMContentLoaded', function () {
  window.modal = {
    list: document.querySelectorAll('.modal')
  };

  for (var index = 0; index < window.modal.list.length; index++) {
    var item = window.modal.list[index];
    var id = item.getAttribute('id');
    var itemModal = new bootstrap_esm/* Modal */.u_(item);
    window.modal[id] = itemModal;
  }

  window.modal.list.forEach(function (e) {
    e.addEventListener('shown.bs.modal', function () {
      if (this.querySelector('[autofocus]')) {
        this.querySelector('[autofocus]').focus();
      }
    });
  }); // console.log(window.modal);
  // window.modal.callback.show()
  // window.modal.chanels.show()
  // window.modal.success.show()
  // window.modal.id.hide()
});
// EXTERNAL MODULE: ./node_modules/imask/esm/index.js + 21 modules
var esm = __webpack_require__(2647);
;// CONCATENATED MODULE: ./src/components/input/scripts.js
var _this = undefined;


var regexpPhone = new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
var regexpMail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
var phoneElement = document.querySelectorAll('.jsPhoneMask');
var mailElement = document.querySelectorAll('.jsMailMask');
var phoneMaskSettings = {
  mask: [{
    mask: '8 (000) 000-00-00',
    startsWith: '8',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '7',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '9',
    lazy: true
  }],
  dispatch: function dispatch(appended, dynamicMasked) {
    var number = (dynamicMasked.value + appended).replace(/\D/g, '');
    return dynamicMasked.compiledMasks.find(function (m) {
      return number.indexOf(m.startsWith) === 0;
    }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
  }
};

if (phoneElement.length > 0) {
  for (var i = 0; i < phoneElement.length; i++) {
    var mask = (0,esm/* default */.ZP)(phoneElement[i], phoneMaskSettings);
  }
}

var jsInput = document.querySelectorAll('.jsInput');

var _loop = function _loop(index) {
  var input = jsInput[index];

  input.onblur = function () {
    window.inputStatusRemove(input, 'focus');

    if (input.value != '') {
      window.inputStatusAdd(input, 'filled');
    }
  };

  input.onfocus = function () {
    window.inputStatusAdd(input, 'focus');
    window.inputStatusRemove(input, 'error');
    window.inputStatusRemove(input, 'filled');
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (input.value != '') {
      window.inputStatusAdd(input, 'filled');
    }
  });
};

for (var index = 0; index < jsInput.length; index++) {
  _loop(index);
}

var jsInputFile = document.querySelectorAll('.jsInputFile');

var _loop2 = function _loop2(_index) {
  var input = jsInputFile[_index];
  var field = input.querySelector('.jsInputFileField');
  var name = input.querySelector('.jsInputFileName');
  var del = input.querySelector('.jsInputFileDelete');
  del.addEventListener('click', function (e) {
    e.preventDefault();
    field.value == '';
    input.classList.remove('is-upload');
    name.innerHTML = '';
  });
  field.addEventListener('change', function () {
    if (field.files.length != 0) {
      input.classList.add('is-upload');
      name.innerHTML = this.files[0].name;
    } else {
      input.classList.remove('is-upload');
      name.innerHTML = '';
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    if (field.files.length != 0) {
      input.classList.add('is-upload');
      name.innerHTML = _this.files[0].name;
    }
  });
};

for (var _index = 0; _index < jsInputFile.length; _index++) {
  _loop2(_index);
} // let mailInputs = document.querySelectorAll('.jsMailMask');
// for (let index = 0; index < mailInputs.length; index++){
//     let input = mailInputs[index];
//     input.addEventListener('input', function(){
//         let result = window.InputCheckMask(input, 'mail');
//         console.log(result);
//     })
// }
// Input status
// Варианты:  'focus' ; 'error' ; 'fill' ; 'ok' ;
// window.inputStatusAdd(input, 'error')
// window.inputStatusRemove(input, 'error')


window.inputStatusAdd = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.add('is-' + status);
  } else if (input.closest('.input')) {
    input.closest('.input').classList.add('is-' + status);
  } else if (input.closest('.search')) {
    input.closest('.search').classList.add('is-' + status);
  }
};

window.inputStatusRemove = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.remove('is-' + status);
  } else if (input.closest('.input')) {
    input.closest('.input').classList.remove('is-' + status);
  } else if (input.closest('.search')) {
    input.closest('.search').classList.remove('is-' + status);
  }
}; // Input masks
// Варианты:  'mail' ; 'phone'
// window.InputCheckMask(input, 'mail')


window.InputCheckMask = function (input, type) {
  if (type === 'mail') {
    // console.log('mail');
    return regexpMail.test(input.value);
  }

  if (type === 'phone') {
    // console.log('phone');
    return regexpPhone.test(input.value);
  }
};

window.runMask = function () {
  var phoneElement = document.querySelectorAll('.jsPhoneMask');
  var phoneMaskSettings = {
    mask: [{
      mask: '8 (000) 000-00-00',
      startsWith: '8',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '7',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '9',
      lazy: true
    }],
    dispatch: function dispatch(appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');
      return dynamicMasked.compiledMasks.find(function (m) {
        return number.indexOf(m.startsWith) === 0;
      }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
    }
  };

  if (phoneElement.length > 0) {
    for (var _i = 0; _i < phoneElement.length; _i++) {
      var _mask = (0,esm/* default */.ZP)(phoneElement[_i], phoneMaskSettings);
    }
  }
}; // window.runMask() перезапуск маски
// EXTERNAL MODULE: ./src/components/link/scripts.js
var link_scripts = __webpack_require__(1676);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/gator/gator.js
var gator = __webpack_require__(4140);
var gator_default = /*#__PURE__*/__webpack_require__.n(gator);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 23 modules
var es = __webpack_require__(1260);
;// CONCATENATED MODULE: ./src/components/validator/services.js

var MSG_LETTERS = 'Поле не может содержать цифры';
var MSG_REQUIRED = 'Поле обязательно для заполнения';
var MSG_TEXT = 'Поле не должно содержать цифры';
var MSG_TEXT_MIN = 'Значение не может быть таким коротким';
var MSG_TEXT_MAX = 'Значение не может быть таким длинным';
var MSG_PHONE = 'Телефон заполнен не верно';
var MSG_EMAIL = 'Email заполнен не верно';
var MSG_NUMBER = 'Поле должно содержать цифры';
var MSG_NUMBER_MIN = 'Значение не может быть меньше';
var MSG_NUMBER_MAX = 'Значение не может быть больше';

var validateLetters = function validateLetters(value, min, max) {
  var lettersRegExp = /^[A-ZА-Яa-zа-я\s]*$/;
  var scheme = es/* string */.Z_().trim().required(MSG_REQUIRED).matches(lettersRegExp, MSG_LETTERS).min(min, MSG_TEXT_MIN).max(max, MSG_TEXT_MAX);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validateText = function validateText(value, min, max) {
  var scheme = es/* string */.Z_(MSG_TEXT).trim().required(MSG_REQUIRED).min(min, MSG_TEXT_MIN).max(max, MSG_TEXT_MAX);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validatePhone = function validatePhone(value) {
  var phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
  var scheme = es/* string */.Z_().trim().required(MSG_REQUIRED).matches(phoneRegExp, MSG_PHONE);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validateEmail = function validateEmail(value) {
  var scheme = es/* string */.Z_(MSG_TEXT).trim().required(MSG_REQUIRED).email(MSG_EMAIL);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validateNumber = function validateNumber(value, min, max) {
  var scheme = es/* number */.Rx(MSG_NUMBER).required(MSG_REQUIRED).min(min, MSG_NUMBER_MIN).max(max, MSG_NUMBER_MAX);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validateCheckbox = function validateCheckbox(value) {
  var scheme = es/* boolean */.O7().oneOf([true]);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validatorServices = {
  validateLetters: validateLetters,
  validateText: validateText,
  validatePhone: validatePhone,
  validateEmail: validateEmail,
  validateNumber: validateNumber,
  validateCheckbox: validateCheckbox
};
/* harmony default export */ var services = (validatorServices);
;// CONCATENATED MODULE: ./src/components/validator/view.js
var renderField = function renderField(validationState, node, invalidClass) {
  if (validationState === 'valid') {
    node.classList.remove(invalidClass);
  }

  if (validationState === 'invalid') {
    node.classList.add(invalidClass);
  }
};

var renderError = function renderError(validationState, node, visibilityClass) {
  var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  if (validationState === 'valid') {
    node.classList.remove(visibilityClass);
    node.textContent = '';
  }

  if (validationState === 'invalid') {
    node.classList.add(visibilityClass);
    node.textContent = message;
  }
};

var validatorView = {
  renderField: renderField,
  renderError: renderError
};
/* harmony default export */ var view = (validatorView);
;// CONCATENATED MODULE: ./src/components/formValidator/init.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var INVALID_CLASS = 'form__field--invalid';
var ERROR_VISIBILITY_CLASS = 'form__error--visible';
var VALIDATION_SERVICES_MAP = {
  letters: function letters(_ref) {
    var value = _ref.value,
        min = _ref.min,
        max = _ref.max;
    return services.validateLetters(value, min, max);
  },
  number: function number(_ref2) {
    var value = _ref2.value,
        min = _ref2.min,
        max = _ref2.max;
    return services.validateNumber(value, min, max);
  },
  text: function text(_ref3) {
    var value = _ref3.value,
        min = _ref3.min,
        max = _ref3.max;
    return services.validateText(value, min, max);
  },
  phone: function phone(_ref4) {
    var value = _ref4.value;
    return services.validatePhone(value);
  },
  email: function email(_ref5) {
    var value = _ref5.value;
    return services.validateEmail(value);
  },
  check: function check(_ref6) {
    var value = _ref6.value;
    return services.validateCheckbox(value);
  }
};

var validateField = function validateField(input) {
  var inputBox = input.closest('[data-entity="v-field-box"]');
  var inputError = inputBox.querySelector('[data-entity="v-field-error"]');
  var inputValue = input.type !== 'checkbox' ? input.value : input.checked;
  var validator = {
    name: input.dataset.validator,
    options: {
      min: +input.dataset.min || 2,
      max: +input.dataset.max || 200
    }
  };
  var validatorName = validator.name,
      validatorOptions = validator.options;
  var validationService = VALIDATION_SERVICES_MAP[validatorName];
  var validationState = validationService(_objectSpread({
    value: inputValue
  }, validatorOptions));
  view.renderField(validationState, inputBox, INVALID_CLASS);

  if (inputError) {
    view.renderError(validationState, inputError, ERROR_VISIBILITY_CLASS, 'Поле заполнено некорректно');
  }

  return validationState;
};

var validateForm = function validateForm(form) {
  var formValidationState = 'idle';
  var fields = Array.from(form.querySelectorAll('[data-entity="v-field"]'));
  fields.forEach(function (input) {
    var fieldValidationState = validateField(input);

    if (fieldValidationState === 'invalid') {
      formValidationState = 'invalid';
    }
  });
  return formValidationState;
};

var registerFormValidator = function registerFormValidator() {
  if (window.spiks) {
    window.spiks.FormManager = {
      attachEvents: function attachEvents(formNode) {
        gator_default()(formNode).on('input', '[data-entity="v-field"]', function (_ref7) {
          var target = _ref7.target;
          validateField(target);
        });
      },
      validate: function validate(formNode) {
        return validateForm(formNode) !== 'invalid';
      }
    };
  }
};

/* harmony default export */ var formValidator_init = (registerFormValidator);
;// CONCATENATED MODULE: ./src/init.js




 // import '@components/preloader/scripts';





var init = function init() {
  __webpack_require__.g.spiks = {};
  new scripts();
  formValidator_init();
  __webpack_require__.g.$ = (jquery_default());
};

/* harmony default export */ var src_init = (init);
;// CONCATENATED MODULE: ./src/script.js

src_init();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	!function() {
/******/ 		__webpack_require__.j = 940;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			940: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmarkup_starter_kit"] = self["webpackChunkmarkup_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(1021); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main_script.js.map