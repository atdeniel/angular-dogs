import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/Dog';
import { Breed } from '../../models/Breed';
import { Image } from '../../models/Image';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dog-main',
  templateUrl: './dog-main.component.html',
  styleUrls: ['./dog-main.component.css']
})
export class DogMainComponent implements OnInit {

  dogs:Dog[];
  subreeds:Breed[];
  filterDogImages:Image[] = new Array();
  dogImages:Image[] = new Array();
  filters:string[] = new Array();

  currentDog:Dog;

  constructor(private dogService:DogService) { 
  }

  ngOnInit() {
    this.dogService.callAllAPI().subscribe( json => {

      this.dogs = this.dogService.getDog(json.message);

    });
  }


  onSelect(idDog:number): void {

    let dog:Dog;

    dog = this.dogs.find(function(element) {
      return (idDog == element.id) ;
    });

    this.subreeds = dog.subreed;
    
    this.currentDog = dog;

  }

  loadDogImage(breed:string):void {

    this.dogService.callByBreedAPI(breed).subscribe( json => {
      let images:Image[] = new Array();
      images = this.dogService.getDogImages(json.message);
      this.filterDogImages = this.filterDogImages.concat(images);
    });
  }

  addFilter(): void{

    let breed:string = this.currentDog.breed;

    if (
      !this.filters.find(function(element){
        return ( breed == element)
      })

    ){
      this.filters.push(this.currentDog.breed);
      this.loadDogImage(breed);
    }

  }

  filter():void {
    this.dogImages = this.filterDogImages;
  }

  removeFilter(breed:string): void{


    this.dogImages = this.dogImages.filter(function( obj ) {
      return !obj.url.includes(breed);
    });
    this.filters = this.filters.filter(function( obj ) {
      return !obj.includes(breed);
    });
    this.filterDogImages = this.dogImages;

  }

}
