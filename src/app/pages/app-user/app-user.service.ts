import { Injectable } from '@angular/core';
import { AppConfiguration } from '../../common-shared/app-configuration';
import { CommonHttpService } from '../../common-shared/common-http-service';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private appConfiguration: AppConfiguration, private commonHttpService: CommonHttpService) { }

  getUserPage = (postPerPage: any, pageNumber: number, filter: any[]) => {
    let data = {
      "draw": this.randomNumber(),
      "filter": filter,
      "pageNo": pageNumber,
      "pageSize": postPerPage
    }
    return this.commonHttpService.httpPost(this.appConfiguration.user.page, data);
  }

  randomNumber = () => {
    return Math.floor((Math.random() * 100) + 1);
  }

}
