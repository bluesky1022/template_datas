import parse from "html-react-parser";

export const SectionTitle = ({ Title, SubTitle }) => {
  return (
    <div className="text-center">
      <span className="inline-flex items-center text-xl sm:text-[1.35rem] font-semibold text-[#0061ff] mb-2">
        <img
          src="/assets/images/icon-blue.webp"
          alt=""
          className="w-7 h-7 mr-2 mt-1"
        />
        {parse(SubTitle)}
      </span>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray leading-tight">
        {parse(Title)}
      </h2>
    </div>
  );
};
