import { NbMenuService } from '@nebular/theme';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  public datatrigger: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = ['name', 'lastName', 'gender', 'Email', 'village', 'actions'];
  searchColumns: any[] = [{ name: 'name', canShow: true }, { name: 'lastName', canShow: true }, { name: 'gender', canShow: true }, { name: 'email', canShow: true }, { name: "village.name", canShow: true }];
  definedColumns = ['name', 'lastName', 'gender', 'email', 'village'];
  postPerPage: number = 10;
  pageNumber: number = 1;
  count: number = 0;
  farmers: any[] = [];
  filters: any[] = [];
  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
