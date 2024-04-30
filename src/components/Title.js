import clsx from "clsx";

const Title = ({ title, className, ...props }) => {
  return (
    <h2
      className={clsx("font- tracking-tight text-gray-900", className)}
      {...props}
    >
      {title}
    </h2>
  );
};

export default Title;
