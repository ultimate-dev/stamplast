import { RiArrowRightFill } from "react-icons/ri";
import { Link } from "react-router-dom";
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
              className="w-full"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <FeatureBox key={key} {...item} index={key} />
            </div>
          ))}
      </div>
    </div>
  );
};
