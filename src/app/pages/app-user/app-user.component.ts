import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { ResponseModalService } from '../../common-shared/response-modal/response-modal.service';
import { AppUserService } from './app-user.service';
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


  constructor(private userService: AppUserService, private responseModalService: ResponseModalService) { }

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
    this.userService.getUserPage(this.postPerPage, this.pageNumber, this.filters)
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
