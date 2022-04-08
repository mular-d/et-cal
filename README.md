# et-cal / Ethiopian Calendar
[![CircleCI](https://circleci.com/gh/targerian1999/et-cal/tree/main.svg?style=svg)](https://circleci.com/gh/targerian1999/et-cal/tree/main) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A library that allows conversion of dates between gregorian and ethiopic calendars.

This package is implemented using [Beyene-Kudlek](http://geez.org/Calendars/) algorithm.

### Getting started

```bash
npm i et-cal 
```

or
```bash
yarn add et-cal 
```
### Usage
Pass the year, month and day parameters to the ethToGreg and gregToEth function to get the equivalent gregorian and ethiopian date respectively.
If no parameters are passed to the gregToEth function it would return the current ethiopian date.

```typescript
import { ethToGreg, gregToEth, fullEthDate } from 'et-cal'

const gregorianDate = ethToGreg(2014, 7, 26)
const ethiopicDate = gregToEth(2022, 4, 4)

console.log(gregorianDate) // { year: 2022, month: 4, day: 4}
console.log(ethiopicDate) // { year: 2014, month: 7, day: 26 }
console.log(gregToEth()) // return the current ethiopian date 

// pass year, month and day parameters to get the formatted ethiopian date
console.log(fullEthDate(2014, 7, 30)) // ዓርብ፣ መጋቢት 30 ቀን 2014 ዓ/ም

// pass false as the fourth parameter for getting formatted ethiopian date string from gregorian date
console.log(fullEthDate(2022, 4, 8, false)) // ዓርብ፣ መጋቢት 30 ቀን 2014 ዓ/ም
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/targerian1999/et-cal/blob/main/LICENSE) file for details
