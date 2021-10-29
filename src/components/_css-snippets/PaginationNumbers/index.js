import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./index.module.scss";

const PaginationNumbers = () => {
  const router = useRouter();
  const navRef = useRef();

  const routes = [
    "/",
    "/css-snippets",
    "/react-snippets",
    "/doesnt-exist",
    "/doesnt-exist-either",
  ];

  const totalSteps = 5;

  const [link, setLink] = useState(70);

  useEffect(() => {
    function handleResize() {
      if (!navRef.current) {
        return;
      }

      setLink(navRef.current.offsetWidth / totalSteps - 80);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [link]);

  return (
    <>
      Work in progress
      <div className={styles.root}>
        <div className={styles.sidebar}>
          <nav className={styles.nav} ref={navRef}>
            {routes.map((route, index) => (
              <Link href={route} key={index}>
                <a
                  className={
                    router.pathname === route
                      ? `${styles.link} ${styles.active}`
                      : `${styles.link}`
                  }
                  style={{
                    width: link,
                    height: link,
                  }}
                >
                  {index + 1}
                </a>
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.main}>
          <h3>Page 2</h3>
        </div>
      </div>
    </>
  );
};

export default PaginationNumbers;
