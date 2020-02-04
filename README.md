# Test project for @types/node@13 / Bluebird compatibility issue

This project is intended to demonstrate an incompatibility between
the @types/node@13 with Bluebird.

In @types/node@12 release it was possible to assign to the global
Promise object using:

global.Promise = bluebird

In @types/node@13 this now generates a compiler error:

```
src/index.ts:4:1 - error TS2741: Property '[Symbol.species]' is missing in type 'typeof Bluebird' but required in type 'PromiseConstructor'.

global.Promise = bluebird

  node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:173:14
    173     readonly [Symbol.species]: PromiseConstructor;

```
