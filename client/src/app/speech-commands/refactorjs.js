await this.transferRecognizer.train({
  epochs,
  validationSplit: 0.25,
  augmentByMixingNoiseRatio,
  callback: {
    onEpochEnd: async (epoch, logs) => {
      plotLossAndAccuracy(
        epoch, logs.loss, logs.acc, logs.val_loss, logs.val_acc,
        INITIAL_PHASE);
    }
  },
  fineTuningEpochs,
  fineTuningCallback: {
    onEpochEnd: async (epoch, logs) => {
      plotLossAndAccuracy(
        epoch, logs.loss, logs.acc, logs.val_loss, logs.val_acc,
        FINE_TUNING_PHASE);
    }
  }
});
//this.saveTransferModelButton.disabled = false;
this.transferModelName = this.transferRecognizer.name;
//this.transferModelNameInput.disabled = true;
this.startTransferLearnButtonTextContent = 'Transfer learning complete.';
//this.transferModelNameInput.disabled = false;
//this.startButton.disabled = false;
//this.evalModelOnDatasetButton.disabled = false;
