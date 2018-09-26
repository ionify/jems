# jems

**json–expressed modules**, are modules of data or functionality expressed as [JSON](http://json.org/) via [**invoked object notation**](https://github.com/ionify/about/blob/public/ions/ion.md).

## look

**jems** look like JSON prefixed with a `+`, `-`, or `~` character

```javascript
;
~ {"one":"jem"}  // ~ -prefixed JSON Object Literal
+ {"jem":"too"}  // + -prefixed JSON Object Literal
- ["third jem"]  // - -prefixed JSON Array  Literal
;
```

## act

[JavaScript](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-overview) runtimes interpret & evaluate **jems** as
[unary expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators)
composed of a [+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator), or
[~ unary operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator) &
an [object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer)
or [array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer) literal
[operand](http://www.tfd.com/operand).

During **jem** evaluation, its `+`, `-`, or `~` unary operator
[attempts to convert its object or array operand to a number](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive). During that conversion, an attempt is made to call the object or array's `valueOf()` method. Since 
**jems** are JSON, they don't define a `valueOf()` method. This causes JavaScript runtimes to traverse the **jem**'s [prototype chain](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects) in search of one. That search begins & ends at `Object.prototype` & `Array.prototype` because

+ **jems** are JSON
+ JSON are object & array literals
+ & object & array literals' prototypes are `Object.prototype` & `Array.prototype`.

By default, both `Object.prototype.valueOf()` & `Array.prototype.valueOf()` are defined, so each **jem's** `+`, `-`, or `~` unary operator calls it to obtain a [primitive value](https://en.m.wikipedia.org/wiki/Primitive_value) that's then converted to a number.

Defining custom `Object.prototype.valueOf()` & `Array.prototype.valueOf()` methods enables using JavaScript's [implicit type conversion](https://en.m.wikipedia.org/wiki/Type_conversion) behavior to observe & interface with all **jems** without needing an identifier, magical 🤓

```javascript
;
Object.prototype.valueOf
  = function onObject ()
      { this.jem == "some data" // true on 1st jem!
      ; this.jem == "more data" // true on 2nd jem!
      ; this.any == "json data" // true on 3rd jem!
      }

~{"jem":"some data"}  // 1st jem
+{"jem":"more data"}  // 2nd jem
-{"any":"json data"}  // 3rd jem
;
```


## work

**jems** work everywhere JavaScript lives & can be used in all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views &
[JavaScript runtimes](http://en.wikipedia.org/wiki/JavaScript_engine) implementing [any version](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm) of the
[ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm) since [1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).

**jems** can be used for

+ automatic & decoupled JSON observation
+ event-driven programming
+ & as domain-specific languages to name a few

Their full potential is up to you 😉

To get started, try [**ionify**](http://api.ionify.net/), **invoked object notation implemented for you**, an API that simplifies doing many of the things **jems** make possible.

