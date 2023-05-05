import { useState } from "react";

const useWordle = solution => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const WORDLE_MAX_LENGTH = 5

  // TODO: format guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {};
  // TODO: add a new guess to the guesses state
  // TODO: update the isCorrect state if the guess is correct
  // TODO: add one to turn state
  const addNewGuess = () => {};
  
  const handleKeyup = ({ key }) => {
    if (key === "Backspace") {
        setCurrentGuess((previousGuess) => {
            return previousGuess.slice(0, -1) // delete the last character
        })
        return
    }
    const alphabetCharacterRegex = /^[A-Za-z]$/;

    if (alphabetCharacterRegex.test(key)) {
      if (currentGuess.length < WORDLE_MAX_LENGTH) {
        setCurrentGuess(previousGuess => {
          return previousGuess + key;
        });
      }
    }
  };
  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
