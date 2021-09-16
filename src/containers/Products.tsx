import ProductBox from "../components/Products/Box";
import { RiArrowRightFill } from "react-icons/ri";
// Models
import ProductModel from "../models/product";

class ProductsProps {
  data?: { items: ProductModel[]; desc: string };
}
export default ({ data = { items: [], desc: "" } }: ProductsProps) => {
  return (
    <div className="container z-10 mx-auto">
      <p
        className="text-gray-500 mb-10 w-full md:w-2/3"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        {data.desc}
      </p>
      <div className="flex flex-wrap self-stretch">
        {data.items &&
          data.items.map((item, key) => (
            <div
              key={key}
              className="lg:w-1/4 md:w-1/2 w-full md:px-3 py-3 self-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <ProductBox {...item} />
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
