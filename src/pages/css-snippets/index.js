import HorizontalOverflow from "../../components/_css-snippets/HorizontalOverflow";
import StickySections from "../../components/_css-snippets/StickySections";

import Layout from "../../components/Layout";

const stickySections = (
  <>
    <h2>Sticky Sections</h2>
    <StickySections />
  </>
);

const horizontalOverflow = (
  <>
    <h2>Horizontal Overflow</h2>
    <HorizontalOverflow />
  </>
);

const sections = [stickySections, horizontalOverflow];

export default function CssSnippets() {
  return <Layout header={"CSS Snippets"} sections={sections} />;
}
