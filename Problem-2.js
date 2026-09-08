// function filterActiveUsers(users) {
//     if(!Array.isArray(users) || users.length === 0 ){
//         return `Invalid`
//     }
     
    
  
    
//     return users.filter(user => user.isActive === true)
// }




function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

    for (let i = 0; i < users.length; i++) {
        if (!users[i].hasOwnProperty('isActive')) {
            return "Invalid";
        }
    }

    return users.filter(user => user.isActive === true);
}



// const users1 = [
//   { name: "A", isActive: true },
//   { name: "B", isActive: false }
// ]

// const num = Object.entries(users1)
// console.log(num)