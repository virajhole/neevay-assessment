import React, { useState } from "react";
import ReactSlider from "react-slider";
import Tooltip from "@mui/material/Tooltip";
import vendorData from "./vendorData.json";
// const allSectors = [
//   "Healthcare",
//   "Industrial",
//   "Infrastructure",
//   "Residential",
//   "Commercial",
//   "Hospitals",
// ];

// const SearchResultFilters = () => {
//   const [value, setValue] = useState(0);
//   const [projects, setProjects] = useState(50);
//   const [sectors, setSectors] = useState(false);
//   // const [turnover, setTurnover] = useState(false);
//   const [labour, setLabour] = useState(false);
//   const [businessAge, setBusinessAge] = useState(false);
//   const [projectOpen, setProjectOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [showAll, setShowAll] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedSectors, setSelectedSectors] = useState([]);

//   const [turnover, setTurnover] = useState(false);
//   const [range, setRange] = useState([0, 100]);

//   const handleTurnoverDropdown = () => {
//     setTurnover(!turnover);
//   };
//   const handleSliderChange = (values) => {
//     setRange(values);
//   };

//   const handleChangeTurnover = (event) => {
//     setValue(event.target.value);
//   };

//   const handleChangeProjects = (event) => {
//     setProjects(event.target.value);
//   };

//   const handleSectorsDropdown = () => {
//     setSectors(!sectors);
//   };

//   const handleLocationDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const filteredSectors = allSectors.filter((sector) =>
//     sector.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleCheckboxChange = (sector) => {
//     setSelectedSectors((prevState) =>
//       prevState.includes(sector)
//         ? prevState.filter((c) => c !== sector)
//         : [...prevState, sector]
//     );
//   };

//   const sectorsToShow = showAll ? filteredSectors : filteredSectors.slice(0, 6);

//   // const handleTurnoverDropdown = () => {
//   //     setTurnover(!turnover);
//   // };

//   const handleLabourDropdown = () => {
//     setLabour(!labour);
//   };

//   const handleBusinessAgeDropdown = () => {
//     setBusinessAge(!businessAge);
//   };

//   const handleProjectsDropdown = () => {
//     setProjectOpen(!projectOpen);
//   };
const allSectors = [
  "Healthcare",
  "Industrial",
  "Infrastructure",
  "Residential",
  "Commercial",
  "Hospitals",
];

