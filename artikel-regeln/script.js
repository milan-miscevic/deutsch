var correct = 0;
var unmatched = 0;
var total = 0;

var toLearn = {
  'CD-ROM': 'die',
  'E-Mail': 'die', // die Post, die Nachricht
  Auge: 'das',
  CD: 'die',
  Ende: 'das',
  Erlaubnis: 'die',
  Interesse: 'das',
  Knie: 'das',
};

var meanings = {
  cardinalDirection: 'der',
  female: 'die',
  foreign: 'das',
  male: 'der',
  material: 'das', // @todo
  plural: 'die',
};

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
for (const [word, meta] of Object.entries(nouns)) {
  if (typeof toLearn[word] !== 'undefined' && meta[0] === toLearn[word]) {
    correct++;
    total++;
    continue;
  }

  if (typeof meanings[meta[2]] !== 'undefined' && meta[0] === meanings[meta[2]]) {
    correct++;
    total++;
    continue;
  }

  if (meta[2] !== '' && typeof meanings[meta[2]] === 'undefined') {
    continue;
  }

  total++;

  for (let j = 0; j < endings.length; j++) {
    if (word.endsWith(endings[j][0]) && meta[0] === endings[j][1]) {
      correct++;
      continue outer;
    }
  }

  if (word.startsWith('Ge') && meta[0] === 'das') {
    correct++;
    continue;
  }

  if (meta[0] === 'der') {
    correct++;
  } else {
    unmatched++;
    var element = document.createElement('li');
    element.innerHTML = meta[0] + ' ' + word;
    document.getElementById("list").appendChild(element);
  }
}

document.getElementById("unmatched").innerHTML = unmatched;
document.getElementById("correctness").innerHTML = correct/total;
