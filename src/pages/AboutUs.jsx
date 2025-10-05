import AboutUsMission from "../components/AboutUs/AboutUsMission";
import AboutUsTeam from "../components/AboutUs/AboutUsTeam";
import AboutUsTestimonial from "../components/AboutUs/AboutUsTestimonial";
import AboutUsVission from "../components/AboutUs/AboutUsVission";
import { HeroBanner } from "../components/Common/HeroBanner";
import { aboutUsLists, breadcrumbs } from "../data/AboutUs";

const AboutUs = () => {
  return (
    <div>
      <HeroBanner
        title={"About Us"}
        breadcrumbs={breadcrumbs}
        Lists={aboutUsLists}
      />
      <AboutUsMission />
      <div className="min-h-[400px] bg-[#e7eaf3] w-full flex flex-col justify-center items-center z-[-1]">
        <AboutUsVission />
      </div>
      {/* <AboutUsTestimonial /> */}
      {/* <div className="min-h-[400px] bg-[#e7eaf3] w-full flex flex-col justify-center items-center z-[-1]"> */}
      <AboutUsTeam />
      {/* </div> */}
    </div>
  );
};

export default AboutUs;
