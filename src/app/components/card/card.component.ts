import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  picCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardText:string = ""
  @Input()
  id:string= "0"

  constructor() { }

  ngOnInit(): void {

  }

}
