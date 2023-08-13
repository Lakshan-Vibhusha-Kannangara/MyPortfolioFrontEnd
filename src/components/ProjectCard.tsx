import React from "react";

// Define the type of the 'project' parameter
interface Project {
  title: string;
  description: string;
  screenshot: string;
  // Add other properties of the 'project' object here
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card w-60 h-40 m-5">
      <img
        className="imgScreenshot"
        src={project.screenshot}
        alt={project.title}
      />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        {/* Add buttons, badges, and other content */}
        {/* You can use project properties (e.g., project.videoLink, project.websiteLink) */}
      </div>
    </div>
  );
}
