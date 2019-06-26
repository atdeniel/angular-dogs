import { Breed } from '../models/Breed'


export class Dog{
    id:number;
    breed:string;
    subreed:Breed[];

    constructor() { 
        this.id=0;
        this.breed="";
    }
}