import { NgModule } from "@angular/core";
import { NbAccordionModule, NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbProgressBarModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbToggleModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from "../@theme/theme.module";


@NgModule({
  imports: [
    //Nb modules
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbToggleModule,
    NbAccordionModule,
    NbUserModule,
    NbProgressBarModule,
    NbCardModule,
    NbButtonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,

  ],
  declarations: [],
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
    NbUserModule,
    NbProgressBarModule,
    NbCardModule,
    NbButtonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
  ],
})
export class TemplateModule { }
