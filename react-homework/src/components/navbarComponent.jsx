import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBell } from "@fortawesome/free-solid-svg-icons";

function navbarComponent() {
  return (
    <div className="navbar pr-[25%]">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl text-black ml-[12%]">Portfolio</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
            <span className="indicator-item badge bg-black"></span> 
                <FontAwesomeIcon className="text-black text-2xl" icon={faBell} />
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="./public/pf.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <a className="text-lg text-black ml-3">Jong Suk</a>
      </div>
    </div>
  );
}

export default navbarComponent;
