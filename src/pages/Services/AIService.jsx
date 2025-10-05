import { AutoMarquee } from "../../components/Common/AutoMarquee/AutoMarquee";
import { HeroBanner } from "../../components/Common/HeroBanner";
import ServiceMission from "../../components/Service/ServiceMission";
import { ServicePortfolioSection } from "../../components/Service/ServicePortfolioSection";
import { ServiceProjectsSection } from "../../components/Service/ServiceProjectsSection";
import { ServiceTechSection } from "../../components/Service/ServiceTechSection";
import {
  AIportfolioList,
  aiServiceCardList,
  breadcrumbs,
  serviceLeadingData,
  serviceLists,
  techLists,
} from "../../data/AIServices";

const AIService = () => {
  return (
    <div>
      {/* <HeroBanner
        title={"Artificial Intelligence"}
        breadcrumbs={breadcrumbs}
        Lists={serviceLists}
      /> */}
      <ServiceMission
        Title={"AI Vision Solutions"}
        Content={
          "We make computers see and understand images like humans do. Our services help businesses use visual data to make better decisions, work faster, and solve problems automatically. We specialize in Computer Vision, performance optimization, and NVIDIA technology to deliver practical AI solutions that anyone can use.."
        }
        Image1={"AI/ai-cv-banner.png"}
        Image2={"AI/ai-voice-agent-banner.png"}
        Image3={"AI/ai-nvidia-banner.png"}
      />
      <AutoMarquee items={serviceLists} />
      <ServiceProjectsSection
        Title={"Services"}
        SubTitle={"Advanced AI Solutions Tailored for Tomorrow's Challenges"}
        serviceLeadingData={serviceLeadingData}
        serviceCardList={aiServiceCardList}
      />

      <ServiceTechSection
        Title={"Technology"}
        SubTitle={"Pioneering AI Technologies for Intelligent Solutions"}
        techLists={techLists}
      />

      <ServicePortfolioSection
        Title={"Portfolio"}
        SubTitle={
          "Innovative AI Projects Transforming<br/> Industries and Enhancing Lives"
        }
        list={AIportfolioList}
      />
    </div>
  );
};

export default AIService;
