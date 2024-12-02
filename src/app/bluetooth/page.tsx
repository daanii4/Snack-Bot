"use client";

import React, { useState } from "react";

const BluetoothScanner = () => {
  const [devices, setDevices] = useState([]);
  const [status, setStatus] = useState("Disconnected");

  const scanDevices = async () => {
    const response = await fetch("/api/scan-bluetooth");
    const data = await response.json();
    setDevices(data.devices);
  };

  const connectDevice = async (deviceName: string) => {
    const response = await fetch(`/api/connect?device=${deviceName}`);
    if (response.ok) {
      setStatus(`Connected to ${deviceName}`);
    } else {
      setStatus("Failed to connect");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Bluetooth Devices</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded my-4"
        onClick={scanDevices}
      >
        Scan for Devices
      </button>
      <ul>
        {devices.map((device: { name: string }, index: number) => (
          <li key={index}>
            {device.name}
            <button
              className="bg-green-500 px-2 py-1 ml-2 rounded"
              onClick={() => connectDevice(device.name)}
            >
              Connect
            </button>
          </li>
        ))}
      </ul>
      <p>Status: {status}</p>
    </div>
  );
};

export default BluetoothScanner;
