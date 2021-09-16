import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
// Utils
import slugify from "../../utils/slugify";
// Models
import ProductModel from "../../models/product";
import { RiArrowRightFill } from "react-icons/ri";

export default ({ id, name, image, desc }: ProductModel) => {
  return (
    <Tilt>
      <Link
        to={"/products/" + slugify(name, id)}
        className="bg-white shadow h-full p-2 flex flex-col cursor-pointer rounded-tl-3xl rounded-br-3xl rounded overflow-hidden"
      >
        <div className="relative h-48 w-full rounded-tl-3xl rounded overflow-hidden">
          <img className="h-full w-full object-cover" src={image} />
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-gray-900 flex flex-col justify-end">
            <div className="p-5 text-white font-medium text-md">{name}</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center p-3 py-4">
          <div className="text-sm text-gray-500 mb-4">{desc}</div>
          <div>
            <a className="flex items-center text-primary text-sm font-medium rounded">
              İncele
              <RiArrowRightFill className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </Link>
    </Tilt>
  );
};
