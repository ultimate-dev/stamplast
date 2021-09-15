import { Fragment } from "react";
// Components
import Header from "../../components/Header";
import SEO from "../../components/SEO";

export default function Home() {
  return (
    <Fragment>
      <SEO title="Politikamız" />
      <main>
        <Header.Breadcrumb
          breadcrumbs={[{ name: "Kurumsal", to: "/corporate" }]}
          head="Hakkımızda"
        />
      </main>
    </Fragment>
  );
}
