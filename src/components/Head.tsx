class SectionProps {
  head?: JSX.Element | string;
}
const Section = ({ head = "" }: SectionProps) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center mb-5" data-aos="fade-up">
        <h5 className="text-2xl font-semibold mr-5">{head}</h5>
        <div className="h-1 w-16 rounded-xl bg-primary" />
      </div>
    </div>
  );
};

class DescProps {
  head?: JSX.Element | string;
  desc?: JSX.Element | string;
}
const Desc = ({ head = "", desc = "" }: DescProps) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-start mb-10 flex-wrap" data-aos="fade-up">
        <h5 className="text-2xl font-semibold pr-10 w-full lg:w-2/5">{head}</h5>
        <div className="flex-1">
          <div className="h-1 w-16 rounded-xl bg-primary my-5" />
          <p className="text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default {
  Section,
  Desc,
};
