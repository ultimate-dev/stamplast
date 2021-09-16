import { Link } from "react-router-dom";
import { RiArrowRightFill } from "react-icons/ri";

class ViewLinkProps {
  to?: string;
}
export default ({ to = "" }: ViewLinkProps) => {
  return (
    <div className="container mx-auto">
      <div
        className="mt-10 flex items-center justify-start"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <Link
          to={to}
          className="text-sm mx-5 text-gray-500 underline flex items-center"
        >
          Tümünü Görüntüle <RiArrowRightFill className="ml-1" size={16} />
        </Link>
      </div>
    </div>
  );
};
