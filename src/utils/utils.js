
export const pathGet = (arr1, query) => {
  // TASK 1: 
  // Write a function that searches through the input array / object
  // and returns the appropriate string path leading to the input query, if found
  // Example:
  // const a = {
  //    user: {
  //      id: 1,
  //      name: {
  //        firstName: "James",
  //        lastName: "Ibori"
  //      },
  //      location: {
  //        city: "Ikoyi",
  //        state: "Lagos",
  //        address: "One expensive house like that"
  //      }
  //    }
  // }
  // `pathGet(a, 'One expensive house like that')` = "a.user.location.address"
  // `pathGet(a, 'James')` = "a.user.name.firstName"

  // ============== CODE GOES BELOW THIS LINE :) ==============
  if (arr1.constructor !== Object) {
    throw new TypeError("oops")
  }
  var path = []
  var found = false
  function search(obj) {
    for (var key in obj) {
      path.push(key);
      if (obj[key] === query) {
        found = true;
        break;
      }
      if (obj[key].constructor === Object) {
        search(obj[key]);
        if (found) break;
      }
      path.pop();
    }
  }
  search(arr1)
  let str = ""
  for (let i = 0; i < path.length; i++) {
    str += path[i] + "."
  }
  if (str[str.length - 1] === ".")
    str = str.slice(0, -1);
  return str
}