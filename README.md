# 1. @defer
Deferrable views can be used in component template to defer the loading of select dependencies within that template. Those dependencies include components, directives, and pipes, and any associated CSS. To use this feature, you can declaratively wrap a section of your template in a @defer block which specifies the loading conditions.

 Sample:- https://github.com/AndroPlus/angular18/blob/main/src/app/employee/employee.component.html

 # 2. @let 
 Local template variables in Angular can be defined using the @let syntax, which allows developers to create reusable variables within templates. This feature simplifies handling asynchronous data and conditional rendering, making templates cleaner and more efficient.

 @let user = user$ | async;
@let greeting = user ? 'Hello, ' + user.name : 'Loading';

 Sample:-  https://github.com/AndroPlus/angular18/blob/main/src/app/localtemplate/localtemplate.component.html

 # 3. SSR/Hydration
 npm run build

 npm run serve:ssr:angular18

 open link : http://localhost:4000/