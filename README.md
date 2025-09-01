<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# srot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a plane rotation.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-wasm-srot
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var srot = require( '@stdlib/blas-base-wasm-srot' );
```

#### srot.main( N, x, strideX, y, strideY, c, s )

Applies a plane rotation.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

srot.main( x.length, x, 1, y, 1, 0.0, 1.0 );
// x => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
// y => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

srot.main( 3, x, 2, y, 2, 0.8, 0.6 );
// x => <Float32Array>[ ~5.0, 2.0, ~7.8, 4.0, ~10.6, 6.0 ]
// y => <Float32Array>[ ~5.0, 8.0, ~5.4, 10.0, ~5.8, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

srot.main( 3, x1, -2, y1, 1, 0.8, 0.6 );
// x0 => <Float32Array>[ 1.0, ~8.8, 3.0, ~9.8, 5.0, ~10.8 ]
// y0 => <Float32Array>[ 7.0, 8.0, 9.0, 4.4, 6.4, ~8.4 ]
```

#### srot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

srot.ndarray( 4, x, 1, 1, y, 1, 1, 0.8, 0.6 );
// x => <Float32Array>[ 1.0, ~5.8, ~7.2, ~8.6, 10.0 ]
// y => <Float32Array>[ 6.0, 4.4, ~4.6, ~4.8, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

srot.ndarray( 3, x, 2, 1, y, 2, 1, 0.8, 0.6 );
// x => <Float32Array>[ 1.0, ~6.4, 3.0, ~9.2, 5.0, 12.0 ]
// y => <Float32Array>[ 7.0, 5.2, 9.0, 5.6, 11.0, ~6.0 ]
```

* * *

### Module

#### srot.Module( memory )

Returns a new WebAssembly [module wrapper][@stdlib/wasm/module-wrapper] instance which uses the provided WebAssembly [memory][@stdlib/wasm/memory] instance as its underlying memory.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new srot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### srot.Module.prototype.main( N, xp, sx, yp, sy, c, s )

Applies a plane rotation.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );
var oneTo = require( '@stdlib/array-one-to' );
var ones = require( '@stdlib/array-ones' );
var zeros = require( '@stdlib/array-zeros' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new srot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float32';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing two vectors:
var xptr = 0;
var yptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );
mod.write( yptr, ones( N, dtype ) );

// Perform computation:
mod.main( N, xptr, 1, yptr, 1, 0.0, 1.0 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( xptr, viewX );
mod.read( yptr, viewY );

console.log( viewX );
// => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]

console.log( viewY );
// => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **xp**: input [`Float32Array`][@stdlib/array/float32] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.
-   **yp**: input [`Float32Array`][@stdlib/array/float32] pointer (i.e., byte offset).
-   **sy**: index increment for `y`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

#### srot.Module.prototype.ndarray( N, xp, sx, ox, yp, sy, oy, c, s )

Applies a plane rotation using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );
var oneTo = require( '@stdlib/array-one-to' );
var ones = require( '@stdlib/array-ones' );
var zeros = require( '@stdlib/array-zeros' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new srot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float32';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing two vectors:
var xptr = 0;
var yptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );
mod.write( yptr, ones( N, dtype ) );

// Perform computation:
mod.ndarray( N, xptr, 1, 0, yptr, 1, 0, 0.0, 1.0 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( xptr, viewX );
mod.read( yptr, viewY );

console.log( viewX );
// => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]

console.log( viewY );
// => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both vectors are unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `srot` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas-base/srot`][@stdlib/blas/base/srot]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/srot`][@stdlib/blas/base/srot]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `srot()` corresponds to the [BLAS][blas] level 1 function [`srot`][srot].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var srot = require( '@stdlib/blas-base-wasm-srot' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 10, opts );
console.log( y );

srot.ndarray( x.length, x, 1, 0, y, -1, y.length-1, 0.8, 0.6 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-wasm-srot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-wasm-srot

[test-image]: https://github.com/stdlib-js/blas-base-wasm-srot/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-wasm-srot/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-wasm-srot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-wasm-srot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-wasm-srot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-wasm-srot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-wasm-srot/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-wasm-srot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-wasm-srot/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-wasm-srot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-wasm-srot/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-wasm-srot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-wasm-srot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-wasm-srot/main/LICENSE

[blas]: http://www.netlib.org/blas

[srot]: https://www.netlib.org/lapack/explore-html/d1/d45/group__rot_ga432ce08bbcda714c82c7a31552f96937.html#ga432ce08bbcda714c82c7a31552f96937

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/srot]: https://github.com/stdlib-js/blas-base-srot

</section>

<!-- /.links -->
