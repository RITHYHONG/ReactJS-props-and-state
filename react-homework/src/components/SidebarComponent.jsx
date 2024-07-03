import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
function SidebarComponent() {
  return (
    <div>
      <div className="w-14 mt-[70%]">
              <FontAwesomeIcon
                className="text-black w-full py-4 mb-3 bg-gray-400 rounded-full text-2xl cursor-pointer"
                icon={faHouse}
              />
              <FontAwesomeIcon
                className="text-black w-full mb-7 text-2xl cursor-pointer"
                icon={faUser}
              />
              <FontAwesomeIcon
                className="text-black w-full mb-7 text-2xl cursor-pointer"
                icon={faMessage}
              />
              <FontAwesomeIcon
                className="text-black w-full mb-7 text-2xl cursor-pointer"
                icon={faGraduationCap}
              />
              <FontAwesomeIcon
                className="text-black w-full mb-7 text-2xl cursor-pointer"
                icon={faClock}
              />
              <FontAwesomeIcon
                className="text-black w-full mb-7 text-2xl cursor-pointer"
                icon={faGear}
              />
            </div>
    </div>
  )
}

export default SidebarComponent