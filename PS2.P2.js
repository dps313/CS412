function* wordGenerator(string){
    const words = string.split(' ');
    for (const word of words){
        yield word;
    }
}
const sentence = "All I know is something like a bird within her sang";
const words = wordGenerator(sentence);

for (const word of words) {
    console.log(word);
}