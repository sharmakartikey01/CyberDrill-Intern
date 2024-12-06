"use client "
import React from "react";

export default function IncidentReport() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6">Incident Report</h1>

      <div className="grid grid-cols-3 gap-4">
        {/* Left Section - Targets */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="font-semibold mb-4">TARGETS</h2>
          <p className="text-sm mb-2">TEAM</p>
          <p className="text-lg font-semibold mb-4">BT-14</p>

          <div className="mb-4">
            <button className="text-sm text-blue-400">FILTER TARGETS</button>
          </div>

          <div className="space-y-2">
            <div>
              <input type="checkbox" id="dc1" className="mr-2" />
              <label htmlFor="dc1" className="text-sm">dc1 - HOST</label>
            </div>
            <div>
              <input type="checkbox" id="dc2" className="mr-2" />
              <label htmlFor="dc2" className="text-sm">dc2 - HOST</label>
            </div>
            <div>
              <input type="checkbox" id="dns1" className="mr-2" />
              <label htmlFor="dns1" className="text-sm">dns1 - HOST</label>
            </div>
            <div>
              <input type="checkbox" id="dns2" className="mr-2" />
              <label htmlFor="dns2" className="text-sm">dns2 - HOST</label>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-2 space-y-4">
          {/* Upper Right Section - Incidents */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="font-semibold mb-4">INCIDENTS</h2>
            <div className="flex space-x-4">
              <button className="bg-gray-700 px-4 py-2 rounded-lg">COMPROMISED</button>
              <button className="bg-gray-700 px-4 py-2 rounded-lg">NOT COMPROMISED</button>
            </div>
          </div>

          {/* Lower Right Section - Details */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="font-semibold mb-4">DETAILS</h2>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Chronology</h3>
              <p className="text-sm">What and when happened?</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Start time.</li>
                <li>End time, if the incident has been solved.</li>
                <li>Description of observed matters.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Impact</h3>
              <p className="text-sm">
                How the incident has impacted your information systems or daily
                operations?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
