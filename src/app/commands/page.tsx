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
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Predefined Commands</h1>
      <div className="space-y-4">
        <button
          className="bg-blue-500 px-4 py-2 rounded"
          onClick={() => sendCommand("GET_SNACK")}
        >
          Get Snack
        </button>
        <button
          className="bg-green-500 px-4 py-2 rounded"
          onClick={() => sendCommand("COME_HERE")}
        >
          Come Here
        </button>
        <button
          className="bg-yellow-500 px-4 py-2 rounded"
          onClick={() => sendCommand("SPIN")}
        >
          Spin in Place
        </button>
      </div>
    </div>
  );
};

export default PredefinedCommands;
