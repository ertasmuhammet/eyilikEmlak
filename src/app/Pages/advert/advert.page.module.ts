import { NgModule } from "@angular/core";
import { BaseComponentModule } from "src/app/components/base/base.components.module";
import { AdvertComponentModule } from "src/app/components/advert/advert.component.module";
import { AdvertPage } from "./advert.page";

@NgModule({
    declarations: [
        AdvertPage
    ],
    imports: [
        BaseComponentModule,
        AdvertComponentModule
    ]
})

export class AdvertPageModule{}