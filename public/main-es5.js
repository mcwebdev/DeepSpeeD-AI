(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\workspace\deepspeedai\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!****************************!*\
      !*** node-fetch (ignored) ***!
      \****************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    3:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "38NV":
    /*!************************************************!*\
      !*** ./src/app/speech-commands/dataset-vis.js ***!
      \************************************************/

    /*! exports provided: removeNonFixedChildrenFromWordDiv, DatasetViz */

    /***/
    function NV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeNonFixedChildrenFromWordDiv", function () {
        return removeNonFixedChildrenFromWordDiv;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatasetViz", function () {
        return DatasetViz;
      });
      /* harmony import */


      var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src */
      "gFaz");
      /* harmony import */


      var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ui.js */
      "bW8X");
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * https://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */

      /** Remove the children of a div that do not have the isFixed attribute. */


      function removeNonFixedChildrenFromWordDiv(wordDiv) {
        for (var i = wordDiv.children.length - 1; i >= 0; --i) {
          if (wordDiv.children[i].getAttribute('isFixed') == null) {
            wordDiv.removeChild(wordDiv.children[i]);
          } else {
            break;
          }
        }
      }
      /**
       * Get the relative x-coordinate of a click event in a canvas.
       *
       * @param {HTMLCanvasElement} canvasElement The canvas in which the click
       *   event happened.
       * @param {Event} event The click event object.
       * @return {number} The relative x-coordinate: a `number` between 0 and 1.
       */


      function getCanvasClickRelativeXCoordinate(canvasElement, event) {
        var x;

        if (event.pageX) {
          x = event.pageX;
        } else {
          x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        }

        x -= canvasElement.offsetLeft;
        return x / canvasElement.width;
      }
      /**
       * Dataset visualizer that supports
       *
       * - Display of words and spectrograms
       * - Navigation through examples
       * - Deletion of examples
       */


      var DatasetViz = /*#__PURE__*/function () {
        /**
         * Constructor of DatasetViz
         *
         * @param {Object} transferRecognizer An instance of
         *   `speechCommands.TransferSpeechCommandRecognizer`.
         * @param {HTMLDivElement} topLevelContainer The div element that
         *   holds the div elements for the individual words. It is assumed
         *   that each element has its "word" attribute set to the word.
         * @param {number} minExamplesPerClass Minimum number of examples
         *   per word class required for the start-transfer-learning button
         *   to be enabled.
         * @param {HTMLButtonElement} startTransferLearnButton The button
         *   which starts the transfer learning when clicked.
         * @param {HTMLBUttonElement} downloadAsFileButton The button
         *   that triggers downloading of the dataset as a file when clicked.
         * @param {number} transferDurationMultiplier Optional duration
         *   multiplier (the ratio between the length of the example
         *   and the length expected by the model.) Defaults to 1.
         */
        function DatasetViz(transferRecognizer, topLevelContainer, minExamplesPerClass, startTransferLearnButton, downloadAsFileButton) {
          var transferDurationMultiplier = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

          _classCallCheck(this, DatasetViz);

          this.transferRecognizer = transferRecognizer;
          this.container = topLevelContainer;
          this.minExamplesPerClass = minExamplesPerClass;
          this.startTransferLearnButton = startTransferLearnButton;
          this.downloadAsFileButton = downloadAsFileButton;
          this.transferDurationMultiplier = transferDurationMultiplier; // Navigation indices for the words.

          this.navIndices = {};
        }
        /** Get the set of words in the dataset visualizer. */


        _createClass(DatasetViz, [{
          key: "words_",
          value: function words_() {
            var words = [];

            var _iterator = _createForOfIteratorHelper(this.container.nativeElement.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var element = _step.value;
                words.push(element.getAttribute('word'));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return words;
          }
          /**
           * Draw an example.
           *
           * @param {HTMLDivElement} wordDiv The div element for the word. It is assumed
           *   that it contains the word button as the first child and the canvas as the
           *   second.
           * @param {string} word The word of the example being added.
           * @param {SpectrogramData} spectrogram Optional spectrogram data.
           *   If provided, will use it as is. If not provided, will use WebAudio
           *   to collect an example.
           * @param {RawAudio} rawAudio Raw audio waveform. Optional
           * @param {string} uid UID of the example being drawn. Must match the UID
           *   of the example from `this.transferRecognizer`.
           */

        }, {
          key: "drawExample",
          value: function () {
            var _drawExample = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(wordDiv, word, spectrogram, rawAudio, uid) {
              var _this = this;

              var leftButton, rightButton, exampleUIDs, position, exampleCanvas, modelNumFrames, playButton, deleteButton;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(uid == null)) {
                        _context.next = 2;
                        break;
                      }

                      throw new Error('Error: UID is not provided for pre-existing example.');

                    case 2:
                      removeNonFixedChildrenFromWordDiv(wordDiv); // Create the left and right nav buttons.

                      leftButton = document.createElement('button');
                      leftButton.textContent = '←';
                      wordDiv.appendChild(leftButton);
                      rightButton = document.createElement('button');
                      rightButton.textContent = '→';
                      wordDiv.appendChild(rightButton); // Determine the position of the example in the word of the dataset.

                      exampleUIDs = this.transferRecognizer.getExamples(word).map(function (ex) {
                        return ex.uid;
                      });
                      position = exampleUIDs.indexOf(uid);
                      this.navIndices[word] = exampleUIDs.indexOf(uid);

                      if (position > 0) {
                        leftButton.addEventListener('click', function () {
                          _this.redraw(word, exampleUIDs[position - 1]);
                        });
                      } else {
                        leftButton.disabled = true;
                      }

                      if (position < exampleUIDs.length - 1) {
                        rightButton.addEventListener('click', function () {
                          _this.redraw(word, exampleUIDs[position + 1]);
                        });
                      } else {
                        rightButton.disabled = true;
                      } // Spectrogram canvas.


                      exampleCanvas = document.createElement('canvas');
                      exampleCanvas.style['display'] = 'inline-block';
                      exampleCanvas.style['vertical-align'] = 'middle';
                      exampleCanvas.height = 60;
                      exampleCanvas.width = 80;
                      exampleCanvas.style['padding'] = '3px'; // Set up the click callback for the spectrogram canvas. When clicked,
                      // the keyFrameIndex will be set.

                      if (word !== _src__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_NOISE_TAG"]) {
                        exampleCanvas.addEventListener('click', function (event) {
                          var relativeX = getCanvasClickRelativeXCoordinate(exampleCanvas, event);
                          var numFrames = spectrogram.data.length / spectrogram.frameSize;
                          var keyFrameIndex = Math.floor(numFrames * relativeX);
                          console.log("relativeX=".concat(relativeX, "; ") + "changed keyFrameIndex to ".concat(keyFrameIndex));

                          _this.transferRecognizer.setExampleKeyFrameIndex(uid, keyFrameIndex);

                          _this.redraw(word, uid);
                        });
                      }

                      wordDiv.appendChild(exampleCanvas);
                      modelNumFrames = this.transferRecognizer.modelInputShape()[1];
                      _context.next = 25;
                      return Object(_ui_js__WEBPACK_IMPORTED_MODULE_1__["plotSpectrogram"])(exampleCanvas, spectrogram.data, spectrogram.frameSize, spectrogram.frameSize, {
                        pixelsPerFrame: exampleCanvas.width / modelNumFrames,
                        maxPixelWidth: Math.round(0.4 * window.innerWidth),
                        markKeyFrame: this.transferDurationMultiplier > 1 && word !== _src__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_NOISE_TAG"],
                        keyFrameIndex: spectrogram.keyFrameIndex
                      });

                    case 25:
                      if (rawAudio != null) {
                        playButton = document.createElement('button');
                        playButton.textContent = '▶️';
                        playButton.addEventListener('click', function () {
                          playButton.disabled = true;

                          _src__WEBPACK_IMPORTED_MODULE_0__["utils"].playRawAudio(rawAudio, function () {
                            return playButton.disabled = false;
                          });
                        });
                        wordDiv.appendChild(playButton);
                      } // Create Delete button.


                      deleteButton = document.createElement('button');
                      deleteButton.textContent = 'X';
                      wordDiv.appendChild(deleteButton); // Callback for delete button.

                      deleteButton.addEventListener('click', function () {
                        _this.transferRecognizer.removeExample(uid); // TODO(cais): Smarter logic for which example to draw after deletion.
                        // Right now it always redraws the last available one.


                        _this.redraw(word);
                      });
                      this.updateButtons_();

                    case 31:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function drawExample(_x, _x2, _x3, _x4, _x5) {
              return _drawExample.apply(this, arguments);
            }

            return drawExample;
          }()
          /**
           * Redraw the spectrogram and buttons for a word.
           *
           * @param {string} word The word being redrawn. This must belong to the
           *   vocabulary currently held by the transferRecognizer.
           * @param {string} uid Optional UID for the example to render. If not
           *   specified, the last available example of the dataset will be drawn.
           */

        }, {
          key: "redraw",
          value: function () {
            var _redraw = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(word, uid) {
              var divIndex, wordDiv, exampleCounts, examples, example, index, spectrogram;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(word == null)) {
                        _context2.next = 2;
                        break;
                      }

                      throw new Error('word is not specified');

                    case 2:
                      divIndex = 0;

                    case 3:
                      if (!(divIndex < this.container.nativeElement.children.length)) {
                        _context2.next = 9;
                        break;
                      }

                      if (!(this.container.nativeElement.children[divIndex].getAttribute('word') === word)) {
                        _context2.next = 6;
                        break;
                      }

                      return _context2.abrupt("break", 9);

                    case 6:
                      ++divIndex;
                      _context2.next = 3;
                      break;

                    case 9:
                      if (!(divIndex === this.container.nativeElement.children.length)) {
                        _context2.next = 11;
                        break;
                      }

                      throw new Error("Cannot find div corresponding to word ".concat(word));

                    case 11:
                      wordDiv = this.container.nativeElement.children[divIndex];
                      exampleCounts = this.transferRecognizer.isDatasetEmpty() ? {} : this.transferRecognizer.countExamples();

                      if (!(word in exampleCounts)) {
                        _context2.next = 21;
                        break;
                      }

                      examples = this.transferRecognizer.getExamples(word);

                      if (uid == null) {
                        // Example UID is not specified. Draw the last one available.
                        example = examples[examples.length - 1];
                      } else {
                        // Example UID is specified. Find the example and update navigation
                        // indices.
                        for (index = 0; index < examples.length; ++index) {
                          if (examples[index].uid === uid) {
                            example = examples[index];
                          }
                        }
                      }

                      spectrogram = example.example.spectrogram;
                      _context2.next = 19;
                      return this.drawExample(wordDiv, word, spectrogram, example.example.rawAudio, example.uid);

                    case 19:
                      _context2.next = 22;
                      break;

                    case 21:
                      removeNonFixedChildrenFromWordDiv(wordDiv);

                    case 22:
                      this.updateButtons_();

                    case 23:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function redraw(_x6, _x7) {
              return _redraw.apply(this, arguments);
            }

            return redraw;
          }()
          /**
           * Redraw the spectrograms and buttons for all words.
           *
           * For each word, the last available example is rendered.
           **/

        }, {
          key: "redrawAll",
          value: function redrawAll() {
            var _iterator2 = _createForOfIteratorHelper(this.words_()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var word = _step2.value;
                this.redraw(word);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /** Update the button states according to the state of transferRecognizer. */

        }, {
          key: "updateButtons_",
          value: function updateButtons_() {
            var exampleCounts = this.transferRecognizer.isDatasetEmpty() ? {} : this.transferRecognizer.countExamples();
            var minCountByClass = this.words_().map(function (word) {
              return exampleCounts[word] || 0;
            }).reduce(function (prev, current) {
              return current < prev ? current : prev;
            });

            var _iterator3 = _createForOfIteratorHelper(this.container.nativeElement.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var element = _step3.value;
                var word = element.getAttribute('word');
                var button = element.children[0];
                var displayWord = word === _src__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_NOISE_TAG"] ? 'noise' : word;
                var exampleCount = exampleCounts[word] || 0;

                if (exampleCount === 0) {
                  button.textContent = "".concat(displayWord, " (").concat(exampleCount, ")");
                } else {
                  var pos = this.navIndices[word] + 1;
                  button.textContent = "".concat(displayWord, " (").concat(pos, "/").concat(exampleCount, ")");
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var requiredMinCountPerClass = Math.ceil(this.minExamplesPerClass / this.transferDurationMultiplier);

            if (minCountByClass >= requiredMinCountPerClass) {
              this.startTransferLearnButton.nativeElement.textContent = 'Start transfer learning';
              this.startTransferLearnButton.nativeElement.disabled = false;
            } else {
              this.startTransferLearnButton.nativeElement.textContent = "Need at least ".concat(requiredMinCountPerClass, " examples per word");
              this.startTransferLearnButton.nativeElement.disabled = true;
            }

            this.downloadAsFileButton.disabled = this.transferRecognizer.isDatasetEmpty();
          }
        }]);

        return DatasetViz;
      }();
      /***/

    },

    /***/
    4:
    /*!********************************!*\
      !*** string_decoder (ignored) ***!
      \********************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "4G5h":
    /*!********************************************************************!*\
      !*** ./src/app/sentiment-analysis/sentiment-analysis.component.ts ***!
      \********************************************************************/

    /*! exports provided: SentimentAnalysisComponent */

    /***/
    function G5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SentimentAnalysisComponent", function () {
        return SentimentAnalysisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tensorflow_tfjs_backend_cpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @tensorflow/tfjs-backend-cpu */
      "ix3U");
      /* harmony import */


      var _tensorflow_models_toxicity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @tensorflow-models/toxicity */
      "nKZ4");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz"); //import '@tensorflow/tfjs-backend-webgl';


      var SentimentAnalysisComponent = /*#__PURE__*/function () {
        function SentimentAnalysisComponent() {
          var _this2 = this;

          _classCallCheck(this, SentimentAnalysisComponent);

          this.samples = [{
            'id': '002261b0415c4f9d',
            'text': 'We\'re dudes on computers, moron.  You are quite astonishingly stupid.'
          }, {
            'id': '0027160ca62626bc',
            'text': 'Please stop. If you continue to vandalize Wikipedia, as you did to Kmart, you will be blocked from editing.'
          }, {
            'id': '002fb627b19c4c0b',
            'text': 'I respect your point of view, and when this discussion originated on 8th April I would have tended to agree with you.'
          }];
          this.loading = false;

          this.addPredictions = function (predictions) {
            var tableWrapper = document.querySelector('#table-wrapper');
            predictions.forEach(function (d) {
              var predictionDom = "<div class=\"sentimentrow\">\n      <div class=\"text\">".concat(d.text, "</div>\n      ").concat(_this2.labels.map(function (label) {
                return "<div class=\"".concat('label' + (d[label] === true ? ' positive' : ''), "\">").concat(d[label], "</div>");
              }).join(''), "\n    </div>");
              tableWrapper.insertAdjacentHTML('beforeend', predictionDom);
            });
            _this2.loading = false;
          };
        }

        _createClass(SentimentAnalysisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.predict();
          }
        }, {
          key: "classify",
          value: function classify(inputs) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var results;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.model.classify(inputs);

                    case 2:
                      results = _context3.sent;
                      return _context3.abrupt("return", inputs.map(function (d, i) {
                        var obj = {
                          'text': d
                        };
                        results.forEach(function (classification) {
                          obj[classification.label] = classification.results[i].match;
                        });
                        return obj;
                      }));

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "predict",
          value: function predict() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var tableWrapper, predictions;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.loading = true;
                      _context4.next = 3;
                      return _tensorflow_models_toxicity__WEBPACK_IMPORTED_MODULE_3__["load"](this.a, this.b);

                    case 3:
                      this.model = _context4.sent;
                      this.labels = this.model.model.outputNodes.map(function (d) {
                        return d.split('/')[0];
                      });
                      tableWrapper = document.querySelector('#table-wrapper');
                      tableWrapper.insertAdjacentHTML('beforeend', "<div class=\"sentimentrow\">\n    <div class=\"text\">TEXT</div>\n    ".concat(this.labels.map(function (label) {
                        return "<div class=\"label\">".concat(label.replace('_', ' '), "</div>");
                      }).join(''), "\n  </div>"));
                      _context4.next = 9;
                      return this.classify(this.samples.map(function (d) {
                        return d.text;
                      }));

                    case 9:
                      predictions = _context4.sent;
                      this.addPredictions(predictions);
                      this.loading = false;
                      document.querySelector('#classify-new-text').addEventListener('click', function (e) {
                        var textEl = document.querySelector('#classify-new-text-input');
                        var text = textEl.value;
                        _this3.loading = true;

                        var predictions = _this3.classify([text]).then(function (d) {
                          _this3.addPredictions(d);
                        });
                      });

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return SentimentAnalysisComponent;
      }();

      SentimentAnalysisComponent.ɵfac = function SentimentAnalysisComponent_Factory(t) {
        return new (t || SentimentAnalysisComponent)();
      };

      SentimentAnalysisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SentimentAnalysisComponent,
        selectors: [["app-sentiment-analysis"]],
        decls: 17,
        vars: 1,
        consts: [["id", "main", "fxLayout", "row", "fxLayoutAlign", "start start", 2, "min-height", "350px"], ["fxFlex", "20", "fxFlexFill", "", 1, "description"], ["href", "https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge/data"], ["fxFlex", "80"], ["id", "table-wrapper"], ["fxLayout", "column", "layout-margin", ""], ["fxLayout", "row"], ["fxFlex", "33"], ["fxFlex", "", "id", "classify-new-text-input", "placeholder", "i.e. 'you suck'"], ["id", "classify-new-text"], [1, "blockUi", 3, "hidden"]],
        template: function SentimentAnalysisComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " This is a demo of the toxicity model, which classifies text according to whether it exhibits offensive attributes (i.e. profanity, sexual explicitness). The samples in the table below were taken from this ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Kaggle dataset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Enter text below and click 'Classify' to add it to the table.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Classify");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 10);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.loading);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"]],
        styles: ["h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-shadow: 1px 1px #070707;\n  padding: 5px 8px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.description[_ngcontent-%COMP%] {\n  background: #e0e7ee;\n  padding: 8px;\n  margin-top: 10px;\n  margin-right: 20px;\n  border-radius: 5px;\n  line-height: 21px;\n}\n\n.description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #109238;\n  text-decoration: none;\n  background-color: transparent;\n  background: #fff;\n  padding: 1px 3px;\n  padding-top: 1px;\n  padding-right: 3px;\n  padding-bottom: 1px;\n  padding-left: 3px;\n  text-decoration: underline;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZW50aW1lbnQtYW5hbHlzaXMvc2VudGltZW50LWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC9zZW50aW1lbnQtYW5hbHlzaXMvc2VudGltZW50LWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICMwNzA3MDc7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2UwZTdlZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjMTA5MjM4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMXB4IDNweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SentimentAnalysisComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-sentiment-analysis',
            templateUrl: './sentiment-analysis.component.html',
            styleUrls: ['./sentiment-analysis.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    5:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    6:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "75rY":
    /*!******************************************************************!*\
      !*** ./src/app/webcam-classifier/webcam-classifier.component.ts ***!
      \******************************************************************/

    /*! exports provided: WebcamClassifierComponent */

    /***/
    function rY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebcamClassifierComponent", function () {
        return WebcamClassifierComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @tensorflow-models/mobilenet */
      "g3tL");
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      "zhpf");
      /* harmony import */


      var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! d3 */
      "VphZ");
      /* harmony import */


      var d3_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! d3-scale */
      "ziQ1");
      /* harmony import */


      var d3_axis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! d3-axis */
      "RhHs");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var angular2_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular2-notifications */
      "Lm38");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["video"];
      var _c1 = ["svg"];

      function WebcamClassifierComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prediction_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", prediction_r4.className, " - ", prediction_r4.probability, " ");
        }
      }

      function WebcamClassifierComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WebcamClassifierComponent_div_7_div_1_Template, 2, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@listAnimation", ctx_r1.predictions.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.predictions);
        }
      }

      var WebcamClassifierComponent = /*#__PURE__*/function () {
        function WebcamClassifierComponent(_notifications) {
          _classCallCheck(this, WebcamClassifierComponent);

          this._notifications = _notifications;
          this.loading = true;
          this.faVideo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faVideo"];
          this.margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
          };
          this.constraints = {
            audio: true,
            video: true
          };
        }

        _createClass(WebcamClassifierComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var stream;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      stream = null;
                      _context5.prev = 1;
                      _context5.next = 4;
                      return navigator.mediaDevices.getUserMedia(this.constraints);

                    case 4:
                      stream = _context5.sent;
                      this.noWebcam = false;
                      _context5.next = 12;
                      break;

                    case 8:
                      _context5.prev = 8;
                      _context5.t0 = _context5["catch"](1);
                      this.noWebcam = true;

                      this._notifications.info("No Webcam Detected. Plug in webcam and refresh the page.");

                    case 12:
                      if (!(this.noWebcam === false)) {
                        _context5.next = 19;
                        break;
                      }

                      console.log('loading mobilenet model...');
                      _context5.next = 16;
                      return _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_3__["load"]();

                    case 16:
                      this.model = _context5.sent;
                      console.log('Sucessfully loaded model');
                      this.loading = false;

                    case 19:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[1, 8]]);
            }));
          }
        }, {
          key: "start",
          value: function start() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this4 = this;

              var vid;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      vid = this.video.nativeElement;
                      navigator.mediaDevices.getUserMedia({
                        video: true
                      }).then(function (stream) {
                        vid.srcObject = stream;
                        setInterval(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    _context6.next = 2;
                                    return this.model.classify(this.video.nativeElement);

                                  case 2:
                                    this.predictions = _context6.sent;
                                    _context6.next = 5;
                                    return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_4__["nextFrame"]();

                                  case 5:
                                    this.createChart();
                                    this.predictionsReady();

                                  case 7:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, this);
                          }));
                        }, 3000);
                      })["catch"](function (err) {
                        _this4.noWebcam = true;

                        _this4._notifications.error('Error', 'No Webcam Detected. Plug in webcam and refresh the page.', Error);

                        console.log('Something went wrong!');
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "createChart",
          value: function createChart() {
            this.initSvg();
            this.initAxis();
            this.drawAxis();
            this.drawBars();
          }
        }, {
          key: "initSvg",
          value: function initSvg() {
            var element = this.svgEl.nativeElement;
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](element).select('svg#svg svg').remove();
            this.svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"](element).append('svg');
            this.width = element.width.animVal.value - this.margin.left - this.margin.right;
            this.height = element.height.animVal.value - this.margin.top - this.margin.bottom;
            this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
          }
        }, {
          key: "initAxis",
          value: function initAxis() {
            this.x = d3_scale__WEBPACK_IMPORTED_MODULE_6__["scaleBand"]().rangeRound([0, this.width]).padding(0.1);
            this.y = d3_scale__WEBPACK_IMPORTED_MODULE_6__["scaleLinear"]().rangeRound([this.height, 0]);
            this.x.domain(this.predictions.map(function (d) {
              return d.className;
            })); //Uncomment to make x-axis relative
            //this.y.domain([0, d3Array.max(this.predictions, (d) => d.probability)]);
          }
        }, {
          key: "drawAxis",
          value: function drawAxis() {
            this.g.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + this.height + ')').call(d3_axis__WEBPACK_IMPORTED_MODULE_7__["axisBottom"](this.x));
            this.g.append('g').attr('class', 'axis axis--y').call(d3_axis__WEBPACK_IMPORTED_MODULE_7__["axisLeft"](this.y).ticks(10, '%')).append('text').attr('class', 'axis-title').attr('transform', 'rotate(-90)').attr('y', 6).attr('dy', '0.71em').attr('text-anchor', 'end').text('Frequency');
          }
        }, {
          key: "drawBars",
          value: function drawBars() {
            var _this5 = this;

            this.g.selectAll('.bar').data(this.predictions).enter().append('rect').attr('class', 'bar').attr("fill", "#1461ac").attr('stroke', '#0f508f').attr('x', function (d) {
              return _this5.x(d.className);
            }).attr('y', function (d) {
              return _this5.y(d.probability);
            }).attr('width', this.x.bandwidth()).attr('height', function (d) {
              return _this5.height - _this5.y(d.probability);
            });
          }
        }, {
          key: "predictionsReady",
          value: function predictionsReady() {
            this.loading = false;
          }
        }]);

        return WebcamClassifierComponent;
      }();

      WebcamClassifierComponent.ɵfac = function WebcamClassifierComponent_Factory(t) {
        return new (t || WebcamClassifierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular2_notifications__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]));
      };

      WebcamClassifierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WebcamClassifierComponent,
        selectors: [["app-webcam-classifier"]],
        viewQuery: function WebcamClassifierComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.svgEl = _t.first);
          }
        },
        inputs: {
          predictions: "predictions"
        },
        decls: 11,
        vars: 4,
        consts: [["fxLayout", "row", "fxLayoutAlign", "start start", 3, "hidden"], ["fxLayout", "column", "fxFlex", "50", 1, "videoNode"], [1, "callout", 3, "click"], [2, "max-height", "none", 3, "icon"], ["autoplay", "", "playsinline", "", "muted", "", "id", "webcam"], ["video", ""], ["class", "list-group", "fxLayout", "row", "fxFlex", "", 4, "ngIf"], ["id", "svg", "width", "960", "height", "500"], ["svg", ""], [1, "blockUi", 3, "hidden"], ["fxLayout", "row", "fxFlex", "", 1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]],
        template: function WebcamClassifierComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WebcamClassifierComponent_Template_button_click_2_listener() {
              return ctx.start();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Start Classifying Webcam Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "video", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WebcamClassifierComponent_div_7_Template, 2, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "svg", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 9);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faVideo);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.predictions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.loading);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]],
        styles: [".videoNode {\n  width: 948px;\n  padding: 5px 5px 0 5px;\n  background: #196cbe;\n  border: solid 1px #1661aa;\n  border-radius: 3px;\n  text-align: center;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWJjYW0tY2xhc3NpZmllci93ZWJjYW0tY2xhc3NpZmllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJhcHAvd2ViY2FtLWNsYXNzaWZpZXIvd2ViY2FtLWNsYXNzaWZpZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW9Ob2RlIHtcclxuICB3aWR0aDogOTQ4cHg7XHJcbiAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcclxuICBiYWNrZ3JvdW5kOiAjMTk2Y2JlO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMxNjYxYWE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIl19 */"],
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0
          }))])], {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          }))])])])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebcamClassifierComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-webcam-classifier',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            templateUrl: './webcam-classifier.component.html',
            styleUrls: ['./webcam-classifier.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0
            }))])], {
              optional: true
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1
            }))])])])])]
          }]
        }], function () {
          return [{
            type: angular2_notifications__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]
          }];
        }, {
          video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["video", {
              "static": false
            }]
          }],
          svgEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["svg", {
              "static": false
            }]
          }],
          predictions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 13,
        vars: 0,
        consts: [[1, "container", "page-content"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", 2, "padding-top", "50px"], [1, "ng"], [1, "slash"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ML Suite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "&");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Block Chain");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]],
        styles: ["h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 900;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 96px;\n  color: #103150;\n  text-shadow: 1px 1px #4898e6;\n}\n\nh1[_ngcontent-%COMP%]   span.ng[_ngcontent-%COMP%]:nth-child(1) {\n  letter-spacing: 23px;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  font-family: \"Lato\", sans-serif;\n  color: #114475;\n  font-size: 80px;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  color: rgba(46, 10, 68, 0.7);\n  line-height: 45px;\n  font-size: 55px;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-family: \"Lato\", sans-serif;\n}\n\nh1[_ngcontent-%COMP%]   span.slash[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #4898e6;\n  text-shadow: 0px 0 3px #0e4377;\n  font-size: 56px;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2), h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  font-size: 56px;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.slash[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n\nimg[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLCtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFKQTtFQUNJLGVBQUE7QUFPSjs7QUFKQTtFQUFLLFVBQUE7RUFBVSxrQkFBQTtFQUFtQixVQUFBO0FBVWxDIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSBzcGFuIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDk2cHg7XHJcbiAgY29sb3I6ICMxMDMxNTA7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzQ4OThlNjtcclxufVxyXG5oMSBzcGFuLm5nOm50aC1jaGlsZCgxKSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDIzcHg7XHJcbn1cclxuaDEgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMxMTQ0NzU7XHJcbiAgZm9udC1zaXplOjgwcHg7XHJcbn1cclxuaDEgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gIGNvbG9yOiByZ2JhKDQ2LCAxMCwgNjgsIDAuNyk7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgZm9udC1zaXplOjU1cHg7XHJcbn1cclxuaDEgc3BhbjpsYXN0LWNoaWxkIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbmgxIHNwYW4uc2xhc2gge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6ICM0ODk4ZTY7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwIDNweCAjMGU0Mzc3O1xyXG4gIGZvbnQtc2l6ZTogNTZweDtcclxufVxyXG5oMSBzcGFuOm50aC1jaGlsZCgyKSwgaDEgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gIGZvbnQtc2l6ZTogNTZweDtcclxufVxyXG5cclxuaDEgc3BhbiBzcGFuLnNsYXNoe1xyXG4gICAgZm9udC1zaXplOiA1NnB4O1xyXG59XHJcblxyXG5pbWd7IG9wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjE1MHB4O31cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        serverUrl: 'http://localhost:8080'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "C1vv":
    /*!******************************************!*\
      !*** ./src/app/shared/plotly.service.ts ***!
      \******************************************/

    /*! exports provided: PlotlyService */

    /***/
    function C1vv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlotlyService", function () {
        return PlotlyService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var PlotlyService = /*#__PURE__*/function () {
        function PlotlyService() {
          _classCallCheck(this, PlotlyService);
        }

        _createClass(PlotlyService, [{
          key: "getInstanceByDivId",
          value: function getInstanceByDivId(id) {
            var _iterator4 = _createForOfIteratorHelper(PlotlyService.instances),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var instance = _step4.value;

                if (instance && instance.id === id) {
                  return instance;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return undefined;
          }
        }, {
          key: "getPlotly",
          value: function getPlotly() {
            if (typeof PlotlyService._plotly === 'undefined') {
              var msg = PlotlyService._moduleName === 'ViaCDN' ? "Error loading Peer dependency plotly.js from CDN url" : "Peer dependency plotly.js isn't installed";
              throw new Error(msg);
            }

            return PlotlyService._plotly;
          }
        }, {
          key: "waitFor",
          value: function waitFor(fn) {
            return new Promise(function (resolve) {
              var localFn = function localFn() {
                fn() ? resolve() : setTimeout(localFn, 10);
              };

              localFn();
            });
          } // tslint:disable max-line-length

        }, {
          key: "newPlot",
          value: function newPlot(div, data, layout, config, frames) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this6 = this;

              var obj;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.waitFor(function () {
                        return _this6.getPlotly() !== 'waiting';
                      });

                    case 2:
                      if (!frames) {
                        _context8.next = 5;
                        break;
                      }

                      obj = {
                        data: data,
                        layout: layout,
                        config: config,
                        frames: frames
                      };
                      return _context8.abrupt("return", this.getPlotly().newPlot(div, obj).then(function () {
                        return PlotlyService.insert(div);
                      }));

                    case 5:
                      return _context8.abrupt("return", this.getPlotly().newPlot(div, data, layout, config).then(function () {
                        return PlotlyService.insert(div);
                      }));

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "plot",
          value: function plot(div, data, layout, config, frames) {
            if (frames) {
              var obj = {
                data: data,
                layout: layout,
                config: config,
                frames: frames
              };
              return this.getPlotly().plot(div, obj);
            }

            return this.getPlotly().plot(div, data, layout, config);
          }
        }, {
          key: "update",
          value: function update(div, data, layout, config, frames) {
            if (frames) {
              var obj = {
                data: data,
                layout: layout,
                config: config,
                frames: frames
              };
              return this.getPlotly().react(div, obj);
            }

            return this.getPlotly().react(div, data, layout, config);
          } // tslint:enable max-line-length

        }, {
          key: "resize",
          value: function resize(div) {
            return this.getPlotly().Plots.resize(div);
          }
        }, {
          key: "debug",
          get: function get() {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production === false;
          }
        }], [{
          key: "setModuleName",
          value: function setModuleName(moduleName) {
            PlotlyService._moduleName = moduleName;
          }
        }, {
          key: "setPlotly",
          value: function setPlotly(plotly) {
            if (typeof plotly === 'object' && typeof plotly.react !== 'function') {
              throw new Error('Invalid plotly.js version. Please, use any version above 1.40.0');
            }

            PlotlyService._plotly = plotly;
          }
        }, {
          key: "insert",
          value: function insert(instance) {
            var index = PlotlyService.instances.indexOf(instance);

            if (index === -1) {
              PlotlyService.instances.push(instance);
            }

            return instance;
          }
        }, {
          key: "remove",
          value: function remove(div) {
            var index = PlotlyService.instances.indexOf(div);

            if (index >= 0) {
              PlotlyService.instances.splice(index, 1);

              PlotlyService._plotly.purge(div);
            }
          }
        }]);

        return PlotlyService;
      }();

      PlotlyService.instances = [];
      PlotlyService._plotly = undefined;
      PlotlyService._moduleName = undefined;

      PlotlyService.ɵfac = function PlotlyService_Factory(t) {
        return new (t || PlotlyService)();
      };

      PlotlyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PlotlyService,
        factory: PlotlyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlotlyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "CC5z":
    /*!****************************************************!*\
      !*** ./src/app/blockchain/blockchain.component.ts ***!
      \****************************************************/

    /*! exports provided: BlockchainComponent */

    /***/
    function CC5z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockchainComponent", function () {
        return BlockchainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var BlockchainComponent = /*#__PURE__*/function () {
        function BlockchainComponent() {
          _classCallCheck(this, BlockchainComponent);
        }

        _createClass(BlockchainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlockchainComponent;
      }();

      BlockchainComponent.ɵfac = function BlockchainComponent_Factory(t) {
        return new (t || BlockchainComponent)();
      };

      BlockchainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlockchainComponent,
        selectors: [["app-blockchain"]],
        decls: 38,
        vars: 0,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "30px", "fxFlexFill", ""], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "50px"], ["href", "https://github.com/mcwebdev/Blockchain-Election-DAPP"], ["id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1949.9 1338", "width", "250", "height", "171"], ["d", "M175.9 1241.9c0 4.3-3.6 7.8-7.9 7.8H15.8c3.8 37.6 32.1 71.9 71.9 71.9 27.2 0 47.4-10.4 62.6-32.1 2.2-3 5.5-4.9 9.7-3.1 2.3 1 3.9 3.1 4.3 5.5.4 2.5-.3 3.9-1 5.3-15.3 26.7-45.8 39.8-75.7 39.8-51.2 0-87.7-45.8-87.7-94.8s36.5-94.8 87.7-94.8c51.2-.1 88.2 45.6 88.3 94.5m-16.3-7.4c-3.3-37.6-32.1-71.9-71.9-71.9s-68.1 34.3-71.9 71.9h143.8zM360.6 1151.1c4.4 0 7.6 3.8 7.6 7.6 0 4.4-3.3 7.6-7.6 7.6h-40.8v160.1c0 3.8-3.3 7.6-7.6 7.6-4.4 0-7.6-3.8-7.6-7.6v-160.1h-39.2c-4.4 0-7.6-3.3-7.6-7.6 0-3.8 3.3-7.6 7.6-7.6h39.2v-58.6c0-3.7 2.5-7.1 6.1-7.7 5.1-.8 9.1 2.7 9.1 7.5v58.8h40.8zM609.5 1228.5v97c0 4.4-3.8 7.6-7.6 7.6-4.4 0-7.6-3.3-7.6-7.6v-97c0-32.7-18.5-65.4-55-65.4-46.8 0-67 40.9-64.3 82.8 0 1.1.5 6 .5 6.5v72.8c0 3.7-2.5 7.1-6.1 7.7-5.1.8-9.1-2.7-9.1-7.5v-318.6c0-3.8 3.3-7.6 7.6-7.6 4.4 0 7.6 3.8 7.6 7.6v180.3c13.1-23.4 36.5-39.2 63.7-39.2 44.7 0 70.3 39.2 70.3 80.6M882.4 1241.9c0 4.3-3.6 7.8-7.9 7.8H722.2c3.8 37.6 32.1 71.9 71.9 71.9 27.2 0 47.4-10.4 62.6-32.1 2.2-3 5.5-4.9 9.7-3.1 2.3 1 3.9 3.1 4.3 5.5.4 2.5-.3 3.9-1 5.3-15.3 26.7-45.8 39.8-75.7 39.8-51.2 0-87.7-45.8-87.7-94.8s36.5-94.8 87.7-94.8c51.3-.1 88.3 45.6 88.4 94.5m-16.4-7.4c-3.3-37.6-32.1-71.9-71.9-71.9s-68.1 34.3-71.9 71.9H866zM1069.2 1158.2c0 4.9-2.7 7.6-7.1 8.2-44.7 6.5-64.8 43-64.8 85.5v72.8c0 3.7-2.5 7.1-6.1 7.7-5.1.8-9.1-2.7-9.1-7.5V1159c0-3.7 2.5-7.1 6.1-7.7 5.1-.8 9.1 2.7 9.1 7.5v33.8c12.5-21.2 37.6-41.4 63.7-41.4 3.8-.1 8.2 2.7 8.2 7M1319.2 1241.9c0 4.3-3.6 7.8-7.9 7.8h-152.2c3.8 37.6 32.1 71.9 71.9 71.9 27.2 0 47.4-10.4 62.6-32.1 2.2-3 5.5-4.9 9.7-3.1 2.3 1 3.9 3.1 4.3 5.5.4 2.5-.3 3.9-1 5.3-15.3 26.7-45.8 39.8-75.7 39.8-51.2 0-87.7-45.8-87.7-94.8s36.5-94.8 87.7-94.8c51.2-.1 88.2 45.6 88.3 94.5m-16.3-7.4c-3.3-37.6-32.1-71.9-71.9-71.9s-68.1 34.3-71.9 71.9h143.8zM1564.9 1160.1v166.3c0 4.4-3.8 7.6-7.6 7.6-4.4 0-7.6-3.3-7.6-7.6v-31.6c-12.5 25.1-34.9 43-63.2 43-45.2 0-70.3-39.2-70.3-80.6v-97.5c0-3.8 3.3-7.6 7.6-7.6 4.4 0 7.6 3.8 7.6 7.6v97.5c0 32.7 18.5 65.4 55 65.4 51.2 0 63.2-47.9 63.2-100.8v-62.1c0-4.4 4.4-8.9 9.8-7.3 3.3 1.1 5.5 4.3 5.5 7.7M1949.9 1227.9v97.5c0 4.4-3.8 7.6-7.6 7.6-4.4 0-7.6-3.3-7.6-7.6v-97.5c0-32.7-18.5-64.8-55-64.8-45.8 0-63.2 49-63.2 87.1v75.2c0 4.4-3.8 7.6-7.6 7.6-4.4 0-7.6-3.3-7.6-7.6v-97.5c0-32.7-18.5-64.8-55-64.8-46.3 0-65.4 36.5-63.7 85 0 1.1.5 3.3 0 3.8v73.3c0 3.7-2.5 7.1-6.2 7.7-5.1.8-9.1-2.7-9.1-7.5V1159c0-3.7 2.5-7.1 6.1-7.7 5.1-.8 9.1 2.7 9.1 7.5v27.8c13.1-23.4 36.5-38.7 63.7-38.7 31 0 55 19.6 64.8 48.5 12.5-28.3 37-48.5 68.6-48.5 44.7 0 70.3 38.6 70.3 80", 1, "st0"], [1, "st1"], ["id", "SVGID_1_", "d", "M720.6 306.4h508.7v266H720.6z"], ["id", "SVGID_2_"], [0, "xlink", "href", "#SVGID_1_", "overflow", "visible"], ["d", "M975 306.4L720.6 422.1 975 572.4l254.3-150.3z", 1, "st2"], [1, "st3"], ["id", "SVGID_3_", "d", "M720.6 0H975v572.4H720.6z"], ["id", "SVGID_4_"], [0, "xlink", "href", "#SVGID_3_", "overflow", "visible"], ["d", "M720.6 422.1L975 572.4V0z", 1, "st4"], [1, "st5"], ["id", "SVGID_5_", "d", "M975 0h254.4v572.4H975z"], ["id", "SVGID_6_"], [0, "xlink", "href", "#SVGID_5_", "overflow", "visible"], ["d", "M975 0v572.4l254.3-150.3z", 1, "st6"], ["id", "SVGID_7_", "d", "M720.6 470.3H975v358.4H720.6z"], ["id", "SVGID_8_"], [0, "xlink", "href", "#SVGID_7_", "overflow", "visible"], ["d", "M720.6 470.3L975 828.7V620.6z", 1, "st7"], ["id", "SVGID_9_", "d", "M975 470.3h254.5v358.4H975z"], ["id", "SVGID_10_"], [0, "xlink", "href", "#SVGID_9_", "overflow", "visible"], ["d", "M975 620.6v208.1l254.5-358.4z", 1, "st8"], ["width", "256", "height", "124", "viewBox", "0 0 2880 1024", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.53 10.0301H18.51C18.519 10.0301 18.525 10.0391 18.534 10.0411C18.535 10.0411 18.539 10.0401 18.54 10.0401L18.53 10.0301ZM18.534 10.0411C18.441 10.0421 18.207 10.0901 17.96 10.0901C17.18 10.0901 16.91 9.73007 16.91 9.26007V6.13007H18.5C18.59 6.13007 18.66 6.05007 18.66 5.94007V4.24007C18.66 4.15007 18.58 4.07007 18.5 4.07007H16.91V1.96007C16.91 1.88007 16.86 1.83007 16.77 1.83007H14.61C14.52 1.83007 14.47 1.88007 14.47 1.96007V4.13007C14.47 4.13007 13.38 4.40007 13.31 4.41007C13.23 4.43007 13.18 4.50007 13.18 4.58007V5.94007C13.18 6.05007 13.26 6.13007 13.35 6.13007H14.46V9.41007C14.46 11.8501 16.16 12.1001 17.32 12.1001C17.85 12.1001 18.49 11.9301 18.59 11.8801C18.65 11.8601 18.68 11.7901 18.68 11.7201V10.2201C18.68 10.1211 18.612 10.0551 18.534 10.0411ZM42.23 7.84007C42.23 6.03007 41.5 5.79007 40.73 5.87007C40.13 5.91007 39.65 6.21007 39.65 6.21007V9.73007C39.65 9.73007 40.14 10.0701 40.87 10.0901C41.9 10.1201 42.23 9.75007 42.23 7.84007ZM44.66 7.68007C44.66 11.1101 43.55 12.0901 41.61 12.0901C39.97 12.0901 39.09 11.2601 39.09 11.2601C39.09 11.2601 39.05 11.7201 39 11.7801C38.97 11.8401 38.92 11.8601 38.86 11.8601H37.38C37.28 11.8601 37.19 11.7801 37.19 11.6901L37.21 0.580069C37.21 0.490068 37.29 0.410069 37.38 0.410069H39.51C39.6 0.410069 39.68 0.490068 39.68 0.580069V4.35007C39.68 4.35007 40.5 3.82007 41.7 3.82007L41.69 3.80007C42.89 3.80007 44.66 4.25007 44.66 7.68007ZM35.94 4.07007H35.93H33.84C33.73 4.07007 33.67 4.15007 33.67 4.26007V9.70007C33.67 9.70007 33.12 10.0901 32.37 10.0901C31.62 10.0901 31.4 9.75007 31.4 9.00007V4.25007C31.4 4.16007 31.32 4.08007 31.23 4.08007H29.09C29 4.08007 28.92 4.16007 28.92 4.25007V9.36007C28.92 11.5601 30.15 12.1101 31.84 12.1101C33.23 12.1101 34.36 11.3401 34.36 11.3401C34.36 11.3401 34.41 11.7301 34.44 11.7901C34.46 11.8401 34.53 11.8801 34.6 11.8801H35.94C36.05 11.8801 36.11 11.8001 36.11 11.7101L36.13 4.24007C36.13 4.15007 36.05 4.07007 35.94 4.07007ZM12.24 4.06007H10.11C10.02 4.06007 9.94 4.15007 9.94 4.26007V11.6001C9.94 11.8001 10.07 11.8701 10.24 11.8701H12.16C12.36 11.8701 12.41 11.7801 12.41 11.6001V4.24007V4.23007C12.41 4.14007 12.33 4.06007 12.24 4.06007ZM11.19 0.680069C10.42 0.680069 9.81 1.29007 9.81 2.06007C9.81 2.83007 10.42 3.44007 11.19 3.44007C11.94 3.44007 12.55 2.83007 12.55 2.06007C12.55 1.29007 11.94 0.680069 11.19 0.680069ZM27.68 0.430069H25.57C25.48 0.430069 25.4 0.510069 25.4 0.600069V4.69007H22.09V0.600069C22.09 0.510069 22.01 0.430069 21.92 0.430069H19.79C19.7 0.430069 19.62 0.510069 19.62 0.600069V11.7101C19.62 11.8001 19.71 11.8801 19.79 11.8801H21.92C22.01 11.8801 22.09 11.8001 22.09 11.7101V6.96007H25.4L25.38 11.7101C25.38 11.8001 25.46 11.8801 25.55 11.8801H27.68C27.77 11.8801 27.85 11.8001 27.85 11.7101V0.600069C27.85 0.510069 27.77 0.430069 27.68 0.430069ZM8.81 5.35007V11.0901C8.81 11.1301 8.8 11.2001 8.75 11.2201C8.75 11.2201 7.5 12.1101 5.44 12.1101C2.95 12.1101 0 11.3301 0 6.19007C0 1.05007 2.58 -0.00993021 5.1 6.97893e-05C7.28 6.97893e-05 8.16 0.49007 8.3 0.58007C8.34 0.63007 8.36 0.67007 8.36 0.72007L7.94 2.50007C7.94 2.59007 7.85 2.70007 7.74 2.67007C7.38 2.56007 6.84 2.34007 5.57 2.34007C4.1 2.34007 2.52 2.76007 2.52 6.07007C2.52 9.38007 4.02 9.77007 5.1 9.77007C6.02 9.77007 6.35 9.66007 6.35 9.66007V7.36007H4.88C4.77 7.36007 4.69 7.28007 4.69 7.19007V5.35007C4.69 5.26007 4.77 5.18007 4.88 5.18007H8.62C8.73 5.18007 8.81 5.26007 8.81 5.35007Z", "transform", "translate(0 128.002) scale(64)", "fill", "#1B1F23"]],
        template: function BlockchainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clipPath", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clipPath", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "use", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "clipPath", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "use", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "clipPath", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "use", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "clipPath", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "use", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"]],
        styles: [".centeredOffset[_ngcontent-%COMP%] {\n  margin-top: -200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ibG9ja2NoYWluL2Jsb2NrY2hhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsa0JBQUE7QUFFakIiLCJmaWxlIjoiYXBwL2Jsb2NrY2hhaW4vYmxvY2tjaGFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZE9mZnNldHsgbWFyZ2luLXRvcDogLTIwMHB4O31cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockchainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blockchain',
            templateUrl: './blockchain.component.html',
            styleUrls: ['./blockchain.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "HgKl":
    /*!*********************************************************!*\
      !*** ./src/app/plotly-via-cdn/plotly-via-cdn.module.ts ***!
      \*********************************************************/

    /*! exports provided: PlotlyViaCDNModule */

    /***/
    function HgKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlotlyViaCDNModule", function () {
        return PlotlyViaCDNModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_plot_plot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/plot/plot.component */
      "pV0i");
      /* harmony import */


      var _shared_plotly_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/plotly.service */
      "C1vv");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd"); // @dynamic


      var PlotlyViaCDNModule = /*#__PURE__*/function () {
        function PlotlyViaCDNModule(plotlyService) {
          _classCallCheck(this, PlotlyViaCDNModule);

          this.plotlyService = plotlyService;

          _shared_plotly_service__WEBPACK_IMPORTED_MODULE_3__["PlotlyService"].setModuleName('ViaCDN');
        }

        _createClass(PlotlyViaCDNModule, null, [{
          key: "loadViaCDN",
          value: function loadViaCDN() {
            _shared_plotly_service__WEBPACK_IMPORTED_MODULE_3__["PlotlyService"].setPlotly('waiting');

            var init = function init() {
              var src = PlotlyViaCDNModule._plotlyBundle == null ? "https://cdn.plot.ly/plotly-".concat(PlotlyViaCDNModule._plotlyVersion, ".min.js") : "https://cdn.plot.ly/plotly-".concat(PlotlyViaCDNModule._plotlyBundle, "-").concat(PlotlyViaCDNModule._plotlyVersion, ".min.js");
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = src;

              script.onerror = function () {
                return console.error("Error loading plotly.js library from ".concat(src));
              };

              var head = document.getElementsByTagName('head')[0];
              head.appendChild(script);
              var counter = 200; // equivalent of 10 seconds...

              var fn = function fn() {
                var plotly = window.Plotly;

                if (plotly) {
                  _shared_plotly_service__WEBPACK_IMPORTED_MODULE_3__["PlotlyService"].setPlotly(plotly);
                } else if (counter > 0) {
                  counter--;
                  setTimeout(fn, 50);
                } else {
                  throw new Error("Error loading plotly.js library from ".concat(src, ". Timeout."));
                }
              };

              fn();
            };

            setTimeout(init);
          }
        }, {
          key: "forRoot",
          value: function forRoot(config) {
            var url = "https://github.com/plotly/angular-plotly.js#customizing-the-plotlyjs-bundle";
            throw new Error("[PlotlyViaCDNModule] forRoot method is deprecated. Please see: ".concat(url));
          }
        }, {
          key: "plotlyVersion",
          set: function set(version) {
            var isOk = version === 'latest' || /^\d\.\d{1,2}\.\d{1,2}$/.test(version);

            if (!isOk) {
              throw new Error("Invalid plotly version. Please set 'latest' or version number (i.e.: 1.4.3)");
            }

            PlotlyViaCDNModule.loadViaCDN();
            PlotlyViaCDNModule._plotlyVersion = version;
          }
        }, {
          key: "plotlyBundle",
          set: function set(bundle) {
            var isOk = bundle === null || PlotlyViaCDNModule.plotlyBundleNames.indexOf(bundle) >= 0;

            if (!isOk) {
              var names = PlotlyViaCDNModule.plotlyBundleNames.map(function (n) {
                return "\"".concat(n, "\"");
              }).join(', ');
              throw new Error("Invalid plotly bundle. Please set to null for full or ".concat(names, " for a partial bundle."));
            }

            PlotlyViaCDNModule._plotlyBundle = bundle;
          }
        }]);

        return PlotlyViaCDNModule;
      }();

      PlotlyViaCDNModule._plotlyBundle = null;
      PlotlyViaCDNModule._plotlyVersion = 'latest';
      PlotlyViaCDNModule.plotlyBundleNames = ['basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox', 'finance'];
      PlotlyViaCDNModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PlotlyViaCDNModule
      });
      PlotlyViaCDNModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PlotlyViaCDNModule_Factory(t) {
          return new (t || PlotlyViaCDNModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_plotly_service__WEBPACK_IMPORTED_MODULE_3__["PlotlyService"]));
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlotlyViaCDNModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          exports: [_shared_plot_plot_component__WEBPACK_IMPORTED_MODULE_2__["PlotComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlotlyViaCDNModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            declarations: [],
            exports: [_shared_plot_plot_component__WEBPACK_IMPORTED_MODULE_2__["PlotComponent"]]
          }]
        }], function () {
          return [{
            type: _shared_plotly_service__WEBPACK_IMPORTED_MODULE_3__["PlotlyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JNEL":
    /*!**************************************************************!*\
      !*** ./src/app/speech-commands/src/browser_fft_extractor.ts ***!
      \**************************************************************/

    /*! exports provided: BrowserFftFeatureExtractor, flattenQueue, getInputTensorFromFrequencyData, Tracker */

    /***/
    function JNEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserFftFeatureExtractor", function () {
        return BrowserFftFeatureExtractor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flattenQueue", function () {
        return flattenQueue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getInputTensorFromFrequencyData", function () {
        return getInputTensorFromFrequencyData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tracker", function () {
        return Tracker;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      "zhpf");
      /* harmony import */


      var _browser_fft_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./browser_fft_utils */
      "W0Lg");
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */

      /**
       * Audio FFT Feature Extractor based on Browser-Native FFT.
       */

      /**
       * Audio feature extractor based on Browser-native FFT.
       *
       * Uses AudioContext and analyser node.
       */


      var BrowserFftFeatureExtractor = /*#__PURE__*/function () {
        /**
         * Constructor of BrowserFftFeatureExtractor.
         *
         * @param config Required configuration object.
         */
        function BrowserFftFeatureExtractor(config) {
          var _this7 = this;

          _classCallCheck(this, BrowserFftFeatureExtractor);

          if (config == null) {
            throw new Error("Required configuration object is missing for " + "BrowserFftFeatureExtractor constructor");
          }

          if (config.spectrogramCallback == null) {
            throw new Error("spectrogramCallback cannot be null or undefined");
          }

          if (!(config.numFramesPerSpectrogram > 0)) {
            throw new Error("Invalid value in numFramesPerSpectrogram: " + "".concat(config.numFramesPerSpectrogram));
          }

          if (config.suppressionTimeMillis < 0) {
            throw new Error("Expected suppressionTimeMillis to be >= 0, " + "but got ".concat(config.suppressionTimeMillis));
          }

          this.suppressionTimeMillis = config.suppressionTimeMillis;
          this.spectrogramCallback = config.spectrogramCallback;
          this.numFrames = config.numFramesPerSpectrogram;
          this.sampleRateHz = config.sampleRateHz || 44100;
          this.fftSize = config.fftSize || 1024;
          this.frameDurationMillis = this.fftSize / this.sampleRateHz * 1e3;
          this.columnTruncateLength = config.columnTruncateLength || this.fftSize;
          this.overlapFactor = config.overlapFactor;
          this.includeRawAudio = config.includeRawAudio;

          _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(this.overlapFactor >= 0 && this.overlapFactor < 1, function () {
            return "Expected overlapFactor to be >= 0 and < 1, " + "but got ".concat(_this7.overlapFactor);
          });

          if (this.columnTruncateLength > this.fftSize) {
            throw new Error("columnTruncateLength ".concat(this.columnTruncateLength, " exceeds ") + "fftSize (".concat(this.fftSize, ")."));
          }

          this.audioContextConstructor = Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_2__["getAudioContextConstructor"])();
        }

        _createClass(BrowserFftFeatureExtractor, [{
          key: "start",
          value: function start(audioTrackConstraints) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var streamSource, period;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!(this.frameIntervalTask != null)) {
                        _context9.next = 2;
                        break;
                      }

                      throw new Error('Cannot start already-started BrowserFftFeatureExtractor');

                    case 2:
                      _context9.next = 4;
                      return Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_2__["getAudioMediaStream"])(audioTrackConstraints);

                    case 4:
                      this.stream = _context9.sent;
                      this.audioContext = new this.audioContextConstructor();

                      if (this.audioContext.sampleRate !== this.sampleRateHz) {
                        console.warn("Mismatch in sampling rate: " + "Expected: ".concat(this.sampleRateHz, "; ") + "Actual: ".concat(this.audioContext.sampleRate));
                      }

                      streamSource = this.audioContext.createMediaStreamSource(this.stream);
                      this.analyser = this.audioContext.createAnalyser();
                      this.analyser.fftSize = this.fftSize * 2;
                      this.analyser.smoothingTimeConstant = 0.0;
                      streamSource.connect(this.analyser); // Reset the queue.

                      this.freqDataQueue = [];
                      this.freqData = new Float32Array(this.fftSize);

                      if (this.includeRawAudio) {
                        this.timeDataQueue = [];
                        this.timeData = new Float32Array(this.fftSize);
                      }

                      period = Math.max(1, Math.round(this.numFrames * (1 - this.overlapFactor)));
                      this.tracker = new Tracker(period, Math.round(this.suppressionTimeMillis / this.frameDurationMillis));
                      this.frameIntervalTask = setInterval(this.onAudioFrame.bind(this), this.fftSize / this.sampleRateHz * 1e3);
                      this.watchInput();

                    case 19:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "watchInput",
          value: function watchInput() {
            var paths = document.getElementById("visualizer").getElementsByTagName('path');
            var visualizer = document.getElementById('visualizer');
            var mask = document.getElementById('mask');
            var h = document.getElementsByTagName('h1')[0];
            var hSub = document.getElementsByTagName('h1')[1];
            var start = true;
            var path;
            var seconds = 0;
            var loud_volume_threshold = 90; // I used 90 to more or less disable. Change to 30 if you want to see it in action

            var audioStream = this.audioContext.createMediaStreamSource(this.stream);
            var analyser = this.audioContext.createAnalyser();
            var fftSize = 1024;
            analyser.fftSize = fftSize;
            audioStream.connect(analyser);
            var bufferLength = analyser.frequencyBinCount;
            var frequencyArray = new Uint8Array(bufferLength);
            visualizer.setAttribute('viewBox', '0 0 255 255');

            for (var i = 0; i < 255; i++) {
              path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
              path.setAttribute('stroke-dasharray', '4,1');
              mask.appendChild(path);
            }

            var doDraw = function doDraw() {
              requestAnimationFrame(doDraw);

              if (start) {
                analyser.getByteFrequencyData(frequencyArray);
                var adjustedLength;

                for (var i = 0; i < 255; i++) {
                  adjustedLength = Math.floor(frequencyArray[i]) - Math.floor(frequencyArray[i]) % 5;
                  paths[i].setAttribute('d', 'M ' + i + ',255 l 0,-' + adjustedLength);
                }
              } else {
                for (var i = 0; i < 255; i++) {
                  paths[i].setAttribute('d', 'M ' + i + ',255 l 0,-' + 0);
                }
              }
            };

            var showVolume = function showVolume() {
              setTimeout(showVolume, 500);

              if (start) {
                analyser.getByteFrequencyData(frequencyArray);
                var total = 0;

                for (var i = 0; i < 255; i++) {
                  var x = frequencyArray[i];
                  total += x * x;
                }

                var rms = Math.sqrt(total / bufferLength);
                var db = 20 * (Math.log(rms) / Math.log(10));
                db = Math.max(db, 0); // sanity check

                h.innerHTML = Math.floor(db) + " dB";

                if (db >= loud_volume_threshold) {
                  seconds += 0.5;

                  if (seconds >= 5) {
                    hSub.innerHTML = "You’ve been in loud environment for<span> " + Math.floor(seconds) + " </span>seconds.";
                  }
                } else {
                  seconds = 0;
                  hSub.innerHTML = "";
                }
              } else {
                h.innerHTML = "";
                hSub.innerHTML = "";
              }
            };

            doDraw();
            showVolume();
          }
        }, {
          key: "onAudioFrame",
          value: function onAudioFrame() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var shouldFire, freqData, freqDataTensor, timeDataTensor, timeData, shouldRest;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.analyser.getFloatFrequencyData(this.freqData);

                      if (!(this.freqData[0] === -Infinity)) {
                        _context10.next = 3;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 3:
                      this.freqDataQueue.push(this.freqData.slice(0, this.columnTruncateLength));

                      if (this.includeRawAudio) {
                        this.analyser.getFloatTimeDomainData(this.timeData);
                        this.timeDataQueue.push(this.timeData.slice());
                      }

                      if (this.freqDataQueue.length > this.numFrames) {
                        // Drop the oldest frame (least recent).
                        this.freqDataQueue.shift();
                      }

                      shouldFire = this.tracker.tick();

                      if (!shouldFire) {
                        _context10.next = 16;
                        break;
                      }

                      freqData = flattenQueue(this.freqDataQueue);
                      freqDataTensor = getInputTensorFromFrequencyData(freqData, [1, this.numFrames, this.columnTruncateLength, 1]);

                      if (this.includeRawAudio) {
                        timeData = flattenQueue(this.timeDataQueue);
                        timeDataTensor = getInputTensorFromFrequencyData(timeData, [1, this.numFrames * this.fftSize]);
                      }

                      _context10.next = 13;
                      return this.spectrogramCallback(freqDataTensor, timeDataTensor);

                    case 13:
                      shouldRest = _context10.sent;

                      if (shouldRest) {
                        this.tracker.suppress();
                      }

                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["dispose"]([freqDataTensor, timeDataTensor]);

                    case 16:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "stop",
          value: function stop() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!(this.frameIntervalTask == null)) {
                        _context11.next = 2;
                        break;
                      }

                      throw new Error('Cannot stop because there is no ongoing streaming activity.');

                    case 2:
                      clearInterval(this.frameIntervalTask);
                      this.frameIntervalTask = null;
                      this.analyser.disconnect();
                      this.audioContext.close();

                      if (this.stream != null && this.stream.getTracks().length > 0) {
                        this.stream.getTracks()[0].stop();
                      }

                    case 7:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "setConfig",
          value: function setConfig(params) {
            throw new Error('setConfig() is not implemented for BrowserFftFeatureExtractor.');
          }
        }, {
          key: "getFeatures",
          value: function getFeatures() {
            throw new Error('getFeatures() is not implemented for ' + 'BrowserFftFeatureExtractor. Use the spectrogramCallback ' + 'field of the constructor config instead.');
          }
        }]);

        return BrowserFftFeatureExtractor;
      }();

      function flattenQueue(queue) {
        var frameSize = queue[0].length;
        var freqData = new Float32Array(queue.length * frameSize);
        queue.forEach(function (data, i) {
          return freqData.set(data, i * frameSize);
        });
        return freqData;
      }

      function getInputTensorFromFrequencyData(freqData, shape) {
        var vals = new Float32Array(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(shape)); // If the data is less than the output shape, the rest is padded with zeros.

        vals.set(freqData, vals.length - freqData.length);
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor"](vals, shape);
      }
      /**
       * A class that manages the firing of events based on periods
       * and suppression time.
       */


      var Tracker = /*#__PURE__*/function () {
        /**
         * Constructor of Tracker.
         *
         * @param period The event-firing period, in number of frames.
         * @param suppressionPeriod The suppression period, in number of frames.
         */
        function Tracker(period, suppressionPeriod) {
          var _this8 = this;

          _classCallCheck(this, Tracker);

          this.period = period;
          this.suppressionTime = suppressionPeriod == null ? 0 : suppressionPeriod;
          this.counter = 0;

          _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(this.period > 0, function () {
            return "Expected period to be positive, but got ".concat(_this8.period);
          });
        }
        /**
         * Mark a frame.
         *
         * @returns Whether the event should be fired at the current frame.
         */


        _createClass(Tracker, [{
          key: "tick",
          value: function tick() {
            this.counter++;
            var shouldFire = this.counter % this.period === 0 && (this.suppressionOnset == null || this.counter - this.suppressionOnset > this.suppressionTime);
            return shouldFire;
          }
          /**
           * Order the beginning of a supression period.
           */

        }, {
          key: "suppress",
          value: function suppress() {
            this.suppressionOnset = this.counter;
          }
        }]);

        return Tracker;
      }();
      /***/

    },

    /***/
    "MyYh":
    /*!************************************************!*\
      !*** ./src/app/speech-commands/src/version.ts ***!
      \************************************************/

    /*! exports provided: version */

    /***/
    function MyYh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "version", function () {
        return version;
      });
      /** @license See the LICENSE file. */
      // This code is auto-generated, do not modify this file!


      var version = '0.4.1';
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _plot_plot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plot/plot.component */
      "pV0i");
      /* harmony import */


      var _plotly_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./plotly.service */
      "C1vv");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_plotly_service__WEBPACK_IMPORTED_MODULE_3__["PlotlyService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_plot_plot_component__WEBPACK_IMPORTED_MODULE_2__["PlotComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_plot_plot_component__WEBPACK_IMPORTED_MODULE_2__["PlotComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_plot_plot_component__WEBPACK_IMPORTED_MODULE_2__["PlotComponent"]],
            providers: [_plotly_service__WEBPACK_IMPORTED_MODULE_3__["PlotlyService"]],
            exports: [_plot_plot_component__WEBPACK_IMPORTED_MODULE_2__["PlotComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Stxo":
    /*!***************************************************************!*\
      !*** ./src/app/speech-commands/src/browser_fft_recognizer.ts ***!
      \***************************************************************/

    /*! exports provided: UNKNOWN_TAG, SAVED_MODEL_METADATA_KEY, SAVE_PATH_PREFIX, localStorageWrapper, getMajorAndMinorVersion, BrowserFftSpeechCommandRecognizer, listSavedTransferModels, deleteSavedTransferModel */

    /***/
    function Stxo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UNKNOWN_TAG", function () {
        return UNKNOWN_TAG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SAVED_MODEL_METADATA_KEY", function () {
        return SAVED_MODEL_METADATA_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SAVE_PATH_PREFIX", function () {
        return SAVE_PATH_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "localStorageWrapper", function () {
        return localStorageWrapper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMajorAndMinorVersion", function () {
        return getMajorAndMinorVersion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserFftSpeechCommandRecognizer", function () {
        return BrowserFftSpeechCommandRecognizer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "listSavedTransferModels", function () {
        return listSavedTransferModels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteSavedTransferModel", function () {
        return deleteSavedTransferModel;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      "zhpf");
      /* harmony import */


      var _browser_fft_extractor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./browser_fft_extractor */
      "JNEL");
      /* harmony import */


      var _browser_fft_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./browser_fft_utils */
      "W0Lg");
      /* harmony import */


      var _dataset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dataset */
      "qUyx");
      /* harmony import */


      var _generic_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./generic_utils */
      "Y8Gl");
      /* harmony import */


      var _training_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./training_utils */
      "WsXE");
      /* harmony import */


      var _version__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./version */
      "MyYh");
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */


      var UNKNOWN_TAG = '_unknown_'; // Key to the local-storage item that holds a map from model name to word
      // list.

      var SAVED_MODEL_METADATA_KEY = 'tfjs-speech-commands-saved-model-metadata';
      var SAVE_PATH_PREFIX = 'indexeddb://tfjs-speech-commands-model/'; // Export a variable for injection during unit testing.
      // tslint:disable-next-line:no-any

      var localStorageWrapper = {
        localStorage: typeof window === 'undefined' ? null : window.localStorage
      };

      function getMajorAndMinorVersion(version) {
        var versionItems = version.split('.');
        return versionItems.slice(0, 2).join('.');
      }
      /**
       * Default window hop ratio used for extracting multiple
       * windows from a long spectrogram.
       */


      var DEFAULT_WINDOW_HOP_RATIO = 0.25;
      /**
       * Speech-Command Recognizer using browser-native (WebAudio) spectral featutres.
       */

      var BrowserFftSpeechCommandRecognizer = /*#__PURE__*/function () {
        /**
         * Constructor of BrowserFftSpeechCommandRecognizer.
         *
         * @param vocabulary An optional vocabulary specifier. Mutually exclusive
         *   with `modelURL` and `metadataURL`.
         * @param modelArtifactsOrURL An optional, custom model URL pointing to a
         *     model.json, or modelArtifacts in the format of `tf.io.ModelArtifacts`.
         *   file. Supported schemes: http://, https://, and node.js-only: file://.
         *   Mutually exclusive with `vocabulary`. If provided, `metadatURL`
         *   most also be provided.
         * @param metadataOrURL A custom metadata URL pointing to a metadata.json
         *   file. Or it can be a metadata JSON object itself. Must be provided
         *   together with `modelArtifactsOrURL`.
         */
        function BrowserFftSpeechCommandRecognizer(vocabulary, modelArtifactsOrURL, metadataOrURL) {
          _classCallCheck(this, BrowserFftSpeechCommandRecognizer);

          this.MODEL_URL_PREFIX = "https://storage.googleapis.com/tfjs-models/tfjs/speech-commands/v".concat(getMajorAndMinorVersion(_version__WEBPACK_IMPORTED_MODULE_7__["version"]), "/browser_fft");
          this.SAMPLE_RATE_HZ = 44100;
          this.FFT_SIZE = 1024;
          this.DEFAULT_SUPPRESSION_TIME_MILLIS = 0;
          this.streaming = false;
          this.transferRecognizers = {}; // TODO(cais): Consolidate the fields into a single config object when
          // upgrading to v1.0.

          _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(modelArtifactsOrURL == null && metadataOrURL == null || modelArtifactsOrURL != null && metadataOrURL != null, function () {
            return "modelURL and metadataURL must be both provided or " + "both not provided.";
          });

          if (modelArtifactsOrURL == null) {
            if (vocabulary == null) {
              vocabulary = BrowserFftSpeechCommandRecognizer.DEFAULT_VOCABULARY_NAME;
            } else {
              _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(BrowserFftSpeechCommandRecognizer.VALID_VOCABULARY_NAMES.indexOf(vocabulary) !== -1, function () {
                return "Invalid vocabulary name: '".concat(vocabulary, "'");
              });
            }

            this.vocabulary = vocabulary;
            this.modelArtifactsOrURL = "".concat(this.MODEL_URL_PREFIX, "/").concat(this.vocabulary, "/model.json");
            this.metadataOrURL = "".concat(this.MODEL_URL_PREFIX, "/").concat(this.vocabulary, "/metadata.json");
          } else {
            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(vocabulary == null, function () {
              return "vocabulary name must be null or undefined when modelURL is " + "provided";
            });

            this.modelArtifactsOrURL = modelArtifactsOrURL;
            this.metadataOrURL = metadataOrURL;
          }

          this.parameters = {
            sampleRateHz: this.SAMPLE_RATE_HZ,
            fftSize: this.FFT_SIZE
          };
        }
        /**
         * Start streaming recognition.
         *
         * To stop the recognition, use `stopListening()`.
         *
         * Example: TODO(cais): Add exapmle code snippet.
         *
         * @param callback The callback invoked whenever a word is recognized
         *   with a probability score greater than `config.probabilityThreshold`.
         *   It has the signature:
         *     (result: SpeechCommandRecognizerResult) => Promise<void>
         *   wherein result has the two fields:
         *   - scores: A Float32Array that contains the probability scores for all
         *     the words.
         *   - spectrogram: The spectrogram data, provided only if
         *     `config.includeSpectrogram` is `true`.
         * @param config The configurations for the streaming recognition to
         *   be started.
         *   The `modelName` field of `config` specifies the model to be used for
         *   online recognition. If not specified, it defaults to the name of the
         *   base model ('base'), i.e., the pretrained model not from transfer
         *   learning. If the recognizer instance has one or more transfer-learning
         *   models ready (as a result of calls to `collectTransferExample`
         *   and `trainTransferModel`), you can let this call use that
         *   model for prediction by specifying the corresponding `modelName`.
         * @throws Error, if streaming recognition is already started or
         *   if `config` contains invalid values.
         */


        _createClass(BrowserFftSpeechCommandRecognizer, [{
          key: "listen",
          value: function listen(callback, config) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this9 = this;

              var probabilityThreshold, invokeCallbackOnNoiseAndUnknown, overlapFactor, spectrogramCallback, suppressionTimeMillis;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!this.streaming) {
                        _context13.next = 2;
                        break;
                      }

                      throw new Error('Cannot start streaming again when streaming is ongoing.');

                    case 2:
                      _context13.next = 4;
                      return this.ensureModelLoaded();

                    case 4:
                      if (config == null) {
                        config = {};
                      }

                      probabilityThreshold = config.probabilityThreshold == null ? 0 : config.probabilityThreshold;

                      if (config.includeEmbedding) {
                        // Override probability threshold to 0 if includeEmbedding is true.
                        probabilityThreshold = 0;
                      }

                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(probabilityThreshold >= 0 && probabilityThreshold <= 1, function () {
                        return "Invalid probabilityThreshold value: ".concat(probabilityThreshold);
                      });

                      invokeCallbackOnNoiseAndUnknown = config.invokeCallbackOnNoiseAndUnknown == null ? false : config.invokeCallbackOnNoiseAndUnknown;

                      if (config.includeEmbedding) {
                        // Override invokeCallbackOnNoiseAndUnknown threshold to true if
                        // includeEmbedding is true.
                        invokeCallbackOnNoiseAndUnknown = true;
                      }

                      if (!(config.suppressionTimeMillis < 0)) {
                        _context13.next = 12;
                        break;
                      }

                      throw new Error("suppressionTimeMillis is expected to be >= 0, " + "but got ".concat(config.suppressionTimeMillis));

                    case 12:
                      overlapFactor = config.overlapFactor == null ? 0.5 : config.overlapFactor;

                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(overlapFactor >= 0 && overlapFactor < 1, function () {
                        return "Expected overlapFactor to be >= 0 and < 1, but got ".concat(overlapFactor);
                      });

                      spectrogramCallback = function spectrogramCallback(x, timeData) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                          var normalizedX, y, embedding, _this$modelWithEmbedd, _this$modelWithEmbedd2, scores, maxIndexTensor, maxIndex, maxScore, spectrogram, wordDetected;

                          return regeneratorRuntime.wrap(function _callee12$(_context12) {
                            while (1) {
                              switch (_context12.prev = _context12.next) {
                                case 0:
                                  normalizedX = Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_3__["normalize"])(x);

                                  if (!config.includeEmbedding) {
                                    _context12.next = 10;
                                    break;
                                  }

                                  _context12.next = 4;
                                  return this.ensureModelWithEmbeddingOutputCreated();

                                case 4:
                                  _this$modelWithEmbedd = this.modelWithEmbeddingOutput.predict(normalizedX);
                                  _this$modelWithEmbedd2 = _slicedToArray(_this$modelWithEmbedd, 2);
                                  y = _this$modelWithEmbedd2[0];
                                  embedding = _this$modelWithEmbedd2[1];
                                  _context12.next = 11;
                                  break;

                                case 10:
                                  y = this.model.predict(normalizedX);

                                case 11:
                                  _context12.next = 13;
                                  return y.data();

                                case 13:
                                  scores = _context12.sent;
                                  maxIndexTensor = y.argMax(-1);
                                  _context12.next = 17;
                                  return maxIndexTensor.data();

                                case 17:
                                  maxIndex = _context12.sent[0];
                                  maxScore = Math.max.apply(Math, _toConsumableArray(scores));

                                  _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["dispose"]([y, maxIndexTensor, normalizedX]);

                                  if (!(maxScore < probabilityThreshold)) {
                                    _context12.next = 24;
                                    break;
                                  }

                                  return _context12.abrupt("return", false);

                                case 24:
                                  spectrogram = undefined;

                                  if (!config.includeSpectrogram) {
                                    _context12.next = 31;
                                    break;
                                  }

                                  _context12.next = 28;
                                  return x.data();

                                case 28:
                                  _context12.t0 = _context12.sent;
                                  _context12.t1 = this.nonBatchInputShape[1];
                                  spectrogram = {
                                    data: _context12.t0,
                                    frameSize: _context12.t1
                                  };

                                case 31:
                                  wordDetected = true;

                                  if (!invokeCallbackOnNoiseAndUnknown) {
                                    // Skip background noise and unknown tokens.
                                    if (this.words[maxIndex] === _dataset__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_NOISE_TAG"] || this.words[maxIndex] === UNKNOWN_TAG) {
                                      wordDetected = false;
                                    }
                                  }

                                  if (wordDetected) {
                                    callback({
                                      scores: scores,
                                      spectrogram: spectrogram,
                                      embedding: embedding
                                    });
                                  } // Trigger suppression only if the word is neither unknown or
                                  // background noise.


                                  return _context12.abrupt("return", wordDetected);

                                case 35:
                                case "end":
                                  return _context12.stop();
                              }
                            }
                          }, _callee12, this);
                        }));
                      };

                      suppressionTimeMillis = config.suppressionTimeMillis == null ? this.DEFAULT_SUPPRESSION_TIME_MILLIS : config.suppressionTimeMillis;
                      this.audioDataExtractor = new _browser_fft_extractor__WEBPACK_IMPORTED_MODULE_2__["BrowserFftFeatureExtractor"]({
                        sampleRateHz: this.parameters.sampleRateHz,
                        numFramesPerSpectrogram: this.nonBatchInputShape[0],
                        columnTruncateLength: this.nonBatchInputShape[1],
                        suppressionTimeMillis: suppressionTimeMillis,
                        spectrogramCallback: spectrogramCallback,
                        overlapFactor: overlapFactor
                      });
                      _context13.next = 19;
                      return this.audioDataExtractor.start(config.audioTrackConstraints);

                    case 19:
                      this.streaming = true;
                      console.log(this.streaming);

                    case 21:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
          /**
           * Load the underlying tf.LayersModel instance and associated metadata.
           *
           * If the model and the metadata are already loaded, do nothing.
           */

        }, {
          key: "ensureModelLoaded",
          value: function ensureModelLoaded() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this10 = this;

              var model, outputShape, frameDurationMillis, numFrames;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (!(this.model != null)) {
                        _context14.next = 2;
                        break;
                      }

                      return _context14.abrupt("return");

                    case 2:
                      _context14.next = 4;
                      return this.ensureMetadataLoaded();

                    case 4:
                      if (!(typeof this.modelArtifactsOrURL === 'string')) {
                        _context14.next = 10;
                        break;
                      }

                      _context14.next = 7;
                      return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["loadLayersModel"](this.modelArtifactsOrURL);

                    case 7:
                      model = _context14.sent;
                      _context14.next = 13;
                      break;

                    case 10:
                      _context14.next = 12;
                      return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["loadLayersModel"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["io"].fromMemory(this.modelArtifactsOrURL.modelTopology, this.modelArtifactsOrURL.weightSpecs, this.modelArtifactsOrURL.weightData));

                    case 12:
                      model = _context14.sent;

                    case 13:
                      if (!(model.inputs.length !== 1)) {
                        _context14.next = 15;
                        break;
                      }

                      throw new Error("Expected model to have 1 input, but got a model with " + "".concat(model.inputs.length, " inputs"));

                    case 15:
                      if (!(model.inputs[0].shape.length !== 4)) {
                        _context14.next = 17;
                        break;
                      }

                      throw new Error("Expected model to have an input shape of rank 4, " + "but got an input shape of rank ".concat(model.inputs[0].shape.length));

                    case 17:
                      if (!(model.inputs[0].shape[3] !== 1)) {
                        _context14.next = 19;
                        break;
                      }

                      throw new Error("Expected model to have an input shape with 1 as the last " + "dimension, but got input shape" + "".concat(JSON.stringify(model.inputs[0].shape[3]), "}"));

                    case 19:
                      // Check the consistency between the word labels and the model's output
                      // shape.
                      outputShape = model.outputShape;

                      if (!(outputShape.length !== 2)) {
                        _context14.next = 22;
                        break;
                      }

                      throw new Error("Expected loaded model to have an output shape of rank 2," + "but received shape ".concat(JSON.stringify(outputShape)));

                    case 22:
                      if (!(outputShape[1] !== this.words.length)) {
                        _context14.next = 24;
                        break;
                      }

                      throw new Error("Mismatch between the last dimension of model's output shape " + "(".concat(outputShape[1], ") and number of words ") + "(".concat(this.words.length, ")."));

                    case 24:
                      this.model = model;
                      this.freezeModel();
                      this.nonBatchInputShape = model.inputs[0].shape.slice(1);
                      this.elementsPerExample = 1;
                      model.inputs[0].shape.slice(1).forEach(function (dimSize) {
                        return _this10.elementsPerExample *= dimSize;
                      });
                      this.warmUpModel();
                      frameDurationMillis = this.parameters.fftSize / this.parameters.sampleRateHz * 1e3;
                      numFrames = model.inputs[0].shape[1];
                      this.parameters.spectrogramDurationMillis = numFrames * frameDurationMillis;

                    case 33:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
          /**
           * Construct a two-output model that includes the following outputs:
           *
           * 1. The same softmax probability output as the original model's output
           * 2. The embedding, i.e., activation from the second-last dense layer of
           *    the original model.
           */

        }, {
          key: "ensureModelWithEmbeddingOutputCreated",
          value: function ensureModelWithEmbeddingOutputCreated() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var secondLastDenseLayer, i;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!(this.modelWithEmbeddingOutput != null)) {
                        _context15.next = 2;
                        break;
                      }

                      return _context15.abrupt("return");

                    case 2:
                      _context15.next = 4;
                      return this.ensureModelLoaded();

                    case 4:
                      i = this.model.layers.length - 2;

                    case 5:
                      if (!(i >= 0)) {
                        _context15.next = 12;
                        break;
                      }

                      if (!(this.model.layers[i].getClassName() === 'Dense')) {
                        _context15.next = 9;
                        break;
                      }

                      secondLastDenseLayer = this.model.layers[i];
                      return _context15.abrupt("break", 12);

                    case 9:
                      --i;
                      _context15.next = 5;
                      break;

                    case 12:
                      if (!(secondLastDenseLayer == null)) {
                        _context15.next = 14;
                        break;
                      }

                      throw new Error('Failed to find second last dense layer in the original model.');

                    case 14:
                      this.modelWithEmbeddingOutput = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["model"]({
                        inputs: this.model.inputs,
                        outputs: [this.model.outputs[0], secondLastDenseLayer.output]
                      });

                    case 15:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "warmUpModel",
          value: function warmUpModel() {
            var _this11 = this;

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
              var x = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["zeros"]([1].concat(_this11.nonBatchInputShape));

              for (var i = 0; i < 3; ++i) {
                _this11.model.predict(x);
              }
            });
          }
        }, {
          key: "ensureMetadataLoaded",
          value: function ensureMetadataLoaded() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var metadataJSON, legacyWords;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!(this.words != null)) {
                        _context16.next = 2;
                        break;
                      }

                      return _context16.abrupt("return");

                    case 2:
                      if (!(typeof this.metadataOrURL === 'string')) {
                        _context16.next = 8;
                        break;
                      }

                      _context16.next = 5;
                      return Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_3__["loadMetadataJson"])(this.metadataOrURL);

                    case 5:
                      _context16.t0 = _context16.sent;
                      _context16.next = 9;
                      break;

                    case 8:
                      _context16.t0 = this.metadataOrURL;

                    case 9:
                      metadataJSON = _context16.t0;

                      if (!(metadataJSON.wordLabels == null)) {
                        _context16.next = 17;
                        break;
                      }

                      // In some legacy formats, the field 'words', instead of 'wordLabels',
                      // was populated. This branch ensures backward compatibility with those
                      // formats.
                      // tslint:disable-next-line:no-any
                      legacyWords = metadataJSON['words'];

                      if (!(legacyWords == null)) {
                        _context16.next = 14;
                        break;
                      }

                      throw new Error('Cannot find field "words" or "wordLabels" in metadata JSON file');

                    case 14:
                      this.words = legacyWords;
                      _context16.next = 18;
                      break;

                    case 17:
                      this.words = metadataJSON.wordLabels;

                    case 18:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
          /**
           * Stop streaming recognition.
           *
           * @throws Error if there is not ongoing streaming recognition.
           */

        }, {
          key: "stopListening",
          value: function stopListening() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (this.streaming) {
                        _context17.next = 2;
                        break;
                      }

                      throw new Error('Cannot stop streaming when streaming is not ongoing.');

                    case 2:
                      _context17.next = 4;
                      return this.audioDataExtractor.stop();

                    case 4:
                      this.streaming = false;

                    case 5:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
          /**
           * Check if streaming recognition is ongoing.
           */

        }, {
          key: "isListening",
          value: function isListening() {
            return this.streaming;
          }
          /**
           * Get the array of word labels.
           *
           * @throws Error If this model is called before the model is loaded.
           */

        }, {
          key: "wordLabels",
          value: function wordLabels() {
            return this.words;
          }
          /**
           * Get the parameters of this instance of BrowserFftSpeechCommandRecognizer.
           *
           * @returns Parameters of this instance.
           */

        }, {
          key: "params",
          value: function params() {
            return this.parameters;
          }
          /**
           * Get the input shape of the underlying tf.LayersModel.
           *
           * @returns The input shape.
           */

        }, {
          key: "modelInputShape",
          value: function modelInputShape() {
            if (this.model == null) {
              throw new Error('Model has not been loaded yet. Load model by calling ' + 'ensureModelLoaded(), recognize(), or listen().');
            }

            return this.model.inputs[0].shape;
          }
          /**
           * Run offline (non-streaming) recognition on a spectrogram.
           *
           * @param input Spectrogram. Either a `tf.Tensor` of a `Float32Array`.
           *   - If a `tf.Tensor`, must be rank-4 and match the model's expected
           *     input shape in 2nd dimension (# of spectrogram columns), the 3rd
           *     dimension (# of frequency-domain points per column), and the 4th
           *     dimension (always 1). The 1st dimension can be 1, for single-example
           *     recogntion, or any value >1, for batched recognition.
           *   - If a `Float32Array`, must have a length divisible by the number
           *     of elements per spectrogram, i.e.,
           *     (# of spectrogram columns) * (# of frequency-domain points per column).
           * @param config Optional configuration object.
           * @returns Result of the recognition, with the following field:
           *   scores:
           *   - A `Float32Array` if there is only one input exapmle.
           *   - An `Array` of `Float32Array`, if there are multiple input examples.
           */

        }, {
          key: "recognize",
          value: function recognize(input, config) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var spectrogramData, numExamples, inputTensor, outTensor, output, outAndEmbedding, unstacked, scorePromises;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (config == null) {
                        config = {};
                      }

                      _context18.next = 3;
                      return this.ensureModelLoaded();

                    case 3:
                      if (!(input == null)) {
                        _context18.next = 8;
                        break;
                      }

                      _context18.next = 6;
                      return this.recognizeOnline();

                    case 6:
                      spectrogramData = _context18.sent;
                      input = spectrogramData.data;

                    case 8:
                      if (!(input instanceof _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["Tensor"])) {
                        _context18.next = 14;
                        break;
                      }

                      // Check input shape.
                      this.checkInputTensorShape(input);
                      inputTensor = input;
                      numExamples = input.shape[0];
                      _context18.next = 18;
                      break;

                    case 14:
                      if (!(input.length % this.elementsPerExample)) {
                        _context18.next = 16;
                        break;
                      }

                      throw new Error("The length of the input Float32Array ".concat(input.length, " ") + "is not divisible by the number of tensor elements per " + "per example expected by the model ".concat(this.elementsPerExample, "."));

                    case 16:
                      numExamples = input.length / this.elementsPerExample;
                      inputTensor = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor4d"](input, [numExamples].concat(this.nonBatchInputShape));

                    case 18:
                      output = {
                        scores: null
                      };

                      if (!config.includeEmbedding) {
                        _context18.next = 27;
                        break;
                      }

                      _context18.next = 22;
                      return this.ensureModelWithEmbeddingOutputCreated();

                    case 22:
                      outAndEmbedding = this.modelWithEmbeddingOutput.predict(inputTensor);
                      outTensor = outAndEmbedding[0];
                      output.embedding = outAndEmbedding[1];
                      _context18.next = 28;
                      break;

                    case 27:
                      outTensor = this.model.predict(inputTensor);

                    case 28:
                      if (!(numExamples === 1)) {
                        _context18.next = 34;
                        break;
                      }

                      _context18.next = 31;
                      return outTensor.data();

                    case 31:
                      output.scores = _context18.sent;
                      _context18.next = 40;
                      break;

                    case 34:
                      unstacked = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["unstack"](outTensor);
                      scorePromises = unstacked.map(function (item) {
                        return item.data();
                      });
                      _context18.next = 38;
                      return Promise.all(scorePromises);

                    case 38:
                      output.scores = _context18.sent;

                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["dispose"](unstacked);

                    case 40:
                      if (!config.includeSpectrogram) {
                        _context18.next = 51;
                        break;
                      }

                      if (!(input instanceof _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["Tensor"])) {
                        _context18.next = 47;
                        break;
                      }

                      _context18.next = 44;
                      return input.data();

                    case 44:
                      _context18.t0 = _context18.sent;
                      _context18.next = 48;
                      break;

                    case 47:
                      _context18.t0 = input;

                    case 48:
                      _context18.t1 = _context18.t0;
                      _context18.t2 = this.nonBatchInputShape[1];
                      output.spectrogram = {
                        data: _context18.t1,
                        frameSize: _context18.t2
                      };

                    case 51:
                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["dispose"](outTensor);

                      return _context18.abrupt("return", output);

                    case 53:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "recognizeOnline",
          value: function recognizeOnline() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this12 = this;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      return _context20.abrupt("return", new Promise(function (resolve, reject) {
                        var spectrogramCallback = function spectrogramCallback(x) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                            var normalizedX;
                            return regeneratorRuntime.wrap(function _callee19$(_context19) {
                              while (1) {
                                switch (_context19.prev = _context19.next) {
                                  case 0:
                                    normalizedX = Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_3__["normalize"])(x);
                                    _context19.next = 3;
                                    return this.audioDataExtractor.stop();

                                  case 3:
                                    _context19.t0 = resolve;
                                    _context19.next = 6;
                                    return normalizedX.data();

                                  case 6:
                                    _context19.t1 = _context19.sent;
                                    _context19.t2 = this.nonBatchInputShape[1];
                                    _context19.t3 = {
                                      data: _context19.t1,
                                      frameSize: _context19.t2
                                    };
                                    (0, _context19.t0)(_context19.t3);
                                    normalizedX.dispose();
                                    return _context19.abrupt("return", false);

                                  case 12:
                                  case "end":
                                    return _context19.stop();
                                }
                              }
                            }, _callee19, this);
                          }));
                        };

                        _this12.audioDataExtractor = new _browser_fft_extractor__WEBPACK_IMPORTED_MODULE_2__["BrowserFftFeatureExtractor"]({
                          sampleRateHz: _this12.parameters.sampleRateHz,
                          numFramesPerSpectrogram: _this12.nonBatchInputShape[0],
                          columnTruncateLength: _this12.nonBatchInputShape[1],
                          suppressionTimeMillis: 0,
                          spectrogramCallback: spectrogramCallback,
                          overlapFactor: 0
                        });

                        _this12.audioDataExtractor.start();
                      }));

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }));
          }
        }, {
          key: "createTransfer",
          value: function createTransfer(name) {
            if (this.model == null) {
              throw new Error('Model has not been loaded yet. Load model by calling ' + 'ensureModelLoaded(), recognizer(), or listen().');
            }

            if (name == "") {
              throw new Error('Model has not been loaded yet. Load model by calling ' + 'ensureModelLoaded(), recognizer(), or listen().');
            }

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(name != null && typeof name === 'string' && name.length > 1, function () {
              return "Expected the name for a transfer-learning recognized to be a " + "non-empty string, but got ".concat(JSON.stringify(name));
            });

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(this.transferRecognizers[name] == null, function () {
              return "There is already a transfer-learning model named '".concat(name, "'");
            });

            var transfer = new TransferBrowserFftSpeechCommandRecognizer(name, this.parameters, this.model);
            this.transferRecognizers[name] = transfer;
            return transfer;
          }
        }, {
          key: "freezeModel",
          value: function freezeModel() {
            var _iterator5 = _createForOfIteratorHelper(this.model.layers),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var layer = _step5.value;
                layer.trainable = false;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }, {
          key: "checkInputTensorShape",
          value: function checkInputTensorShape(input) {
            var expectedRank = this.model.inputs[0].shape.length;

            if (input.shape.length !== expectedRank) {
              throw new Error("Expected input Tensor to have rank ".concat(expectedRank, ", ") + "but got rank ".concat(input.shape.length, " that differs "));
            }

            var nonBatchedShape = input.shape.slice(1);
            var expectedNonBatchShape = this.model.inputs[0].shape.slice(1);

            if (!_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].arraysEqual(nonBatchedShape, expectedNonBatchShape)) {
              throw new Error("Expected input to have shape [null,".concat(expectedNonBatchShape, "], ") + "but got shape [null,".concat(nonBatchedShape, "]"));
            }
          }
        }]);

        return BrowserFftSpeechCommandRecognizer;
      }();

      BrowserFftSpeechCommandRecognizer.VALID_VOCABULARY_NAMES = ['18w', 'directional4w'];
      BrowserFftSpeechCommandRecognizer.DEFAULT_VOCABULARY_NAME = '18w';
      /**
       * A subclass of BrowserFftSpeechCommandRecognizer: Transfer-learned model.
       */

      var TransferBrowserFftSpeechCommandRecognizer = /*#__PURE__*/function (_BrowserFftSpeechComm) {
        _inherits(TransferBrowserFftSpeechCommandRecognizer, _BrowserFftSpeechComm);

        var _super = _createSuper(TransferBrowserFftSpeechCommandRecognizer);

        /**
         * Constructor of TransferBrowserFftSpeechCommandRecognizer.
         *
         * @param name Name of the transfer-learned recognizer. Must be a non-empty
         *   string.
         * @param parameters Parameters from the base recognizer.
         * @param baseModel Model from the base recognizer.
         */
        function TransferBrowserFftSpeechCommandRecognizer(name, parameters, baseModel) {
          var _this13;

          _classCallCheck(this, TransferBrowserFftSpeechCommandRecognizer);

          _this13 = _super.call(this);
          _this13.name = name;
          _this13.parameters = parameters;
          _this13.baseModel = baseModel;

          _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(name != null && typeof name === 'string' && name.length > 0, function () {
            return "The name of a transfer model must be a non-empty string, " + "but got ".concat(JSON.stringify(name));
          });

          _this13.nonBatchInputShape = _this13.baseModel.inputs[0].shape.slice(1);
          _this13.words = null;
          _this13.dataset = new _dataset__WEBPACK_IMPORTED_MODULE_4__["Dataset"]();
          return _this13;
        }
        /**
         * Collect an example for transfer learning via WebAudio.
         *
         * @param {string} word Name of the word. Must not overlap with any of the
         *   words the base model is trained to recognize.
         * @param {ExampleCollectionOptions}
         * @returns {SpectrogramData} The spectrogram of the acquired the example.
         * @throws Error, if word belongs to the set of words the base model is
         *   trained to recognize.
         */


        _createClass(TransferBrowserFftSpeechCommandRecognizer, [{
          key: "collectExample",
          value: function collectExample(word, options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this14 = this;

              var numFramesPerSpectrogram, _frameDurationSec, frameDurationSec, totalDurationSec;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(!this.streaming, function () {
                        return 'Cannot start collection of transfer-learning example because ' + 'a streaming recognition or transfer-learning example collection ' + 'is ongoing';
                      });

                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(word != null && typeof word === 'string' && word.length > 0, function () {
                        return "Must provide a non-empty string when collecting transfer-" + "learning example";
                      });

                      if (options == null) {
                        options = {};
                      }

                      if (!(options.durationMultiplier != null && options.durationSec != null)) {
                        _context22.next = 5;
                        break;
                      }

                      throw new Error("durationMultiplier and durationSec are mutually exclusive, " + "but are both specified.");

                    case 5:
                      if (options.durationSec != null) {
                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(options.durationSec > 0, function () {
                          return "Expected durationSec to be > 0, but got ".concat(options.durationSec);
                        });

                        _frameDurationSec = this.parameters.fftSize / this.parameters.sampleRateHz;
                        numFramesPerSpectrogram = Math.ceil(options.durationSec / _frameDurationSec);
                      } else if (options.durationMultiplier != null) {
                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(options.durationMultiplier >= 1, function () {
                          return "Expected duration multiplier to be >= 1, " + "but got ".concat(options.durationMultiplier);
                        });

                        numFramesPerSpectrogram = Math.round(this.nonBatchInputShape[0] * options.durationMultiplier);
                      } else {
                        numFramesPerSpectrogram = this.nonBatchInputShape[0];
                      }

                      if (options.snippetDurationSec != null) {
                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(options.snippetDurationSec > 0, function () {
                          return "snippetDurationSec is expected to be > 0, but got " + "".concat(options.snippetDurationSec);
                        });

                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(options.onSnippet != null, function () {
                          return "onSnippet must be provided if snippetDurationSec " + "is provided.";
                        });
                      }

                      if (options.onSnippet != null) {
                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(options.snippetDurationSec != null, function () {
                          return "snippetDurationSec must be provided if onSnippet " + "is provided.";
                        });
                      }

                      frameDurationSec = this.parameters.fftSize / this.parameters.sampleRateHz;
                      totalDurationSec = frameDurationSec * numFramesPerSpectrogram;
                      this.streaming = true;
                      return _context22.abrupt("return", new Promise(function (resolve) {
                        var stepFactor = options.snippetDurationSec == null ? 1 : options.snippetDurationSec / totalDurationSec;
                        var overlapFactor = 1 - stepFactor;
                        var callbackCountTarget = Math.round(1 / stepFactor);
                        var callbackCount = 0;
                        var lastIndex = -1;
                        var spectrogramSnippets = [];

                        var spectrogramCallback = function spectrogramCallback(freqData, timeData) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                            var normalizedX, data, i, increment, snippetData, normalized, finalSpectrogram;
                            return regeneratorRuntime.wrap(function _callee21$(_context21) {
                              while (1) {
                                switch (_context21.prev = _context21.next) {
                                  case 0:
                                    if (!(options.onSnippet == null)) {
                                      _context21.next = 35;
                                      break;
                                    }

                                    normalizedX = Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_3__["normalize"])(freqData);
                                    _context21.t0 = this.dataset;
                                    _context21.t1 = word;
                                    _context21.next = 6;
                                    return normalizedX.data();

                                  case 6:
                                    _context21.t2 = _context21.sent;
                                    _context21.t3 = this.nonBatchInputShape[1];
                                    _context21.t4 = {
                                      data: _context21.t2,
                                      frameSize: _context21.t3
                                    };

                                    if (!options.includeRawAudio) {
                                      _context21.next = 17;
                                      break;
                                    }

                                    _context21.next = 12;
                                    return timeData.data();

                                  case 12:
                                    _context21.t6 = _context21.sent;
                                    _context21.t7 = this.audioDataExtractor.sampleRateHz;
                                    _context21.t5 = {
                                      data: _context21.t6,
                                      sampleRateHz: _context21.t7
                                    };
                                    _context21.next = 18;
                                    break;

                                  case 17:
                                    _context21.t5 = undefined;

                                  case 18:
                                    _context21.t8 = _context21.t5;
                                    _context21.t9 = {
                                      label: _context21.t1,
                                      spectrogram: _context21.t4,
                                      rawAudio: _context21.t8
                                    };

                                    _context21.t0.addExample.call(_context21.t0, _context21.t9);

                                    normalizedX.dispose();
                                    _context21.next = 24;
                                    return this.audioDataExtractor.stop();

                                  case 24:
                                    this.streaming = false;
                                    this.collateTransferWords();
                                    _context21.t10 = resolve;
                                    _context21.next = 29;
                                    return freqData.data();

                                  case 29:
                                    _context21.t11 = _context21.sent;
                                    _context21.t12 = this.nonBatchInputShape[1];
                                    _context21.t13 = {
                                      data: _context21.t11,
                                      frameSize: _context21.t12
                                    };
                                    (0, _context21.t10)(_context21.t13);
                                    _context21.next = 69;
                                    break;

                                  case 35:
                                    _context21.next = 37;
                                    return freqData.data();

                                  case 37:
                                    data = _context21.sent;

                                    if (lastIndex === -1) {
                                      lastIndex = data.length;
                                    }

                                    i = lastIndex - 1;

                                    while (data[i] !== 0 && i >= 0) {
                                      i--;
                                    }

                                    increment = lastIndex - i - 1;
                                    lastIndex = i + 1;
                                    snippetData = data.slice(data.length - increment, data.length);
                                    spectrogramSnippets.push(snippetData);

                                    if (options.onSnippet != null) {
                                      options.onSnippet({
                                        data: snippetData,
                                        frameSize: this.nonBatchInputShape[1]
                                      });
                                    }

                                    if (!(callbackCount++ === callbackCountTarget)) {
                                      _context21.next = 69;
                                      break;
                                    }

                                    _context21.next = 49;
                                    return this.audioDataExtractor.stop();

                                  case 49:
                                    this.streaming = false;
                                    this.collateTransferWords();
                                    normalized = Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_3__["normalizeFloat32Array"])(Object(_generic_utils__WEBPACK_IMPORTED_MODULE_5__["concatenateFloat32Arrays"])(spectrogramSnippets));
                                    finalSpectrogram = {
                                      data: normalized,
                                      frameSize: this.nonBatchInputShape[1]
                                    };
                                    _context21.t14 = this.dataset;
                                    _context21.t15 = word;
                                    _context21.t16 = finalSpectrogram;

                                    if (!options.includeRawAudio) {
                                      _context21.next = 64;
                                      break;
                                    }

                                    _context21.next = 59;
                                    return timeData.data();

                                  case 59:
                                    _context21.t18 = _context21.sent;
                                    _context21.t19 = this.audioDataExtractor.sampleRateHz;
                                    _context21.t17 = {
                                      data: _context21.t18,
                                      sampleRateHz: _context21.t19
                                    };
                                    _context21.next = 65;
                                    break;

                                  case 64:
                                    _context21.t17 = undefined;

                                  case 65:
                                    _context21.t20 = _context21.t17;
                                    _context21.t21 = {
                                      label: _context21.t15,
                                      spectrogram: _context21.t16,
                                      rawAudio: _context21.t20
                                    };

                                    _context21.t14.addExample.call(_context21.t14, _context21.t21);

                                    // TODO(cais): Fix 1-tensor memory leak.
                                    resolve(finalSpectrogram);

                                  case 69:
                                    return _context21.abrupt("return", false);

                                  case 70:
                                  case "end":
                                    return _context21.stop();
                                }
                              }
                            }, _callee21, this);
                          }));
                        };

                        _this14.audioDataExtractor = new _browser_fft_extractor__WEBPACK_IMPORTED_MODULE_2__["BrowserFftFeatureExtractor"]({
                          sampleRateHz: _this14.parameters.sampleRateHz,
                          numFramesPerSpectrogram: numFramesPerSpectrogram,
                          columnTruncateLength: _this14.nonBatchInputShape[1],
                          suppressionTimeMillis: 0,
                          spectrogramCallback: spectrogramCallback,
                          overlapFactor: overlapFactor,
                          includeRawAudio: options.includeRawAudio
                        });

                        _this14.audioDataExtractor.start(options.audioTrackConstraints);
                      }));

                    case 12:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
          /**
           * Clear all transfer learning examples collected so far.
           */

        }, {
          key: "clearExamples",
          value: function clearExamples() {
            var _this15 = this;

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(this.words != null && this.words.length > 0 && !this.dataset.empty(), function () {
              return "No transfer learning examples exist for model name ".concat(_this15.name);
            });

            this.dataset.clear();
            this.words = null;
          }
          /**
           * Get counts of the word examples that have been collected for a
           * transfer-learning model.
           *
           * @returns {{[word: string]: number}} A map from word name to number of
           *   examples collected for that word so far.
           */

        }, {
          key: "countExamples",
          value: function countExamples() {
            if (this.dataset.empty()) {
              throw new Error("No examples have been collected for transfer-learning model " + "named '".concat(this.name, "' yet."));
            }

            return this.dataset.getExampleCounts();
          }
          /**
           * Get examples currently held by the transfer-learning recognizer.
           *
           * @param label Label requested.
           * @returns An array of `Example`s, along with their UIDs.
           */

        }, {
          key: "getExamples",
          value: function getExamples(label) {
            return this.dataset.getExamples(label);
          }
          /** Set the key frame index of a given example. */

        }, {
          key: "setExampleKeyFrameIndex",
          value: function setExampleKeyFrameIndex(uid, keyFrameIndex) {
            this.dataset.setExampleKeyFrameIndex(uid, keyFrameIndex);
          }
          /**
           * Remove an example from the current dataset.
           *
           * @param uid The UID of the example to remove.
           */

        }, {
          key: "removeExample",
          value: function removeExample(uid) {
            this.dataset.removeExample(uid);
            this.collateTransferWords();
          }
          /**
           * Check whether the underlying dataset is empty.
           *
           * @returns A boolean indicating whether the underlying dataset is empty.
           */

        }, {
          key: "isDatasetEmpty",
          value: function isDatasetEmpty() {
            return this.dataset.empty();
          }
          /**
           * Load an array of serialized examples.
           *
           * @param serialized The examples in their serialized format.
           * @param clearExisting Whether to clear the existing examples while
           *   performing the loading (default: false).
           */

        }, {
          key: "loadExamples",
          value: function loadExamples(serialized) {
            var clearExisting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var incomingDataset = new _dataset__WEBPACK_IMPORTED_MODULE_4__["Dataset"](serialized);

            if (clearExisting) {
              this.clearExamples();
            }

            var incomingVocab = incomingDataset.getVocabulary();

            var _iterator6 = _createForOfIteratorHelper(incomingVocab),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var label = _step6.value;
                var examples = incomingDataset.getExamples(label);

                var _iterator7 = _createForOfIteratorHelper(examples),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var example = _step7.value;
                    this.dataset.addExample(example.example);
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            this.collateTransferWords();
          }
          /**
           * Serialize the existing examples.
           *
           * @param wordLabels Optional word label(s) to serialize. If specified, only
           *   the examples with labels matching the argument will be serialized. If
           *   any specified word label does not exist in the vocabulary of this
           *   transfer recognizer, an Error will be thrown.
           * @returns An `ArrayBuffer` object amenable to transmission and storage.
           */

        }, {
          key: "serializeExamples",
          value: function serializeExamples(wordLabels) {
            return this.dataset.serialize(wordLabels);
          }
          /**
           * Collect the vocabulary of this transfer-learned recognizer.
           *
           * The words are put in an alphabetically sorted order.
           */

        }, {
          key: "collateTransferWords",
          value: function collateTransferWords() {
            this.words = this.dataset.getVocabulary();
          }
          /**
           * Collect the transfer-learning data as `tf.Tensor`s.
           *
           * Used for training and evaluation when the amount of data is relatively
           * small.
           *
           * @param windowHopRatio Ratio betwen hop length in number of frames and the
           *   number of frames in a long spectrogram. Used during extraction
           *   of multiple windows from the long spectrogram.
           * @returns xs: The feature tensors (xs), a 4D tf.Tensor.
           *          ys: The target tensors (ys), one-hot encoding, a 2D tf.Tensor.
           */

        }, {
          key: "collectTransferDataAsTensors",
          value: function collectTransferDataAsTensors(windowHopRatio, augmentationOptions) {
            var numFrames = this.nonBatchInputShape[0];
            windowHopRatio = windowHopRatio || DEFAULT_WINDOW_HOP_RATIO;
            var hopFrames = Math.round(windowHopRatio * numFrames);
            var out = this.dataset.getData(null, Object.assign({
              numFrames: numFrames,
              hopFrames: hopFrames
            }, augmentationOptions));
            return {
              xs: out.xs,
              ys: out.ys
            };
          }
          /**
           * Same as `collectTransferDataAsTensors`, but returns `tf.data.Dataset`s.
           *
           * Used for training and evaluation when the amount of data is large.
           *
           * @param windowHopRatio Ratio betwen hop length in number of frames and the
           *   number of frames in a long spectrogram. Used during extraction
           *   of multiple windows from the long spectrogram.
           * @param validationSplit The validation split to be used for splitting
           *   the raw data between the `tf.data.Dataset` objects for training and
           *   validation.
           * @param batchSize Batch size used for the `tf.data.Dataset.batch()` call
           *   during the creation of the dataset objects.
           * @return Two `tf.data.Dataset` objects, one for training and one for
           *   validation. Each of the objects may be directly fed into
           *   `this.model.fitDataset`.
           */

        }, {
          key: "collectTransferDataAsTfDataset",
          value: function collectTransferDataAsTfDataset(windowHopRatio) {
            var validationSplit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
            var batchSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 32;
            var augmentationOptions = arguments.length > 3 ? arguments[3] : undefined;
            var numFrames = this.nonBatchInputShape[0];
            windowHopRatio = windowHopRatio || DEFAULT_WINDOW_HOP_RATIO;
            var hopFrames = Math.round(windowHopRatio * numFrames);
            return this.dataset.getData(null, Object.assign({
              numFrames: numFrames,
              hopFrames: hopFrames,
              getDataset: true,
              datasetBatchSize: batchSize,
              datasetValidationSplit: validationSplit
            }, augmentationOptions)); // TODO(cais): See if we can tighten the typing.
          }
          /**
           * Train the transfer-learning model.
           *
           * The last dense layer of the base model is replaced with new softmax dense
           * layer.
           *
           * It is assume that at least one category of data has been collected (using
           * multiple calls to the `collectTransferExample` method).
           *
           * @param config {TransferLearnConfig} Optional configurations fot the
           *   training of the transfer-learning model.
           * @returns {tf.History} A history object with the loss and accuracy values
           *   from the training of the transfer-learning model.
           * @throws Error, if `modelName` is invalid or if not sufficient training
           *   examples have been collected yet.
           */

        }, {
          key: "train",
          value: function train(config) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var _this16 = this;

              var datasetDurationMillisThreshold;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(this.words != null && this.words.length > 0, function () {
                        return "Cannot train transfer-learning model '".concat(_this16.name, "' because no ") + "transfer learning example has been collected.";
                      });

                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(this.words.length > 1, function () {
                        return "Cannot train transfer-learning model '".concat(_this16.name, "' because only ") + "1 word label ('".concat(JSON.stringify(_this16.words), "') ") + "has been collected for transfer learning. Requires at least 2.";
                      });

                      if (config.fineTuningEpochs != null) {
                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(config.fineTuningEpochs >= 0 && Number.isInteger(config.fineTuningEpochs), function () {
                          return "If specified, fineTuningEpochs must be a non-negative " + "integer, but received ".concat(config.fineTuningEpochs);
                        });
                      }

                      if (config == null) {
                        config = {};
                      }

                      if (this.model == null) {
                        this.createTransferModelFromBaseModel();
                      } // This layer needs to be frozen for the initial phase of the
                      // transfer learning. During subsequent fine-tuning (if any), it will
                      // be unfrozen.


                      this.secondLastBaseDenseLayer.trainable = false; // Compile model for training.

                      this.model.compile({
                        loss: 'categoricalCrossentropy',
                        optimizer: config.optimizer || 'sgd',
                        metrics: ['acc']
                      }); // Use `tf.data.Dataset` objects for training of the total duration of
                      // the recordings exceeds 60 seconds. Otherwise, use `tf.Tensor` objects.

                      datasetDurationMillisThreshold = config.fitDatasetDurationMillisThreshold == null ? 60e3 : config.fitDatasetDurationMillisThreshold;

                      if (!(this.dataset.durationMillis() > datasetDurationMillisThreshold)) {
                        _context23.next = 13;
                        break;
                      }

                      console.log("Detected large dataset: total duration = " + "".concat(this.dataset.durationMillis(), " ms > ") + "".concat(datasetDurationMillisThreshold, " ms. ") + "Training transfer model using fitDataset() instead of fit()");
                      return _context23.abrupt("return", this.trainOnDataset(config));

                    case 13:
                      return _context23.abrupt("return", this.trainOnTensors(config));

                    case 14:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
          /** Helper function for training on tf.data.Dataset objects. */

        }, {
          key: "trainOnDataset",
          value: function trainOnDataset(config) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var batchSize, windowHopRatio, _this$collectTransfer, _this$collectTransfer2, trainDataset, valDataset, t0, history, _t2, fineTuningHistory;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(config.epochs > 0, function () {
                        return "Invalid config.epochs";
                      }); // Train transfer-learning model using fitDataset


                      batchSize = config.batchSize == null ? 32 : config.batchSize;
                      windowHopRatio = config.windowHopRatio || DEFAULT_WINDOW_HOP_RATIO;
                      _this$collectTransfer = this.collectTransferDataAsTfDataset(windowHopRatio, config.validationSplit, batchSize, {
                        augmentByMixingNoiseRatio: config.augmentByMixingNoiseRatio
                      }), _this$collectTransfer2 = _slicedToArray(_this$collectTransfer, 2), trainDataset = _this$collectTransfer2[0], valDataset = _this$collectTransfer2[1];
                      t0 = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].now();
                      _context24.next = 7;
                      return this.model.fitDataset(trainDataset, {
                        epochs: config.epochs,
                        validationData: config.validationSplit > 0 ? valDataset : null,
                        callbacks: config.callback == null ? null : [config.callback]
                      });

                    case 7:
                      history = _context24.sent;
                      console.log("fitDataset() took ".concat((_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].now() - t0).toFixed(2), " ms"));

                      if (!(config.fineTuningEpochs != null && config.fineTuningEpochs > 0)) {
                        _context24.next = 18;
                        break;
                      }

                      // Perform fine-tuning.
                      _t2 = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].now();
                      _context24.next = 13;
                      return this.fineTuningUsingTfDatasets(config, trainDataset, valDataset);

                    case 13:
                      fineTuningHistory = _context24.sent;
                      console.log("fitDataset() (fine-tuning) took " + "".concat((_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].now() - _t2).toFixed(2), " ms"));
                      return _context24.abrupt("return", [history, fineTuningHistory]);

                    case 18:
                      return _context24.abrupt("return", history);

                    case 19:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
          /** Helper function for training on tf.Tensor objects. */

        }, {
          key: "trainOnTensors",
          value: function trainOnTensors(config) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var windowHopRatio, _this$collectTransfer3, xs, ys, trainXs, trainYs, valData, splits, history, fineTuningHistory;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      // Prepare the data.
                      windowHopRatio = config.windowHopRatio || DEFAULT_WINDOW_HOP_RATIO;
                      _this$collectTransfer3 = this.collectTransferDataAsTensors(windowHopRatio, {
                        augmentByMixingNoiseRatio: config.augmentByMixingNoiseRatio
                      }), xs = _this$collectTransfer3.xs, ys = _this$collectTransfer3.ys;
                      console.log("Training data: xs.shape = ".concat(xs.shape, ", ys.shape = ").concat(ys.shape));
                      _context25.prev = 3;

                      // TODO(cais): The balanced split may need to be pushed down to the
                      //   level of the Dataset class to avoid leaks between train and val
                      //   splits.
                      if (config.validationSplit != null) {
                        splits = Object(_training_utils__WEBPACK_IMPORTED_MODULE_6__["balancedTrainValSplit"])(xs, ys, config.validationSplit);
                        trainXs = splits.trainXs;
                        trainYs = splits.trainYs;
                        valData = [splits.valXs, splits.valYs];
                      } else {
                        trainXs = xs;
                        trainYs = ys;
                      }

                      _context25.next = 7;
                      return this.model.fit(trainXs, trainYs, {
                        epochs: config.epochs == null ? 20 : config.epochs,
                        validationData: valData,
                        batchSize: config.batchSize,
                        callbacks: config.callback == null ? null : [config.callback]
                      });

                    case 7:
                      history = _context25.sent;

                      if (!(config.fineTuningEpochs != null && config.fineTuningEpochs > 0)) {
                        _context25.next = 15;
                        break;
                      }

                      _context25.next = 11;
                      return this.fineTuningUsingTensors(config, trainXs, trainYs, valData);

                    case 11:
                      fineTuningHistory = _context25.sent;
                      return _context25.abrupt("return", [history, fineTuningHistory]);

                    case 15:
                      return _context25.abrupt("return", history);

                    case 16:
                      _context25.prev = 16;

                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["dispose"]([xs, ys, trainXs, trainYs, valData]);

                      return _context25.finish(16);

                    case 19:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this, [[3,, 16, 19]]);
            }));
          }
        }, {
          key: "fineTuningUsingTfDatasets",
          value: function fineTuningUsingTfDatasets(config, trainDataset, valDataset) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var originalTrainableValue, fineTuningOptimizer, fineTuningHistory;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      originalTrainableValue = this.secondLastBaseDenseLayer.trainable;
                      this.secondLastBaseDenseLayer.trainable = true; // Recompile model after unfreezing layer.

                      fineTuningOptimizer = config.fineTuningOptimizer == null ? 'sgd' : config.fineTuningOptimizer;
                      this.model.compile({
                        loss: 'categoricalCrossentropy',
                        optimizer: fineTuningOptimizer,
                        metrics: ['acc']
                      });
                      _context26.next = 6;
                      return this.model.fitDataset(trainDataset, {
                        epochs: config.fineTuningEpochs,
                        validationData: valDataset,
                        callbacks: config.callback == null ? null : [config.callback]
                      });

                    case 6:
                      fineTuningHistory = _context26.sent;
                      // Set the trainable attribute of the fine-tuning layer to its
                      // previous value.
                      this.secondLastBaseDenseLayer.trainable = originalTrainableValue;
                      return _context26.abrupt("return", fineTuningHistory);

                    case 9:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "fineTuningUsingTensors",
          value: function fineTuningUsingTensors(config, trainXs, trainYs, valData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var originalTrainableValue, fineTuningOptimizer, fineTuningHistory;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      originalTrainableValue = this.secondLastBaseDenseLayer.trainable;
                      this.secondLastBaseDenseLayer.trainable = true; // Recompile model after unfreezing layer.

                      fineTuningOptimizer = config.fineTuningOptimizer == null ? 'sgd' : config.fineTuningOptimizer;
                      this.model.compile({
                        loss: 'categoricalCrossentropy',
                        optimizer: fineTuningOptimizer,
                        metrics: ['acc']
                      });
                      _context27.next = 6;
                      return this.model.fit(trainXs, trainYs, {
                        epochs: config.fineTuningEpochs,
                        validationData: valData,
                        batchSize: config.batchSize,
                        callbacks: config.fineTuningCallback == null ? null : [config.fineTuningCallback]
                      });

                    case 6:
                      fineTuningHistory = _context27.sent;
                      // Set the trainable attribute of the fine-tuning layer to its
                      // previous value.
                      this.secondLastBaseDenseLayer.trainable = originalTrainableValue;
                      return _context27.abrupt("return", fineTuningHistory);

                    case 9:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
          /**
           * Perform evaluation of the model using the examples that the model
           * has loaded.
           *
           * @param config Configuration object for the evaluation.
           * @returns A Promise of the result of evaluation.
           */

        }, {
          key: "evaluate",
          value: function evaluate(config) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var _this17 = this;

              var NOISE_CLASS_INDEX;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(config.wordProbThresholds != null && config.wordProbThresholds.length > 0, function () {
                        return "Received null or empty wordProbThresholds";
                      }); // TODO(cais): Maybe relax this requirement.


                      NOISE_CLASS_INDEX = 0;

                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(this.words[NOISE_CLASS_INDEX] === _dataset__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_NOISE_TAG"], function () {
                        return "Cannot perform evaluation when the first tag is not " + "".concat(_dataset__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_NOISE_TAG"]);
                      });

                      return _context28.abrupt("return", _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
                        var rocCurve = [];
                        var auc = 0;

                        var _this17$collectTransf = _this17.collectTransferDataAsTensors(config.windowHopRatio),
                            xs = _this17$collectTransf.xs,
                            ys = _this17$collectTransf.ys;

                        var indices = ys.argMax(-1).dataSync();

                        var probs = _this17.model.predict(xs); // To calcaulte ROC, we collapse all word probabilites into a single
                        // positive class, while _background_noise_ is treated as the
                        // negative class.


                        var maxWordProbs = probs.slice([0, 1], [probs.shape[0], probs.shape[1] - 1]).max(-1);
                        var total = probs.shape[0]; // Calculate ROC curve.

                        for (var i = 0; i < config.wordProbThresholds.length; ++i) {
                          var probThreshold = config.wordProbThresholds[i];
                          var isWord = maxWordProbs.greater(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](probThreshold)).dataSync();
                          var negatives = 0;
                          var positives = 0;
                          var falsePositives = 0;
                          var truePositives = 0;

                          for (var _i2 = 0; _i2 < total; ++_i2) {
                            if (indices[_i2] === NOISE_CLASS_INDEX) {
                              negatives++;

                              if (isWord[_i2]) {
                                falsePositives++;
                              }
                            } else {
                              positives++;

                              if (isWord[_i2]) {
                                truePositives++;
                              }
                            }
                          } // TODO(cais): Calculate per-hour false-positive rate.


                          var fpr = falsePositives / negatives;
                          var tpr = truePositives / positives;
                          rocCurve.push({
                            probThreshold: probThreshold,
                            fpr: fpr,
                            tpr: tpr
                          });
                          console.log("ROC thresh=".concat(probThreshold, ": ") + "fpr=".concat(fpr.toFixed(4), ", tpr=").concat(tpr.toFixed(4)));

                          if (i > 0) {
                            // Accumulate to AUC.
                            auc += Math.abs(rocCurve[i - 1].fpr - rocCurve[i].fpr) * (rocCurve[i - 1].tpr + rocCurve[i].tpr) / 2;
                          }
                        }

                        return {
                          rocCurve: rocCurve,
                          auc: auc
                        };
                      }));

                    case 4:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
          /**
           * Create an instance of tf.LayersModel for transfer learning.
           *
           * The top dense layer of the base model is replaced with a new softmax
           * dense layer.
           */

        }, {
          key: "createTransferModelFromBaseModel",
          value: function createTransferModelFromBaseModel() {
            var _this18 = this;

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].assert(this.words != null, function () {
              return "No word example is available for tranfer-learning model of name " + _this18.name;
            }); // Find the second last dense layer.


            var layers = this.baseModel.layers;
            var layerIndex = layers.length - 2;

            while (layerIndex >= 0) {
              if (layers[layerIndex].getClassName().toLowerCase() === 'dense') {
                break;
              }

              layerIndex--;
            }

            if (layerIndex < 0) {
              throw new Error('Cannot find a hidden dense layer in the base model.');
            }

            this.secondLastBaseDenseLayer = layers[layerIndex];
            var truncatedBaseOutput = this.secondLastBaseDenseLayer.output;
            this.transferHead = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sequential"]();
            this.transferHead.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({
              units: this.words.length,
              activation: 'softmax',
              inputShape: truncatedBaseOutput.shape.slice(1),
              name: 'NewHeadDense'
            }));
            var transferOutput = this.transferHead.apply(truncatedBaseOutput);
            this.model = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["model"]({
              inputs: this.baseModel.inputs,
              outputs: transferOutput
            });
          }
          /**
           * Get the input shape of the underlying tf.LayersModel.
           *
           * @returns The input shape.
           */

        }, {
          key: "modelInputShape",
          value: function modelInputShape() {
            return this.baseModel.inputs[0].shape;
          }
        }, {
          key: "getMetadata",
          value: function getMetadata() {
            return {
              tfjsSpeechCommandsVersion: _version__WEBPACK_IMPORTED_MODULE_7__["version"],
              modelName: this.name,
              timeStamp: new Date().toISOString(),
              wordLabels: this.wordLabels()
            };
          }
        }, {
          key: "save",
          value: function save(handlerOrURL) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var isCustomPath, metadataMapStr, metadataMap;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      isCustomPath = handlerOrURL != null;
                      handlerOrURL = handlerOrURL || getCanonicalSavePath(this.name);

                      if (!isCustomPath) {
                        // First, save the words and other metadata.
                        metadataMapStr = localStorageWrapper.localStorage.getItem(SAVED_MODEL_METADATA_KEY);
                        metadataMap = metadataMapStr == null ? {} : JSON.parse(metadataMapStr);
                        metadataMap[this.name] = this.getMetadata();
                        localStorageWrapper.localStorage.setItem(SAVED_MODEL_METADATA_KEY, JSON.stringify(metadataMap));
                      }

                      console.log("Saving model to ".concat(handlerOrURL));
                      return _context29.abrupt("return", this.model.save(handlerOrURL));

                    case 5:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "load",
          value: function load(handlerOrURL) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var isCustomPath, metadataMap;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      isCustomPath = handlerOrURL != null;
                      handlerOrURL = handlerOrURL || getCanonicalSavePath(this.name);

                      if (isCustomPath) {
                        _context30.next = 8;
                        break;
                      }

                      // First, load the words and other metadata.
                      metadataMap = JSON.parse(localStorageWrapper.localStorage.getItem(SAVED_MODEL_METADATA_KEY));

                      if (!(metadataMap == null || metadataMap[this.name] == null)) {
                        _context30.next = 6;
                        break;
                      }

                      throw new Error("Cannot find metadata for transfer model named ".concat(this.name, "\""));

                    case 6:
                      this.words = metadataMap[this.name].wordLabels;
                      console.log("Loaded word list for model named ".concat(this.name, ": ").concat(this.words));

                    case 8:
                      _context30.next = 10;
                      return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["loadLayersModel"](handlerOrURL);

                    case 10:
                      this.model = _context30.sent;
                      console.log("Loaded model from ".concat(handlerOrURL, ":"));
                      this.model.summary();

                    case 13:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
          /**
           * Overridden method to prevent creating a nested transfer-learning
           * recognizer.
           *
           * @param name
           */

        }, {
          key: "createTransfer",
          value: function createTransfer(name) {
            throw new Error('Creating transfer-learned recognizer from a transfer-learned ' + 'recognizer is not supported.');
          }
        }]);

        return TransferBrowserFftSpeechCommandRecognizer;
      }(BrowserFftSpeechCommandRecognizer);

      function getCanonicalSavePath(name) {
        return "".concat(SAVE_PATH_PREFIX).concat(name);
      }
      /**
       * List the model that are currently saved locally in the browser.
       *
       * @returns An array of transfer-learned speech-commands models
       *   that are currently saved in the browser locally.
       */


      function listSavedTransferModels() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
          var models, keys, key;
          return regeneratorRuntime.wrap(function _callee31$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  _context31.next = 2;
                  return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["io"].listModels();

                case 2:
                  models = _context31.sent;
                  keys = [];

                  for (key in models) {
                    if (key.startsWith(SAVE_PATH_PREFIX)) {
                      keys.push(key.slice(SAVE_PATH_PREFIX.length));
                    }
                  }

                  return _context31.abrupt("return", keys);

                case 6:
                case "end":
                  return _context31.stop();
              }
            }
          }, _callee31);
        }));
      }
      /**
       * Delete a locally-saved, transfer-learned speech-commands model.
       *
       * @param name The name of the transfer-learned model to be deleted.
       */


      function deleteSavedTransferModel(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
          var metadataMap;
          return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  // Delete the words from local storage.
                  metadataMap = JSON.parse(localStorageWrapper.localStorage.getItem(SAVED_MODEL_METADATA_KEY));

                  if (metadataMap == null) {
                    metadataMap = {};
                  }

                  if (metadataMap[name] != null) {
                    delete metadataMap[name];
                  }

                  localStorageWrapper.localStorage.setItem(SAVED_MODEL_METADATA_KEY, JSON.stringify(metadataMap));
                  _context32.next = 6;
                  return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["io"].removeModel(getCanonicalSavePath(name));

                case 6:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee32);
        }));
      }
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _route_transition_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./route-transition-animations */
      "jJ8u");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @okta/okta-angular */
      "bPo2");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var angular2_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular2-notifications */
      "Lm38");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./loader/loader.component */
      "kQyY");

      function AppComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_app_loader_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader", 15);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(oktaAuth, router, titleService, metaService) {
          var _this19 = this;

          _classCallCheck(this, AppComponent);

          this.oktaAuth = oktaAuth;
          this.router = router;
          this.titleService = titleService;
          this.metaService = metaService;
          this.title = 'DEEPSPEED AI';
          this.loading = false;
          this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"];
          this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) {
            return _this19.isAuthenticated = isAuthenticated;
          });
          this.router.events.subscribe(function (event) {
            switch (true) {
              case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]:
                {
                  _this19.loading = true;
                  break;
                }

              case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]:
              case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]:
              case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]:
                {
                  _this19.loading = false;
                  break;
                }

              default:
                {
                  break;
                }
            }
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var _this20 = this;

              var userClaims;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      this.oktaAuth.isAuthenticated().then(function (auth) {
                        _this20.isAuthenticated = auth;
                      });
                      _context33.next = 3;
                      return this.oktaAuth.getUser();

                    case 3:
                      userClaims = _context33.sent;
                      this.titleService.setTitle(this.title);
                      this.metaService.addTags([{
                        name: 'keywords',
                        content: 'Angular, Deepspeed AI, Machine Learning Components'
                      }, {
                        name: 'description',
                        content: 'Machine Learning Suite for Angular'
                      }, {
                        name: 'robots',
                        content: 'index, follow'
                      }, {
                        property: 'og:image',
                        content: '../assets/ds.jpg'
                      }]);

                    case 6:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "prepareRoute",
          value: function prepareRoute(outlet) {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
          }
        }, {
          key: "login",
          value: function login() {
            this.oktaAuth.loginRedirect();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.oktaAuth.logout('/');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OktaAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 22,
        vars: 6,
        consts: [["role", "banner", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "toolbar"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["aria-label", "Angular on twitter", "href", "https://twitter.com/MattCharlton10", "title", "Twitter", "target", "_blank"], ["id", "twitter-logo", "height", "24", "data-name", "Logo \u2014 FIXED", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", 1, "cls-1"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", 1, "cls-2"], ["href", "mailto:1deepspeed1@gmail.com", 2, "color", "#fff", "font-size", "18px"], [3, "icon"], ["role", "main", 1, "layout"], ["fxFlexFill", ""], ["outlet", "outlet"], ["class", "loading", 4, "ngIf"], [3, "options"], [1, "btn", "btn-primary", 3, "click"], [1, "loading"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "DEEPSPEED AI");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_button_4_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_button_5_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "rect", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "router-outlet", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppComponent_app_loader_20_Template, 1, 0, "app-loader", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "simple-notifications", 13);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faEnvelope);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@triggerName", ctx.prepareRoute(_r2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["SimpleNotificationsComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]],
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Montserrat\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #fff;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Open Sans\", sans-serif;\n  color: #fff;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n  position: absolute;\n  bottom: 30px;\n  z-index: 60;\n}\n.toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #246eb7;\n  color: white;\n  font-weight: 600;\n  border-bottom: solid 1px #1a5fa2;\n  padding: 8px 8px;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  z-index: -10;\n  width: 1920px;\n}\nsvg#blueClouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -200px;\n  z-index: 999;\n  width: 1920px;\n}\n.cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.cls-2[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\na.siteTitle[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 1pt;\n}\n.ai[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsNEpBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBRUY7QUFDQTs7Ozs7O0VBTUUsYUFBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQ0E7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBRUY7QUFJQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtBQUZGO0FBS0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRkY7QUFLQTtFQUNFLGlCQUFBO0FBRkY7QUFLQTtFQUNFLFVBQUE7QUFGRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRkY7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUtBO0VBQ0UsZUFBQTtBQUZGO0FBS0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0FBRkY7QUFLQTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUFGRjtBQUtBO0VBQ0UsYUFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLGlCQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7OztFQUdFLGNBQUE7RUFDQSxxQkFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0FBRkY7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSx1QkFBQTtBQUZGO0FBS0E7RUFDRSwrQkFBQTtFQUNBLDJDQUFBO0FBRkY7QUFLQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUZGO0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwSUFBQTtBQUZGO0FBS0E7RUFDRSxnRUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRkY7QUFJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjtBQUdBO0VBQ0UsVUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0FBQUY7QUFHQSxzQkFBQTtBQUNBO0VBRUU7O0lBRUUsV0FBQTtFQURGOztFQUlBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFERjs7RUFJQTtJQUNFLGlCQUFBO0VBREY7O0VBSUE7SUFDRSxZQUFBO0lBQ0Esd0JBQUE7RUFERjtBQUNGO0FBSUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUtBO0VBQUssZUFBQTtBQURMO0FBR0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJNb250c2VycmF0XCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgei1pbmRleDogNjA7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ2ZWI3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMWE1ZmEyO1xuICBwYWRkaW5nOiA4cHggOHB4O1xufVxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzg4ODtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTY4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM2OTY3Njc7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuc3ZnI3JvY2tldCB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0yNHB4O1xufVxuXG5zdmcjcm9ja2V0LXNtb2tlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbnN2ZyNjbG91ZHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLTE2MHB4O1xuICB6LWluZGV4OiAtMTA7XG4gIHdpZHRoOiAxOTIwcHg7XG59XG5cbnN2ZyNibHVlQ2xvdWRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC0yMDBweDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTkyMHB4O1xufVxuXG4uY2xzLTEge1xuICBmaWxsOiBub25lO1xufVxuXG4uY2xzLTIge1xuICBmaWxsOiAjZmZmZmZmO1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSxcbi50ZXJtaW5hbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cbmEuc2l0ZVRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHQ7XG59XG5cbi5haSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn0iXX0= */"],
        data: {
          animation: [_route_transition_animations__WEBPACK_IMPORTED_MODULE_2__["routeTransitionAnimations"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [_route_transition_animations__WEBPACK_IMPORTED_MODULE_2__["routeTransitionAnimations"]]
          }]
        }], function () {
          return [{
            type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OktaAuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "W0Lg":
    /*!**********************************************************!*\
      !*** ./src/app/speech-commands/src/browser_fft_utils.ts ***!
      \**********************************************************/

    /*! exports provided: loadMetadataJson, normalize, normalizeFloat32Array, getAudioContextConstructor, getAudioMediaStream, playRawAudio */

    /***/
    function W0Lg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadMetadataJson", function () {
        return loadMetadataJson;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalize", function () {
        return normalize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeFloat32Array", function () {
        return normalizeFloat32Array;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAudioContextConstructor", function () {
        return getAudioContextConstructor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAudioMediaStream", function () {
        return getAudioMediaStream;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "playRawAudio", function () {
        return playRawAudio;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      "zhpf");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */


      function loadMetadataJson(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
          var HTTP_SCHEME, HTTPS_SCHEME, FILE_SCHEME, response, parsed, fs, readFile;
          return regeneratorRuntime.wrap(function _callee34$(_context34) {
            while (1) {
              switch (_context34.prev = _context34.next) {
                case 0:
                  HTTP_SCHEME = 'http://';
                  HTTPS_SCHEME = 'https://';
                  FILE_SCHEME = 'file://';

                  if (!(url.indexOf(HTTP_SCHEME) === 0 || url.indexOf(HTTPS_SCHEME) === 0)) {
                    _context34.next = 13;
                    break;
                  }

                  _context34.next = 6;
                  return fetch(url);

                case 6:
                  response = _context34.sent;
                  _context34.next = 9;
                  return response.json();

                case 9:
                  parsed = _context34.sent;
                  return _context34.abrupt("return", parsed);

                case 13:
                  if (!(url.indexOf(FILE_SCHEME) === 0)) {
                    _context34.next = 23;
                    break;
                  }

                  // tslint:disable-next-line:no-require-imports
                  fs = __webpack_require__(
                  /*! fs */
                  6);
                  readFile = Object(util__WEBPACK_IMPORTED_MODULE_2__["promisify"])(fs.readFile);
                  _context34.t0 = JSON;
                  _context34.next = 19;
                  return readFile(url.slice(FILE_SCHEME.length), {
                    encoding: 'utf-8'
                  });

                case 19:
                  _context34.t1 = _context34.sent;
                  return _context34.abrupt("return", _context34.t0.parse.call(_context34.t0, _context34.t1));

                case 23:
                  throw new Error("Unsupported URL scheme in metadata URL: ".concat(url, ". ") + "Supported schemes are: http://, https://, and " + "(node.js-only) file://");

                case 24:
                case "end":
                  return _context34.stop();
              }
            }
          }, _callee34);
        }));
      }

      var EPSILON = null;
      /**
       * Normalize the input into zero mean and unit standard deviation.
       *
       * This function is safe against divison-by-zero: In case the standard
       * deviation is zero, the output will be all-zero.
       *
       * @param x Input tensor.
       * @param y Output normalized tensor.
       */

      function normalize(x) {
        if (EPSILON == null) {
          EPSILON = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["backend"]().epsilon();
        }

        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
          var _tensorflow_tfjs__WEB = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["moments"](x),
              mean = _tensorflow_tfjs__WEB.mean,
              variance = _tensorflow_tfjs__WEB.variance; // Add an EPSILON to the denominator to prevent division-by-zero.


          return x.sub(mean).div(variance.sqrt().add(EPSILON));
        });
      }
      /**
       * Z-Normalize the elements of a Float32Array.
       *
       * Subtract the mean and divide the result by the standard deviation.
       *
       * @param x The Float32Array to normalize.
       * @return Noramlzied Float32Array.
       */


      function normalizeFloat32Array(x) {
        if (x.length < 2) {
          throw new Error('Cannot normalize a Float32Array with fewer than 2 elements.');
        }

        if (EPSILON == null) {
          EPSILON = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["backend"]().epsilon();
        }

        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
          var _tensorflow_tfjs__WEB2 = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["moments"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor1d"](x)),
              mean = _tensorflow_tfjs__WEB2.mean,
              variance = _tensorflow_tfjs__WEB2.variance;

          var meanVal = mean.arraySync();
          var stdVal = Math.sqrt(variance.arraySync());
          var yArray = Array.from(x).map(function (y) {
            return (y - meanVal) / (stdVal + EPSILON);
          });
          return new Float32Array(yArray);
        });
      }

      function getAudioContextConstructor() {
        // tslint:disable-next-line:no-any
        return window.AudioContext || window.webkitAudioContext;
      }

      function getAudioMediaStream(audioTrackConstraints) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
          return regeneratorRuntime.wrap(function _callee35$(_context35) {
            while (1) {
              switch (_context35.prev = _context35.next) {
                case 0:
                  return _context35.abrupt("return", navigator.mediaDevices.getUserMedia({
                    audio: audioTrackConstraints == null ? true : audioTrackConstraints,
                    video: false
                  }));

                case 1:
                case "end":
                  return _context35.stop();
              }
            }
          }, _callee35);
        }));
      }
      /**
       * Play raw audio waveform
       * @param rawAudio Raw audio data, including the waveform and the sampling rate.
       * @param onEnded Callback function to execute when the playing ends.
       */


      function playRawAudio(rawAudio, onEnded) {
        var audioContextConstructor = // tslint:disable-next-line:no-any
        window.AudioContext || window.webkitAudioContext;
        var audioContext = new audioContextConstructor();
        var arrayBuffer = audioContext.createBuffer(1, rawAudio.data.length, rawAudio.sampleRateHz);
        var nowBuffering = arrayBuffer.getChannelData(0);
        nowBuffering.set(rawAudio.data);
        var source = audioContext.createBufferSource();
        source.buffer = arrayBuffer;
        source.connect(audioContext.destination);
        source.start();

        source.onended = function () {
          if (onEnded != null) {
            onEnded();
          }
        };
      }
      /***/

    },

    /***/
    "WsXE":
    /*!*******************************************************!*\
      !*** ./src/app/speech-commands/src/training_utils.ts ***!
      \*******************************************************/

    /*! exports provided: balancedTrainValSplit, balancedTrainValSplitNumArrays */

    /***/
    function WsXE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "balancedTrainValSplit", function () {
        return balancedTrainValSplit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "balancedTrainValSplitNumArrays", function () {
        return balancedTrainValSplitNumArrays;
      });
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      "zhpf");
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */

      /**
       * Utility functions for training and transfer learning of the speech-commands
       * model.
       */

      /**
       * Split feature and target tensors into train and validation (val) splits.
       *
       * Given sufficent number of examples, the train and val sets will be
       * balanced with respect to the classes.
       *
       * @param xs Features tensor, of shape [numExamples, ...].
       * @param ys Targets tensors, of shape [numExamples, numClasses]. Assumed to be
       *   one-hot categorical encoding.
       * @param valSplit A number > 0 and < 1, fraction of examples to use
       *   as the validation set.
       * @returns trainXs: training features tensor; trainYs: training targets
       *   tensor; valXs: validation features tensor; valYs: validation targets
       *   tensor.
       */


      function balancedTrainValSplit(xs, ys, valSplit) {
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(valSplit > 0 && valSplit < 1, function () {
          return "validationSplit is expected to be >0 and <1, " + "but got ".concat(valSplit);
        });

        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](function () {
          var classIndices = ys.argMax(-1).dataSync();
          var indicesByClasses = [];

          for (var i = 0; i < classIndices.length; ++i) {
            var classIndex = classIndices[i];

            if (indicesByClasses[classIndex] == null) {
              indicesByClasses[classIndex] = [];
            }

            indicesByClasses[classIndex].push(i);
          }

          var numClasses = indicesByClasses.length;
          var trainIndices = [];
          var valIndices = []; // Randomly shuffle the list of indices in each array.

          indicesByClasses.map(function (classIndices) {
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].shuffle(classIndices);
          });

          for (var _i3 = 0; _i3 < numClasses; ++_i3) {
            var _classIndices = indicesByClasses[_i3];
            var cutoff = Math.round(_classIndices.length * (1 - valSplit));

            for (var j = 0; j < _classIndices.length; ++j) {
              if (j < cutoff) {
                trainIndices.push(_classIndices[j]);
              } else {
                valIndices.push(_classIndices[j]);
              }
            }
          }

          var trainXs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["gather"](xs, trainIndices);

          var trainYs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["gather"](ys, trainIndices);

          var valXs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["gather"](xs, valIndices);

          var valYs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["gather"](ys, valIndices);

          return {
            trainXs: trainXs,
            trainYs: trainYs,
            valXs: valXs,
            valYs: valYs
          };
        });
      }
      /**
       * Same as balancedTrainValSplit, but for number arrays or Float32Arrays.
       */


      function balancedTrainValSplitNumArrays(xs, ys, valSplit) {
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(valSplit > 0 && valSplit < 1, function () {
          return "validationSplit is expected to be >0 and <1, " + "but got ".concat(valSplit);
        });

        var isXsFloat32Array = !Array.isArray(xs[0]);
        var classIndices = ys;
        var indicesByClasses = [];

        for (var i = 0; i < classIndices.length; ++i) {
          var classIndex = classIndices[i];

          if (indicesByClasses[classIndex] == null) {
            indicesByClasses[classIndex] = [];
          }

          indicesByClasses[classIndex].push(i);
        }

        var numClasses = indicesByClasses.length;
        var trainIndices = [];
        var valIndices = []; // Randomly shuffle the list of indices in each array.

        indicesByClasses.map(function (classIndices) {
          return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].shuffle(classIndices);
        });

        for (var _i4 = 0; _i4 < numClasses; ++_i4) {
          var _classIndices2 = indicesByClasses[_i4];
          var cutoff = Math.round(_classIndices2.length * (1 - valSplit));

          for (var j = 0; j < _classIndices2.length; ++j) {
            if (j < cutoff) {
              trainIndices.push(_classIndices2[j]);
            } else {
              valIndices.push(_classIndices2[j]);
            }
          }
        }

        if (isXsFloat32Array) {
          var trainXs = [];
          var trainYs = [];
          var valXs = [];
          var valYs = [];

          var _iterator8 = _createForOfIteratorHelper(trainIndices),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var index = _step8.value;
              trainXs.push(xs[index]);
              trainYs.push(ys[index]);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          var _iterator9 = _createForOfIteratorHelper(valIndices),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _index = _step9.value;
              valXs.push(xs[_index]);
              valYs.push(ys[_index]);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          return {
            trainXs: trainXs,
            trainYs: trainYs,
            valXs: valXs,
            valYs: valYs
          };
        } else {
          var _trainXs = [];
          var _trainYs = [];
          var _valXs = [];
          var _valYs = [];

          var _iterator10 = _createForOfIteratorHelper(trainIndices),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _index2 = _step10.value;

              _trainXs.push(xs[_index2]);

              _trainYs.push(ys[_index2]);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          var _iterator11 = _createForOfIteratorHelper(valIndices),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _index3 = _step11.value;

              _valXs.push(xs[_index3]);

              _valYs.push(ys[_index3]);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          return {
            trainXs: _trainXs,
            trainYs: _trainYs,
            valXs: _valXs,
            valYs: _valYs
          };
        }
      }
      /***/

    },

    /***/
    "Y8Gl":
    /*!******************************************************!*\
      !*** ./src/app/speech-commands/src/generic_utils.ts ***!
      \******************************************************/

    /*! exports provided: concatenateArrayBuffers, concatenateFloat32Arrays, string2ArrayBuffer, arrayBuffer2String, getUID, getRandomInteger */

    /***/
    function Y8Gl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "concatenateArrayBuffers", function () {
        return concatenateArrayBuffers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "concatenateFloat32Arrays", function () {
        return concatenateFloat32Arrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "string2ArrayBuffer", function () {
        return string2ArrayBuffer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayBuffer2String", function () {
        return arrayBuffer2String;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUID", function () {
        return getUID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRandomInteger", function () {
        return getRandomInteger;
      });
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */

      /**
       * Concatenate a number of ArrayBuffers into one.
       *
       * @param buffers A number of array buffers to concatenate.
       * @returns Result of concatenating `buffers` in order.
       */


      function concatenateArrayBuffers(buffers) {
        var totalByteLength = 0;
        buffers.forEach(function (buffer) {
          totalByteLength += buffer.byteLength;
        });
        var temp = new Uint8Array(totalByteLength);
        var offset = 0;
        buffers.forEach(function (buffer) {
          temp.set(new Uint8Array(buffer), offset);
          offset += buffer.byteLength;
        });
        return temp.buffer;
      }
      /**
       * Concatenate Float32Arrays.
       *
       * @param xs Float32Arrays to concatenate.
       * @return The result of the concatenation.
       */


      function concatenateFloat32Arrays(xs) {
        var totalLength = 0;
        xs.forEach(function (x) {
          return totalLength += x.length;
        });
        var concatenated = new Float32Array(totalLength);
        var index = 0;
        xs.forEach(function (x) {
          concatenated.set(x, index);
          index += x.length;
        });
        return concatenated;
      }
      /** Encode a string as an ArrayBuffer. */


      function string2ArrayBuffer(str) {
        if (str == null) {
          throw new Error('Received null or undefind string');
        } // NOTE(cais): This implementation is inefficient in terms of memory.
        // But it works for UTF-8 strings. Just don't use on for very long strings.


        var strUTF8 = unescape(encodeURIComponent(str));
        var buf = new Uint8Array(strUTF8.length);

        for (var i = 0; i < strUTF8.length; ++i) {
          buf[i] = strUTF8.charCodeAt(i);
        }

        return buf.buffer;
      }
      /** Decode an ArrayBuffer as a string. */


      function arrayBuffer2String(buffer) {
        if (buffer == null) {
          throw new Error('Received null or undefind buffer');
        }

        var buf = new Uint8Array(buffer);
        return decodeURIComponent(escape(String.fromCharCode.apply(String, _toConsumableArray(buf))));
      }
      /** Generate a pseudo-random UID. */


      function getUID() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }

      function getRandomInteger(min, max) {
        return Math.floor((max - min) * Math.random()) + min;
      }
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "hzby");
      /* harmony import */


      var ngx_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-timeline */
      "In4C");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @okta/okta-angular */
      "bPo2");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./loader/loader.component */
      "kQyY");
      /* harmony import */


      var _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./image-classifier/image-classifier.component */
      "gdL9");
      /* harmony import */


      var _d3_d3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./d3/d3.component */
      "ra9l");
      /* harmony import */


      var _webcam_classifier_webcam_classifier_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./webcam-classifier/webcam-classifier.component */
      "75rY");
      /* harmony import */


      var _speech_commands_speech_ai_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./speech-commands/speech-ai.component */
      "smhn");
      /* harmony import */


      var _sentiment_analysis_sentiment_analysis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./sentiment-analysis/sentiment-analysis.component */
      "4G5h");
      /* harmony import */


      var _loader_loading_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./loader/loading.guard */
      "hjGQ");
      /* harmony import */


      var angular2_notifications__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! angular2-notifications */
      "Lm38");
      /* harmony import */


      var _plotly_via_cdn_plotly_via_cdn_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./plotly-via-cdn/plotly-via-cdn.module */
      "HgKl");
      /* harmony import */


      var angular2_draggable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! angular2-draggable */
      "DIQL");
      /* harmony import */


      var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./blockchain/blockchain.component */
      "CC5z");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! primeng/slider */
      "+la4");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa"); //import { ParticlesModule } from 'angular-particle';


      _plotly_via_cdn_plotly_via_cdn_module__WEBPACK_IMPORTED_MODULE_23__["PlotlyViaCDNModule"].plotlyVersion = '1.49.4';

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_loader_loading_guard__WEBPACK_IMPORTED_MODULE_21__["LoadingGuard"], {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_26__["HashLocationStrategy"]
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], ngx_timeline__WEBPACK_IMPORTED_MODULE_4__["NgxTimelineModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _plotly_via_cdn_plotly_via_cdn_module__WEBPACK_IMPORTED_MODULE_23__["PlotlyViaCDNModule"], angular2_draggable__WEBPACK_IMPORTED_MODULE_24__["AngularDraggableModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_28__["InputTextModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_27__["SliderModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(), angular2_notifications__WEBPACK_IMPORTED_MODULE_22__["SimpleNotificationsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), // ParticlesModule,
        _okta_okta_angular__WEBPACK_IMPORTED_MODULE_11__["OktaAuthModule"].initAuth({
          issuer: 'https://dev-272649.okta.com/oauth2/default',
          redirectUri: 'https://krosomnikhan.com/implicit/callback',
          clientId: '0oa23zanmjWeZ2lEw357'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"], _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_16__["ImageClassifierComponent"], _webcam_classifier_webcam_classifier_component__WEBPACK_IMPORTED_MODULE_18__["WebcamClassifierComponent"], _sentiment_analysis_sentiment_analysis_component__WEBPACK_IMPORTED_MODULE_20__["SentimentAnalysisComponent"], _speech_commands_speech_ai_component__WEBPACK_IMPORTED_MODULE_19__["SpeechCommandComponent"], _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_25__["BlockchainComponent"], _d3_d3_component__WEBPACK_IMPORTED_MODULE_17__["D3Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], ngx_timeline__WEBPACK_IMPORTED_MODULE_4__["NgxTimelineModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _plotly_via_cdn_plotly_via_cdn_module__WEBPACK_IMPORTED_MODULE_23__["PlotlyViaCDNModule"], angular2_draggable__WEBPACK_IMPORTED_MODULE_24__["AngularDraggableModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_28__["InputTextModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_27__["SliderModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_22__["SimpleNotificationsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], _okta_okta_angular__WEBPACK_IMPORTED_MODULE_11__["OktaAuthModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"], _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_16__["ImageClassifierComponent"], _webcam_classifier_webcam_classifier_component__WEBPACK_IMPORTED_MODULE_18__["WebcamClassifierComponent"], _sentiment_analysis_sentiment_analysis_component__WEBPACK_IMPORTED_MODULE_20__["SentimentAnalysisComponent"], _speech_commands_speech_ai_component__WEBPACK_IMPORTED_MODULE_19__["SpeechCommandComponent"], _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_25__["BlockchainComponent"], _d3_d3_component__WEBPACK_IMPORTED_MODULE_17__["D3Component"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], ngx_timeline__WEBPACK_IMPORTED_MODULE_4__["NgxTimelineModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _plotly_via_cdn_plotly_via_cdn_module__WEBPACK_IMPORTED_MODULE_23__["PlotlyViaCDNModule"], angular2_draggable__WEBPACK_IMPORTED_MODULE_24__["AngularDraggableModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_28__["InputTextModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_27__["SliderModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(), angular2_notifications__WEBPACK_IMPORTED_MODULE_22__["SimpleNotificationsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), // ParticlesModule,
            _okta_okta_angular__WEBPACK_IMPORTED_MODULE_11__["OktaAuthModule"].initAuth({
              issuer: 'https://dev-272649.okta.com/oauth2/default',
              redirectUri: 'https://krosomnikhan.com/implicit/callback',
              clientId: '0oa23zanmjWeZ2lEw357'
            })],
            providers: [_loader_loading_guard__WEBPACK_IMPORTED_MODULE_21__["LoadingGuard"], {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_26__["HashLocationStrategy"]
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bEpL":
    /*!****************************!*\
      !*** ./src/app/d3/data.ts ***!
      \****************************/

    /*! exports provided: SAMPLE_DATA */

    /***/
    function bEpL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SAMPLE_DATA", function () {
        return SAMPLE_DATA;
      });

      var SAMPLE_DATA = [{
        State: 'AL',
        'Under 5 Years': 310504,
        '5 to 13 Years': 552339,
        '14 to 17 Years': 259034,
        '18 to 24 Years': 450818,
        '25 to 44 Years': 1231572,
        '45 to 64 Years': 1215966,
        '65 Years and Over': 641667
      }, {
        State: 'AK',
        'Under 5 Years': 52083,
        '5 to 13 Years': 85640,
        '14 to 17 Years': 42153,
        '18 to 24 Years': 74257,
        '25 to 44 Years': 198724,
        '45 to 64 Years': 183159,
        '65 Years and Over': 50277
      }];
      /***/
    },

    /***/
    "bW8X":
    /*!***************************************!*\
      !*** ./src/app/speech-commands/ui.js ***!
      \***************************************/

    /*! exports provided: logToStatusDisplay, populateCandidateWords, showCandidateWords, hideCandidateWords, plotSpectrogram, plotPredictions */

    /***/
    function bW8X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logToStatusDisplay", function () {
        return logToStatusDisplay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "populateCandidateWords", function () {
        return populateCandidateWords;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "showCandidateWords", function () {
        return showCandidateWords;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hideCandidateWords", function () {
        return hideCandidateWords;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plotSpectrogram", function () {
        return plotSpectrogram;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plotPredictions", function () {
        return plotPredictions;
      });
      /* harmony import */


      var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src */
      "gFaz");
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * https://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */


      var statusDisplay = document.getElementById('status-display');
      var candidateWordsContainer = document.getElementById('candidate-words');
      /**
       * Log a message to a textarea.
       *
       * @param {string} message Message to be logged.
       */

      function logToStatusDisplay(message) {
        var date = new Date();
        statusDisplay.value += "[".concat(date.toISOString(), "] ") + message + '\n';
        statusDisplay.scrollTop = statusDisplay.scrollHeight;
      }

      var candidateWordSpans;
      /**
       * Display candidate words in the UI.
       *
       * The background-noise "word" will be omitted.
       *
       * @param {*} words Candidate words.
       */

      function populateCandidateWords(words) {
        candidateWordSpans = {};

        while (candidateWordsContainer.firstChild) {
          candidateWordsContainer.removeChild(candidateWordsContainer.firstChild);
        }

        var _iterator12 = _createForOfIteratorHelper(words),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var word = _step12.value;

            if (word === _src__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_NOISE_TAG"] || word === _src__WEBPACK_IMPORTED_MODULE_0__["UNKNOWN_TAG"]) {
              continue;
            }

            var wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.classList.add('candidate-word');
            candidateWordsContainer.appendChild(wordSpan);
            candidateWordSpans[word] = wordSpan;
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }

      function showCandidateWords() {
        candidateWordsContainer.classList.remove('candidate-words-hidden');
      }

      function hideCandidateWords() {
        candidateWordsContainer.classList.add('candidate-words-hidden');
      }
      /**
       * Show an audio spectrogram in a canvas.
       *
       * @param {HTMLCanvasElement} canvas The canvas element to draw the
       *   spectrogram in.
       * @param {Float32Array} frequencyData The flat array for the spectrogram
       *   data.
       * @param {number} fftSize Number of frequency points per frame.
       * @param {number} fftDisplaySize Number of frequency points to show. Must be
       * @param {Object} config Optional configuration object, with the following
       *   supported fields:
       *   - pixelsPerFrame {number} Number of pixels along the width dimension of
       *     the canvas for each frame of spectrogram.
       *   - maxPixelWidth {number} Maximum width in pixels.
       *   - markKeyFrame {bool} Whether to mark the index of the frame
       *     with the maximum intensity or a predetermined key frame.
       *   - keyFrameIndex {index?} Predetermined key frame index.
       *
       *   <= fftSize.
       */


      function plotSpectrogram(_x8, _x9, _x10, _x11, _x12) {
        return _plotSpectrogram.apply(this, arguments);
      }
      /**
       * Plot top-K predictions from a speech command recognizer.
       *
       * @param {HTMLCanvasElement} canvas The canvas to render the predictions in.
       * @param {string[]} candidateWords Candidate word array.
       * @param {Float32Array | number[]} probabilities Probability scores from the
       *   speech command recognizer. Must be of the same length as `candidateWords`.
       * @param {number} timeToLiveMillis Optional time to live for the active label
       *   highlighting. If not provided, will the highlighting will live
       *   indefinitely till the next highlighting.
       * @param {number} topK Top _ scores to render.
       */


      function _plotSpectrogram() {
        _plotSpectrogram = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(canvas, frequencyData, fftSize, fftDisplaySize, config) {
          var min, max, i, x, context, numFrames, realWidth, pixelWidth, pixelHeight, _i5, _x13, spectrum, j, y, colorValue, colorTuning, fillStyle, keyFrameIndex;

          return regeneratorRuntime.wrap(function _callee36$(_context36) {
            while (1) {
              switch (_context36.prev = _context36.next) {
                case 0:
                  if (fftDisplaySize == null) {
                    fftDisplaySize = fftSize;
                  }

                  if (config == null) {
                    config = {};
                  } // Get the maximum and minimum.


                  min = Infinity;
                  max = -Infinity;

                  for (i = 0; i < frequencyData.length; ++i) {
                    x = frequencyData[i];

                    if (x !== -Infinity) {
                      if (x < min) {
                        min = x;
                      }

                      if (x > max) {
                        max = x;
                      }
                    }
                  }

                  if (!(min >= max)) {
                    _context36.next = 7;
                    break;
                  }

                  return _context36.abrupt("return");

                case 7:
                  context = canvas.getContext('2d');
                  context.clearRect(0, 0, canvas.width, canvas.height);
                  numFrames = frequencyData.length / fftSize;

                  if (config.pixelsPerFrame != null) {
                    realWidth = Math.round(config.pixelsPerFrame * numFrames);

                    if (config.maxPixelWidth != null && realWidth > config.maxPixelWidth) {
                      realWidth = config.maxPixelWidth;
                    }

                    canvas.width = realWidth;
                  }

                  pixelWidth = canvas.width / numFrames;
                  pixelHeight = canvas.height / fftDisplaySize;
                  _i5 = 0;

                case 14:
                  if (!(_i5 < numFrames)) {
                    _context36.next = 23;
                    break;
                  }

                  _x13 = pixelWidth * _i5;
                  spectrum = frequencyData.subarray(_i5 * fftSize, (_i5 + 1) * fftSize);

                  if (!(spectrum[0] === -Infinity)) {
                    _context36.next = 19;
                    break;
                  }

                  return _context36.abrupt("break", 23);

                case 19:
                  for (j = 0; j < fftDisplaySize; ++j) {
                    y = canvas.height - (j + 1) * pixelHeight;
                    colorValue = (spectrum[j] - min) / (max - min);
                    colorValue = Math.pow(colorValue, 3);
                    colorValue = Math.round(255 * colorValue);
                    colorTuning = 193; //Tune the ammount of G scale

                    fillStyle = "rgb(".concat(colorValue, ",").concat(colorTuning - colorValue, ",").concat(255 - colorValue, ")");
                    context.fillStyle = fillStyle;
                    context.fillRect(_x13, y, pixelWidth, pixelHeight);
                  }

                case 20:
                  ++_i5;
                  _context36.next = 14;
                  break;

                case 23:
                  if (!config.markKeyFrame) {
                    _context36.next = 41;
                    break;
                  }

                  if (!(config.keyFrameIndex == null)) {
                    _context36.next = 30;
                    break;
                  }

                  _context36.next = 27;
                  return _src__WEBPACK_IMPORTED_MODULE_0__["getMaxIntensityFrameIndex"]({
                    data: frequencyData,
                    frameSize: fftSize
                  }).data();

                case 27:
                  _context36.t0 = _context36.sent;
                  _context36.next = 31;
                  break;

                case 30:
                  _context36.t0 = config.keyFrameIndex;

                case 31:
                  keyFrameIndex = _context36.t0;
                  // Draw lines to mark the maximum-intensity frame.
                  context.strokeStyle = 'black';
                  context.beginPath();
                  context.moveTo(pixelWidth * keyFrameIndex, 0);
                  context.lineTo(pixelWidth * keyFrameIndex, canvas.height * 0.1);
                  context.stroke();
                  context.beginPath();
                  context.moveTo(pixelWidth * keyFrameIndex, canvas.height * 0.9);
                  context.lineTo(pixelWidth * keyFrameIndex, canvas.height);
                  context.stroke();

                case 41:
                case "end":
                  return _context36.stop();
              }
            }
          }, _callee36);
        }));
        return _plotSpectrogram.apply(this, arguments);
      }

      function plotPredictions(canvas, candidateWords, probabilities, topK, timeToLiveMillis) {
        if (topK != null) {
          var wordsAndProbs = [];

          for (var i = 0; i < candidateWords.length; ++i) {
            wordsAndProbs.push([candidateWords[i], probabilities[i]]);
          }

          wordsAndProbs.sort(function (a, b) {
            return b[1] - a[1];
          });
          wordsAndProbs = wordsAndProbs.slice(0, topK);
          candidateWords = wordsAndProbs.map(function (item) {
            return item[0];
          });
          probabilities = wordsAndProbs.map(function (item) {
            return item[1];
          }); // Highlight the top word.

          var topWord = wordsAndProbs[0][0];
          console.log("\"".concat(topWord, "\" (p=").concat(wordsAndProbs[0][1].toFixed(6), ") @ ") + new Date().toTimeString());

          var _loop = function _loop(word) {
            if (word === topWord) {
              candidateWordSpans[word].classList.add('candidate-word-active');

              if (timeToLiveMillis != null) {
                setTimeout(function () {
                  if (candidateWordSpans[word]) {
                    candidateWordSpans[word].classList.remove('candidate-word-active');
                  }
                }, timeToLiveMillis);
              }
            } else {
              candidateWordSpans[word].classList.remove('candidate-word-active');
            }
          };

          for (var word in candidateWordSpans) {
            _loop(word);
          }
        }
      }
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 11,
        vars: 0,
        consts: [["routerLink", "/upload", "routerLinkActive", "router-link-active", 1, "btn", "btn-primary"], ["routerLink", "/webcam", "routerLinkActive", "router-link-active", 1, "btn", "btn-primary"], ["routerLink", "/sentiment", "routerLinkActive", "router-link-active", 1, "btn", "btn-primary"], ["routerLink", "/speech-commands", "routerLinkActive", "router-link-active", 1, "btn", "btn-primary"], ["routerLink", "/blockchain", "routerLinkActive", "router-link-active", 1, "btn", "btn-primary"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Image Classifier");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "WebCam Image Classifier");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sentiment Analysis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Speech Commands");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Block Chain");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["nav[_ngcontent-%COMP%] {\n  border-top: solid 1px rgba(255, 255, 255, 0.13);\n  background: #007bff;\n  padding-bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgcGFkZGluZy1ib3R0b206MXB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gFaz":
    /*!**********************************************!*\
      !*** ./src/app/speech-commands/src/index.ts ***!
      \**********************************************/

    /*! exports provided: create, BACKGROUND_NOISE_TAG, Dataset, getMaxIntensityFrameIndex, spectrogram2IntensityCurve, deleteSavedTransferModel, listSavedTransferModels, UNKNOWN_TAG, utils, version */

    /***/
    function gFaz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "create", function () {
        return create;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "utils", function () {
        return utils;
      });
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      "zhpf");
      /* harmony import */


      var _browser_fft_recognizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./browser_fft_recognizer */
      "Stxo");
      /* harmony import */


      var _browser_fft_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./browser_fft_utils */
      "W0Lg");
      /* harmony import */


      var _generic_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./generic_utils */
      "Y8Gl");
      /* harmony import */


      var _dataset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dataset */
      "qUyx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BACKGROUND_NOISE_TAG", function () {
        return _dataset__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_NOISE_TAG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Dataset", function () {
        return _dataset__WEBPACK_IMPORTED_MODULE_4__["Dataset"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getMaxIntensityFrameIndex", function () {
        return _dataset__WEBPACK_IMPORTED_MODULE_4__["getMaxIntensityFrameIndex"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "spectrogram2IntensityCurve", function () {
        return _dataset__WEBPACK_IMPORTED_MODULE_4__["spectrogram2IntensityCurve"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "deleteSavedTransferModel", function () {
        return _browser_fft_recognizer__WEBPACK_IMPORTED_MODULE_1__["deleteSavedTransferModel"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "listSavedTransferModels", function () {
        return _browser_fft_recognizer__WEBPACK_IMPORTED_MODULE_1__["listSavedTransferModels"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UNKNOWN_TAG", function () {
        return _browser_fft_recognizer__WEBPACK_IMPORTED_MODULE_1__["UNKNOWN_TAG"];
      });
      /* harmony import */


      var _version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./version */
      "MyYh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "version", function () {
        return _version__WEBPACK_IMPORTED_MODULE_5__["version"];
      });
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */

      /**
       * Create an instance of speech-command recognizer.
       *
       * @param fftType Type of FFT. The currently availble option(s):
       *   - BROWSER_FFT: Obtains audio spectrograms using browser's native Fourier
       *     transform.
       * @param vocabulary The vocabulary of the model to load. Possible options:
       *   - '18w' (default): The 18-word vocaulbary, consisting of:
       *     'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
       *     'eight', 'nine', 'up', 'down', 'left', 'right', 'go', 'stop',
       *     'yes', and 'no', in addition to '_background_noise_' and '_unknown_'.
       *   - 'directional4w': The four directional words: 'up', 'down', 'left', and
       *     'right', in addition to '_background_noise_' and '_unknown_'.
       *   Choosing a smaller vocabulary leads to better accuracy on the words of
       *   interest and a slightly smaller model size.
       * @param customModelArtifactsOrURL A custom model URL pointing to a model.json
       *     file, or a set of modelArtifacts in `tf.io.ModelArtifacts` format.
       *   Supported schemes: http://, https://, and node.js-only: file://.
       *   Mutually exclusive with `vocabulary`. If provided, `customMetadatURL`
       *   most also be provided.
       * @param customMetadataOrURL A custom metadata URL pointing to a metadata.json
       *   file. Must be provided together with `customModelURL`, or a metadata
       *   object.
       * @returns An instance of SpeechCommandRecognizer.
       * @throws Error on invalid value of `fftType`.
       */


      function create(fftType, vocabulary, customModelArtifactsOrURL, customMetadataOrURL) {
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(customModelArtifactsOrURL == null && customMetadataOrURL == null || customModelArtifactsOrURL != null && customMetadataOrURL != null, function () {
          return "customModelURL and customMetadataURL must be both provided or " + "both not provided.";
        });

        if (customModelArtifactsOrURL != null) {
          _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(vocabulary == null, function () {
            return "vocabulary name must be null or undefined when modelURL " + "is provided.";
          });
        }

        if (fftType === 'BROWSER_FFT') {
          return new _browser_fft_recognizer__WEBPACK_IMPORTED_MODULE_1__["BrowserFftSpeechCommandRecognizer"](vocabulary, customModelArtifactsOrURL, customMetadataOrURL);
        } else if (fftType === 'SOFT_FFT') {
          throw new Error('SOFT_FFT SpeechCommandRecognizer has not been implemented yet.');
        } else {
          throw new Error("Invalid fftType: '".concat(fftType, "'"));
        }
      }

      var utils = {
        concatenateFloat32Arrays: _generic_utils__WEBPACK_IMPORTED_MODULE_3__["concatenateFloat32Arrays"],
        playRawAudio: _browser_fft_utils__WEBPACK_IMPORTED_MODULE_2__["playRawAudio"]
      };
      /***/
    },

    /***/
    "gdL9":
    /*!****************************************************************!*\
      !*** ./src/app/image-classifier/image-classifier.component.ts ***!
      \****************************************************************/

    /*! exports provided: ImageClassifierComponent */

    /***/
    function gdL9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageClassifierComponent", function () {
        return ImageClassifierComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @tensorflow-models/mobilenet */
      "g3tL");
      /* harmony import */


      var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! d3 */
      "VphZ");
      /* harmony import */


      var d3_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! d3-scale */
      "ziQ1");
      /* harmony import */


      var d3_axis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! d3-axis */
      "RhHs");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["img"];
      var _c1 = ["svg"];

      function ImageClassifierComponent_img_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10, 11);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ImageClassifierComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prediction_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", prediction_r5.className, " - ", prediction_r5.probability, " ");
        }
      }

      function ImageClassifierComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageClassifierComponent_div_7_div_1_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@listAnimation", ctx_r1.predictions.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.predictions);
        }
      }

      var ImageClassifierComponent = /*#__PURE__*/function () {
        function ImageClassifierComponent(el) {
          _classCallCheck(this, ImageClassifierComponent);

          this.el = el;
          this.faImage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faImage"];
          this.loading = true;
          this.margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
          };
          this.myStyle = {};
          this.myParams = {};
        }

        _createClass(ImageClassifierComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var container, classNames, i, changeClass;
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      container = document.querySelector(".warlock");
                      classNames = ["warlock", "titan", "hunter", "default"];
                      i = 0;

                      if (container) {
                        changeClass = function changeClass() {
                          container.classList.remove(classNames[i]);
                          i = i < classNames.length - 1 ? i + 1 : 0;
                          container.classList.add(classNames[i]);
                        };

                        setInterval(changeClass, 2000);
                      }

                      this.myStyle = {
                        'position': 'fixed',
                        'width': '100%',
                        'height': '100%',
                        'z-index': -1,
                        'top': 0,
                        'left': 0,
                        'right': 0,
                        'bottom': 0
                      };
                      this.myParams = {
                        particles: {
                          number: {
                            value: 200
                          },
                          color: {
                            value: '#15487a'
                          },
                          shape: {
                            type: 'triangle'
                          }
                        }
                      };
                      console.log('loader was called', container);
                      console.log('loading mobilenet model...');
                      _context37.next = 10;
                      return _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_3__["load"]();

                    case 10:
                      this.model = _context37.sent;
                      console.log('Sucessfully loaded model', this.model);
                      this.loading = false;

                      if (this.predictions) {
                        _context37.next = 15;
                        break;
                      }

                      return _context37.abrupt("return");

                    case 15:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "createChart",
          value: function createChart() {
            this.initSvg();
            this.initAxis();
            this.drawAxis();
            this.drawBars();
          }
        }, {
          key: "initSvg",
          value: function initSvg() {
            var element = this.svgEl.nativeElement;
            d3__WEBPACK_IMPORTED_MODULE_4__["select"](element).select('svg#svg svg').remove();
            this.svg = d3__WEBPACK_IMPORTED_MODULE_4__["select"](element).append('svg');
            this.width = element.width.animVal.value - this.margin.left - this.margin.right;
            this.height = element.height.animVal.value - this.margin.top - this.margin.bottom;
            this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
          }
        }, {
          key: "initAxis",
          value: function initAxis() {
            this.x = d3_scale__WEBPACK_IMPORTED_MODULE_5__["scaleBand"]().rangeRound([0, this.width]).padding(0.1);
            this.y = d3_scale__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().rangeRound([this.height, 0]);
            this.x.domain(this.predictions.map(function (d) {
              return d.className;
            })); //this.y.domain([0, d3Array.max(this.predictions, (d) => d.probability)]);
          }
        }, {
          key: "drawAxis",
          value: function drawAxis() {
            this.g.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + this.height + ')').call(d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisBottom"](this.x));
            this.g.append('g').attr('class', 'axis axis--y').call(d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisLeft"](this.y).ticks(10, '%')).append('text').attr('class', 'axis-title').attr('transform', 'rotate(-90)').attr('y', 6).attr('dy', '0.71em').attr('text-anchor', 'end').text('Frequency');
          }
        }, {
          key: "drawBars",
          value: function drawBars() {
            var _this21 = this;

            this.g.selectAll('.bar').data(this.predictions).enter().append('rect').attr('class', 'bar').attr("fill", "#1461ac").attr('stroke', '#0f508f').attr('x', function (d) {
              return _this21.x(d.className);
            }).attr('y', function (d) {
              return _this21.y(d.probability);
            }).attr('width', this.x.bandwidth()).attr('height', function (d) {
              return _this21.height - _this21.y(d.probability);
            });
          }
        }, {
          key: "predictionsReady",
          value: function predictionsReady() {
            this.loading = false;
          }
        }, {
          key: "fileChangeEvent",
          value: function fileChangeEvent(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              var _this22 = this;

              var reader;
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      this.loading = true;

                      if (event.target.files && event.target.files[0]) {
                        reader = new FileReader();
                        reader.readAsDataURL(event.target.files[0]);

                        reader.onload = function (res) {
                          _this22.imageSrc = res.target.result;
                          setTimeout(function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
                              var imgEl;
                              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                                while (1) {
                                  switch (_context38.prev = _context38.next) {
                                    case 0:
                                      imgEl = this.imageEl.nativeElement;
                                      _context38.next = 3;
                                      return this.model.classify(imgEl);

                                    case 3:
                                      this.predictions = _context38.sent;
                                      this.createChart();
                                      this.predictionsReady();

                                    case 6:
                                    case "end":
                                      return _context38.stop();
                                  }
                                }
                              }, _callee38, this);
                            }));
                          }, 2000);
                        };
                      }

                    case 2:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }
        }]);

        return ImageClassifierComponent;
      }();

      ImageClassifierComponent.ɵfac = function ImageClassifierComponent_Factory(t) {
        return new (t || ImageClassifierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      ImageClassifierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ImageClassifierComponent,
        selectors: [["app-image-classifier"]],
        viewQuery: function ImageClassifierComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.svgEl = _t.first);
          }
        },
        inputs: {
          predictions: "predictions"
        },
        decls: 11,
        vars: 5,
        consts: [["fxLayout", "row", "fxLayoutAlign", "start start", 1, "ic", 3, "hidden"], ["fxLayout", "column", "layout-align", "center center", "fxFlex", "50", 1, "img-container"], [1, "fileContainer"], [3, "icon"], ["type", "file", 3, "change"], [3, "src", 4, "ngIf"], ["class", "list-group", "fxLayout", "row", "fxFlex", "", 4, "ngIf"], ["id", "svg", "width", "960", "height", "500"], ["svg", ""], [1, "blockUi", 3, "hidden"], [3, "src"], ["img", ""], ["fxLayout", "row", "fxFlex", "", 1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]],
        template: function ImageClassifierComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Select an image to classify... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImageClassifierComponent_Template_input_change_5_listener($event) {
              return ctx.fileChangeEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ImageClassifierComponent_img_6_Template, 2, 1, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ImageClassifierComponent_div_7_Template, 2, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "svg", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 9);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageSrc);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.predictions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.loading);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
        styles: [".ic {\n  padding: 8px;\n}\n\n.contentContainer {\n  background: #e0e0e0;\n  border-radius: 5px;\n  border: solid 3px #1b68b5;\n  box-shadow: 1px 1px 4px 1px #717171;\n  margin: 10px 0;\n  overflow: hidden;\n}\n\n.imgWrapper {\n  margin: 5px 0px;\n  border-radius: 5px;\n  border: solid 1px #fff;\n  overflow: hidden;\n  display: inline-flex;\n  background: #155ea7;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.axis .domain {\n  display: none;\n}\n\n.predictions {\n  background: #094d90;\n  color: #fff;\n  padding: 8px;\n  border-radius: 5px;\n  margin: 8px 0;\n  border: solid 1px #fff;\n}\n\nh2 {\n  color: #687684;\n  text-shadow: 1px 1px #f1f4f5;\n  padding: 5px 8px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nh2 a {\n  color: #fff;\n  text-shadow: 1px 1px #000;\n}\n\n.badge {\n  min-width: 250px;\n  min-height: 45px;\n  text-align: left;\n}\n\n.blockUi {\n  z-index: 777;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  background: rgba(27, 92, 140, 0.9);\n  height: 100%;\n  position: absolute;\n}\n\n.blockUi:after {\n  position: absolute;\n  content: \"Loading AI Models\";\n  background: #124265;\n  border: solid 3px #fff;\n  box-shadow: 0 1px 2px 2px #000;\n  z-index: 1020;\n  padding: 10px 35px;\n  top: calc(40% - 34px);\n  left: calc(50% - 104px);\n  font-size: 28px;\n  border-radius: 5px;\n  color: #fff;\n}\n\n.results {\n  font-size: 11px;\n  color: #fff;\n  background: #6798c7;\n  margin-bottom: 5px;\n  border: solid 1px #fff;\n  padding: 3px 8px;\n  min-height: 45px;\n}\n\n.fileContainer {\n  position: relative;\n}\n\n.fileContainer [type=file] {\n  cursor: inherit;\n  display: block;\n  font-size: 16px;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  left: 0px;\n  text-align: right;\n  top: 0;\n  z-index: -1;\n  outline: none;\n  border: none;\n}\n\n.fileContainer [type=file]:focus {\n  outline: none;\n}\n\n/* Example stylistic flourishes */\n\n.fileContainer {\n  background: #ff8f00;\n  border-radius: 5px;\n  font-weight: normal;\n  padding: 5px 11px;\n  color: #fff;\n  border: solid 1px #084a8c;\n  font-size: 18px;\n  margin: 5px 0;\n  font-family: Rubik;\n}\n\n.fileContainer {\n  cursor: pointer;\n}\n\n.fileContainer:hover {\n  background: #ff6d00;\n}\n\n.img-container {\n  width: 100%;\n  padding: 5px;\n  background: #196cbe;\n  border: solid 1px #1661aa;\n  border-radius: 3px;\n  text-align: center;\n  position: relative;\n}\n\n.img-container img {\n  max-height: 540px;\n  max-width: 950px;\n}\n\n:host {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #1976d2;\n  z-index: 1000;\n  display: block;\n  height: 100%;\n}\n\n.container {\n  position: absolute;\n  left: calc(50% - 127px);\n  z-index: 999;\n  top: calc(50% - 100px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 64px;\n  background: #1865b1;\n  padding: 100px;\n  border-radius: 100%;\n  border: solid 10px rgba(255, 255, 255, 0.76);\n}\n\nh1 {\n  text-transform: uppercase;\n  font-weight: 900;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 96px;\n  color: #103150;\n  text-shadow: 1px 1px #4898e6;\n  text-align: center;\n}\n\nh1 span {\n  font-size: 32px;\n}\n\n.circle {\n  position: absolute;\n  border-radius: 50%;\n  border: 1px solid #363636;\n  z-index: 1;\n}\n\n.shape_group {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: 8rem;\n  width: 8rem;\n  overflow: hidden;\n}\n\n.shape_group .shape {\n  position: absolute;\n  border-left: 2.85rem solid transparent;\n  border-right: 2.85rem solid transparent;\n  border-bottom: 4.9rem solid #363636;\n}\n\n.line_group {\n  position: absolute;\n}\n\n.line_group .line {\n  position: absolute;\n  height: 100%;\n  width: 1px;\n  background: linear-gradient(to bottom, transparent 0%, #363636 20%, #363636 80%, transparent 100%);\n}\n\n.line_group .line.l1 {\n  left: 0;\n}\n\n.line_group .line.l2 {\n  left: 33%;\n}\n\n.line_group .line.l3 {\n  left: 67%;\n}\n\n.line_group .line.l4 {\n  left: 100%;\n}\n\n.default .c1 {\n  height: 10rem;\n  width: 10rem;\n  transition: all 2s ease-in-out;\n}\n\n.default .c2 {\n  height: 9rem;\n  width: 9rem;\n  transition: all 2s ease-in-out;\n}\n\n.default .c3 {\n  height: 9rem;\n  width: 9rem;\n  transition: all 2s ease-in-out;\n}\n\n.default .c4 {\n  height: 8rem;\n  width: 8rem;\n  transition: all 2s ease-in-out;\n}\n\n.default .shape_group {\n  transition: height 2s ease-in-out;\n}\n\n.default .shape_group .shape {\n  transition: transform 2s ease-in-out, border-bottom-color 0.75s ease-in 1.25s;\n  border-bottom-color: #fff;\n  transform: rotate(180deg);\n}\n\n.default .line_group {\n  transition: all 2s ease-in-out;\n}\n\n.default .line_group .line {\n  transition: all 2s ease-in-out;\n}\n\n.default .line_group.g1 {\n  height: 15rem;\n  width: 6rem;\n}\n\n.default .line_group.g2 {\n  height: 15rem;\n  width: 7.75rem;\n  transform: rotate(-60deg);\n}\n\n.default .line_group.g3 {\n  height: 15rem;\n  width: 7.75rem;\n  transform: rotate(60deg);\n}\n\n.warlock .c1 {\n  height: 6.25rem;\n  width: 6.25rem;\n  transition: all 2s ease-in-out;\n}\n\n.warlock .c2 {\n  height: 4rem;\n  width: 4rem;\n  transition: all 2s ease-in-out;\n}\n\n.warlock .c3 {\n  height: 12.5rem;\n  width: 12.5rem;\n  transition: all 1s ease-in-out 1s;\n}\n\n.warlock .c4 {\n  height: 11.5rem;\n  width: 11.5rem;\n  transition: all 1s ease-in-out 1s;\n}\n\n.warlock .shape_group .shape {\n  transition: transform 2s ease-in-out, border-bottom-color 0.75s ease-in 1.25s;\n}\n\n.warlock .shape_group .shape.s1, .warlock .shape_group .shape.s4 {\n  transform: rotate(0) translate(-1.15rem, 0.5rem);\n}\n\n.warlock .shape_group .shape.s2, .warlock .shape_group .shape.s5 {\n  transform: rotate(360deg) translate(0, 0.5rem);\n}\n\n.warlock .shape_group .shape.s3, .warlock .shape_group .shape.s6 {\n  transform: rotate(360deg) translate(1.15rem, 0.5rem);\n}\n\n.warlock .line_group {\n  transition: all 2s ease-in-out;\n}\n\n.warlock .line_group .line {\n  transition: all 2s ease-in-out;\n  box-shadow: 0 0 0 2px #fff;\n}\n\n.warlock .line_group.g1 {\n  height: 15rem;\n  width: 6rem;\n  transform: rotate(-90deg);\n}\n\n.warlock .line_group.g1 .l2,\n.warlock .line_group.g1 .l3 {\n  opacity: 0;\n}\n\n.warlock .line_group.g2 {\n  height: 15rem;\n  width: 4rem;\n  transform: rotate(-150deg);\n}\n\n.warlock .line_group.g2 .l1 {\n  left: 50%;\n}\n\n.warlock .line_group.g2 .l2 {\n  left: 74%;\n}\n\n.warlock .line_group.g2 .l3 {\n  left: 77%;\n}\n\n.warlock .line_group.g2 .l4 {\n  left: 100%;\n}\n\n.warlock .line_group.g3 {\n  height: 15rem;\n  width: 4rem;\n  transform: rotate(150deg);\n}\n\n.warlock .line_group.g3 .l1 {\n  left: 0%;\n}\n\n.warlock .line_group.g3 .l2 {\n  left: 24%;\n}\n\n.warlock .line_group.g3 .l3 {\n  left: 27%;\n}\n\n.warlock .line_group.g3 .l4 {\n  left: 50%;\n}\n\n.titan .c1 {\n  height: 10.5rem;\n  width: 10.5rem;\n  transition: all 2s ease-in-out;\n}\n\n.titan .c2 {\n  height: 10rem;\n  width: 10rem;\n  transition: all 2s ease-in-out;\n}\n\n.titan .c3 {\n  height: 12rem;\n  width: 12rem;\n  transition: all 1s ease-in-out 1s;\n}\n\n.titan .c4 {\n  height: 11rem;\n  width: 11rem;\n  transition: all 1s ease-in-out 1s;\n}\n\n.titan .shape_group .shape {\n  transition: transform 2s ease-in-out;\n}\n\n.titan .shape_group .shape.s1 {\n  transform: rotate(-90deg) scale(0.535) translate(-3.1rem, -2.5rem);\n}\n\n.titan .shape_group .shape.s2 {\n  transform: rotate(270deg) scale(0.535) translate(3.1rem, -2.5rem);\n}\n\n.titan .shape_group .shape.s3 {\n  transform: rotate(270deg) scale(0.485) translate(0, 3rem);\n}\n\n.titan .shape_group .shape.s4 {\n  transform: rotate(90deg) scale(0.485) translate(0, 3rem);\n}\n\n.titan .shape_group .shape.s5 {\n  transform: rotate(450deg) scale(0.535) translate(-3.1rem, -2.4rem);\n}\n\n.titan .shape_group .shape.s6 {\n  transform: rotate(450deg) scale(0.535) translate(3.1rem, -2.4rem);\n}\n\n.titan .line_group {\n  transition: all 2s ease-in-out;\n}\n\n.titan .line_group .line {\n  transition: all 2s ease-in-out;\n}\n\n.titan .line_group.g1 {\n  height: 15rem;\n  width: 5.25rem;\n  transform: rotate(-180deg);\n}\n\n.titan .line_group.g1 .l2,\n.titan .line_group.g1 .l3 {\n  opacity: 0;\n}\n\n.titan .line_group.g2 {\n  height: 15rem;\n  width: 5.5rem;\n  transform: rotate(-240deg);\n}\n\n.titan .line_group.g2 .l1 {\n  left: 0%;\n}\n\n.titan .line_group.g2 .l2 {\n  left: 48%;\n}\n\n.titan .line_group.g2 .l3 {\n  left: 52%;\n}\n\n.titan .line_group.g2 .l4 {\n  left: 100%;\n}\n\n.titan .line_group.g3 {\n  height: 15rem;\n  width: 5.5rem;\n  transform: rotate(240deg);\n}\n\n.titan .line_group.g3 .l1 {\n  left: 0%;\n}\n\n.titan .line_group.g3 .l2 {\n  left: 48%;\n}\n\n.titan .line_group.g3 .l3 {\n  left: 52%;\n}\n\n.titan .line_group.g3 .l4 {\n  left: 100%;\n}\n\n.hunter .c1 {\n  height: 5.5rem;\n  width: 5.5rem;\n  transition: all 2s ease-in-out;\n}\n\n.hunter .c2 {\n  height: 4rem;\n  width: 4rem;\n  transition: all 2s ease-in-out;\n}\n\n.hunter .c3 {\n  height: 9rem;\n  width: 9rem;\n  transition: all 2s ease-in-out;\n}\n\n.hunter .c4 {\n  height: 8rem;\n  width: 8rem;\n  transition: all 2s ease-in-out;\n}\n\n.hunter .shape_group {\n  transition: height 2s ease-in-out;\n  height: 6rem;\n}\n\n.hunter .shape_group .shape {\n  transition: all 2s ease-in-out, border-bottom-color 0.75s ease-in 1.25s;\n}\n\n.hunter .shape_group .shape.s1 {\n  transform: rotate(0deg) scale(0.83) translate(0, 1.2rem);\n}\n\n.hunter .shape_group .shape.s2 {\n  transform: rotate(360deg) scale(0.83) translate(0, -3.6rem);\n}\n\n.hunter .shape_group .shape.s3 {\n  transform: rotate(360deg) scale(0.83) translate(0, -1.2rem);\n}\n\n.hunter .shape_group .shape.s4 {\n  border-bottom-color: #fff;\n  transform: rotate(0deg) scale(0.4) translate(0, 0);\n}\n\n.hunter .shape_group .shape.s5 {\n  border-bottom-color: #fff;\n  transform: rotate(360deg) scale(0.4) translate(0, -5rem);\n}\n\n.hunter .shape_group .shape.s6 {\n  border-bottom-color: #fff;\n  transform: rotate(360deg) scale(0.4) translate(0, 5rem);\n}\n\n.hunter .line_group {\n  transition: all 2s ease-in-out;\n}\n\n.hunter .line_group .line {\n  transition: all 2s ease-in-out;\n}\n\n.hunter .line_group.g1 {\n  height: 15rem;\n  width: 6rem;\n  transform: rotate(-270deg);\n}\n\n.hunter .line_group.g2 {\n  height: 15rem;\n  width: 5rem;\n  transform: rotate(-330deg);\n}\n\n.hunter .line_group.g2 .l1 {\n  left: 0%;\n}\n\n.hunter .line_group.g2 .l2 {\n  left: 20%;\n}\n\n.hunter .line_group.g2 .l3 {\n  left: 40%;\n  z-index: -1;\n}\n\n.hunter .line_group.g2 .l4 {\n  left: 60%;\n  z-index: -1;\n}\n\n.hunter .line_group.g3 {\n  height: 15rem;\n  width: 5rem;\n  transform: rotate(330deg);\n}\n\n.hunter .line_group.g3 .l1 {\n  left: 40%;\n}\n\n.hunter .line_group.g3 .l2 {\n  left: 60%;\n}\n\n.hunter .line_group.g3 .l3 {\n  left: 80%;\n}\n\n.hunter .line_group.g3 .l4 {\n  left: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  html {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbWFnZS1jbGFzc2lmaWVyL2ltYWdlLWNsYXNzaWZpZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREEsaUNBQUE7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdFO0VBQ0UsZUFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQ0FBQTtBQUZKOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrR0FBQTtBQUhKOztBQUtJO0VBQ0UsT0FBQTtBQUhOOztBQU1JO0VBQ0UsU0FBQTtBQUpOOztBQU9JO0VBQ0UsU0FBQTtBQUxOOztBQVFJO0VBQ0UsVUFBQTtBQU5OOztBQWVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQVpKOztBQWVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQWJKOztBQWdCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFkSjs7QUFpQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBZko7O0FBa0JFO0VBQ0UsaUNBQUE7QUFoQko7O0FBa0JJO0VBQ0UsNkVBQUE7RUFDQSx5QkFoSWE7RUFpSWIseUJBQUE7QUFoQk47O0FBb0JFO0VBQ0UsOEJBQUE7QUFsQko7O0FBb0JJO0VBQ0UsOEJBQUE7QUFsQk47O0FBcUJJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFuQk47O0FBc0JJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQXBCTjs7QUF1Qkk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBckJOOztBQThCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUEzQko7O0FBOEJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQTVCSjs7QUErQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBN0JKOztBQWdDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUE5Qko7O0FBa0NJO0VBQ0UsNkVBQUE7QUFoQ047O0FBa0NNO0VBRUUsZ0RBQUE7QUFqQ1I7O0FBb0NNO0VBRUUsOENBQUE7QUFuQ1I7O0FBc0NNO0VBRUUsb0RBQUE7QUFyQ1I7O0FBMENFO0VBQ0UsOEJBQUE7QUF4Q0o7O0FBMENJO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtBQXhDTjs7QUEyQ0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBekNOOztBQTJDTTs7RUFFRSxVQUFBO0FBekNSOztBQTZDSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUEzQ047O0FBNkNNO0VBQ0UsU0FBQTtBQTNDUjs7QUE4Q007RUFDRSxTQUFBO0FBNUNSOztBQStDTTtFQUNFLFNBQUE7QUE3Q1I7O0FBZ0RNO0VBQ0UsVUFBQTtBQTlDUjs7QUFrREk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBaEROOztBQWtETTtFQUNFLFFBQUE7QUFoRFI7O0FBbURNO0VBQ0UsU0FBQTtBQWpEUjs7QUFvRE07RUFDRSxTQUFBO0FBbERSOztBQXFETTtFQUNFLFNBQUE7QUFuRFI7O0FBNkRFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQTFESjs7QUE2REU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBM0RKOztBQThERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUE1REo7O0FBK0RFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQTdESjs7QUFpRUk7RUFDRSxvQ0FBQTtBQS9ETjs7QUFpRU07RUFDRSxrRUFBQTtBQS9EUjs7QUFrRU07RUFDRSxpRUFBQTtBQWhFUjs7QUFtRU07RUFDRSx5REFBQTtBQWpFUjs7QUFvRU07RUFDRSx3REFBQTtBQWxFUjs7QUFxRU07RUFDRSxrRUFBQTtBQW5FUjs7QUFzRU07RUFDRSxpRUFBQTtBQXBFUjs7QUF5RUU7RUFDRSw4QkFBQTtBQXZFSjs7QUF5RUk7RUFDRSw4QkFBQTtBQXZFTjs7QUEwRUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBeEVOOztBQTBFTTs7RUFFRSxVQUFBO0FBeEVSOztBQTRFSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUExRU47O0FBNEVNO0VBQ0UsUUFBQTtBQTFFUjs7QUE2RU07RUFDRSxTQUFBO0FBM0VSOztBQThFTTtFQUNFLFNBQUE7QUE1RVI7O0FBK0VNO0VBQ0UsVUFBQTtBQTdFUjs7QUFpRkk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBL0VOOztBQWlGTTtFQUNFLFFBQUE7QUEvRVI7O0FBa0ZNO0VBQ0UsU0FBQTtBQWhGUjs7QUFtRk07RUFDRSxTQUFBO0FBakZSOztBQW9GTTtFQUNFLFVBQUE7QUFsRlI7O0FBNEZFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQXpGSjs7QUE0RkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBMUZKOztBQTZGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUEzRko7O0FBOEZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQTVGSjs7QUErRkU7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7QUE3Rko7O0FBK0ZJO0VBQ0UsdUVBQUE7QUE3Rk47O0FBK0ZNO0VBQ0Usd0RBQUE7QUE3RlI7O0FBZ0dNO0VBQ0UsMkRBQUE7QUE5RlI7O0FBaUdNO0VBQ0UsMkRBQUE7QUEvRlI7O0FBa0dNO0VBQ0UseUJBM2JXO0VBNGJYLGtEQUFBO0FBaEdSOztBQW1HTTtFQUNFLHlCQWhjVztFQWljWCx3REFBQTtBQWpHUjs7QUFvR007RUFDRSx5QkFyY1c7RUFzY1gsdURBQUE7QUFsR1I7O0FBdUdFO0VBQ0UsOEJBQUE7QUFyR0o7O0FBdUdJO0VBQ0UsOEJBQUE7QUFyR047O0FBd0dJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQXRHTjs7QUF5R0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBdkdOOztBQXlHTTtFQUNFLFFBQUE7QUF2R1I7O0FBMEdNO0VBQ0UsU0FBQTtBQXhHUjs7QUEyR007RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQXpHUjs7QUE0R007RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQTFHUjs7QUE4R0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBNUdOOztBQThHTTtFQUNFLFNBQUE7QUE1R1I7O0FBK0dNO0VBQ0UsU0FBQTtBQTdHUjs7QUFnSE07RUFDRSxTQUFBO0FBOUdSOztBQWlITTtFQUNFLFVBQUE7QUEvR1I7O0FBcUhBO0VBQ0U7SUFDRSxlQUFBO0VBbEhGO0FBQ0YiLCJmaWxlIjoiYXBwL2ltYWdlLWNsYXNzaWZpZXIvaW1hZ2UtY2xhc3NpZmllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pYyB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5jb250ZW50Q29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IHNvbGlkIDNweCAjMWI2OGI1O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCAjNzE3MTcxO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWdXcmFwcGVyIHtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjMTU1ZWE3O1xyXG59XHJcblxyXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uYXhpcyAuZG9tYWluIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wcmVkaWN0aW9ucyB7XHJcbiAgYmFja2dyb3VuZDogIzA5NGQ5MDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiAjNjg3Njg0O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICNmMWY0ZjU7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICMwMDA7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtaW4taGVpZ2h0OiA0NXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5ibG9ja1VpIHtcclxuICB6LWluZGV4OiA3Nzc7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjcsIDkyLCAxNDAsIDAuOTApO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5ibG9ja1VpOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJ0xvYWRpbmcgQUkgTW9kZWxzJztcclxuICBiYWNrZ3JvdW5kOiAjMTI0MjY1O1xyXG4gIGJvcmRlcjogc29saWQgM3B4ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDJweCAjMDAwO1xyXG4gIHotaW5kZXg6IDEwMjA7XHJcbiAgcGFkZGluZzogMTBweCAzNXB4O1xyXG4gIHRvcDogY2FsYyg0MCUgLSAzNHB4KTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwNHB4KTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2Nzk4Yzc7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XHJcbiAgcGFkZGluZzogM3B4IDhweDtcclxuICBtaW4taGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG5cclxuLmZpbGVDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZpbGVDb250YWluZXIgW3R5cGU9ZmlsZV0ge1xyXG4gIGN1cnNvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuLmZpbGVDb250YWluZXIgW3R5cGU9ZmlsZV06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLyogRXhhbXBsZSBzdHlsaXN0aWMgZmxvdXJpc2hlcyAqL1xyXG5cclxuLmZpbGVDb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZjhmMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzA4NGE4YztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBmb250LWZhbWlseTogUnViaWs7XHJcbn1cclxuXHJcbi5maWxlQ29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlQ29udGFpbmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY2ZDAwO1xyXG59XHJcblxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjMTk2Y2JlO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMxNjYxYWE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4uaW1nLWNvbnRhaW5lciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDU0MHB4O1xyXG4gIG1heC13aWR0aDogOTUwcHg7XHJcbn1cclxuXHJcblxyXG4kY29sb3ItYmFja2dyb3VuZDogI2ZmZjtcclxuJGNvbG9yLXRyaWFuZ2xlOiAjMzYzNjM2O1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogIzE5NzZkMjtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTI3cHgpO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMTAwcHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgYmFja2dyb3VuZDogIzE4NjViMTtcclxuICBwYWRkaW5nOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlcjogc29saWQgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzYpO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA5NnB4O1xyXG4gIGNvbG9yOiAjMTAzMTUwO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICM0ODk4ZTY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXRyaWFuZ2xlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zaGFwZV9ncm91cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDhyZW07XHJcbiAgd2lkdGg6IDhyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnNoYXBlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1sZWZ0OiAyLjg1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAyLjg1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNC45cmVtIHNvbGlkICRjb2xvci10cmlhbmdsZTtcclxuICB9XHJcbn1cclxuXHJcbi5saW5lX2dyb3VwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIC5saW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsICRjb2xvci10cmlhbmdsZSAyMCUsICRjb2xvci10cmlhbmdsZSA4MCUsIHRyYW5zcGFyZW50IDEwMCUgKTtcclxuXHJcbiAgICAmLmwxIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLmwyIHtcclxuICAgICAgbGVmdDogMzMlO1xyXG4gICAgfVxyXG5cclxuICAgICYubDMge1xyXG4gICAgICBsZWZ0OiA2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5sNCB7XHJcbiAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERFRkFVTFRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uZGVmYXVsdCB7XHJcbiAgLmMxIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzIge1xyXG4gICAgaGVpZ2h0OiA5cmVtO1xyXG4gICAgd2lkdGg6IDlyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzMge1xyXG4gICAgaGVpZ2h0OiA5cmVtO1xyXG4gICAgd2lkdGg6IDlyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzQge1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuc2hhcGVfZ3JvdXAge1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIC5zaGFwZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycyBlYXNlLWluLW91dCwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjc1cyBlYXNlLWluIDEuMjVzO1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkY29sb3ItYmFja2dyb3VuZDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lX2dyb3VwIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAubGluZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAmLmcxIHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMiB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA3Ljc1cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZzMge1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICB3aWR0aDogNy43NXJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBXQVJMT0NLXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLndhcmxvY2sge1xyXG4gIC5jMSB7XHJcbiAgICBoZWlnaHQ6IDYuMjVyZW07XHJcbiAgICB3aWR0aDogNi4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jMiB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jMyB7XHJcbiAgICBoZWlnaHQ6IDEyLjVyZW07XHJcbiAgICB3aWR0aDogMTIuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dCAxcztcclxuICB9XHJcblxyXG4gIC5jNCB7XHJcbiAgICBoZWlnaHQ6IDExLjVyZW07XHJcbiAgICB3aWR0aDogMTEuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dCAxcztcclxuICB9XHJcblxyXG4gIC5zaGFwZV9ncm91cCB7XHJcbiAgICAuc2hhcGUge1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZS1pbi1vdXQsIGJvcmRlci1ib3R0b20tY29sb3IgMC43NXMgZWFzZS1pbiAxLjI1cztcclxuXHJcbiAgICAgICYuczEsXHJcbiAgICAgICYuczQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApIHRyYW5zbGF0ZSgtMS4xNXJlbSwgMC41cmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zMixcclxuICAgICAgJi5zNSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB0cmFuc2xhdGUoMCwgMC41cmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zMyxcclxuICAgICAgJi5zNiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB0cmFuc2xhdGUoMS4xNXJlbSwgMC41cmVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpbmVfZ3JvdXAge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIC5saW5lIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJGNvbG9yLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMSB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG5cclxuICAgICAgLmwyLFxyXG4gICAgICAubDMge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmcyIHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNTBkZWcpO1xyXG5cclxuICAgICAgLmwxIHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sMiB7XHJcbiAgICAgICAgbGVmdDogNzQlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDMge1xyXG4gICAgICAgIGxlZnQ6IDc3JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmw0IHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMyB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG5cclxuICAgICAgLmwxIHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmwyIHtcclxuICAgICAgICBsZWZ0OiAyNCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sMyB7XHJcbiAgICAgICAgbGVmdDogMjclO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDQge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBUSVRBTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi50aXRhbiB7XHJcbiAgLmMxIHtcclxuICAgIGhlaWdodDogMTAuNXJlbTtcclxuICAgIHdpZHRoOiAxMC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmMyIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzMge1xyXG4gICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dCAxcztcclxuICB9XHJcblxyXG4gIC5jNCB7XHJcbiAgICBoZWlnaHQ6IDExcmVtO1xyXG4gICAgd2lkdGg6IDExcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0IDFzO1xyXG4gIH1cclxuXHJcbiAgLnNoYXBlX2dyb3VwIHtcclxuICAgIC5zaGFwZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYuczEge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgc2NhbGUoMC41MzUpIHRyYW5zbGF0ZSgtMy4xcmVtLCAtMi41cmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zMiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSBzY2FsZSgwLjUzNSkgdHJhbnNsYXRlKDMuMXJlbSwgLTIuNXJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczMge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgc2NhbGUoMC40ODUpIHRyYW5zbGF0ZSgwLCAzcmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zNCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDAuNDg1KSB0cmFuc2xhdGUoMCwgM3JlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZykgc2NhbGUoMC41MzUpIHRyYW5zbGF0ZSgtMy4xcmVtLCAtMi40cmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zNiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKSBzY2FsZSgwLjUzNSkgdHJhbnNsYXRlKDMuMXJlbSwgLTIuNHJlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lX2dyb3VwIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAubGluZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAmLmcxIHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgd2lkdGg6IDUuMjVyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG5cclxuICAgICAgLmwyLFxyXG4gICAgICAubDMge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmcyIHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgd2lkdGg6IDUuNXJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTI0MGRlZyk7XHJcblxyXG4gICAgICAubDEge1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDIge1xyXG4gICAgICAgIGxlZnQ6IDQ4JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmwzIHtcclxuICAgICAgICBsZWZ0OiA1MiU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sNCB7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZzMge1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICB3aWR0aDogNS41cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG5cclxuICAgICAgLmwxIHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmwyIHtcclxuICAgICAgICBsZWZ0OiA0OCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sMyB7XHJcbiAgICAgICAgbGVmdDogNTIlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDQge1xyXG4gICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSFVOVEVSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLmh1bnRlciB7XHJcbiAgLmMxIHtcclxuICAgIGhlaWdodDogNS41cmVtO1xyXG4gICAgd2lkdGg6IDUuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jMiB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jMyB7XHJcbiAgICBoZWlnaHQ6IDlyZW07XHJcbiAgICB3aWR0aDogOXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jNCB7XHJcbiAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5zaGFwZV9ncm91cCB7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcblxyXG4gICAgLnNoYXBlIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0LCBib3JkZXItYm90dG9tLWNvbG9yIDAuNzVzIGVhc2UtaW4gMS4yNXM7XHJcblxyXG4gICAgICAmLnMxIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjgzKSB0cmFuc2xhdGUoMCwgMS4ycmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zMiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgwLjgzKSB0cmFuc2xhdGUoMCwgLTMuNnJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczMge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMC44MykgdHJhbnNsYXRlKDAsIC0xLjJyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnM0IHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkY29sb3ItYmFja2dyb3VuZDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjQpIHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zNSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLWJhY2tncm91bmQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgwLjQpIHRyYW5zbGF0ZSgwLCAtNXJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczYge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMC40KSB0cmFuc2xhdGUoMCwgNXJlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lX2dyb3VwIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAubGluZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAmLmcxIHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNzBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZzIge1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTMzMGRlZyk7XHJcblxyXG4gICAgICAubDEge1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDIge1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmwzIHtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sNCB7XHJcbiAgICAgICAgbGVmdDogNjAlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMyB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG5cclxuICAgICAgLmwxIHtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sMiB7XHJcbiAgICAgICAgbGVmdDogNjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDMge1xyXG4gICAgICAgIGxlZnQ6IDgwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmw0IHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0
          }))])], {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          }))])])])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageClassifierComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-image-classifier',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            templateUrl: './image-classifier.component.html',
            styleUrls: ['./image-classifier.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0
            }))])], {
              optional: true
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1
            }))])])])])]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          imageEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["img", {
              "static": false
            }]
          }],
          svgEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["svg", {
              "static": false
            }]
          }],
          predictions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hjGQ":
    /*!*****************************************!*\
      !*** ./src/app/loader/loading.guard.ts ***!
      \*****************************************/

    /*! exports provided: LoadingGuard */

    /***/
    function hjGQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingGuard", function () {
        return LoadingGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LoadingGuard = /*#__PURE__*/function () {
        function LoadingGuard() {
          var _this23 = this;

          _classCallCheck(this, LoadingGuard);

          this.loader$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.loader = false;
          this.loader$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(function (loader) {
            return _this23.loader = loader;
          });
        }

        _createClass(LoadingGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _this24 = this;

            this.loader$.next(true); // Returning an Observable for async checks

            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (obs) {
              // Sample 2 second async request
              setTimeout(function () {
                _this24.loader$.next(false);

                obs.next(true);
                obs.complete();
              }, 5000);
            });
          }
        }]);

        return LoadingGuard;
      }();

      LoadingGuard.ɵfac = function LoadingGuard_Factory(t) {
        return new (t || LoadingGuard)();
      };

      LoadingGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoadingGuard,
        factory: LoadingGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jJ8u":
    /*!************************************************!*\
      !*** ./src/app/route-transition-animations.ts ***!
      \************************************************/

    /*! exports provided: routeTransitionAnimations */

    /***/
    function jJ8u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routeTransitionAnimations", function () {
        return routeTransitionAnimations;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('triggerName', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('One => Two, Two => Three, One => Three', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'relative'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        right: '-100%',
        opacity: 0
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        right: '100%',
        opacity: 0
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        right: '0%',
        opacity: 1
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Three => Two, Two => One, Three => One', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'relative'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        left: '-100%',
        opacity: 0
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        left: '100%',
        opacity: 0
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        left: '0%',
        opacity: 1
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())])]); // export const routeTransitionAnimations = trigger('triggerName', [
      // 	transition('One => Two, Two => Three', [
      // 		style({ position: 'relative' }),
      // 		query(':enter, :leave', [
      // 			style({
      // 				position: 'absolute',
      // 				top: 0,
      // 				right: 0,
      // 				width: '100%'
      // 			})
      // 		]),
      // 		query(':enter', [style({ right: '-100%', opacity: 0 })]),
      // 		query(':leave', animateChild()),
      // 		group([
      // 			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
      // 			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
      // 		]),
      // 		query(':enter', animateChild())
      // 	])
      // 	// ,
      // 	// transition('* <=> FilterPage', [
      // 	// 	style({ position: 'relative' }),
      // 	// 	query(':enter, :leave', [
      // 	// 		style({
      // 	// 			position: 'absolute',
      // 	// 			top: 0,
      // 	// 			left: 0,
      // 	// 			width: '100%'
      // 	// 		})
      // 	// 	]),
      // 	// 	query(':enter', [style({ left: '-100%' })]),
      // 	// 	query(':leave', animateChild()),
      // 	// 	group([
      // 	// 		query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
      // 	// 		query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
      // 	// 	]),
      // 	// 	query(':enter', animateChild())
      // 	// ])
      // ]);

      /***/
    },

    /***/
    "kQyY":
    /*!********************************************!*\
      !*** ./src/app/loader/loader.component.ts ***!
      \********************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function kQyY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);

          this.myStyle = {};
          this.myParams = {};
          this.width = 100;
          this.height = 100;
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var container = document.querySelector(".warlock");
            var classNames = ["warlock", "titan", "hunter", "default"];
            var i = 0;

            if (container) {
              var changeClass = function changeClass() {
                container.classList.remove(classNames[i]);
                i = i < classNames.length - 1 ? i + 1 : 0;
                container.classList.add(classNames[i]);
              };

              setInterval(changeClass, 2000);
            }

            this.myStyle = {
              'position': 'fixed',
              'width': '100%',
              'height': '100%',
              'z-index': -1,
              'top': 0,
              'left': 0,
              'right': 0,
              'bottom': 0
            };
            this.myParams = {
              particles: {
                number: {
                  value: 200
                },
                color: {
                  value: '#15487a'
                },
                shape: {
                  type: 'triangle'
                }
              }
            };
            console.log('loader was called', container);
          }
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)();
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 33,
        vars: 0,
        consts: [["fxLayout", "column", "fxLayoutAlign", "start center"], [1, "container", "warlock"], [1, "circle", "c1"], [1, "circle", "c2"], [1, "circle", "c3"], [1, "circle", "c4"], [1, "shape_group"], [1, "shape", "s1"], [1, "shape", "s2"], [1, "shape", "s3"], [1, "shape", "s4"], [1, "shape", "s5"], [1, "shape", "s6"], [1, "line_group", "g1"], [1, "line", "l1"], [1, "line", "l2"], [1, "line", "l3"], [1, "line", "l4"], [1, "line_group", "g2"], [1, "line_group", "g3"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DEEPSPEED AI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]],
        styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #1976d2;\n  z-index: 1000;\n  display: block;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: calc(50% - 127px);\n  z-index: 999;\n  top: calc(50% - 100px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 64px;\n  background: #1865b1;\n  padding: 100px;\n  border-radius: 100%;\n  border: solid 10px rgba(255, 255, 255, 0.76);\n}\n\nh1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 900;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 96px;\n  color: #103150;\n  text-shadow: 1px 1px #4898e6;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  border: 1px solid #363636;\n  z-index: 1;\n}\n\n.shape_group[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: 8rem;\n  width: 8rem;\n  overflow: hidden;\n}\n\n.shape_group[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-left: 2.85rem solid transparent;\n  border-right: 2.85rem solid transparent;\n  border-bottom: 4.9rem solid #363636;\n}\n\n.line_group[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.line_group[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 1px;\n  background: linear-gradient(to bottom, transparent 0%, #363636 20%, #363636 80%, transparent 100%);\n}\n\n.line_group[_ngcontent-%COMP%]   .line.l1[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.line_group[_ngcontent-%COMP%]   .line.l2[_ngcontent-%COMP%] {\n  left: 33%;\n}\n\n.line_group[_ngcontent-%COMP%]   .line.l3[_ngcontent-%COMP%] {\n  left: 67%;\n}\n\n.line_group[_ngcontent-%COMP%]   .line.l4[_ngcontent-%COMP%] {\n  left: 100%;\n}\n\n.default[_ngcontent-%COMP%]   .c1[_ngcontent-%COMP%] {\n  height: 10rem;\n  width: 10rem;\n  transition: all 2s ease-in-out;\n}\n\n.default[_ngcontent-%COMP%]   .c2[_ngcontent-%COMP%] {\n  height: 9rem;\n  width: 9rem;\n  transition: all 2s ease-in-out;\n}\n\n.default[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n  height: 9rem;\n  width: 9rem;\n  transition: all 2s ease-in-out;\n}\n\n.default[_ngcontent-%COMP%]   .c4[_ngcontent-%COMP%] {\n  height: 8rem;\n  width: 8rem;\n  transition: all 2s ease-in-out;\n}\n\n.default[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%] {\n  transition: height 2s ease-in-out;\n}\n\n.default[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  transition: transform 2s ease-in-out, border-bottom-color 0.75s ease-in 1.25s;\n  border-bottom-color: #fff;\n  transform: rotate(180deg);\n}\n\n.default[_ngcontent-%COMP%]   .line_group[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n}\n\n.default[_ngcontent-%COMP%]   .line_group[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n}\n\n.default[_ngcontent-%COMP%]   .line_group.g1[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 6rem;\n}\n\n.default[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 7.75rem;\n  transform: rotate(-60deg);\n}\n\n.default[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 7.75rem;\n  transform: rotate(60deg);\n}\n\n.warlock[_ngcontent-%COMP%]   .c1[_ngcontent-%COMP%] {\n  height: 6.25rem;\n  width: 6.25rem;\n  transition: all 2s ease-in-out;\n}\n\n.warlock[_ngcontent-%COMP%]   .c2[_ngcontent-%COMP%] {\n  height: 4rem;\n  width: 4rem;\n  transition: all 2s ease-in-out;\n}\n\n.warlock[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 12.5rem;\n  transition: all 1s ease-in-out 1s;\n}\n\n.warlock[_ngcontent-%COMP%]   .c4[_ngcontent-%COMP%] {\n  height: 11.5rem;\n  width: 11.5rem;\n  transition: all 1s ease-in-out 1s;\n}\n\n.warlock[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  transition: transform 2s ease-in-out, border-bottom-color 0.75s ease-in 1.25s;\n}\n\n.warlock[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s1[_ngcontent-%COMP%], .warlock[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s4[_ngcontent-%COMP%] {\n  transform: rotate(0) translate(-1.15rem, 0.5rem);\n}\n\n.warlock[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s2[_ngcontent-%COMP%], .warlock[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s5[_ngcontent-%COMP%] {\n  transform: rotate(360deg) translate(0, 0.5rem);\n}\n\n.warlock[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s3[_ngcontent-%COMP%], .warlock[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s6[_ngcontent-%COMP%] {\n  transform: rotate(360deg) translate(1.15rem, 0.5rem);\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n  box-shadow: 0 0 0 2px #fff;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g1[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 6rem;\n  transform: rotate(-90deg);\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g1[_ngcontent-%COMP%]   .l2[_ngcontent-%COMP%], .warlock[_ngcontent-%COMP%]   .line_group.g1[_ngcontent-%COMP%]   .l3[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 4rem;\n  transform: rotate(-150deg);\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l1[_ngcontent-%COMP%] {\n  left: 50%;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l2[_ngcontent-%COMP%] {\n  left: 74%;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l3[_ngcontent-%COMP%] {\n  left: 77%;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l4[_ngcontent-%COMP%] {\n  left: 100%;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 4rem;\n  transform: rotate(150deg);\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l1[_ngcontent-%COMP%] {\n  left: 0%;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l2[_ngcontent-%COMP%] {\n  left: 24%;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l3[_ngcontent-%COMP%] {\n  left: 27%;\n}\n\n.warlock[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l4[_ngcontent-%COMP%] {\n  left: 50%;\n}\n\n.titan[_ngcontent-%COMP%]   .c1[_ngcontent-%COMP%] {\n  height: 10.5rem;\n  width: 10.5rem;\n  transition: all 2s ease-in-out;\n}\n\n.titan[_ngcontent-%COMP%]   .c2[_ngcontent-%COMP%] {\n  height: 10rem;\n  width: 10rem;\n  transition: all 2s ease-in-out;\n}\n\n.titan[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n  height: 12rem;\n  width: 12rem;\n  transition: all 1s ease-in-out 1s;\n}\n\n.titan[_ngcontent-%COMP%]   .c4[_ngcontent-%COMP%] {\n  height: 11rem;\n  width: 11rem;\n  transition: all 1s ease-in-out 1s;\n}\n\n.titan[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  transition: transform 2s ease-in-out;\n}\n\n.titan[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s1[_ngcontent-%COMP%] {\n  transform: rotate(-90deg) scale(0.535) translate(-3.1rem, -2.5rem);\n}\n\n.titan[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s2[_ngcontent-%COMP%] {\n  transform: rotate(270deg) scale(0.535) translate(3.1rem, -2.5rem);\n}\n\n.titan[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s3[_ngcontent-%COMP%] {\n  transform: rotate(270deg) scale(0.485) translate(0, 3rem);\n}\n\n.titan[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s4[_ngcontent-%COMP%] {\n  transform: rotate(90deg) scale(0.485) translate(0, 3rem);\n}\n\n.titan[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s5[_ngcontent-%COMP%] {\n  transform: rotate(450deg) scale(0.535) translate(-3.1rem, -2.4rem);\n}\n\n.titan[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s6[_ngcontent-%COMP%] {\n  transform: rotate(450deg) scale(0.535) translate(3.1rem, -2.4rem);\n}\n\n.titan[_ngcontent-%COMP%]   .line_group[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g1[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 5.25rem;\n  transform: rotate(-180deg);\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g1[_ngcontent-%COMP%]   .l2[_ngcontent-%COMP%], .titan[_ngcontent-%COMP%]   .line_group.g1[_ngcontent-%COMP%]   .l3[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 5.5rem;\n  transform: rotate(-240deg);\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l1[_ngcontent-%COMP%] {\n  left: 0%;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l2[_ngcontent-%COMP%] {\n  left: 48%;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l3[_ngcontent-%COMP%] {\n  left: 52%;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l4[_ngcontent-%COMP%] {\n  left: 100%;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 5.5rem;\n  transform: rotate(240deg);\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l1[_ngcontent-%COMP%] {\n  left: 0%;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l2[_ngcontent-%COMP%] {\n  left: 48%;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l3[_ngcontent-%COMP%] {\n  left: 52%;\n}\n\n.titan[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l4[_ngcontent-%COMP%] {\n  left: 100%;\n}\n\n.hunter[_ngcontent-%COMP%]   .c1[_ngcontent-%COMP%] {\n  height: 5.5rem;\n  width: 5.5rem;\n  transition: all 2s ease-in-out;\n}\n\n.hunter[_ngcontent-%COMP%]   .c2[_ngcontent-%COMP%] {\n  height: 4rem;\n  width: 4rem;\n  transition: all 2s ease-in-out;\n}\n\n.hunter[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n  height: 9rem;\n  width: 9rem;\n  transition: all 2s ease-in-out;\n}\n\n.hunter[_ngcontent-%COMP%]   .c4[_ngcontent-%COMP%] {\n  height: 8rem;\n  width: 8rem;\n  transition: all 2s ease-in-out;\n}\n\n.hunter[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%] {\n  transition: height 2s ease-in-out;\n  height: 6rem;\n}\n\n.hunter[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out, border-bottom-color 0.75s ease-in 1.25s;\n}\n\n.hunter[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s1[_ngcontent-%COMP%] {\n  transform: rotate(0deg) scale(0.83) translate(0, 1.2rem);\n}\n\n.hunter[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s2[_ngcontent-%COMP%] {\n  transform: rotate(360deg) scale(0.83) translate(0, -3.6rem);\n}\n\n.hunter[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s3[_ngcontent-%COMP%] {\n  transform: rotate(360deg) scale(0.83) translate(0, -1.2rem);\n}\n\n.hunter[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s4[_ngcontent-%COMP%] {\n  border-bottom-color: #fff;\n  transform: rotate(0deg) scale(0.4) translate(0, 0);\n}\n\n.hunter[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s5[_ngcontent-%COMP%] {\n  border-bottom-color: #fff;\n  transform: rotate(360deg) scale(0.4) translate(0, -5rem);\n}\n\n.hunter[_ngcontent-%COMP%]   .shape_group[_ngcontent-%COMP%]   .shape.s6[_ngcontent-%COMP%] {\n  border-bottom-color: #fff;\n  transform: rotate(360deg) scale(0.4) translate(0, 5rem);\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g1[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 6rem;\n  transform: rotate(-270deg);\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 5rem;\n  transform: rotate(-330deg);\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l1[_ngcontent-%COMP%] {\n  left: 0%;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l2[_ngcontent-%COMP%] {\n  left: 20%;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l3[_ngcontent-%COMP%] {\n  left: 40%;\n  z-index: -1;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g2[_ngcontent-%COMP%]   .l4[_ngcontent-%COMP%] {\n  left: 60%;\n  z-index: -1;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 5rem;\n  transform: rotate(330deg);\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l1[_ngcontent-%COMP%] {\n  left: 40%;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l2[_ngcontent-%COMP%] {\n  left: 60%;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l3[_ngcontent-%COMP%] {\n  left: 80%;\n}\n\n.hunter[_ngcontent-%COMP%]   .line_group.g3[_ngcontent-%COMP%]   .l4[_ngcontent-%COMP%] {\n  left: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQURGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUU7RUFDRSxlQUFBO0FBQUo7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG1DQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtHQUFBO0FBREo7O0FBR0k7RUFDRSxPQUFBO0FBRE47O0FBSUk7RUFDRSxTQUFBO0FBRk47O0FBS0k7RUFDRSxTQUFBO0FBSE47O0FBTUk7RUFDRSxVQUFBO0FBSk47O0FBYUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBVko7O0FBYUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBWEo7O0FBY0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBWko7O0FBZUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBYko7O0FBZ0JFO0VBQ0UsaUNBQUE7QUFkSjs7QUFnQkk7RUFDRSw2RUFBQTtFQUNBLHlCQTdIYTtFQThIYix5QkFBQTtBQWROOztBQWtCRTtFQUNFLDhCQUFBO0FBaEJKOztBQWtCSTtFQUNFLDhCQUFBO0FBaEJOOztBQW1CSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBakJOOztBQW9CSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFsQk47O0FBcUJJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQW5CTjs7QUE0QkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBekJKOztBQTRCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUExQko7O0FBNkJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQTNCSjs7QUE4QkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBNUJKOztBQWdDSTtFQUNFLDZFQUFBO0FBOUJOOztBQWdDTTtFQUVFLGdEQUFBO0FBL0JSOztBQWtDTTtFQUVFLDhDQUFBO0FBakNSOztBQW9DTTtFQUVFLG9EQUFBO0FBbkNSOztBQXdDRTtFQUNFLDhCQUFBO0FBdENKOztBQXdDSTtFQUNFLDhCQUFBO0VBQ0EsMEJBQUE7QUF0Q047O0FBeUNJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQXZDTjs7QUF5Q007O0VBRUUsVUFBQTtBQXZDUjs7QUEyQ0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBekNOOztBQTJDTTtFQUNFLFNBQUE7QUF6Q1I7O0FBNENNO0VBQ0UsU0FBQTtBQTFDUjs7QUE2Q007RUFDRSxTQUFBO0FBM0NSOztBQThDTTtFQUNFLFVBQUE7QUE1Q1I7O0FBZ0RJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQTlDTjs7QUFnRE07RUFDRSxRQUFBO0FBOUNSOztBQWlETTtFQUNFLFNBQUE7QUEvQ1I7O0FBa0RNO0VBQ0UsU0FBQTtBQWhEUjs7QUFtRE07RUFDRSxTQUFBO0FBakRSOztBQTJERTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUF4REo7O0FBMkRFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQXpESjs7QUE0REU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBMURKOztBQTZERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUEzREo7O0FBK0RJO0VBQ0Usb0NBQUE7QUE3RE47O0FBK0RNO0VBQ0Usa0VBQUE7QUE3RFI7O0FBZ0VNO0VBQ0UsaUVBQUE7QUE5RFI7O0FBaUVNO0VBQ0UseURBQUE7QUEvRFI7O0FBa0VNO0VBQ0Usd0RBQUE7QUFoRVI7O0FBbUVNO0VBQ0Usa0VBQUE7QUFqRVI7O0FBb0VNO0VBQ0UsaUVBQUE7QUFsRVI7O0FBdUVFO0VBQ0UsOEJBQUE7QUFyRUo7O0FBdUVJO0VBQ0UsOEJBQUE7QUFyRU47O0FBd0VJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQXRFTjs7QUF3RU07O0VBRUUsVUFBQTtBQXRFUjs7QUEwRUk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBeEVOOztBQTBFTTtFQUNFLFFBQUE7QUF4RVI7O0FBMkVNO0VBQ0UsU0FBQTtBQXpFUjs7QUE0RU07RUFDRSxTQUFBO0FBMUVSOztBQTZFTTtFQUNFLFVBQUE7QUEzRVI7O0FBK0VJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQTdFTjs7QUErRU07RUFDRSxRQUFBO0FBN0VSOztBQWdGTTtFQUNFLFNBQUE7QUE5RVI7O0FBaUZNO0VBQ0UsU0FBQTtBQS9FUjs7QUFrRk07RUFDRSxVQUFBO0FBaEZSOztBQTBGRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUF2Rko7O0FBMEZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQXhGSjs7QUEyRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBekZKOztBQTRGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUExRko7O0FBNkZFO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0FBM0ZKOztBQTZGSTtFQUNFLHVFQUFBO0FBM0ZOOztBQTZGTTtFQUNFLHdEQUFBO0FBM0ZSOztBQThGTTtFQUNFLDJEQUFBO0FBNUZSOztBQStGTTtFQUNFLDJEQUFBO0FBN0ZSOztBQWdHTTtFQUNFLHlCQXhiVztFQXliWCxrREFBQTtBQTlGUjs7QUFpR007RUFDRSx5QkE3Ylc7RUE4Ylgsd0RBQUE7QUEvRlI7O0FBa0dNO0VBQ0UseUJBbGNXO0VBbWNYLHVEQUFBO0FBaEdSOztBQXFHRTtFQUNFLDhCQUFBO0FBbkdKOztBQXFHSTtFQUNFLDhCQUFBO0FBbkdOOztBQXNHSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFwR047O0FBdUdJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQXJHTjs7QUF1R007RUFDRSxRQUFBO0FBckdSOztBQXdHTTtFQUNFLFNBQUE7QUF0R1I7O0FBeUdNO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUF2R1I7O0FBMEdNO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUF4R1I7O0FBNEdJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQTFHTjs7QUE0R007RUFDRSxTQUFBO0FBMUdSOztBQTZHTTtFQUNFLFNBQUE7QUEzR1I7O0FBOEdNO0VBQ0UsU0FBQTtBQTVHUjs7QUErR007RUFDRSxVQUFBO0FBN0dSOztBQW1IQTtFQUNFO0lBQ0UsZUFBQTtFQWhIRjtBQUNGIiwiZmlsZSI6ImFwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJhY2tncm91bmQ6ICNmZmY7XHJcbiRjb2xvci10cmlhbmdsZTogIzM2MzYzNjtcclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogIzE5NzZkMjtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDEyN3B4KTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEwMHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGJhY2tncm91bmQ6IzE4NjViMTtcclxuICBwYWRkaW5nOjEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICBib3JkZXI6c29saWQgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzYpO1xyXG59XHJcbmgxIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDk2cHg7XHJcbiAgY29sb3I6ICMxMDMxNTA7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzQ4OThlNjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxufVxyXG4uY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci10cmlhbmdsZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uc2hhcGVfZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5zaGFwZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItbGVmdDogMi44NXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMi44NXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDQuOXJlbSBzb2xpZCAkY29sb3ItdHJpYW5nbGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluZV9ncm91cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAubGluZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCB0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCAkY29sb3ItdHJpYW5nbGUgMjAlLCAkY29sb3ItdHJpYW5nbGUgODAlLCB0cmFuc3BhcmVudCAxMDAlICk7XHJcblxyXG4gICAgJi5sMSB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5sMiB7XHJcbiAgICAgIGxlZnQ6IDMzJTtcclxuICAgIH1cclxuXHJcbiAgICAmLmwzIHtcclxuICAgICAgbGVmdDogNjclO1xyXG4gICAgfVxyXG5cclxuICAgICYubDQge1xyXG4gICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBERUZBVUxUXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLmRlZmF1bHQge1xyXG4gIC5jMSB7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmMyIHtcclxuICAgIGhlaWdodDogOXJlbTtcclxuICAgIHdpZHRoOiA5cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmMzIHtcclxuICAgIGhlaWdodDogOXJlbTtcclxuICAgIHdpZHRoOiA5cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmM0IHtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLnNoYXBlX2dyb3VwIHtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAuc2hhcGUge1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZS1pbi1vdXQsIGJvcmRlci1ib3R0b20tY29sb3IgMC43NXMgZWFzZS1pbiAxLjI1cztcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLWJhY2tncm91bmQ7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGluZV9ncm91cCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMSB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICYuZzIge1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICB3aWR0aDogNy43NXJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmczIHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgd2lkdGg6IDcuNzVyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gV0FSTE9DS1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi53YXJsb2NrIHtcclxuICAuYzEge1xyXG4gICAgaGVpZ2h0OiA2LjI1cmVtO1xyXG4gICAgd2lkdGg6IDYuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzIge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzMge1xyXG4gICAgaGVpZ2h0OiAxMi41cmVtO1xyXG4gICAgd2lkdGg6IDEyLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQgMXM7XHJcbiAgfVxyXG5cclxuICAuYzQge1xyXG4gICAgaGVpZ2h0OiAxMS41cmVtO1xyXG4gICAgd2lkdGg6IDExLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQgMXM7XHJcbiAgfVxyXG5cclxuICAuc2hhcGVfZ3JvdXAge1xyXG4gICAgLnNoYXBlIHtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2UtaW4tb3V0LCBib3JkZXItYm90dG9tLWNvbG9yIDAuNzVzIGVhc2UtaW4gMS4yNXM7XHJcblxyXG4gICAgICAmLnMxLFxyXG4gICAgICAmLnM0IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTEuMTVyZW0sIDAuNXJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczIsXHJcbiAgICAgICYuczUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgdHJhbnNsYXRlKDAsIDAuNXJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczMsXHJcbiAgICAgICYuczYge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgdHJhbnNsYXRlKDEuMTVyZW0sIDAuNXJlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lX2dyb3VwIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAubGluZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRjb2xvci1iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgICYuZzEge1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuXHJcbiAgICAgIC5sMixcclxuICAgICAgLmwzIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMiB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTUwZGVnKTtcclxuXHJcbiAgICAgIC5sMSB7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDIge1xyXG4gICAgICAgIGxlZnQ6IDc0JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmwzIHtcclxuICAgICAgICBsZWZ0OiA3NyU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sNCB7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZzMge1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuXHJcbiAgICAgIC5sMSB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sMiB7XHJcbiAgICAgICAgbGVmdDogMjQlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDMge1xyXG4gICAgICAgIGxlZnQ6IDI3JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmw0IHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVElUQU5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4udGl0YW4ge1xyXG4gIC5jMSB7XHJcbiAgICBoZWlnaHQ6IDEwLjVyZW07XHJcbiAgICB3aWR0aDogMTAuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jMiB7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmMzIHtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQgMXM7XHJcbiAgfVxyXG5cclxuICAuYzQge1xyXG4gICAgaGVpZ2h0OiAxMXJlbTtcclxuICAgIHdpZHRoOiAxMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dCAxcztcclxuICB9XHJcblxyXG4gIC5zaGFwZV9ncm91cCB7XHJcbiAgICAuc2hhcGUge1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnMxIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNTM1KSB0cmFuc2xhdGUoLTMuMXJlbSwgLTIuNXJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgc2NhbGUoMC41MzUpIHRyYW5zbGF0ZSgzLjFyZW0sIC0yLjVyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnMzIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHNjYWxlKDAuNDg1KSB0cmFuc2xhdGUoMCwgM3JlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgwLjQ4NSkgdHJhbnNsYXRlKDAsIDNyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnM1IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpIHNjYWxlKDAuNTM1KSB0cmFuc2xhdGUoLTMuMXJlbSwgLTIuNHJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczYge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZykgc2NhbGUoMC41MzUpIHRyYW5zbGF0ZSgzLjFyZW0sIC0yLjRyZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGluZV9ncm91cCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMSB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA1LjI1cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuXHJcbiAgICAgIC5sMixcclxuICAgICAgLmwzIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMiB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA1LjVyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNDBkZWcpO1xyXG5cclxuICAgICAgLmwxIHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmwyIHtcclxuICAgICAgICBsZWZ0OiA0OCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sMyB7XHJcbiAgICAgICAgbGVmdDogNTIlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDQge1xyXG4gICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmczIHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgd2lkdGg6IDUuNXJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuXHJcbiAgICAgIC5sMSB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sMiB7XHJcbiAgICAgICAgbGVmdDogNDglO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDMge1xyXG4gICAgICAgIGxlZnQ6IDUyJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmw0IHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEhVTlRFUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5odW50ZXIge1xyXG4gIC5jMSB7XHJcbiAgICBoZWlnaHQ6IDUuNXJlbTtcclxuICAgIHdpZHRoOiA1LjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzIge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzMge1xyXG4gICAgaGVpZ2h0OiA5cmVtO1xyXG4gICAgd2lkdGg6IDlyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuYzQge1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuc2hhcGVfZ3JvdXAge1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2UtaW4tb3V0O1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG5cclxuICAgIC5zaGFwZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dCwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjc1cyBlYXNlLWluIDEuMjVzO1xyXG5cclxuICAgICAgJi5zMSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC44MykgdHJhbnNsYXRlKDAsIDEuMnJlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMC44MykgdHJhbnNsYXRlKDAsIC0zLjZyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnMzIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDAuODMpIHRyYW5zbGF0ZSgwLCAtMS4ycmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zNCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLWJhY2tncm91bmQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC40KSB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuczUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMC40KSB0cmFuc2xhdGUoMCwgLTVyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnM2IHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkY29sb3ItYmFja2dyb3VuZDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDAuNCkgdHJhbnNsYXRlKDAsIDVyZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGluZV9ncm91cCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5nMSB7XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjcwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmcyIHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMzBkZWcpO1xyXG5cclxuICAgICAgLmwxIHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmwyIHtcclxuICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sMyB7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDQge1xyXG4gICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZzMge1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuXHJcbiAgICAgIC5sMSB7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubDIge1xyXG4gICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmwzIHtcclxuICAgICAgICBsZWZ0OiA4MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sNCB7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loader',
            templateUrl: './loader.component.html',
            styleUrls: ['./loader.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pV0i":
    /*!***********************************************!*\
      !*** ./src/app/shared/plot/plot.component.ts ***!
      \***********************************************/

    /*! exports provided: PlotComponent */

    /***/
    function pV0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlotComponent", function () {
        return PlotComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _plotly_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../plotly.service */
      "C1vv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["plot"]; // @dynamic

      var PlotComponent = /*#__PURE__*/function () {
        function PlotComponent(plotly, iterableDiffers, keyValueDiffers) {
          _classCallCheck(this, PlotComponent);

          this.plotly = plotly;
          this.iterableDiffers = iterableDiffers;
          this.keyValueDiffers = keyValueDiffers;
          this.defaultClassName = 'js-plotly-plot';
          this.datarevision = 0;
          this.revision = 0;
          this.debug = false;
          this.useResizeHandler = false;
          this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.purge = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.afterExport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.afterPlot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.animated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.animatingFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.animationInterrupted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.autoSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.beforeExport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.plotly_click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.clickAnnotation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.deselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.doubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.framework = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.legendClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.legendDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.relayout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.restyle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.redraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selecting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.sliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.sliderEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.sliderStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.transitioning = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.transitionInterrupted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.unhover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.relayouting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.eventNames = ['afterExport', 'afterPlot', 'animated', 'animatingFrame', 'animationInterrupted', 'autoSize', 'beforeExport', 'buttonClicked', 'clickAnnotation', 'deselect', 'doubleClick', 'framework', 'hover', 'legendClick', 'legendDoubleClick', 'relayout', 'restyle', 'redraw', 'selected', 'selecting', 'sliderChange', 'sliderEnd', 'sliderStart', 'transitioning', 'transitionInterrupted', 'unhover', 'relayouting'];
        }

        _createClass(PlotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.createPlot().then(function () {
              var figure = _this25.createFigure();

              _this25.initialized.emit(figure);
            });

            if (this.plotly.debug && this.click.observers.length > 0) {
              var msg = 'DEPRECATED: Reconsider using `(plotly_click)` instead of `(click)` to avoid event conflict. ' + 'Please check https://github.com/plotly/angular-plotly.js#FAQ';
              console.error(msg);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (typeof this.resizeHandler === 'function') {
              this.getWindow().removeEventListener('resize', this.resizeHandler);
              this.resizeHandler = undefined;
            }

            var figure = this.createFigure();
            this.purge.emit(figure);

            _plotly_service__WEBPACK_IMPORTED_MODULE_1__["PlotlyService"].remove(this.plotlyInstance);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var shouldUpdate = false;
            var revision = changes.revision;

            if (revision && !revision.isFirstChange()) {
              shouldUpdate = true;
            }

            var debug = changes.debug;

            if (debug && !debug.isFirstChange()) {
              shouldUpdate = true;
            }

            if (shouldUpdate) {
              this.updatePlot();
            }

            this.updateWindowResizeHandler();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            var shouldUpdate = false;

            if (this.layoutDiffer) {
              var layoutHasDiff = this.layoutDiffer.diff(this.layout);

              if (layoutHasDiff) {
                shouldUpdate = true;
              }
            } else if (this.layout) {
              this.layoutDiffer = this.keyValueDiffers.find(this.layout).create();
            } else {
              this.layoutDiffer = undefined;
            }

            if (this.dataDiffer) {
              var dataHasDiff = this.dataDiffer.diff(this.data);

              if (dataHasDiff) {
                shouldUpdate = true;
              }
            } else if (Array.isArray(this.data)) {
              this.dataDiffer = this.iterableDiffers.find(this.data).create(this.dataDifferTrackBy);
            } else {
              this.dataDiffer = undefined;
            }

            if (shouldUpdate && this.plotlyInstance) {
              this.datarevision += 1;
              this.updatePlot();
            }
          }
        }, {
          key: "getWindow",
          value: function getWindow() {
            return window;
          }
        }, {
          key: "getClassName",
          value: function getClassName() {
            var classes = [this.defaultClassName];

            if (Array.isArray(this.className)) {
              classes = classes.concat(this.className);
            } else if (this.className) {
              classes.push(this.className);
            }

            return classes.join(' ');
          }
        }, {
          key: "createPlot",
          value: function createPlot() {
            var _this26 = this;

            return this.plotly.newPlot(this.plotEl.nativeElement, this.data, this.layout, this.config, this.frames).then(function (plotlyInstance) {
              _this26.plotlyInstance = plotlyInstance;
              _this26.getWindow().gd = _this26.debug ? plotlyInstance : undefined;

              _this26.eventNames.forEach(function (name) {
                var eventName = "plotly_".concat(name.toLowerCase());
                plotlyInstance.on(eventName, function (data) {
                  return _this26[name].emit(data);
                });
              });

              plotlyInstance.on('plotly_click', function (data) {
                _this26.click.emit(data);

                _this26.plotly_click.emit(data);
              });

              _this26.updateWindowResizeHandler();
            }, function (err) {
              console.error('Error while plotting:', err);

              _this26.error.emit(err);
            });
          }
        }, {
          key: "createFigure",
          value: function createFigure() {
            var p = this.plotlyInstance;
            var figure = {
              data: p.data,
              layout: p.layout,
              frames: p._transitionData ? p._transitionData._frames : null
            };
            return figure;
          }
        }, {
          key: "updatePlot",
          value: function updatePlot() {
            var _this27 = this;

            if (!this.plotlyInstance) {
              var error = new Error("Plotly component wasn't initialized");
              this.error.emit(error);
              throw error;
            }

            var layout = Object.assign({
              datarevision: this.datarevision
            }, this.layout);
            return this.plotly.update(this.plotlyInstance, this.data, layout, this.config, this.frames).then(function () {
              var figure = _this27.createFigure();

              _this27.update.emit(figure);
            }, function (err) {
              console.error('Error while updating plot:', err);

              _this27.error.emit(err);
            });
          }
        }, {
          key: "updateWindowResizeHandler",
          value: function updateWindowResizeHandler() {
            var _this28 = this;

            if (this.useResizeHandler) {
              if (this.resizeHandler === undefined) {
                this.resizeHandler = function () {
                  return _this28.plotly.resize(_this28.plotlyInstance);
                };

                this.getWindow().addEventListener('resize', this.resizeHandler);
              }
            } else {
              if (typeof this.resizeHandler === 'function') {
                this.getWindow().removeEventListener('resize', this.resizeHandler);
                this.resizeHandler = undefined;
              }
            }
          }
        }, {
          key: "dataDifferTrackBy",
          value: function dataDifferTrackBy(_, item) {
            var obj = Object.assign({}, item, {
              uid: ''
            });
            return JSON.stringify(obj);
          }
        }]);

        return PlotComponent;
      }();

      PlotComponent.ɵfac = function PlotComponent_Factory(t) {
        return new (t || PlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_plotly_service__WEBPACK_IMPORTED_MODULE_1__["PlotlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]));
      };

      PlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlotComponent,
        selectors: [["plotly-plot"]],
        viewQuery: function PlotComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.plotEl = _t.first);
          }
        },
        inputs: {
          data: "data",
          layout: "layout",
          config: "config",
          frames: "frames",
          style: "style",
          divId: "divId",
          revision: "revision",
          className: "className",
          debug: "debug",
          useResizeHandler: "useResizeHandler"
        },
        outputs: {
          initialized: "initialized",
          update: "update",
          purge: "purge",
          error: "error",
          afterExport: "afterExport",
          afterPlot: "afterPlot",
          animated: "animated",
          animatingFrame: "animatingFrame",
          animationInterrupted: "animationInterrupted",
          autoSize: "autoSize",
          beforeExport: "beforeExport",
          buttonClicked: "buttonClicked",
          click: "click",
          plotly_click: "plotly_click",
          clickAnnotation: "clickAnnotation",
          deselect: "deselect",
          doubleClick: "doubleClick",
          framework: "framework",
          hover: "hover",
          legendClick: "legendClick",
          legendDoubleClick: "legendDoubleClick",
          relayout: "relayout",
          restyle: "restyle",
          redraw: "redraw",
          selected: "selected",
          selecting: "selecting",
          sliderChange: "sliderChange",
          sliderEnd: "sliderEnd",
          sliderStart: "sliderStart",
          transitioning: "transitioning",
          transitionInterrupted: "transitionInterrupted",
          unhover: "unhover",
          relayouting: "relayouting"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_plotly_service__WEBPACK_IMPORTED_MODULE_1__["PlotlyService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 3,
        consts: [[3, "className", "ngStyle"], ["plot", ""]],
        template: function PlotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.getClassName())("ngStyle", ctx.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.divId);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlotComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'plotly-plot',
            template: "<div #plot [attr.id]=\"divId\" [className]=\"getClassName()\" [ngStyle]=\"style\"></div>",
            providers: [_plotly_service__WEBPACK_IMPORTED_MODULE_1__["PlotlyService"]]
          }]
        }], function () {
          return [{
            type: _plotly_service__WEBPACK_IMPORTED_MODULE_1__["PlotlyService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
          }];
        }, {
          plotEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['plot', {
              "static": true
            }]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          frames: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          divId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          revision: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          useResizeHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          initialized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          purge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          afterExport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          afterPlot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          animated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          animatingFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          animationInterrupted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          autoSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          beforeExport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          buttonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          plotly_click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          clickAnnotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          deselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          doubleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          framework: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          hover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          legendClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          legendDoubleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          relayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          restyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          redraw: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selecting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sliderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sliderEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sliderStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          transitioning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          transitionInterrupted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          unhover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          relayouting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "qUyx":
    /*!************************************************!*\
      !*** ./src/app/speech-commands/src/dataset.ts ***!
      \************************************************/

    /*! exports provided: DATASET_SERIALIZATION_DESCRIPTOR, DATASET_SERIALIZATION_VERSION, BACKGROUND_NOISE_TAG, Dataset, serializeExample, deserializeExample, arrayBuffer2SerializedExamples, getValidWindows, spectrogram2IntensityCurve, getMaxIntensityFrameIndex */

    /***/
    function qUyx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DATASET_SERIALIZATION_DESCRIPTOR", function () {
        return DATASET_SERIALIZATION_DESCRIPTOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DATASET_SERIALIZATION_VERSION", function () {
        return DATASET_SERIALIZATION_VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKGROUND_NOISE_TAG", function () {
        return BACKGROUND_NOISE_TAG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dataset", function () {
        return Dataset;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "serializeExample", function () {
        return serializeExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deserializeExample", function () {
        return deserializeExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayBuffer2SerializedExamples", function () {
        return arrayBuffer2SerializedExamples;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getValidWindows", function () {
        return getValidWindows;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "spectrogram2IntensityCurve", function () {
        return spectrogram2IntensityCurve;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMaxIntensityFrameIndex", function () {
        return getMaxIntensityFrameIndex;
      });
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      "zhpf");
      /* harmony import */


      var _browser_fft_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./browser_fft_utils */
      "W0Lg");
      /* harmony import */


      var _generic_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./generic_utils */
      "Y8Gl");
      /* harmony import */


      var _training_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./training_utils */
      "WsXE");
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       * =============================================================================
       */
      // Descriptor for serialized dataset files: stands for:
      //   TensorFlow.js Speech-Commands Dataset.
      // DO NOT EVER CHANGE THIS!


      var DATASET_SERIALIZATION_DESCRIPTOR = 'TFJSSCDS'; // A version number for the serialization. Since this needs
      // to be encoded within a length-1 Uint8 array, it must be
      //   1. an positive integer.
      //   2. monotonically increasing over its change history.
      // Item 1 is checked by unit tests.

      var DATASET_SERIALIZATION_VERSION = 1;
      var BACKGROUND_NOISE_TAG = '_background_noise_';
      /**
       * A serializable, mutable set of speech/audio `Example`s;
       */

      var Dataset = /*#__PURE__*/function () {
        /**
         * Constructor of `Dataset`.
         *
         * If called with no arguments (i.e., `artifacts` == null), an empty dataset
         * will be constructed.
         *
         * Else, the dataset will be deserialized from `artifacts`.
         *
         * @param serialized Optional serialization artifacts to deserialize.
         */
        function Dataset(serialized) {
          _classCallCheck(this, Dataset);

          this.examples = {};
          this.label2Ids = {};

          if (serialized != null) {
            // Deserialize from the provided artifacts.
            var artifacts = arrayBuffer2SerializedExamples(serialized);
            var offset = 0;

            for (var _i6 = 0; _i6 < artifacts.manifest.length; ++_i6) {
              var spec = artifacts.manifest[_i6];
              var byteLen = spec.spectrogramNumFrames * spec.spectrogramFrameSize;

              if (spec.rawAudioNumSamples != null) {
                byteLen += spec.rawAudioNumSamples;
              }

              byteLen *= 4;
              this.addExample(deserializeExample({
                spec: spec,
                data: artifacts.data.slice(offset, offset + byteLen)
              }));
              offset += byteLen;
            }
          }
        }
        /**
         * Add an `Example` to the `Dataset`
         *
         * @param example A `Example`, with a label. The label must be a non-empty
         *   string.
         * @returns The UID for the added `Example`.
         */


        _createClass(Dataset, [{
          key: "addExample",
          value: function addExample(example) {
            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(example != null, function () {
              return 'Got null or undefined example';
            });

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(example.label != null && example.label.length > 0, function () {
              return "Expected label to be a non-empty string, " + "but got ".concat(JSON.stringify(example.label));
            });

            var uid = Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["getUID"])();
            this.examples[uid] = example;

            if (!(example.label in this.label2Ids)) {
              this.label2Ids[example.label] = [];
            }

            this.label2Ids[example.label].push(uid);
            return uid;
          }
          /**
           * Merge the incoming dataset into this dataset
           *
           * @param dataset The incoming dataset to be merged into this dataset.
           */

        }, {
          key: "merge",
          value: function merge(dataset) {
            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(dataset !== this, function () {
              return 'Cannot merge a dataset into itself';
            });

            var vocab = dataset.getVocabulary();

            var _iterator13 = _createForOfIteratorHelper(vocab),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var word = _step13.value;
                var examples = dataset.getExamples(word);

                var _iterator14 = _createForOfIteratorHelper(examples),
                    _step14;

                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    var example = _step14.value;
                    this.addExample(example.example);
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
          /**
           * Get a map from `Example` label to number of `Example`s with the label.
           *
           * @returns A map from label to number of example counts under that label.
           */

        }, {
          key: "getExampleCounts",
          value: function getExampleCounts() {
            var counts = {};

            for (var uid in this.examples) {
              var example = this.examples[uid];

              if (!(example.label in counts)) {
                counts[example.label] = 0;
              }

              counts[example.label]++;
            }

            return counts;
          }
          /**
           * Get all examples of a given label, with their UIDs.
           *
           * @param label The requested label.
           * @return All examples of the given `label`, along with their UIDs.
           *   The examples are sorted in the order in which they are added to the
           *   `Dataset`.
           * @throws Error if label is `null` or `undefined`.
           */

        }, {
          key: "getExamples",
          value: function getExamples(label) {
            var _this29 = this;

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(label != null, function () {
              return "Expected label to be a string, but got ".concat(JSON.stringify(label));
            });

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(label in this.label2Ids, function () {
              return "No example of label \"".concat(label, "\" exists in dataset");
            });

            var output = [];
            this.label2Ids[label].forEach(function (id) {
              output.push({
                uid: id,
                example: _this29.examples[id]
              });
            });
            return output;
          }
          /**
           * Get all examples and labels as tensors.
           *
           * - If `label` is provided and exists in the vocabulary of the `Dataset`,
           *   the spectrograms of all `Example`s under the `label` will be returned
           *   as a 4D `tf.Tensor` as `xs`. The shape of the `tf.Tensor` will be
           *     `[numExamples, numFrames, frameSize, 1]`
           *   where
           *     - `numExamples` is the number of `Example`s with the label
           *     - `numFrames` is the number of frames in each spectrogram
           *     - `frameSize` is the size of each spectrogram frame.
           *   No label Tensor will be returned.
           * - If `label` is not provided, all `Example`s will be returned as `xs`.
           *   In addition, `ys` will contain a one-hot encoded list of labels.
           *   - The shape of `xs` will be: `[numExamples, numFrames, frameSize, 1]`
           *   - The shape of `ys` will be: `[numExamples, vocabularySize]`.
           *
           * @returns If `config.getDataset` is `true`, returns two `tf.data.Dataset`
           *   objects, one for training and one for validation.
           *   Else, xs` and `ys` tensors. See description above.
           * @throws Error
           *   - if not all the involved spectrograms have matching `numFrames` and
           *     `frameSize`, or
           *   - if `label` is provided and is not present in the vocabulary of the
           *     `Dataset`, or
           *   - if the `Dataset` is currently empty.
           */

        }, {
          key: "getData",
          value: function getData(label, config) {
            var _this30 = this;

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(this.size() > 0, function () {
              return "Cannot get spectrograms as tensors because the dataset is empty";
            });

            var vocab = this.getVocabulary();

            if (label != null) {
              _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(vocab.indexOf(label) !== -1, function () {
                return "Label ".concat(label, " is not in the vocabulary ") + "(".concat(JSON.stringify(vocab), ")");
              });
            } else {
              // If all words are requested, there must be at least two words in the
              // vocabulary to make one-hot encoding possible.
              _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(vocab.length > 1, function () {
                return "One-hot encoding of labels requires the vocabulary to have " + "at least two words, but it has only ".concat(vocab.length, " word.");
              });
            }

            if (config == null) {
              config = {};
            } // Get the numFrames lengths of all the examples currently held by the
            // dataset.


            var sortedUniqueNumFrames = this.getSortedUniqueNumFrames();
            var numFrames;
            var hopFrames;

            if (sortedUniqueNumFrames.length === 1) {
              numFrames = config.numFrames == null ? sortedUniqueNumFrames[0] : config.numFrames;
              hopFrames = config.hopFrames == null ? 1 : config.hopFrames;
            } else {
              numFrames = config.numFrames;

              _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(numFrames != null && Number.isInteger(numFrames) && numFrames > 0, function () {
                return "There are ".concat(sortedUniqueNumFrames.length, " unique lengths among ") + "the ".concat(_this30.size(), " examples of this Dataset, hence numFrames ") + "is required. But it is not provided.";
              });

              _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(numFrames <= sortedUniqueNumFrames[0], function () {
                return "numFrames (".concat(numFrames, ") exceeds the minimum numFrames ") + "(".concat(sortedUniqueNumFrames[0], ") among the examples of ") + "the Dataset.";
              });

              hopFrames = config.hopFrames;

              _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(hopFrames != null && Number.isInteger(hopFrames) && hopFrames > 0, function () {
                return "There are ".concat(sortedUniqueNumFrames.length, " unique lengths among ") + "the ".concat(_this30.size(), " examples of this Dataset, hence hopFrames ") + "is required. But it is not provided.";
              });
            } // Normalization is performed by default.


            var toNormalize = config.normalize == null ? true : config.normalize;
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](function () {
              var xTensors = [];
              var xArrays = [];
              var labelIndices = [];
              var uniqueFrameSize;

              for (var _i7 = 0; _i7 < vocab.length; ++_i7) {
                var currentLabel = vocab[_i7];

                if (label != null && currentLabel !== label) {
                  continue;
                }

                var ids = _this30.label2Ids[currentLabel];

                var _iterator15 = _createForOfIteratorHelper(ids),
                    _step15;

                try {
                  var _loop2 = function _loop2() {
                    var id = _step15.value;
                    var example = _this30.examples[id];
                    var spectrogram = example.spectrogram;
                    var frameSize = spectrogram.frameSize;

                    if (uniqueFrameSize == null) {
                      uniqueFrameSize = frameSize;
                    } else {
                      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(frameSize === uniqueFrameSize, function () {
                        return "Mismatch in frameSize  " + "(".concat(frameSize, " vs ").concat(uniqueFrameSize, ")");
                      });
                    }

                    var snippetLength = spectrogram.data.length / frameSize;
                    var focusIndex = null;

                    if (currentLabel !== BACKGROUND_NOISE_TAG) {
                      focusIndex = spectrogram.keyFrameIndex == null ? getMaxIntensityFrameIndex(spectrogram).dataSync()[0] : spectrogram.keyFrameIndex;
                    } // TODO(cais): See if we can get rid of dataSync();


                    var snippet = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor3d"](spectrogram.data, [snippetLength, frameSize, 1]);

                    var windows = getValidWindows(snippetLength, focusIndex, numFrames, hopFrames);

                    var _iterator16 = _createForOfIteratorHelper(windows),
                        _step16;

                    try {
                      var _loop3 = function _loop3() {
                        var window = _step16.value;

                        var windowedSnippet = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](function () {
                          var output = snippet.slice([window[0], 0, 0], [window[1] - window[0], -1, -1]);
                          return toNormalize ? Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(output) : output;
                        });

                        if (config.getDataset) {
                          // TODO(cais): See if we can do away with dataSync();
                          // TODO(cais): Shuffling?
                          xArrays.push(windowedSnippet.dataSync());
                        } else {
                          xTensors.push(windowedSnippet);
                        }

                        if (label == null) {
                          labelIndices.push(_i7);
                        }
                      };

                      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                        _loop3();
                      }
                    } catch (err) {
                      _iterator16.e(err);
                    } finally {
                      _iterator16.f();
                    }

                    _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["dispose"](snippet); // For memory saving.

                  };

                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }

              if (config.augmentByMixingNoiseRatio != null) {
                _this30.augmentByMixingNoise(config.getDataset ? xArrays : xTensors, labelIndices, config.augmentByMixingNoiseRatio);
              }

              var shuffle = config.shuffle == null ? true : config.shuffle;

              if (config.getDataset) {
                var batchSize = config.datasetBatchSize == null ? 32 : config.datasetBatchSize; // Split the data into two splits: training and validation.

                var valSplit = config.datasetValidationSplit == null ? 0.15 : config.datasetValidationSplit;

                _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(valSplit > 0 && valSplit < 1, function () {
                  return "Invalid dataset validation split: ".concat(valSplit);
                });

                var zippedXandYArrays = xArrays.map(function (xArray, i) {
                  return [xArray, labelIndices[i]];
                });

                _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].shuffle(zippedXandYArrays); // Shuffle the data before splitting.


                xArrays = zippedXandYArrays.map(function (item) {
                  return item[0];
                });
                var yArrays = zippedXandYArrays.map(function (item) {
                  return item[1];
                });

                var _Object = Object(_training_utils__WEBPACK_IMPORTED_MODULE_3__["balancedTrainValSplitNumArrays"])(xArrays, yArrays, valSplit),
                    trainXs = _Object.trainXs,
                    trainYs = _Object.trainYs,
                    valXs = _Object.valXs,
                    valYs = _Object.valYs; // TODO(cais): The typing around Float32Array is not working properly
                // for tf.data currently. Tighten the types when the tf.data bug is
                // fixed.
                // tslint:disable:no-any


                var xTrain = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["data"].array(trainXs).map(function (x) {
                  return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor3d"](x, [numFrames, uniqueFrameSize, 1]);
                });

                var yTrain = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["data"].array(trainYs).map(function (y) {
                  return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["oneHot"]([y], vocab.length).squeeze([0]);
                }); // TODO(cais): See if we can tighten the typing.


                var trainDataset = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["data"].zip({
                  xs: xTrain,
                  ys: yTrain
                });

                if (shuffle) {
                  // Shuffle the dataset.
                  trainDataset = trainDataset.shuffle(xArrays.length);
                }

                trainDataset = trainDataset.batch(batchSize).prefetch(4);

                var xVal = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["data"].array(valXs).map(function (x) {
                  return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor3d"](x, [numFrames, uniqueFrameSize, 1]);
                });

                var yVal = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["data"].array(valYs).map(function (y) {
                  return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["oneHot"]([y], vocab.length).squeeze([0]);
                });

                var valDataset = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["data"].zip({
                  xs: xVal,
                  ys: yVal
                });

                valDataset = valDataset.batch(batchSize).prefetch(4); // tslint:enable:no-any
                // tslint:disable-next-line:no-any

                return [trainDataset, valDataset];
              } else {
                if (shuffle) {
                  // Shuffle the data.
                  var zipped = [];
                  xTensors.forEach(function (xTensor, i) {
                    zipped.push({
                      x: xTensor,
                      y: labelIndices[i]
                    });
                  });

                  _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].shuffle(zipped);

                  xTensors = zipped.map(function (item) {
                    return item.x;
                  });
                  labelIndices = zipped.map(function (item) {
                    return item.y;
                  });
                }

                var targets = label == null ? _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["oneHot"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor1d"](labelIndices, 'int32'), vocab.length).asType('float32') : undefined;
                return {
                  xs: _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["stack"](xTensors),
                  ys: targets
                };
              }
            });
          }
        }, {
          key: "augmentByMixingNoise",
          value: function augmentByMixingNoise(xs, labelIndices, ratio) {
            if (xs == null || xs.length === 0) {
              throw new Error("Cannot perform augmentation because data is null or empty");
            }

            var isTypedArray = xs[0] instanceof Float32Array;
            var vocab = this.getVocabulary();
            var noiseExampleIndices = [];
            var wordExampleIndices = [];

            for (var _i8 = 0; _i8 < labelIndices.length; ++_i8) {
              if (vocab[labelIndices[_i8]] === BACKGROUND_NOISE_TAG) {
                noiseExampleIndices.push(_i8);
              } else {
                wordExampleIndices.push(_i8);
              }
            }

            if (noiseExampleIndices.length === 0) {
              throw new Error("Cannot perform augmentation by mixing with noise when " + "there is no example with label ".concat(BACKGROUND_NOISE_TAG));
            }

            var mixedXTensors = [];
            var mixedLabelIndices = [];

            var _loop4 = function _loop4() {
              var index = _wordExampleIndices[_i9];
              var noiseIndex = // Randomly sample from the noises, with replacement.
              noiseExampleIndices[Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, noiseExampleIndices.length)];
              var signalTensor = isTypedArray ? _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor1d"](xs[index]) : xs[index];
              var noiseTensor = isTypedArray ? _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor1d"](xs[noiseIndex]) : xs[noiseIndex];

              var mixed = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](function () {
                return Object(_browser_fft_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(signalTensor.add(noiseTensor.mul(ratio)));
              });

              if (isTypedArray) {
                mixedXTensors.push(mixed.dataSync());
              } else {
                mixedXTensors.push(mixed);
              }

              mixedLabelIndices.push(labelIndices[index]);
            };

            for (var _i9 = 0, _wordExampleIndices = wordExampleIndices; _i9 < _wordExampleIndices.length; _i9++) {
              _loop4();
            }

            console.log("Data augmentation: mixing noise: added ".concat(mixedXTensors.length, " ") + "examples");
            mixedXTensors.forEach(function (tensor) {
              return xs.push(tensor);
            });
            labelIndices.push.apply(labelIndices, mixedLabelIndices);
          }
        }, {
          key: "getSortedUniqueNumFrames",
          value: function getSortedUniqueNumFrames() {
            var numFramesSet = new Set();
            var vocab = this.getVocabulary();

            for (var _i10 = 0; _i10 < vocab.length; ++_i10) {
              var label = vocab[_i10];
              var ids = this.label2Ids[label];

              var _iterator17 = _createForOfIteratorHelper(ids),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var id = _step17.value;
                  var spectrogram = this.examples[id].spectrogram;
                  var numFrames = spectrogram.data.length / spectrogram.frameSize;
                  numFramesSet.add(numFrames);
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
            }

            var uniqueNumFrames = _toConsumableArray(numFramesSet);

            uniqueNumFrames.sort();
            return uniqueNumFrames;
          }
          /**
           * Remove an example from the `Dataset`.
           *
           * @param uid The UID of the example to remove.
           * @throws Error if the UID doesn't exist in the `Dataset`.
           */

        }, {
          key: "removeExample",
          value: function removeExample(uid) {
            if (!(uid in this.examples)) {
              throw new Error("Nonexistent example UID: ".concat(uid));
            }

            var label = this.examples[uid].label;
            delete this.examples[uid];
            var index = this.label2Ids[label].indexOf(uid);
            this.label2Ids[label].splice(index, 1);

            if (this.label2Ids[label].length === 0) {
              delete this.label2Ids[label];
            }
          }
          /**
           * Set the key frame index of a given example.
           *
           * @param uid The UID of the example of which the `keyFrameIndex` is to be
           *   set.
           * @param keyFrameIndex The desired value of the `keyFrameIndex`. Must
           *   be >= 0, < the number of frames of the example, and an integer.
           * @throws Error If the UID and/or the `keyFrameIndex` value is invalid.
           */

        }, {
          key: "setExampleKeyFrameIndex",
          value: function setExampleKeyFrameIndex(uid, keyFrameIndex) {
            if (!(uid in this.examples)) {
              throw new Error("Nonexistent example UID: ".concat(uid));
            }

            var spectrogram = this.examples[uid].spectrogram;
            var numFrames = spectrogram.data.length / spectrogram.frameSize;

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(keyFrameIndex >= 0 && keyFrameIndex < numFrames && Number.isInteger(keyFrameIndex), function () {
              return "Invalid keyFrameIndex: ".concat(keyFrameIndex, ". ") + "Must be >= 0, < ".concat(numFrames, ", and an integer.");
            });

            spectrogram.keyFrameIndex = keyFrameIndex;
          }
          /**
           * Get the total number of `Example` currently held by the `Dataset`.
           *
           * @returns Total `Example` count.
           */

        }, {
          key: "size",
          value: function size() {
            return Object.keys(this.examples).length;
          }
          /**
           * Get the total duration of the `Example` currently held by `Dataset`,
           *
           * in milliseconds.
           *
           * @return Total duration in milliseconds.
           */

        }, {
          key: "durationMillis",
          value: function durationMillis() {
            var durMillis = 0;
            var DEFAULT_FRAME_DUR_MILLIS = 23.22;

            for (var key in this.examples) {
              var spectrogram = this.examples[key].spectrogram;
              var frameDurMillis = spectrogram.frameDurationMillis | DEFAULT_FRAME_DUR_MILLIS;
              durMillis += spectrogram.data.length / spectrogram.frameSize * frameDurMillis;
            }

            return durMillis;
          }
          /**
           * Query whether the `Dataset` is currently empty.
           *
           * I.e., holds zero examples.
           *
           * @returns Whether the `Dataset` is currently empty.
           */

        }, {
          key: "empty",
          value: function empty() {
            return this.size() === 0;
          }
          /**
           * Remove all `Example`s from the `Dataset`.
           */

        }, {
          key: "clear",
          value: function clear() {
            this.examples = {};
          }
          /**
           * Get the list of labels among all `Example`s the `Dataset` currently holds.
           *
           * @returns A sorted Array of labels, for the unique labels that belong to all
           *   `Example`s currently held by the `Dataset`.
           */

        }, {
          key: "getVocabulary",
          value: function getVocabulary() {
            var vocab = new Set();

            for (var uid in this.examples) {
              var example = this.examples[uid];
              vocab.add(example.label);
            }

            var sortedVocab = _toConsumableArray(vocab);

            sortedVocab.sort();
            return sortedVocab;
          }
          /**
           * Serialize the `Dataset`.
           *
           * The `Examples` are sorted in the following order:
           *   - First, the labels in the vocabulary are sorted.
           *   - Second, the `Example`s for every label are sorted by the order in
           *     which they are added to this `Dataset`.
           *
           * @param wordLabels Optional word label(s) to serialize. If specified, only
           *   the examples with labels matching the argument will be serialized. If
           *   any specified word label does not exist in the vocabulary of this
           *   dataset, an Error will be thrown.
           * @returns A `ArrayBuffer` object amenable to transmission and storage.
           */

        }, {
          key: "serialize",
          value: function serialize(wordLabels) {
            var vocab = this.getVocabulary();

            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(!this.empty(), function () {
              return "Cannot serialize empty Dataset";
            });

            if (wordLabels != null) {
              if (!Array.isArray(wordLabels)) {
                wordLabels = [wordLabels];
              }

              wordLabels.forEach(function (wordLabel) {
                if (vocab.indexOf(wordLabel) === -1) {
                  throw new Error("Word label \"".concat(wordLabel, "\" does not exist in the ") + "vocabulary of this dataset. The vocabulary is: " + "".concat(JSON.stringify(vocab), "."));
                }
              });
            }

            var manifest = [];
            var buffers = [];

            var _iterator18 = _createForOfIteratorHelper(vocab),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var label = _step18.value;

                if (wordLabels != null && wordLabels.indexOf(label) === -1) {
                  continue;
                }

                var ids = this.label2Ids[label];

                var _iterator19 = _createForOfIteratorHelper(ids),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var id = _step19.value;
                    var artifact = serializeExample(this.examples[id]);
                    manifest.push(artifact.spec);
                    buffers.push(artifact.data);
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }

            return serializedExamples2ArrayBuffer({
              manifest: manifest,
              data: Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["concatenateArrayBuffers"])(buffers)
            });
          }
        }]);

        return Dataset;
      }();
      /** Serialize an `Example`. */


      function serializeExample(example) {
        var hasRawAudio = example.rawAudio != null;
        var spec = {
          label: example.label,
          spectrogramNumFrames: example.spectrogram.data.length / example.spectrogram.frameSize,
          spectrogramFrameSize: example.spectrogram.frameSize
        };

        if (example.spectrogram.keyFrameIndex != null) {
          spec.spectrogramKeyFrameIndex = example.spectrogram.keyFrameIndex;
        }

        var data = example.spectrogram.data.buffer.slice(0);

        if (hasRawAudio) {
          spec.rawAudioNumSamples = example.rawAudio.data.length;
          spec.rawAudioSampleRateHz = example.rawAudio.sampleRateHz; // Account for the fact that the data are all float32.

          data = Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["concatenateArrayBuffers"])([data, example.rawAudio.data.buffer]);
        }

        return {
          spec: spec,
          data: data
        };
      }
      /** Deserialize an `Example`. */


      function deserializeExample(artifact) {
        var spectrogram = {
          frameSize: artifact.spec.spectrogramFrameSize,
          data: new Float32Array(artifact.data.slice(0, 4 * artifact.spec.spectrogramFrameSize * artifact.spec.spectrogramNumFrames))
        };

        if (artifact.spec.spectrogramKeyFrameIndex != null) {
          spectrogram.keyFrameIndex = artifact.spec.spectrogramKeyFrameIndex;
        }

        var ex = {
          label: artifact.spec.label,
          spectrogram: spectrogram
        };

        if (artifact.spec.rawAudioNumSamples != null) {
          ex.rawAudio = {
            sampleRateHz: artifact.spec.rawAudioSampleRateHz,
            data: new Float32Array(artifact.data.slice(4 * artifact.spec.spectrogramFrameSize * artifact.spec.spectrogramNumFrames))
          };
        }

        return ex;
      }
      /**
       * Encode intermediate serialization format as an ArrayBuffer.
       *
       * Format of the binary ArrayBuffer:
       *   1. An 8-byte descriptor (see above).
       *   2. A 4-byte version number as Uint32.
       *   3. A 4-byte number for the byte length of the JSON manifest.
       *   4. The encoded JSON manifest
       *   5. The binary data of the spectrograms, and raw audio (if any).
       *
       * @param serialized: Intermediate serialization format of a dataset.
       * @returns The binary conversion result as an ArrayBuffer.
       */


      function serializedExamples2ArrayBuffer(serialized) {
        var manifestBuffer = Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["string2ArrayBuffer"])(JSON.stringify(serialized.manifest));
        var descriptorBuffer = Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["string2ArrayBuffer"])(DATASET_SERIALIZATION_DESCRIPTOR);
        var version = new Uint32Array([DATASET_SERIALIZATION_VERSION]);
        var manifestLength = new Uint32Array([manifestBuffer.byteLength]);
        var headerBuffer = Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["concatenateArrayBuffers"])([descriptorBuffer, version.buffer, manifestLength.buffer]);
        return Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["concatenateArrayBuffers"])([headerBuffer, manifestBuffer, serialized.data]);
      }
      /** Decode an ArrayBuffer as intermediate serialization format. */


      function arrayBuffer2SerializedExamples(buffer) {
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(buffer != null, function () {
          return 'Received null or undefined buffer';
        }); // Check descriptor.


        var offset = 0;
        var descriptor = Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["arrayBuffer2String"])(buffer.slice(offset, DATASET_SERIALIZATION_DESCRIPTOR.length));

        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(descriptor === DATASET_SERIALIZATION_DESCRIPTOR, function () {
          return "Deserialization error: Invalid descriptor";
        });

        offset += DATASET_SERIALIZATION_DESCRIPTOR.length; // Skip the version part for now. It may be used in the future.

        offset += 4; // Extract the length of the encoded manifest JSON as a Uint32.

        var manifestLength = new Uint32Array(buffer, offset, 1);
        offset += 4;
        var manifestBeginByte = offset;
        offset = manifestBeginByte + manifestLength[0];
        var manifestBytes = buffer.slice(manifestBeginByte, offset);
        var manifestString = Object(_generic_utils__WEBPACK_IMPORTED_MODULE_2__["arrayBuffer2String"])(manifestBytes);
        var manifest = JSON.parse(manifestString);
        var data = buffer.slice(offset);
        return {
          manifest: manifest,
          data: data
        };
      }
      /**
       * Get valid windows in a long snippet.
       *
       * Each window is represented by an inclusive left index and an exclusive
       * right index.
       *
       * @param snippetLength Long of the entire snippet. Must be a positive
       *   integer.
       * @param focusIndex Optional. If `null` or `undefined`, an array of
       *   evenly-spaced windows will be generated. The array of windows will
       *   start from the first possible location (i.e., [0, windowLength]).
       *   If not `null` or `undefined`, must be an integer >= 0 and < snippetLength.
       * @param windowLength Length of each window. Must be a positive integer and
       *   <= snippetLength.
       * @param windowHop Hops between successsive windows. Must be a positive
       *   integer.
       * @returns An array of [beginIndex, endIndex] pairs.
       */


      function getValidWindows(snippetLength, focusIndex, windowLength, windowHop) {
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(Number.isInteger(snippetLength) && snippetLength > 0, function () {
          return "snippetLength must be a positive integer, but got ".concat(snippetLength);
        });

        if (focusIndex != null) {
          _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(Number.isInteger(focusIndex) && focusIndex >= 0, function () {
            return "focusIndex must be a non-negative integer, but got ".concat(focusIndex);
          });
        }

        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(Number.isInteger(windowLength) && windowLength > 0, function () {
          return "windowLength must be a positive integer, but got ".concat(windowLength);
        });

        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(Number.isInteger(windowHop) && windowHop > 0, function () {
          return "windowHop must be a positive integer, but got ".concat(windowHop);
        });

        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(windowLength <= snippetLength, function () {
          return "windowLength (".concat(windowLength, ") exceeds snippetLength ") + "(".concat(snippetLength, ")");
        });

        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["util"].assert(focusIndex < snippetLength, function () {
          return "focusIndex (".concat(focusIndex, ") equals or exceeds snippetLength ") + "(".concat(snippetLength, ")");
        });

        if (windowLength === snippetLength) {
          return [[0, snippetLength]];
        }

        var windows = [];

        if (focusIndex == null) {
          // Deal with the special case of no focus frame:
          // Output an array of evenly-spaced windows, starting from
          // the first possible location.
          var begin = 0;

          while (begin + windowLength <= snippetLength) {
            windows.push([begin, begin + windowLength]);
            begin += windowHop;
          }

          return windows;
        }

        var leftHalf = Math.floor(windowLength / 2);
        var left = focusIndex - leftHalf;

        if (left < 0) {
          left = 0;
        } else if (left + windowLength > snippetLength) {
          left = snippetLength - windowLength;
        }

        while (true) {
          if (left - windowHop < 0 || focusIndex >= left - windowHop + windowLength) {
            break;
          }

          left -= windowHop;
        }

        while (left + windowLength <= snippetLength) {
          if (focusIndex < left) {
            break;
          }

          windows.push([left, left + windowLength]);
          left += windowHop;
        }

        return windows;
      }
      /**
       * Calculate an intensity profile from a spectrogram.
       *
       * The intensity at each time frame is caclulated by simply averaging all the
       * spectral values that belong to that time frame.
       *
       * @param spectrogram The input spectrogram.
       * @returns The temporal profile of the intensity as a 1D tf.Tensor of shape
       *   `[numFrames]`.
       */


      function spectrogram2IntensityCurve(spectrogram) {
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](function () {
          var numFrames = spectrogram.data.length / spectrogram.frameSize;

          var x = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor2d"](spectrogram.data, [numFrames, spectrogram.frameSize]);

          return x.mean(-1);
        });
      }
      /**
       * Get the index to the maximum intensity frame.
       *
       * The intensity of each time frame is calculated as the arithmetic mean of
       * all the spectral values belonging to that time frame.
       *
       * @param spectrogram The input spectrogram.
       * @returns The index to the time frame containing the maximum intensity.
       */


      function getMaxIntensityFrameIndex(spectrogram) {
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](function () {
          return spectrogram2IntensityCurve(spectrogram).argMax();
        });
      }
      /***/

    },

    /***/
    "ra9l":
    /*!************************************!*\
      !*** ./src/app/d3/d3.component.ts ***!
      \************************************/

    /*! exports provided: D3Component */

    /***/
    function ra9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D3Component", function () {
        return D3Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! d3-selection */
      "/TIM");
      /* harmony import */


      var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! d3-scale */
      "ziQ1");
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! d3-shape */
      "8d86");
      /* harmony import */


      var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! d3-axis */
      "RhHs");
      /* harmony import */


      var d3_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! d3-array */
      "vBe5");
      /* harmony import */


      var src_app_d3_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/d3/data */
      "bEpL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _shared_plot_plot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/plot/plot.component */
      "pV0i");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/slider */
      "+la4");

      var _c0 = ["svg"];

      var D3Component = /*#__PURE__*/function () {
        function D3Component(el) {
          var _this31 = this;

          _classCallCheck(this, D3Component);

          this.el = el;
          this.title = 'Stacked Bar Chart';
          this.SAMPLE_DATA = src_app_d3_data__WEBPACK_IMPORTED_MODULE_6__["SAMPLE_DATA"];
          this.width = 400;
          this.height = 400;
          this.val2 = 50;
          this.trainLossValues = [];
          this.valLossValues = [];
          this.graph = {
            data: [{
              x: [1, 2, 3],
              y: [2, 5, 3],
              type: 'bar'
            }],
            layout: {
              autosize: true,
              title: 'A Fancy Plot'
            }
          };
          this.a = 10;
          this.b = 12;
          this.c = 15;
          this.d = 9;
          this.interval = setInterval(function () {
            _this31.a = _this31.rand() * 10 - _this31.rand();
            _this31.b = _this31.rand() * 14 - _this31.rand();
            _this31.c = _this31.rand() * 18 - _this31.rand();
            _this31.d = _this31.rand() * 11 - _this31.rand();

            _this31.trace1.y.push(_this31.a);

            _this31.trace1.y.push(_this31.b);

            _this31.trace1.y.push(_this31.c);

            _this31.trace1.y.push(_this31.d);

            _this31.trace2.y.push(_this31.a * 3.14);

            _this31.trace2.y.push(_this31.a * 3.14);

            _this31.trace2.y.push(_this31.a * 3.14);

            _this31.trace2.y.push(_this31.a * 3.14);

            console.log(_this31.a);
            _this31.data = [_this31.trace1, _this31.trace2, _this31.trace3];
          }, 1000);
          this.trace1 = {
            y: [this.a, this.b, this.c, this.d],
            mode: 'lines',
            line: {
              color: '#80CAF6'
            },
            type: 'line'
          };
          this.trace2 = {
            y: [this.a, this.b, this.c, this.d],
            mode: 'lines',
            line: {
              color: 'red'
            },
            type: 'scatter'
          };
          this.trace3 = {
            x: [1, 2, 3, 1300],
            mode: 'lines+markers',
            type: 'scatter'
          };
          this.data = [this.trace1, this.trace2, this.trace3];
          console.log(this.graph.layout.title);
        }

        _createClass(D3Component, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log(this.SAMPLE_DATA);
            this.initMargins();
            this.initSvg();
            this.drawChart(this.SAMPLE_DATA);
          }
        }, {
          key: "initMargins",
          value: function initMargins() {
            this.margin = {
              top: 20,
              right: 20,
              bottom: 30,
              left: 40
            };
          }
        }, {
          key: "initSvg",
          value: function initSvg() {
            var element = this.svgEl.nativeElement; //d3.select(element).select('svg#svg svg').remove();

            this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"](element).append('svg'); //this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
            //this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;

            this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
            this.x = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]().rangeRound([0, this.width]).paddingInner(0.05).align(0.1);
            this.y = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().rangeRound([this.height, 0]);
            this.z = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]().range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);
          }
        }, {
          key: "drawChart",
          value: function drawChart(data) {
            var _this32 = this;

            var keys = Object.getOwnPropertyNames(data[0]).slice(1);
            data = data.map(function (v) {
              v.total = keys.map(function (key) {
                return v[key];
              }).reduce(function (a, b) {
                return a + b;
              }, 0);
              return v;
            });
            data.sort(function (a, b) {
              return b.total - a.total;
            });
            this.x.domain(data.map(function (d) {
              return d.State;
            }));
            this.y.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_5__["max"](data, function (d) {
              return d.total;
            })]).nice();
            this.z.domain(keys);
            this.g.append('g').selectAll('g').data(d3_shape__WEBPACK_IMPORTED_MODULE_3__["stack"]().keys(keys)(data)).enter().append('g').attr('fill', function (d) {
              return _this32.z(d.key);
            }).selectAll('rect').data(function (d) {
              return d;
            }).enter().append('rect').attr('x', function (d) {
              return _this32.x(d.data.State);
            }).attr('y', function (d) {
              return _this32.y(d[1]);
            }).attr('height', function (d) {
              return _this32.y(d[0]) - _this32.y(d[1]);
            }).attr('width', this.x.bandwidth());
            this.g.append('g').attr('class', 'axis').attr('transform', 'translate(0,' + this.height + ')').call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](this.x));
            this.g.append('g').attr('class', 'axis').call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](this.y).ticks(null, 's')).append('text').attr('font-size', '18px').attr('x', 2).attr('y', this.y(this.y.ticks().pop()) + 0.5).attr('dy', '0.6em').attr('fill', '#757272').attr('font-weight', 'bold').attr('text-anchor', 'start').text('Population');
            var legend = this.g.append('g').attr('font-family', 'sans-serif').attr('font-size', '10px').attr('text-anchor', 'end').attr('fill', '#000').selectAll('g').data(keys.slice().reverse()).enter().append('g').attr('transform', function (d, i) {
              return 'translate(20,' + i * 25 + ')';
            });
            legend.append('rect').attr('x', this.width + 19).attr('width', 19).attr('height', 19).attr('fill', '#000').attr('font-size', '10px').attr('fill', this.z);
            legend.append('text').attr('x', this.width + 10).attr('y', 9.5).attr('dy', '0.32em').attr('font-size', '10px').text(function (d) {
              return d;
            });
          } //  t = setInterval(() => {
          //    console.log(this.a)
          //  }, 4000);))
          //}

        }, {
          key: "rand",
          value: function rand() {
            return Math.random();
          }
        }]);

        return D3Component;
      }();

      D3Component.ɵfac = function D3Component_Factory(t) {
        return new (t || D3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      D3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: D3Component,
        selectors: [["app-d3"]],
        viewQuery: function D3Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svgEl = _t.first);
          }
        },
        decls: 13,
        vars: 7,
        consts: [["fxLayout", "row", "fxLayoutAlign", "space-between"], ["fxFlex", "50"], ["id", "svg", 2, "height", "100%", "width", "100%"], ["svg", ""], ["fxFlex", "50", "fxLayout", "column"], [3, "data", "layout"], ["type", "number", "pInputText", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "data"]],
        template: function D3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "svg", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "plotly-plot", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function D3Component_Template_input_ngModelChange_10_listener($event) {
              return ctx.graph.data[0].y[0] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-slider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function D3Component_Template_p_slider_ngModelChange_11_listener($event) {
              return ctx.graph.data[0].y[0] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "plotly-plot", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.graph.data)("layout", ctx.graph.layout);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", ctx.graph.data[0].y[0], "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.graph.data[0].y[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.graph.data[0].y[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _shared_plot_plot_component__WEBPACK_IMPORTED_MODULE_8__["PlotComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], primeng_slider__WEBPACK_IMPORTED_MODULE_11__["Slider"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZDMvZDMuY29tcG9uZW50LnNjc3MifQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-d3',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            templateUrl: './d3.component.html',
            styleUrls: ['./d3.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          svgEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["svg", {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "smhn":
    /*!********************************************************!*\
      !*** ./src/app/speech-commands/speech-ai.component.ts ***!
      \********************************************************/

    /*! exports provided: SpeechCommandComponent */

    /***/
    function smhn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechCommandComponent", function () {
        return SpeechCommandComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      "zhpf");
      /* harmony import */


      var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./src */
      "gFaz");
      /* harmony import */


      var _dataset_vis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dataset-vis.js */
      "38NV");
      /* harmony import */


      var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular2-notifications */
      "Lm38");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var angular2_draggable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular2-draggable */
      "DIQL");
      /* harmony import */


      var _shared_plot_plot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/plot/plot.component */
      "pV0i");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      var _c0 = ["downloadAsFileButton"];
      var _c1 = ["startTransferLearnButton"];
      var _c2 = ["collectButtonsDiv"];
      var _c3 = ["includeTimeDomainWaveformCheckbox"];
      var _c4 = ["datasetFileInput"];
      var _c5 = ["durationMultiplierSelect"];
      var _c6 = ["savedTransferModelsSelect"];
      var _c7 = ["predictionCanvas"];

      function SpeechCommandComponent__svg_svg_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mask", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "g", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "linearGradient", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "stop", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "stop", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "stop", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "stop", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "stop", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "rect", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SpeechCommandComponent_plotly_plot_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "plotly-plot", 44);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r4.roc.data)("layout", ctx_r4.roc.layout);
        }
      }

      function SpeechCommandComponent_plotly_plot_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "plotly-plot", 45);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r5.precision.estimates)("layout", ctx_r5.precision.layout);
        }
      }

      function SpeechCommandComponent_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 46);
        }
      }

      function SpeechCommandComponent_div_57_div_52_plotly_plot_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "plotly-plot", 45);
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r20.graphTrainLoss.trainLossValuesCollection)("layout", ctx_r20.graphTrainLoss.layout);
        }
      }

      function SpeechCommandComponent_div_57_div_52_plotly_plot_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "plotly-plot", 78);
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r21.graphAccuracy.accuracyValuesCollection)("layout", ctx_r21.graphAccuracy.layout);
        }
      }

      function SpeechCommandComponent_div_57_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpeechCommandComponent_div_57_div_52_plotly_plot_1_Template, 1, 2, "plotly-plot", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpeechCommandComponent_div_57_div_52_plotly_plot_2_Template, 1, 2, "plotly-plot", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.graphTrainLoss);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.graphAccuracy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx_r19.evalResultsSpan);
        }
      }

      var _c8 = function _c8(a0) {
        return {
          "allowed": a0
        };
      };

      function SpeechCommandComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Configure New Speech Commands ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 50, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_div_57_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            ctx_r22.startTransferLearn();
            return ctx_r22.showCharts = !ctx_r22.showCharts;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Start transfer learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_div_57_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.saveTransferModel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Save model");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_div_57_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.downloadAsFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u2193 Download dataset as file");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_div_57_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.evalModelOnDataset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_div_57_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.configureCommands = !ctx_r27.configureCommands;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mask", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "g", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "linearGradient", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "stop", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "stop", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "stop", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "stop", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "stop", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "rect", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 57, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpeechCommandComponent_div_57_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r28.transferModelName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 59, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpeechCommandComponent_div_57_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r29.learnWords = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 61, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Duration x1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Duration x2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 64, 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 66, 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Include audio waveform");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_div_57_Template_button_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.enterLearnWords();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 69, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 71, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_div_57_Template_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r31.uploadFiles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u2191 Upload dataset");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SpeechCommandComponent_div_57_div_52_Template, 6, 3, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx_r9.startTransferLearnButtonTextContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx_r9.saveTransferModelButtonTextContent)("disabled", ctx_r9.isSaveTransferModelBtnDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c8, ctx_r9.canSaveModel));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.isDownloadAsFileBtnDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx_r9.evalModelOnDatasetButtonTextContent)("disabled", ctx_r9.isEvalModelOnDatasetBtnDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.transferModelName)("disabled", ctx_r9.isTransferModelNameInputDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.learnWords)("disabled", ctx_r9.isLearnWordsInputDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.isDurationMultiplierSelectDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx_r9.enterLearnWordsTextContent)("disabled", ctx_r9.isEnterLearnWordsBtnDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.isDatasetFileInputDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx_r9.uploadFilesButtonTextContent)("disabled", ctx_r9.isUploadFilesBtnDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.showCharts);
        }
      }

      var SpeechCommandComponent = /*#__PURE__*/function () {
        function SpeechCommandComponent(renderer, _notifications) {
          _classCallCheck(this, SpeechCommandComponent);

          this.renderer = renderer;
          this._notifications = _notifications;
          this.collectWordButtons = {};
          this.learnWords = "_background_noise_,red,green";
          this.epochsInput = 100;
          this.fineTuningEpochsInput = 0;
          this.probaThresholdInput = .75;
          this.enterLearnWordsTextContent = "Prepare collection and record commands";
          this.loadTransferModelButtonTextContent = "Load";
          this.saveTransferModelButtonTextContent = "Save model";
          this.deleteTransferModelButtonTextContent = "Delete";
          this.evalModelOnDatasetButtonTextContent = "Evaluate model on dataset";
          this.uploadFilesButtonTextContent = "↑ Upload dataset";
          this.startTransferLearnButtonTextContent = "Start transfer learning";
          this.evalResultsSpan = "";
          this.epochs = this.epochsInput;
          this.fineTuningEpochs = this.fineTuningEpochsInput;
          this.trainLossValues = [];
          this.valLossValues = [];
          this.trainAccValues = [];
          this.valAccValues = [];
          this.draggable = true;
          this.useHandle = false;
          this.zIndex = 120000;
          this.preventDefaultEvent = false;
          this.trackPosition = true;
          this.isDeleteTransferModelBtnDisabled = true;
          this.isSaveTransferModelBtnDisabled = true;
          this.isEvalModelOnDatasetBtnDisabled = true;
          this.isDownloadAsFileBtnDisabled = true;
          this.XFER_MODEL_NAME = 'xfer-model'; // Minimum required number of examples per class for transfer learning.

          this.MIN_EXAMPLES_PER_CLASS = 8;
          this.BACKGROUND_NOISE_TAG = _src__WEBPACK_IMPORTED_MODULE_3__["BACKGROUND_NOISE_TAG"]; //Check if broser is private, Speech commands will not work in private mode

          function retry(isDone, next) {
            var current_trial = 0,
                max_retry = 50,
                interval = 10,
                is_timeout = false;
            var id = window.setInterval(function () {
              if (isDone()) {
                window.clearInterval(id);
                next(is_timeout);
              }

              if (current_trial++ > max_retry) {
                window.clearInterval(id);
                is_timeout = true;
                next(is_timeout);
              }
            }, 10);
          }

          function isIE10OrLater(user_agent) {
            var ua = user_agent.toLowerCase();

            if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
              return false;
            }

            var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);

            if (match && parseInt(match[1], 10) >= 10) {
              return true;
            }

            return false;
          }

          function detectPrivateMode(callback) {
            var is_private;

            if (window.webkitRequestFileSystem) {
              window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
                is_private = false;
              }, function (e) {
                console.log(e);
                is_private = true;
              });
            } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
              var db;

              try {
                db = window.indexedDB.open('test');
              } catch (e) {
                is_private = true;
              }

              if (typeof is_private === 'undefined') {
                retry(function isDone() {
                  return db.readyState === 'done' ? true : false;
                }, function next(is_timeout) {
                  if (!is_timeout) {
                    is_private = db.result ? false : true;
                  }
                });
              }
            } else if (isIE10OrLater(window.navigator.userAgent)) {
              is_private = false;

              try {
                if (!window.indexedDB) {
                  is_private = true;
                }
              } catch (e) {
                is_private = true;
              }
            } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
              try {
                window.localStorage.setItem('test', 1);
              } catch (e) {
                is_private = true;
              }

              if (typeof is_private === 'undefined') {
                is_private = false;
                window.localStorage.removeItem('test');
              }
            }

            retry(function isDone() {
              return typeof is_private !== 'undefined' ? true : false;
            }, function next(is_timeout) {
              callback(is_private);
            });
          }

          detectPrivateMode(function (is_private) {
            var msg = document.getElementById('result').innerHTML = typeof is_private === 'undefined' ? 'cannot detect' : is_private ? '<div style="background: #fff; border-radius:5px; padding:5px; margin: 0 5px; font-size:10px;"><span style="margin-top:3px;">👻</span> Private browser detected. Speech commands is unable to load preloaded dataset in a private window. </span>' : '</span>';
          });
        }

        _createClass(SpeechCommandComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              var _this33 = this;

              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      console.log('loading');
                      this.logToStatusDisplay('Creating recognizer...');
                      this.recognizer = _src__WEBPACK_IMPORTED_MODULE_3__["create"]('BROWSER_FFT');
                      _context40.next = 5;
                      return this.populateSavedTransferModelsSelect();

                    case 5:
                      console.log('Sucessfully loaded model', this.populateSavedTransferModelsSelect());

                      if (this.savedTransferModelsSelect.nativeElement.length > 0) {
                        this.preTrained = false;
                      } // Make sure the tf.Model is loaded through HTTP. If this is not
                      // called here, the tf.Model will be loaded the first time
                      // `listen()` is called.


                      this.recognizer.ensureModelLoaded().then(function () {
                        _this33.isStartBtnDisabled = false; //this.startButton.disabled = false;

                        _this33.isStopBtnDisabled = true; //this.stopButton.disabled = true;

                        _this33.isEnterLearnWordsBtnDisabled = false; //this.enterLearnWordsButton.disabled = false;

                        _this33.isLoadTransferModelBtnDisabled = false; //this.loadTransferModelButton.disabled = false;

                        _this33.isDeleteTransferModelBtnDisabled = false; //this.deleteTransferModelButton.disabled = false;

                        _this33.transferModelName = "model-".concat(_this33.getDateString());

                        _this33.logToStatusDisplay('Model loaded.');

                        var params = _this33.recognizer.params();

                        _this33.logToStatusDisplay("sampleRateHz: ".concat(params.sampleRateHz));

                        _this33.logToStatusDisplay("fftSize: ".concat(params.fftSize));

                        _this33.logToStatusDisplay("spectrogramDurationMillis: " + "".concat(params.spectrogramDurationMillis.toFixed(2)));

                        _this33.logToStatusDisplay("tf.Model input shape: " + "".concat(JSON.stringify(_this33.recognizer.modelInputShape())));

                        if (_this33.savedTransferModelsSelect.nativeElement.length === 0) {
                          _this33.isLoadTransferModelBtnDisabled = true;
                          _this33.isDeleteTransferModelBtnDisabled = true;
                        }
                      })["catch"](function (err) {
                        _this33.logToStatusDisplay('Failed to load model for recognizer: ' + err.message);
                      });

                    case 8:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }, {
          key: "populateSavedTransferModelsSelect",
          value: function populateSavedTransferModelsSelect() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              var savedModelKeys, _iterator20, _step20, key, option;

              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return _src__WEBPACK_IMPORTED_MODULE_3__["listSavedTransferModels"]();

                    case 2:
                      savedModelKeys = _context41.sent;

                      while (this.savedTransferModelsSelect.nativeElement.firstChild) {
                        this.savedTransferModelsSelect.nativeElement.removeChild(this.savedTransferModelsSelect.nativeElement.firstChild);
                      }

                      if (savedModelKeys.length > 0) {
                        _iterator20 = _createForOfIteratorHelper(savedModelKeys);

                        try {
                          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                            key = _step20.value;
                            option = document.createElement('option');
                            option.textContent = key;
                            option.id = key;
                            this.savedTransferModelsSelect.nativeElement.appendChild(option);
                          }
                        } catch (err) {
                          _iterator20.e(err);
                        } finally {
                          _iterator20.f();
                        }

                        this.isLoadTransferModelBtnDisabled = false;
                      }

                    case 5:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }, {
          key: "saveTransferModel",
          value: function saveTransferModel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
                      return this.transferRecognizer.save();

                    case 2:
                      _context42.next = 4;
                      return this.populateSavedTransferModelsSelect();

                    case 4:
                      this.saveTransferModelButtonTextContent = 'Model saved!';
                      this.isSaveTransferModelBtnDisabled = true;

                    case 6:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "loadTransferModel",
          value: function loadTransferModel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              var transferModelName;
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      transferModelName = this.savedTransferModelsSelect.nativeElement.value;
                      _context43.next = 3;
                      return this.recognizer.ensureModelLoaded();

                    case 3:
                      this.transferRecognizer = this.recognizer.createTransfer(transferModelName);
                      _context43.next = 6;
                      return this.transferRecognizer.load();

                    case 6:
                      this.transferModelName = transferModelName;
                      this.isTransferModelNameInputDisabled = true; //this.transferModelNameInput.disabled = true;

                      this.learnWords = this.transferRecognizer.wordLabels().join(',');
                      this.isLearnWordsInputDisabled = true; //this.learnWordsInput.disabled = true;

                      this.isDurationMultiplierSelectDisabled = true; //this.durationMultiplierSelect.disabled = true;

                      this.isEnterLearnWordsBtnDisabled = true; //this.enterLearnWordsButton.disabled = true;

                      this.isSaveTransferModelBtnDisabled = true; //this.saveTransferModelButton.disabled = true;

                      this.isLoadTransferModelBtnDisabled = true; //this.loadTransferModelButton.disabled = true;

                      this.loadTransferModelButtonTextContent = 'Model loaded!';

                    case 15:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "deleteTransferModel",
          value: function deleteTransferModel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              var transferModelName;
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      transferModelName = this.savedTransferModelsSelect.nativeElement.value;
                      _context44.next = 3;
                      return this.recognizer.ensureModelLoaded();

                    case 3:
                      this.transferRecognizer = this.recognizer.createTransfer(transferModelName);
                      _context44.next = 6;
                      return _src__WEBPACK_IMPORTED_MODULE_3__["deleteSavedTransferModel"](transferModelName);

                    case 6:
                      this.deleteTransferModelButtonTextContent = "Deleted \"".concat(transferModelName, "\"");
                      _context44.next = 9;
                      return this.populateSavedTransferModelsSelect();

                    case 9:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "loadDatasetInTransferRecognizer",
          value: function loadDatasetInTransferRecognizer(serialized) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
              var modelName, exampleCounts, modelNumFrames, durationMultipliers, word, examples, _iterator21, _step21, example, spectrogram;

              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      modelName = this.transferModelName;

                      if (!(modelName == null || modelName.length === 0)) {
                        _context45.next = 3;
                        break;
                      }

                      throw new Error('Need model name!');

                    case 3:
                      if (this.transferRecognizer == null) {
                        this.transferRecognizer = this.recognizer.createTransfer(modelName);
                      }

                      this.transferRecognizer.loadExamples(serialized);
                      exampleCounts = this.transferRecognizer.countExamples();
                      this.transferWords = [];
                      modelNumFrames = this.transferRecognizer.modelInputShape()[1];
                      durationMultipliers = [];

                      for (word in exampleCounts) {
                        this.transferWords.push(word);
                        examples = this.transferRecognizer.getExamples(word);
                        _iterator21 = _createForOfIteratorHelper(examples);

                        try {
                          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                            example = _step21.value;
                            spectrogram = example.example.spectrogram; // Ignore _background_noise_ examples when determining the duration
                            // multiplier of the dataset.

                            if (word !== this.BACKGROUND_NOISE_TAG) {
                              durationMultipliers.push(Math.round(spectrogram.data.length / spectrogram.frameSize / modelNumFrames));
                            }
                          }
                        } catch (err) {
                          _iterator21.e(err);
                        } finally {
                          _iterator21.f();
                        }
                      }

                      this.transferWords.sort();
                      this.learnWords = this.transferWords.join(','); // Determine the transferDurationMultiplier value from the dataset.

                      this.transferDurationMultiplier = durationMultipliers.length > 0 ? Math.max.apply(Math, durationMultipliers) : 1;
                      console.log("Deteremined transferDurationMultiplier from uploaded " + "dataset: ".concat(this.transferDurationMultiplier));
                      this.createWordDivs(this.transferWords);
                      this.datasetViz.redrawAll();

                    case 16:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this);
            }));
          }
        }, {
          key: "startTransferLearn",
          value: function startTransferLearn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var _this34 = this;

              var INITIAL_PHASE, FINE_TUNING_PHASE, augmentByMixingNoiseRatioCheckbox, augmentByMixingNoiseRatio, epochs, fineTuningEpochs, _i11, _arr2, phase, phaseSuffix, lineWidth;

              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      this.isStartTransferLearnBtnDisabled = true; //this.startTransferLearnButton.disabled = true;

                      this.isStartBtnDisabled = true;
                      INITIAL_PHASE = 'initial';
                      FINE_TUNING_PHASE = 'fineTuningPhase';
                      this.startTransferLearnButtonTextContent = 'Transfer learning starting...';
                      _context48.next = 7;
                      return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["nextFrame"]();

                    case 7:
                      this.epochs = this.epochsInput;
                      this.fineTuningEpochs = this.fineTuningEpochsInput;
                      this.disableAllCollectWordButtons();
                      augmentByMixingNoiseRatioCheckbox = document.getElementById('augment-by-mixing-noise');

                      //.checked ? 0.5 : null;
                      if (augmentByMixingNoiseRatioCheckbox.checked) {
                        augmentByMixingNoiseRatio = .5;
                      } else {
                        augmentByMixingNoiseRatio = null;
                      }

                      console.log("augmentByMixingNoiseRatio = ".concat(augmentByMixingNoiseRatio));
                      epochs = this.epochs;
                      fineTuningEpochs = this.fineTuningEpochs;

                      for (_i11 = 0, _arr2 = [INITIAL_PHASE, FINE_TUNING_PHASE]; _i11 < _arr2.length; _i11++) {
                        phase = _arr2[_i11];
                        phaseSuffix = phase === FINE_TUNING_PHASE ? ' (FT)' : '';
                        lineWidth = phase === FINE_TUNING_PHASE ? 2 : 1;
                        this.trainLossValues[phase] = {
                          x: [],
                          y: [],
                          name: 'train' + phaseSuffix,
                          mode: 'lines+markers',
                          line: {
                            width: lineWidth
                          }
                        };
                        this.valLossValues[phase] = {
                          x: [],
                          y: [],
                          name: 'val' + phaseSuffix,
                          mode: 'lines+markers',
                          line: {
                            width: lineWidth
                          }
                        };
                        this.trainAccValues[phase] = {
                          x: [],
                          y: [],
                          name: 'train' + phaseSuffix,
                          mode: 'lines+markers',
                          line: {
                            width: lineWidth
                          }
                        };
                        this.valAccValues[phase] = {
                          x: [],
                          y: [],
                          name: 'val' + phaseSuffix,
                          mode: 'lines+markers',
                          line: {
                            width: lineWidth
                          }
                        };
                      }

                      _context48.next = 18;
                      return this.transferRecognizer.train({
                        epochs: epochs,
                        validationSplit: 0.25,
                        augmentByMixingNoiseRatio: augmentByMixingNoiseRatio,
                        callback: {
                          onEpochEnd: function onEpochEnd(epoch, logs, displayEpoch) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this34, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
                              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                                while (1) {
                                  switch (_context46.prev = _context46.next) {
                                    case 0:
                                      this.plotLossAndAccuracy(epoch, logs.loss, logs.acc, logs.val_loss, logs.val_acc, INITIAL_PHASE, displayEpoch);

                                    case 1:
                                    case "end":
                                      return _context46.stop();
                                  }
                                }
                              }, _callee46, this);
                            }));
                          }
                        },
                        fineTuningEpochs: fineTuningEpochs,
                        fineTuningCallback: {
                          onEpochEnd: function onEpochEnd(epoch, logs, displayEpoch) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this34, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
                              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                                while (1) {
                                  switch (_context47.prev = _context47.next) {
                                    case 0:
                                      this.plotLossAndAccuracy(epoch, logs.loss, logs.acc, logs.val_loss, logs.val_acc, FINE_TUNING_PHASE, displayEpoch);

                                    case 1:
                                    case "end":
                                      return _context47.stop();
                                  }
                                }
                              }, _callee47, this);
                            }));
                          }
                        }
                      });

                    case 18:
                      this.isSaveTransferModelBtnDisabled = false; //this.saveTransferModelButton.disabled = false;

                      this.transferModelName = this.transferRecognizer.name;
                      this.isTransferModelNameInputDisabled = true; //this.transferModelNameInput.disabled = true;

                      this.startTransferLearnButtonTextContent = 'Transfer learning complete.'; //this.transferModelNameInput.disabled = false; ????

                      this.isStartBtnDisabled = false;
                      this.isEvalModelOnDatasetBtnDisabled = false; //this.evalModelOnDatasetButton.disabled = false;

                    case 24:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));
          }
        }, {
          key: "plotLossAndAccuracy",
          value: function plotLossAndAccuracy(epoch, loss, acc, val_loss, val_acc, phase, displayEpoch) {
            var INITIAL_PHASE = 'initial';
            var FINE_TUNING_PHASE = 'fineTuningPhase';
            displayEpoch = phase === FINE_TUNING_PHASE ? epoch + this.epochs : epoch;
            this.trainLossValues[phase].x.push(displayEpoch);
            this.trainLossValues[phase].y.push(loss);
            this.trainAccValues[phase].x.push(displayEpoch);
            this.trainAccValues[phase].y.push(acc);
            this.valLossValues[phase].x.push(displayEpoch);
            this.valLossValues[phase].y.push(val_loss);
            this.valAccValues[phase].x.push(displayEpoch);
            this.valAccValues[phase].y.push(val_acc);
            this.logToStatusDisplay(val_loss);
            this.logToStatusDisplay(val_acc);
            this.showCharts = true;
            this.graphTrainLoss = {
              trainLossValuesCollection: [this.trainLossValues[INITIAL_PHASE], this.valLossValues[INITIAL_PHASE], this.trainLossValues[FINE_TUNING_PHASE], this.valLossValues[FINE_TUNING_PHASE]],
              layout: {
                width: 759,
                height: 300,
                xaxis: {
                  title: 'Epoch #'
                },
                yaxis: {
                  title: 'Loss'
                },
                font: {
                  size: 18,
                  color: "#fff"
                },
                plot_bgcolor: "black",
                paper_bgcolor: "transparent"
              }
            };
            this.graphAccuracy = {
              accuracyValuesCollection: [this.trainAccValues[INITIAL_PHASE], this.valAccValues[INITIAL_PHASE], this.trainAccValues[FINE_TUNING_PHASE], this.valAccValues[FINE_TUNING_PHASE]],
              layout: {
                width: 759,
                height: 300,
                xaxis: {
                  title: 'Epoch #'
                },
                yaxis: {
                  title: 'Accuracy'
                },
                font: {
                  size: 18,
                  color: "#fff"
                },
                plot_bgcolor: "black",
                paper_bgcolor: "transparent"
              }
            };
            this.startTransferLearnButtonTextContent = phase === INITIAL_PHASE ? "Transfer-learning... (".concat((epoch / this.epochs * 1e2).toFixed(0), "%)") : "Transfer-learning (fine-tuning)... (".concat((epoch / this.fineTuningEpochs * 1e2).toFixed(0), "%)");

            if (epoch === 99) {
              this.canSaveModel = true;
              this.preTrained = false;
              this.isDownloadAsFileBtnDisabled = false;
              this.isEvalModelOnDatasetBtnDisabled = false;
            }
          }
        }, {
          key: "plotSpectrogram",
          value: function plotSpectrogram(canvas, frequencyData, fftSize, fftDisplaySize, config) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
              var min, max, _i12, x, context, numFrames, realWidth, pixelWidth, pixelHeight, _i13, _x14, spectrum, j, y, colorValue, fillStyle, keyFrameIndex;

              return regeneratorRuntime.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      if (fftDisplaySize == null) {
                        fftDisplaySize = fftSize;
                      }

                      if (config == null) {
                        config = {};
                      } // Get the maximum and minimum.


                      min = Infinity;
                      max = -Infinity;

                      for (_i12 = 0; _i12 < frequencyData.length; ++_i12) {
                        x = frequencyData[_i12];

                        if (x !== -Infinity) {
                          if (x < min) {
                            min = x;
                          }

                          if (x > max) {
                            max = x;
                          }
                        }
                      }

                      if (!(min >= max)) {
                        _context49.next = 7;
                        break;
                      }

                      return _context49.abrupt("return");

                    case 7:
                      context = canvas.getContext('2d');
                      context.clearRect(0, 0, canvas.width, canvas.height);
                      numFrames = frequencyData.length / fftSize;

                      if (config.pixelsPerFrame != null) {
                        realWidth = Math.round(config.pixelsPerFrame * numFrames);

                        if (config.maxPixelWidth != null && realWidth > config.maxPixelWidth) {
                          realWidth = config.maxPixelWidth;
                        }

                        canvas.width = realWidth;
                      }

                      pixelWidth = canvas.width / numFrames;
                      pixelHeight = canvas.height / fftDisplaySize;
                      _i13 = 0;

                    case 14:
                      if (!(_i13 < numFrames)) {
                        _context49.next = 23;
                        break;
                      }

                      _x14 = pixelWidth * _i13;
                      spectrum = frequencyData.subarray(_i13 * fftSize, (_i13 + 1) * fftSize);

                      if (!(spectrum[0] === -Infinity)) {
                        _context49.next = 19;
                        break;
                      }

                      return _context49.abrupt("break", 23);

                    case 19:
                      for (j = 0; j < fftDisplaySize; ++j) {
                        y = canvas.height - (j + 1) * pixelHeight;
                        colorValue = (spectrum[j] - min) / (max - min);
                        colorValue = Math.pow(colorValue, 3);
                        colorValue = Math.round(255 * colorValue);
                        fillStyle = "rgb(".concat(colorValue, ",").concat(255 - colorValue, ",").concat(255 - colorValue, ")");
                        context.fillStyle = fillStyle;
                        context.fillRect(_x14, y, pixelWidth, pixelHeight);
                      }

                    case 20:
                      ++_i13;
                      _context49.next = 14;
                      break;

                    case 23:
                      if (!config.markKeyFrame) {
                        _context49.next = 41;
                        break;
                      }

                      if (!(config.keyFrameIndex == null)) {
                        _context49.next = 30;
                        break;
                      }

                      _context49.next = 27;
                      return _src__WEBPACK_IMPORTED_MODULE_3__["getMaxIntensityFrameIndex"]({
                        data: frequencyData,
                        frameSize: fftSize
                      }).data();

                    case 27:
                      _context49.t0 = _context49.sent;
                      _context49.next = 31;
                      break;

                    case 30:
                      _context49.t0 = config.keyFrameIndex;

                    case 31:
                      keyFrameIndex = _context49.t0;
                      // Draw lines to mark the maximum-intensity frame.
                      context.strokeStyle = 'black';
                      context.beginPath();
                      context.moveTo(pixelWidth * keyFrameIndex, 0);
                      context.lineTo(pixelWidth * keyFrameIndex, canvas.height * 0.1);
                      context.stroke();
                      context.beginPath();
                      context.moveTo(pixelWidth * keyFrameIndex, canvas.height * 0.9);
                      context.lineTo(pixelWidth * keyFrameIndex, canvas.height);
                      context.stroke();

                    case 41:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49);
            }));
          }
        }, {
          key: "start",
          value: function start() {
            var _this35 = this;

            var activeRecognizer = this.transferRecognizer == null ? this.recognizer : this.transferRecognizer;
            this.populateCandidateWords(activeRecognizer.wordLabels());
            this.logToStatusDisplay('Words Loaded:' + this.recognizer.wordLabels());
            console.log(this.recognizer.wordLabels());
            console.log(activeRecognizer.wordLabels());
            var suppressionTimeMillis = 1000;
            activeRecognizer.listen(function (result) {
              _this35.plotPredictions(_this35.predictionCanvas, activeRecognizer.wordLabels(), result.scores, 3, suppressionTimeMillis);
            }, {
              includeSpectrogram: true,
              suppressionTimeMillis: suppressionTimeMillis,
              probabilityThreshold: this.probaThresholdInput
            }).then(function () {
              _this35.isStartBtnDisabled = true;
              _this35.isStopBtnDisabled = false;

              _this35.showCandidateWords();

              _this35.logToStatusDisplay('Streaming recognition started.');
            })["catch"](function (err) {
              _this35.logToStatusDisplay('ERROR: Failed to start streaming display: ' + err.message);
            });
          }
        }, {
          key: "stop",
          value: function stop() {
            var _this36 = this;

            var activeRecognizer = this.transferRecognizer == null ? this.recognizer : this.transferRecognizer;
            activeRecognizer.stopListening().then(function () {
              _this36.isStartBtnDisabled = false;
              _this36.isStopBtnDisabled = true;

              _this36.hideCandidateWords();

              _this36.logToStatusDisplay('Streaming recognition stopped.');
            })["catch"](function (err) {
              _this36.logToStatusDisplay('ERROR: Failed to stop streaming display: ' + err.message);
            });
          }
          /** Get the base name of the downloaded files based on current dataset. */

        }, {
          key: "getDateString",
          value: function getDateString() {
            var d = new Date();
            var year = "".concat(d.getFullYear());
            var month = "".concat(d.getMonth() + 1);
            var day = "".concat(d.getDate());

            if (month.length < 2) {
              month = "0".concat(month);
            }

            if (day.length < 2) {
              day = "0".concat(day);
            }

            var hour = "".concat(d.getHours());

            if (hour.length < 2) {
              hour = "0".concat(hour);
            }

            var minute = "".concat(d.getMinutes());

            if (minute.length < 2) {
              minute = "0".concat(minute);
            }

            var second = "".concat(d.getSeconds());

            if (second.length < 2) {
              second = "0".concat(second);
            }

            return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ".").concat(minute, ".").concat(second);
          }
        }, {
          key: "scrollToPageBottom",
          value: function scrollToPageBottom() {
            var scrollingElement = document.scrollingElement || document.body;
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
          }
        }, {
          key: "disableAllCollectWordButtons",
          value: function disableAllCollectWordButtons() {
            for (var word in this.collectWordButtons) {
              this.collectWordButtons[word].disabled = true;
            }
          }
        }, {
          key: "createProgressBarAndIntervalJob",
          value: function createProgressBarAndIntervalJob(parentElement, durationSec) {
            var progressBar = document.createElement('progress');
            progressBar.value = 0;
            progressBar.style['width'] = "".concat(Math.round(window.innerWidth * 0.25), "px"); // Update progress bar in increments.

            var intervalJob = setInterval(function () {
              progressBar.value += 0.05;
            }, durationSec * 1e3 / 20);
            parentElement.appendChild(progressBar);
            return {
              progressBar: progressBar,
              intervalJob: intervalJob
            };
          }
        }, {
          key: "createWordDivs",
          value: function createWordDivs(transferWords) {
            var _this37 = this;

            // Clear collectButtonsDiv first.
            while (this.collectButtonsDiv.firstChild) {
              this.collectButtonsDiv.removeChild(this.collectButtonsDiv.firstChild);
            }

            this.datasetViz = new _dataset_vis_js__WEBPACK_IMPORTED_MODULE_4__["DatasetViz"](this.transferRecognizer, this.collectButtonsDiv, this.MIN_EXAMPLES_PER_CLASS, this.startTransferLearnButton, this.downloadAsFileButton, this.transferDurationMultiplier);
            var wordDivs = {};

            var _iterator22 = _createForOfIteratorHelper(transferWords),
                _step22;

            try {
              var _loop5 = function _loop5() {
                var word = _step22.value;
                var wordDiv = document.createElement('div');
                wordDiv.classList.add('word-div');
                wordDivs[word] = wordDiv;
                wordDiv.setAttribute('word', word);
                var button = document.createElement('button');
                button.setAttribute('isFixed', 'true');
                button.style['display'] = 'inline-block';
                button.style['vertical-align'] = 'middle';
                var displayWord = word === _this37.BACKGROUND_NOISE_TAG ? 'noise' : word;
                button.textContent = "".concat(displayWord, " (0)");
                wordDiv.appendChild(button);
                wordDiv.className = 'transfer-word';

                _this37.renderer.appendChild(_this37.collectButtonsDiv.nativeElement, wordDiv); //this.collectButtonsDiv.appendChild(wordDiv);


                _this37.collectWordButtons[word] = button;
                var durationInput = void 0;

                if (word === _this37.BACKGROUND_NOISE_TAG) {
                  // Create noise duration input.
                  durationInput = document.createElement('input');
                  durationInput.setAttribute('isFixed', 'true');
                  durationInput.value = '10';
                  durationInput.style['width'] = '100px'; // Create time-unit span for noise duration.

                  var timeUnitSpan = document.createElement('span');
                  timeUnitSpan.setAttribute('isFixed', 'true');
                  timeUnitSpan.classList.add('settings');
                  timeUnitSpan.style['vertical-align'] = 'middle';
                  timeUnitSpan.textContent = ' Number of seconds to record ';
                  wordDiv.appendChild(timeUnitSpan);
                  wordDiv.appendChild(durationInput);
                }

                button.addEventListener('click', function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this37, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
                    var _this38 = this;

                    var collectExampleOptions, durationSec, intervalJob, progressBar, barAndJob, tempSpectrogramData, tempCanvas, spectrogram, examples, example;
                    return regeneratorRuntime.wrap(function _callee51$(_context51) {
                      while (1) {
                        switch (_context51.prev = _context51.next) {
                          case 0:
                            this.disableAllCollectWordButtons();
                            Object(_dataset_vis_js__WEBPACK_IMPORTED_MODULE_4__["removeNonFixedChildrenFromWordDiv"])(wordDiv);
                            collectExampleOptions = {};

                            if (word === this.BACKGROUND_NOISE_TAG) {
                              // If the word type is background noise, display a progress bar during
                              // sound collection and do not show an incrementally updating
                              // spectrogram.
                              // _background_noise_ examples are special, in that user can specify
                              // the length of the recording (in seconds).
                              collectExampleOptions.durationSec = Number.parseFloat(durationInput.value);
                              durationSec = collectExampleOptions.durationSec;
                              barAndJob = this.createProgressBarAndIntervalJob(wordDiv, durationSec);
                              progressBar = barAndJob.progressBar;
                              intervalJob = barAndJob.intervalJob;
                            } else {
                              // If this is not a background-noise word type and if the duration
                              // multiplier is >1 (> ~1 s recoding), show an incrementally
                              // updating spectrogram in real time.
                              collectExampleOptions.durationMultiplier = this.transferDurationMultiplier;
                              tempCanvas = document.createElement('canvas');
                              tempCanvas.style['margin-left'] = '132px';
                              tempCanvas.height = 50;
                              wordDiv.appendChild(tempCanvas);
                              collectExampleOptions.snippetDurationSec = 0.1;

                              collectExampleOptions.onSnippet = function (spectrogram) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this38, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
                                  return regeneratorRuntime.wrap(function _callee50$(_context50) {
                                    while (1) {
                                      switch (_context50.prev = _context50.next) {
                                        case 0:
                                          if (tempSpectrogramData == null) {
                                            tempSpectrogramData = spectrogram.data;
                                          } else {
                                            tempSpectrogramData = _src__WEBPACK_IMPORTED_MODULE_3__["utils"].concatenateFloat32Arrays([tempSpectrogramData, spectrogram.data]);
                                          }

                                          this.plotSpectrogram(tempCanvas, tempSpectrogramData, spectrogram.frameSize, spectrogram.frameSize, {
                                            pixelsPerFrame: 2
                                          });

                                        case 2:
                                        case "end":
                                          return _context50.stop();
                                      }
                                    }
                                  }, _callee50, this);
                                }));
                              };
                            }

                            collectExampleOptions.includeRawAudio = this.includeTimeDomainWaveformCheckbox.nativeElement.checked;
                            _context51.next = 7;
                            return this.transferRecognizer.collectExample(word, collectExampleOptions);

                          case 7:
                            spectrogram = _context51.sent;

                            if (intervalJob != null) {
                              clearInterval(intervalJob);
                            }

                            if (progressBar != null) {
                              wordDiv.removeChild(progressBar);
                            }

                            examples = this.transferRecognizer.getExamples(word);
                            example = examples[examples.length - 1];
                            _context51.next = 14;
                            return this.datasetViz.drawExample(wordDiv, word, spectrogram, example.example.rawAudio, example.uid);

                          case 14:
                            this.enableAllCollectWordButtons();

                          case 15:
                          case "end":
                            return _context51.stop();
                        }
                      }
                    }, _callee51, this);
                  }));
                });
              };

              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                _loop5();
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }

            return wordDivs;
          }
        }, {
          key: "enableAllCollectWordButtons",
          value: function enableAllCollectWordButtons() {
            for (var word in this.collectWordButtons) {
              this.collectWordButtons[word].disabled = false;
            }
          }
        }, {
          key: "disableFileUploadControls",
          value: function disableFileUploadControls() {
            this.isDatasetFileInputDisabled = true; //this.datasetFileInput.disabled = true;

            this.isUploadFilesBtnDisabled = true; //this.uploadFilesButton.disabled = true;
          }
        }, {
          key: "enterLearnWords",
          value: function enterLearnWords() {
            var _this39 = this;

            var modelName = this.transferModelName;

            if (modelName == null || modelName.length === 0) {
              this.enterLearnWordsTextContent = 'Need model name!';
              setTimeout(function () {
                _this39.enterLearnWordsTextContent = 'Prepare collection and record commands';
              }, 2000);
              return;
            } // We disable the option to upload an existing dataset from files
            // once the "Enter transfer words" button has been clicked.
            // However, the user can still load an existing dataset from
            // files first and keep appending examples to it.


            this.disableFileUploadControls();
            this.isEnterLearnWordsBtnDisabled = true; //this.enterLearnWordsButton.disabled = true;

            this.transferDurationMultiplier = this.durationMultiplierSelect.nativeElement.value;
            this.isLearnWordsInputDisabled = true; //this.learnWordsInput.disabled = true;

            this.transferWords = this.learnWords.trim().split(',').map(function (w) {
              return w.trim();
            });
            this.transferWords.sort();

            if (this.transferWords == null || this.transferWords.length <= 1) {
              this.logToStatusDisplay('ERROR: Invalid list of transfer words.');
              return;
            }

            this.transferRecognizer = this.recognizer.createTransfer(modelName);
            this.createWordDivs(this.transferWords);
          }
        }, {
          key: "downloadAsFile",
          value: function downloadAsFile() {
            var basename = this.getDateString();
            var artifacts = this.transferRecognizer.serializeExamples(); // Trigger downloading of the data .bin file.

            var anchor = document.createElement('a');
            anchor.download = "".concat(basename, ".bin");
            anchor.href = window.URL.createObjectURL(new Blob([artifacts], {
              type: 'application/octet-stream'
            }));
            anchor.click();
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            var _this40 = this;

            var files = this.datasetFileInput.nativeElement.files;

            if (files == null || files.length !== 1) {
              this._notifications.error('Error', 'Choose a file, No file chosen.', Error);

              throw new Error('Must select exactly one file.');
            }

            var datasetFileReader = new FileReader();

            datasetFileReader.onload = function (event) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this40, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
                var _this41 = this;

                var originalTextContent;
                return regeneratorRuntime.wrap(function _callee52$(_context52) {
                  while (1) {
                    switch (_context52.prev = _context52.next) {
                      case 0:
                        _context52.prev = 0;
                        _context52.next = 3;
                        return this.loadDatasetInTransferRecognizer(event.target.result);

                      case 3:
                        _context52.next = 11;
                        break;

                      case 5:
                        _context52.prev = 5;
                        _context52.t0 = _context52["catch"](0);
                        originalTextContent = this.uploadFilesButtonTextContent;
                        this.uploadFilesButtonTextContent = _context52.t0.message;
                        console.error(_context52.t0);
                        setTimeout(function () {
                          _this41.uploadFilesButtonTextContent = originalTextContent;
                        }, 2000);

                      case 11:
                        this.durationMultiplierSelect.nativeElement.value = "".concat(this.transferDurationMultiplier);
                        this.isDurationMultiplierSelectDisabled = true; //this.durationMultiplierSelect.disabled = true;

                        this.isEnterLearnWordsBtnDisabled = true; //this.enterLearnWordsButton.disabled = true;

                      case 14:
                      case "end":
                        return _context52.stop();
                    }
                  }
                }, _callee52, this, [[0, 5]]);
              }));
            };

            datasetFileReader.onerror = function () {
              return console.error("Failed to binary data from file '".concat(_this40.dataFile.name, "'."));
            };

            datasetFileReader.readAsArrayBuffer(files[0]);
            this.isLoadTransferModelBtnDisabled = false;
          }
        }, {
          key: "evalModelOnDataset",
          value: function evalModelOnDataset() {
            var _this42 = this;

            var files = this.datasetFileInput.nativeElement.files;

            if (files == null || files.length !== 1) {
              throw new Error('Must select exactly one file.');
            }

            this.isEvalModelOnDatasetBtnDisabled = true; //this.evalModelOnDatasetButton.disabled = true;

            var datasetFileReader = new FileReader();

            datasetFileReader.onload = function (event) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this42, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
                var _this43 = this;

                var evalResult, rocDataForPlot, originalTextContent;
                return regeneratorRuntime.wrap(function _callee53$(_context53) {
                  while (1) {
                    switch (_context53.prev = _context53.next) {
                      case 0:
                        _context53.prev = 0;

                        if (!(this.transferRecognizer == null)) {
                          _context53.next = 3;
                          break;
                        }

                        throw new Error('There is no model!');

                      case 3:
                        // https://stackoverflow.com/questions/35789498/new-typescript-1-8-4-build-error-build-property-result-does-not-exist-on-t
                        // Load the dataset and perform evaluation of the transfer
                        // model using the dataset.
                        this.transferRecognizer.loadExamples(event.target.result);
                        _context53.next = 6;
                        return this.transferRecognizer.evaluate({
                          windowHopRatio: 0.25,
                          wordProbThresholds: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0]
                        });

                      case 6:
                        evalResult = _context53.sent;
                        // Plot the ROC curve.
                        rocDataForPlot = {
                          x: [],
                          y: [],
                          type: 'scatter',
                          mode: 'markers',
                          marker: {
                            size: 7,
                            color: 'red'
                          },
                          xaxis: {
                            title: 'False positive rate (FPR)',
                            range: [0, 1]
                          },
                          yaxis: {
                            title: 'True positive rate (TPR)',
                            range: [0, 1]
                          },
                          font: {
                            size: 18
                          }
                        };
                        evalResult.rocCurve.forEach(function (item) {
                          rocDataForPlot.x.push(item.fpr);
                          rocDataForPlot.y.push(item.tpr);
                        });
                        this.roc = {
                          data: [rocDataForPlot],
                          layout: {
                            width: 360,
                            height: 360,
                            plot_bgcolor: "transparent",
                            paper_bgcolor: "",
                            title: 'Plot the ROC curve'
                          }
                        };
                        this.evalResultsSpan = "AUC = ".concat(evalResult.auc);
                        _context53.next = 18;
                        break;

                      case 13:
                        _context53.prev = 13;
                        _context53.t0 = _context53["catch"](0);
                        originalTextContent = this.evalModelOnDatasetButtonTextContent;
                        this.evalModelOnDatasetButtonTextContent = _context53.t0.message;
                        setTimeout(function () {
                          _this43.evalModelOnDatasetButtonTextContent = originalTextContent;
                        }, 2000);

                      case 18:
                        this.isEvalModelOnDatasetBtnDisabled = false; //this.evalModelOnDatasetButton.disabled = false;

                      case 19:
                      case "end":
                        return _context53.stop();
                    }
                  }
                }, _callee53, this, [[0, 13]]);
              }));
            };

            datasetFileReader.onerror = function () {
              return console.error("Failed to binary data from file '".concat(_this42.dataFile.name, "'."));
            };

            datasetFileReader.readAsArrayBuffer(files[0]);
          }
        }, {
          key: "logToStatusDisplay",
          value: function logToStatusDisplay(message) {
            var statusDisplay = document.getElementById('status-display');
            var date = new Date();

            if (message) {
              statusDisplay.innerHTML += '<p>' + "[".concat(date.toISOString(), "] ") + message + '</p>';
              statusDisplay.scrollTop = statusDisplay.scrollHeight;
            }
          }
        }, {
          key: "populateCandidateWords",
          value: function populateCandidateWords(words) {
            var candidateWordsContainer = document.getElementById('candidate-words');
            this.candidateWordSpans = {};

            while (candidateWordsContainer.firstChild) {
              candidateWordsContainer.removeChild(candidateWordsContainer.firstChild);
            }

            var _iterator23 = _createForOfIteratorHelper(words),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var word = _step23.value;

                if (word === _src__WEBPACK_IMPORTED_MODULE_3__["BACKGROUND_NOISE_TAG"] || word === _src__WEBPACK_IMPORTED_MODULE_3__["UNKNOWN_TAG"]) {
                  continue;
                }

                var wordSpan = document.createElement('span');

                var _candidateWordsContainer = document.getElementById('candidate-words');

                wordSpan.textContent = word;
                wordSpan.classList.add('candidate-word');

                _candidateWordsContainer.appendChild(wordSpan);

                this.candidateWordSpans[word] = wordSpan;
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
          }
        }, {
          key: "showCandidateWords",
          value: function showCandidateWords() {
            var candidateWordsContainer = document.getElementById('candidate-words');
            candidateWordsContainer.classList.remove('candidate-words-hidden');
          }
        }, {
          key: "hideCandidateWords",
          value: function hideCandidateWords() {
            var candidateWordsContainer = document.getElementById('candidate-words');
            candidateWordsContainer.classList.add('candidate-words-hidden');
          }
        }, {
          key: "plotPredictions",
          value: function plotPredictions(canvas, candidateWords, probabilities, topK, timeToLiveMillis) {
            var _this44 = this;

            if (topK != null) {
              var wordsAndProbs = [];

              for (var _i14 = 0; _i14 < candidateWords.length; ++_i14) {
                wordsAndProbs.push([candidateWords[_i14], probabilities[_i14]]);
              }

              wordsAndProbs.sort(function (a, b) {
                return b[1] - a[1];
              });
              wordsAndProbs = wordsAndProbs.slice(0, topK);
              candidateWords = wordsAndProbs.map(function (item) {
                return item[0];
              });
              probabilities = wordsAndProbs.map(function (item) {
                return item[1];
              }); // Highlight the top word.

              var topWord = wordsAndProbs[0][0];
              this.prediction = "".concat(wordsAndProbs[0][1].toFixed(6));
              this.plotPrediction = "\"".concat(topWord, "\" (p=").concat(wordsAndProbs[0][1].toFixed(6), ") @ ") + new Date().toTimeString();
              console.log("\"".concat(topWord, "\" (p=").concat(wordsAndProbs[0][1].toFixed(6), ") @ ") + new Date().toTimeString());

              var _loop6 = function _loop6(word) {
                if (word === topWord) {
                  _this44.candidateWordSpans[word].classList.add('candidate-word-active');

                  if (timeToLiveMillis != null) {
                    setTimeout(function () {
                      if (_this44.candidateWordSpans[word]) {
                        _this44.candidateWordSpans[word].classList.remove('candidate-word-active');

                        _this44.logToStatusDisplay(_this44.plotPrediction);
                      }
                    }, timeToLiveMillis);
                  }
                } else {
                  _this44.candidateWordSpans[word].classList.remove('candidate-word-active');
                }
              };

              for (var word in this.candidateWordSpans) {
                _loop6(word);
              }

              this.precision = {
                estimates: [{
                  y: [this.prediction, 1],
                  x: [topWord, ''],
                  width: .2,
                  type: 'bar',
                  marker: {
                    color: ['blue', 'transparent']
                  }
                }],
                layout: {
                  width: 305,
                  height: 360,
                  yaxis: {
                    title: 'Prediction'
                  },
                  //xaxis: { title: this.prediction },
                  font: {
                    size: 18,
                    color: '#fff'
                  },
                  plot_bgcolor: "transparent",
                  paper_bgcolor: "transparent"
                }
              };
            }
          }
        }, {
          key: "createNewSpeachCommands",
          value: function createNewSpeachCommands() {
            this.configureCommands = true;
          }
        }]);

        return SpeechCommandComponent;
      }();

      SpeechCommandComponent.ɵfac = function SpeechCommandComponent_Factory(t) {
        return new (t || SpeechCommandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]));
      };

      SpeechCommandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SpeechCommandComponent,
        selectors: [["app-speech-ai"]],
        viewQuery: function SpeechCommandComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.downloadAsFileButton = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.startTransferLearnButton = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.collectButtonsDiv = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.includeTimeDomainWaveformCheckbox = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.datasetFileInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.durationMultiplierSelect = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.savedTransferModelsSelect = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.predictionCanvas = _t.first);
          }
        },
        decls: 58,
        vars: 21,
        consts: [["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxFlexFill", ""], ["fxFlex", "66", 1, "node", "duoTone"], [1, "db-readout"], ["preserveAspectRatio", "none", "id", "visualizer", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "start-stop"], ["size", "5", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["id", "result", 2, "padding", "5px"], [3, "disabled", "click"], ["startButton", ""], ["stopButton", ""], [1, "main-model"], ["id", "candidate-words", 1, "candidate-words-hidden"], ["candidateWordsContainer", ""], ["id", "roc-plot", "class", "plots", 3, "data", "layout", 4, "ngIf"], ["id", "loss-plot", "class", "plots", 3, "data", "layout", 4, "ngIf"], ["fxFlex", "33", "fxLayout", "column", "fxFlexGap", "20px", 1, "node"], ["ySpace", "", 3, "click"], [3, "hidden"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["id", "saved-transfer-models", "fxFlex", "75"], ["savedTransferModelsSelect", ""], ["value", "1"], [3, "textContent", "disabled", "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "spaceInputs", ""], ["fxFlex", "10", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "augment-by-mixing-noise"], [1, "drag-block-lg", "footer", 3, "ngDraggable", "position", "zIndex", "zIndexMoving", "preventDefaultEvent", "trackPosition"], [1, "dragger"], ["id", "status-display"], ["statusDisplay", ""], ["class", "overlay", 4, "ngIf"], ["class", "configureCommands", 4, "ngIf"], ["preserveAspectRatio", "none", "id", "visualizer", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "mask"], ["id", "maskGroup"], ["id", "gradient", "x1", "0%", "y1", "0%", "x2", "0%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "#db6247", "stop-opacity", "1"], ["offset", "40%", 2, "stop-color", "#f6e5d1", "stop-opacity", "1"], ["offset", "60%", 2, "stop-color", "#5c79c7", "stop-opacity", "1"], ["offset", "85%", 2, "stop-color", "#b758c0", "stop-opacity", "1"], ["offset", "100%", 2, "stop-color", "#222", "stop-opacity", "1"], ["x", "0", "y", "0", "width", "100%", "height", "100%", "fill", "url(#gradient)", "mask", "url(#mask)"], ["id", "roc-plot", 1, "plots", 3, "data", "layout"], ["id", "loss-plot", 1, "plots", 3, "data", "layout"], [1, "overlay"], [1, "configureCommands"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "header"], [1, "pos"], ["disabled", "", 1, "allowed", 3, "textContent", "click"], ["startTransferLearnButton", ""], [3, "textContent", "disabled", "ngClass", "click"], ["downloadAsFileButton", ""], ["id", "eval-model-on-dataset", 3, "textContent", "disabled", "click"], [3, "click"], [1, "transfer-learn-section"], ["size", "20", "placeholder", "model name", 3, "ngModel", "disabled", "ngModelChange"], ["transferModelNameInput", ""], ["size", "36", 3, "ngModel", "disabled", "ngModelChange"], ["learnWordsInput", ""], ["id", "duration-multiplier", "fxFlex", "10", 3, "disabled"], ["durationMultiplierSelect", ""], ["value", "2", "selected", ""], ["type", "checkbox", "id", "include-audio-waveform"], ["includeTimeDomainWaveformCheckbox", ""], ["id", "include-audio-waveform-label", 2, "margin-right", "5px"], [1, "allowed", 3, "textContent", "disabled", "click"], ["id", "transfer-learn-history"], ["id", "collect-words"], ["collectButtonsDiv", ""], ["type", "file", "id", "dataset-file-input", 2, "margin-right", "5px", 3, "disabled"], ["datasetFileInput", ""], ["id", "upload-dataset", 3, "textContent", "disabled", "click"], ["id", "plots", "fxLayout", "row", "fxLayoutAlign", "space-between start", 4, "ngIf"], ["id", "plots", "fxLayout", "row", "fxLayoutAlign", "space-between start"], ["id", "accuracy-plot", "class", "plots", 3, "data", "layout", 4, "ngIf"], ["id", "eval-results", 1, "eval-results", 3, "textContent"], ["id", "accuracy-plot", 1, "plots", 3, "data", "layout"]],
        template: function SpeechCommandComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Start Speech Commands");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SpeechCommandComponent__svg_svg_6_Template, 11, 0, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Probability threshold:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpeechCommandComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.probaThresholdInput = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_Template_button_click_14_listener() {
              return ctx.start();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_Template_button_click_17_listener() {
              return ctx.stop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Stop");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SpeechCommandComponent_plotly_plot_23_Template, 1, 2, "plotly-plot", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SpeechCommandComponent_plotly_plot_24_Template, 1, 2, "plotly-plot", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Create New Custom Configured Speech Commands");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_Template_button_click_28_listener() {
              return ctx.createNewSpeachCommands();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Create New Speech Commands");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Load Pretrained Models");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_Template_button_click_38_listener() {
              return ctx.loadTransferModel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpeechCommandComponent_Template_button_click_39_listener() {
              return ctx.deleteTransferModel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Epochs:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpeechCommandComponent_Template_input_ngModelChange_44_listener($event) {
              return ctx.epochsInput = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Fine-tuning (FT) epochs:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpeechCommandComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.fineTuningEpochsInput = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Augment by mixing noise:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Draggable");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, SpeechCommandComponent_div_56_Template, 1, 0, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, SpeechCommandComponent_div_57_Template, 53, 20, "div", 33);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.configureCommands);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.probaThresholdInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isStartBtnDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isStopBtnDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roc);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.precision);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.preTrained);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx.loadTransferModelButtonTextContent)("disabled", ctx.isLoadTransferModelBtnDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx.deleteTransferModelButtonTextContent)("disabled", ctx.isDeleteTransferModelBtnDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.epochsInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fineTuningEpochsInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngDraggable", ctx.draggable)("position", ctx.position)("zIndex", ctx.zIndex)("zIndexMoving", ctx.zIndexMoving)("preventDefaultEvent", ctx.preventDefaultEvent)("trackPosition", ctx.trackPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configureCommands);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configureCommands);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], angular2_draggable__WEBPACK_IMPORTED_MODULE_9__["AngularDraggableDirective"], _shared_plot_plot_component__WEBPACK_IMPORTED_MODULE_10__["PlotComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"]],
        styles: [".configureCommands[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  width: 80%;\n  top: 20px;\n  bottom: 100px;\n  border: solid 1px #000;\n  left: 10%;\n  background: #d2d4d7;\n  border-radius: 5px;\n  padding: 8px;\n  color: #22292e;\n}\n.configureCommands[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.configureCommands[_ngcontent-%COMP%]   #result[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.configureCommands[_ngcontent-%COMP%]   #visualizer[_ngcontent-%COMP%] {\n  height: 270px;\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n.configureCommands[_ngcontent-%COMP%]   #plots[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 8;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border: solid 1px #000;\n  background: rgba(9, 42, 68, 0.9);\n}\n.header[_ngcontent-%COMP%] {\n  background: #4392cb;\n  padding: 9px;\n  font-size: 15px;\n}\n.pos[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 999999;\n}\n#visualizer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 5px;\n  height: 220px;\n}\n.node[_ngcontent-%COMP%]   #loss-plot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -53px;\n  z-index: 1004;\n  right: 130px;\n}\n.db-readout[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 55px;\n  right: 26px;\n  font-size: 25px;\n  color: #ffffff;\n  text-shadow: 1px 1px #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zcGVlY2gtY29tbWFuZHMvc3BlZWNoLWFpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUNFO0VBQVEsWUFBQTtBQUVWO0FBQUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtBQUNKO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUFGO0FBR0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUY7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwL3NwZWVjaC1jb21tYW5kcy9zcGVlY2gtYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlndXJlQ29tbWFuZHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGJvdHRvbTogMTAwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcclxuICBsZWZ0OiAxMCU7XHJcbiAgYmFja2dyb3VuZDogI2QyZDRkNztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGNvbG9yOiAjMjIyOTJlO1xyXG5cclxuICBoNSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI3Jlc3VsdHtwYWRkaW5nOjVweDt9XHJcblxyXG4gICN2aXN1YWxpemVyIHtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gICNwbG90cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDg7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5LCA0MiwgNjgsIDAuOTApO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNDM5MmNiO1xyXG4gIHBhZGRpbmc6IDlweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wb3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG59XHJcblxyXG4jdmlzdWFsaXplciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OjIyMHB4O1xyXG59XHJcblxyXG4ubm9kZSAjbG9zcy1wbG90IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTNweDtcclxuICB6LWluZGV4OiAxMDA0O1xyXG4gIHJpZ2h0OiAxMzBweDtcclxufVxyXG4uZGItcmVhZG91dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICByaWdodDogMjZweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzAwMDtcclxufVxyXG4uc3RhcnQtc3RvcHtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpeechCommandComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-speech-ai',
            templateUrl: './speech-ai.component.html',
            styleUrls: ['./speech-ai.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
          }];
        }, {
          downloadAsFileButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['downloadAsFileButton', {
              "static": false
            }]
          }],
          startTransferLearnButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['startTransferLearnButton', {
              "static": false
            }]
          }],
          collectButtonsDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['collectButtonsDiv', {
              "static": false
            }]
          }],
          includeTimeDomainWaveformCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['includeTimeDomainWaveformCheckbox', {
              "static": false
            }]
          }],
          datasetFileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['datasetFileInput', {
              "static": false
            }]
          }],
          durationMultiplierSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['durationMultiplierSelect', {
              "static": false
            }]
          }],
          savedTransferModelsSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['savedTransferModelsSelect', {
              "static": false
            }]
          }],
          predictionCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['predictionCanvas', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _d3_d3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./d3/d3.component */
      "ra9l");
      /* harmony import */


      var _webcam_classifier_webcam_classifier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./webcam-classifier/webcam-classifier.component */
      "75rY");
      /* harmony import */


      var _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./image-classifier/image-classifier.component */
      "gdL9");
      /* harmony import */


      var _sentiment_analysis_sentiment_analysis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sentiment-analysis/sentiment-analysis.component */
      "4G5h");
      /* harmony import */


      var _speech_commands_speech_ai_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./speech-commands/speech-ai.component */
      "smhn");
      /* harmony import */


      var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./blockchain/blockchain.component */
      "CC5z");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @okta/okta-angular */
      "bPo2");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _loader_loading_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./loader/loading.guard */
      "hjGQ"); // https://medium.com/ngconf/animating-angular-route-transitions-ef02b871cc30?


      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
          canActivate: [_loader_loading_guard__WEBPACK_IMPORTED_MODULE_10__["LoadingGuard"]],
          data: {
            animationState: 'One'
          }
        }, //Loading Guard: Logged in users only...
        //{ 
        //  path: '',
        //  component: HomeComponent,
        //  canActivate: [LoadingGuard],
        //  data: { animationState: 'One' }
        //},
        {
          path: 'd3',
          component: _d3_d3_component__WEBPACK_IMPORTED_MODULE_2__["D3Component"],
          data: {
            animationState: 'One'
          }
        }, {
          path: 'implicit/callback',
          component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_9__["OktaCallbackComponent"],
          data: {
            animationState: 'Three'
          }
        }, {
          path: 'upload',
          component: _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_4__["ImageClassifierComponent"],
          canActivate: [_loader_loading_guard__WEBPACK_IMPORTED_MODULE_10__["LoadingGuard"]],
          data: {
            animationState: 'Two'
          }
        }, {
          path: 'speech-commands',
          component: _speech_commands_speech_ai_component__WEBPACK_IMPORTED_MODULE_6__["SpeechCommandComponent"],
          canActivate: [_loader_loading_guard__WEBPACK_IMPORTED_MODULE_10__["LoadingGuard"]],
          data: {
            animationState: 'One'
          }
        }, {
          path: 'webcam',
          component: _webcam_classifier_webcam_classifier_component__WEBPACK_IMPORTED_MODULE_3__["WebcamClassifierComponent"],
          canActivate: [_loader_loading_guard__WEBPACK_IMPORTED_MODULE_10__["LoadingGuard"]],
          data: {
            animationState: 'Two'
          }
        }, {
          path: 'sentiment',
          component: _sentiment_analysis_sentiment_analysis_component__WEBPACK_IMPORTED_MODULE_5__["SentimentAnalysisComponent"],
          canActivate: [_loader_loading_guard__WEBPACK_IMPORTED_MODULE_10__["LoadingGuard"]],
          data: {
            animationState: 'Three'
          }
        }, {
          path: 'blockchain',
          component: _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_7__["BlockchainComponent"],
          canActivate: [_loader_loading_guard__WEBPACK_IMPORTED_MODULE_10__["LoadingGuard"]],
          data: {
            animationState: 'One'
          }
        }, {
          path: '**',
          redirectTo: 'one'
        }]
      }, {
        path: '**',
        redirectTo: 'one'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map