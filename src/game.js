import { words } from "./words";

const WordleLength = 5;

export const validateGuess = (guess) => {
  if (guess.length < WordleLength) {
    return "Not enough letters!";
  }

  if (guess.length > WordleLength) {
    return "Too many letters!";
  }

  if (!words.includes(guess.toLowerCase())) {
    return "Word not in list!";
  }

  return null;
};

// Create a copy of the answer. 
// If a corresponding letter is found in the guess, replace it with a space
export const scoreGuess = (guess, answer) => {
  const unusedLetters = Array.from(answer);
  const result = Array(WordleLength).fill(0);
  const letters = Array.from(guess.toLowerCase());

  // Check for letters in correct position
  letters.forEach((letter, index) => {
    if (answer[index] === letter) {
      result[index] = 2;
      unusedLetters[index] = ' ';
    }
  });

  // Check for letters in wrong position
  letters.forEach((letter, index) => {
    const letterIndex = unusedLetters.findIndex((char) => char === letter);

    if (letterIndex >= 0) {
      unusedLetters[letterIndex] = ' ';
      result[index] = 1;
    }
  });

  return result;
}

export const isCorrect = (result) => {
  return result.every((n) => n === 2);
}