const SearchResultFilters = ({ onFilterChange }) => {
  // const [value, setValue] = useState(0);
  // const [projects, setProjects] = useState(50);
  // const [sectors, setSectors] = useState(false);
  // const [labour, setLabour] = useState(false);
  // const [businessAge, setBusinessAge] = useState(false);
  // const [projectOpen, setProjectOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [showAll, setShowAll] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [selectedSectors, setSelectedSectors] = useState([]);
  // const [turnover, setTurnover] = useState(false);
  // const [range, setRange] = useState([0, 100]);

  // const [isVerifiedVendorsOnly, setIsVerifiedVendorsOnly] = useState(false);
  // const [isSearchByOfficeAddressOnly, setIsSearchByOfficeAddressOnly] =
  //   useState(false);

  // const handleVerifiedVendorsChange = () => {
  //   setIsVerifiedVendorsOnly(!isVerifiedVendorsOnly);
  // };

  // const handleSearchByOfficeAddressChange = () => {
  //   setIsSearchByOfficeAddressOnly(!isSearchByOfficeAddressOnly);
  // };

  // const handleBusinessAgeDropdown = () => {
  //   setBusinessAge(!businessAge);
  // };
  // const handleProjectsDropdown = () => {
  //   setProjectOpen(!projectOpen);
  // };
  // const handleLabourDropdown = () => {
  //   setLabour(!labour);
  // };
  // const filteredSectors = allSectors.filter((sector) =>
  //   sector.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const sectorsToShow = showAll ? filteredSectors : filteredSectors.slice(0, 6);
  // const handleSectorsDropdown = () => {
  //   setSectors(!sectors);
  // };

  // const handleTurnoverDropdown = () => {
  //   setTurnover(!turnover);
  // };
  // const handleSliderChange = (values) => {
  //   setRange(values);
  //   onFilterChange({ turnover: values }); // Send data to parent
  // };

  // const handleChangeProjects = (event) => {
  //   const projects = event.target.value;
  //   setProjects(projects);
  //   onFilterChange({ projects }); // Send data to parent
  // };

  // const handleCheckboxChange = (sector) => {
  //   setSelectedSectors((prevState) => {
  //     const updatedSectors = prevState.includes(sector)
  //       ? prevState.filter((c) => c !== sector)
  //       : [...prevState, sector];

  //     onFilterChange({ sectors: updatedSectors }); // Send data to parent

  //     return updatedSectors;
  //   });
  // };
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState(50);
  const [sectors, setSectors] = useState(false);
  const [labour, setLabour] = useState(false);
  const [businessAge, setBusinessAge] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [turnover, setTurnover] = useState(false);
  const [range, setRange] = useState([0, 100]);

  const [isVerifiedVendorsOnly, setIsVerifiedVendorsOnly] = useState(false);
  const [isSearchByOfficeAddressOnly, setIsSearchByOfficeAddressOnly] =
    useState(false);

  const handleVerifiedVendorsChange = () => {
    const newValue = !isVerifiedVendorsOnly;
    setIsVerifiedVendorsOnly(newValue);
    onFilterChange({ isVerifiedVendorsOnly: newValue });
  };

  const handleSearchByOfficeAddressChange = () => {
    const newValue = !isSearchByOfficeAddressOnly;
    setIsSearchByOfficeAddressOnly(newValue);
    onFilterChange({ isSearchByOfficeAddressOnly: newValue });
  };

  const handleBusinessAgeDropdown = () => {
    setBusinessAge(!businessAge);
  };

  const handleProjectsDropdown = () => {
    setProjectOpen(!projectOpen);
  };

  const handleLabourDropdown = () => {
    setLabour(!labour);
  };

  const filteredSectors = allSectors.filter((sector) =>
    sector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sectorsToShow = showAll ? filteredSectors : filteredSectors.slice(0, 6);

  const handleSectorsDropdown = () => {
    setSectors(!sectors);
  };

  const handleTurnoverDropdown = () => {
    setTurnover(!turnover);
  };

  const handleSliderChange = (values) => {
    setRange(values);
    onFilterChange({ turnover: values });
  };

  const handleChangeProjects = (event) => {
    const projects = event.target.value;
    setProjects(projects);
    onFilterChange({ projects });
  };

  const handleCheckboxChange = (sector) => {
    setSelectedSectors((prevState) => {
      const updatedSectors = prevState.includes(sector)
        ? prevState.filter((c) => c !== sector)
        : [...prevState, sector];

      onFilterChange({ sectors: updatedSectors });
      return updatedSectors;
    });
  };

  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onFilterChange({ searchQuery: query });
  };
  return (
    <div className="w-[340px] h-[90vh] overflow-hidden">
      <div
        className="flex flex-col sticky px-8 pt-[24px] h-full"
        style={{
          overflowY: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            overflowY: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold">Filters</h3>

          {/* verified vendors only */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/blue_tick.svg"
                alt="tick"
              />
              <p className="ms-2 text-sm w-fit font-medium text-black">
                Verified Vendors Only
              </p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isVerifiedVendorsOnly}
                onChange={handleVerifiedVendorsChange}
              />
              <div className="mr-[2px] relative w-11 h-6 bg-[#ACACAC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/*  Search by Office Address Only */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="ms-2 text-sm w-fit font-medium text-black">
                Search by Office Address Only
                <Tooltip
                  title="Only show vendors with office location in the selected city"
                  arrow
                >
                  <button
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabIndex="0"
                    type="button"
                    aria-label="Only show vendors with office location in the selected city"
                  >
                    <img
                      className="MuiBox-root css-1570kgy"
                      alt="logo"
                      src="https://www.neevay.com/assets/icons/questionMarkLogo.svg"
                    />
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </Tooltip>
              </p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isSearchByOfficeAddressOnly}
                onChange={handleSearchByOfficeAddressChange}
              />
              <div className="mr-[2px] relative w-11 h-6 bg-[#ACACAC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Market Sector */}
          <div>
            <button
              onClick={handleSectorsDropdown}
              className="w-full flex items-center justify-between text-[#2F2F1C] text-base font-semibold"
            >
              Market Sector
              <img
                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
                alt="v"
                className={`transition-transform duration-300 ${
                  sectors ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {sectors && (
              <div
                style={{
                  maxHeight: "200px",
                  overflowY: "scroll",
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
                className="p-2"
              >
                {sectorsToShow.map((sector) => (
                  <div className="flex items-center mb-2" key={sector}>
                    <input
                      type="checkbox"
                      checked={selectedSectors.includes(sector)}
                      onChange={() => handleCheckboxChange(sector)}
                      className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900">
                      {sector}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Turnover */}
          <div>
            <button
              onClick={handleTurnoverDropdown}
              className="w-full flex items-center justify-between text-base text-[#2F2F1C] font-semibold"
            >
              Turnover
              <img
                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
                alt="v"
              />
            </button>
            {turnover && (
              <div>
                <ReactSlider
                  className="w-full h-6 mt-4 mb-8 flex items-center justify-center"
                  thumbClassName="h-6 w-6 bg-white rounded-full cursor-pointer flex items-center justify-center border border-gray-300"
                  trackClassName="h-[2px] bg-[#AEAEAE]"
                  min={0}
                  max={100}
                  step={1}
                  value={range}
                  onChange={handleSliderChange}
                  renderThumb={(props, state) => (
                    <div
                      {...props}
                      className="h-6 w-6 bg-white rounded-full cursor-pointer flex items-center justify-center border border-gray-300"
                    >
                      <div className="absolute bottom-[-25px] px-2 py-1 rounded text-xs  ">
                        {state.valueNow}
                      </div>
                    </div>
                  )}
                />
                {/* <div className="flex justify-between text-sm text-gray-600 my-2">
                                    <span>0</span>
                                    <span>100</span>
                                </div> */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div className="flex flex-col justify-center items-center py-1 px-4 border border-gray-400">
                    <span className="text-sm">Minimum</span>
                    <div className="text-base font-bold text-[#464646]">
                      ₹ {range[0]} Lakh
                    </div>
                  </div>
                  <div className="w-4 h-[1px] bg-gray-400"></div>
                  <div className="flex flex-col items-center py-1 px-4 border border-gray-400">
                    <span className="text-sm">Maximum</span>
                    <div className="text-base font-bold text-[#464646]">
                      ₹ {range[1]} Lakh
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* labour strength */}
          <div>
            {/* Dropdown Button */}
            <button
              onClick={handleLabourDropdown}
              className="w-full flex items-center justify-between text-[#2F2F1C] text-base font-semibold"
            >
              Labour Strength
              <img
                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
                alt="Dropdown"
                className={`transition-transform duration-300 ${
                  labour ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown Content */}
            {labour && (
              <div className="flex flex-col mt-2 p-2 max-h-60 overflow-y-auto bg-gray-100">
                <div className="flex items-center mb-2">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    0 - 20
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    20 - 40
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-radio-3"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label
                    htmlFor="default-radio-3"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    40 - 60
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-radio-4"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label
                    htmlFor="default-radio-4"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    60 - 80
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-radio-5"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label
                    htmlFor="default-radio-5"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    80 - 100
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-6"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label
                    htmlFor="default-radio-6"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    100+ Labourers
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* business age */}
          <div>
            <button
              onClick={handleBusinessAgeDropdown}
              className="w-full flex items-center justify-between text-base text-[#2F2F1C] font-semibold"
            >
              Business Age
              <img
                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
                alt="v"
                className={`transition-transform duration-300 ${
                  businessAge ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {businessAge && (
              <div className="flex flex-col mt-2 p-2">
                <div className="flex items-center mb-2">
                  <input
                    id="business-age-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900">
                    20 - 40 Years
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id=""
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900">
                    20 - 40 Years
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id=""
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900">
                    40+ Years
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* min. projects completed */}
          <div>
            <button
              onClick={handleProjectsDropdown}
              className="w-full flex items-center justify-between text-base text-[#2F2F1C] font-semibold"
            >
              Min. Projects Completed
              <img
                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
                alt="v"
                className={`transition-transform duration-300 ${
                  projectOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {projectOpen && (
              <div className="mt-4">
                <input
                  id="projects"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={projects}
                  onChange={handleChangeProjects}
                  style={{
                    background: `linear-gradient(to right, #000 ${
                      ((projects - 0) / (100 - 0)) * 100
                    }%, #ddd ${((projects - 0) / (100 - 0)) * 100}%)`,
                    accentColor: "#202020", // Color for the pointer
                  }}
                  className="w-full h-[2px] bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>0</span>
                  <span>100+</span>
                </div>
                <div className="text-center mt-[-18px] text-sm text-gray-600">
                  {projects}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultFilters;
