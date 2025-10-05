import { Container } from "../Common/Container";
import { FixedCardSlider } from "../Common/FixedCardSlider";
import { SectionTitle } from "../Common/SectionTitle";

export const ServiceProjectsSection = ({
  Title,
  SubTitle,
  serviceLeadingData,
  serviceCardList,
}) => {
  return (
    <div>
      <Container className="bg-[#f2f4f7]">
        <div className="pt-12">
          <SectionTitle Title={SubTitle} SubTitle={Title} />
        </div>
        <div className="relative w-full px-4 md:px-0">
          <FixedCardSlider leading={serviceLeadingData} cards={serviceCardList} />
        </div>
      </Container>
    </div>
  );
};
