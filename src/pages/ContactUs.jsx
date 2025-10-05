import { HeroBanner } from "../components/Common/HeroBanner";
import ContactInfo from "../components/ContactUs/ContactInfo";
import { breadcrumbs, contactUsLists } from "../data/ContactUs";

const ContactUs = () => {
  return (
    <div>
      <HeroBanner
        title={"Contact Us"}
        breadcrumbs={breadcrumbs}
        Lists={contactUsLists}
      />
      <ContactInfo />
    </div>
  );
};

export default ContactUs;
