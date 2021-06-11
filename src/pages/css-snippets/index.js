import EmojiButton from "../../components/_css-snippets/EmojiButton";
import HorizontalOverflow from "../../components/_css-snippets/HorizontalOverflow";
import StickyHeader from "../../components/_css-snippets/StickyHeader";
import StickySections from "../../components/_css-snippets/StickySections";
import StickySidebar from "../../components/_css-snippets/StickySidebar";

import Layout from "../../components/Layout";

import styles from "./index.module.scss";

const emojiButton = (
  <>
    <h2>Emoji Button</h2>
    <div className={styles.buttons}>
      <EmojiButton icon={"🍌"} label={"Banana emoji"}>
        Go bananas
      </EmojiButton>
      <EmojiButton icon={"🌴"} label={"Palm tree emoji"}>
        Or go home
      </EmojiButton>
    </div>
  </>
);

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

const stickySidebar = (
  <>
    <h2>Sticky Sidebar</h2>
    <StickySidebar />
  </>
);

/* Order matters */
const sections = [
  stickySections,
  horizontalOverflow,
  stickyHeader,
  emojiButton,
  stickySidebar,
];

export default function CssSnippets() {
  return <Layout header={"CSS Snippets"} sections={sections} />;
}
