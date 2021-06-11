import { DEFAULT_SECTIONS } from "../../../constants";

import { useState } from "react";

import styles from "./index.module.scss";

const StickySidebar = () => {
  const [currentChapter, setCurrentChapter] = useState(DEFAULT_SECTIONS[0]);

  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <div className={styles.inner}>
          <div className={styles.heading}>Table of Contents</div>
          <ul className={styles.nav}>
            {DEFAULT_SECTIONS.map((chapter, index) => (
              <li key={index} className={styles.item}>
                <button
                  onClick={(e) =>
                    setCurrentChapter(DEFAULT_SECTIONS[e.target.value])
                  }
                  className={`${styles.button}
                    ${
                      chapter.title === currentChapter.title
                        ? styles.selected
                        : ""
                    }`}
                  value={index}
                >
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.content}>
          <h3>{currentChapter.title}</h3>
          <p className={styles.text}>{currentChapter.text}</p>
        </div>
      </main>
    </div>
  );
};

export default StickySidebar;
