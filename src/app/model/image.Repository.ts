import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";

@Injectable()

export class ImageRepository{

    constructor(public _restService: RestService) {}

    addImages(){
        
    }
}