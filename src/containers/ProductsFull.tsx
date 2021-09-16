// Components
import ProductItem from "../components/Products/Item";
// Models
import ProductModel from "../models/product";

class ProductsProps {
  data?: ProductModel[];
}
export default ({ data = [] }: ProductsProps) => {
  return (
    <div className="container z-10 mx-auto">
      <div className="flex flex-wrap self-stretch">
        {data &&
          data.map((item, key) => (
            <div
              key={key}
              className="lg:w-1/4 md:w-1/2 w-full md:px-3 py-3 self-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <ProductItem {...item} />
            </div>
          ))}
      </div>
    </div>
  );
};
