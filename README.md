# performance-meter

This library helps you to measure the performance of function invocation without modifying the source code of a function.

## Usage
```
npm install --save-dev performance-meter
```

```
import { makeMeasurable } from 'performance-meter';

// the function counts factorial
function fact(n) {
    if(n < 2) {
        return 1;
    }
    return n * fact(n - 1);
}
fact = makeMeasurable(fact);
fact(4);
// the output:
// 0.0025ms
// 24
```

Note - the the lib will not work with anonymous functions - functions must have a name - even arrow functions!
For recursive functions - the result is the total time of the function invocation.
