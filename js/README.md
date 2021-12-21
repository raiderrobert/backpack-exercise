
# Language Specific Comments

If you don't have nodejs installed, use `nvm install node`.

There shouldn't be a need to install any outside packages aside from what's needed for the Jest test suite

To install project, just run:

```
npm install
```


## Run unit tests

How to run tests

```
% npm test

> test
> jest

 PASS  ./backpack.test.js
  ✓ empty contents should be empty (3 ms)
  ✓ default size check (1 ms)
  ✓ add item (1 ms)
  ✓ remove item (1 ms)
  ✓ verify alphabetical results (13 ms)
  ✓ verify get_counters (1 ms)
  ✓ verify most_popular (1 ms)
  ✓ verify size enforcement
  ✓ verify bag size of 1

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.332 s, estimated 1 s
Ran all test suites.
```
