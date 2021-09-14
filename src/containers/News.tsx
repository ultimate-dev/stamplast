import NewsBox from "../components/News/Box";
import { RiArrowRightFill } from "react-icons/ri";
// Models
import NewsModel from "../models/news";

class NewsProps {
  items?: NewsModel[];
}
export default ({ items = [] }: NewsProps) => {
  return (
    <section className="section bg-primary-50 py-16 my-20">
      <div className="container mx-auto">
        <div className="flex items-center mb-5" data-aos="fade-up">
          <h5 className="text-2xl font-semibold mr-5">Haberler</h5>
          <div className="h-1 w-16 rounded-xl bg-primary" />
        </div>
        <div className="flex flex-wrap self-stretch">
          {items &&
            items.map((item, key) => (
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
    </section>
  );
};
