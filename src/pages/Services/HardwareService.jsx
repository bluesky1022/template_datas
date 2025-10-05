import { AutoMarquee } from "../../components/Common/AutoMarquee/AutoMarquee";
import { HeroBanner } from "../../components/Common/HeroBanner";
import ServiceMission from "../../components/Service/ServiceMission";
import { ServicePortfolioSection } from "../../components/Service/ServicePortfolioSection";
import { ServiceProjectsSection } from "../../components/Service/ServiceProjectsSection";
import { ServiceTechSection } from "../../components/Service/ServiceTechSection";
import {
  breadcrumbs,
  HardwareportfolioList,
  hardwareServiceCardList,
  serviceLeadingData,
  serviceLists,
  techLists,
} from "../../data/HardwareServices";

const HardwareService = () => {
  return (
    <div>
      {/* <HeroBanner
        title={"Hardware Design"}
        breadcrumbs={breadcrumbs}
        Lists={serviceLists}
      /> */}
      {/* <ServiceMission
        Title={"Driving Innovation Through Hardware"}
        Content={
          "We are committed to delivering robust, reliable, and cutting-edge hardware solutions that empower businesses to operate efficiently and innovate confidently. We strive to combine quality engineering with sustainable practices to build hardware that stands the test of time."
        }
        Image1={"Hardware/custom.webp"}
        Image2={"Hardware/embedded.webp"}
        Image3={"Hardware/iotdesign.webp"}
      /> */}
      <ServiceMission
        Title={"Hardware Services With Cutting-Edge Tech"}
        Content={
          "We are providing hardware service like HPC(High Performance Computing),Xilinx Zynq & Ultra Scale MPSoc Design, blockchain acceleration and AI integrated embedded systems."
        }
        Image1={"Hardware/rtx5090.webp"}
        Image2={"Hardware/FPGA.webp"}
        Image3={"Hardware/jetson.webp"}
      />
      <AutoMarquee items={serviceLists} />

      <ServiceProjectsSection
        Title={"Services"}
        SubTitle={"Comprehensive Hardware Solutions Engineered for Excellence"}
        serviceLeadingData={serviceLeadingData}
        serviceCardList={hardwareServiceCardList}
      />

      <ServiceTechSection
        Title={"Technology"}
        SubTitle={"Innovative Hardware Solutions for a Connected Futures"}
        techLists={techLists}
      />

      <ServicePortfolioSection
        Title={"Portfolio"}
        SubTitle={
          "Showcasing Our Impact: A Portfolio of Innovative Hardware Projects"
        }
        list={HardwareportfolioList}
      />
    </div>
  );
};

export default HardwareService;
