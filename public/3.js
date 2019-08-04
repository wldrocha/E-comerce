(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/Auth/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/Auth/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "Register",
  data: function data() {
    var _this = this;

    return {
      valid: false,
      register: {
        email: '',
        name: '',
        password: '',
        reat_password: ''
      },
      rules: {
        email: [function (v) {
          return !!v || "E-mail is required";
        }, function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail must be valid";
        }],
        name: [function (v) {
          return !!v || 'last name is Required';
        }],
        password: [function (v) {
          return !!v || "Pass is required";
        }, function (v) {
          return v.length > 5 || "Min 6 characters";
        }],
        repeatPassword: [function (v) {
          return !!v || "Repeat Pass please";
        }, function (v) {
          return v.length > 5 || "Min 6 characters";
        }, function (v) {
          return v == _this.register.pass || "The password not matched";
        }]
      }
    };
  },
  methods: {
    login: function login() {
      this.$router.push("/login");
    },
    sendForm: function sendForm() {
      var _this2 = this;

      axios.post('/api/register', this.register).then(function (response) {
        // login user, store the token and redirect to dashboard
        console.log('exito');
        console.log(response);
        localStorage.setItem('token', response.data.access_token);

        _this2.$router.push('/');
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/Auth/register.vue?vue&type=template&id=b626010a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/Auth/register.vue?vue&type=template&id=b626010a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-layout",
        { attrs: { row: "" } },
        [
          _c(
            "v-flex",
            {
              staticClass: "ma-auto",
              attrs: { "align-self-center": "", "text-xs-center": "", lg5: "" }
            },
            [
              _c(
                "v-btn",
                {
                  staticClass: "light-blue darken-4 white--text",
                  on: { click: _vm.login }
                },
                [_vm._v("Login")]
              ),
              _vm._v(" "),
              _c("v-btn", [_vm._v("Sign Up")]),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "pa-5 mt-3 text-xs-center" },
                [
                  _c("h5", { staticClass: "mb-4 ml-3 headline" }, [
                    _vm._v("Enter your Data")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    {
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            {
                              staticClass: "mx-1",
                              attrs: { xs5: "", md6: "" }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email",
                                  rules: _vm.rules.email,
                                  name: "email",
                                  type: "email"
                                },
                                model: {
                                  value: _vm.register.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.register, "email", $$v)
                                  },
                                  expression: "register.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              staticClass: "mx-1",
                              attrs: { xs5: "", md6: "" }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Name",
                                  rules: _vm.rules.name,
                                  name: "email",
                                  type: "email"
                                },
                                model: {
                                  value: _vm.register.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.register, "name", $$v)
                                  },
                                  expression: "register.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              staticClass: "mx-1",
                              attrs: { xs5: "", md6: "" }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "pass",
                                  rules: _vm.rules.password,
                                  name: "pass",
                                  type: "password"
                                },
                                model: {
                                  value: _vm.register.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.register, "password", $$v)
                                  },
                                  expression: "register.password"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              staticClass: "mx-1",
                              attrs: { xs5: "", md6: "" }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Repeat pass",
                                  rules: _vm.rules.repeatPass,
                                  name: "pass",
                                  type: "password"
                                },
                                model: {
                                  value: _vm.register.reat_password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.register, "reat_password", $$v)
                                  },
                                  expression: "register.reat_password"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              staticClass: "text-xs-center",
                              attrs: { xs12: "" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "black white--text mt-5",
                                  attrs: { disabled: !_vm.valid },
                                  on: { click: _vm.sendForm }
                                },
                                [_vm._v("Iniciar Sesión")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Views/Auth/register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Views/Auth/register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_b626010a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=b626010a& */ "./resources/js/Views/Auth/register.vue?vue&type=template&id=b626010a&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/Views/Auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_b626010a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_b626010a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/Auth/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/Auth/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Views/Auth/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/Auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/Auth/register.vue?vue&type=template&id=b626010a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Views/Auth/register.vue?vue&type=template&id=b626010a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_b626010a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=b626010a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/Auth/register.vue?vue&type=template&id=b626010a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_b626010a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_b626010a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);