# et-cal / Ethiopian Calendar
[![CircleCI](https://circleci.com/gh/targerian1999/et-cal/tree/main.svg?style=svg)](https://circleci.com/gh/targerian1999/et-cal/tree/main)

A library that allows conversion of dates between gregorian and ethiopic calendars.

This package is implemented using [Beyene-Kudlek](http://geez.org/Calendars/) algorithm.

### Getting started

```bash
npm i et-cal --save-dev
```

or
```bash
yarn add et-cal --dev
```
### Usage
```typescript
import { ethToGreg, gregToEth } from 'et-cal'

const gregorianDate = ethToGreg(2014, 7, 26)
const ethiopicDate = gregToEth(2022, 4, 4)

console.log(gregorianDate) // { year: 2922, month: 4, day: 4}
console.log(ethiopicDate) // { year: 2014, month: 7, day: 26 }
```

### TODO
- [ ] Return also amharic day names
- [ ] Convert the current date
- [ ] Use ge'ez numbers
- [ ] Return amharic name for hour division

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/targerian1999/et-cal/blob/main/LICENSE) file for details
