import React, { useState } from "react";

const AddProjectPopup = ({ onAddProject, onClose }) => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !type || !start_date || !end_date || !description)
      return;
    onAddProject({
      position,
      company,
      type,
      start_date,
      end_date,
      description,
    });
    setPosition("");
    setCompany("");
    setType("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded w-1/2">
      <div className='flex justify-end px-5'>
          <a className="text-2xl text-gray-500 hover:text-gray-950 bg-transparent hover:bg-transparent border-none hover:border-none" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></a>
        </div>
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>

        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Position
            </label>
            <input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="UX-UI Design"
            />
          </div>

          <div className="">
            <label className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Company
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="KSHRD Center"
            />
          </div>

          <div className="">
            <label className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="">----Choose Any Option----</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Start Date
              </label>
              <input
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                End Date
              </label>
              <input
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="description" className="block text-gray-700">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Describe what you do"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectPopup;
