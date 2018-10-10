---
title: required 
description: Required validation validator will check that value is entered or not in the property, If user not enter any value then the property will become invalid. 
author: rxcontributortwo
---
# When to use
Let’s assume that you are creating a UserInfo form, which contains fields like FirstName, LastName, Username and you want the user to must enter anything in that field. That field can not be empty. Here depending upon the requirement these scenarios may arise.
1. Make the FirstName a required field without any condition.
2.	Apply required validation based on matched condition in the form, like if the FirstName is `John`, then only the required validation will be applied to LastName field.
3.	Adding Custom Message on Username Field.
4.	Apply dynamic validation, If the validation will be changed based on some criteria in the application.

Let’s see how required validator fulfil the need.

# Basic Required Validation
We need to create a FormGroup in the component. To achieve this, we need to add RxFormBuilder. The RxFormBuilder is an injectable service that is provided with the RxReactiveFormsModule. Inject this dependency by adding it to the component constructor.

[!code-typescript[](\assets\reactive-form-validators\validators\required\add\required-add.component.ts)]
***

Next, we need to write html code.
[!code-typescript[](\assets\reactive-form-validators\validators\required\add\required-add.component.html)]

<app-required-add-validator></app-required-add-validator>
 
# RequiredConfig 
Below options are not mandatory to use in the `RxwebValidators.required()` validator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalexpressions) | Required validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |

## conditionalExpression 
Type :  `Function`  |  `string` 

Required validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

 [!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionModel)
[!code-typescript[](\assets\reactive-form-validators\validators\required\conditionalExpression\user.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\required\conditionalExpression\required-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\required\conditionalExpression\required-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=required validator with conditionalExpression)]
<app-required-conditionalExpression-validator></app-required-conditionalExpression-validator>
 
## message 
Type :  `string` 

To override the global configuration message and show the custom message on particular control property.

[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\reactive-form-validators\validators\required\message\user.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\required\message\required-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\required\message\required-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=required validator with custom message)]
<app-required-message-validator></app-required-message-validator>

# Complete required Example
[!TabGroup]
# [Example](#tab\completeExample)
<app-required-complete-validator></app-required-complete-validator>
# [Model](#tab\completeModel)
[!code-typescript[](\assets\reactive-form-validators\validators\required\complete\user.model.ts)]
# [Component](#tab\completeComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\required\complete\required-complete.component.ts)]
# [Html](#tab\completeHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\required\complete\required-complete.component.html)]
***