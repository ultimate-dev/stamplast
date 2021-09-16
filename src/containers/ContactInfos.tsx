import { motion } from "framer-motion";
import { RiMailFill, RiMapPinFill, RiPhoneFill } from "react-icons/ri";
// Models
import Settings from "../models/settings";

class ContactInfosProps {
  data?: Settings;
}
const hover = { scale: 0.95 };
const tap = { scale: 0.95 };
export default ({ data = {} }: ContactInfosProps) => {
  return (
    <div className="container mx-auto flex flex-wrap self-stretch">
      <div className="md:w-1/3 w-full p-3" data-aos="fade-up">
        <motion.a
          whileHover={hover}
          whileTap={tap}
          href={"tel:" + data.phone}
          className="rounded shadow py-4 px-6 h-full flex items-center"
        >
          <div className="bg-primary-50 p-3 rounded mr-4">
            <RiPhoneFill
              className="text-center text-primary"
              size={30}
              style={{ minWidth: 30 }}
            />
          </div>
          <div className="text-gray-500">{data.phone}</div>
        </motion.a>
      </div>
      <div className="md:w-1/3 w-full p-3" data-aos="fade-up">
        <motion.a
          whileHover={hover}
          whileTap={tap}
          href={"mailto:" + data.email}
          className="rounded shadow py-4 px-6 h-full flex items-center"
        >
          <div className="bg-primary-50 p-3 rounded mr-4">
            <RiMailFill
              className="text-center text-primary"
              size={30}
              style={{ minWidth: 30 }}
            />
          </div>
          <div className="text-gray-500">{data.email}</div>
        </motion.a>
      </div>
      <div className="md:w-1/3 w-full p-3" data-aos="fade-up">
        <motion.a
          whileHover={hover}
          whileTap={tap}
          href={data.address_url}
          target="_blank"
          className="rounded shadow py-4 px-6 h-full flex items-center"
        >
          <div className="bg-primary-50 p-3 rounded mr-4">
            <RiMapPinFill
              className="text-center text-primary"
              size={30}
              style={{ minWidth: 30 }}
            />
          </div>
          <div>
            <div className="text-sm text-gray-500">{data.address_long}</div>
            <div className="text-sm text-gray-400">{data.address_short}</div>
          </div>
        </motion.a>
      </div>
    </div>
  );
};
