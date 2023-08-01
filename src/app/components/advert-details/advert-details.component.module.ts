import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdvertDetailsComponent } from "./advert-details.component";

@NgModule({
    declarations: [
        AdvertDetailsComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        AdvertDetailsComponent
    ]
})

export class AdvertDetailsComponentModule{}