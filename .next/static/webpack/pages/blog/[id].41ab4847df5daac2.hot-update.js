"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[id]",{

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_elements_BlogSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/elements/BlogSidebar */ \"./components/elements/BlogSidebar.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/contentful.browser.min.js\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n// Import necessary dependencies and components\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// Define the BlogDetails component\nconst BlogDetails = ()=>{\n    _s();\n    // Initialize Next.js router\n    let Router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Initialize state variables\n    const [fieldsdata, setfielddata] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});\n    const [datex, setdatex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [writername, setwritername] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [category, setcategory] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    // Extract the 'id' parameter from the router query\n    const { id  } = Router.query;\n    // Initialize Contentful client\n    const client = (0,contentful__WEBPACK_IMPORTED_MODULE_6__.createClient)({\n        space: \"YOUR_CONTENTFUL_SPACE_ID\",\n        accessToken: \"YOUR_CONTENTFUL_ACCESS_TOKEN\"\n    });\n    // useEffect hook to fetch data when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                // Fetch entry from Contentful using the provided 'id'\n                let story = await client.getEntry(id);\n                // Check if the entry has a 'storyId' field\n                if (story === null || story === void 0 ? void 0 : story.fields.storyId) {\n                    var _fieldsdata_categoryId;\n                    setfielddata(story === null || story === void 0 ? void 0 : story.fields.storyId.fields);\n                    // Fetch category entry using 'categoryId'\n                    let cate = await (client === null || client === void 0 ? void 0 : client.getEntry((_fieldsdata_categoryId = fieldsdata.categoryId) === null || _fieldsdata_categoryId === void 0 ? void 0 : _fieldsdata_categoryId.sys.id));\n                    setcategory(cate.fields.category);\n                } else {\n                    var _story_fields_categoryId, _story_fields_writerId;\n                    // Set category and field data directly\n                    setcategory((_story_fields_categoryId = story === null || story === void 0 ? void 0 : story.fields.categoryId) === null || _story_fields_categoryId === void 0 ? void 0 : _story_fields_categoryId.fields.category);\n                    setfielddata(story === null || story === void 0 ? void 0 : story.fields);\n                    setwritername((_story_fields_writerId = story === null || story === void 0 ? void 0 : story.fields.writerId) === null || _story_fields_writerId === void 0 ? void 0 : _story_fields_writerId.fields.name);\n                }\n                // Fetch writer name using 'writerId'\n                if (story === null || story === void 0 ? void 0 : story.fields.storyId) {\n                    let writername = await client.getEntry(fieldsdata.writerId.sys.id);\n                    setwritername(writername.fields.name);\n                }\n                // Format and set the publication date\n                let timez = new Date(story.sys.createdAt);\n                const monthNames = [\n                    \"Jan\",\n                    \"Feb\",\n                    \"Mar\",\n                    \"Apr\",\n                    \"May\",\n                    \"Jun\",\n                    \"Jul\",\n                    \"Aug\",\n                    \"Sept\",\n                    \"Oct\",\n                    \"Nov\",\n                    \"Dec\"\n                ];\n                const day = timez.getDate();\n                const monthIndex = timez.getMonth();\n                const year = timez.getFullYear();\n                const formattedDate = \"\".concat(day, \" \").concat(monthNames[monthIndex], \" \").concat(year);\n                setdatex(formattedDate);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        // Call the fetchData function\n        fetchData();\n    }, [\n        id\n    ]);\n    // Calculate current URL\n    const currentUrl = process.env.NEXT_PUBLIC_BASE_URL + Router.asPath;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: fieldsdata && // Render the layout and blog details content\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            breadcrumbCategory: category,\n            breadcrumbPostTitle: fieldsdata.heading,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"blog-details-area pt-80 pb-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"blog-details-social\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-wrap\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    href: \"https://www.facebook.com/sharer/sharer.php?u=\".concat(currentUrl),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fab fa-facebook-f\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                lineNumber: 97,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    href: \"https://twitter.com/intent/tweet?url=\".concat(currentUrl),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fab fa-twitter\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                lineNumber: 104,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    href: \"https://www.linkedin.com/shareArticle?url=\".concat(currentUrl),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fab fa-linkedin-in\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                        lineNumber: 115,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                                lineNumber: 111,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                        lineNumber: 96,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                    lineNumber: 95,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-xl-8 col-lg-7\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"blog-details-wrap\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                    lineNumber: 124,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                lineNumber: 123,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-xl-3 col-lg-4 col-md-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_BlogSidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                    lineNumber: 130,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                                lineNumber: 129,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                        lineNumber: 92,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n                lineNumber: 90,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/Mustafaking/Documents/GitHub/Next-Frontend/pages/blog/[id].js\",\n            lineNumber: 86,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(BlogDetails, \"9UmLiWnhSJ6ZEi3Cr2VE2OJupvY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = BlogDetails;\n// Export the BlogDetails component\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetails);\nvar _c;\n$RefreshReg$(_c, \"BlogDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTs7Ozs7Ozs7Ozs7MENBS2pCLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ3ZELHdFQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTOUI7R0FoSU1ROztRQUVTTCxrREFBU0E7OztLQUZsQks7QUFrSU4sbUNBQW1DO0FBQ25DLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW2lkXS5qcz81YzllIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBuZWNlc3NhcnkgZGVwZW5kZW5jaWVzIGFuZCBjb21wb25lbnRzXG5pbXBvcnQgQmxvZ1NpZGViYXIgZnJvbSBcIkAvY29tcG9uZW50cy9lbGVtZW50cy9CbG9nU2lkZWJhclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcImNvbnRlbnRmdWxcIjtcbmltcG9ydCB7IGRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMgfSBmcm9tIFwiQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyXCI7XG5cbi8vIERlZmluZSB0aGUgQmxvZ0RldGFpbHMgY29tcG9uZW50XG5jb25zdCBCbG9nRGV0YWlscyA9ICgpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBOZXh0LmpzIHJvdXRlclxuICBsZXQgUm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB2YXJpYWJsZXNcbiAgY29uc3QgW2ZpZWxkc2RhdGEsIHNldGZpZWxkZGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtkYXRleCwgc2V0ZGF0ZXhdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt3cml0ZXJuYW1lLCBzZXR3cml0ZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2F0ZWdvcnksIHNldGNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIEV4dHJhY3QgdGhlICdpZCcgcGFyYW1ldGVyIGZyb20gdGhlIHJvdXRlciBxdWVyeVxuICBjb25zdCB7IGlkIH0gPSBSb3V0ZXIucXVlcnk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBDb250ZW50ZnVsIGNsaWVudFxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgIHNwYWNlOiAnWU9VUl9DT05URU5URlVMX1NQQUNFX0lEJyxcbiAgICBhY2Nlc3NUb2tlbjogJ1lPVVJfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4nLFxuICB9KTtcblxuICAvLyB1c2VFZmZlY3QgaG9vayB0byBmZXRjaCBkYXRhIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBGZXRjaCBlbnRyeSBmcm9tIENvbnRlbnRmdWwgdXNpbmcgdGhlIHByb3ZpZGVkICdpZCdcbiAgICAgICAgbGV0IHN0b3J5ID0gYXdhaXQgY2xpZW50LmdldEVudHJ5KGlkKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZW50cnkgaGFzIGEgJ3N0b3J5SWQnIGZpZWxkXG4gICAgICAgIGlmIChzdG9yeT8uZmllbGRzLnN0b3J5SWQpIHtcbiAgICAgICAgICBzZXRmaWVsZGRhdGEoc3Rvcnk/LmZpZWxkcy5zdG9yeUlkLmZpZWxkcyk7XG5cbiAgICAgICAgICAvLyBGZXRjaCBjYXRlZ29yeSBlbnRyeSB1c2luZyAnY2F0ZWdvcnlJZCdcbiAgICAgICAgICBsZXQgY2F0ZSA9IGF3YWl0IGNsaWVudD8uZ2V0RW50cnkoZmllbGRzZGF0YS5jYXRlZ29yeUlkPy5zeXMuaWQpO1xuICAgICAgICAgIHNldGNhdGVnb3J5KGNhdGUuZmllbGRzLmNhdGVnb3J5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZXQgY2F0ZWdvcnkgYW5kIGZpZWxkIGRhdGEgZGlyZWN0bHlcbiAgICAgICAgICBzZXRjYXRlZ29yeShzdG9yeT8uZmllbGRzLmNhdGVnb3J5SWQ/LmZpZWxkcy5jYXRlZ29yeSk7XG4gICAgICAgICAgc2V0ZmllbGRkYXRhKHN0b3J5Py5maWVsZHMpO1xuICAgICAgICAgIHNldHdyaXRlcm5hbWUoc3Rvcnk/LmZpZWxkcy53cml0ZXJJZD8uZmllbGRzLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmV0Y2ggd3JpdGVyIG5hbWUgdXNpbmcgJ3dyaXRlcklkJ1xuICAgICAgICBpZiAoc3Rvcnk/LmZpZWxkcy5zdG9yeUlkKSB7XG4gICAgICAgICAgbGV0IHdyaXRlcm5hbWUgPSBhd2FpdCBjbGllbnQuZ2V0RW50cnkoZmllbGRzZGF0YS53cml0ZXJJZC5zeXMuaWQpO1xuICAgICAgICAgIHNldHdyaXRlcm5hbWUod3JpdGVybmFtZS5maWVsZHMubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3JtYXQgYW5kIHNldCB0aGUgcHVibGljYXRpb24gZGF0ZVxuICAgICAgICBsZXQgdGltZXogPSBuZXcgRGF0ZShzdG9yeS5zeXMuY3JlYXRlZEF0KTtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgICAgICAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLFxuICAgICAgICAgIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsXG4gICAgICAgICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgICAgICAgXCJOb3ZcIiwgXCJEZWNcIlxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBkYXkgPSB0aW1lei5nZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSB0aW1lei5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCB5ZWFyID0gdGltZXouZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheX0gJHttb250aE5hbWVzW21vbnRoSW5kZXhdfSAke3llYXJ9YDtcbiAgICAgICAgc2V0ZGF0ZXgoZm9ybWF0dGVkRGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDYWxsIHRoZSBmZXRjaERhdGEgZnVuY3Rpb25cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW2lkXSk7XG5cbiAgLy8gQ2FsY3VsYXRlIGN1cnJlbnQgVVJMXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCArIFJvdXRlci5hc1BhdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2ZpZWxkc2RhdGEgJiYgKFxuICAgICAgICAvLyBSZW5kZXIgdGhlIGxheW91dCBhbmQgYmxvZyBkZXRhaWxzIGNvbnRlbnRcbiAgICAgICAgPExheW91dFxuICAgICAgICAgIGJyZWFkY3J1bWJDYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgYnJlYWRjcnVtYlBvc3RUaXRsZT17ZmllbGRzZGF0YS5oZWFkaW5nfVxuICAgICAgICA+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1kZXRhaWxzLWFyZWEgcHQtODAgcGItMTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgey8qIExlZnQgc2lkZWJhciB3aXRoIHNvY2lhbCBsaW5rcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctZGV0YWlscy1zb2NpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke2N1cnJlbnRVcmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0ke2N1cnJlbnRVcmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/dXJsPSR7Y3VycmVudFVybH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBtb3JlIHNvY2lhbCBtZWRpYSBsaW5rcyB3aXRoIHRoZSBhcHByb3ByaWF0ZSBzaGFyZSBVUkxzICovfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIE1haW4gY29udGVudCBhcmVhICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTggY29sLWxnLTdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1kZXRhaWxzLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIC4uLiByZXN0IG9mIHlvdXIgYmxvZyBkZXRhaWxzIGNvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogUmlnaHQgc2lkZWJhciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICA8QmxvZ1NpZGViYXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIEV4cG9ydCB0aGUgQmxvZ0RldGFpbHMgY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBCbG9nRGV0YWlscztcbiJdLCJuYW1lcyI6WyJCbG9nU2lkZWJhciIsIkxheW91dCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNsaWVudCIsImRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMiLCJCbG9nRGV0YWlscyIsIlJvdXRlciIsImZpZWxkc2RhdGEiLCJzZXRmaWVsZGRhdGEiLCJkYXRleCIsInNldGRhdGV4Iiwid3JpdGVybmFtZSIsInNldHdyaXRlcm5hbWUiLCJjYXRlZ29yeSIsInNldGNhdGVnb3J5IiwiaWQiLCJxdWVyeSIsImNsaWVudCIsInNwYWNlIiwiYWNjZXNzVG9rZW4iLCJmZXRjaERhdGEiLCJzdG9yeSIsImdldEVudHJ5IiwiZmllbGRzIiwic3RvcnlJZCIsImNhdGUiLCJjYXRlZ29yeUlkIiwic3lzIiwid3JpdGVySWQiLCJuYW1lIiwidGltZXoiLCJEYXRlIiwiY3JlYXRlZEF0IiwibW9udGhOYW1lcyIsImRheSIsImdldERhdGUiLCJtb250aEluZGV4IiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJmb3JtYXR0ZWREYXRlIiwiZXJyb3IiLCJjb25zb2xlIiwiY3VycmVudFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsImFzUGF0aCIsImJyZWFkY3J1bWJDYXRlZ29yeSIsImJyZWFkY3J1bWJQb3N0VGl0bGUiLCJoZWFkaW5nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibGkiLCJocmVmIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n"));

/***/ })

});