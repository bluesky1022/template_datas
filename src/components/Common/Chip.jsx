export const Chip = (props) => {
  const { label } = props;
  return (
    <span className="flex items-center bg-primary rounded-full p-[3px_10px] text-white m-[1px_3px] text-nowrap text-[0.7rem] md:text-[1rem]">
      <img
        src="/assets/images/icon.webp"
        height={25}
        width={25}
        className="mr-2 w-[15px] h-[15px] md:w-[25px] md:h-[25px]"
      />
      {label}
    </span>
  );
};
