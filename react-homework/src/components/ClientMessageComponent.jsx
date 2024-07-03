// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
// import profile from '../assets/Images/ppl1.jpg'
// import profile from '/Images/ppl1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ClientMessageComponent = ({ message }) => {
  // const ClientMessageComponent = () => {
  return (
    <div>
      {/* <div className="w-full max-w-md p-4 bg-white border sm:p-8 dark:bg-white ">
  
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-500 dark:divide-gray-700 bg-white">
            <li className="py-3 sm:py-1">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.commmmmmmmmmmmmmmmmmmmmmmmmmm
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                </div>
            </li>
        
        </ul>
   </div>
</div> */}

     <div className="overflow-y-auto h-screen w-screen no-scrollbar">
  <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <div>
      {message.map((message) => (
        <ul
          key={message.id}
          className="bg-white border-b-2 border-t-2 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-50000"
        >
          <li className="py-3 px-3 sm:px-5 sm:py-5 bg-white">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-14 h-14 rounded-full"
                  src={message.img}
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <div className="w-[18%] flex justify-between">
                  <p className="text-sm text-black font-medium truncate dark:text-black">
                    {message.name}
                  </p>
                  <i className="fa-regular fa-star text-black text-lg">
                    <FontAwesomeIcon className="text-xs" icon={faStar} />
                    {/* {message.like} */}
                  </i>
                </div>
                {/* truncate */}
                <p className="text-[10px] line-clamp-2 leading-4 text-gray-500 w-[18%] dark:text-gray-400">
                  {message.message}
                </p>
                <div className="w-[18%] flex justify-end">
                  <p className="text-xs text-gray-400 font-medium truncate">
                    {message.date}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default ClientMessageComponent;
