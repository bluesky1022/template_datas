import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AIportfolioList } from "../../data/AIServices";
import { HardwareportfolioList } from "../../data/HardwareServices";
import { SoftportfolioList } from "../../data/SoftwareServices";
import { Container } from "../Common/Container";
import PortfolioCTA from "./PortfolioCTA";
import PortfolioHero from "./PortfolioHero";
import PortfolioProcess from "./PortfolioProcess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Section = ({
  title,
  sectionKey,
  activeSection,
  onToggle,
  items,
  forceOpen = false,
}) => {
  const isActive = forceOpen || activeSection === sectionKey;
  return (
    <div className="bg-slate-100 backdrop-blur rounded-xl shadow-sm ring-1 ring-gray-200 p-3">
      <h3
        className="text-[1.35rem] pb-1 font-semibold text-gray-900 mb-1 pl-4 flex items-center justify-between cursor-pointer select-none"
        onClick={() => onToggle(sectionKey)}
        role="button"
        aria-expanded={isActive}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle(sectionKey);
          }
        }}
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </h3>
      <ul
        className={`divide-y divide-gray-200 overflow-hidden transition-[max-height,opacity] duration-300 ${
          isActive ? "max-h-[999px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {items.length === 0 ? (
          <li className="py-3 text-sm text-gray-500 px-2">No results found.</li>
        ) : (
          items.map((item) => (
            <li key={`${sectionKey}-${item.id || item.projectName}`}>
              <Link
                to={item.id}
                className="group flex items-center justify-between w-full py-3 bg-white text-gray-700 hover:text-black active:bg-indigo-50/60 hover:bg-indigo-50/60 rounded-lg px-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span className="font-medium pl-2">{item.projectName}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-400 transition-all group-hover:text-black group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const PortfoliosLeft = () => {
  const [activeSection, setActiveSection] = useState("");
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleToggle = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const normalizedQuery = query.trim().toLowerCase();
  const normalizedTags = useMemo(
    () => selectedTags.map((t) => t.trim().toLowerCase()).filter(Boolean),
    [selectedTags]
  );

  const filterItems = (arr) =>
    arr.filter((it) => {
      const name = it.projectName?.toLowerCase() || "";
      const desc = it.description?.toLowerCase() || "";
      const qOk = normalizedQuery
        ? name.includes(normalizedQuery) || desc.includes(normalizedQuery)
        : true;

      const techs = (it.technologiesUsed || []).map((t) =>
        String(t).toLowerCase()
      );
      const tagOk = normalizedTags.length
        ? normalizedTags.some((tag) => techs.some((t) => t.includes(tag)))
        : true;

      return qOk && tagOk;
    });

  const { aiItems, softwareItems, hardwareItems } = useMemo(() => {
    return {
      aiItems: filterItems(AIportfolioList),
      softwareItems: filterItems(SoftportfolioList),
      hardwareItems: filterItems(HardwareportfolioList),
    };
  }, [normalizedQuery, normalizedTags]);

  const hasFilterActive = Boolean(normalizedQuery || normalizedTags.length);
  const hasAnyMatch =
    hasFilterActive &&
    aiItems.length + softwareItems.length + hardwareItems.length > 0;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const tags = [
    "Java",
    "Python",
    "Node.js",
    "Express",
    "React",
    "PHP",
    "React Native",
    "Firebase",
    "RERT",
    "AWS",
    "JWT",
    "Selenium",
    "JUnit",
    "Ethereum",
    "Solidity",
    "WordPress",
    "Docker",
    "Kubernetes",
    "TensorFlow",
    "Raspberry Pi",
    "MQTT",
    "Node-RED",
    "FastAPI",
    "Redis",
    "PostgreSQL",
    "Spring Boot",
    "Consulting Service",
  ];

  const onTagClick = (e, tag) => {
    e.preventDefault();
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const renderSection = (title, key, items) => {
    const hide = hasFilterActive && hasAnyMatch && items.length === 0;
    if (hide) return null;
    return (
      <Section
        title={title}
        sectionKey={key}
        activeSection={activeSection}
        onToggle={handleToggle}
        items={items}
        forceOpen={hasFilterActive}
      />
    );
  };

  const { id } = useParams();
  const selectedItem = useMemo(() => {
    if (!id) return null;
    const all = [
      ...SoftportfolioList,
      ...HardwareportfolioList,
      ...AIportfolioList,
    ];
    return all.find((item) => item.id === id) || null;
  }, [id]);

  // Combine all items for the grid view when no specific item is selected
  const allItems = useMemo(() => {
    return [...aiItems, ...softwareItems, ...hardwareItems];
  }, [normalizedQuery, normalizedTags]);

  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Search by Keyword
              </h3>
              <form className="mt-4 relative" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Type keyword here"
                  className="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-4 pr-12 text-sm text-gray-800 placeholder-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Search by keyword"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-[0.2rem] top-[0.18rem] inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow hover:bg-primary"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="max-w-7xl">
                <div className="lg:col-span-4">
                  {renderSection("AI Services", "ai", aiItems)}
                </div>
              </div>

              <div className="max-w-7xl">
                <div className="lg:col-span-4">
                  {renderSection(
                    "Software Services",
                    "software",
                    softwareItems
                  )}
                </div>
              </div>

              <div className="max-w-7xl">
                <div className="lg:col-span-4">
                  {renderSection(
                    "Hardware Services",
                    "hardware",
                    hardwareItems
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 lg:pl-4">
            {/* <div className="rounded-2xl border border-slate-200 mb-8 bg-slate-50 pt-3 pl-6 pr-6 pb-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Tags</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const isActive = selectedTags.includes(tag);
                  return (
                    <li key={tag}>
                      <button
                        onClick={(e) => onTagClick(e, tag)}
                        className={`inline-block rounded-full border py-[0.15rem] px-3 text-sm transition-colors ${
                          isActive
                            ? "border-primary bg-primary text-white"
                            : "border-slate-300 bg-white text-slate-700 hover:border-primary hover:bg-primary hover:text-white"
                        }`}
                        aria-pressed={isActive}
                      >
                        {tag}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div> */}

            {selectedItem ? (
              <div className="space-y-7">
                <PortfolioHero
                  title={selectedItem.projectName}
                  detail={selectedItem.description}
                  url={selectedItem.image}
                  url1={selectedItem.image2}
                  url2={selectedItem.image3}
                />
                <PortfolioProcess tec={selectedItem.technologiesUsed} />
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allItems.map((item, index) => (
                  <div key={index} className="mb-6">
                    <div className="relative group">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={"/assets/images/portfolios/" + item.image}
                          alt={item.projectName}
                          className="w-full h-52 object-cover transition-transform duration-400 group-hover:scale-110 group-hover:rotate-2"
                        />
                      </div>
                      <div className="absolute releative bottom-6 left-6 right-6 p-2 rounded-lg bg-primary opacity-0 translate-y-16 scale-50 transition-all duration-4000 group-hover:opacity-90 group-hover:translate-y-0 group-hover:scale-100">
                        <Link
                          to={item.id}
                          className="ml-10 inline-flex text-center items-center text-white font-bold text-base"
                        >
                          Learn More
                          <span className="ml-5 transform -rotate-45 inline-block mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <PortfolioCTA />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfoliosLeft;
