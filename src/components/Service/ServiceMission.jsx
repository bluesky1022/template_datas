import { Link } from "react-router-dom";
import { Container } from "../Common/Container";

const ServiceMission = ({ Title, Content, Image1, Image2, Image3 }) => {
  return (
    <div className="min-h-[500px] bg-[url('/assets/images/hero-bg.webp')] bg-cover w-full py-16 pt-[170px] flex flex-col justify-center items-center z-[-1]">
      <Container>
        <div className="pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div>
            <div className="max-w-xl">
              <span className="inline-flex justify-center items-center text-xl font-semibold text-white mb-4">
                <img
                  src="/assets/images/icon.webp"
                  alt=""
                  className="mr-2 w-7 h-7 mt-1"
                />{" "}
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-white">
                {Title}
              </h2>
              <p className="mt-4 text-white text-xl">{Content}</p>
            </div>
          </div>

          {/* Right: Image collage */}
          <div className="relative h-[520px] sm:h-[420px]">
            <div className="absolute top-0 left-0 w-1/3 md:w-[60%] h-64 md:h-72 rounded-xl overflow-hidden animate-float-up">
              <img
                src={"/assets/images/Services/" + Image1}
                alt="solution 1"
                className="h-full w-full stretch animate-gentle-rotate"
              />
            </div>

            <div className="absolute left-20 x-5 w-1/3 md:w-[65%] h-64 md:h-72 ml-auto mt-20 md:mt-24 rounded-xl overflow-hidden animate-float-diag">
              <img
                src={"/assets/images/Services/" + Image2}
                alt="solution 2"
                className="h-full w-full stretch"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-1/2 md:w-[45%] h-48 md:h-56 rounded-xl overflow-hidden animate-float-x">
              <img
                src={"/assets/images/Services/" + Image3}
                alt="solution 3"
                className="h-full w-full stretch"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceMission;
