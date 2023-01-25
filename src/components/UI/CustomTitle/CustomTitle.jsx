import classes from "./CustomTitle.module.scss";

export const CustomTitle = ({
  children,
  tag = null,
  align = "center",
  className,
}) => {
  const Tag = tag || "h2";

  return (
    <Tag
      className={`${classes.title} ${className}`}
      style={{ textAlign: align }}
    >
      {children}
    </Tag>
  );
};
