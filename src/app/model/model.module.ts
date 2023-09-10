import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http"
import { AdvertRepository, } from "./advert.repository";
import { AdvertModel } from "./advert.model";
import { RestService } from "../services/rest.service";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AdvertRepository,
        RestService,
        AdvertModel
    ]
})

export class ModelModule{

}