var correct = 0;
var unmatched = 0;
var total = 0;

var endings = [
  ['schaft', 'die'],
  ['chen', 'das'],
  ['heit', 'die'],
  ['keit', 'die'],
  ['lein', 'das'],
  ['enz', 'die'],
  ['ion', 'die'],
  ['nis', 'das'],
  ['tät', 'die'],
  ['ung', 'die'],
  ['ei', 'die'],
  ['en', 'das'],
  ['ie', 'die'],
  ['ik', 'die'],
  ['um', 'das'],
  ['ur', 'die'],
  ['e', 'die'],
];

outer:
for (const [word, meta] of Object.entries(words)) {
  if (meta[1] !== '') {
    continue;
  }

  total++;

  for (let j = 0; j < endings.length; j++) {
    if (word.endsWith(endings[j][0]) && meta[0] === endings[j][1]) {
      correct++;
      continue outer;
    }
  }

  if (meta[0] === 'der') {
    correct++;
  } else {
    unmatched++;
    var element = document.createElement('li', word);
    element.innerHTML = word;
    document.getElementById("list").appendChild(element);
  }
}

document.getElementById("unmatched").innerHTML = unmatched;
document.getElementById("correctness").innerHTML = correct/total;
