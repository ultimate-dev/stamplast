import { Fragment } from "react";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
import Head from "../components/Head";
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

        <section className="relative section py-16">
          <MissionVisionGoals />
        </section>
        <section className="relative section py-16 overflow-hidden">
          <Head.Desc
            head={
              <>
                Plastik Üretim Teknoloji Hizmetleri,
                <span
                  className="text-primary mx-2"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  Stamplast
                </span>
              </>
            }
            desc="Gelecek yıllarda sektörün en güçlü ve prestijli firmalardan biri
            olmayı hedefleyen Stamplast, iş ortaklarına en iyi hizmeti vermeyi
            hedeflemektedir."
          />
          <div className="absolute z-0 left-0 top-1/2 -mt-48 bg-primary-50 w-96 h-96 rounded-3xl transform rotate-45 -translate-x-1/2" />
          <Features items={features} />
        </section>

        <section className="relative section py-16">
          <Head.Section head="Ürünler" />
          <Products items={products} />
        </section>

        <section className="relative section py-16 bg-primary-50">
          <Head.Section head="Haberler" />
          <News items={news} />
        </section>

        <section className="relative section bg-gray-50 overflow-hidden">
          <Brands items={brands} />
        </section>

        <section className="relative section py-16 overflow-hidden">
          <Head.Section head="İletişim" />
          <div className="absolute z-0 right-0 top-1/2 -mt-40 bg-primary-50 w-80 h-80 rounded-3xl transform rotate-45 translate-x-1/2" />
          <Contact />
        </section>
      </main>
    </Fragment>
  );
}
