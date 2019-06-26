import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/Image';



@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css']
})
export class DogItemComponent implements OnInit {

  @Input() dogImages: Image;

  constructor() { }

  ngOnInit() {
  }

}
