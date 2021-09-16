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

export default function Home() {
  return (
    <Fragment>
      <SEO title="İletişim" />
      <main>
        <Header.Breadcrumb head="İletişim" />

        <section className="relative section pt-16">
          <ContactInfos data={settings} />
        </section>

        <section className="relative section py-16 overflow-hidden">
          <BackBox align="right" color="primary-50" size={80} />
          <Contact />
        </section>
      </main>
    </Fragment>
  );
}
