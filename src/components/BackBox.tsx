class BackBoxProps {
  align?: "left" | "right";
  color?: string;
  size?: number;
}
export default ({
  align = "left",
  color = "primary-50",
  size = 80,
}: BackBoxProps) => {
  const LEFT_CLASS = " left-0  -translate-x-1/2";
  const RIGHT_CLASS = " right-0  translate-x-1/2";

  let className = "absolute z-0 top-1/2 rounded-3xl transform rotate-45";

  className += " -mt-" + size / 2 + " w-" + size + " h-" + size;

  className += " bg-" + color;

  className += align == "left" ? LEFT_CLASS : RIGHT_CLASS;

  return <div className={className} />;
};
