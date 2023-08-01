import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdvertFormComponent } from "./advert-form/advert-form.component";
import { AdvertComponent } from "./advert/advert.component";

const routes : Routes = [
    {path : "main" , component : AdminComponent,
    children : [
        {path: "adverts/:category" , component : AdvertComponent},
        {path: "adverts" , component : AdvertComponent},
        {path: "advert/:mode/:id" , component : AdvertFormComponent },
        {path: "advert/:mode" , component : AdvertFormComponent }
        
    ]}
]

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class AdminRoutingModule {}