import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdvertModel } from "./advert.model";

@Injectable()

export class RestService {

    public baseAdressDB: string = "http://localhost:3000/"
    public baseAddressImage: string = "http://localhost:3500/"

    public adverts: AdvertModel[] ;

    constructor(public _http: HttpClient) {}

    getAdvert(): Observable<AdvertModel[]> {
        return this._http.get<AdvertModel[]>(this.baseAdressDB + "adverts")
    }

    AddAdvert(advert: AdvertModel): Observable<AdvertModel> {
        return this._http.post<AdvertModel>(this.baseAdressDB + "adverts", advert)
    }

    AddImages(formData: FormData) {
        this._http.post<any>(this.baseAddressImage + "files", formData).subscribe()
    }

    updateAdvert(advert: AdvertModel): Observable<AdvertModel> {
        return this._http.put<AdvertModel>(this.baseAdressDB + "adverts/" + advert.id,advert)
    }

    deleteAdvert(advert: AdvertModel) : Observable<AdvertModel> {
        return this._http.delete<AdvertModel>(this.baseAdressDB + "adverts/" + advert.id)
    }

}