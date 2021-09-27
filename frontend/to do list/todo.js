const arr = ['Collect chicken eggs', 'throw garbage'];
let command = prompt("what would you like to do ");

while (command !== "quit") {

    if (command === "new") {
        const newTodo = prompt("enter a to do");
        arr.push(newTodo);
    }
    else if (command === "list") {
        console.log("****************");

        for (let i = 0; i < arr.length; i++) {
            console.log(`${i} : ${arr[i]}`);
        }

        console.log("******************");
    }
    else if (command === 'delete') {
        const index = parseInt(prompt("enter a index to be deleted"));
        if (!Number.isNaN(index)) {
            const deleted = arr.splice(index, 1);
            console.log(`OK!deleted ${deleted[0]}`)
        }
        else {
            console.log('Unknown index');
        }
    }

    command = prompt("what would you like to do");

}
console.log("OK!YOU QUIT");