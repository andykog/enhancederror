EnhancedError
------------

Adds missing Error's feature in JS - ability
to provide error code or other information;

Feels like natural Error when printing in console.

```
npm install --save enhancederror
```

commonjs:

```js
import EnhancedError from 'enhancederror';
```

umd:

```js
<srctipt src="https://unpkg.com/enhancederror/lib/enhancederror.umd.js"></script>
```



```js
const a = new EnhancedError('Message', 10085);

const b = new EnhancedError({
  message: 'OtherMessage',
  code: 10085,
  customProp: true
});

a.code === b.code; // true

b.otherProp; // true

a instanceof EnhancedError; // true
a instanceof Error; // true
```
