import { Breadcrumb } from "./Breadcrumb";

export const BannerTitle = ({ Title, breadcrumbs }) => {
  return (
    <div className="min-h-[350px] bg-[#e7eaf3] w-full pt-[96px] flex flex-col justify-center items-center z-[-1]">
      <h1 className="z-[1] text-[#0d0e10] font-bold text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem]">
        {Title}
      </h1>
      <div className="z-[1] mt-[16px]">
        <Breadcrumb items={breadcrumbs} />
      </div>
      <img
        src="/assets/images/logo-720.webp"
        className="absolute self-center filter grayscale-0 w-40 md:w-64 opacity-40"
      />
    </div>
  );
};
