// Model
import FeatureModel from "../../models/feature";
export default ({ icon, title, desc }: FeatureModel) => {
  const icon_type = "fill";
  return (
    <div className="px-5 py-5 transition-all duration-300 ease-in-out hover:bg-primary-50 rounded">
      <div className="flex items-center">
        <div className="mr-3 bg-primary-100 py-1 px-3 rounded">
          <i
            className={"text-primary text-2xl ri-" + icon + "-" + icon_type}
          ></i>
        </div>
        <h5 className="text-lg font-semibold">{title}</h5>
      </div>
      <p className="mt-3 text-sm text-gray-500">{desc}</p>
    </div>
  );
};
