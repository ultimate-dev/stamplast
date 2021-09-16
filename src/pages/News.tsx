import { Fragment } from "react";
import { useHistory } from "react-router";
// Hooks
import useQuery from "../hooks/useQuery";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
// Containers
import News from "../containers/News";
import Pagination from "../containers/Pagination";
// Data
import newsData from "../data/news";

export default function Home() {
  let history = useHistory();

  const limit = 8;
  let query = useQuery();

  let offset = Number(query.get("offset") || 1) - 1;

  let news = newsData.slice(offset * limit, (offset + 1) * limit);
  let newsCount = newsData.length;

  return (
    <Fragment>
      <SEO title="Haberler" />
      <main>
        <Header.Breadcrumb head="Haberler" />
        <section className="relative section py-16" data-aos="fade-up">
          <News data={news} />
          <Pagination
            count={newsCount}
            limit={limit}
            offset={offset}
            onChange={(offset) => history.push("?offset=" + offset)}
          />
        </section>
      </main>
    </Fragment>
  );
}
