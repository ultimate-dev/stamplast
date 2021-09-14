// Containers
import Intro from "../containers/Intro";
import MissionVisionGoals from "../containers/MissionVisionGoals";
import Features from "../containers/Features";
import Products from "../containers/Products";
import News from "../containers/News";
// Data
import features from "../data/features";
import products from "../data/products";
import news from "../data/news";

export default function Home() {
  return (
    <main>
      <Intro />
      <MissionVisionGoals />
      <Features items={features} />
      <Products items={products} />
      <News items={news} />
    </main>
  );
}
