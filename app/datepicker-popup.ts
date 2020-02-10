import {Component} from '@angular/core';
import { FormControl, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html'
})
export class NgbdDatepickerPopup {
  public formControl: FormControl = new FormControl(null);
}
