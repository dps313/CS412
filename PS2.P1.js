function* fibonacci() {
    let [a,b] = [0,1];
    while(true) {
        yield a;
        [a,b] = [b, a + b]
    }
}
function* evenFibonacci() {
    for (const num of fibonacci()) {
        if(num%2 === 0){
            yield num;
        }
    }
}

function main() {
    const evenFibs = evenFibonacci();
    for (let i = 0; i < 6; i++){
        console.log(evenFibs.next().value);
    }
}

main();
