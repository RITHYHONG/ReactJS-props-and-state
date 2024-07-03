import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project, onSeeDetail }) => {
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: "Web Designing",
  //     type: "Full Time",
  //     startDate: "12-12-2022",
  //     endDate: "01-03-2023",
  //     company: "ABA",
  //     detail:
  //       "I’m working on frontEnd Design using ReactJS with TailwindCSS.",
  //   },
  //   {
  //     id: 2,
  //     name: "Mobile App",
  //     type: "Part Time",
  //     startDate: "01-01-2022",
  //     endDate: "03-04-2022",
  //     company: "APD",
  //     detail:
  //       "I am working as a Mobile app developer for an e-commerce project.",
  //   },
  //   {
  //     id: 3,
  //     name: "UX-UI Design",
  //     type: "Freelance",
  //     startDate: "01-02-2023",
  //     endDate: "03-04-2024",
  //     company: "KOSIGN",
  //     detail:z
  //       "I’m working as a UX-UI designer on 2 projects there. One is Leaving management System and another one is E-commerce project.",
  //   },
  // ]);
  return (
    <div className="bg-white p-4 rounded-3xl">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-400 text-sm">{project.start_date}</h3>
        <a className="text-black">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </a>
      </div>
      <div className="mt-2">
        <h2 className="text-xs font-bold text-gray-600 uppercase">
          {project.position}
        </h2>
        <h1 className="text-xl font-bold text-black capitalize">
          {project.description}
        </h1>
      </div>
      <div className="bg-[#FAE1E1] p-1 w-[65%] rounded-xl mr-[132px] mt-3 flex justify-center">
        <h2 className="text-red-600 text-sm">
          {project.type}
        </h2>
      </div>
      <hr className="mt-4" />
      <div className="w-[100%] flex justify-end">
        <button
          className="mt-4 bg-blue-500 hover:bg-gray-400 py-1 px-2 rounded-2xl"
          onClick={onSeeDetail}
        >
          See Detail
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
