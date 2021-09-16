import slugify from "slugify";
export default (text?: string, id?: number) => {
  return (
    slugify(String(text), {
      lower: true,
      locale: "tr",
    }).replace(/[^\w-]+/g, "") +
    "-" +
    id
  );
};
