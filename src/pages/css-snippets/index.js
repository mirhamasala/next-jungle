import StickySections from "../../components/_css-snippets/StickySections";

import Layout from "../../components/Layout";
import Title from "../../components/Title";

export default function CssSnippets() {
  return (
    <Layout
      header={"CSS Snippets"}
      main={
        <div>
          <Title color="pink">Sticky Sections</Title>
          <StickySections />
        </div>
      }
    />
  );
}
