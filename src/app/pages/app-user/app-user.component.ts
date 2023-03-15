import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppUserService } from './app-user.service';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {

  public datatrigger: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = ['name', 'lastName', 'Email', 'Mobile Number'];
  searchColumns: any[] = [{ name: 'name', canShow: true }, { name: 'lastName', canShow: true }, { name: 'email', canShow: true }, { name: 'mobileNumber', canShow: true }];
  definedColumns = ['name', 'lastName', 'email', 'mobileNumber'];
  postPerPage: number = 10;
  pageNumber: number = 1;
  count: number = 4;
  data: any[] = [];
  filters: any[] = [];


  constructor(private userService: AppUserService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    this.userService.getUserPage(this.postPerPage, this.pageNumber, this.filters)
      .toPromise()
      .then((datas: any) => {
        this.data = datas?.data;
        this.count = datas?.recordsTotal;
      });
  }

  add = () => {
    this.loadData();
  }

  onPaginate = (pageObject) => {
    this.postPerPage = pageObject.postPerPage;
    this.pageNumber = pageObject.pageNumber;
    this.loadData();
  };
  edit = (rowId: any) => {
  };
  onSearch = (filters: any[]) => {
    this.filters = filters;
    this.loadData();
  };

  deleteConfirm = (rowId: any) => {

  }

}
