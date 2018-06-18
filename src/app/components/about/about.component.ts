import { InformacionService } from './../../services/informacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(public _is:InformacionService) { }

  ngOnInit() {
  }

}
