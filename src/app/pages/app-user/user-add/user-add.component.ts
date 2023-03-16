import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfiguration } from '../../../common-shared/app-configuration';
import { CommonHttpService } from '../../../common-shared/common-http-service';
import { CommonToastrService } from '../../../common-shared/common-toastr/common-toastr.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  @Output() saveEvent = new EventEmitter();
  isSubmit: boolean;
  userForm: FormGroup;
  id: string;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public datepipe: DatePipe,
    private commonHttpService: CommonHttpService,
    private api: AppConfiguration,
    private commonToastrService: CommonToastrService
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      mobileNumber: [null, Validators.required],
      latitude: [null, Validators.required],
      longitude: [null, Validators.required],
      type: [null, Validators.required]
    });
    if (this.data) {
      this.getValueById(this.data);
    }
  }

  getValueById(id: string) {
    this.commonHttpService.get(this.api.user.byId + id).toPromise().then((data: any) => {
      this.id = data?.id;
      this.userForm = this.formBuilder.group({
        name: [data?.name],
        from: [new Date(data?.from)],
        to: [new Date(data?.to)],
      });
    })
  }
  submitForm = () => {
    this.isSubmit = true;
    this.saveEvent.emit(true);
    let seasonData = this.userForm?.value;
    if (this.id) {
      seasonData.id = this.id;
    }
    this.sendForm(seasonData);
  };

  sendForm = (data) => {
    if (!this.userForm.invalid) {
      this.commonHttpService.post(this.api.user.save, data).toPromise().then((data: any) => {
        if (data != null) {
          this.cancel();
          this.commonToastrService.showSuccess(
            'Your information has been saved successfully!', 'Season Added');
        }
      });
    }
  };
  get basic() {
    return this.userForm.controls;
  }

  cancel = () => {
    this.dialogRef.close(true);
  }

}
