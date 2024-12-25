var correct = 0;
var total = 0;

function check(guessedVerb)
{
    var lastWord = document.getElementById("lastWord");
    var result = document.getElementById("result");
    var verb = document.getElementById("verb");
    var meaning = document.getElementById("meaning");

    // check and log

    if (verb.value == guessedVerb) {
        lastWord.style.color = '#339933';
        correct++;
    } else {
        lastWord.style.color = '#ff0000';
    }

    total++;

    result.innerHTML = correct + ' / ' + total + ' (' + Math.round(correct * 100 / total) + ' %)';

    // new word

    var keys = Object.keys(verbs);
    var key1 = keys[Math.floor(Math.random() * keys.length - 0.000000000001)];
    var key2 = keys[Math.floor(Math.random() * keys.length - 0.000000000001)];
    var key3 = keys[Math.floor(Math.random() * keys.length - 0.000000000001)];

    document.getElementById("answer1").innerHTML = key1;
    document.getElementById("answer1").value = key1;

    document.getElementById("answer2").innerHTML = key2;
    document.getElementById("answer2").value = key2;

    document.getElementById("answer3").innerHTML = key3;
    document.getElementById("answer3").value = key3;

    lastWord.innerHTML = verb.value + ' - ' + meaning.innerHTML;

    random = getRandomInt(1, 3);

    if (random === 1) {
      verb.value = key1;
      meaning.innerHTML = verbs[key1][0];
    } else if (random === 2) {
      verb.value = key2;
      meaning.innerHTML = verbs[key2][0];
    } else {
      verb.value = key3;
      meaning.innerHTML = verbs[key3][0];
    }
}

function getRandomInt(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
