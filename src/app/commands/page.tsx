"use client";

import React from "react";

const PredefinedCommands = () => {
  const sendCommand = async (command: string) => {
    const response = await fetch(`/api/send-command?command=${command}`);
    if (response.ok) {
      alert(`${command} sent successfully!`);
    } else {
      alert(`Failed to send ${command}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Predefined Commands</h1>
      <button
        className="bg-blue-500 px-4 py-2 rounded m-2"
        onClick={() => sendCommand("GET_SNACK")}
      >
        Get Snack
      </button>
      <button
        className="bg-green-500 px-4 py-2 rounded m-2"
        onClick={() => sendCommand("COME_HERE")}
      >
        Come Here
      </button>
      <button
        className="bg-yellow-500 px-4 py-2 rounded m-2"
        onClick={() => sendCommand("SPIN")}
      >
        Spin in Place
      </button>
    </div>
  );
};

export default PredefinedCommands;
