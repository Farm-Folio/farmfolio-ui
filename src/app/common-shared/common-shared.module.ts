import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { ResponseModalComponent } from './response-modal/response-modal.component';
import { ActionPopupComponent } from './action-popup/action-popup.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ResponseModalService } from './response-modal/response-modal.service';
import { TemplateModule } from './template.module';
import { CommonTableComponent } from './common-table/common-table.component';


@NgModule({
  imports: [
    //nebular modules
    TemplateModule,
    CommonModule,
    //materialmodules
    MaterialModule,
    NgxMatSelectSearchModule,
    //forms modules
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ResponseModalComponent,
    ActionPopupComponent,
    MultiSelectComponent,
    CommonTableComponent,
  ],
  exports: [
    //nebular modules
    TemplateModule,
    //materialmodules
    MaterialModule,
    NgxMatSelectSearchModule,

    //forms modules
    FormsModule,
    ReactiveFormsModule,
    //components
    ResponseModalComponent,
    ActionPopupComponent,
    MultiSelectComponent,
    CommonTableComponent,
  ],
  entryComponents: [ActionPopupComponent],
  providers: [ResponseModalService],
})
export class CommonSharedModule { }
