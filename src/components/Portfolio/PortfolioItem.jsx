import { Button } from "../Common/Button";
import { Chip } from "../Common/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const PortfolioItem = (props) => {
  const { portfolio } = props;
  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-10 ">
      <div className="flex flex-col gap-5 px-3 max-w-[500px] mx-auto items-stretch">
        {/* Big image: 4:3 aspect ratio, full width */}
        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
          <img
            src={`/assets/images/portfolios/${portfolio.image}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Two small images: each 1:1 aspect ratio, side by side, equal width */}
        <div className="flex w-full gap-3">
          <div className="w-1/2 aspect-square rounded-xl overflow-hidden shadow-xl">
            <img
              src={`/assets/images/portfolios/${portfolio.image2}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 aspect-square rounded-xl overflow-hidden shadow-xl">
            <img
              src={`/assets/images/portfolios/${portfolio.image3}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-7">
        <div className="font-bold md:text-[1.6rem] lg:text-[2.4rem] mb-3">
          {portfolio.projectName}
        </div>
        <div className="md:text-[1.1rem] lg:text-[1.4rem] mb-5 text-[#676fa8]">
          {portfolio.description}
        </div>
        <div>
          <div className="md:text-[1.3rem] lg:text-[1.6rem] font-semibold">
            Key Achievements
          </div>
          <div className="text-[#676fa8]">
            <ul className="flex flex-col gap-2 mt-6 text-gray-900">
              {portfolio.keyAchievements.map((label) => (
                <li className="flex items-center" key={label}>
                  <span className="flex justify-center items-center w-6 h-6 rounded-full bg-primary mr-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      className="text-white"
                    />
                  </span>
                  <span className="text-lg font-semibold">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-5 flex flex-wrap">
          {portfolio.technologiesUsed.map((tech, index) => (
            <Chip label={tech} key={"TechChip_" + index} />
          ))}
        </div>
        <div className="relative flex">
          <Link to={"/portfolios/" + portfolio.id}>
            <Button label="View More" color="blue" />
          </Link>
        </div>
      </div>
    </div>
  );
};
