import Footer from "../Footer";

import styles from "./index.module.scss";

const AppLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
