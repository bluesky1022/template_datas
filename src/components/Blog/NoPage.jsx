import { Link } from "react-router-dom";
import { Button } from "../Common/Button";

export const NoPage = () => {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 bg-gray-50">
      <div className="max-w-xl w-full text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-yellow-600"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm10.5-4.125a1.125 1.125 0 1 0-2.25 0v4.5a1.125 1.125 0 1 0 2.25 0v-4.5Zm0 9a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          The blog remains in the planning stage, lacking ideas.
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={goBack}
            label="Go back"
            color="blue"
            className="inline-flex items-center justify-center"
          ></Button>
          <Link to="/">
            <Button
              label="Go to Home"
              color="blue"
              className="inline-flex items-center justify-center"
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
