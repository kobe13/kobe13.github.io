(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%2FButton.tsx&shouldShowDefaultExample=false!./src/components/Button/README.md":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%2FButton.tsx&shouldShowDefaultExample=false!./src/components/Button/README.md ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nvar requireMap = {\n    '../HelloWorld/HelloWorld': __webpack_require__(/*! ../HelloWorld/HelloWorld */ \"./src/components/HelloWorld/HelloWorld.tsx\"),\n    'react': __webpack_require__(/*! react */ \"./node_modules/react/index.js\"),\n    './Button.tsx': __webpack_require__(/*! ./Button.tsx */ \"./src/components/Button/Button.tsx\")\n};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/react-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/react-styleguidist/lib/loaders/utils/client/requireInRuntime.js\").default;\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/react-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/react-styleguidist/lib/loaders/utils/client/evalInContext.js\").default;\nvar evalInContext = evalInContextBase.bind(null, \"const React$0 = require('react');\\nconst React = React$0.default || React$0;\\nconst Button$0 = require('./Button.tsx');\\nconst Button = Button$0.default || Button$0;\", requireInRuntime);\n\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': 'Basic example:'\n    },\n    {\n        'type': 'code',\n        'content': '<Button title=\"Click me\" onClick={() => alert(\\'Hello from the Button component!\\')}>\\n  Click me\\n</Button>',\n        'settings': {},\n        'evalInContext': evalInContext\n    },\n    {\n        'type': 'markdown',\n        'content': 'Disable example:'\n    },\n    {\n        'type': 'code',\n        'content': '<Button title=\"Click me\" disabled={true} onClick={() => alert(\\'Hello from the Button component!\\')}>\\n  Click me\\n</Button>',\n        'settings': {},\n        'evalInContext': evalInContext\n    },\n    {\n        'type': 'markdown',\n        'content': 'Example with a children:'\n    },\n    {\n        'type': 'code',\n        'content': 'import HelloWorld from \\'../HelloWorld/HelloWorld\\';\\n\\n<Button\\n  onClick={() => alert(\\'Hello from the Button component!\\')}\\n  title=\"Hello World\"\\n  children={<HelloWorld message=\"from the HelloWorld component\" />}\\n/>;',\n        'settings': {},\n        'evalInContext': evalInContext\n    }\n]\n\t\n\n//# sourceURL=webpack:///./src/components/Button/README.md?./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%252FButton.tsx&shouldShowDefaultExample=false");

/***/ }),

/***/ "./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=HelloWorld&file=.%2FHelloWorld.tsx&shouldShowDefaultExample=false!./src/components/HelloWorld/README.md":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=HelloWorld&file=.%2FHelloWorld.tsx&shouldShowDefaultExample=false!./src/components/HelloWorld/README.md ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nvar requireMap = {\n    '../../theme': __webpack_require__(/*! ../../theme */ \"./src/theme/index.ts\"),\n    'react': __webpack_require__(/*! react */ \"./node_modules/react/index.js\"),\n    './HelloWorld.tsx': __webpack_require__(/*! ./HelloWorld.tsx */ \"./src/components/HelloWorld/HelloWorld.tsx\")\n};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/react-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/react-styleguidist/lib/loaders/utils/client/requireInRuntime.js\").default;\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/react-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/react-styleguidist/lib/loaders/utils/client/evalInContext.js\").default;\nvar evalInContext = evalInContextBase.bind(null, \"const React$0 = require('react');\\nconst React = React$0.default || React$0;\\nconst HelloWorld$0 = require('./HelloWorld.tsx');\\nconst HelloWorld = HelloWorld$0.default || HelloWorld$0;\", requireInRuntime);\n\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': 'Basic example:'\n    },\n    {\n        'type': 'code',\n        'content': '<HelloWorld />',\n        'settings': {},\n        'evalInContext': evalInContext\n    },\n    {\n        'type': 'markdown',\n        'content': 'Example with props:'\n    },\n    {\n        'type': 'code',\n        'content': 'import { sdkTheme } from \\'../../theme\\';\\n\\n<HelloWorld message=\"John Doe\" background={sdkTheme.backgroundColor.alternativeColor} />;',\n        'settings': {},\n        'evalInContext': evalInContext\n    }\n]\n\t\n\n//# sourceURL=webpack:///./src/components/HelloWorld/README.md?./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=HelloWorld&file=.%252FHelloWorld.tsx&shouldShowDefaultExample=false");

/***/ }),

