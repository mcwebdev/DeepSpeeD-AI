import { Component,  AfterViewInit,  ViewChild, Renderer2 } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as SpeechCommands from './src';
import { DatasetViz, removeNonFixedChildrenFromWordDiv } from './dataset-vis.js';
import { BACKGROUND_NOISE_TAG, UNKNOWN_TAG } from './src';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-speech-ai',
  templateUrl: './speech-ai.component.html',
  styleUrls: ['./speech-ai.component.scss']
})
export class SpeechCommandComponent implements AfterViewInit {
  recognizer;
  plotPrediction;
  transferWords;
  transferRecognizer;
  datasetViz;
  dataFile;
  transferDurationMultiplier;
  collectWordButtons = {};
  candidateWordSpans;
  learnWords: string = "_background_noise_,red,green";
  transferModelName;
  epochsInput = 100;
  fineTuningEpochsInput = 0;
  probaThresholdInput = .75;
  enterLearnWordsTextContent = "Prepare collection and record commands";
  loadTransferModelButtonTextContent = "Load";
  saveTransferModelButtonTextContent = "Save model";
  deleteTransferModelButtonTextContent = "Delete";
  evalModelOnDatasetButtonTextContent = "Evaluate model on dataset";
  uploadFilesButtonTextContent = "↑ Upload dataset";
  startTransferLearnButtonTextContent = "Start transfer learning";
  evalResultsSpan = "";
  epochs = this.epochsInput;
  fineTuningEpochs = this.fineTuningEpochsInput;
  epoch;
  loss;
  acc;
  val_loss;
  val_acc;
  phase;
  showCharts: boolean;
  precision :any;
  graphTrainLoss :any;
  graphAccuracy: any;
  prediction: string;
  trainLossValues = [];
  valLossValues = [];
  trainAccValues = [];
  valAccValues = [];
  roc: any;
  draggable = true;
  useHandle = false;
  zIndex = 120000;
  zIndexMoving;
  preventDefaultEvent = false;
  trackPosition = true;
  position;
  isStopBtnDisabled: boolean;
  isStartBtnDisabled: boolean;
  isEnterLearnWordsBtnDisabled: boolean;
  isLoadTransferModelBtnDisabled: boolean;
  isDeleteTransferModelBtnDisabled: boolean = true;
  isSaveTransferModelBtnDisabled: boolean = true;
  isTransferModelNameInputDisabled: boolean;
  isLearnWordsInputDisabled: boolean;
  isDurationMultiplierSelectDisabled: boolean;
  isStartTransferLearnBtnDisabled: boolean;
  isEvalModelOnDatasetBtnDisabled: boolean = true;
  isDatasetFileInputDisabled: boolean;
  isUploadFilesBtnDisabled: boolean;
  configureCommands: boolean;
  canSaveModel: boolean;
  preTrained: boolean;
  isDownloadAsFileBtnDisabled: boolean = true;

  @ViewChild('downloadAsFileButton', { static: false }) downloadAsFileButton: any;
  @ViewChild('startTransferLearnButton', { static: false }) startTransferLearnButton: any;
  @ViewChild('collectButtonsDiv', { static: false }) collectButtonsDiv: any;
  @ViewChild('includeTimeDomainWaveformCheckbox', { static: false }) includeTimeDomainWaveformCheckbox: any;
  @ViewChild('datasetFileInput', { static: false }) datasetFileInput: any;
  @ViewChild('durationMultiplierSelect', { static: false }) durationMultiplierSelect: any;
  @ViewChild('savedTransferModelsSelect', { static: false }) savedTransferModelsSelect: any;
  @ViewChild('predictionCanvas', { static: false }) predictionCanvas: any;

