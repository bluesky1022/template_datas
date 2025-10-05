import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioProcess = ({ tec = [] }) => (
  <article>
    <div className="p-4 pb-10">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="heading1">
            <div className="h-4"></div>
            <div className="boxs-area">
              <div className="flex flex-col lg:flex-row justify-between text-center lg:items-center gap-4">
                <ul className="grid grid-cols-3 lg:pl-20  gap-3 md:gap-4">
                  {tec.map((item, idx) => (
                    <li
                      className="flex items-start text-base font-bold text-gray-900 px-4 py-3 bg-gray-100 rounded-lg transition-all duration-300 hover:cursor-pointer hover:-translate-y-1.5 hover:bg-primary hover:text-white w-full sm:w-auto sm:min-w-[250px] break-words whitespace-normal group"
                      key={idx}
                    >
                      <span className="flex justify-center items-center w-6 h-6 rounded-full bg-primary mr-2 group-hover:bg-white">
                        <FontAwesomeIcon
                          icon={faCheck}
                          size="sm"
                          className="text-white group-hover:text-primary"
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default PortfolioProcess;
