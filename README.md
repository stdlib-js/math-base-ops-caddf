<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# caddf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Add two single-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-ops-caddf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var caddf = require( '@stdlib/math-base-ops-caddf' );
```

#### caddf( z1, z2 )

Adds two single-precision complex floating-point numbers.

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var realf = require( '@stdlib/complex-realf' );
var imagf = require( '@stdlib/complex-imagf' );

var z = new Complex64( -1.5, 2.5 );

var v = caddf( z, z );
// returns <Complex64>

var re = realf( v );
// returns -3.0

var im = imagf( v );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var caddf = require( '@stdlib/math-base-ops-caddf' );

var rand;
var z1;
var z2;
var z3;
var i;

rand = discreteUniform( -50, 50 );
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex64( rand(), rand() );
    z2 = new Complex64( rand(), rand() );
    z3 = caddf( z1, z2 );
    console.log( '(%s) + (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/ops/caddf.h"
```

#### stdlib_base_caddf( z1, z2 )

Adds two single-precision complex floating-point numbers.

```c
#include "stdlib/complex/float32.h"
#include "stdlib/complex/realf.h"
#include "stdlib/complex/imagf.h"

stdlib_complex64_t z = stdlib_complex64( 3.0f, -2.0f );

stdlib_complex64_t out = stdlib_base_caddf( z, z );

float re = stdlib_realf( out );
// returns 6.0f

float im = stdlib_imagf( out );
// returns -4.0f
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex64_t` input value.
-   **z2**: `[in] stdlib_complex64_t` input value.

```c
stdlib_complex64_t stdlib_base_caddf( const stdlib_complex64_t z1, const stdlib_complex64_t z2 );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/ops/caddf.h"
#include "stdlib/complex/float32.h"
#include "stdlib/complex/reimf.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.5f ),
        stdlib_complex64( -3.14f, 1.5f ),
        stdlib_complex64( 0.0f, -0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    stdlib_complex64_t v;
    stdlib_complex64_t y;
    float re;
    float im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        stdlib_reimf( v, &re, &im );
        printf( "z = %f + %fi\n", re, im );

        y = stdlib_base_caddf( v, v );
        stdlib_reimf( y, &re, &im );
        printf( "caddf(z, z) = %f + %fi\n", re, im );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/ops/cadd`][@stdlib/math/base/ops/cadd]</span><span class="delimiter">: </span><span class="description">add two double-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/math-base/ops/cmulf`][@stdlib/math/base/ops/cmulf]</span><span class="delimiter">: </span><span class="description">multiply two single-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/math-base/ops/csubf`][@stdlib/math/base/ops/csubf]</span><span class="delimiter">: </span><span class="description">subtract two single-precision complex floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-caddf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-caddf

[test-image]: https://github.com/stdlib-js/math-base-ops-caddf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-ops-caddf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-caddf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-caddf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-caddf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-caddf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-caddf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-ops-caddf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-ops-caddf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-ops-caddf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-caddf/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/ops/cadd]: https://github.com/stdlib-js/math-base-ops-cadd

[@stdlib/math/base/ops/cmulf]: https://github.com/stdlib-js/math-base-ops-cmulf

[@stdlib/math/base/ops/csubf]: https://github.com/stdlib-js/math-base-ops-csubf

<!-- </related-links> -->

</section>

<!-- /.links -->
