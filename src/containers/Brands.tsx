// Models
import BrandModel from "../models/brand";
import CarouselResp from "react-multi-carousel";

class BrandsProps {
  items?: BrandModel[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1150 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1150, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

export default ({ items = [] }: BrandsProps) => {
  return (
    <section className="relative section bg-gray-50" data-aos="fade-up">
      <div className="w-full">
        <CarouselResp responsive={responsive} arrows={false} infinite autoPlay>
          {items.map((item, key: number) => (
            <div key={key} className="p-5 py-8">
              <img
                draggable={false}
                src={item.image}
                className="w-full h-16 object-contain filter opacity-50"
              />
            </div>
          ))}
        </CarouselResp>
      </div>
    </section>
  );
};
