// Siewnik: terminy siewu/zbioru + czy teraz siać. Dane orientacyjne (grunt, PL).
(function () {
  'use strict';
  var VEG = [
    { n: 'Marchew', s: [3, 5], z: 'lipiec – październik' },
    { n: 'Pietruszka', s: [3, 4], z: 'wrzesień – listopad' },
    { n: 'Rzodkiewka', s: [3, 8], z: 'maj – październik' },
    { n: 'Sałata', s: [3, 8], z: 'maj – październik' },
    { n: 'Szpinak', s: [3, 4], z: 'maj – czerwiec' },
    { n: 'Groszek', s: [3, 5], z: 'czerwiec – sierpień' },
    { n: 'Fasola', s: [5, 6], z: 'lipiec – wrzesień' },
    { n: 'Ogórek', s: [5, 6], z: 'lipiec – wrzesień' },
    { n: 'Cukinia', s: [5, 6], z: 'lipiec – październik' },
    { n: 'Pomidor (rozsada)', s: [2, 3], z: 'lipiec – wrzesień' },
    { n: 'Papryka (rozsada)', s: [2, 3], z: 'sierpień – październik' },
    { n: 'Cebula dymka', s: [3, 4], z: 'czerwiec – sierpień' },
    { n: 'Czosnek ozimy', s: [10, 10], z: 'lipiec' },
    { n: 'Koper', s: [4, 8], z: 'czerwiec – październik' }
  ];
  var MIES = ['', 'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec',
    'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
  var sel = document.getElementById('veg');
  VEG.forEach(function (v, i) {
    var o = document.createElement('option');
    o.value = i; o.textContent = v.n; sel.appendChild(o);
  });
  function render() {
    var v = VEG[+sel.value];
    var now = new Date().getMonth() + 1;
    document.getElementById('name').textContent = v.n;
    var el = document.getElementById('out');
    var d = document.getElementById('detail');
    d.textContent = 'Siew: ' + MIES[v.s[0]] + (v.s[1] > v.s[0] ? ' – ' + MIES[v.s[1]] : '') +
      '. Zbiór: ' + v.z + '.';
    if (now >= v.s[0] && now <= v.s[1]) {
      el.textContent = '🌱 Siej teraz!';
    } else if (now < v.s[0]) {
      el.textContent = '⏳ Za ' + (v.s[0] - now) + ' mies.';
    } else {
      el.textContent = '💤 Po sezonie';
    }
  }
  sel.addEventListener('change', render);
  render();
})();
