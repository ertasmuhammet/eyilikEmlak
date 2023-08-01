import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BaseComponentModule } from "../base/base.components.module";
import { AdvertComponent } from "./advert.component";

@NgModule({
    declarations: [
        AdvertComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        BaseComponentModule
        
    ],
    exports: [
        AdvertComponent
    ]
})

export class AdvertComponentModule{}