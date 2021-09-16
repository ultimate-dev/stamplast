class DescriptionProps {
  data?: string;
}
export default ({ data = "" }: DescriptionProps) => {
  return (
    <div className="relative container mx-auto" data-aos="fade-up">
      <p className="text-gray-500 mb-10 w-full md:w-2/3">{data}</p>
    </div>
  );
};
