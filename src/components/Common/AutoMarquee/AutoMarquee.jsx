import { MarqueeItem } from "./MarqueeItem";

export const AutoMarquee = (props) => {
  const { items = [] } = props;
  return (
    <>
      <div className="w-full h-[60px] bg-[#f2f4f7] border-solid border-y-2 mt-[1px] border-y-primary overflow-hidden flex items-center">
        <div className="h-[70px] flex items-center flex-nowrap animate-marquee-slow">
          {items.map((item, index) => (
            <MarqueeItem key={"marqueeItem_" + index} label={item} />
          ))}
        </div>
        <div className="h-[70px] flex items-center flex-nowrap animate-marquee-slow">
          {items.map((item, index) => (
            <MarqueeItem key={"marqueeItem_" + index} label={item} />
          ))}
        </div>
      </div>
    </>
  );
};
