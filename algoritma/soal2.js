function longest(sentence) {
  const words = sentence.split(' ');
  let longestWord = words.reduce((long, word) =>
    long.length >= word.length ? long : word,
  );
  return `${longestWord}: ${longestWord.length} characters`;
}

const sentence = 'Saya sangat senang mengerjakan soal algoritma';
console.log(longest(sentence));
