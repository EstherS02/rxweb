import {  email,prop,} from "@rxweb/reactive-form-validators"

export class User {

	@email() 
	email: string;
	@email({conditionalExpression:(x,y) =>{ return  x.email == "abc@gmail.com" } }) 
	recoveryEmailAddress: string;
}