
---
title: range 
description: Range validation validator will allow only in specify range will be entered, If EmployeeInfo tries to enter any value which exceed the range then the property will become invalid.
author: rxcontributorone

---
# When to use
Let’s assume that you are creating a employeeInfo form, which contains field of employeeAge,employeeExperience,salary and you want the user to enter value in a specified range. Here depending upon the requirement these scenarios may arise.
1. Adding value which you want to restrict number in the property. The minimum number is 18 and maximum number is 60. 
2. Apply range validation based on matched condition in the form, like if the age is greater than ‘25’ then the employeeExperience value should be between 2 to 20.
3. Adding Custom Message on Salary Field.
4. Apply dynamic validation, the validation will be changed based on some criteria in the application.

Let’s see how range validator fulfil the need.

# Basic range Validation
We need to create a FormGroup in the component. To achieve this we need to add RxFormBuilder. The RxFormBuilder is an injectable service that is provided with the RxReactiveFormsModule. Inject this dependency by adding it to the component constructor.
Here we have covered Add and Edit form operations.

[!code-typescript[](\assets\reactive-form-validators\validators\range\add\range-add.component.ts)]
***

Next, we need to write html code.
[!code-typescript[](\assets\reactive-form-validators\validators\range\add\range-add.component.html)]

<app-range-add-validator></app-range-add-validator>

# RangeConfig 
conditionalExpression and message options are not mandatory to use in the `RxwebValidators.range()` validator but the minimum number and maximum number is mandatory parameter. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalexpressions) | Range validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |
|[minimumNumber](#minimumnumber) | Minimum number is for define a minimum number of range |
|[maximumNumber](#maximumnumber) | Maximum number is for define a maximum number of range |

## conditionalExpression 
Type :  `Function`  |  `string`
Range validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionmodel)
[!code-typescript[](\assets\reactive-form-validators\validators\range\conditionalExpression\employee-info.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\range\conditionalExpression\range-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\range\conditionalExpression\range-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=range validator with conditionalExpression)]
<app-range-conditionalExpression-validator></app-range-conditionalExpression-validator>

## message 
Type :  `string` 
To override the global configuration message and show the custom message on particular control property.

[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\reactive-form-validators\validators\range\message\employee-info.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\range\message\range-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\range\message\range-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=range validator with custom message)]
<app-range-message-validator></app-range-message-validator>

## minimumNumber 
Type :  `string` 
Minimum number is for define a minimum number of range

[!TabGroup(?showHideCondition="minimumNumber")]
# [Model](#tab\minimumNumberModel)
[!code-typescript[](\assets\reactive-form-validators\validators\range\minimumNumber\employee-info.model.ts)]
# [Component](#tab\minimumNumberComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\range\minimumNumber\range-minimum-number.component.ts)]
# [Html](#tab\minimumNumberHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\range\minimumNumber\range-minimum-number.component.html)]
***

[!example(?type=section&clickEventCode="minimumNumber=!minimumNumber"&title=range validator with minimumNumber)]
<app-range-minimumNumber-validator></app-range-minimumNumber-validator>

## maximumNumber 
Type :  `string` 
Maximum number is for define a maximum number of range

[!TabGroup(?showHideCondition="maximumNumber")]
# [Model](#tab\maximumNumberModel)
[!code-typescript[](\assets\reactive-form-validators\validators\range\maximumNumber\employee-info.model.ts)]
# [Component](#tab\maximumNumberComponent)
[!code-typescript[](\assets\reactive-form-validators\validators\range\maximumNumber\range-maximum-number.component.ts)]
# [Html](#tab\maximumNumberHtml)
[!code-typescript[](\assets\reactive-form-validators\validators\range\maximumNumber\range-maximum-number.component.html)]
***

[!example(?type=section&clickEventCode="maximumNumber=!maximumNumber"&title=range validator with maximumNumber)]
<app-range-maximumNumber-validator></app-range-maximumNumber-validator>

# Complete range Example
[!TabGroup]
# [Example](#tab\completeexample)
<app-range-complete-validator></app-range-complete-validator>
# [Model](#tab\completemodel)
[!code-typescript[](\assets\reactive-form-validators\validators\range\complete\employee-info.model.ts)]
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\reactive-form-validators\validators\range\complete\range-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\reactive-form-validators\validators\range\complete\range-complete.component.html)]
***