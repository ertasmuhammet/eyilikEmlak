import { Component } from '@angular/core';
import { AdvertModel } from 'src/app/model/advert.model';
import { AdvertRepository } from 'src/app/model/advert.repository';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent {

constructor(public _advertRepository: AdvertRepository) {}  

get Adverts(): AdvertModel[]{
 return this._advertRepository.getAdverts()
}

}
