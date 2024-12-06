"use client";
import React from 'react';
import FilterBar from './ui/FilterBar';
import StatusCard from './ui/StatusCard';


const TargetCheckStatusPage = () => {
  const targetGroups = [
    {
      groupName: 'MOLOCH.SEC.IC14.JC.CRP',
      checks: [
        { service: 'HOST', status: 'pass' },
        { service: 'SSH', status: 'pass' },
        { service: 'NRPE', status: 'warning' },
      ],
    },
    {
      groupName: 'WS3-6.INT.IC14.JC.CRP',
      checks: [
        { service: 'HOST', status: 'pass' },
        { service: 'SSH', status: 'pass' },
        { service: 'NRPE', status: 'fail' },
      ],
    },
    {
      groupName: 'DB-02.CL.SEC',
      checks: [
        { service: 'HOST', status: 'pass' },
        { service: 'MySQL', status: 'pass' },
        { service: 'NRPE', status: 'fail' },
      ],
    },
    {
      groupName: 'APP-12.CL.SEC',
      checks: [
        { service: 'HOST', status: 'warning' },
        { service: 'Tomcat', status: 'pass' },
        { service: 'NRPE', status: 'pass' },
      ],
    },
    {
      groupName: 'APP-08.DEV.SEC',
      checks: [
        { service: 'HOST', status: 'pass' },
        { service: 'Docker', status: 'fail' },
        { service: 'NRPE', status: 'pass' },
      ],
    },
    {
      groupName: 'STG-01.CL.BACK',
      checks: [
        { service: 'HOST', status: 'fail' },
        { service: 'Nginx', status: 'pass' },
        { service: 'NRPE', status: 'pass' },
      ],
    },
    {
      groupName: 'LAB-06.RD.TECH',
      checks: [
        { service: 'HOST', status: 'warning' },
        { service: 'Node.js', status: 'pass' },
        { service: 'NRPE', status: 'fail' },
      ],
    },
    {
      groupName: 'FIN-04.DB.PROD',
      checks: [
        { service: 'HOST', status: 'pass' },
        { service: 'PostgreSQL', status: 'pass' },
        { service: 'NRPE', status: 'warning' },
      ],
    },
    {
      groupName: 'QA-05.STG.BACK',
      checks: [
        { service: 'HOST', status: 'warning' },
        { service: 'Redis', status: 'pass' },
        { service: 'NRPE', status: 'fail' },
      ],
    },
    {
      groupName: 'CLOUD-12.FRONT.TECH',
      checks: [
        { service: 'HOST', status: 'pass' },
        { service: 'Kubernetes', status: 'pass' },
        { service: 'NRPE', status: 'pass' },
      ],
    },
    {
      groupName: 'DEVOPS-03.PIPE.CI',
      checks: [
        { service: 'HOST', status: 'fail' },
        { service: 'Jenkins', status: 'pass' },
        { service: 'NRPE', status: 'fail' },
      ],
    },
    {
      groupName: 'INFRA-07.SECURITY.NET',
      checks: [
        { service: 'HOST', status: 'warning' },
        { service: 'Firewall', status: 'fail' },
        { service: 'NRPE', status: 'pass' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <FilterBar />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {targetGroups.map((group, index) => (
          <StatusCard key={index} groupName={group.groupName} checks={group.checks} />
        ))}
      </div>
    </div>
  );
};

export default TargetCheckStatusPage;
