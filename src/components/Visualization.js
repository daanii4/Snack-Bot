"use client";

import React, { useEffect } from "react";
import ROSLIB from "roslib";

const Visualization = () => {
  useEffect(() => {
    const ros = new ROSLIB.Ros({ url: "ws://localhost:9090" });

    ros.on("connection", () => console.log("Connected to ROS"));
    ros.on("error", (error) => console.error("Error connecting to ROS:", error));
    ros.on("close", () => console.log("Disconnected from ROS"));

    const humanDetection = new ROSLIB.Topic({
      ros,
      name: "/detectnet/detections",
      messageType: "vision_msgs/Detection2DArray",
    });

    humanDetection.subscribe((message) => {
      console.log("Detected Humans:", message);
    });

    return () => ros.close();
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <p>Real-Time Human Detection Visualization</p>
      {/* Extend this to show a graphical map */}
    </div>
  );
};

export default Visualization;
