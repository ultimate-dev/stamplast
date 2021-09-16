import { Fragment } from "react";
import { useParams } from "react-router";
import htmlParser from "html-react-parser";
import moment from "moment";
import * as configs from "../configs";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
import BackBox from "../components/BackBox";
import ShortBox from "../components/News/ShortBox";
// Data
import newsData from "../data/news";

export default function Home() {
  let { slug }: any = useParams();

  let news_id = Number(String(slug).split("-").slice(-1)[0]);

  let news = newsData.find((item) => item.id == news_id);

  let otherNews = newsData.slice(0, 6);

  if (news)
    return (
      <Fragment>
        <SEO title={news?.title} />
        <main>
          <Header.Breadcrumb
            breadcrumbs={[{ name: "Haberler", to: "/news" }]}
            head={news.title}
          />

          <section className="relative section" data-aos="fade-up">
            <BackBox align="left" color="primary-50" size={80} />
            <div className="container z-10 mx-auto flex flex-wrap">
              <div className="lg:w-3/4 w-full md:px-4 py-16" data-aos="fade-up">
                <div
                  className="relative flex items-center mx-4 -mb-6 z-10"
                  data-aos="fade-up"
                >
                  <div className="bg-white shadow rounded p-3 px-5">
                    <span className="text-xl font-semibold text-primary">
                      {moment(news.createdAt).format("DD")}
                    </span>
                    <span className="font-medium ml-2 text-gray-500">
                      {moment(news.createdAt).format("MMMM")}
                    </span>
                    <span className="font-medium ml-2 text-gray-500">
                      {moment(news.createdAt).format("YYYY")}
                    </span>
                  </div>
                </div>
                <img
                  src={news?.image}
                  className="w-full rounded mb-10 z-0 shadow"
                  data-aos="fade-up"
                />
                <h4 className="text-2xl font-semibold mb-8" data-aos="fade-up">
                  {news.title}
                </h4>
                <p className="text-gray-400 mb-14" data-aos="fade-up">
                  {news.desc}
                </p>
                <p className="mb-16" data-aos="fade-up">
                  {htmlParser(news.content)}
                </p>
                <div
                  className="flex flex-wrap justify-end text-sm text-gray-400"
                  data-aos="fade-up"
                >
                  <a href={configs.BASE_URL} target="_blank" className="ml-4">
                    {configs.DOMAIN}
                  </a>
                  <div className="ml-4">
                    {moment(news.createdAt).format("DD.MM.YYYY")}
                  </div>
                </div>
              </div>
              <div
                className="lg:w-1/4 w-full flex flex-wrap self-stretch py-16"
                data-aos="fade-up"
              >
                <h4
                  className="p-3 text-xl font-semibold w-full text-gray-400 flex items-center"
                  data-aos="fade-up"
                >
                  <div className="w-3 h-1 mr-3 rounded bg-primary-100" />
                  <span>Son Haberler</span>
                </h4>
                {otherNews.map((item, key: number) => (
                  <div
                    key={key}
                    className="lg:w-full md:w-1/2 w-full md:px-4 py-3"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <ShortBox {...item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    );
  else return null;
}
