// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
// Containers
import Brands from "../containers/Brands";
import MissionVisionGoals from "../containers/MissionVisionGoals";
import Features from "../containers/Features";
import Products from "../containers/Products";
import News from "../containers/News";
import Contact from "../containers/Contact";
// Data
import featuresData from "../data/features";
import productsData from "../data/products";
import newsData from "../data/news";
import brandsData from "../data/brands";
import { Fragment } from "react";

export default function Home() {
  let features = featuresData.slice(0, 6);
  let products = productsData.slice(0, 4);
  let news = newsData.slice(0, 4);
  let brands = brandsData;

  return (
    <Fragment>
      <SEO title="Plastik Üretim Teknolojileri" />
      <main>
        <Header.Intro />

        <MissionVisionGoals />
        <Features items={features} />
        <Products items={products} />
        <News items={news} />
        <Brands items={brands} />
        <Contact />
      </main>
    </Fragment>
  );
}
