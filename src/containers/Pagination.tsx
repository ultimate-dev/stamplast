import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

class PaginationProps {
  count?: number;
  limit?: number;
  offset?: number;
  onChange?: (offset: number) => void;
}
export default ({
  count = 0,
  limit = 8,
  offset = 0,
  onChange = () => {},
}: PaginationProps) => {
  console.log(offset);
  const item_class =
    "cursor-pointer  font-medium rounded-md m-1 w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white";
  return (
    <div className="container mt-16 z-10 mx-auto flex flex-wrap justify-end">
      <div
        className={item_class + " bg-primary-50 text-primary"}
        onClick={() => {
          if (offset > 0) onChange(offset);
        }}
      >
        <RiArrowLeftSLine size={20} />
      </div>
      {Array(Math.ceil(count / limit))
        .fill(0)
        .map((item: any, key: number) => (
          <div
            className={
              item_class +
              (offset == key
                ? " bg-primary text-white"
                : " bg-primary-50 text-primary")
            }
            onClick={() => onChange(key + 1)}
          >
            {key + 1}
          </div>
        ))}
      <div
        className={item_class + " bg-primary-50 text-primary"}
        onClick={() => {
          if (Math.ceil(count / limit) > offset + 1) onChange(offset + 2);
        }}
      >
        <RiArrowRightSLine size={20} />
      </div>
    </div>
  );
};
