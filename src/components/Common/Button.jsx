import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Button = (props) => {
  const {
    label,
    color = "blue",
    className = "",
    onClick,
    type = "button",
    disabled = false,
  } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      className={
        `inline-flex justify-between items-center relative rounded-full p-[12px_14px_12px_16px] cursor-pointer select-none touch-manipulation ${
          color == "blue" ? "bg-primary text-white" : "bg-white text-gray-900"
        } group hover:text-white transition-colors duration-200 ease-out active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed ` +
        className
      }
      onClick={onClick}
    >
      <div className="absolute h-full w-0 bg-black bg-opacity-70 top-0 left-0 rounded-full z-[1] opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>
      <div className="z-[2] text-md md:text-lg lg:text-xl leading-[18px] font-[600]">
        {label}
      </div>
      <div
        className={`flex justify-center items-center w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[32px] lg:h-[32px] rounded-full ml-[10px] z-[2] ${
          color == "blue" ? "bg-white" : "bg-primary"
        }`}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`${
            color == "blue" ? "text-primary" : "text-white"
          } -rotate-45 `}
        />
      </div>
    </button>
  );
};
