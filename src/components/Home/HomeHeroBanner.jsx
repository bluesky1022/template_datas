import { Link } from "react-router-dom";
import { Button } from "../Common/Button";
import { Container } from "../Common/Container";

const HomeHeroBanner = () => {
  return (
    <div className="min-h-[560px] sm:min-h-[680px] md:min-h-[800px] flex items-center bg-[url('/assets/images/hero-bg.webp')] bg-cover bg-center">
      <Container className="px-4 sm:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          <div className="text-white pt-6 sm:pt-8 md:pt-12 xl:pt-10 px-2 mt-20 xl:mt-0 text-center xl:text-left">
            <span className="inline-block rounded-full px-4 py-1 text-xs sm:text-sm md:text-lg lg:text-xl font-medium bg-white bg-opacity-10">
              Bridging the gap between ideas and reality
            </span>
            <p className="font-normal text-3xl sm:text-5xl xl:text-7xl md:font-bold xl:w-[700px] md:leading-tight mt-4">
              Innovative Space:
            </p>
            <p className="text-2xl sm:text-4xl xl:text-5xl font-bold leading-tight">
              AI meets the Future of
            </p>
            <p className="text-2xl sm:text-4xl xl:text-5xl font-bold leading-tight">
              Hardware & Software
            </p>
            <p className="text-sm md:text-lg xl:text-xl font-semibold leading-relaxed w-[150px] sm:w-[300px] md:w-[700px] lg:w-[900px] xl:w-[500px] mt-6 md:pr-5 mx-auto xl:mx-0">
              Empowering businesses with intelligent systems and robust
              engineering solutio
            </p>
            <div className="w-[150px] sm:w-[390px] grid grid-cols-1 sm:grid-cols-12 items-center gap-3 sm:gap-4 mt-6 sm:mt-8 mx-auto xl:mx-0">
              <div className="sm:col-span-5">
                <Link to={"/portfolios"}>
                  <Button
                    label="Explore"
                    color="blue"
                    className="w-full justify-center"
                  />
                </Link>
              </div>
              <div className="sm:col-span-6">
                <Link to={"/contact-us"}>
                  <Button
                    label="Book a Call"
                    color="white"
                    className="w-full justify-center"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-10/12 xl:w-10/12 mx-auto md:ml-10 h-auto px-2 flex justify-center items-center">
            <img
              src="/assets/images/hero.webp"
              alt="hero"
              className="w-4/12 sm:w-6/12 md:w-6/12 xl:w-full xl:max-w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHeroBanner;
