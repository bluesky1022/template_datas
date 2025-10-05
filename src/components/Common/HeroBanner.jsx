import { AutoMarquee } from "./AutoMarquee/AutoMarquee";
import { Breadcrumb } from "./Breadcrumb";

export const HeroBanner = (props) => {
  return (
    <div>
      <div className="min-h-[320px] bg-[url('/assets/images/hero-bg.webp')] bg-cover w-full pt-[50px] flex flex-col justify-center items-center z-[-1]">
        <h1 className="z-[1] text-white font-bold text-[1.5rem] pt-[120px] sm:text-[2.5rem] md:text-[3.5rem]">
          {props.title}
        </h1>
        <div className="z-[1] mb-[60px]">
          <Breadcrumb items={props.breadcrumbs} />
        </div>
        <img
          src="/assets/images/logo-720.webp"
          className="absolute self-center filter grayscale-0 w-50 md:w-64 pt-[30px] opacity-25"
        />
      </div>
      <AutoMarquee items={props.Lists} />
    </div>
  );
};
