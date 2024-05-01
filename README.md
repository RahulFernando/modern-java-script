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
