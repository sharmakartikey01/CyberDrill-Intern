'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineSpaceDashboard, MdMenu, MdClose } from "react-icons/md";
import SidebarButton from './SidebarButton';
import CollapsibleSection from './CollapsibleSection';

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // To toggle sidebar visibility on small screens

  const handleSectionToggle = (section) => {
    setOpenSection(openSection === section ? null : section); // Toggle between opening and closing the section
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar open/close
  };

  return (
    <div className="relative">
      {/* Hamburger Menu Button for mobile screens */}
      <button
        className="sm:hidden p-2 text-gray-100 bg-gray-700 fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <MdClose className="text-3xl" /> : <MdMenu className="text-3xl" />}
      </button>

      {/* Sidebar - Hidden on small screens, visible on larger screens */}
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 p-4 fixed top-0 left-0 h-screen z-40 transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static`}>

        {/* Dashboard Link */}
        <Link href='/'>
          <div className="flex px-2 p-2 rounded-md group relative cursor-pointer hover:shadow-lg hover:bg-gray-700">
            <MdOutlineSpaceDashboard className="mt-0 mr-1.5 text-3xl text-gray-200 group-hover:text-yellow-300" />
            <h3 className="text-2xl text-gray-200 group-hover:text-yellow-300 font-bold">
              Cyber Range
            </h3>
          </div>
        </Link>

        {/* Collapsible Sections */}
        <div className='flex flex-col space-y-4 mx-2'>
          {/* Scoring Section */}
          <CollapsibleSection
            title="Scoring"
            isOpen={openSection === "scoring"}
            onToggle={() => handleSectionToggle("scoring")}
          >
            <Link href='/ScoringLog'>
              <SidebarButton
                text="Scoring Log"
                isActive={activeButton === "scoring-log"}
                onClick={() => handleButtonClick("scoring-log")}
              />
            </Link>
            <Link href='/TeamScoring'>
              <SidebarButton
                text="Team Scoring"
                isActive={activeButton === "team-scoring"}
                onClick={() => handleButtonClick("team-scoring")}
              />
            </Link>
            <Link href='/TeamTimeline'>
              <SidebarButton
                text="Team Timeline"
                isActive={activeButton === "team-timeline"}
                onClick={() => handleButtonClick("team-timeline")}
              />
            </Link>
          </CollapsibleSection>

          {/* Reporting Section */}
          <CollapsibleSection
            title="Reporting"
            isOpen={openSection === "reporting"}
            onToggle={() => handleSectionToggle("reporting")}
          >
            <Link href='/IncidentReport'>
              <SidebarButton
                text="Incident Report"
                isActive={activeButton === "incident-report-1"}
                onClick={() => handleButtonClick("incident-report-1")}
              />
            </Link>
            <Link href='/SituationReport'>
              <SidebarButton
                text="Situation Report"
                isActive={activeButton === "situation-report-1"}
                onClick={() => handleButtonClick("situation-report-1")}
              />
            </Link>
          </CollapsibleSection>

          {/* Judging Section */}
          <CollapsibleSection
            title="Judging"
            isOpen={openSection === "judging"}
            onToggle={() => handleSectionToggle("judging")}
          >
            <Link href='/IncidentReports'>
              <SidebarButton
                text="Incident Report"
                isActive={activeButton === "incident-report-2"}
                onClick={() => handleButtonClick("incident-report-2")}
              />
            </Link>
            <Link href='/SituationReports'>
              <SidebarButton
                text="Situation Report"
                isActive={activeButton === "situation-report-2"}
                onClick={() => handleButtonClick("situation-report-2")}
              />
            </Link>
          </CollapsibleSection>

          {/* Situational Awareness Section */}
          <CollapsibleSection
            title="Situational Awareness"
            isOpen={openSection === "situational-awareness"}
            onToggle={() => handleSectionToggle("situational-awareness")}
          >
            <Link href='/targetcheckstatus'>
              <SidebarButton
                text="Target checks Status"
                isActive={activeButton === "target-checks-status"}
                onClick={() => handleButtonClick("target-checks-status")}
              />
            </Link>
            <Link href='/TeamAwareness'>
              <SidebarButton
                text="Team Awareness"
                isActive={activeButton === "team-awareness"}
                onClick={() => handleButtonClick("team-awareness")}
              />
            </Link>
            <Link href='/NewsInject'>
              <SidebarButton
                text="News Injects"
                isActive={activeButton === "news-injects"}
                onClick={() => handleButtonClick("news-injects")}
              />
            </Link>
          </CollapsibleSection>

          {/* Capture the Flag Section */}
          <CollapsibleSection
            title="Capture the Flag"
            isOpen={openSection === "capture-the-flag"}
            onToggle={() => handleSectionToggle("capture-the-flag")}
          >
            <Link href='/missionboard'>
              <SidebarButton
                text="Mission Board"
                isActive={activeButton === "mission-board"}
                onClick={() => handleButtonClick("mission-board")}
              />
            </Link>
          </CollapsibleSection>
        </div>
      </div>

      {/* Overlay to close the sidebar on small screens */}
      {isSidebarOpen && <div className="sm:hidden fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;


