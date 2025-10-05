import { Link } from "react-router-dom";
import { Button } from "../Common/Button";

const PortfolioCTA = () => (
  <div className="rounded-2xl bg-indigo-50 p-6 md:p-8">
    <h3 className="text-2xl font-semibold text-indigo-900">
      Get Started with our servies Today
    </h3>
    <p className="mt-4 text-lg text-indigo-900/80">
      Contact us today to learn more about our services and how we can help you
      optimize your business operations for success.
    </p>
    <div className="max-w-32 mt-6 sm:max-w-40">
      <Link to="/contact-us">
        <Button label="Call Now" color="blue" />
      </Link>
    </div>
  </div>
);

export default PortfolioCTA;
