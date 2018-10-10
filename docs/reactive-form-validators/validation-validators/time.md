---
title: time 
description: time validation validator will allow only time format to be entered, If user tries to enter any string except json then the property will become invalid. 
author: rxcontributorone

---
# When to use
Let’s assume that you are creating a AttendanceDetail form, which contains field of EntryPlace,EntryTime,TotalTimeOut and Exit Time you want the user to enter valid time. Here depending upon the requirement these scenarios may arise.	
1.	Allow time in EntryTime without seconds.
2.	Allowing seconds in TotalTimeOut.
3.	Apply time validation based on matched condition in the form, like if the EntryPlace is ‘Lunch room’ then the EntryTime value should be in proper format of time .
4.	Adding Custom Message on exitTime Field.
5.	Apply dynamic validation, If the validation will be changed based on some criteria in the application.

Let’s see how time validator fulfil the need.

# Basic time Validation 
We need to create a FormGroup in the component. To achieve this we need to add RxFormBuilder. The RxFormBuilder is an injectable service that is provided with the RxReactiveFormsModule. Inject this dependency by adding it to the component constructor.
Here we have covered Add and Edit form operations. 

[!code-typescript[](\assets\reactive-form-validators\validators\time\add\time-add.component.ts)]

***

Next, we need to write html code.
[!code-typescript[](\assets\reactive-form-validators\validators\time\add\time-add.component.html)]

<app-time-add-validator></app-time-add-validator>

# TimeConfig 
Below options are not mandatory to use in the `RxwebValidators.time()` validator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalexpressions) | time validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[allowSeconds](#allowseconds) | If you are allowed seconds in time format then you need to put this as true. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |

## conditionalExpression 
Type :  `Function`  |  `string` 
time validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionmodel)
[!code-typescript[](\assets\reactive-form-validators\validators\time\conditionalExpression\attandance-detail.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\time\conditionalExpression\time-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\time\conditionalExpression\time-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=time validator with conditionalExpression)]
<app-time-conditionalExpression-validator></app-time-conditionalExpression-validator>

## allowSeconds 
Type :  `boolean` 
If you are allowed seconds in time format then you need to put this as true.

[!TabGroup(?showHideCondition="allowSeconds")]
# [Model](#tab\allowSecondsmodel)
[!code-typescript[](\assets\reactive-form-validators\validators\time\allowSeconds\attandance-detail.model.ts)]
# [Component](#tab\allowSecondsComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\time\allowSeconds\time-allow-seconds.component.ts)]
# [Html](#tab\allowSecondsHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\time\allowSeconds\time-allow-seconds.component.html)]
***

[!example(?type=section&clickEventCode="allowSeconds=!allowSeconds"&title=time validator with allowSeconds)]
<app-time-allowSeconds-validator></app-time-allowSeconds-validator>

## message 
Type :  `string` 
To override the global configuration message and show the custom message on particular control property.

[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\reactive-form-validators\validators\time\message\attandance-detail.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\time\message\time-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\time\message\time-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=time validator with custom message)]
<app-time-message-validator></app-time-message-validator>

# Complete time Example
[!TabGroup]
# [Example](#tab\completeexample)
<app-time-complete-validator></app-time-complete-validator>
# [Model](#tab\completemodel)
[!code-typescript[](\assets\reactive-form-validators\validators\time\complete\attandance-detail.model.ts)]
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\reactive-form-validators\validators\time\complete\time-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\reactive-form-validators\validators\time\complete\time-complete.component.html)]
***