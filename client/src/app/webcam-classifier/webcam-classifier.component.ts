import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Prediction } from 'src/services/prediction';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { NotificationsService } from 'angular2-notifications';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-webcam-classifier',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './webcam-classifier.component.html',
  styleUrls: ['./webcam-classifier.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class WebcamClassifierComponent implements OnInit {

  @ViewChild("video", { static: false }) video: ElementRef;
  @ViewChild("svg", { static: false }) svgEl: ElementRef;
  @Input()
  predictions: Prediction[];
  model: any;
  loading = true;
  noWebcam: boolean;
  faVideo = faVideo;
  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };
  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  constraints = { audio: true, video: true }; 
  constructor(private _notifications: NotificationsService) { }

  async ngOnInit() {
    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.noWebcam = false;
    } catch (err) {
      this.noWebcam = true;
      this._notifications.info("No Webcam Detected. Plug in webcam and refresh the page.");
    }

    if (this.noWebcam === false) {
        console.log('loading mobilenet model...');
        this.model = await mobilenet.load();
      
    console.log('Sucessfully loaded model');
      this.loading = false;
    }

    
  }

  async start() {
    const vid = this.video.nativeElement;

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        vid.srcObject = stream;
        setInterval(async () => {
          this.predictions = await this.model.classify(this.video.nativeElement);
          await tf.nextFrame();
          this.createChart();
          this.predictionsReady();
        }, 3000);
      })
      .catch((err) => {
        this.noWebcam = true;
        this._notifications.error('Error', 'No Webcam Detected. Plug in webcam and refresh the page.', Error)
        console.log('Something went wrong!');
      });
  }

  private createChart(): void {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  private initSvg() {
    const element = this.svgEl.nativeElement;
    d3.select(element).select('svg#svg svg').remove();
    this.svg = d3.select(element).append('svg');
    this.width = element.width.animVal.value - this.margin.left - this.margin.right;
    this.height = element.height.animVal.value - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.predictions.map((d) => d.className));
    //Uncomment to make x-axis relative
    //this.y.domain([0, d3Array.max(this.predictions, (d) => d.probability)]);
  }

  private drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y).ticks(10, '%'))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');
  }

  private drawBars() {
    this.g.selectAll('.bar')
      .data(this.predictions)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr("fill", "#1461ac")
      .attr('stroke', '#0f508f')
      .attr('x', (d) => this.x(d.className))
      .attr('y', (d) => this.y(d.probability))
      .attr('width', this.x.bandwidth())
      .attr('height', (d) => this.height - this.y(d.probability));
  }

  predictionsReady() {
    this.loading = false;
  }
  
}
