const mixarray = ["Dhruv", "Radadiya", 007]
console.log(mixarray);
console.log(mixarray.length);

const arr = new Array();
arr[0] = "Le";
console.log(arr);
arr.push= 007;
console.log(arr);

mixarray.forEach(element => console.log(element));


const calAge= function(birthyear){
    return 2050-birthyear
}

const years = [1990,1980,2000,2021,2010]

console.log(calAge(years[years.length-1]));
// const studentObj={
//     firstname:'Peter',
//     lastname:'parker',
//     age:30,
//     job:'teacher',
//     friends: ['Emmy','Gustavo','Ramiz']
// };
// console.log(studentObj.job);

// const intre = prompt('What would you want about Peter');
// if(intre == "friends"){
//     console.log(`${studentObj.firstname} has ${studentObj.friends.length} friends and his best friend is ${studentObj.friends[0]}`);
// }else if(studentObj[intre]){
//     console.log(intre+" : "+studentObj[intre]);
// }else{
//     console.log("Wrong Input!");
// }

let user = {name:"Jhon", age:30, isAdmin:true };
for(let key in user){
    console.log(key+":"+user[key]);
}

const neighnours= ["Denmark","Poland","Czech","Switzerland"];
neighnours.push('Utopia');
neighnours.pop();
neighnours.forEach(element => {
    if(element=="Germany"){
        console.log("Central european country");
    }else{
        console.log("not a Central european country");
    }
});
console.log(neighnours);
neighnours.forEach(element => {
    if(element=="Czech"){
        neighnours[neighnours.indexOf(element)]= "Czech Republic"
    }
});
console.log(neighnours);

