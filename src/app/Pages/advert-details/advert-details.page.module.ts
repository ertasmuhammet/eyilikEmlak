import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdvertDetailsComponentModule } from "src/app/components/advert-details/advert-details.component.module";
import { BaseComponentModule } from "src/app/components/base/base.components.module";
import { AdvertDetailsPage } from "./advert-details.page";

@NgModule({
    declarations: [
        AdvertDetailsPage
    ],
    imports: [
        FormsModule,
        CommonModule,
        AdvertDetailsComponentModule,
        BaseComponentModule
    ]
})

export class AdvertDetailsPageModule{}