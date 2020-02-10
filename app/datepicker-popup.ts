import {Component} from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html'
})
export class NgbdDatepickerPopup {
  public formControl: FormControl = new FormControl(null);
}
