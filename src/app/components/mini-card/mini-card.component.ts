import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {

  @Input()
  miniPicCover:string = ""
  @Input()
  miniCardTitle:string = ""

  constructor() { }

  ngOnInit(): void {}

}
