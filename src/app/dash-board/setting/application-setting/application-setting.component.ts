import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-application-setting',
  templateUrl: './application-setting.component.html',
  styleUrls: ['./application-setting.component.css']
})
export class ApplicationSettingComponent implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }



  ngOnInit() { }

  
}

