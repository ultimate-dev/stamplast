import { Fragment } from "react";
import BackBox from "../components/BackBox";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
import Head from "../components/Head";
// Containers
import Features from "../containers/Features";
import Description from "../containers/Description";
// Data
import featuresData from "../data/features";

export default function Home() {
  let features = featuresData;

  return (
    <Fragment>
      <SEO title="Özellikler" />
      <main>
        <Header.Breadcrumb head="Özellikler" />
        <section className="relative section py-16" data-aos="fade-up">
          <Head.Section head="İyi şeyler her iş hakkıyla yapılınca ortaya çıkar" />
          <Description
            block
            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <BackBox align="left" color="gray-50" size={96} />
          <Features data={features} />
        </section>
      </main>
    </Fragment>
  );
}
