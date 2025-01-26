const obj = {
    name: "shivang",
    age: 21,
    props: {
        color: "dark",
        hair: "black",
        wears: "glasses",
        isReligious: "NO",
        loveGames: () => {
            console.log("he loves games ");
        }
    }
}

for (const key in obj) {
    if (typeof obj[key] != 'function') {
        console.log(obj[key]);
    }
}




console.log("after the function call 1 ");

console.log("___________________________________________________________________");

const changeProp = (obj) => {
    obj.name = "JOHN";

    obj.age += 1;

    obj.props.color = "white";

    obj.props?.loveGames();
}

changeProp(obj);

console.log("________________________________________________________________");

console.log("after the function call 2 ");

for (const key in obj) { 
    console.log(typeof obj[key]);

    if (typeof obj[key] != 'function') {
        // console.log(obj[key]);
    }
}

const changeProp2 = () => {
    obj.name = "JOHN2";

    obj.age -= 1;

    obj.props.color = "black";

    obj.props.loveGames = () => {
        console.log("he is getting bored of repetitive games");
    };
}
// changeProp2();

// console.log("the function call in outer most scope to check whether the function has changed or not ")
// obj.props.loveGames();

for (const key in obj) {
    if (typeof obj[key] != 'function') {
        // console.log(obj[key]);
    }
}
