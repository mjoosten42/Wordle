/*
  attempt: string
  result: array with 5 ints. Where:
    0: wrong letter
    1: wrong position
    2: correct letter at correct position!
*/
export const Answer = ({ attempt, result }) => {
  const attemptArray = attempt.split("");

  const Letters = () => {
    return (
      <>
        <div style={styles.letterBox}>
          <p style={styles.letter}>C</p>
        </div>
        <div style={styles.letterBox}>
          <p style={styles.letter}>A</p>
        </div>
        <div style={styles.letterBox}>
          <p style={styles.letter}>K</p>
        </div>
        <div style={styles.letterBox}>
          <p style={styles.letter}>E</p>
        </div>
        <div style={styles.letterBox}>
          <p style={styles.letter}>S</p>
        </div>
      </>
    );
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
    backgroundColor: "#3a3a3c"
  }
};
