function foo(input){
    return input.split("").reverse().join("");
}

console.log(foo("abc"));

function removeDuplicate(input) {
    var array = input.split("");
    var uniqueArray = [];

    for (var i =0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray.join("");
}

console.log(removeDuplicate("abbbcd"));

function doubleInput(input) {
    return input.concat(input);
}

console.log(doubleInput("abc"));
    
function doubleEachWord(input) {
    var words = input.split("");
    var doubleString = "";
    for (i = 0; i < words.length; i++) {
        doubleString += words[i] + words[i];
    }
    return doubleString;
}

console.log(doubleEachWord("a12f"))
    
function reverseSentence(input) {
    return input.split(" ").reverse().join(" ");
}

console.log(reverseSentence("hi i am sam"));

function replaceWord(input) {
    return input.replaceAll("a", "*");
}

console.log(replaceWord("hi i am sam"));

function frequent(array) {
    var dict = {};
    array.forEach(e => {
        if(e in dict)
            dict[e] = dict[e] + 1;
        else
            dict[e] = 1;
    })
    return dict;
}

console.log(frequent(['a','b','c','a']));
console.log(frequent(['sam', 'jane', 'sam', 'sam'])); // should output {sam:3,jane:1} in the console

function sortObject(input) {
    input.sort((a,b) => (a.id > b.id) ? 1 : -1);
    return input;
}

console.log(
    sortObject([
        {id: 1, name: 'sam1'},
        {id: 3, name: 'sam3'},
        {id: 4, name: 'sam4'},
        {id: 2, name: 'sam2'},
    ])
);    

function flatArray(input) {
    return input.reduce( (obj,e) => {
        return {
            ...obj,
            [e.name]:e.age
        }
    }, {});
}

console.log(
    flatArray([
        {name: 'sam', age: 18},
        {name: 'jane', age: 10},
        {name: 'john', age: 20},
    ])
);     