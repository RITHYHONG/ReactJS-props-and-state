import React, { useState } from "react";

import ProjectCard from "./components/ProjectCardComponent";
import AddProjectPopup from "./components/AddProjectPopupComponent";
import DetailPopup from "./components/DetailPopupComponent";
import SidebarComponent from "./components/SidebarComponent";
import Navbar from "./components/navbarComponent";
import ClientMessageComponent from "./components/ClientMessageComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  // const [projects, setProjects] = useState([]);
  const [showAddProjectPopup, setShowAddProjectPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetailPopup, setShowDetailPopup] = useState(false);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
    setShowAddProjectPopup(false);
  };

  const handleSeeDetail = (project) => {
    setSelectedProject(project);
    setShowDetailPopup(true);
  };

  const [message, setMessage] = useState([
    {
      id: 1,
      img: "ppl1.jpg",
      name: "David",
      message:
        "Hey tell me about progress of project? Waiting for your response",
      date: "21 July",
      like: false,
    },
    {
      id: 2,
      img: "ppl2.jpg",
      name: "Stephanie",
      message:
        "I got your first assignment. It was quite good. You can start work on next assignment",
      date: "19 July",
      like: true,
    },
    {
      id: 3,
      img: "ppl3.jpg",
      name: "William",
      message:
        "I want some changes in previous work you sent me. Waiting for your reply.",
      date: "17 July",
      like: false,
    },
    {
      id: 4,
      img: "ppl4.jpg",
      name: "Alona",
      message: "I am really impressed from your work. Keep doing great work",
      date: "15 July",
      like: true,
    },
    {
      id: 5,
      img: "ppl5.jpg",
      name: "Hira",
      message: "When you start redesign of app? Previous project was perfect.",
      date: "13 July",
      like: false,
    },
    {
      id: 6,
      img: "ppl6.jpg",
      name: "Ghulam",
      message:
        "I want to let you know I am agree on that project. Looking for anther good one.",
      date: "11 July",
      like: false,
    },
    {
      id: 7,
      img: "ppl2.jpg",
      name: "Mina",
      message:
        "You did a great job for the previous project. Looking forward for another one next time.",
      date: "13 July",
      like: true,
    },
    {
      id: 8,
      img: "ppl4.jpg",
      name: "Noona",
      message: "How is the project going? I'm waiting to see...",
      date: "13 July",
      like: true,
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      description: "Web Designing",
      type: "Full Time",
      start_date: "12-12-2022",
      end_date: "01-03-2023",
      position: "ABA",
      detail: "I'm working on frontEnd Design using ReactJS with TailwindCSS.",
    },
    {
      id: 2,
      description: "Mobile App",
      type: "Part Time",
      start_date: "01-01-2022",
      end_date: "03-04-2022",
      position: "APD",
      detail:
        "I am working as a Mobile app developer for an e-commerce project.",
    },
    {
      id: 3,
      description: "UX-UI Design",
      type: "Freelance",
      start_date: "01-02-2023",
      end_date: "03-04-2024",
      position: "KOSIGN",
      detail:
        "I'm working as a UX-UI designer on 2 projects there. One is Leaving management System and another one is E-commerce project.",
    },
  ]);

  return (
    <div className="mx-auto w-screen h-screen bg-slate-300 flex justify-center items-center">
      <div className="w-[80%] h-[90%] bg-white rounded-3xl overflow-hidden">
        <div className="w-screen">
          <Navbar />
        </div>
        <div className="w-screen h-[90%] flex">
          {/* ================== side bar ================== */}
          <div className="w-[6%] h-full  flex justify-center">
            <SidebarComponent />
          </div>
          {/* ================== main side ================== */}
          <div className="w-[50%] h-full bg-[#f0f0f5] rounded-t-3xl p-10">
            <div className="flex justify-between mb-5">
              <h1 className="text-2xl font-bold mb-4 text-black">Projects</h1>
              <button
                className="text-sm bg-[#cdd2d7] hover:bg-slate-300 text-black rounded-lg hover:border-black"
                onClick={() => setShowAddProjectPopup(true)}
              >
                ADD NEW PROJECT
              </button>
            </div>
            <div className=" w-full h-[10%] flex justify-between ">
              {/* card final project  */}
              <div className="w-[23%] bg-[#a587fa] rounded-xl text-primary-content flex overflow-hidden">
                <div className=" w-[30%] h-full flex justify-center items-center">
                  <div className="w-[70%] h-[70%] rounded-lg bg-[#c3b4fa] flex justify-center items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                </div>
                <div className=" w-[70%] h-full ">
                  <div className="h-[50%] flex flex-col justify-end">
                    <p className="text-gray-300 text-[75%]">Final Project</p>
                  </div>
                  <div className="h-[50%]">
                    <p className="text-gray-200 text-[90%]">13</p>
                  </div>
                </div>
              </div>

              {/* upcoming */}
              <div className="w-[23%] bg-[#be82fa] rounded-xl text-primary-content flex overflow-hidden">
                <div className=" w-[30%] h-full flex justify-center items-center">
                  <div className="w-[70%] h-[70%] rounded-lg bg-[#d7b4fa] flex justify-center items-center">
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                </div>
                <div className=" w-[70%] h-full">
                  <div className="h-[50%] flex flex-col justify-end">
                    <p className="text-gray-300 text-[75%]">Upcoming</p>
                  </div>
                  <div className="h-[50%]">
                    <p className="text-gray-200 text-[90%]">13</p>
                  </div>
                </div>
              </div>

              {/* Total Project */}
              <div className="w-[23%] bg-[#f06eb4] rounded-xl text-primary-content flex overflow-hidden">
                <div className=" w-[30%] h-full flex justify-center items-center">
                  <div className="w-[70%] h-[70%] rounded-lg bg-[#f5a5d2] flex justify-center items-center">
                    <FontAwesomeIcon icon={faListUl} />
                  </div>
                </div>
                <div className=" w-[70%] h-full">
                  <div className="h-[50%] flex flex-col justify-end">
                    <p className="text-gray-300 text-[75%]">Total Project</p>
                  </div>
                  <div className="h-[50%]">
                    <p className="text-gray-200 text-[90%]">13</p>
                  </div>
                </div>
              </div>

              {/* In Project */}
              <div className="w-[23%] bg-[#fa6e82] rounded-xl text-primary-content flex overflow-hidden">
                <div className=" w-[30%] h-full flex justify-center items-center">
                  <div className="w-[70%] h-[70%] rounded-lg bg-[#facdd2] flex justify-center items-center">
                    <FontAwesomeIcon icon={faSpinner} />
                  </div>
                </div>
                <div className=" w-[70%] h-full">
                  <div className="h-[50%] flex flex-col justify-end">
                    <p className="text-gray-300 text-[75%]">In Project</p>
                  </div>
                  <div className="h-[50%]">
                    <p className="text-gray-200 text-[90%]">13</p>
                  </div>
                </div>
              </div>

              {showAddProjectPopup && (
                <AddProjectPopup onAddProject={handleAddProject} />
              )}
              {showDetailPopup && (
                <DetailPopup
                  project={selectedProject}
                  onClose={() => setShowDetailPopup(false)}
                />
              )}
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {data.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSeeDetail={() => handleSeeDetail(project)}
                />
              ))}
            </div> */}

<div className="container mx-auto py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        onSeeDetail={() => handleSeeDetail(project)}
      />
    ))}
  </div>

  {showAddProjectPopup && (
    <AddProjectPopup onAddProject={handleAddProject} />
  )}
  {showDetailPopup && (
    <DetailPopup
      project={selectedProject}
      onClose={() => setShowDetailPopup(false)}
    />
  )}
</div>

          </div>
          {/* ================== user ================== */}
          <div className="w-[24%] h-full">
            <div className="flex justify-between py-5 px-6">
              <h3 className="text-black">Client Message</h3>
              <a className="text-black">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </a>
            </div>
            {/* <ClientMessageComponent /> */}
            <ClientMessageComponent message={message} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
