let person = {
  firstName: 'Kevin',
  lastName: 'Choi',
}
// ------This is SYNCHRONOUS --------
function fullName(person) {
  const myFullName = `${person.firstName} ${person.lastName}`
  return myFullName
}

const myName = fullName(person)
console.log(myName)
// ------------------------------------------


// ------This is ASYNCHRONOUS --------
function fullNameAsync(person, callback) {
  const myFullName = `${person.firstName} ${person.lastName}`
  callback(myFullName)
}

fullNameAsync(person, (myName) => {
  console.log(myName)
  // do other stuff
  // right here...
 })
// ------------------------------------------
