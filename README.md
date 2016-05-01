# Nodal

A chrome extension that tries a simple heuristic to remove full screen modals
or overlays that prevent you from viewing content and force you to signup.

## Tested Sites
* [quora.com]()
* [pinterest.com]()
* [dotandbo.com]()

## Development

To compile the javascript for development, run this:

```bash
node_modules/babel-cli/bin/babel.js src/nodal.es6.js  --presets es2015 --watch --out-file nodal.js
```
