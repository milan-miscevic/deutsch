var correct = 0;
var total = 0;

function check(guessedGender)
{
    var lastWord = document.getElementById("lastWord");
    var result = document.getElementById("result");
    var gender = document.getElementById("gender");
    var word = document.getElementById("word");

    // check and log

    if (gender.value == guessedGender) {
        lastWord.style.color = '#339933';
        correct++;
    } else {
        lastWord.style.color = '#ff0000';
    }

    total++;

    result.innerHTML = correct + ' / ' + total + ' (' + Math.round(correct * 100 / total) + ' %)';

    // new word

    var i = Math.floor(Math.random() * words.length - 0.000000000001);

    lastWord.innerHTML = gender.value + ' ' + word.innerHTML;
    gender.value = words[i][1];
    word.innerHTML = words[i][0];
}
