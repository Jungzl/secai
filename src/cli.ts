import chalk from 'chalk'
import { colors, getColors } from './index'

const input = (process.argv[2] || '').trim().toLocaleLowerCase()
const limit = +(process.argv[3]) || (input ? 15 : -1)

let items = input ? getColors(input) : colors

if (!isNaN(limit) && limit > 0)
  items = items.slice(0, limit)

console.log()
items
  .forEach((i) => {
    console.log(
      chalk
        .bgHex(i.value)
        .hex(i.lightness > 0.5 ? '#000000' : '#ffffff')(
          `  ${i.value}  ${i.pinyin.padEnd(13, ' ')}  ${i.name}  `,
        ),
    )
  })
console.log()
