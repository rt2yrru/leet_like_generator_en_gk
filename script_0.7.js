function _ab(_word) {
  const conversionTable = {
    'a': '\u03B1', // alpha
    'b': '\u03B2', // beta
    'c': '\u03F2', // stigma
    'd': '\u03B4', // delta
    'e': '\u03B5', // epsilon
    'f': '\u03D5', // phi symbol
    'g': '\u03B3', // gamma
    'h': '\u03BB', // lambda
    'i': '\u03B9', // iota
    'j': '\u03C3', // sigma
    'k': '\u03BA', // kappa
    'l': '\u2113', // script small L
    'm': '\u03BC', // mu
    'n': '\u03BD', // nu
    'o': '\u03BF', // omicron
    'p': '\u03C0', // pi
    'q': '\u03D6', // pi symbol
    'r': '\u03C1', // rho
    's': '\u03C3', // sigma
    't': '\u03C4', // tau
    'u': '\u03C5', // upsilon
    'v': '\u03DD', // digamma
    'w': '\u03C9', // omega
    'x': '\u03C7', // chi
    'y': '\u03C8', // psi
    'z': '\u03B6'  // zeta
  };
  let result = '';
  for (let i = 0; i < _word.length; i++) {
    let ch = _word.charAt(i).toLowerCase();
    if (conversionTable[ch]) {
      result += conversionTable[ch];
    } else {
      result += ch;
    }
  }
  return result;
}




    function update()
    {
      var numString = document.getElementById('_word').value;
    

      var output = _ab(numString);
      document.getElementById('container').innerHTML = output;
    }
