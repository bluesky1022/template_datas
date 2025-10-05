import { Carousel } from "../Common/Carousel";
import { Container } from "../Common/Container";
import { SectionTitle } from "../Common/SectionTitle";
import { PortfolioItem } from "../Portfolio/PortfolioItem";

export const ServicePortfolioSection = ({ Title, SubTitle, list }) => {
  return (
    <div>
      <Container className="bg-[#f2f4f7]">
        <div className="pt-12 pb-20">
          <SectionTitle Title={SubTitle} SubTitle={Title} />
        </div>
        <Carousel
          items={list.map((portfolio, index) => (
            <PortfolioItem portfolio={portfolio} key={"Portfolio_" + index} />
          ))}
        />
      </Container>
    </div>
  );
};
