/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  background-color: #6223d2;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  position: relative;\\r\\n  overflow: hidden;\\r\\n  font-family: 'Play', sans-serif;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 70px;\\r\\n  padding-top: 25px;\\r\\n  padding-left: 25px;\\r\\n  padding-bottom: 45px;\\r\\n  max-width: 95%;\\r\\n  margin: 15px auto;\\r\\n  font-family: 'Alfa Slab One', cursive;\\r\\n  color: #fff;\\r\\n  text-shadow: 0px 10px 10px rgb(14, 0, 138);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 90px;\\r\\n}\\r\\n\\r\\n#first-section {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.sub-section {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background-color: rgba(0, 255, 255, 0.481);\\r\\n  backdrop-filter: blur(5px);\\r\\n  padding-right: 10px;\\r\\n  border-top-left-radius: 15px;\\r\\n  border-top-right-radius: 15px;\\r\\n  padding-top: 18px;\\r\\n  padding-bottom: 18px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: 1px solid rgb(110, 109, 109);\\r\\n  font-family: 'Play', sans-serif;\\r\\n  font-weight: bold;\\r\\n  font-size: 20px;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  color: rgb(162, 162, 162);\\r\\n  border-radius: 450px;\\r\\n  transition: all 0.2s ease-in;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: rgb(174, 255, 34);\\r\\n  border: 1px solid rgb(255, 255, 255);\\r\\n  color: rgb(255, 255, 255);\\r\\n  text-shadow: 0 0 2px black;\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  background-color: rgb(139, 220, 0);\\r\\n}\\r\\n\\r\\n#first-subtitle {\\r\\n  color: #ffff;\\r\\n  font-size: 50px;\\r\\n  font-size: 50px;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n#myRefresh {\\r\\n  width: 140px;\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n#myList {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border-left: 1px solid #000;\\r\\n  border-right: 1px solid #000;\\r\\n  border-bottom: 1px solid #000;\\r\\n  height: 66%;\\r\\n  overflow-y: scroll;\\r\\n  background-color: rgba(0, 255, 255, 0.481);\\r\\n  backdrop-filter: blur(3px);\\r\\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.204);\\r\\n}\\r\\n\\r\\nli {\\r\\n  padding: 10px;\\r\\n  font-weight: 800;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n#myList li:nth-child(even) {\\r\\n  background: #fff;\\r\\n  font-weight: lighter;\\r\\n}\\r\\n\\r\\n#myList li:nth-child(odd) {\\r\\n  font-weight: lighter;\\r\\n  background: rgba(0, 255, 195, 0.87);\\r\\n}\\r\\n\\r\\n#second-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-color: rgba(0, 255, 255, 0.481);\\r\\n  border-radius: 5%;\\r\\n  width: 33%;\\r\\n  height: 300px;\\r\\n  backdrop-filter: blur(5px);\\r\\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.204);\\r\\n}\\r\\n\\r\\n#second-subtitle {\\r\\n  color: #ffff;\\r\\n  font-size: 50px;\\r\\n  margin-bottom: 22px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-end;\\r\\n  gap: 18px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 360px;\\r\\n  border: 1px solid rgba(216, 216, 216, 0.281);\\r\\n  border-radius: 450px;\\r\\n  font-weight: 600;\\r\\n  padding: 7px;\\r\\n  padding-left: 25px;\\r\\n  font-family: 'Play', sans-serif;\\r\\n  font-size: 20px;\\r\\n  font-weight: lighter;\\r\\n  color: #000;\\r\\n  background: #fff;\\r\\n  outline-color: rgb(144, 209, 30);;\\r\\n}\\r\\n\\r\\ninput[type=submit] {\\r\\n  width: 90px;\\r\\n  margin-top: 8px;\\r\\n  padding-left: 8px !important;\\r\\n  border: 1px solid rgb(110, 109, 109);\\r\\n  font-family: 'Play', sans-serif;\\r\\n  font-weight: bold;\\r\\n  font-size: 20px;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  color: rgb(162, 162, 162);\\r\\n  cursor: pointer;\\r\\n  transition: all 0.2s ease-in;\\r\\n}\\r\\n\\r\\ninput[type=submit]:hover {\\r\\n  background-color: rgb(174, 255, 34);\\r\\n  border: 1px solid rgb(255, 255, 255);\\r\\n  color: rgb(255, 255, 255);\\r\\n  text-shadow: 0 0 2px black;\\r\\n}\\r\\n\\r\\ninput[type=submit]:active {\\r\\n  background-color: rgb(139, 220, 0);\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  position: absolute;\\r\\n  z-index: -6;\\r\\n  background: radial-gradient(circle, transparent 0%, rgba(98, 35, 210, 0.85) 100%);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(10, 200px);\\r\\n  grid-template-rows: repeat(6, 230px);\\r\\n  transform: translate(-3%, -4%);\\r\\n}\\r\\n\\r\\n.shape {\\r\\n  width: 200px;\\r\\n  height: 230px;\\r\\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\\r\\n  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\\r\\n}\\r\\n.shape:nth-child(11) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(12) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(13) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(14) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(15) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(16) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(17) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(18) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(19) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(20) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(21) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(21) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(22) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(22) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(23) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(23) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(24) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(24) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(25) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(25) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(26) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(26) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(27) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(27) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(28) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(28) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(29) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(29) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(30) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(30) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(31) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(31) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(31) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(32) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(32) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(32) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(33) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(33) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(33) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(34) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(34) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(34) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(35) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(35) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(35) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(36) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(36) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(36) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(37) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(37) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(37) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(38) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(38) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(38) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(39) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(39) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(39) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(40) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(40) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(40) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(41) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(41) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(41) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(41) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(42) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(42) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(42) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(42) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(43) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(43) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(43) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(43) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(44) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(44) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(44) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(44) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(45) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(45) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(45) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(45) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(46) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(46) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(46) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(46) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(47) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(47) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(47) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(47) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(48) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(48) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(48) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(48) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(49) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(49) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(49) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(49) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(50) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(50) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(50) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(50) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(51) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(51) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(51) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(51) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(51) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(52) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(52) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(52) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(52) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(52) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(53) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(53) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(53) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(53) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(53) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(54) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(54) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(54) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(54) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(54) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(55) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(55) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(55) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(55) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(55) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(56) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(56) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(56) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(56) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(56) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(57) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(57) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(57) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(57) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(57) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(58) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(58) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(58) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(58) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(58) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(59) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(59) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(59) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(59) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(59) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\\r\\n.shape:nth-child(60) {\\r\\n  transform: translate(-50%, -25%);\\r\\n}\\r\\n.shape:nth-child(60) {\\r\\n  transform: translate(0%, -50%);\\r\\n}\\r\\n.shape:nth-child(60) {\\r\\n  transform: translate(-50%, -75%);\\r\\n}\\r\\n.shape:nth-child(60) {\\r\\n  transform: translate(0%, -100%);\\r\\n}\\r\\n.shape:nth-child(60) {\\r\\n  transform: translate(-50%, -125%);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ledearboard-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ledearboard-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ledearboard-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ledearboard-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ledearboard-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ledearboard-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ledearboard-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ledearboard-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ledearboard-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ledearboard-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\n\n\n\nconst myBtn = document.getElementById('myForm');\nconst myRefreshBtn = document.getElementById('myRefresh');\n\nmyBtn.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.addPlayer)();\n});\n\nmyRefreshBtn.addEventListener('click', () => {\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://ledearboard-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPlayer\": () => (/* binding */ addPlayer),\n/* harmony export */   \"myApiKey\": () => (/* binding */ myApiKey),\n/* harmony export */   \"myGameUrl\": () => (/* binding */ myGameUrl),\n/* harmony export */   \"myPlayerName\": () => (/* binding */ myPlayerName),\n/* harmony export */   \"myScore\": () => (/* binding */ myScore)\n/* harmony export */ });\nconst myPlayerName = document.getElementById('myName');\nconst myScore = document.getElementById('myNumber');\nconst myApiKey = 'zS0rIfoFWrgvPqHF0nHr';\nconst myGameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myApiKey}/scores`;\n\nconst addPlayer = async () => {\n  try {\n    const myResponse = await fetch(myGameUrl, {\n      method: 'POST',\n      body: JSON.stringify({\n        user: myPlayerName.value,\n        score: myScore.value,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    myPlayerName.value = '';\n    myScore.value = '';\n    return myResponse.json();\n  } catch (error) {\n    return false;\n  }\n};\n\n\n\n//# sourceURL=webpack://ledearboard-project/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayUserScores)\n/* harmony export */ });\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ \"./src/modules/get.js\");\n\n\nconst myList = document.getElementById('myList');\n\nconst displayUserScores = async () => {\n  const myPlayers = await (0,_get_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  myList.innerHTML = '';\n  myPlayers.result.sort((a, b) => b.score - a.score);\n  myPlayers.result.forEach((player) => {\n    myList.innerHTML += `<li class=\"item\">${player.user} : ${player.score}</li>`;\n  });\n};\n\n\n\n//# sourceURL=webpack://ledearboard-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/get.js":
/*!****************************!*\
  !*** ./src/modules/get.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getScores)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\n\nconst getScores = async () => {\n  try {\n    const resScore = await fetch(_add_js__WEBPACK_IMPORTED_MODULE_0__.myGameUrl);\n    const playerInfo = await resScore.json();\n    return playerInfo;\n  } catch (error) {\n    return false;\n  }\n};\n\n\n\n//# sourceURL=webpack://ledearboard-project/./src/modules/get.js?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;