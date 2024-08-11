import React, { useState } from "react";
import SearchResultBadges from "./SearchResultBadges";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ContactInfoPopup = ({ business, onClose }) => {
  return (
    <div className=" flex-col fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex items-center   bg-[#24242D] w-[505px] h-[55px] space-x-10">
        <div className=" flex   items-center justify-start  ms-7 ">
          <div className="absolute">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15.0229"
                cy="15.0227"
                r="12.5074"
                transform="rotate(0.0584542 15.0229 15.0227)"
                stroke="#FF8A00"
                stroke-opacity="0.2"
                stroke-width="5"
              />
            </svg>
          </div>
          <div className="absolute ms-1">
            <svg
              width="27"
              height="30"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66926 24.4357C4.17979 25.7243 5.97878 26.6425 7.91904 27.1154C9.85929 27.5882 11.8857 27.6022 13.8325 27.1561C15.7792 26.7101 17.591 25.8167 19.1197 24.549C20.6483 23.2814 21.8503 21.6756 22.6273 19.8628C23.4044 18.0501 23.7344 16.0821 23.5904 14.1197C23.4464 12.1573 22.8324 10.2564 21.7987 8.57236C20.765 6.88836 19.341 5.46915 17.6431 4.43085C15.9453 3.39255 14.0218 2.76466 12.0301 2.59855L12.022 2.69255C13.9987 2.85741 15.9076 3.48054 17.5926 4.51098C19.2776 5.54142 20.6908 6.94989 21.7167 8.62115C22.7425 10.2924 23.3519 12.179 23.4948 14.1265C23.6377 16.074 23.3102 18.0272 22.539 19.8262C21.7679 21.6252 20.575 23.2189 19.0579 24.4769C17.5409 25.7349 15.7428 26.6216 13.8107 27.0642C11.8787 27.5069 9.86764 27.493 7.94207 27.0238C6.01649 26.5545 4.23113 25.6432 2.73203 24.3644L2.66926 24.4357Z"
                stroke="#FF8A00"
                stroke-width="5"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <p className="text-white ">
          <span className="font-bold font-[#727269]">4/10</span> contact views
          remaining
        </p>

        <div className="text-white text-sm">
          <span className="font-bold">
            <span className="underline">Upgrade </span>
          </span>
          <span> to view more</span>{" "}
        </div>
      </div>

      <div className="bg-white p-6  shadow-md w-[505px] ">
        <div className="flex justify-between h-6  ">
          <div className="flex items-center">
            <svg
              width="22px"
              height="23px"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1333 4.15625C17.5367 4.15625 17.8667 4.47969 17.8667 4.875V22.125C17.8667 22.5203 17.5367 22.8438 17.1333 22.8438H3.93333C3.53 22.8438 3.2 22.5203 3.2 22.125V4.875C3.2 4.47969 3.53 4.15625 3.93333 4.15625H17.1333ZM3.93333 2C2.31542 2 1 3.28926 1 4.875V22.125C1 23.7107 2.31542 25 3.93333 25H17.1333C18.7513 25 20.0667 23.7107 20.0667 22.125V4.875C20.0667 3.28926 18.7513 2 17.1333 2H3.93333ZM10.5333 13.5C11.3113 13.5 12.0574 13.1971 12.6075 12.6579C13.1576 12.1188 13.4667 11.3875 13.4667 10.625C13.4667 9.8625 13.1576 9.13124 12.6075 8.59207C12.0574 8.0529 11.3113 7.75 10.5333 7.75C9.75537 7.75 9.00926 8.0529 8.45915 8.59207C7.90905 9.13124 7.6 9.8625 7.6 10.625C7.6 11.3875 7.90905 12.1188 8.45915 12.6579C9.00926 13.1971 9.75537 13.5 10.5333 13.5ZM9.06667 14.9375C7.04083 14.9375 5.4 16.5457 5.4 18.5312C5.4 18.9266 5.73 19.25 6.13333 19.25H14.9333C15.3367 19.25 15.6667 18.9266 15.6667 18.5312C15.6667 16.5457 14.0258 14.9375 12 14.9375H9.06667ZM23 5.59375C23 5.19844 22.67 4.875 22.2667 4.875C21.8633 4.875 21.5333 5.19844 21.5333 5.59375V8.46875C21.5333 8.86406 21.8633 9.1875 22.2667 9.1875C22.67 9.1875 23 8.86406 23 8.46875V5.59375ZM22.2667 10.625C21.8633 10.625 21.5333 10.9484 21.5333 11.3438V14.2188C21.5333 14.6141 21.8633 14.9375 22.2667 14.9375C22.67 14.9375 23 14.6141 23 14.2188V11.3438C23 10.9484 22.67 10.625 22.2667 10.625ZM23 17.0938C23 16.6984 22.67 16.375 22.2667 16.375C21.8633 16.375 21.5333 16.6984 21.5333 17.0938V19.9688C21.5333 20.3641 21.8633 20.6875 22.2667 20.6875C22.67 20.6875 23 20.3641 23 19.9688V17.0938Z"
                fill="#4F4F42"
              />
            </svg>
            <h2 className="text-xl font-bold ms-4">Contact Info</h2>
          </div>
          <button
            onClick={onClose}
            className="text-black font-bold  bg-[#FBFBF9] flex items-center justify-center"
          >
            Close
            <button
              type="button"
              className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
              data-dismiss-target="#badge-dismiss-dark"
              aria-label="Remove"
            >
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                ></path>
              </svg>
              <span className="sr-only">close</span>
            </button>
          </button>
        </div>

        <hr className="w-full border-t border-gray-300 my-4" />
        <div className="ps-10   bg-[#F5F5F3] p-4 mb-4 rounded">
          <h3 className="font-bold text-gray-600">Business Contact Details</h3>
          <div className="flex">
            <div className=" w-20  flex items-center justify-start  ">
              <BusinessCenterOutlinedIcon sx={{ fontSize: 50 }} />
            </div>
            <div className="mt-4">
              <h3 className="font-bold">{business.vendorName}</h3>
              <p>{business.vendorContact.email}</p>
              <p>{business.vendorContact.phone}</p>
            </div>
          </div>
        </div>
        <div className="ps-10    bg-[#F5F5F3]  p-4">
          <h3 className="font-bold text-gray-600">Team Contact Details</h3>
          {business.vendorTeam.map((member, index) => (
            <div key={index} className="flex items-center my-2">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {member.Name.split(" ")
                  .map((name) => name[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div>
                <p className="font-bold">{member.Name}</p>
                <p>{member.Email}</p>
                <p>{member.Phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BusinessCard = ({ business, onViewContact }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
        overflowY: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
      className="overflow-y-auto lg:w-[867px] md:w-[664px] md:h-[284px] lg:h-[299px] bg-white md:p-[28px] lg:px-[35px] lg:pt-[35px] lg:pb-[15px] rounded-sm my-6"
    >
      <div className="flex justify-between">
        <div className="flex   space-x-4">
          <img
            src="https://storagereponeevaydevcdn.blob.core.windows.net/business/no_business_img.svg"
            alt="Vendor"
            className="lg:h-[140px] lg:w-[140px] md:w-[107px] md:h-[107px] object-cover"
          />

          <div>
            <h3 className="text-xl font-bold text-[#212112]">
              {business.vendorName}
            </h3>
            <div className="flex   items-center pb-2 md:pt-[6px] md:pb-[12px]">
              {business.verifiedStatus && (
                <>
                  <img
                    src="https://storagereponeevaydevcdn.blob.core.windows.net/business/blue_tick.svg"
                    alt="blue tick"
                  />
                  <span className="text-sm font-medium text-gray-600 pl-[3px]">
                    Verified vendor
                  </span>
                </>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-bold text-gray-500 pb-2">
                {business.services.join(", ")}
              </p>
              <button className="bg-transparent  font-semibold py-1 px-2 border  rounded-full relative bottom-7 ">
                <LocationOnOutlinedIcon /> {business.officeAddress.City}
              </button>
            </div>

            <div className="bg-[#F5F4F5] md:w-[360px] lg:w-[479px] grid grid-cols-2 gap-4 md:p-[10px] lg:p-[19px]">
              <div className="flex items-center space-x-2">
                <img
                  src="https://storagereponeevaydevcdn.blob.core.windows.net/business/rupees.svg"
                  alt="Rs."
                />
                <span className="text-gray-700 md:text-xs lg:text-sm">
                  Turnover :
                </span>
                <span className="font-bold md:text-xs lg:text-sm">
                  {business.turnover}
                </span>
              </div>
              <div className="flex items-center justify-end space-x-2">
                <img
                  src="https://storagereponeevaydevcdn.blob.core.windows.net/business/labour_strength.svg"
                  alt="labour"
                />
                <span className="text-gray-700 md:text-xs lg:text-sm">
                  Labour Strength :
                </span>
                <span className="font-bold md:text-xs lg:text-sm">
                  {business.laborStrength}
                </span>
              </div>
              <div className="flex items-center  space-x-2">
                <img
                  src="https://storagereponeevaydevcdn.blob.core.windows.net/business/business_age.svg"
                  alt="age"
                />
                <span className="text-gray-700 md:text-xs lg:text-sm">
                  Business Age :
                </span>
                <span className="font-bold md:text-xs lg:text-sm">
                  {business.businessAge}
                </span>
              </div>
              <div className="flex items-center justify-end space-x-2">
                <img
                  src="https://storagereponeevaydevcdn.blob.core.windows.net/business/projects_completed.svg"
                  alt="proj."
                />
                <span className="text-gray-700 md:text-xs lg:text-sm">
                  Projects Completed :
                </span>
                <span className="font-bold md:text-xs lg:text-sm">
                  {business.projectsCompleted}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="mx-4 text-base font-bold text-[#4E4E4E] underline">
            View Profile
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="text-sm w-[620px] text-gray-500 mt-[15px]">
          {isExpanded
            ? business.vendorDescription
            : business.vendorDescription.slice(0, 150)}
          <button
            onClick={handleToggle}
            className="text-blue-500 underline ml-1"
          >
            {business.vendorDescription.length > 150
              ? isExpanded
                ? `  See Less `
                : ` See More`
              : ``}
          </button>
        </div>
        <button
          onClick={() => onViewContact(business)}
          className="lg:w-[125px] lg:h-[44px] md:w-[129px] md:h-[44px] flex justify-center items-center text-white text-sm bg-[#2D2D24] rounded-sm"
        >
          View Contact
        </button>
      </div>
    </div>
  );
};

const SearchResultCards = ({ vendors }) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleViewContact = (business) => {
    setSelectedBusiness(business);
  };

  const handleClosePopup = () => {
    setSelectedBusiness(null);
  };

  return (
    <>
      <SearchResultBadges />
      <div className="min-h-screen flex flex-col items-center pr-8">
        <div className="w-full max-w-6xl">
          {vendors.length === 0 ? (
            <div className="text-gray-500">
              No vendors match your search criteria.
            </div>
          ) : (
            vendors.map((business) => (
              <BusinessCard
                key={business.vendorId}
                business={business}
                onViewContact={handleViewContact}
              />
            ))
          )}
        </div>
      </div>
      {selectedBusiness && (
        <ContactInfoPopup
          business={selectedBusiness}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};
export default SearchResultCards;
