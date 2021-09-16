import { Fragment } from "react";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
import Head from "../components/Head";
import BackBox from "../components/BackBox";
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
import missionVisionGoalsData from "../data/missionVisionGoals";

export default function Home() {
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

        <section className="relative section py-16">
          <MissionVisionGoals data={missionVisionGoalsData} />
        </section>
        <section className="relative section py-16">
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
        </section>

        <section className="relative section py-16">
          <Head.Section head="Ürünler" />
          <Products
            data={{
              items: products,
              desc: " Stamplast müşterilerini yüksek kalitede ve geniş bir ürün yelpazesiyle buluşturmak hedefiyle yola çıkmıştır. En ileri teknolojilerle ve en sıkı kalite kontrol prosedürleriyle üretilen ürünler; araç aydınlatma, ayna sistemlerinde ve araç iç ve dış trim parçaları olarak kullanılmaktadır.",
            }}
          />
        </section>

        <section className="relative section py-16 bg-primary-50">
          <Head.Section head="Haberler" />
          <News data={news} />
        </section>

        <section className="relative section bg-gray-50">
          <Brands data={brands} />
        </section>

        <section className="relative section py-16 overflow-hidden">
          <BackBox align="right" color="primary-50" size={80} />
          <Head.Section head="İletişim" />
          <Contact />
        </section>
      </main>
    </Fragment>
  );
}
