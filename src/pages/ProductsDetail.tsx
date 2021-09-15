import { Fragment } from "react";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Fragment>
      <SEO title="Ürün Detay" />
      <main>
        <Header.Breadcrumb
          breadcrumbs={[{ name: "Ürünler", to: "/products" }]}
          head="Ürün Detay"
        />
      </main>
    </Fragment>
  );
}