/***/ "./node_modules/react-styleguidist/lib/loaders/props-loader.js!./src/components/Button/Button.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/lib/loaders/props-loader.js!./src/components/Button/Button.tsx ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nmodule.exports = {\n    'description': 'This component allows to display a basic button.\\n',\n    'displayName': 'Button',\n    'methods': [],\n    'props': [\n        {\n            'required': true,\n            'flowType': {\n                'name': 'signature',\n                'type': 'function',\n                'raw': '() => void',\n                'signature': {\n                    'arguments': [],\n                    'return': { 'name': 'void' }\n                }\n            },\n            'description': '',\n            'tags': {},\n            'name': 'onClick'\n        },\n        {\n            'required': false,\n            'flowType': {\n                'name': 'ReactReactNode',\n                'raw': 'React.ReactNode'\n            },\n            'description': '',\n            'defaultValue': {\n                'value': '[]',\n                'computed': false\n            },\n            'tags': {},\n            'name': 'children'\n        },\n        {\n            'required': false,\n            'flowType': { 'name': 'string' },\n            'description': '',\n            'defaultValue': {\n                'value': '\\'\\'',\n                'computed': false\n            },\n            'tags': {},\n            'name': 'className'\n        },\n        {\n            'required': false,\n            'flowType': { 'name': 'boolean' },\n            'description': '',\n            'defaultValue': {\n                'value': 'false',\n                'computed': false\n            },\n            'tags': {},\n            'name': 'disabled'\n        },\n        {\n            'required': false,\n            'flowType': { 'name': 'string' },\n            'description': '',\n            'defaultValue': {\n                'value': '\\'\\'',\n                'computed': false\n            },\n            'tags': {},\n            'name': 'title'\n        }\n    ],\n    'doclets': {},\n    'tags': {},\n    'examples': __webpack_require__(/*! !./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%2FButton.tsx&shouldShowDefaultExample=false!./src/components/Button/README.md */ \"./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%2FButton.tsx&shouldShowDefaultExample=false!./src/components/Button/README.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/Button/Button.tsx?./node_modules/react-styleguidist/lib/loaders/props-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/lib/loaders/props-loader.js!./src/components/HelloWorld/HelloWorld.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/lib/loaders/props-loader.js!./src/components/HelloWorld/HelloWorld.tsx ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nmodule.exports = {\n    'description': 'This component allows to display a greeting.\\n',\n    'displayName': 'HelloWorld',\n    'methods': [],\n    'props': [\n        {\n            'required': false,\n            'flowType': { 'name': 'BackgroundColorValues' },\n            'description': '```\\r\\nBackgroundColorValues {\\r\\n   primaryColor = \\'black\\',\\r\\n   alternativeColor = \\'grey\\',\\r\\n}\\r\\n```',\n            'defaultValue': {\n                'value': 'sdkTheme.backgroundColor.primaryColor',\n                'computed': true\n            },\n            'tags': {},\n            'name': 'background'\n        },\n        {\n            'required': false,\n            'flowType': { 'name': 'string' },\n            'description': '',\n            'defaultValue': {\n                'value': '\\'World\\'',\n                'computed': false\n            },\n            'tags': {},\n            'name': 'message'\n        }\n    ],\n    'doclets': {},\n    'tags': {},\n    'examples': __webpack_require__(/*! !./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=HelloWorld&file=.%2FHelloWorld.tsx&shouldShowDefaultExample=false!./src/components/HelloWorld/README.md */ \"./node_modules/react-styleguidist/lib/loaders/examples-loader.js?displayName=HelloWorld&file=.%2FHelloWorld.tsx&shouldShowDefaultExample=false!./src/components/HelloWorld/README.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/HelloWorld/HelloWorld.tsx?./node_modules/react-styleguidist/lib/loaders/props-loader.js");

/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Job_Github_kobe13_github_io_react_ui_component_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ \"./src/theme/index.ts\");\n\n\nfunction _templateObject() {\n  var data = Object(D_Job_Github_kobe13_github_io_react_ui_component_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  min-height: 50px;\\n  padding: \", \";\\n  margin: 0;\\n  font-family: inherit;\\n  overflow: visible;\\n  line-height: 1.15;\\n  border: 0;\\n  border-radius: \", \";\\n\\n  :focus {\\n    outline: none;\\n    border: 1px doted \", \";\\n    border-radius: \", \";\\n  }\\n\\n  :hover {\\n    border: 0;\\n    outline: none;\\n    cursor: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar StyledButton = _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject(), function (props) {\n  return \"\".concat(props.theme.spacing.s, \"px \").concat(props.theme.spacing.m, \"px\");\n}, function (props) {\n  return \"\".concat(props.theme.radius.m, \"px \").concat(props.theme.radius.m, \"px 0 \").concat(props.theme.radius.m, \"px\");\n}, function (props) {\n  return props.theme.color.primaryColor;\n}, function (props) {\n  return \"\".concat(props.theme.radius.m, \"px \").concat(props.theme.radius.m, \"px 0 \").concat(props.theme.radius.m, \"px\");\n}, function (_ref) {\n  var disabled = _ref.disabled;\n  return disabled ? 'not-allowed' : 'pointer';\n});\n\n/**\n * This component allows to display a basic button.\n */\nvar Button = function Button(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_theme__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"sdkTheme\"]\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](StyledButton, {\n    className: props.className,\n    onClick: props.onClick,\n    disabled: props.disabled,\n    title: props.title\n  }, props.children));\n};\n\nButton.defaultProps = {\n  className: '',\n  disabled: false,\n  title: '',\n  children: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/Button/Button.tsx?");

