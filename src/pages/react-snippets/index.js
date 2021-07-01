import GradientStepper from "../../components/_react-snippets/GradientStepper";

import Layout from "../../components/Layout";

// import styles from "./index.module.scss";

const gradientStepper = (
  <>
    <h2>Gradient Stepper</h2>
    <GradientStepper totalSteps={4} />
  </>
);

/* Order matters */
const sections = [gradientStepper];

export default function ReactSnippets() {
  return <Layout header={"React Snippets"} sections={sections} />;
}
