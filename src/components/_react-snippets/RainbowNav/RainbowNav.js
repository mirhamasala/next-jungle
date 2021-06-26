import { useEffect, useRef, useState } from "react";

import styles from "./index.module.scss";

const RainbowNav = () => {
  const navEl = useRef();
  const sectionOneEl = useRef();
  const sectionTwoEl = useRef();
  const sectionThreeEl = useRef();

  const [navColor, setNavColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (navEl.current) {
        if (
          window.scrollY >=
            navEl.current.scrollHeight + sectionOneEl.current.scrollHeight &&
          window.scrollY <=
            navEl.current.scrollHeight + sectionTwoEl.current.scrollHeight * 2
        ) {
          setNavColor("purple");
        } else if (
          window.scrollY >=
            navEl.current.scrollHeight +
              sectionTwoEl.current.scrollHeight * 2 &&
          window.scrollY <=
            navEl.current.scrollHeight + sectionTwoEl.current.scrollHeight * 3
        ) {
          setNavColor("pink");
        } else if (
          window.scrollY >=
          navEl.current.scrollHeight + sectionThreeEl.current.scrollHeight * 3
        ) {
          setNavColor("blue");
        } else {
          setNavColor("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={styles.container}>
      <nav ref={navEl} className={`${styles.nav} ${styles[navColor]}`}></nav>
      <main className={styles.main}>
        <section ref={sectionOneEl} className={styles.section}>
          Glossier poke tacos keytar YOLO cloud bread. Narwhal palo santo
          waistcoat pop-up slow-carb. DIY farm-to-table enamel pin paleo,
          cornhole trust fund heirloom la croix banh mi tumblr asymmetrical 90's
          etsy meditation. Glossier selfies migas seitan. Umami echo park vape
          whatever cray skateboard. Blue bottle etsy artisan food truck narwhal
          tote bag chambray. Af occupy vexillologist flannel asymmetrical man
          bun health goth glossier.
        </section>
        <section ref={sectionTwoEl} className={styles.section}>
          Glossier poke tacos keytar YOLO cloud bread. Narwhal palo santo
          waistcoat pop-up slow-carb. DIY farm-to-table enamel pin paleo,
          cornhole trust fund heirloom la croix banh mi tumblr asymmetrical 90's
          etsy meditation. Glossier selfies migas seitan. Umami echo park vape
          whatever cray skateboard. Blue bottle etsy artisan food truck narwhal
          tote bag chambray. Af occupy vexillologist flannel asymmetrical man
          bun health goth glossier.
        </section>
        <section ref={sectionThreeEl} className={styles.section}>
          Glossier poke tacos keytar YOLO cloud bread. Narwhal palo santo
          waistcoat pop-up slow-carb. DIY farm-to-table enamel pin paleo,
          cornhole trust fund heirloom la croix banh mi tumblr asymmetrical 90's
          etsy meditation. Glossier selfies migas seitan. Umami echo park vape
          whatever cray skateboard. Blue bottle etsy artisan food truck narwhal
          tote bag chambray. Af occupy vexillologist flannel asymmetrical man
          bun health goth glossier.
        </section>
      </main>
    </div>
  );
};

export default RainbowNav;
