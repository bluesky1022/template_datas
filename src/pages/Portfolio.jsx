import { HeroBanner } from "../components/Common/HeroBanner";
import PortfoliosLeft from "../components/Portfolio/PortfoliosLeft";
import { breadcrumbs, portfoliosLists } from "../data/Portfolios";

const Portfolio = () => {
  return (
    <div>
      <HeroBanner
        title={"Portfolios"}
        breadcrumbs={breadcrumbs}
        Lists={portfoliosLists}
      />
      <PortfoliosLeft />
    </div>
  );
};

export default Portfolio;
