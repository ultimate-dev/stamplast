class DescriptionProps {
  data?: string;
  block?: boolean;
}
export default ({ data = "", block = false }: DescriptionProps) => {
  return (
    <div className="relative container mx-auto" data-aos="fade-up">
      <p
        className={
          "text-gray-500 mb-14 w-full" + (block ? "  md:w-full" : " md:w-2/3")
        }
      >
        {data}
      </p>
    </div>
  );
};
