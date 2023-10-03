import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeDB } from 'src/app/data/fakeDB';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  contentPicCover:string = ""
  contentTitle:string = ""
  contentText:string = ""
  private id:string | null = "0"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null) {
    const result = fakeDB.filter(article => article.id == id)[0]

      this.contentTitle = result.contentTitle
      this.contentText = result.contentText
      this.contentPicCover = result.contentPicCover
    }
  }
