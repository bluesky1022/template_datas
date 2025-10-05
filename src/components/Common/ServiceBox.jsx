import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ServiceBox = (props) => {
  const {
    heading,
    detail,
    icon,
    active = false,
    onMouseEnter,
    onMouseLeave,
  } = props;
  return (
    <div
      className={`relative flex flex-col m-[0.7rem] p-[24px] hover:cursor-pointer group rounded-[7px] group duration-300 ${
        active
          ? "bg-primary -translate-y-[10px]"
          : "bg-[#f2f7ff] hover:bg-primary hover:-translate-y-[10px]"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full flex justify-between items-center">
        <div
          className={`w-[50px] h-[50px] rounded-full flex justify-center items-center ${
            active ? "bg-white" : "bg-primary"
          }`}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`${active ? "text-primary" : "text-white"}`}
          />
        </div>
        <div
          className={`w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer duration-500 ${
            active
              ? "bg-white opacity-100"
              : "bg-primary opacity-0 hover:bg-white group-hover:opacity-100"
          }`}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`-rotate-45 ${active ? "text-primary" : "text-white"}`}
          />
        </div>
      </div>
      <h1
        className={`mt-[24px] text-[20px] font-[700] ${
          active ? "text-white" : "text-[#0D0E10] group-hover:text-white"
        }`}
      >
        {heading}
      </h1>
      <p
        className={`mt-[16px] ${
          active ? "text-white" : "text-[#676879] group-hover:text-white"
        }`}
      >
        {detail}
      </p>
    </div>
  );
};
