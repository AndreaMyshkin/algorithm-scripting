
//Seek and Destroy
const  destroyer =(arr, ...x) => arr.filter((num) => !x.includes((num)))

destroyer([1, 2, 3, 1, 2, 3], 2, 3);