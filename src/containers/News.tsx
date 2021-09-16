import NewsBox from "../components/News/Box";
import { Link } from "react-router-dom";
import { RiArrowRightFill } from "react-icons/ri";
// Models
import NewsModel from "../models/news";

class NewsProps {
  data?: NewsModel[];
}
export default ({ data = [] }: NewsProps) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap self-stretch">
        {data &&
          data.map((item, key) => (
            <div
              key={key}
              className="lg:w-1/4 md:w-1/2 w-full md:px-3 py-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <NewsBox {...item} />
            </div>
          ))}
      </div>
    </div>
  );
};
