const answerColors = [ "#3a3a3c", "#c9b458", "#6aaa64" ];

/*
  attempt: string
  result: array with 5 ints. Where:
    0: wrong letter
    1: wrong position
    2: correct letter at correct position!
*/
export const Answer = ({ attempt, result }) => {
  const attemptArray = Array.from(attempt);

  const Letters = () => {
    return (
      <>
        {attemptArray.map((letter, index) => {
          return (
            <div key={letter + index} style={{
                ...styles.letterBox,
                backgroundColor: answerColors[result[index]]
              }}>
              <p style={styles.letter}>{letter}</p>
            </div>
          );
        })}
      </>)
  };

  return (
    <div style={styles.letterContainer}>
      <Letters />
    </div>
  );
};

const styles = {
  letterContainer: {
    display: "flex",
    flexDirection: "row"
  },
  letterBox: {
    width: "3rem",
    height: "3rem",
    margin: 4,
  },
};
