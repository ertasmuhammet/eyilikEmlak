import { Injectable } from "@angular/core";


@Injectable()
export class AdvertModel{
   
        public id: number;
        public name: string;
        public location: string;
        public imageUrl: string;
        public price: number;
        public description: string;
        public images: string[];
        public category: string
   
}