var correct = 0;
var total = 0;

function check(guessedGender)
{
    var lastWord = document.getElementById("lastWord");
    var result = document.getElementById("result");
    var gender = document.getElementById("gender");
    var word = document.getElementById("word");
    var wordRaw = document.getElementById("wordRaw");
    var wrongWords = document.getElementById("wrongWords");

    // check and log

    if (gender.value == guessedGender) {
        lastWord.style.color = '#339933';
        correct++;
    } else {
        lastWord.style.color = '#ff0000';

        const li = document.createElement('li');
        li.textContent = gender.value + ' ' + wordRaw.value;
        wrongWords.appendChild(li);
    }

    total++;

    result.innerHTML = correct + ' / ' + total + ' (' + Math.round(correct * 100 / total) + ' %)';

    // new word

    var keys = Object.keys(nouns);
    var key = keys[Math.floor(Math.random() * keys.length - 0.000000000001)];

    lastWord.innerHTML = gender.value + ' ' + word.innerHTML;
    gender.value = nouns[key][0];
    wordRaw.value = key;
    word.innerHTML = '<a href="https://en.wiktionary.org/wiki/' + key + '">' + key + '</a>';
}
