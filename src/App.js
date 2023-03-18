import "./styles.css";

import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import { GuessButton } from "./GuessButton";
import { Answer } from "./Answer";
import { Input } from "./Input";
import { isCorrect, scoreGuess, validateGuess } from "./game";
import { words } from "./words";

const answer = words.at(Math.floor(Math.random() * words.length));

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  const onClick = () => {
    const error = validateGuess(guess);

    if (error) {
        return setMessage(error);
    }

    const result = scoreGuess(guess, answer);

    if (isCorrect(result)) {
      setIsExploding(true);
      setMessage("AWESOME! You guessed it right!");
    }
  
    setGuessArray([...guessArray, { attempt: guess.toUpperCase(), result }]);
  };

  const updateInput = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div className="App" style={styles.container}>
      {isExploding && <ConfettiExplosion />}
      <h3>
        A simplified version of the game{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.nytimes.com/games/wordle/index.html"
        >
          wordle
        </a>
      </h3>

      {guessArray.map((guess, index) => (
        <Answer key={"Attempts" + index} {...guess} />
      ))}

      <Input onChange={updateInput} />
      <GuessButton onClick={onClick} />
      <h3>{message}</h3>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
