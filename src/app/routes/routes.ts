import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AdminComponent } from "../admin/admin.component";
import { AdminModule } from "../admin/admin.module";
import { AdvertComponent } from "../components/advert/advert.component";
import { AdvertDetailsPage } from "../Pages/advert-details/advert-details.page";
import { AdvertPage } from "../Pages/advert/advert.page";
import { HomePageComponent } from "../Pages/home/home.page";



export const routes: Routes = [
    {path: "", component: HomePageComponent},
    {path: "home", component: HomePageComponent},
    {path: "advert", component: AdvertPage},
    {path: "advertDetails", component: AdvertDetailsPage},
    {path: "advertDetails/:id", component: AdvertDetailsPage},
    {path: "admin" , loadChildren : () => AdminModule},
    {path: "**" , redirectTo: "/home"}
]