import { Fragment } from "react";
import htmlParser from "html-react-parser";
// Components
import Header from "../../components/Header";
import SEO from "../../components/SEO";
// Containers
import MissionVisionGoals from "../../containers/MissionVisionGoals";
// Data
import missionVisionGoalsData from "../../data/missionVisionGoals";

export default function Home() {
  let missionVisionGoals = missionVisionGoalsData;

  const policys = [
    {
      title: "KALİTE",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
    },
    {
      title: "ÜRETİM",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
    },
    {
      title: "MÜŞTERİ",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
    },
    {
      title: "TEDARİKÇİ",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
    },
  ];

  return (
    <Fragment>
      <SEO title="Politikamız" />
      <main>
        <Header.Breadcrumb
          breadcrumbs={[{ name: "Kurumsal", to: "/corporate" }]}
          head="Politikamız"
        />

        <section className="relative section py-16" data-aos="fade-up">
          <MissionVisionGoals data={missionVisionGoals} />
        </section>

        <section className="relative section pb-16" data-aos="fade-up">
          <div className="container border-t border-gray-100 relative z-10 mx-auto flex flex-wrap pt-8">
            {policys &&
              policys.map((item, key: number) => (
                <div
                  key={key}
                  className="md:w-1/2 w-full p-5"
                  data-aos="fade-up"
                >
                  <div className="bg-white shadow rounded px-8 py-6">
                    <h5 className="bg-primary-50 rounded py-2 uppercase text-lg font-semibold text-center text-primary">
                      {item.title}
                    </h5>
                    <p className="text-gray-500 mt-4">
                      {htmlParser(item.content)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
}