/***/ }),

/***/ "./src/components/HelloWorld/HelloWorld.tsx":
/*!**************************************************!*\
  !*** ./src/components/HelloWorld/HelloWorld.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Job_Github_kobe13_github_io_react_ui_component_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ \"./src/theme/index.ts\");\n\n\nfunction _templateObject() {\n  var data = Object(D_Job_Github_kobe13_github_io_react_ui_component_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: \", \";\\n  padding: 20px;\\n  color: \", \";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar StyledHelloWorld = _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject(), function (props) {\n  return props.background;\n}, function (props) {\n  return props.background === props.theme.backgroundColor.alternativeColor ? props.theme.color.primaryColor : props.theme.color.alternativeColor;\n});\n\n/**\n * This component allows to display a greeting.\n */\nvar HelloWorld = function HelloWorld(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_theme__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"sdkTheme\"]\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](StyledHelloWorld, {\n    background: props.background\n  }, \"Hello \", props.message, \"!\"));\n};\n\nHelloWorld.defaultProps = {\n  message: 'World',\n  background: _theme__WEBPACK_IMPORTED_MODULE_2__[\"sdkTheme\"].backgroundColor.primaryColor\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HelloWorld);\n\n//# sourceURL=webpack:///./src/components/HelloWorld/HelloWorld.tsx?");

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/*! exports provided: BackgroundColorValues, ColorValues, Radius, Spacing, sdkTheme, css, createGlobalStyle, keyframes, ThemeProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundColorValues\", function() { return BackgroundColorValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorValues\", function() { return ColorValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Radius\", function() { return Radius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Spacing\", function() { return Spacing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sdkTheme\", function() { return sdkTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return css; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGlobalStyle\", function() { return createGlobalStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyframes\", function() { return keyframes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeProvider\", function() { return ThemeProvider; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _ref = styled_components__WEBPACK_IMPORTED_MODULE_0__,\n    styled = _ref.default,\n    css = _ref.css,\n    createGlobalStyle = _ref.createGlobalStyle,\n    keyframes = _ref.keyframes,\n    ThemeProvider = _ref.ThemeProvider;\nvar BackgroundColorValues;\n\n(function (BackgroundColorValues) {\n  BackgroundColorValues[\"primaryColor\"] = \"black\";\n  BackgroundColorValues[\"alternativeColor\"] = \"grey\";\n})(BackgroundColorValues || (BackgroundColorValues = {}));\n\nvar ColorValues;\n\n(function (ColorValues) {\n  ColorValues[\"primaryColor\"] = \"black\";\n  ColorValues[\"alternativeColor\"] = \"white\";\n})(ColorValues || (ColorValues = {}));\n\nvar Radius;\n\n(function (Radius) {\n  Radius[Radius[\"m\"] = 15] = \"m\";\n})(Radius || (Radius = {}));\n\nvar Spacing;\n\n(function (Spacing) {\n  Spacing[Spacing[\"xs\"] = 3] = \"xs\";\n  Spacing[Spacing[\"s\"] = 5] = \"s\";\n  Spacing[Spacing[\"m\"] = 10] = \"m\";\n  Spacing[Spacing[\"l\"] = 15] = \"l\";\n  Spacing[Spacing[\"xl\"] = 20] = \"xl\";\n})(Spacing || (Spacing = {}));\n\nvar sdkTheme = {\n  backgroundColor: BackgroundColorValues,\n  color: ColorValues,\n  radius: Radius,\n  spacing: Spacing\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled);\n\n//# sourceURL=webpack:///./src/theme/index.ts?");

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./node_modules/react-styleguidist/lib/client/index ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\Job\\Github\\kobe13.github.io\\react-ui-component-library\\node_modules\\react-styleguidist\\lib\\client\\index */\"./node_modules/react-styleguidist/lib/client/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/react-styleguidist/lib/client/index?");

/***/ })

},[[0,"runtime~main",0]]]);