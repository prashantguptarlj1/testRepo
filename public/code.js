let str = 'abccdab'

let arr = str.split('')

let obj = {}

arr.map(item => {
  return obj[item] = (obj[item] || 0) + 1
})

Object.values(obj).filter((item, index) => {
  if(item == 1){
    return console.log(Object.keys(obj)[index])
  }
})

