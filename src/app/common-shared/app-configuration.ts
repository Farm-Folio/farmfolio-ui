import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AppConfiguration {

  baseUrl = environment.baseUrl;

  //user
  user = {
    page: 'user/page',
    save: '',
    delete: '',
    byId: 'user/by-id?id=',
    getAll: ''
  }

}
