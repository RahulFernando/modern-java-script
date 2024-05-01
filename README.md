### Modern JavaScript

##### What is ECMAScript (ES)

ECMAScript (or ES) is a standardized scripting language specification primarily used for defining the behavior of JavaScript. It specifies the features and syntax that a scripting language like JavaScript should support, ensuring consistency across different implementations and environments.

##### Variables and Constants
###### Out with var
- Before ES6 javascript required var to define variables. 
- *var* does two things poorly.
1. Redefine
2. No block scope

###### In with let
- *let* is the sensible replacement for *var*
- No redefinition

###### Block Scope
- Variables declared using let and const has block scope. 
- Their use and visibility is limited to the block of code enclosed by the {...}.

###### Perils of Mutability
- *let* does not permit redefinition of variables, but it allows changing the value held in the variable.
- The *const* keyword is used to define a variable whose value shouldn’t change.

###### Limitation of const
- Only primitive values, like number, and references to objects are protected from change.

##### Working with Function Arguments
As a caller of a function, you have to pass the right arguments. And, from the extensibility and flexibility point of view, you may want functions to receive variable numbers of arguments.

Now, when defining functions you can clearly and unambiguously convey if you intend to receive a few discrete parameters, or receive a variable number of parameters, or a mixture of both. We can use rest parameter. 

###### Using the Rest Parameter

A rest parameter is defined using the ellipsis (...)to signify that that parameter is a placeholder for any number of arguments.

JavaScript has some reasonable rules for the rest parameter:
- The rest parameter has to be the last formal parameter.
- There can be at most one rest parameter in a function’s parameter list.
- The rest parameter contains only values that have not been given an
explicit name.

###### The Spread Operator
- It appears on the calling side of functions instead of on the parameter or receiving side.
- The intention of the spread operator is the opposite of that of the rest parameter—spread breaks a collection into discrete values.

###### Defining Default Values for Parameters
- Parameters can take default values that step in for any missing arguments.

##### Classes and Inheritance
- A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class.
- The properties are assigned inside a constructor() method.
- To create a class inheritance, use the extends keyword.

 ##### Template Literals
- Template literasl are a feature in JavaScript that let developers work with strings in a convenient way. 
- Instead of using double quote` " "` or single` ' '`, you denote strings using backsticks `` ` ` `` 
