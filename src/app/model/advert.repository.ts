import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdvertModel } from "./advert.model";
import { RestService } from "../services/rest.service";

@Injectable()

export class AdvertRepository {

    public adverts: AdvertModel[] = [];

    constructor(public _restService: RestService) {
        this._restService.getAdvert().subscribe(adverts => this.adverts = adverts)
    }

    addAdvert(advert: AdvertModel): Observable<AdvertModel> {
        return this._restService.AddAdvert(advert);
    }

    deleteAdvert(advert: AdvertModel)  {
        this._restService.deleteAdvert(advert).subscribe(res => {
            this.adverts.splice(this.adverts.findIndex(res => res.id==advert.id),1)
        })
        
    }

    getAdverts(): AdvertModel[] {
        return this.adverts
    }

    getAdvert(id: number): AdvertModel {
        return this.adverts.find(advert => advert.id == id)
    }

    getAdvertByCategory(category: string) : AdvertModel[]{
        if (category && category != "all") {
            return this.adverts.filter(adverts => adverts.category == category)
        }
        else{
            return this.getAdverts();
            
        }
        
    }

    updateAdvert(advert: AdvertModel)  {
        this._restService.updateAdvert(advert).subscribe(res => {
            this.adverts.splice(this.adverts.findIndex(res => res.id == advert.id),1,advert)
        })
    }

    SaveAdvert(advert : AdvertModel) {
        if (advert.id==null || advert.id==0) {
             this.addAdvert(advert).subscribe(res=>{
                this.adverts.push(advert)
             })
        }
        else{
            this.updateAdvert(advert)
        }
    }
}