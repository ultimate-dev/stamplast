import { Fragment } from "react";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
// Containers
import ProductsFull from "../containers/ProductsFull";
// Data
import productsData from "../data/products";

export default () => {
  let products = productsData;
  return (
    <Fragment>
      <SEO title="Ürünler" />
      <main>
        <Header.Breadcrumb head="Ürünler" />

        <ProductsFull data={products} />
      </main>
    </Fragment>
  );
};
