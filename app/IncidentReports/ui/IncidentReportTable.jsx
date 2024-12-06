"use client"

import React from 'react';

const IncidentReportTable = () => {
  const reports = [
    {
      time: "26.04.2022 12:07:40",
      target: "MAIL.IC14.JC.CRP",
      targetCheck: "MAIL - HOST",
      incidentType: "NOT COMPROMISED",
      team: "BT-14",
      status: "CONFIRMED",
      whiteTeamMember: "WT.USERNAME",
    },
    {
      time: "26.04.2022 12:47:01",
      target: "WS1-1.INT.IC14.JC.CRP",
      targetCheck: "WS1-1 - HOST",
      incidentType: "NOT COMPROMISED",
      team: "BT-14",
      status: "CONFIRMED",
      whiteTeamMember: "WT.USERNAME",
    },
    {
      time: "26.04.2022 12:47:01",
      target: "WS1-2.INT.IC14.JC.CRP",
      targetCheck: "WS1-2 - HOST",
      incidentType: "NOT COMPROMISED",
      team: "BT-14",
      status: "DENIED",
      whiteTeamMember: "WT.USERNAME",
    },
    {
      time: "26.04.2022 12:47:01",
      target: "WS1-3.INT.IC14.JC.CRP",
      targetCheck: "WS1-3 - HOST",
      incidentType: "NOT COMPROMISED",
      team: "BT-14",
      status: "DENIED",
      whiteTeamMember: "WT.USERNAME",
    },
    {
      time: "26.04.2022 12:47:01",
      target: "WS1-4.INT.IC14.JC.CRP",
      targetCheck: "WS1-4 - HOST",
      incidentType: "NOT COMPROMISED",
      team: "BT-14",
      status: "DENIED",
      whiteTeamMember: "WT.USERNAME",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 text-white">
        <thead>
          <tr>
            <th className="py-1 px-2 border-b">Time</th>
            <th className="py-1 px-2 border-b">Target</th>
            <th className="py-1 px-2 border-b">Target Check</th>
            <th className="py-1 px-2 border-b">Incident Type</th>
            <th className="py-1 px-2 border-b">Team</th>
            <th className="py-1 px-2 border-b">Status</th>
            <th className="py-1 px-2 border-b">White Team Member</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="hover:bg-gray-700">
              <td className="py-1 px-2 border-b">{report.time}</td>
              <td className="py-1 px-2 border-b">{report.target}</td>
              <td className="py-1 px-2 border-b">{report.targetCheck}</td>
              <td className="py-1 px-2 border-b">{report.incidentType}</td>
              <td className="py-1 px-2 border-b">{report.team}</td>
              <td className="py-1 px-2 border-b">{report.status}</td>
              <td className="py-1 px-2 border-b">{report.whiteTeamMember}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentReportTable;
