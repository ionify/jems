## What are jems?

**jems**, **j**son–**e**mbedded **m**odule**s**, is an [acronym](http://www.tfd.com/acronym) that
describes [modules](http://tfd.com/module) of data or functionality [embedded](http://tfd.com/embedded)
within immediately-[invoked](http://www.tfd.com/activate) [JSON](http://json.org/)-like structures.

## How do they look?

**jems** look like [JSON](http://json.org/), prefixed with a leading
`+`, `-`, or `~` character

```javascript
+{ "say":"hi!" };  // 1 jem as a prefixed JSON Object Literal
+[    "hi!"    ];  // 1 jem as a prefixed JSON Array  Literal
```

## How do they work?

In [JavaScript](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-overview) environments,
**jems** are interpreted and immediately evaluated as
[unary expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators)
composed of a [+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator), or
[~ unary operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator), and
an [object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer)
or [array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer) literal
[operand](http://www.tfd.com/operand).

During their evaluation, each jem's `+`, `-`, or `~` unary operator
[attempts to convert its object or array operand to a number](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).
During that conversion, the object or array's `valueOf()` method is automatically invoked.

This immediate evaluation and automatic method invocation is why **jems** are said to be _immediately-invoked_.


## Where can I use them?

**jems** work everywhere JavaScript lives and can be used in all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views, and
[JavaScript runtimes](http://en.wikipedia.org/wiki/JavaScript_engine) implementing the
[current ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm),
or [any previous version](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm) since [1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).
