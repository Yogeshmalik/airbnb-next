"use client";
import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import Link from "next/link";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  console.log("Search Input: ", searchInput);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  // const search = () => {
  //   const queryParams = `?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&noOfGuests=${noOfGuests}`;
  //   const searchPath = `/search${queryParams}`;
  // };
  /* the function below is not working */
  // const search = () => {
  //   router.push({
  //     pathname: "/search",
  //     query: {
  //       location: searchInput,
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //       noOfGuests,
  //     },
  //   });
  // };

  // const router = useRouter();
  // const goToHomePage = () => {
  //   router.push("/");
  // };

  return (
    <header
      className=" sticky top-0 z-50 grid grid-cols-3 
    bg-white shadow-md p-5 md:px-10 "
    >
      {/* left part */}
      <div
        // onClick={goToHomePage}
        className=" relative flex items-center
       h-10 my-auto !important"
      >
        <Link href="/">
          <Image
            className="cursor-pointer"
            alt="bnb logo"
            src="https://links.papareact.com/qd3"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      {/* middle part */}
      <div
        className="flex items-center md:border-2 rounded-full py-2 
      md:shadow-sm "
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none 
        text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon
          className=" hidden md:inline-flex h-8 bg-red-400 
        text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>
      {/* right part */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div
          className="flex items-center space-x-2 border-2 rounded-full p-2 
        cursor-pointer"
        >
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            // maxDate={new Date(+120)}
            rangeColors={["#fD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold ">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg 
            outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              onClick={() => setSearchInput("")}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>

            <Link
              href={{
                pathname: "/search",
                query: {
                  location: searchInput,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                  noOfGuests,
                },
              }}
            >
              <button className="flex-grow text-red-400">Search</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
