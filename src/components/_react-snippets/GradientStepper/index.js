import { mixColor } from "@popmotion/popcorn";

import styles from "./index.module.scss";

const PRIMARY = "#5cc9f5";
const SECONDARY = "#6638f0";
const TERTIARY = "#f4bd00";
const TRANSPARENT = "rgba(0,0,0,0)";

const mixerOne = mixColor(PRIMARY, TRANSPARENT);
const mixerTwo = mixColor(TERTIARY, SECONDARY);

const renderSteps = (currentStep, totalSteps) => {
  return [...Array(totalSteps)].map((_num, index) => {
    const startColorOne = mixerOne(index / totalSteps);
    const endColorOne = mixerOne((index + 1) / totalSteps);
    const startColorTwo = mixerTwo(index / totalSteps);
    const endColorTwo = mixerTwo((index + 1) / totalSteps);

    return (
      <li
        key={index}
        style={
          currentStep >= index + 1
            ? {
                backgroundImage: `radial-gradient(
            110% 90% at 10% 100%,
            ${startColorOne} 0%,
            ${endColorOne} 100%
          ), radial-gradient(
            at 0% 0%,
            ${startColorTwo} 15%,
            ${endColorTwo} 100%
          )
        `,
              }
            : { backgroundImage: "transparent" }
        }
      ></li>
    );
  });
};

const GradientStepper = ({ totalSteps }) => {
  return (
    <div className={styles.stepper}>
      {[...Array(totalSteps)].map((_num, index) => (
        <div key={index}>
          Step {index + 1} of {totalSteps}
          <ul>{renderSteps(index + 1, totalSteps)}</ul>
        </div>
      ))}
    </div>
  );
};

export default GradientStepper;
