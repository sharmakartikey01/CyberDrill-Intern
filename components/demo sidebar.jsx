import React from 'react'
import { RxSketchLogo, RxDashboard } from 'react-icons/rx'
import Link from 'next/link'
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Button from './Button';


"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const Sidebarr = () => {
  return (
    <div>
        <div className="mx-12 fixed w-20 h-screen p-4 border-r-9 flex-col justify-between">
        <div className='flex flex-col items-center'></div>
    </div>
    <Button />
    <div className='bg-purple-800 text-white p-3 rounded-lg inlne-block'>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  SCORING
                </h3>
              </div>
    </div>
    </div>
  )
}

export default Sidebarr