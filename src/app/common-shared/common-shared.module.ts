import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbProgressBarModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbToggleModule, NbUserModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { TableGenericComponent } from './table-generic/table-generic.component';
import { ResponseModalComponent } from './response-modal/response-modal.component';
import { ActionPopupComponent } from './action-popup/action-popup.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';


@NgModule({
  imports: [
    CommonModule,
    //Nb modules
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbToggleModule,
    NbAccordionModule,
    MaterialModule,
    NbUserModule,
    NbProgressBarModule,
    //materialmodules
    MaterialModule,
    NgxMatSelectSearchModule,
    //forms modules
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TableGenericComponent,
    ResponseModalComponent,
    ActionPopupComponent,
    MultiSelectComponent
  ],
  exports: [
    //Nb modules
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbToggleModule,
    NbAccordionModule,
    MaterialModule,
    NbUserModule,
    NbProgressBarModule,
    //materialmodules
    MaterialModule,
    NgxMatSelectSearchModule,
    //forms modules
    FormsModule,
    ReactiveFormsModule,
    //components
    TableGenericComponent,
    ResponseModalComponent,
    ActionPopupComponent,
    MultiSelectComponent
  ]
})
export class CommonSharedModule { }
