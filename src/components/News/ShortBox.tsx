import moment from "moment";
import { motion } from "framer-motion";
// Utils
import slugify from "../../utils/slugify";
// Models
import NewsModel from "../../models/news";
import { Link } from "react-router-dom";

const hover = { rotate: 2 };
const tap = { rotate: 2 };
export default ({ id, title, desc, image, createdAt }: NewsModel) => {
  return (
    <Link to={"/news/" + slugify(title, id)}>
      <motion.a
        whileHover={hover}
        whileTap={tap}
        className="flex flex-col bg-white rounded shadow cursor-pointer overflow-hidden h-full"
      >
        <div className="relative h-60 w-full rounded overflow-hidden">
          <img className="h-full w-full object-cover" src={image} />
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-gray-900 flex flex-col justify-between">
            <div className="flex">
              <div className="flex items-center bg-white px-4 py-2 rounded-br text-center shadow">
                <div className="text-lg font-semibold text-primary">
                  {moment(createdAt).format("DD")}
                </div>
                <div className="ml-3 text-sm text-gray-500">
                  {moment(createdAt).format("MMMM")}
                </div>
              </div>
            </div>
            <div className="p-5 text-white font-medium text-md">{title}</div>
          </div>
        </div>
      </motion.a>
    </Link>
  );
};
