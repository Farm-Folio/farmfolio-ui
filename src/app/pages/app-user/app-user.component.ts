import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { AppConfiguration } from '../../common-shared/app-configuration';
import { CommonHttpService } from '../../common-shared/common-http-service';
import { ResponseModalService } from '../../common-shared/response-modal/response-modal.service';
import { UserAddComponent } from './user-add/user-add.component';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'Email', 'Mobile Number'];
  searchColumns: any[] = [{ name: 'name', canShow: true }, { name: 'lastName', canShow: true }, { name: 'email', canShow: true }, { name: 'mobileNumber', canShow: true }];
  definedColumns = ['name', 'lastName', 'email', 'mobileNumber'];
  postPerPage: number = 10;
  pageNumber: number = 1;
  count: number = 4;
  users: any = [];
  filters: any[] = [];
  matDialogRef: MatDialogRef<any>;


  constructor(
    private httpService: CommonHttpService,
    private responseModalService: ResponseModalService,
    private api: AppConfiguration) { }

  ngOnInit() {
    this.loadData();
  }

  openModal = (Component: any, data: any) => {
    this.matDialogRef = this.responseModalService.openModalSM(Component, data);
    this.matDialogRef.afterClosed().subscribe((res) => {
      this.loadData();
    });
  };

  loadData = () => {
    let data = {
      "draw": Math.floor((Math.random() * 100) + 1),
      "filter": this.filters,
      "pageNo": this.pageNumber,
      "pageSize": this.postPerPage
    }
    this.httpService.post(this.api.user.page, data)
      .toPromise()
      .then((datas: any) => {
        this.users = datas?.data;
        this.count = datas?.recordsTotal;
      });
  }

  add = () => {
    this.loadData();
    this.openModal(UserAddComponent, null);
  }

  onPaginate = (pageObject) => {
    this.postPerPage = pageObject.postPerPage;
    this.pageNumber = pageObject.pageNumber;
    this.loadData();
  };
  edit = (rowId: any) => {
    this.openModal(UserAddComponent, rowId);
  };
  onSearch = (filters: any[]) => {
    this.filters = filters;
    this.loadData();
  };

  deleteConfirm = (rowId: any) => {

  }

}
