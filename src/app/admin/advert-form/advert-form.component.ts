import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertModel } from 'src/app/model/advert.model';
import { AdvertRepository } from 'src/app/model/advert.repository';

@Component({
  selector: 'app-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.css']
})
export class AdvertFormComponent {

  public imageUrl = new Array();
  public multipleImages: File[] = [];
  public formData = new FormData()
  public edit: boolean = false;
  public adverts = new AdvertModel();
  public index : number ; 



  constructor(public _advertRepository: AdvertRepository, public _httpClient: HttpClient, public _activeRoute: ActivatedRoute, public _router: Router) {
    if (this._activeRoute.snapshot.params['mode'] == "edit") {
      this.edit = true;
      this.adverts = this._advertRepository.getAdvert(this._activeRoute.snapshot.params['id'])
    }
  }

  SaveAdvert() {
    if (this.adverts.images) {
      for (let index = 0; index < this.imageUrl.length; index++) {
        this.adverts.images.push(this.imageUrl[index])
      }
    }
    else {
      this.adverts.images = this.imageUrl;
    }

    this._advertRepository.SaveAdvert(this.adverts)

    this.addImages(this.formData)

    this._router.navigateByUrl("/admin/main/adverts/all")
  }

  onFileSelected(event) {

    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }

    for (let img of this.multipleImages) {
      this.formData.append('files', img)
      this.imageUrl.push(img.name)
    }
  }

  addImages(formData: FormData) {

    this._httpClient.post<any>("http://localhost:3500/files", formData).subscribe()
  }

  deleteImages(image: string){
    this.index = this.adverts.images.indexOf(image)
    this.adverts.images.splice(this.index,1)
  }

}
