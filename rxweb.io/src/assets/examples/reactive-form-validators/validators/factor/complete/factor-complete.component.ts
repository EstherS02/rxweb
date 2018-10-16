import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators 
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-factor-complete-validator',
    templateUrl: './factor-complete.component.html'
})
export class FactorCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
										firstNumber:['',], 
													secondNumber:['', RxwebValidators.factor({fieldName:"firstNumber"  ,conditionalExpression:(x,y) =>x.firstNumber == 25  })], 
													thirdNumber:['', RxwebValidators.factor({fieldName:"firstNumber"  ,conditionalExpression:'x => x.firstNumber == 25' })], 
													fourthNumber:['', RxwebValidators.factor({dividend:50  ,message:'{{0}} is not a factor of 50' })], 
								});
    }
}