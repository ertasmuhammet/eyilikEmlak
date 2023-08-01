import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertComponent } from './advert/advert.component';
import { AdvertFormComponent } from './advert-form/advert-form.component';
import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { AdvertModel } from '../model/advert.model';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponentModule } from '../components/base/base.components.module';




@NgModule({
  declarations: [
   AdvertComponent,
   AdvertFormComponent,
   CategoryComponent,
   AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    BaseComponentModule
  ],
  providers: [
   AdvertModel
  ]
})
export class AdminModule { }
