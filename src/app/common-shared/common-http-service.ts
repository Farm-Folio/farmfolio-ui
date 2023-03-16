import { Injectable, NgZone, Injector } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { AppConfiguration } from "./app-configuration";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { CommonToastrService } from "./common-toastr/common-toastr.service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-auth-token": localStorage.getItem('token') != null ? localStorage.getItem('token') : ''
  }),
};
const headers = new HttpHeaders().set(
  "Content-Type",
  "text/plain; charset=utf-8"
);
@Injectable({
  providedIn: "root",
})
export class CommonHttpService {
  baseUrl: string = "";
  constructor(
    private httpClient: HttpClient,
    private appConfiguration: AppConfiguration,
    private commonToastrService: CommonToastrService
  ) {
    this.baseUrl = this.appConfiguration.baseUrl;
  }

  get = (url: string) => {
    return this.httpClient.get(this.baseUrl + url, httpOptions).pipe(
      catchError((error) => {
        this.errorHandler(error);
        return throwError(error);
      })
    );
  };

  post = (url: string, data: any) => {
    let header = new HttpHeaders();
    header.set("Access-Control-Allow-Origin", "*");
    return this.httpClient
      .post<any>(this.baseUrl + url, data, httpOptions)
      .pipe(
        catchError((error) => {
          this.errorHandler(error);
          return throwError(error);
        })
      );
  };

  delete = (url: string) => {
    return this.httpClient
      .delete(this.baseUrl + url, httpOptions)
      .pipe(
        catchError((error) => {
          this.errorHandler(error);
          return throwError(error);
        })
      );
  };

  pageObj = (post: any, page: any, filter: any) => {
    return {
      "draw": Math.floor((Math.random() * 100) + 1),
      "filter": filter,
      "pageNo": page,
      "pageSize": post
    }

  }

  errorHandler = (error: any) => {
    if (error?.error?.message) {
      this.commonToastrService.showFailure(error?.error?.message, 'Error');
    }
    else {
      this.commonToastrService.showFailure("Error", "Something went wrong");
    }
  }

}
