import { Component, ElementRef, Input, OnInit, OnChanges, ViewChild, ViewEncapsulation }  from "@angular/core";
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Prediction } from 'src/services/prediction';
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-classifier',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './image-classifier.component.html',
  styleUrls: ['./image-classifier.component.scss'],
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
export class ImageClassifierComponent implements OnInit {
  @ViewChild("img", { static: false }) imageEl: ElementRef;
  @ViewChild("svg", { static: false }) svgEl: ElementRef;


  @Input()
  predictions: Prediction[];


  faImage = faImage;
  imageSrc: string;
  model: any;
  loading = true;

  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };
  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  myStyle: object = {};
  myParams: object = {};

  constructor(public el: ElementRef) {

  }

  async ngOnInit() {
    const container = document.querySelector(".warlock");
    const classNames = ["warlock", "titan", "hunter", "default"];
    let i = 0;
    if (container) {
      const changeClass = () => {
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
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#15487a'
        },
        shape: {
          type: 'triangle',
        },
      }
    };
    console.log('loader was called', container);
    console.log('loading mobilenet model...');
    this.model = await mobilenet.load();
    console.log('Sucessfully loaded model', this.model);
    this.loading = false;
    if (!this.predictions) { return; }
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

  async fileChangeEvent(event) {
    this.loading = true;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
          this.createChart();
          this.predictionsReady();
        }, 2000);
      };
    }
  }
}
