import {DEFAULT_SECTIONS} from "../../../constants";

import Title from "../../../components/Title";

import styles from "./index.module.scss";

const StickySections = () => {
  return (
    <div className={styles.root}>
      {DEFAULT_SECTIONS.map((section, index) => (
        <section key={index} className={styles.section}>
          <Title variant="h3" color="green">
            {section.title}
          </Title>
          <p>{section.text}</p>
        </section>
      ))}
    </div>
  );
};

export default StickySections;
