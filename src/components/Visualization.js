import React, { useEffect } from "react";
import ROSLIB from "roslib";

const Visualization = () => {
  useEffect(() => {
    const ros = new ROSLIB.Ros({ url: "ws://localhost:9090" });

    ros.on("connection", () => console.log("Connected to ROS"));
    ros.on("error", (error) => console.error("Error connecting to ROS:", error));
    ros.on("close", () => console.log("Disconnected from ROS"));

    // Subscribe to a topic
    const humanDetection = new ROSLIB.Topic({
      ros,
      name: "/detectnet/detections",
      messageType: "vision_msgs/Detection2DArray",
    });

    humanDetection.subscribe((message) => {
      console.log("Detected Humans:", message);
    });

    return () => ros.close(); // Cleanup on unmount
  }, []);

  return <div className="visualization">Real-Time Map Coming Soon...</div>;
};

export default Visualization;
