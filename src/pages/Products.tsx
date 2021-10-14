import { Fragment } from "react";
// Components
import Header from "../components/Header";
import Head from "../components/Head";
import SEO from "../components/SEO";
// Images
import GamImg from "../assets/images/gam.webp"
// Containers
import Products from "../containers/Products";
import Description from "../containers/Description";
// Data
import productsData from "../data/products";

export default () => {
  let products = productsData;
  return (
    <Fragment>
      <SEO title="Ürünler" />
      <main>
        <Header.Breadcrumb head="Ürünler" />
        <section className="relative section py-16" data-aos="fade-up">
          <Head.Desc
            head="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            desc="Uzmanlık alanlarına göre 3 ana sistemlerde tüm araçlar için plastik parça üretimi, yüksek deneyimli ekip ile müşteri memnuniyeti doğrultusunda yalın üretim"
          />
          <Description
            block
            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />

          <Products data={products} />
        </section>
        <section className="relative section py-16" data-aos="fade-up">
          <img src={GamImg}/>
          </section>
      </main>
    </Fragment>
  );
};
