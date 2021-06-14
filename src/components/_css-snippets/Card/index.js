import { useState } from "react";

import styles from "./index.module.scss";

const Card = () => {
  const [front, setFront] = useState(true);

  const handleFlip = () => {
    setFront(!front);
  };

  return (
    <>
      {front}
      <div>
        <button type="button" onClick={handleFlip}>
          Flip Card
        </button>
        <div className={styles.card}>
          <div className={`${styles.back} ${front ? "" : styles.flipped}`}>
            Back
          </div>
          <div
            className={`${styles.front} ${
              !front ? styles.flipped : styles.front
            }`}
          >
            Front
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
