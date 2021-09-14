import moment from "moment";
import { motion } from "framer-motion";
// Utils
import slugify from "../../utils/slugify";
// Models
import NewsModel from "../../models/news";

const hover = { scale: 0.95, translateY: 10 };
const tap = { scale: 0.95, translateY: 10 };
export default ({ id, title, desc, image, createdAt }: NewsModel) => {
  return (
    <motion.a
      whileHover={hover}
      whileTap={tap}
      className="flex flex-col bg-white rounded shadow cursor-pointer overflow-hidden h-full"
    >
      <div className="relative h-64 w-full rounded overflow-hidden">
        <img className="h-full w-full object-cover" src={image} />
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-gray-900 flex flex-col justify-between">
          <div className="flex">
            <div className="bg-white p-2 rounded-br text-center shadow">
              <div className="text-xl font-semibold text-primary px-3">
                {moment(createdAt).format("DD")}
              </div>
              <div className="text-xs text-gray-500">
                {moment(createdAt).format("MMM")}
              </div>
            </div>
          </div>
          <div className="p-5 text-white font-medium text-md">{title}</div>
        </div>
      </div>
      <div className="flex items-center text-sm px-5 py-4 text-gray-500 flex-1">
        {desc}
      </div>
    </motion.a>
  );
};
