import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators 
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-compare-add-validator',
    templateUrl: './compare-add.component.html'
})
export class CompareAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
										password:['',], 
													confirmPassword:['', RxwebValidators.compare({fieldName:'password' })], 
								});
    }
}