// Containers
import Intro from "../containers/Intro";
import Brands from "../containers/Brands";
import MissionVisionGoals from "../containers/MissionVisionGoals";
import Features from "../containers/Features";
import Products from "../containers/Products";
import News from "../containers/News";
// Data
import brands from "../data/brands";
import features from "../data/features";
import products from "../data/products";
import news from "../data/news";

export default function Home() {
  return (
    <main>
      <Intro />
      <Brands items={brands} />
      <MissionVisionGoals />
      <Features items={features} />
      <Products items={products} />
      <News items={news} />
    </main>
  );
}
