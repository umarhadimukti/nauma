import { useState, useRef } from "react";
import { Link } from "@inertiajs/react";

export default function Topbar({ name }) {
  const [dropDownOpen, setDropDownOpen] = useState(true);
  const dropdownTarget = useRef();

  const triggerDropDown = () => {
    if (dropDownOpen) {
      dropdownTarget.current.classList.remove('hidden')
    } else {
      dropdownTarget.current.classList.add('hidden')
    }
    setDropDownOpen(!dropDownOpen)
  }

  return (
    <div className="flex justify-between items-center">
      <input type="text" className="top-search" placeholder="Search movie, cast, genre" />
      <div className="flex items-center gap-4">
        <span className="text-black text-sm font-medium">Halo, {name}</span>
        {/* user avatar */}
        <div className="collapsible-dropdown flex flex-col gap-2 relative">
          <div className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button cursor-pointer" data-target="#dropdown-button" onClick={triggerDropDown}>
            <img src="/images/avatar.png" className="rounded-full object-cover w-full" alt="" />
          </div>
          <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden" ref={dropdownTarget}>
            <a href="#!" className="transition-all hover:bg-orange-200 p-4">Dashboard</a>
            <a href="#!" className="transition-all hover:bg-orange-200 p-4">Settings</a>
            <Link href={route('logout')} method="POST" className="transition-all hover:bg-orange-200 p-4">Logout</Link>
          </div>
        </div>
      </div>
      <style jsx="true">
        {
          `
            input.top-search {
              background-image: url('/icons/ic_search.svg');
            }
            `
        }
      </style>
    </div>
  );
}