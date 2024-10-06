import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineMinusCircle } from "react-icons/ai"; // Import remove icon

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = () => {
    setProjects([...projects, { name: '', description: '', colors: [{ color: '', note: '' }] }]);
  };

  const handleRemoveProject = (projectIndex) => {
    const updatedProjects = projects.filter((_, i) => i !== projectIndex);
    setProjects(updatedProjects);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    setProjects(updatedProjects);
  };

  const handleAddColor = (projectIndex) => {
    const updatedProjects = projects.map((project, i) =>
      i === projectIndex
        ? { ...project, colors: [...project.colors, { color: '', note: '' }] }
        : project
    );
    setProjects(updatedProjects);
  };

  const handleColorChange = (projectIndex, colorIndex, field, value) => {
    const updatedProjects = projects.map((project, i) =>
      i === projectIndex
        ? {
            ...project,
            colors: project.colors.map((color, j) =>
              j === colorIndex ? { ...color, [field]: value } : color
            ),
          }
        : project
    );
    setProjects(updatedProjects);
  };

  const handleRemoveColor = (projectIndex, colorIndex) => {
    const updatedProjects = projects.map((project, i) =>
      i === projectIndex
        ? {
            ...project,
            colors: project.colors.filter((_, j) => j !== colorIndex),
          }
        : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-[#706677] text-white px-5 py-3 w-[25vw] flex justify-between rounded-full hover:bg-[#5a5260] mb-5"
        onClick={handleAddProject}>
        Add Project <span className="text-xl"><CiCirclePlus /></span>
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="border p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Project {projectIndex + 1}</h2>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleRemoveProject(projectIndex)}>
                Remove Project
              </button>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Project Name..."
                className="border p-2 w-full rounded-xl"
                value={project.name}
                onChange={(e) =>
                  handleProjectChange(projectIndex, 'name', e.target.value)
                }
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Project Description..."
                className="border p-2 w-full rounded-xl"
                value={project.description}
                onChange={(e) =>
                  handleProjectChange(projectIndex, 'description', e.target.value)
                }
              />
            </div>

            <div className="mb-4">
              {project.colors.map((colorObj, colorIndex) => (
                <div key={colorIndex} className="mb-2">
                  <div className="flex items-center mb-2">
                    <input
                      type="text"
                      placeholder="Color (e.g., #000000)"
                      className="border p-2 mr-4 rounded-xl"
                      value={colorObj.color}
                      onChange={(e) =>
                        handleColorChange(projectIndex, colorIndex, 'color', e.target.value)
                      }
                    />
                    <div
                      className="w-10 h-10 rounded"
                      style={{
                        backgroundColor: colorObj.color || '#ffffff',
                        border: '1px solid #000',
                      }}
                    ></div>
                    {/* Show remove icon only if there is more than one color */}
                    {project.colors.length > 1 && (
                      <button
                        className="text-red-500 hover:text-red-600 ml-2"
                        onClick={() => handleRemoveColor(projectIndex, colorIndex)}
                      >
                        <AiOutlineMinusCircle size={24} />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Quick note for this color..."
                    className="border p-2 w-full rounded-xl"
                    value={colorObj.note}
                    onChange={(e) =>
                      handleColorChange(projectIndex, colorIndex, 'note', e.target.value)
                    }
                  />
                </div>
              ))}
              <button
                className="bg-[#706677] text-white flex gap-5 px-4 py-2 rounded-full hover:bg-[#5a5260]"
                onClick={() => handleAddColor(projectIndex)}
              >
                Add Color <span className="text-xl"><CiCirclePlus /></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManager;
