$(document).ready(function(){
    $("button#add").click(addWord);
    $("button#generate").click(generateHaiku);
});
let words = [
    [],
    ["push", "dove", "eat", "sleep"],
    ["dampen", "lighten", "funny", "pickle","Rugby"],
    ["dramatic", "ThunderBird", "Michigan", "magnetic"],
    ["automatic", "systematic", "Bubblelicious", "Execution"],
    ["university", "personality", "electricity", "organization"],
    ["disappriciated", "personification", "imperialism", "beneficiary"],
    ["interpenetratingly", "Heterogeneity","Autobiographical", "decriminalization"]
];


function addWord() {


    let wordEntered = $("input#word").val();
    let newWord = "";
    let numCount = 1;
    for (let i = 0; i < wordEntered.length; i++) {
        let character = wordEntered[i];
        if (character === "-") {
            numCount++
        }else{
            newWord += character;
        } if (numCount > 7) {
            $("p#errorM").text(`Sorry, that word has too many syllables for a haiku`);
        }
    }
    words[numCount][words[numCount].length] = newWord;
}

function generateHaiku(){

    let haikuLine1 = gen1and3();
    let haikuLine2 = genLine2();
    let haikuLine3 = gen1and3();

    $("p#outputLine1").text(haikuLine1);
    $("p#outputLine2").text(haikuLine2);
    $("p#outputLine3").text(haikuLine3);
}
function gen1and3() {
    let line = "";
    let totalSyllables = 0;
    while(totalSyllables < 5){
        let random = Math.floor(Math.random()*5)+1;
        if(random + totalSyllables > 5){

        }else{
            totalSyllables += random;
            let innerArrayLength = words[random].length - 1;
            let randomInner = Math.floor(Math.random()*innerArrayLength)+1;
            line += words[random][randomInner] + " ";
        }
    }
    return line;
}
function genLine2(){
    let line = "";
    let totalSyllables = 0;
    while(totalSyllables < 7){
        let random = Math.floor(Math.random()*7)+1;
        if(random + totalSyllables > 7){

        }else{
            totalSyllables += random;
            let innerArrayLength = words[random].length - 1;
            let randomInner = Math.floor(Math.random()*innerArrayLength)+1;
            line += words[random][randomInner] + " ";
        }
    }
    return line;
}