---
title: upperCase 
description: Upper Case validation validator will allow only uppercase to be entered, If user tries to enter any string except uppercase then the property will become invalid. 
author: rxcontributortwo

---
# When to use
Let’s assume that you are creating a Location form, which contains fields like CountryName, StateName, CityName and you want the user to must enter string only in the Upper case. Here depending upon the requirement these scenarios may arise.
1. Apply upperCase validation in the CountryName without any condition.
2.	Apply upperCase validation based on matched condition in the form, like if the CountryName is `INDIA`, then only the upperCase validation will be applied to StateName field.
3.	Adding Custom Message on CityName Field.
4.	Apply dynamic validation, If the validation will be changed based on some criteria in the application.

Let’s see how upperCase validator fulfil the need.

# Basic UpperCase Validation
We need to create a FormGroup in the component. To achieve this, we need to add RxFormBuilder. The RxFormBuilder is an injectable service that is provided with the RxReactiveFormsModule. Inject this dependency by adding it to the component constructor.

[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\add\upper-case-add.component.ts)]
***

Next, we need to write html code.
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\add\upper-case-add.component.html)]

<app-upperCase-add-validator></app-upperCase-add-validator>
 
# MessageConfig 
Below options are not mandatory to use in the `RxwebValidators.upperCase()` validator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalexpressions) | Uppercase validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |

## conditionalExpression 
Type :  `Function`  |  `string` 

Uppercase validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionmodel)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\conditionalExpression\location.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\conditionalExpression\upper-case-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\conditionalExpression\upper-case-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=upperCase validator with conditionalExpression)]
<app-upperCase-conditionalExpression-validator></app-upperCase-conditionalExpression-validator>
 
## message 
Type :  `string` 

To override the global configuration message and show the custom message on particular control property.
 

[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\message\location.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\message\upper-case-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\message\upper-case-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=upperCase validator with custom message)]
<app-upperCase-message-validator></app-upperCase-message-validator>

# Complete upperCase Example
[!TabGroup]
# [Example](#tab\completeexample)
<app-upperCase-complete-validator></app-upperCase-complete-validator>
# [Model](#tab\completemodel)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\complete\location.model.ts)]
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\complete\upper-case-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\reactive-form-validators\validators\upperCase\complete\upper-case-complete.component.html)]
***