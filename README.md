# MyNgApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
#=============================================================================

for(var i=0;i<4;i++){.....}
i++;
console.log(i); // 5

The TypeScript Programming Language, 
1. ES 6 based Language by Microsoft
2. Features
   1. The scope declaration using 'let' keyword
      1. for(let i=0;i<4;i++){.....}
          i++;
          console.log(i); // undefined
   2. Data-Types
      1. number, string, date, object, Array, boolean, any
         1. syntax
            1. let v:number =100; // explicit datatype declaration
            2. let v=100; // v is typed to number, implicit datatype declaration 
      2. Array declaration
         1. let arr:Array<T>; // explicit Array Declaration
         2. let arr=[];  // implicit array of 'any', late-binding
         3. Both ar an instance of Array class
            1. Properties
               1. length
            2. Methods  
               1. sort(), reverse(), filter(), reduce(), etc.
   3. Template string
      1. `${<PLACE-HOLDER / VARIABLE>}`
      2. Older Concatination
         1. var fname="fff"; var lname="dfdfd";
         2. var fullName = fname + '  ' + lname;
      3. ES 6 Template String
         1. let fullName = `Full NAme is ${fname} ${lname}`;
      4. Template string is also known as 'String Interpolation' OR 'Expression'
   4. Arrow Operator
      1. =>
      2. Used when Callfunction is used as parameter to a function
      3. OLD Style
         1. function x(function(a,b){.....});
      4. Arrow Operator
         1. x((a,b)=>{.......});
   5. OOPs
      1. Class
         1. Access Specifier
            1. public (default)
            2. private, protected
         2. Access Modifier
            1. static
         3. Parameterized Constructor
            1. Constructor-Scopped parameters
               1. Parameterized ctor having all parameters scoped only for that ctor
                  1. constrctor(x:number,y:number)
                     1. x and y will be used only in ctor
               2. Private Parameters to ctor
                  1. constrctor(private x:number,private y:number)
                     1. x and y will be used only in ctor and inside class
               3. Public Parameters to ctor
                  1. constrctor(public x:number,public y:number)
                     1. x and y will be used only in ctor and inside class also outside class
         4. All members of class are accessed within class using 'this'. This is Mandatory
         5. Inheritence
            1. extends
            2. derived class, if have ctor, then must used super() call to class base class ctor
         6. Interface
            1. Use 'implements' to implement interface
         7. No Overloading No-Overriding
   6. rest parameters
      1. Varible number of parameters to a method
         1. function x(...p:[]){.....}
         2. ... is known as 'spread' operator
         3. Internally ... means
            1. object.copy();
            2. let a = object.copy(b);
               1. a anb b are having same structure and value  
               2. a =...b
   7. Union Type
      1. Defining a variable with more than one datatype at a time
         1. let x:number|string;
   8. Modules
      1. export
         1. export : class, interface, method, const
      2. import
         1. All exports can be imported
   9. The 'tsc' command, TypeScript Compiler
      1.  tsc <FILE-NAME>.ts
          1.  Compile into <FILE-NAME>.js

#=============================================================================
Angular Core Concepts
1. STandard packages
   1. @angular/core
      1. NgModule
         1. Angular Module
      2. Component
      3. Directive
      4. Pipe
      5. Injectable
         1. Applied on Class to make it as Angular Service
         2. Class will be Dependency Injected
      6. HostListener
         1. Decides which event is hosted by a method so that the method will be executed only when that hosted event is reaised
      7. OnInit
         1. Component Lifecycle Management Interface
      8. Input
         1. Accepting data from Other (parent) component or Directive
      9.  Output
          1.  Emits event from child component
      10. EventEmitter<T>
          1.  Emit an event
          2.  T is Event Args.
      11. ViewChild
   2. @angular/common
      1. Provided CommonModule, used for createing reusable Angular Modules aka libraries aks Packages
      2. Provides @angular/common/http
         1. For Http Communication
   3. @angular/compiler
      1. Ahead-Of-Time (AOT) compilation
   4. @angular/platform-browser
   5. @angular/platform-browser-dynamic
   6. @angular/animation
   7. @angular/forms
      1. Angular Forms
   8. @angular/router

#=============================================================================
ANgular Decorators
1. @NgModule --> Class with Angular Module
2. @Component
3. @Injectable --> Class will be service
4. @Input() --> Applied on Public member
5. @Output --> Applied on EventEmitter
6. @HostListener --> Applied on Method
7. @Pipe
8. @Dirctive
9. @ViewChild --> Applied on Component's instance to make it as child on other component.

# =========================================================================

Angular Directives
1. Component Directive
   1. Each Angular Component is Directive
2. Attribute Directive
   1. Attribute of HTML DOM to set its behavior
      1. E.g. ngModel
      2. ngClass
3. Structural Directive
   1. Dynamically add/remove HTML DOM
      1. e.g.
         1. *ngFor ==> for..of loop, new in ES 6
            1. *ngFor="let <counter> of <collection>"
         2. *ngIf ==> If Statement
            1. *ngIf="condition"
         3. *ngSwitch, *ngSwitchCase 

#=============================================================================
To use ngModel for Two-Way binding, use FormsModule imported from @angular/forms  

































