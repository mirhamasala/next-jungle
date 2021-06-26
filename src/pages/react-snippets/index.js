import RainbowNav from "../../components/_react-snippets/RainbowNav";

import Layout from "../../components/Layout";

// import styles from "./index.module.scss";

const rainbowNav = (
  <>
    <h2>Rainbow Nav</h2>
    <RainbowNav />
  </>
);

/* Order matters */
const sections = [rainbowNav];

export default function ReactSnippets() {
  return <Layout header={"React Snippets"} sections={sections} />;
}
