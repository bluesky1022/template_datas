export const Container = (props) => {
  const { children, className = "" } = props;

  return (
    <div className={"w-full px-12 xl:px-24 " + className}>
      <div className="w-full max-w-[1320px] mx-auto">{children}</div>
    </div>
  );
};
