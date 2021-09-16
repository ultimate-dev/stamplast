import { Fragment } from "react";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
import Head from "../components/Head";
import BackBox from "../components/BackBox";
import ViewLink from "../components/ViewLink";
// Containers
import Brands from "../containers/Brands";
import MissionVisionGoals from "../containers/MissionVisionGoals";
import Features from "../containers/Features";
import Products from "../containers/Products";
import News from "../containers/News";
import Contact from "../containers/Contact";
import Description from "../containers/Description";
// Data
import featuresData from "../data/features";
import productsData from "../data/products";
import newsData from "../data/news";
import brandsData from "../data/brands";
import missionVisionGoalsData from "../data/missionVisionGoals";

export default () => {
  let features = featuresData.slice(0, 6);
  let products = productsData.slice(0, 4);
  let news = newsData.slice(0, 4);
  let brands = brandsData;
  let missionVisionGoals = missionVisionGoalsData;

  return (
    <Fragment>
      <SEO title="Plastik Üretim Teknolojileri" />
      <main>
        <Header.Intro />

        <section className="relative section py-16" data-aos="fade-up">
          <MissionVisionGoals data={missionVisionGoals} />
        </section>
        <section className="relative section py-16" data-aos="fade-up">
          <BackBox align="left" color="primary-50" size={96} />
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
          <Features data={features} />
          <ViewLink to="/features" />
        </section>

        <section className="relative section py-16" data-aos="fade-up">
          <Head.Section head="Ürünler" />
          <Description data="Stamplast müşterilerini yüksek kalitede ve geniş bir ürün yelpazesiyle buluşturmak hedefiyle yola çıkmıştır. En ileri teknolojilerle ve en sıkı kalite kontrol prosedürleriyle üretilen ürünler; araç aydınlatma, ayna sistemlerinde ve araç iç ve dış trim parçaları olarak kullanılmaktadır." />
          <Products data={products} />
          <ViewLink to="/products" />
        </section>

        <section
          className="relative section py-16 bg-primary-50"
          data-aos="fade-up"
        >
          <Head.Section head="Haberler" />
          <News data={news} />
          <ViewLink to="/news" />
        </section>

        <section className="relative section bg-gray-50" data-aos="fade-up">
          <Brands data={brands} />
        </section>

        <section
          className="relative section py-16 overflow-hidden"
          data-aos="fade-up"
        >
          <BackBox align="right" color="primary-50" size={80} />
          <Head.Section head="İletişim" />
          <Contact />
        </section>
      </main>
    </Fragment>
  );
};
