import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertModel } from 'src/app/model/advert.model';
import { AdvertRepository } from 'src/app/model/advert.repository';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent {
  public id: number;
  public images = new Array();
  public advert = new AdvertModel();

  constructor(public _advertRepository: AdvertRepository, public _activeRoute: ActivatedRoute) {

    this.id = parseInt(this._activeRoute.snapshot.paramMap.get("id"))
    this.advert = this._advertRepository.getAdvert(this.id)
  }

  activeted(item: string): boolean {
    if (item == this.advert.images[0]) {
      return true
    }
    else {
      return false
    }
  }


}
