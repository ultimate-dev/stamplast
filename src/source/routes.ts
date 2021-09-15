// Page
import Home from "../pages/Home";
import CorporateAbout from "../pages/Corporate/About";
import CorporateOurPolicy from "../pages/Corporate/OurPolicy";
import Features from "../pages/Features";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Products from "../pages/Products";
import ProductsDetail from "../pages/ProductsDetail";
import Contact from "../pages/Contact";

const suffix = "/";
export default [
  {
    path: [suffix, suffix + "home"],
    page: Home,
    exact: true,
  },
  {
    path: [suffix + "corporate", suffix + "corporate/about"],
    page: CorporateAbout,
    exact: true,
  },
  {
    path: suffix + "corporate/our-policy",
    page: CorporateOurPolicy,
    exact: true,
  },
  {
    path: suffix + "features",
    page: Features,
    exact: true,
  },
  {
    path: suffix + "news",
    page: News,
    exact: true,
  },
  {
    path: suffix + "news/:slug",
    page: NewsDetail,
    exact: true,
  },
  {
    path: suffix + "products",
    page: Products,
    exact: true,
  },
  {
    path: suffix + "products/:slug",
    page: ProductsDetail,
    exact: true,
  },
  {
    path: suffix + "contact",
    page: Contact,
    exact: true,
  },
];
