import { Fragment } from "react";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Fragment>
      <SEO title="Haber Detay" />
      <main>
        <Header.Breadcrumb
          breadcrumbs={[{ name: "Haberler", to: "/products" }]}
          head="Haber Detay"
        />
      </main>
    </Fragment>
  );
}
