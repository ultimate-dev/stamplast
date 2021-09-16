import NewsBox from "../components/News/Box";
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
      <div
        className="mt-10 flex items-center justify-start"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <a className="text-sm mx-5 text-gray-500 underline flex items-center">
          Tümünü Görüntüle <RiArrowRightFill className="ml-1" size={16} />
        </a>
      </div>
    </div>
  );
};
