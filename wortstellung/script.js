document.addEventListener('DOMContentLoaded', function () {

  wordOrder = [
    'subject',
    'verb',
    'sich',
    'es-das',
    'personal',
    'time',
    'nicht-1',
    'manner',
    'indirect',
    'direct',
    'nicht-2',
    'last',
    'zu-verb',
    'todo'
  ];

  const rendered = document.getElementById('examples');

  examples.forEach(function(example) {
    const p = document.createElement("p");
    p.className = 'example';

    wordOrder.forEach(function(wordType) {
      if (wordType in example) {
        var span = document.createElement('span');
        span.setAttribute('data-type', wordType);
        span.innerText = example[wordType];
        p.appendChild(span);
        p.appendChild(document.createTextNode(' '));
      }
    });

    var a = document.createElement('a');
    a.href = example['source'];
    a.innerText = 'Source';
    p.appendChild(a);

    rendered.appendChild(p);
  });

  document.querySelectorAll('p.example span').forEach(function (el) {
    el.addEventListener('mouseover', function (el) {
      el.target.classList.add('highlight');
      var typeEl = document.querySelector('p.types span[data-type=' + el.target.dataset.type + ']');
      typeEl.classList.add('highlight');
    });
    el.addEventListener('mouseleave', function (el) {
      el.target.classList.remove('highlight');
      var typeEl = document.querySelector('p.types span[data-type=' + el.target.dataset.type + ']');
      typeEl.classList.remove('highlight');
    });
  })

  document.querySelectorAll('p.types > span').forEach(function (el) {
    el.addEventListener('mouseover', function (el) {
      if (el.target.tagName === 'SPAN') {
        el.target.classList.add('highlight');
      }
      var typeEl = document.querySelectorAll('#examples span[data-type=' + el.target.dataset.type + ']');
      typeEl.forEach(function(item) {
        item.classList.add('highlight');
      });
    });
    el.addEventListener('mouseleave', function (el) {
      el.target.classList.remove('highlight');
      var typeEl = document.querySelectorAll('#examples span[data-type=' + el.target.dataset.type + ']');
      typeEl.forEach(function(item) {
        item.classList.remove('highlight');
      });
    });
  })
});
