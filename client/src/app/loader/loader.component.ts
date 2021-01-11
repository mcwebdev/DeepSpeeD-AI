import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor() {

  }

  ngOnInit() {

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
  }
}


