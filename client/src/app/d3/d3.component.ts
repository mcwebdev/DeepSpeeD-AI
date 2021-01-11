import { Component, ElementRef, Input, OnInit, AfterViewInit, OnChanges, ViewChild, ViewEncapsulation } from "@angular/core";
import * as PlotlyJS from 'node_modules/plotly.js';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Axis from 'd3-axis';
import * as d3Array from 'd3-array';

import { SAMPLE_DATA } from 'src/app/d3/data';

export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}


@Component({
  selector: 'app-d3',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements AfterViewInit {

  title = 'Stacked Bar Chart';
  SAMPLE_DATA = SAMPLE_DATA
  @ViewChild("svg", { static: false }) svgEl: ElementRef;
  private margin: Margin;

  private width: number = 400;
  private height: number = 400;

  private svg: any;     // TODO replace all `any` by the right type

  private x: any;
  private y: any;
  private z: any;
  private g: any;
  val2 = 50;
  graphTrainLoss: any;
  trainLossValues = [];
  valLossValues = [];
  public graph = {
    data: [{ x: [1, 2, 3], y: [2, 5, 3], type: 'bar' }],
    layout: { autosize: true, title: 'A Fancy Plot' },
  };

  constructor(public el: ElementRef) {
    console.log(this.graph.layout.title);

  }

  ngAfterViewInit() {
    console.log(this.SAMPLE_DATA);
    this.initMargins();
    this.initSvg();
    this.drawChart(this.SAMPLE_DATA);
  }


  private initMargins() {
    this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
  }

  private initSvg() {
    const element = this.svgEl.nativeElement;
    //d3.select(element).select('svg#svg svg').remove();
    this.svg = d3.select(element).append('svg');

    //this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    //this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.x = d3Scale.scaleBand()
      .rangeRound([0, this.width])
      .paddingInner(0.05)
      .align(0.1);
    this.y = d3Scale.scaleLinear()
      .rangeRound([this.height, 0]);
    this.z = d3Scale.scaleOrdinal()
      .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);
  }

  private drawChart(data: any[]) {

    let keys = Object.getOwnPropertyNames(data[0]).slice(1);

    data = data.map(v => {
      v.total = keys.map(key => v[key]).reduce((a, b) => a + b, 0);
      return v;
    });
    data.sort((a: any, b: any) => b.total - a.total);

    this.x.domain(data.map((d: any) => d.State));
    this.y.domain([0, d3Array.max(data, (d: any) => d.total)]).nice();
    this.z.domain(keys);

    this.g.append('g')
      .selectAll('g')
      .data(d3Shape.stack().keys(keys)(data))
      .enter().append('g')
      .attr('fill', d => this.z(d.key))
      .selectAll('rect')
      .data(d => d)
      .enter().append('rect')
      .attr('x', d => this.x(d.data.State))
      .attr('y', d => this.y(d[1]))
      .attr('height', d => this.y(d[0]) - this.y(d[1]))
      .attr('width', this.x.bandwidth());

    this.g.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    this.g.append('g')
      .attr('class', 'axis')
      .call(d3Axis.axisLeft(this.y).ticks(null, 's'))
      .append('text')
      .attr('font-size', '18px')
      .attr('x', 2)
      .attr('y', this.y(this.y.ticks().pop()) + 0.5)
      .attr('dy', '0.6em')
      .attr('fill', '#757272')
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'start')
      .text('Population');

    let legend = this.g.append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', '10px')
      .attr('text-anchor', 'end')
      .attr('fill', '#000')
      .selectAll('g')
      .data(keys.slice().reverse())
      .enter().append('g')
      .attr('transform', (d, i) => 'translate(20,' + i * 25 + ')');

    legend.append('rect')
      .attr('x', this.width + 19)
      .attr('width', 19)
      .attr('height', 19)
      .attr('fill', '#000')
      .attr('font-size', '10px')
      .attr('fill', this.z);

    legend.append('text')
      .attr('x', this.width + 10)
      .attr('y', 9.5)
      .attr('dy', '0.32em')
      .attr('font-size', '10px')
      .text(d => d);
  }



  a = 10;
  b = 12;
  c = 15;
  d = 9;

  //  t = setInterval(() => {

  //    console.log(this.a)
  //  }, 4000);))
  //}
  rand() {
    return Math.random();
  }

  interval = setInterval(() => {
    this.a = this.rand() * 10 - this.rand();
    this.b = this.rand() * 14 - this.rand();
    this.c = this.rand() * 18 - this.rand();
    this.d = this.rand() * 11 - this.rand();

    this.trace1.y.push(this.a);
    this.trace1.y.push(this.b);
    this.trace1.y.push(this.c);
    this.trace1.y.push(this.d);

    this.trace2.y.push(this.a * 3.14);
    this.trace2.y.push(this.a * 3.14);
    this.trace2.y.push(this.a * 3.14);
    this.trace2.y.push(this.a * 3.14);

    console.log(this.a);
    this.data = [this.trace1, this.trace2, this.trace3];
  }, 1000);



  public trace1 = {
    y: [this.a, this.b, this.c, this.d],
    mode: 'lines',
    line: { color: '#80CAF6' },
    type: 'line'
  };

  public trace2 = {
    y: [this.a, this.b, this.c, this.d],
    mode: 'lines',
    line: { color: 'red' },
    type: 'scatter'
  };

  public trace3 = {
    x: [1, 2, 3, 1300],
    mode: 'lines+markers',
    type: 'scatter'
  };

  public data = [this.trace1, this.trace2, this.trace3];
}
