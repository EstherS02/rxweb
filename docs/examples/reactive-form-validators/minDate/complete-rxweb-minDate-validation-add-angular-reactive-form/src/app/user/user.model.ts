import {  minDate, prop  } from "@rxweb/reactive-form-validators"
export class user {

	@prop()
	userName: string;

	@minDate({value:2018,07,30  ,conditionalExpressions:x => x.userName == "John" }) 
	birthDate: Date;

	@minDate({value:2018,07,30  ,message:'{{0}} exceeds the Minimum Date Limit' }) 
	registrationDate: Date;

}