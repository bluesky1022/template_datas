import { Link } from "react-router-dom";

const PortfolioBenefits = () => (
  <article>
    <div>
      <h5 className="text-lg font-semibold text-gray-900">
        Benefits of (ERP) Implementation
      </h5>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-200 p-5 shadow-sm transition-shadow hover:shadow"
          >
            <h4 className="text-base font-semibold text-gray-900">
              <Link to="/project/project-details">Improved Efficiency</Link>
            </h4>
            <p className="mt-3 text-sm text-gray-600">
              Streamline business processes and workflows, reducing manual
              effort and improving productivity.
            </p>
          </div>
        ))}
      </div>
    </div>
  </article>
);

export default PortfolioBenefits;
