// Model
import FeatureModel from "../../models/feature";

class FeatureCModel extends FeatureModel {
  index?: number;
}
export default ({ image, title, desc, index = 0 }: FeatureCModel) => {
  return (
    <div className="w-100 px-5 py-5 flex items-center transition-all duration-300 ease-in-out hover:bg-primary-50 rounded">
      {index % 2 == 1 && (
        <img src={image} className="mr-5 h-40 w-1/2 object-cover rounded" />
      )}
      <div>
        <div className="flex items-center">
          <h5 className="text-lg font-semibold">{title}</h5>
        </div>
        <p className="mt-3 text-sm text-gray-500">{desc}</p>
      </div>
      {index % 2 == 0 && (
        <img src={image} className="ml-5 h-32 w-1/2 object-cover rounded" />
      )}
    </div>
  );
};
