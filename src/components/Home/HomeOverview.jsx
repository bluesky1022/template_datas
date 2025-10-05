import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { Button } from "../Common/Button";
import { Container } from "../Common/Container";

const HomeOverview = () => {
  return (
    <div className="w-full py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="pt-12">
            <img
              src="/assets/images/overview.webp"
              className="w-fit h-fit rounded-md"
              alt="overview"
            />
          </div>
          <div className="px-4 md:px-12 py-4">
            <div className="flex items-center">
              <img
                src="/assets/images/icon-blue.webp"
                alt="icon"
                className="h-7 mt-1 mr-3"
              />
              <span className="text-lg sm:text-xl md:text-lg xl:text-[1.35rem] font-semibold text-primary">
                About TrioSpace
              </span>
            </div>
            <p className="text-xl sm:text-3xl md:text-xl xl:text-3xl font-semibold leading-tight text-gray-900 mt-4">
              Transforming Industries with Technology{" "}
              <span className="text-primary">Our Commitment</span>
            </p>
            <p className="text-sm sm:text-lg md:text-sm xl:text-lg text-gray-800 mt-6">
              At TrioSpace, we are passionate about leveraging technology to
              drive meaningful change. With a team of seasoned experts in IT
              solutions, we're committed to delivering cutting.
            </p>
            <ul className="flex flex-col gap-2 mt-6 text-gray-900">
              {[
                "Artificial Intelligence",
                "Hardware Design",
                "Software Development",
              ].map((label) => (
                <li className="flex items-center" key={label}>
                  <span className="flex justify-center items-center w-6 h-6 rounded-full bg-primary mr-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      className="text-white"
                    />
                  </span>
                  <span className=" text-sm sm:text-lg md:text-sm xl:text-lg font-semibold">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex mt-6">
              <Link to="/about-us">
                <Button label="Learn More" color="blue" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeOverview;
