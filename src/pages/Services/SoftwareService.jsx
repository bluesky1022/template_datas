import { AutoMarquee } from "../../components/Common/AutoMarquee/AutoMarquee";
import { HeroBanner } from "../../components/Common/HeroBanner";
import ServiceMission from "../../components/Service/ServiceMission";
import { ServicePortfolioSection } from "../../components/Service/ServicePortfolioSection";
import { ServiceProjectsSection } from "../../components/Service/ServiceProjectsSection";
import { ServiceTechSection } from "../../components/Service/ServiceTechSection";
import {
  SoftportfolioList,
  breadcrumbs,
  serviceLeadingData,
  serviceLists,
  softwareServiceCardList,
  techLists,
} from "../../data/SoftwareServices";

const SoftwareService = () => {
  return (
    <div>
      {/* <HeroBanner
        title={"Software Development"}
        breadcrumbs={breadcrumbs}
        Lists={serviceLists}
      /> */}
      <ServiceMission
        Title={"Empowering Progress with Software"}
        Content={
          "We architect digital revolutions that reshape industries and unlock unprecedented potential. Our mission is to transform ambitious visions into extraordinary software solutions that scale seamlessly, secure relentlessly, and deliver results that exceed expectations. We're not just developing software—we're engineering the future."
        }
        Image1={"Software/banner-3.jpg"}
        Image2={"Software/banner-1.jpg"}
        Image3={"Software/banner-2.webp"}
      />
      <AutoMarquee items={serviceLists} />

      <ServiceProjectsSection
        Title={"Services"}
        SubTitle={
          "Comprehensive Technology Solutions <br/>Tailored to Your Business Needs"
        }
        serviceLeadingData={serviceLeadingData}
        serviceCardList={softwareServiceCardList}
      />

      <ServiceTechSection
        Title={"Technology"}
        SubTitle={
          "Empowering Innovation with <br/>Cutting-Edge Technologies and Tools"
        }
        techLists={techLists}
      />
      <ServicePortfolioSection
        Title={"Portfolio"}
        SubTitle={
          "Transforming Ideas into Reality: <br/>Our Diverse Project Portfolio"
        }
        list={SoftportfolioList}
      />
    </div>
  );
};

export default SoftwareService;
