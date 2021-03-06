---
title: url 
description: Url validation validator will check that value entered in the property is in the correct url format or not.
author: rxcontributorone

---
# When to use
Suppose you want to create a website-info form, which contains fields like AdminWebsiteUrl, CustomerWebsiteUrl, MaintenanceWebsiteUrl and you want the user to enter valid url. Here depending upon the requirement these scenarios may arise.
1. Adding AdminWebsiteUrl without any conditional expression.
2. Apply url validation based on matched condition in the form, like if the adminWebsiteUrl is ‘https://google.co.in’ then the customerWebsiteUrl value should be in proper format of url.
3. Adding Custom Message on MaintenanceWebsiteUrl Field.
4. Apply dynamic validation, If the validation will be changed based on some criteria in the application.

Let’s see how url validator fulfil the need.

# Basic url Validation
We need to create a `FormGroup` in the component. To achieve this we need to add `RxFormBuilder`. The `RxFormBuilder` is an injectable service that is provided with the `RxReactiveFormsModule`. Inject this dependency by adding it to the component constructor.
Here we have covered Add form operation. 

[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\add\url-add.component.ts?type=section)]

Next, we need to write html code.
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\add\url-add.component.html?type=section)]

[!example(?title=url validator for add Example)]
<app-url-add-validator></app-url-add-validator>

# DefaultConfig
 Below options are not mandatory to use in the `RxwebValidators.url()` validator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalExpression) | Url validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |

## conditionalExpression 
Type :  `Function`  |  `string` 
Url validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

[!codeExample(?title=conditionalExpressionExampleFunction)]

[!codeExample(?title=conditionalExpressionExampleString)]

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\conditionalExpression\url-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\conditionalExpression\url-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=url validator with conditionalExpression)]
<app-url-conditionalExpression-validator></app-url-conditionalExpression-validator>

## message 
Type :  `string` 
To override the global configuration message and show the custom message on particular control property.

[!codeExample(?title=messageExample)]

[!TabGroup(?showHideCondition="message")]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\message\url-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\message\url-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=url validator with custom message)]
<app-url-message-validator></app-url-message-validator>

# Complete url Example
[!TabGroup]
# [Example](#tab\completeexample)
<app-url-complete-validator></app-url-complete-validator>
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\complete\url-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\complete\url-complete.component.html)]
***

# Dynamic url Example
[!TabGroup]
# [Example](#tab\dynamicexample)
<app-url-dynamic-validator></app-url-dynamic-validator>
# [Component](#tab\dynamiccomponent)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\dynamic\url-dynamic.component.ts)]
# [Json](#tab\dynamicjson)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\dynamic\dynamic.json)]
# [Html](#tab\dynamichtml)
[!code-typescript[](\assets\examples\reactive-form-validators\validators\url\dynamic\url-dynamic.component.html)]
***