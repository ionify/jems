# jems

**json–expressed modules**, are software-defined actions & information, expressed as
[🤓 observable json](//github.com/ionify/about/blob/public/LINGO.md#-oj)
via
[**⚛️ ion: invoked object notation**](//github.com/ionify/about/blob/public/ions/ion.md#ion):

```javascript
~ {  "log" : "👋🏾👨🏾‍💻"  }
+ { "json" : "data"  }
- ["natural language"]
```

**jems** were [discovered, defined & developed](//origin.ionify.net/)
by **[👨🏾‍💻 michael lee](//github.com/iskitz)**
in 2007, and can be implemented within all
[languages](https://wikipedia.org/wiki/List_of_programming_languages_by_type)
that support
[json](//json.org).

## why

**jems** can be used for

+ automatic & decoupled [json](//json.org) observation,
+ [event-driven programming](//wikipedia.org/wiki/Event-driven_programming),
+ defining [domain-specific languages](//wikipedia.org/wiki/Domain-specific_language),
+ and more;

their full potential is up to you 🤲🏾

## how

[javascript](//www.ecma-international.org/ecma-262/6.0/index.html#sec-overview)
runtimes interpret & evaluate **💎 jems** as
[unary expressions](//www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators)
composed of a
[+](//www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
[-](//www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator),
or
[~](//www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator)
unary operator prefix, and an
[object](//www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer)
or
[array](//www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer)-literal
[operand](//www.tfd.com/operand):

```javascript
;
~ {"jem":"one"} // a ~prefixed object-literal json
+ {"jem":"too"} // a +prefixed object-literal json
- ["jem three"] // a -prefixed  array-literal json
;
```

during **💎 jem** evaluation, its `+`, `-`, or `~` unary operator
[attempts to convert its object or array operand to a number](//www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).
during that conversion, an attempt is made to call the object or array's `valueOf()`
method.

since **💎 jems** are json, and json have no methods, **jems** don't implement a
`valueOf()` method, which causes javascript runtimes to traverse the **jem's**
[prototype inheritance path](//www.ecma-international.org/ecma-262/6.0/index.html#sec-objects)
in search of one.

that search begins & ends at `Object.prototype` & `Array.prototype`
because:

+ **jems** are json,
+ json are object & array literals,
+ and object & array literals' prototypes are respectively, `Object.prototype` &
`Array.prototype`

javascript runtimes implement both `Object.prototype.valueOf()` &
`Array.prototype.valueOf()`, so each **💎 jem's** `+`, `-`, or `~` unary operator, calls the
**jem’s** prototype-inherited, `Object` or `Array`, `valueOf()` method to obtain a
[basic value](//wikipedia.org/wiki/Primitive_value)
that's then converted to a number.

defining custom `Object.prototype.valueOf()` & `Array.prototype.valueOf()` methods enables
observing & interacting with **✨ all** **💎 jems**, with & without their identifiers, by interfacing
with javascript's `Object` & `Array`
[implicit type conversion](//wikipedia.org/wiki/Type_conversion):

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

**jems** work everywhere javascript exists & can be used in **all**
[web browsers](//wikipedia.org/wiki/Web_browser),
web views &
[javascript runtimes](//wikipedia.org/wiki/JavaScript_engine)
implementing
[**any** version](//www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
of the
[ecmascript specification](//www.ecma-international.org/publications/standards/Ecma-262.htm)
published **since**
[1999](//www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf) 👏🏾

to get started, try
[**🧬 ionify: invoked object notation implemented for you**](//api.ionify.net/),
a flexible, unobtrusive & natural api that simplifies defining, observing & interacting with
[**💎 jems**](#jems) & other
[**⚛️ ions**](//github.com/ionify/about/blob/public/ions/ion.md#ion).

####

🙇🏾‍♂️ through * [**יהוה**](../LICENSE.txt#L1) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](//wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://team.ionify.net/)
🤲🏾
