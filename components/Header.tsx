import Image from "next/image";
import {
  SearchIcon,
  MenuAlt1Icon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className=" sticky top-0 z-50 grid grid-cols-3 
    bg-white shadow-md p-5 md:px-10 "
    >
      {/* left part */}
      <div
        className=" relative flex items-center
       h-10 my-auto !important"
      >
        <Image
          className="cursor-pointer"
          alt="bnb logo"
          src="https://links.papareact.com/qd3"
          width={100}
          height={100}
          priority
        />
      </div>
      {/* middle part */}
      <div
        className="flex items-center md:border-2 rounded-full py-2 
      md:shadow-sm "
      >
        <input
          className="flex-grow pl-5 bg-transparent outline-none 
        text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
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
    </header>
  );
}

export default Header;