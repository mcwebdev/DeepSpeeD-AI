import { Component, OnInit } from '@angular/core';
//import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import * as toxicity from '@tensorflow-models/toxicity';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})
export class SentimentAnalysisComponent implements OnInit {
  samples:any = [
    {
      'id': '002261b0415c4f9d',
      'text':
        'We\'re dudes on computers, moron.  You are quite astonishingly stupid.'
    },
    {
      'id': '0027160ca62626bc',
      'text':
        'Please stop. If you continue to vandalize Wikipedia, as you did to Kmart, you will be blocked from editing.'
    },
    {
      'id': '002fb627b19c4c0b',
      'text':
        'I respect your point of view, and when this discussion originated on 8th April I would have tended to agree with you.'
    }
  ];

  model;
  labels;
  a;
  b;
  loading = false;

  constructor() {
  
  }

  ngOnInit() {
    this.predict()

  }

  async classify(inputs) {
    const results = await this.model.classify(inputs);
    return inputs.map((d, i) => {
      const obj = { 'text': d };
      results.forEach((classification) => {
        obj[classification.label] = classification.results[i].match;
      });
      return obj;
    });
  }


  addPredictions = (predictions) => {

    const tableWrapper = document.querySelector('#table-wrapper');

    predictions.forEach(d => {
      const predictionDom = `<div class="sentimentrow">
      <div class="text">${d.text}</div>
      ${
        this.labels
          .map(
            label => {
              return `<div class="${
                'label' +
                (d[label] === true ? ' positive' :
                  '')}">${d[label]}</div>`
            })
          .join('')}
    </div>`;
      tableWrapper.insertAdjacentHTML('beforeend', predictionDom);
    });
    this.loading = false;
  };

  async predict() {
    this.loading = true;
    this.model = await toxicity.load(this.a, this.b);
    this.labels = this.model.model.outputNodes.map(d => d.split('/')[0]);
    const tableWrapper = document.querySelector('#table-wrapper');
    tableWrapper.insertAdjacentHTML(
      'beforeend', `<div class="sentimentrow">
    <div class="text">TEXT</div>
    ${this.labels.map(label => {
        return `<div class="label">${label.replace('_', ' ')}</div>`;
      }).join('')}
  </div>`);

    const predictions = await this.classify(this.samples.map(d => d.text));
    this.addPredictions(predictions);
    this.loading = false;
    document.querySelector('#classify-new-text')
      .addEventListener('click', (e) => {
        const textEl = <HTMLInputElement>document.querySelector('#classify-new-text-input');
        const text = textEl.value;
        this.loading = true;
        const predictions = this.classify([text]).then(d => {
          this.addPredictions(d);
        });
      });
  };

}
