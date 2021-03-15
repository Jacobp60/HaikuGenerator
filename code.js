$(document).ready(function(){
    $("button#add").click(addWord);
    $("button#generate").click(generateHaiku);
});
let syllables = [
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
    let word = "";
    let numDash = 1;
    for (let i = 0; i < wordEntered.length; i++) {
        let char = wordEntered[i];
        if (char === "-") {
            numDash++
        }else{
            word += char;
        } if (numDash > 7) {
            $("p#errorM").text(`Sorry, that word has too many syllables for a haiku`);
        }
    }
    syllables[numDash][syllables[numDash].length] = word;
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
            let innerArrayLength = syllables[random].length - 1;
            let randomInner = Math.floor(Math.random()*innerArrayLength)+1;
            line += syllables[random][randomInner] + " ";
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
            let innerArrayLength = syllables[random].length - 1;
            let randomInner = Math.floor(Math.random()*innerArrayLength)+1;
            line += syllables[random][randomInner] + " ";
        }
    }
    return line;
}