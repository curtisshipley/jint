// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-ary-value-null.case
// - src/dstr-binding/error/async-gen-func-decl-dflt.template
/*---
description: Object binding pattern with "nested" array binding pattern taking the `null` value (async generator function declaration (default parameter))
esid: sec-asyncgenerator-definitions-instantiatefunctionobject
features: [async-iteration]
flags: [generated]
info: |
    AsyncGeneratorDeclaration : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        3. Let F be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody,
            scope, strict).
        [...]

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    [...]
    3. If Initializer is present and v is undefined, then
       [...]
    4. Return the result of performing BindingInitialization for BindingPattern
       passing v and environment as arguments.
---*/


async function* f({ w: [x, y, z] = [4, 5, 6] } = { w: null }) {
  
};

assert.throws(TypeError, function() {
  f();
});
