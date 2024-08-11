import React, { useState, useEffect } from "react";
import SearchResultNavbar from "./SearchResultNavbar";
import SearchResultCards from "./SearchResultCards";
import SearchResultFilters from "./SearchResultFilters";
import SearchResultText from "./SearchResultText";
import SearchResultPagination from "./SearchResultPagination";
import SearchResultFooter from "./SearchResultFooter";
import vendorData from "./vendorData.json";

const SearchResults = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState({
    sectors: [],
    turnover: [0, 100],
    projects: 50,
    labourStrength: null,
    businessAge: null,
    isVerifiedVendorsOnly: false,
    isSearchByOfficeAddressOnly: false,
  });

  const [searchData, setSearchData] = useState({
    vendorType: "",
    tradeOrBusiness: "",
    region: "",
  });

  const [filteredVendors, setFilteredVendors] = useState([]);

  const vendorsPerPage = 5; // Adjust this value as needed

  const handleFilterChange = (newData) => {
    setFilterData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleSearchData = (vendorType, tradeOrBusiness, region) => {
    setSearchData({ vendorType, tradeOrBusiness, region });
  };

  const createQuery = () => {
    return {
      ...filterData,
      ...searchData,
    };
  };

  const filterVendorData = (query) => {
    return vendorData
      .filter((vendor) => {
        const matchesVendorType = query.vendorType
          ? vendor.vendorType === query.vendorType
          : false;
        const matchesTradeOrBusiness = query.tradeOrBusiness
          ? vendor.vendorName || vendor.service === query.tradeOrBusiness
          : true;

        const matchesRegion = query.region
          ? vendor.serviceLocations.Allcities === query.region
          : true;
        const matchesVerification = query.isVerifiedVendorsOnly
          ? vendor.verifiedStatus
          : true;
        const matchesOfficeAddesss = query.isSearchByOfficeAddressOnly
          ? vendor.officeAddress.City === query.region
          : true;

        return (
          (matchesVendorType && matchesTradeOrBusiness) ||
          matchesRegion ||
          (matchesOfficeAddesss && matchesVerification)
        );
      })
      .slice((currentPage - 1) * vendorsPerPage, currentPage * vendorsPerPage);
  };

  useEffect(() => {
    const query = createQuery();
    const filteredData = filterVendorData(query);
    setFilteredVendors(filteredData);
  }, [filterData, searchData, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(vendorData.length / vendorsPerPage);

  return (
    <div
      className="max-w-[1280px] mx-auto flex flex-col justify-center hide-scrollbar"
      style={{
        overflowY: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <SearchResultNavbar onSearch={handleSearchData} />
      <SearchResultText />
      <div className="flex justify-between bg-gray-100">
        <div className="my-8 h-screen overflow-y-auto hide-scrollbar">
          <SearchResultFilters onFilterChange={handleFilterChange} />
        </div>
        <div className="mt-8 h-screen overflow-y-auto hide-scrollbar">
          <SearchResultCards vendors={filteredVendors} />
        </div>
      </div>
      <div className="bg-gray-100 pb-8 pr-8">
        <SearchResultPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <SearchResultFooter />
    </div>
  );
};

export default SearchResults;
