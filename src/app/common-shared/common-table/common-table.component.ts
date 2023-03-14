import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActionPopupComponent } from '../action-popup/action-popup.component';
import { ResponseModalService } from '../response-modal/response-modal.service';
import { Page } from '../table-generic/Page';
import { TableGenericComponent } from '../table-generic/table-generic.component';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  matDialogRef: MatDialogRef<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() displayedColumns: string[];
  @Input() definedColumns: string[];
  @Input() searchColumns: any[];
  @Input() data;
  @Input() isAction: boolean = true;
  @Input() isDetail: boolean = false;
  @Input() isDelete: boolean = true;
  @Input() canShowSearch: boolean = true;
  @Input() isAllActions: boolean = false;
  @Input() showReset: boolean = true;
  @Input() private datatrigger: EventEmitter<any>;
  @Output() editRow = new EventEmitter();
  @Output() detailRow = new EventEmitter();
  @Output() deleteRow = new EventEmitter();
  @Output() paginate = new EventEmitter();
  @Output() searchEvent = new EventEmitter();
  @Input() count: number;
  @Input() isPagination: boolean = true;

  rows = new MatTableDataSource([]);
  page = new Page();
  postPerPage: number = 10;
  pageNumber: number = 1;
  deleteObject: any;
  filters: any[] = [];
  panelOpenState: boolean = false;

  constructor(private responseModalService: ResponseModalService) { }

  ngOnInit() {
    if (this.datatrigger) {
      this.datatrigger.subscribe((data) => {

      });
    }
  }



  onPaginate = (pageEvent: PageEvent) => {
    this.postPerPage = +pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    const pageObject = {
      postPerPage: this.postPerPage,
      pageNumber: this.pageNumber,
    };
    this.paginate.emit(pageObject);
  };
  edit = (row: any) => {
    this.editRow.emit(row);
  };
  delete = (template: TemplateRef<any>, row: any) => {
    const data = {
      title: "Delete",
      description: "Are You Sure?",
    };
    this.matDialogRef = this.responseModalService.openModalSM(
      ActionPopupComponent,
      data
    );
    this.matDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.deleteRow.emit(row);
      }
    });
  };

  search = ($event: any) => {
    const filter = {
      key: $event?.target?.id,
      operation: ":",
      orPredicate: false,
      value: $event?.target?.value,
    };
    const inputElement = document.getElementById($event?.target?.id);
    const objIndex = this.filters.findIndex(
      (obj) => obj.key === $event?.target?.id
    );
    if (objIndex !== -1) {
      this.filters[objIndex] = filter;
    } else {
      this.filters.push(filter);
    }
    this.searchEvent.emit(this.filters);
  };
  clearFilter() {
    this.filters = [];
    this.searchEvent.emit(this.filters);
  }
  detail = (row: any) => {
    this.detailRow.emit(row);
  };

  reset = () => {
    $('.inputs').val(null);
  }

}
