var correct = 0;
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
for (let i = 0; i < words.length; i++) {
  if (words[i][2] === 'komposition') {
    continue;
  }

  total++;

  for (let j = 0; j < endings.length; j++) {
    if (words[i][0].endsWith(endings[j][0]) && words[i][1] === endings[j][1]) {
      correct++;
      continue outer;
    }
  }

  if (words[i][1] === 'der') {
    correct++;
  }
}

document.getElementById("correctness").innerHTML = correct/total;
