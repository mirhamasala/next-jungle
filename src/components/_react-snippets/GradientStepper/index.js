import { mixColor } from "@popmotion/popcorn";

import styles from "./index.module.scss";

const PRIMARY = "#5cc9f5";
const SECONDARY = "#6638f0";
const TERTIARY = "#f4bd00";
const TRANSPARENT = "rgba(0,0,0,0)";

const mixerOne = mixColor(PRIMARY, TERTIARY);
const mixerTwo = mixColor(TERTIARY, SECONDARY);

const renderSteps = (currentStep, totalSteps) => {
  return [...Array(totalSteps)].map((_num, index) => {
    const length = totalSteps / 2;
    const startStep = index % length;
    const endStep = startStep + 1;
    const startColorProgress = startStep / length;
    const endColorProgress = endStep / length;

    const mixer = index < length ? mixerOne : mixerTwo;

    const startColor = mixer(startColorProgress);
    const endColor = mixer(endColorProgress);

    const transparentStyle = {
      backgroundImage: "transparent"
    };

    const linearGradientStyle = {
      backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`
    };

    const radialGradientStyle = {
      backgroundImage: `radial-gradient(
          110% 90% at 10% 100%,
          ${startColor} 0%,
          ${endColor} 100%
        ),
        radial-gradient(
          at 0% 0%,
          ${startColor} 15%,
          ${endColor} 100%
        )`
    };

    const itemStyle =
      currentStep >= index + 1 ? linearGradientStyle : transparentStyle;

    return <li key={`item-${index}`} style={itemStyle}></li>;
  });
};

const GradientStepper = ({ totalSteps }) => {
  return (
    <div className={styles.stepper}>
      {[...Array(totalSteps)].map((_num, index) => (
        <div key={`steps-${index}`}>
          Step {index + 1} of {totalSteps}
          <ul key={`stepsWrapper-${index}`}>
            {renderSteps(index + 1, totalSteps)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GradientStepper;
