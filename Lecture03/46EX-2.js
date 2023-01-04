let furniture = ['Table', 'Chairs', 'Couch'];

let iterator = furniture[Symbol.iterator]();

console.log(furniture[0]);

for (let index = 0; index < furniture.length; index++){
    const name = furniture[index];
    console.log(name);
}

for (let )

//while (true) {
  //  let result = iterator.next();
    //if (result.done) break;
    //console.log(result.value);
//}