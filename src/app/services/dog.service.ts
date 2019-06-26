import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dog } from '../models/Dog'
import { Answer } from '../models/Answer'
import { Image } from '../models/Image'
import { Observable } from 'rxjs';
import { Key } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogsUrl:string = 'https://dog.ceo/api/breeds/list/all';
  breedsUrl:string = 'https://dog.ceo/api/breed/{}/images';

  constructor(private http:HttpClient) { }

  callAllAPI():Observable<Answer>{
    return this.http.get<Answer>(this.dogsUrl);
  }
  callByBreedAPI(breed):Observable<Answer>{
    return this.http.get<Answer>(this.breedsUrl.replace("{}",breed));
  }

 /* call2(){
    this.http.get(this.dogsUrl).subscribe(apiDate => (this.currentEuroRates = apiDate) )
  }
  */
  
  getDog(json):Dog[] {

    let dogs:Dog[] = [];
    let dog:Dog;
    let idDog = 1;

    for (let dg in json){
        dog=new Dog();
        dog.id=idDog;
        dog.breed = dg;
        dog.subreed = json[dg];
        idDog++;
        dogs.push(dog);
    }

    return dogs;

  }

  getDogImages(json):Image[] {

    let images:Image[] = [];
    let image:Image;
    
    for (let dg in json){
        image = new Image();
        image.url=json[dg];
        images.push(image);
    }

    return images;

  }
  
}
