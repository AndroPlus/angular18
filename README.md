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

  # 3. NgOptimizerImage

The NgOptimizedImage directive makes it easy to adopt performance best practices for loading images.

The directive ensures that the loading of the Largest Contentful Paint (LCP) image is prioritized by:

Automatically setting the fetchpriority attribute on the <img> tag
Lazy loading other images by default
Automatically generating a preconnect link tag in the document head
Automatically generating a srcset attribute
Generating a preload hint if app is using SSR

  Sample:-  https://github.com/AndroPlus/angular18/blob/main/src/app/ngoptmizerimage/ngoptmizerimage.component.html

  # 4. Rxjs - map
Summary of Higher-Order Mapping Operators:

## Operator	Behavior

mergeMap - Processes all inner observables concurrently.
concatMap - Processes inner observables sequentially, one after the other.
switchMap -	Switches to the latest inner observable, cancelling the previous ones.
exhaustMap - Ignores new outer emissions while the current inner observable is still running.

## Real-World Use Cases:

mergeMap:
 Handling multiple concurrent HTTP requests, processing multiple files simultaneously.
concatMap:
 Handling operations like form submissions where you need to process one at a time.
switchMap:
 Autocomplete or search where only the latest user input matters.
exhaustMap:
 Preventing multiple clicks on a button to avoid duplicate submissions, ignoring inputs until a long-running process completes.

Sample:-  https://github.com/AndroPlus/angular18/blob/main/src/app/rxjs-test/rxjs-test.component.html


# 5. ngrx

Sample:-  https://github.com/AndroPlus/angular18/blob/main/src/app/ngrx-test/ngrx-test.component.html




# 6. Signal

Sample:-  https://github.com/AndroPlus/angular18/blob/main/src/app/signal-test/signal-test.component.html