import { Fragment } from "react";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Fragment>
      <SEO title="İletişim" />
      <main>
        <Header.Breadcrumb
          head="İletişim"
        />
      </main>
    </Fragment>
  );
}
