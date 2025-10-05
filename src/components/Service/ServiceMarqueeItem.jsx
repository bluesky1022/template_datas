import { AutoMarquee } from "../Common/AutoMarquee/AutoMarquee";
import { BannerTitle } from "../Common/BannerTitle";
export const ServiceMarqueeItem = ({ Title, breadcrumbs, serviceLists }) => {
  return (
    <div className="flex flex-col items-center">
      <BannerTitle Title={Title} breadcrumbs={breadcrumbs} />
      <AutoMarquee items={serviceLists} />
    </div>
  );
};
