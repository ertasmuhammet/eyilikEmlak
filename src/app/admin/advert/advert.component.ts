import { Component, Input, LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { AdvertModel } from 'src/app/model/advert.model';
import { AdvertRepository } from 'src/app/model/advert.repository';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent {

  public adverts: AdvertModel[] = [];

  @Input() selectedCategory: string;

  constructor(public _advertRepository: AdvertRepository, public _activatedRoute: ActivatedRoute) {
    
   

  }

  get Advert(): AdvertModel[] {
    if (this._activatedRoute.snapshot.params['category'] == null) {
      this.selectedCategory = "all"
    }
    else{
      this.selectedCategory = this._activatedRoute.snapshot.params['category'];
    }
    this.adverts =  this._advertRepository.getAdvertByCategory(this.selectedCategory);
    return this.adverts;
  }

  deleteAdvert(advert: AdvertModel) {
    this._advertRepository.deleteAdvert(advert)
  }

}
