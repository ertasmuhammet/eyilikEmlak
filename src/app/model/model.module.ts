import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http"
import { AdvertRepository, } from "./advert.repository";
import { RestService } from "./rest.service";
import { AdvertModel } from "./advert.model";

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