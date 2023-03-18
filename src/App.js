import "./styles.css";

import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import { GuessButton } from "./GuessButton";
import { Answer } from "./Answer";
import { Input } from "./Input";
import { validateGuess } from "./game";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  const onClick = () => {
    const currentGuess = { guess: "CAKES", result: [0, 1, 2, 0, 1] };
    setGuessArray([...guessArray, currentGuess]);
    setMessage(message);
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

      {guessArray[0] && (
        <Answer attempt={guessArray[0].guess} result={guessArray[0].result} />
      )}

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
