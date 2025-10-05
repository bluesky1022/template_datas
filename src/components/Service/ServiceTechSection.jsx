import { useState } from "react";
import { Container } from "../Common/Container";
import { SectionTitle } from "../Common/SectionTitle";
import { ServiceBox } from "../Common/ServiceBox";

export const ServiceTechSection = ({ Title, SubTitle, techLists }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with second item active

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(1); // Return to second item when no hover
  };

  return (
    <div>
      <Container>
        <div className="pt-12 pb-12">
          <SectionTitle Title={SubTitle} SubTitle={Title} />
        </div>
        <div className="pb-[100px] w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Object.keys(techLists).map((group, index) => {
              return (
                <ServiceBox
                  key={"ServiceBox_" + index}
                  heading={group}
                  detail={techLists[group].names}
                  icon={techLists[group].icon}
                  active={activeIndex === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
