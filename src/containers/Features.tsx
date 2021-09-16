import { RiArrowRightFill } from "react-icons/ri";
// Components
import FeatureBox from "../components/Features/Box";
// Models
import FeatureModel from "../models/feature";

class FeaturesProps {
  data?: FeatureModel[];
}
export default ({ data = [] }: FeaturesProps) => {
  return (
    <div className="container mx-auto z-10">
      <div className="flex items-center flex-wrap">
        {data &&
          data.map((item, key) => (
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
  );
};
