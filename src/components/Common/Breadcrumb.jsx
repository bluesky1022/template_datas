import { Link } from "react-router-dom";

export const Breadcrumb = (props) => {
  const { items = [] } = props;
  return (
    <>
      <div className="flex items-center">
        <img src="/assets/images/icon.webp" height={30} width={30} />
        {items.map((navitem, index) => (
          <div
            key={"breadcrumb_" + index}
            className="flex items-center cursor-pointer"
          >
            <Link
              to={navitem.link}
              className="text-white text-[20px] font-bold leading-[30px] mx-[2]"
            >
              {navitem.title}
            </Link>
            <div className="text-white w-[21.3px] text-center">&gt;</div>
          </div>
        ))}
      </div>
    </>
  );
};
