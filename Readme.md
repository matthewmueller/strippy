
# strippy

  the indentation you intended when you use multi-line templates

## installation

```
npm install strippy
```

## usage

```js
let s = require('strippy')
console.log(s(`
  this
  is a
  multiline

  with
  double
  breaks
  preserved.
`))

// Outputs:
// this is a multiline
//
// with double breaks preserved.
```

## License

MIT
