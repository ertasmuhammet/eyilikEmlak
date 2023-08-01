import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./home.page";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
    ]

})

export class HomePageModule{

}