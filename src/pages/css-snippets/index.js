import HorizontalOverflow from "../../components/_css-snippets/HorizontalOverflow";
import StickyHeader from "../../components/_css-snippets/StickyHeader";
import StickySections from "../../components/_css-snippets/StickySections";

import Layout from "../../components/Layout";

const horizontalOverflow = (
  <>
    <h2>Horizontal Overflow</h2>
    <HorizontalOverflow />
  </>
);

const stickyHeader = (
  <>
    <h2>Sticky Header</h2>
    <StickyHeader />
  </>
);

const stickySections = (
  <>
    <h2>Sticky Sections</h2>
    <StickySections />
  </>
);

/* Order matters */
const sections = [stickySections, horizontalOverflow, stickyHeader];

export default function CssSnippets() {
  return <Layout header={"CSS Snippets"} sections={sections} />;
}
