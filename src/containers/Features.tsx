import { RiArrowRightFill } from "react-icons/ri";
// Components
import FeatureBox from "../components/Features/Box";
// Models
import FeatureModel from "../models/feature";

class FeaturesProps {
  items?: FeatureModel[];
}
export default ({ items = [] }: FeaturesProps) => {
  return (
    <section className="relative section pt-16 my-20">
      <div className="absolute z-0 left-0 top-1/2 bg-primary-50 w-96 h-96 rounded-3xl transform rotate-45 -translate-x-1/2" />
      <div className="container mx-auto z-10">
        <div className="flex items-start mb-10 flex-wrap" data-aos="fade-up">
          <h5 className="text-2xl font-semibold pr-10 w-full lg:w-2/5">
            Plastik Üretim Teknoloji Hizmetleri,
            <span
              className="text-primary mx-2"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              Stamplast
            </span>
          </h5>
          <div className="flex-1">
            <div className="h-1 w-16 rounded-xl bg-primary my-5" />
            <p className="text-gray-500">
              Gelecek yıllarda sektörün en güçlü ve prestijli firmalardan biri
              olmayı hedefleyen Stamplast, iş ortaklarına en iyi hizmeti vermeyi
              hedeflemektedir.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap">
          {items &&
            items.map((item, key) => (
              <div
                className="lg:w-1/3 md:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <FeatureBox key={key} {...item} />
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
