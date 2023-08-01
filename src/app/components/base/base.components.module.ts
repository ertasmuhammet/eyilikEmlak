import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";

import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent
    ]
})

export class BaseComponentModule {}