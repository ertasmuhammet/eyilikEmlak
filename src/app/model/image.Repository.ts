import { Injectable } from "@angular/core";
import { RestService } from "../services/rest.service";

@Injectable()

export class ImageRepository{

    constructor(public _restService: RestService) {}

    addImages(){
        
    }
}