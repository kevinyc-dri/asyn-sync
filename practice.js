// Write a loop that outputs:
// 10
// 9 
// 8 
// ...
// 1
// Blast off

// Asynchronous Way
function countdown(startValue, callback) {
  for (let i = startValue; i > 0; i--) {
    console.log(i)
    if (i === 1) {
      callback()
    }
  }
}

countdown(10,() => {
  console.log('Blast Off')
})
countdown(3,() => {
  console.log('Go!')
})
countdown(4,() => {
  console.log('Disco!')
})