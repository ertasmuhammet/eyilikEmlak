import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './Pages/home/home.page.module';
import { AdvertPageModule } from './Pages/advert/advert.page.module';
import { AdvertDetailsPageModule } from './Pages/advert-details/advert-details.page.module';
import { RouterModule } from '@angular/router';
import { ModelModule } from './model/model.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ModelModule,
    HomePageModule,
    AdvertPageModule,
    AdvertDetailsPageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
