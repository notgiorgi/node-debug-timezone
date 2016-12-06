# debug-timezone
Wrapper around debug, which lets you specify timezone and date format for stdout

## Installation
```bash
$ npm install debug-timezone
```

## API
API is almost same as the original debug, you can now provide additional parameters for Timezone and Timestamp format:
```js
const debug = require('debug-timezone')('Steve:Baller', 'DD.MM.YY', 'Europe/Lisbon')

debug('Developers! Developers! Developers!')
```
For formating and timezones see [moment and moment-timezone packages](http://momentjs.com/)