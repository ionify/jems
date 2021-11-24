# jems

**json–expressed modules**, are software-defined actions & information, expressed via
[json](http://json.org/)
&
[**ion: invoked object notation**](https://github.com/ionify/about/blob/public/ions/ion.md#ion):

```javascript
~ {  "log" : "👋🏾👨🏾‍💻"  } <= /recording action/
+ { "json" : "data"  } <= /json information/
- ["natural language"] <= /text information/
```

## why

**jems** can be used for

+ automatic & decoupled json observation,
+ event-driven programming,
+ defining domain-specific languages,
+ and more;

their full potential is up to you 🤲🏾

## how

[javascript](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-overview)
runtimes interpret & evaluate **jems** as
[unary expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators)
composed of a
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator),
or
[~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator)
unary operator prefix, and an
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer)
or
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer)-literal
[operand](http://www.tfd.com/operand):

```javascript
;
~ {"jem":"one"} // a ~prefixed object-literal json
+ {"jem":"too"} // a +prefixed object-literal json
- ["jem three"] // a -prefixed  array-literal json
;
```

during **jem** evaluation, its `+`, `-`, or `~` unary operator
[attempts to convert its object or array operand to a number](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).
during that conversion, an attempt is made to call the object or array's `valueOf()`
method. since **jems** are json, and json have no methods, **jems** don't implement a
`valueOf()` method. this causes javascript runtimes to traverse the **jem's**
[prototype inheritance path](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects)
in search of one. that search begins & ends at `Object.prototype` & `Array.prototype`
because:

+ **jems** are json,
+ json are object & array literals,
+ and object & array literals' prototypes are respectively, `Object.prototype` &
`Array.prototype`
.

javascript runtimes implement both `Object.prototype.valueOf()` &
`Array.prototype.valueOf()`, so each **jem's** `+`, `-`, or `~` unary operator, calls the
**jem’s** prototype-inherited, `Object` or `Array`, `valueOf()` method to obtain a
[basic value](https://en.m.wikipedia.org/wiki/Primitive_value)
that's then converted to a number.

defining custom `Object.prototype.valueOf()` & `Array.prototype.valueOf()` methods enables
observing & interacting with all **jems**, with & without their identifiers, by interfacing
with javascript's `Object` & `Array`
[implicit type conversion](https://en.m.wikipedia.org/wiki/Type_conversion).

```javascript
;
Object.prototype.valueOf
  = function onObject ()
      { this.jem == "some data" // true on 1st jem!
      ; this.jem == "more data" // true on 2nd jem!
      ; this.any == "json data" // true on 3rd jem!
      }

~ {"jem":"some data"} // 1st jem with no identifier
+ {"jem":"more data"} // 2nd jem with no identifier
- {"any":"json data"} // 3rd jem with no identifier
;
```

## where

**jems** work everywhere javascript exists & can be used in all
[web browsers](https://en.wikipedia.org/wiki/Web_browser),
web views &
[javascript runtimes](http://en.wikipedia.org/wiki/JavaScript_engine)
implementing
[any version](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
of the
[ecmascript specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
published since
[1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).

to get started, try [**ionify**](http://api.ionify.net/):
**invoked object notation implemented for you**, a flexible, unobtrusive & novel api that
simplifies defining, observing & interacting with **jems** & other
[**ions**](https://github.com/ionify/about/blob/public/ions/ion.md#ion).

####

🙇🏾‍♂️ through * [**God**](../LICENSE.txt) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://github.com/orgs/ionify/people)
🤎

