import {  password,prop, } from "@rxweb/reactive-form-validators"

export class LoginInfo {

	@password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true} }) 
	newPassword: string;

	@password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:'Password is not valid' }) 
	oldPassword: string;

}
