# Debuggable

## Purpose

Can be used to add helper log methods to a class. 

## Methods
Name          | Params                               | Description 
--------------|--------------------------------------|-------------
log           |`DebugLevel`(optional), `...arguments`| Alias for `console.log`
warn          |`DebugLevel`(optional), `...arguments`| Alias for `console.warn`
trace         |`DebugLevel`(optional), `...arguments`| Alias for `console.trace`
error         |`DebugLevel`(optional), `...arguments`| Alias for `console.error`
dump          |                                      | Alias for `util.inspect(this, {colors: true}`
setDebugLevel |`DebugLevel`                          | Set restriction level for output
setDebugTag   |`String`                              | prepends tag to all output

`DebugLevel`: 
- `Debugggable.LOW`
- `Debugggable.MED`
- `Debugggable.HIGH`
- `Debugggable.TMI`


## How To Use

```
var Debuggable = require('debuggable');

function SomeClass(){
    this.prop = 'hello world';
    }

    SomeClass.prototype = Debuggable.prototype;
    var anObj = new SomeClass();

    anObj.log(anObj.dump());
    anObj.log(Debuggable.LOW, anObj.dump());
    ```

