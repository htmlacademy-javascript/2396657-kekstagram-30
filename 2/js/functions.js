//Проверяем длину строки
const getLength = function(string, maxLength) {
  const currentLength = string.length;
  if(currentLength <= maxLength){
    return true;
  } else {
    return false;
  }

};

//Проверям, палиндром ли строка
const isPalindrom = function(word) {
  let newWord = word.replaceAll(' ', '').toLowerCase();
  let rightIndex = 0;
  let leftIndex = newWord.length-1;

  while (rightIndex < leftIndex) {
    if(newWord[rightIndex] != newWord[leftIndex]) {
      console.log(newWord);
      return false;
    }
    rightIndex++;
    leftIndex--;

  }
  console.log(newWord);
  return true;
}
