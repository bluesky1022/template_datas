import parse from "html-react-parser";

export const ServiceSectionTitle = ({ Title, SubTitle }) => {
  return (
    <div className="w-full lg:w-2/3 mx-auto text-center">
      <div className="pt-12 pb-6">
        <div className="text-center">
          <span className="inline-flex items-center font-bold text-lg text-[#0061ff] mb-1">
            <img
              src="/assets/images/icon-blue.webp"
              alt=""
              className="w-8 h-8 mr-2"
            />
            {parse(Title)}
          </span>
          <div>
            <br />
          </div>
          <h2 className="text-[48px] font-bold text-gray leading-tight">
            {parse(SubTitle)}
          </h2>
        </div>
      </div>
    </div>
  );
};
