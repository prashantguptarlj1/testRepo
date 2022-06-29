// Anagram

function ana(str1, str2){
    if(str1.length !=str2.length) return false
  
    let c={}
    for(let l of str1){
      c[l] = (c[l] || 0) + 1
    }
  
    for(let l of str2){
      if(!c[l]) return false
      c[l] -= 1
    }
  
    return c
  }
  
  console.log(ana("hello", "hlooe"))

  //SumZero

  let array = [-5, -4, -3, -2, 0, 2, 3, 4, 6, 8]

function sumZero(arr){
  let l = 0
  let r = arr.length - 1
  while(r > l){
    console.log("while")
    if((arr[l] + arr[r]) == 0){
      return [arr[l], arr[r]]
    }else if((arr[l] + arr[r]) < 0){
      console.log(arr[l], arr[r])
      l++
    }else{
      r--
    }
  }
}

console.log(sumZero(array))