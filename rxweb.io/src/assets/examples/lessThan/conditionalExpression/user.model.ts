import {  lessThan,prop,} from "@rxweb/reactive-form-validators"

export class User {

	@prop()
	obtainedMarks: number;
	@lessThan({fieldName:'obtainedMarks'  ,conditionalExpression:x => x.obtainedMarks < 35  }) 
	passingMarks: number;
}