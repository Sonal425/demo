import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-elements',
  templateUrl: './custom-elements.component.html',
  styleUrls: ['./custom-elements.component.scss']
})
export class CustomElementsComponent implements OnInit {
  customProperties: any = {};
  showEdit: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleChangeComplete(event){
    this.customProperties.background = event.color.hex;
  }
}
