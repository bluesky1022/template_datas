export const MarqueeItem = (props) => {
  const { label } = props;
  return (
    <div className="text-primary flex items-center mx-[20px] flex-nowrap">
      <img src="/assets/images/icon-blue.webp" height={20} width={20} />
      <span className="ml-[5px] text-nowrap">{label}</span>
    </div>
  );
};