  XFER_MODEL_NAME = 'xfer-model';
  // Minimum required number of examples per class for transfer learning.
  MIN_EXAMPLES_PER_CLASS = 8;
  BACKGROUND_NOISE_TAG = SpeechCommands.BACKGROUND_NOISE_TAG;
  constructor(private renderer: Renderer2, private _notifications: NotificationsService) {
    //Check if broser is private, Speech commands will not work in private mode
    function retry(isDone, next) {
      var current_trial = 0,
        max_retry = 50,
        interval = 10,
        is_timeout = false;
      var id = window.setInterval(
        function () {
          if (isDone()) {
            window.clearInterval(id);
            next(is_timeout);
          }
          if (current_trial++ > max_retry) {
            window.clearInterval(id);
            is_timeout = true;
            next(is_timeout);
          }
        },
        10
      );
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

      if ((window as any).webkitRequestFileSystem) {
        (window as any).webkitRequestFileSystem(
          (window as any).TEMPORARY, 1,
          function () {
            is_private = false;
          },
          function (e) {
            console.log(e);
            is_private = true;
          }
        );
      } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
        var db;
        try {
          db = window.indexedDB.open('test');
        } catch (e) {
          is_private = true;
        }

        if (typeof is_private === 'undefined') {
          retry(
            function isDone() {
              return db.readyState === 'done' ? true : false;
            },
            function next(is_timeout) {
              if (!is_timeout) {
                is_private = db.result ? false : true;
              }
            }
          );
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
          (window as any).localStorage.setItem('test', 1);
        } catch (e) {
          is_private = true;
        }

        if (typeof is_private === 'undefined') {
          is_private = false;
          window.localStorage.removeItem('test');
        }
      }

      retry(
        function isDone() {
          return typeof is_private !== 'undefined' ? true : false;
        },
        function next(is_timeout) {
          callback(is_private);
        }
      );
    }
    detectPrivateMode(
      function (is_private) {
        var msg = document.getElementById('result').innerHTML
          = typeof is_private === 'undefined' ? 'cannot detect' : is_private ?
            '<div style="background: #fff; border-radius:5px; padding:5px; margin: 0 5px; font-size:10px;"><span style="margin-top:3px;">👻</span> Private browser detected. Speech commands is unable to load preloaded dataset in a private window. </span>' : '</span>';
      }
     
    );

  }

  async ngAfterViewInit() {

    console.log('loading');
    this.logToStatusDisplay('Creating recognizer...');
    this.recognizer = SpeechCommands.create('BROWSER_FFT');

    await this.populateSavedTransferModelsSelect();
    console.log('Sucessfully loaded model', this.populateSavedTransferModelsSelect());
    if (this.savedTransferModelsSelect.nativeElement.length > 0) {
      this.preTrained = false;
    }
    
    // Make sure the tf.Model is loaded through HTTP. If this is not
    // called here, the tf.Model will be loaded the first time
    // `listen()` is called.
    this.recognizer.ensureModelLoaded()
      .then(() => {
        this.isStartBtnDisabled = false;//this.startButton.disabled = false;
        this.isStopBtnDisabled = true; //this.stopButton.disabled = true;
        this.isEnterLearnWordsBtnDisabled = false;//this.enterLearnWordsButton.disabled = false;
        this.isLoadTransferModelBtnDisabled = false;//this.loadTransferModelButton.disabled = false;
        this.isDeleteTransferModelBtnDisabled = false;//this.deleteTransferModelButton.disabled = false;

        this.transferModelName = `model-${this.getDateString()}`;

        this.logToStatusDisplay('Model loaded.');

        const params = this.recognizer.params();
        this.logToStatusDisplay(`sampleRateHz: ${params.sampleRateHz}`);
        this.logToStatusDisplay(`fftSize: ${params.fftSize}`);
        this.logToStatusDisplay(
          `spectrogramDurationMillis: ` +
          `${params.spectrogramDurationMillis.toFixed(2)}`);
        this.logToStatusDisplay(
          `tf.Model input shape: ` +
          `${JSON.stringify(this.recognizer.modelInputShape())}`);
        if (this.savedTransferModelsSelect.nativeElement.length === 0) {
          this.isLoadTransferModelBtnDisabled = true;
          this.isDeleteTransferModelBtnDisabled = true;
        }
        
      })
      .catch(err => {
        this.logToStatusDisplay(
          'Failed to load model for recognizer: ' + err.message);
      });
  }

  async populateSavedTransferModelsSelect() {
    const savedModelKeys = await SpeechCommands.listSavedTransferModels();
    while (this.savedTransferModelsSelect.nativeElement.firstChild) {
      this.savedTransferModelsSelect.nativeElement.removeChild(this.savedTransferModelsSelect.nativeElement.firstChild);
    }
    if (savedModelKeys.length > 0) {
      for (const key of savedModelKeys) {
        const option = document.createElement('option');
        option.textContent = key;
        option.id = key;
        this.savedTransferModelsSelect.nativeElement.appendChild(option);
      }
      this.isLoadTransferModelBtnDisabled = false;
    }
  }

  async saveTransferModel() {
    await this.transferRecognizer.save();
    await this.populateSavedTransferModelsSelect();
    this.saveTransferModelButtonTextContent = 'Model saved!';
    this.isSaveTransferModelBtnDisabled = true;
  }

  async loadTransferModel() {
    const transferModelName = this.savedTransferModelsSelect.nativeElement.value;
    await this.recognizer.ensureModelLoaded();
    this.transferRecognizer = this.recognizer.createTransfer(transferModelName);
    await this.transferRecognizer.load();
    this.transferModelName = transferModelName;
    this.isTransferModelNameInputDisabled = true; //this.transferModelNameInput.disabled = true;
    
    this.learnWords = this.transferRecognizer.wordLabels().join(',');
    this.isLearnWordsInputDisabled = true; //this.learnWordsInput.disabled = true;
    this.isDurationMultiplierSelectDisabled = true;//this.durationMultiplierSelect.disabled = true;
    this.isEnterLearnWordsBtnDisabled = true;//this.enterLearnWordsButton.disabled = true;
    this.isSaveTransferModelBtnDisabled = true;//this.saveTransferModelButton.disabled = true;
    this.isLoadTransferModelBtnDisabled = true;//this.loadTransferModelButton.disabled = true;
    this.loadTransferModelButtonTextContent = 'Model loaded!';
  }

  async deleteTransferModel() {
    const transferModelName = this.savedTransferModelsSelect.nativeElement.value;
    await this.recognizer.ensureModelLoaded();
    this.transferRecognizer = this.recognizer.createTransfer(transferModelName);
    await SpeechCommands.deleteSavedTransferModel(transferModelName);
    
    this.deleteTransferModelButtonTextContent = `Deleted "${transferModelName}"`;
    await this.populateSavedTransferModelsSelect();
  }

  async loadDatasetInTransferRecognizer(serialized) {
    const modelName = this.transferModelName;
    if (modelName == null || modelName.length === 0) {
      throw new Error('Need model name!');
    }

    if (this.transferRecognizer == null) {
      this.transferRecognizer = this.recognizer.createTransfer(modelName);
    }
    this.transferRecognizer.loadExamples(serialized);
    const exampleCounts = this.transferRecognizer.countExamples();
    this.transferWords = [];
    const modelNumFrames = this.transferRecognizer.modelInputShape()[1];
    const durationMultipliers = [];
    for (const word in exampleCounts) {
      this.transferWords.push(word);
      const examples = this.transferRecognizer.getExamples(word);
      for (const example of examples) {
        const spectrogram = example.example.spectrogram;
        // Ignore _background_noise_ examples when determining the duration
        // multiplier of the dataset.
        if (word !== this.BACKGROUND_NOISE_TAG) {
          durationMultipliers.push(Math.round(
            spectrogram.data.length / spectrogram.frameSize / modelNumFrames));
        }
      }
    }
    this.transferWords.sort();
    this.learnWords = this.transferWords.join(',');

    // Determine the transferDurationMultiplier value from the dataset.
    this.transferDurationMultiplier =
      durationMultipliers.length > 0 ? Math.max(...durationMultipliers) : 1;
    console.log(
      `Deteremined transferDurationMultiplier from uploaded ` +
      `dataset: ${this.transferDurationMultiplier}`);

    this.createWordDivs(this.transferWords);
    this.datasetViz.redrawAll();
  }

  async startTransferLearn() {
    this.isStartTransferLearnBtnDisabled = true; //this.startTransferLearnButton.disabled = true;
    this.isStartBtnDisabled = true;
    const INITIAL_PHASE = 'initial';
    const FINE_TUNING_PHASE = 'fineTuningPhase';
    this.startTransferLearnButtonTextContent = 'Transfer learning starting...';
    await tf.nextFrame();

    this.epochs = this.epochsInput;
    this.fineTuningEpochs = this.fineTuningEpochsInput;
    this.disableAllCollectWordButtons();
    var augmentByMixingNoiseRatioCheckbox = document.getElementById('augment-by-mixing-noise') as HTMLInputElement;
    var augmentByMixingNoiseRatio;  //.checked ? 0.5 : null;
    if (augmentByMixingNoiseRatioCheckbox.checked) { augmentByMixingNoiseRatio = .5 } else { augmentByMixingNoiseRatio = null}
    console.log(`augmentByMixingNoiseRatio = ${augmentByMixingNoiseRatio}`);
    let epochs = this.epochs;
    let fineTuningEpochs = this.fineTuningEpochs;
    for (const phase of [INITIAL_PHASE, FINE_TUNING_PHASE]) {
      const phaseSuffix = phase === FINE_TUNING_PHASE ? ' (FT)' : '';
      const lineWidth = phase === FINE_TUNING_PHASE ? 2 : 1;
      this.trainLossValues[phase] = {
        x: [],
        y: [],
        name: 'train' + phaseSuffix,
        mode: 'lines+markers',
        line: { width: lineWidth }
      };
      this.valLossValues[phase] = {
        x: [],
        y: [],
        name: 'val' + phaseSuffix,
        mode: 'lines+markers',
        line: { width: lineWidth }
      };


      this.trainAccValues[phase] = {
        x: [],
        y: [],
        name: 'train' + phaseSuffix,
        mode: 'lines+markers',
        line: { width: lineWidth }
      };
      this.valAccValues[phase] = {
        x: [],
        y: [],
        name: 'val' + phaseSuffix,
        mode: 'lines+markers',
        line: { width: lineWidth }
      };
    }
    await this.transferRecognizer.train({
      epochs,
      validationSplit: 0.25,
      augmentByMixingNoiseRatio,
      callback: {
        onEpochEnd: async (epoch, logs, displayEpoch) => {
          this.plotLossAndAccuracy(
            epoch, logs.loss, logs.acc, logs.val_loss, logs.val_acc,
            INITIAL_PHASE, displayEpoch);
        }
      },
      fineTuningEpochs,
      fineTuningCallback: {
        onEpochEnd: async (epoch, logs, displayEpoch) => {
          this.plotLossAndAccuracy(
            epoch, logs.loss, logs.acc, logs.val_loss, logs.val_acc,
            FINE_TUNING_PHASE, displayEpoch);
        }
      }
    });
    this.isSaveTransferModelBtnDisabled = false;//this.saveTransferModelButton.disabled = false;
    this.transferModelName = this.transferRecognizer.name;
    this.isTransferModelNameInputDisabled = true//this.transferModelNameInput.disabled = true;
    this.startTransferLearnButtonTextContent = 'Transfer learning complete.';
    //this.transferModelNameInput.disabled = false; ????
    this.isStartBtnDisabled = false;
    this.isEvalModelOnDatasetBtnDisabled = false;//this.evalModelOnDatasetButton.disabled = false;

  }

  plotLossAndAccuracy(epoch, loss, acc, val_loss, val_acc, phase, displayEpoch) {
    const INITIAL_PHASE = 'initial';
    const FINE_TUNING_PHASE = 'fineTuningPhase';
    
    displayEpoch = phase === FINE_TUNING_PHASE ? (epoch + this.epochs) : epoch;

    this.trainLossValues[phase].x.push(displayEpoch);
    this.trainLossValues[phase].y.push(loss);
    this.trainAccValues[phase].x.push(displayEpoch);
    this.trainAccValues[phase].y.push(acc);

    this.valLossValues[phase].x.push(displayEpoch);
    this.valLossValues[phase].y.push(val_loss);
    this.valAccValues[phase].x.push(displayEpoch);
    this.valAccValues[phase].y.push(val_acc);
    this.logToStatusDisplay(val_loss)
    this.logToStatusDisplay(val_acc)

    this.showCharts = true;
    this.graphTrainLoss = {
      trainLossValuesCollection: [
        this.trainLossValues[INITIAL_PHASE], this.valLossValues[INITIAL_PHASE],
        this.trainLossValues[FINE_TUNING_PHASE], this.valLossValues[FINE_TUNING_PHASE]
      ],
      layout: {
        width: 759,
        height: 300,
        xaxis: { title: 'Epoch #' },
        yaxis: { title: 'Loss' },
        font: { size: 18, color: "#fff" },
        plot_bgcolor: "black",
        paper_bgcolor: "transparent"
      }
    };

    this.graphAccuracy = {
      accuracyValuesCollection: [
        this.trainAccValues[INITIAL_PHASE], this.valAccValues[INITIAL_PHASE],       
        this.trainAccValues[FINE_TUNING_PHASE], this.valAccValues[FINE_TUNING_PHASE]
      ],
      layout: {
        width: 759,
        height: 300,
        xaxis: { title: 'Epoch #' },
        yaxis: { title: 'Accuracy' },
        font: { size: 18, color: "#fff" },
        plot_bgcolor: "black",
        paper_bgcolor: "transparent"
      }
    };
    
    this.startTransferLearnButtonTextContent = phase === INITIAL_PHASE ?
      `Transfer-learning... (${(epoch / this.epochs * 1e2).toFixed(0)}%)` :
      `Transfer-learning (fine-tuning)... (${(epoch / this.fineTuningEpochs * 1e2).toFixed(0)}%)`;

    if (epoch === 99) {
      this.canSaveModel = true;
      this.preTrained = false;
      this.isDownloadAsFileBtnDisabled = false;
      this.isEvalModelOnDatasetBtnDisabled = false;
    }
  }

  async plotSpectrogram(
    canvas, frequencyData, fftSize, fftDisplaySize, config) {
    if (fftDisplaySize == null) {
      fftDisplaySize = fftSize;
    }
    if (config == null) {
      config = {};
    }

    // Get the maximum and minimum.
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < frequencyData.length; ++i) {
      const x = frequencyData[i];
      if (x !== -Infinity) {
        if (x < min) {
          min = x;
        }
        if (x > max) {
          max = x;
        }
      }
    }
    if (min >= max) {
      return;
    }

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const numFrames = frequencyData.length / fftSize;
    if (config.pixelsPerFrame != null) {
      let realWidth = Math.round(config.pixelsPerFrame * numFrames);
      if (config.maxPixelWidth != null && realWidth > config.maxPixelWidth) {
        realWidth = config.maxPixelWidth;
      }
      canvas.width = realWidth;
    }

    const pixelWidth = canvas.width / numFrames;
    const pixelHeight = canvas.height / fftDisplaySize;
    for (let i = 0; i < numFrames; ++i) {
      const x = pixelWidth * i;
      const spectrum = frequencyData.subarray(i * fftSize, (i + 1) * fftSize);
      if (spectrum[0] === -Infinity) {
        break;
      }
      for (let j = 0; j < fftDisplaySize; ++j) {
        const y = canvas.height - (j + 1) * pixelHeight;

        let colorValue = (spectrum[j] - min) / (max - min);
        colorValue = Math.pow(colorValue, 3);
        colorValue = Math.round(255 * colorValue);
        const fillStyle =
          `rgb(${colorValue},${255 - colorValue},${255 - colorValue})`;
        context.fillStyle = fillStyle;
        context.fillRect(x, y, pixelWidth, pixelHeight);
      }
    }

    if (config.markKeyFrame) {
      const keyFrameIndex = config.keyFrameIndex == null ?
        await SpeechCommands
          .getMaxIntensityFrameIndex(
            { data: frequencyData, frameSize: fftSize })
          .data() :
        config.keyFrameIndex;
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
    }
  }

  start() {
    const activeRecognizer = this.transferRecognizer == null ? this.recognizer : this.transferRecognizer;
    this.populateCandidateWords(activeRecognizer.wordLabels());
    this.logToStatusDisplay('Words Loaded:' + this.recognizer.wordLabels())
    console.log(this.recognizer.wordLabels());
    console.log(activeRecognizer.wordLabels());
    const suppressionTimeMillis = 1000;
    activeRecognizer
      .listen(
        result => {
          this.plotPredictions(
            this.predictionCanvas, activeRecognizer.wordLabels(), result.scores,
            3, suppressionTimeMillis);
        },
        {
          includeSpectrogram: true,
          suppressionTimeMillis,
          probabilityThreshold: this.probaThresholdInput
        })
      .then(() => {
        this.isStartBtnDisabled = true;
        this.isStopBtnDisabled = false;
        this.showCandidateWords();
        this.logToStatusDisplay('Streaming recognition started.');
      })
      .catch(err => {
        this.logToStatusDisplay(
          'ERROR: Failed to start streaming display: ' + err.message);
      });

    
  }

  stop() {
    const activeRecognizer =
      this.transferRecognizer == null ? this.recognizer : this.transferRecognizer;
    activeRecognizer.stopListening()
      .then(() => {
        this.isStartBtnDisabled = false;
        this.isStopBtnDisabled = true;
        this.hideCandidateWords();
        this.logToStatusDisplay('Streaming recognition stopped.');
      })
      .catch(err => {
        this.logToStatusDisplay(
          'ERROR: Failed to stop streaming display: ' + err.message);
      });
  }

  /** Get the base name of the downloaded files based on current dataset. */
  getDateString() {
    const d = new Date();
    const year = `${d.getFullYear()}`;
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    if (month.length < 2) {
      month = `0${month}`;
    }
    if (day.length < 2) {
      day = `0${day}`;
    }
    let hour = `${d.getHours()}`;
    if (hour.length < 2) {
      hour = `0${hour}`;
    }
    let minute = `${d.getMinutes()}`;
    if (minute.length < 2) {
      minute = `0${minute}`;
    }
    let second = `${d.getSeconds()}`;
    if (second.length < 2) {
      second = `0${second}`;
    }
    return `${year}-${month}-${day}T${hour}.${minute}.${second}`;
  }

  scrollToPageBottom() {
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }

  disableAllCollectWordButtons() {
    for (const word in this.collectWordButtons) {
      this.collectWordButtons[word].disabled = true;
    }
  }

  createProgressBarAndIntervalJob(parentElement, durationSec) {
    const progressBar = document.createElement('progress');
    progressBar.value = 0;
    progressBar.style['width'] = `${Math.round(window.innerWidth * 0.25)}px`;
    // Update progress bar in increments.
    const intervalJob = setInterval(() => {
      progressBar.value += 0.05;
    }, durationSec * 1e3 / 20);
    parentElement.appendChild(progressBar);
    return { progressBar, intervalJob };
  }

  createWordDivs(transferWords) {
    // Clear collectButtonsDiv first.
    while (this.collectButtonsDiv.firstChild) {
      this.collectButtonsDiv.removeChild(this.collectButtonsDiv.firstChild);
    }
    this.datasetViz = new DatasetViz(
      this.transferRecognizer, this.collectButtonsDiv, this.MIN_EXAMPLES_PER_CLASS,
      this.startTransferLearnButton, this.downloadAsFileButton,
      this.transferDurationMultiplier);

    const wordDivs = {};
    for (const word of transferWords) {
      const wordDiv = document.createElement('div');
      wordDiv.classList.add('word-div');
      wordDivs[word] = wordDiv;
      wordDiv.setAttribute('word', word);
      const button = document.createElement('button');
      button.setAttribute('isFixed', 'true');
      button.style['display'] = 'inline-block';
      button.style['vertical-align'] = 'middle';

      const displayWord = word === this.BACKGROUND_NOISE_TAG ? 'noise' : word;

      button.textContent = `${displayWord} (0)`;
      wordDiv.appendChild(button);
      wordDiv.className = 'transfer-word';
      this.renderer.appendChild(this.collectButtonsDiv.nativeElement, wordDiv);
      //this.collectButtonsDiv.appendChild(wordDiv);
      this.collectWordButtons[word] = button;

      let durationInput;
      if (word === this.BACKGROUND_NOISE_TAG) {
        // Create noise duration input.
        durationInput = document.createElement('input');
        durationInput.setAttribute('isFixed', 'true');
        durationInput.value = '10';
        durationInput.style['width'] = '100px';
        
        // Create time-unit span for noise duration.
        const timeUnitSpan = document.createElement('span');
        timeUnitSpan.setAttribute('isFixed', 'true');
        timeUnitSpan.classList.add('settings');
        timeUnitSpan.style['vertical-align'] = 'middle';
        timeUnitSpan.textContent = ' Number of seconds to record ';

        wordDiv.appendChild(timeUnitSpan);
        wordDiv.appendChild(durationInput);
      }

      button.addEventListener('click', async () => {
        this.disableAllCollectWordButtons();
        removeNonFixedChildrenFromWordDiv(wordDiv);

        let collectExampleOptions = <any>{};
        let durationSec;
        let intervalJob;
        let progressBar;

        if (word === this.BACKGROUND_NOISE_TAG) {
          // If the word type is background noise, display a progress bar during
          // sound collection and do not show an incrementally updating
          // spectrogram.
          // _background_noise_ examples are special, in that user can specify
          // the length of the recording (in seconds).
          collectExampleOptions.durationSec = Number.parseFloat(durationInput.value);
          durationSec = collectExampleOptions.durationSec;

          const barAndJob = this.createProgressBarAndIntervalJob(wordDiv, durationSec);
          progressBar = barAndJob.progressBar;
          intervalJob = barAndJob.intervalJob;
        } else {
          // If this is not a background-noise word type and if the duration
          // multiplier is >1 (> ~1 s recoding), show an incrementally
          // updating spectrogram in real time.
          collectExampleOptions.durationMultiplier = this.transferDurationMultiplier;
          let tempSpectrogramData;
          const tempCanvas = document.createElement('canvas');
          tempCanvas.style['margin-left'] = '132px';
          tempCanvas.height = 50;
          wordDiv.appendChild(tempCanvas);

          collectExampleOptions.snippetDurationSec = 0.1;
          collectExampleOptions.onSnippet = async (spectrogram) => {
            if (tempSpectrogramData == null) {
              tempSpectrogramData = spectrogram.data;
            } else {
              tempSpectrogramData = SpeechCommands.utils.concatenateFloat32Arrays(
                [tempSpectrogramData, spectrogram.data]);
            }
            this.plotSpectrogram(
              tempCanvas, tempSpectrogramData, spectrogram.frameSize,
              spectrogram.frameSize, { pixelsPerFrame: 2 });
          }
        }

        collectExampleOptions.includeRawAudio = this.includeTimeDomainWaveformCheckbox.nativeElement.checked;
        const spectrogram = await this.transferRecognizer.collectExample(word, collectExampleOptions);


        if (intervalJob != null) {
          clearInterval(intervalJob);
        }
        if (progressBar != null) {
          wordDiv.removeChild(progressBar);
        }
        const examples = this.transferRecognizer.getExamples(word)
        const example = examples[examples.length - 1];
        await this.datasetViz.drawExample(
          wordDiv, word, spectrogram, example.example.rawAudio, example.uid);
        this.enableAllCollectWordButtons();
      });
    }
    return wordDivs;
  }

  enableAllCollectWordButtons() {
    for (const word in this.collectWordButtons) {
      this.collectWordButtons[word].disabled = false;
    }
  }

  disableFileUploadControls() {
    this.isDatasetFileInputDisabled = true;//this.datasetFileInput.disabled = true;
    this.isUploadFilesBtnDisabled = true;//this.uploadFilesButton.disabled = true;
  }

  enterLearnWords() {
    const modelName = this.transferModelName;
    if (modelName == null || modelName.length === 0) {
      this.enterLearnWordsTextContent = 'Need model name!';
      setTimeout(() => {
        this.enterLearnWordsTextContent = 'Prepare collection and record commands';
      }, 2000);
      return;
    }

    // We disable the option to upload an existing dataset from files
    // once the "Enter transfer words" button has been clicked.
    // However, the user can still load an existing dataset from
    // files first and keep appending examples to it.
    this.disableFileUploadControls();
    this.isEnterLearnWordsBtnDisabled = true;//this.enterLearnWordsButton.disabled = true;

    this.transferDurationMultiplier = this.durationMultiplierSelect.nativeElement.value;

    this.isLearnWordsInputDisabled = true; //this.learnWordsInput.disabled = true;
    this.transferWords = this.learnWords.trim().split(',').map(w => w.trim());
    this.transferWords.sort();
    if (this.transferWords == null || this.transferWords.length <= 1) {
      this.logToStatusDisplay('ERROR: Invalid list of transfer words.');
      return;
    }

    this.transferRecognizer = this.recognizer.createTransfer(modelName);
    this.createWordDivs(this.transferWords);
  }

  downloadAsFile() {
    const basename = this.getDateString();
    const artifacts = this.transferRecognizer.serializeExamples();

    // Trigger downloading of the data .bin file.
    const anchor = document.createElement('a');
    anchor.download = `${basename}.bin`;
    anchor.href = window.URL.createObjectURL(
      new Blob([artifacts], { type: 'application/octet-stream' }));
    anchor.click();
  }

  uploadFiles() {
    const files = this.datasetFileInput.nativeElement.files;
    if (files == null || files.length !== 1) {
      this._notifications.error('Error', 'Choose a file, No file chosen.', Error)
      throw new Error('Must select exactly one file.');
    }
    const datasetFileReader = new FileReader();
    datasetFileReader.onload = async (event:any) => {
      try {
        await this.loadDatasetInTransferRecognizer(event.target.result); //datasetFileReader.result
      } catch (err) {
        const originalTextContent = this.uploadFilesButtonTextContent;
        this.uploadFilesButtonTextContent = err.message;
        console.error(err);
        setTimeout(() => {
          this.uploadFilesButtonTextContent = originalTextContent;
        }, 2000);
      }
      this.durationMultiplierSelect.nativeElement.value = `${this.transferDurationMultiplier}`;
      this.isDurationMultiplierSelectDisabled = true;//this.durationMultiplierSelect.disabled = true;
      this.isEnterLearnWordsBtnDisabled = true; //this.enterLearnWordsButton.disabled = true;
    };
    datasetFileReader.onerror = () =>
      console.error(`Failed to binary data from file '${this.dataFile.name}'.`);
    datasetFileReader.readAsArrayBuffer(files[0]);
    this.isLoadTransferModelBtnDisabled = false;
  }

  evalModelOnDataset() {
    const files = this.datasetFileInput.nativeElement.files;
    if (files == null || files.length !== 1) {
      throw new Error('Must select exactly one file.');
    }
    this.isEvalModelOnDatasetBtnDisabled = true; //this.evalModelOnDatasetButton.disabled = true;
    const datasetFileReader = new FileReader();
    datasetFileReader.onload = async (event:any) => {
      try {
        if (this.transferRecognizer == null) {
          throw new Error('There is no model!');
        }
        // https://stackoverflow.com/questions/35789498/new-typescript-1-8-4-build-error-build-property-result-does-not-exist-on-t
        // Load the dataset and perform evaluation of the transfer
        // model using the dataset.
        this.transferRecognizer.loadExamples(event.target.result);
        const evalResult = await this.transferRecognizer.evaluate({
          windowHopRatio: 0.25,
          wordProbThresholds: [
            0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5,
            0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0
          ]
        });
        // Plot the ROC curve.
        const rocDataForPlot = {
          x: [],
          y: [],
          type: 'scatter',
          mode: 'markers',
          marker: { size: 7, color: 'red' },
          xaxis: {
            title: 'False positive rate (FPR)', range: [0, 1]
          },
          yaxis: {
            title: 'True positive rate (TPR)', range: [0, 1]
          },
          font: { size: 18 }
        };
        evalResult.rocCurve.forEach(item => {
          rocDataForPlot.x.push(item.fpr);
          rocDataForPlot.y.push(item.tpr);
        });
        this.roc = {
          data: [
            rocDataForPlot
          ],
          layout: { width: 360, height: 360, plot_bgcolor: "transparent", paper_bgcolor: "", title: 'Plot the ROC curve' }
        };
        this.evalResultsSpan = `AUC = ${evalResult.auc}`;
      } catch (err) {
        const originalTextContent = this.evalModelOnDatasetButtonTextContent;
        this.evalModelOnDatasetButtonTextContent = err.message;
        setTimeout(() => {
          this.evalModelOnDatasetButtonTextContent = originalTextContent;
        }, 2000);
      }
      this.isEvalModelOnDatasetBtnDisabled = false;//this.evalModelOnDatasetButton.disabled = false;
    };
    datasetFileReader.onerror = () =>
      console.error(`Failed to binary data from file '${this.dataFile.name}'.`);
    datasetFileReader.readAsArrayBuffer(files[0]);
  }

  logToStatusDisplay(message) {
    const statusDisplay = <HTMLElement>document.getElementById('status-display');
    const date = new Date();
    if (message) {
      statusDisplay.innerHTML += '<p>' + `[${date.toISOString()}] ` + message + '</p>';
      statusDisplay.scrollTop = statusDisplay.scrollHeight;
    }
    
  }

  populateCandidateWords(words) {
    const candidateWordsContainer = document.getElementById('candidate-words');
    this.candidateWordSpans = {};
    while (candidateWordsContainer.firstChild) {
      candidateWordsContainer.removeChild(candidateWordsContainer.firstChild);
    }

    for (const word of words) {
      if (word === BACKGROUND_NOISE_TAG || word === UNKNOWN_TAG) {
        continue;
      }
      const wordSpan = document.createElement('span');
      const candidateWordsContainer = document.getElementById('candidate-words');
      wordSpan.textContent = word;
      wordSpan.classList.add('candidate-word');
      candidateWordsContainer.appendChild(wordSpan);
      this.candidateWordSpans[word] = wordSpan;
    }
  }

  showCandidateWords() {
    const candidateWordsContainer = <HTMLElement>document.getElementById('candidate-words');
    candidateWordsContainer.classList.remove('candidate-words-hidden');
  }

  hideCandidateWords() {
    const candidateWordsContainer = document.getElementById('candidate-words');
    candidateWordsContainer.classList.add('candidate-words-hidden');
  }

  plotPredictions(
    canvas, candidateWords, probabilities, topK, timeToLiveMillis) {
    if (topK != null) {
      let wordsAndProbs = [];
      for (let i = 0; i < candidateWords.length; ++i) {
        wordsAndProbs.push([candidateWords[i], probabilities[i]]);
      }
      wordsAndProbs.sort((a, b) => (b[1] - a[1]));
      wordsAndProbs = wordsAndProbs.slice(0, topK);
      candidateWords = wordsAndProbs.map(item => item[0]);
      probabilities = wordsAndProbs.map(item => item[1]);

      // Highlight the top word.
      const topWord = wordsAndProbs[0][0];
      this.prediction = `${wordsAndProbs[0][1].toFixed(6)}`;
      this.plotPrediction = `"${topWord}" (p=${wordsAndProbs[0][1].toFixed(6)}) @ ` +
        new Date().toTimeString();
      console.log(
        `"${topWord}" (p=${wordsAndProbs[0][1].toFixed(6)}) @ ` +
        new Date().toTimeString());
      for (const word in this.candidateWordSpans) {
        if (word === topWord) {
          this.candidateWordSpans[word].classList.add('candidate-word-active');
          if (timeToLiveMillis != null) {
            setTimeout(() => {
              if (this.candidateWordSpans[word]) {
                this.candidateWordSpans[word].classList.remove(
                  'candidate-word-active');
                this.logToStatusDisplay(this.plotPrediction);
                
              }
            }, timeToLiveMillis);
          }
        } else {
          this.candidateWordSpans[word].classList.remove('candidate-word-active');
        }
      }
      this.precision = {
        estimates: [
          {
            y: [this.prediction, 1], x: [topWord, ''], width: .2, type: 'bar', marker: { color: ['blue', 'transparent'] }
          }
        ],
        layout: {
          width: 305,
          height: 360,
          yaxis: { title: 'Prediction' },
          //xaxis: { title: this.prediction },
          font: { size: 18, color: '#fff' },
          plot_bgcolor: "transparent",
          paper_bgcolor: "transparent"
        }
      };
      
    }
  }

  createNewSpeachCommands() {
    this.configureCommands = true;
  }
}
