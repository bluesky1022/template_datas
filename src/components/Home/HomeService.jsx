import { Link } from "react-router-dom";
import { Container } from "../Common/Container";
import { SectionTitle } from "../Common/SectionTitle";
import HomeServiceCard from "./HomeServiceCard";

const HomeService = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <Container>
        <SectionTitle
          SubTitle={"Our Services"}
          Title={
            "Empower Your Business With Our Comprehensive Technology & IT Solutions"
          }
        ></SectionTitle>

        <div className="w-[80%] mx-auto mt-16">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-start-2 col-span-2">
              <HomeServiceCard
                color="white"
                icon="robot"
                label="AI & Hardware"
              />
            </div>
            <div className="col-span-2">
              <Link to={"/services/hardware"}>
                <HomeServiceCard
                  color="blue"
                  icon="chip"
                  label="Hardware Design"
                />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2 -my-6">
            <div className="col-span-2">
              <Link to={"/services/ai"}>
                <HomeServiceCard
                  color="blue"
                  icon="brain"
                  label="Artificial Intelligence"
                />
              </Link>
            </div>
            <div className="col-span-2">
              <HomeServiceCard
                color="white"
                icon="iot"
                label="AI & Hardware & Software"
              />
            </div>
            <div className="col-span-2">
              <HomeServiceCard
                color="white"
                icon="engineering"
                label="Hardware & Software"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-start-2 col-span-2">
              <HomeServiceCard
                color="white"
                icon="virtual"
                label="AI & Software"
              />
            </div>
            <div className="col-span-2">
              <Link to="/services/software">
                <HomeServiceCard
                  color="blue"
                  icon="software"
                  label="Software Development"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeService;
