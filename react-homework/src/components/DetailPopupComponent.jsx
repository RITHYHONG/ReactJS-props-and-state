// DetailPopup.js

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DetailPopup = ({ project, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white px-2 rounded-3xl w-1/2 p-3">
        <div className='flex justify-end px-5'>
          <a className="text-2xl text-gray-500 hover:text-gray-950 bg-transparent hover:bg-transparent border-none hover:border-none" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></a>
        </div>
        <div className='px-5 pb-5'>
          <h2 className='text-black'><span className='uppercase'>{project.position}</span> Company</h2>
          <p className='text-gray-400'><span className='text-black'>Position:</span> {project.description} ( {project.type} )</p>
          <p className='text-gray-400'><span className='text-black'>Duration:</span> {project.start_date} to {project.end_date}</p>
          <p className='text-gray-400'><span className='text-black'>Description:</span> {project.description}</p>
        {/* <button className="mt-4 bg-gray-300 hover:bg-gray-400 py-1 px-2 rounded" onClick={onClose}>Close</button> */}
        </div>
      </div>
    </div>
  );
};

export default DetailPopup;
