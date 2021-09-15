import ProductBox from "../components/Products/Box";
import { RiArrowRightFill } from "react-icons/ri";
// Models
import ProductModel from "../models/product";

class ProductsProps {
  items?: ProductModel[];
}
export default ({ items = [] }: ProductsProps) => {
  return (
    <section className="relative section py-16">
      <div className="container z-10 mx-auto">
        <div className="flex items-center mb-5" data-aos="fade-up">
          <h5 className="text-2xl font-semibold mr-5">Ürünler</h5>
          <div className="h-1 w-16 rounded-xl bg-primary" />
        </div>
        <p
          className="text-gray-500 mb-10 w-full md:w-2/3"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          Stamplast müşterilerini yüksek kalitede ve geniş bir ürün yelpazesiyle
          buluşturmak hedefiyle yola çıkmıştır. En ileri teknolojilerle ve en
          sıkı kalite kontrol prosedürleriyle üretilen ürünler; araç aydınlatma,
          ayna sistemlerinde ve araç iç ve dış trim parçaları olarak
          kullanılmaktadır.
        </p>
        <div className="flex flex-wrap self-stretch">
          {items &&
            items.map((item, key) => (
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
    </section>
  );
};
