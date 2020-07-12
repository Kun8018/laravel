webpackJsonp([1],{

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1087)
/* script */
var __vue_script__ = __webpack_require__(1100)
/* template */
var __vue_template__ = __webpack_require__(1101)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e2ac97c", Component.options)
  } else {
    hotAPI.reload("data-v-3e2ac97c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
  }
});

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a-form",
    { attrs: { "label-col": _vm.labelCol, "wrapper-col": _vm.wrapperCol } },
    [
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Fail",
            "validate-status": "error",
            help: "Should be combination of numbers & alphabets"
          }
        },
        [
          _c("a-input", {
            attrs: { id: "error", placeholder: "unavailable choice" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        { attrs: { label: "Warning", "validate-status": "warning" } },
        [_c("a-input", { attrs: { id: "warning", placeholder: "Warning" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Validating",
            "has-feedback": "",
            "validate-status": "validating",
            help: "The information is being validated..."
          }
        },
        [
          _c("a-input", {
            attrs: {
              id: "validating",
              placeholder: "I'm the content is being validated"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Success",
            "has-feedback": "",
            "validate-status": "success"
          }
        },
        [
          _c("a-input", {
            attrs: { id: "success", placeholder: "I'm the content" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Warning",
            "has-feedback": "",
            "validate-status": "warning"
          }
        },
        [_c("a-input", { attrs: { id: "warning2", placeholder: "Warning" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Fail",
            "has-feedback": "",
            "validate-status": "error",
            help: "Should be combination of numbers & alphabets"
          }
        },
        [
          _c("a-input", {
            attrs: { id: "error2", placeholder: "unavailable choice" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Success",
            "has-feedback": "",
            "validate-status": "success"
          }
        },
        [_c("a-date-picker", { staticStyle: { width: "100%" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Warning",
            "has-feedback": "",
            "validate-status": "warning"
          }
        },
        [_c("a-time-picker", { staticStyle: { width: "100%" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Error",
            "has-feedback": "",
            "validate-status": "error"
          }
        },
        [
          _c(
            "a-select",
            { attrs: { "default-value": "1" } },
            [
              _c("a-select-option", { attrs: { value: "1" } }, [
                _vm._v("\n        Option 1\n      ")
              ]),
              _vm._v(" "),
              _c("a-select-option", { attrs: { value: "2" } }, [
                _vm._v("\n        Option 2\n      ")
              ]),
              _vm._v(" "),
              _c("a-select-option", { attrs: { value: "3" } }, [
                _vm._v("\n        Option 3\n      ")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Validating",
            "has-feedback": "",
            "validate-status": "validating",
            help: "The information is being validated..."
          }
        },
        [_c("a-cascader", { attrs: { "default-value": ["1"], options: [] } })],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        { staticStyle: { "margin-bottom": "0" }, attrs: { label: "inline" } },
        [
          _c(
            "a-form-item",
            {
              style: { display: "inline-block", width: "calc(50% - 12px)" },
              attrs: {
                "validate-status": "error",
                help: "Please select the correct date"
              }
            },
            [_c("a-date-picker", { staticStyle: { width: "100%" } })],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              style: {
                display: "inline-block",
                width: "24px",
                textAlign: "center"
              }
            },
            [_vm._v("\n      -\n    ")]
          ),
          _vm._v(" "),
          _c(
            "a-form-item",
            { style: { display: "inline-block", width: "calc(50% - 12px)" } },
            [_c("a-date-picker", { staticStyle: { width: "100%" } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Success",
            "has-feedback": "",
            "validate-status": "success"
          }
        },
        [_c("a-input-number", { staticStyle: { width: "100%" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Success",
            "has-feedback": "",
            "validate-status": "success"
          }
        },
        [
          _c("a-input", {
            attrs: { "allow-clear": "", placeholder: "with allowClear" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Warning",
            "has-feedback": "",
            "validate-status": "warning"
          }
        },
        [
          _c("a-input-password", {
            attrs: { placeholder: "with input password" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-form-item",
        {
          attrs: {
            label: "Error",
            "has-feedback": "",
            "validate-status": "error"
          }
        },
        [
          _c("a-input-password", {
            attrs: {
              "allow-clear": "",
              placeholder: "with input password and allowClear"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e2ac97c", module.exports)
  }
}

/***/ })

});