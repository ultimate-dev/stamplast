// Models
import BrandModel from "../models/brand";
class BrandsProps {
  items?: BrandModel[];
}
export default ({ items = [] }: BrandsProps) => {
  return (
    <section
      className="relative section bg-gray-50"
      data-aos="fade-up"
    ></section>
  );
};
