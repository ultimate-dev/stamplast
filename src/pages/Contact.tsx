import { Fragment } from "react";
// Components
import Header from "../components/Header";
import BackBox from "../components/BackBox";
import SEO from "../components/SEO";
// Containers
import Contact from "../containers/Contact";
import ContactInfos from "../containers/ContactInfos";
// Data
import settings from "../data/settings";
import Head from "../components/Head";
import Description from "../containers/Description";

export default () => {
  return (
    <Fragment>
      <SEO title="İletişim" />
      <main>
        <Header.Breadcrumb head="İletişim" />

        <section className="relative section pt-16" data-aos="fade-up">
          <Head.Section head="Bize Ulaşın" />
          <Description data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <ContactInfos data={settings} />
        </section>
        <section
          className="relative section py-16 overflow-hidden"
          data-aos="fade-up"
        >
          <BackBox align="right" color="primary-50" size={80} />
          <Contact />
        </section>
      </main>
    </Fragment>
  );
};
