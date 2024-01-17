import { useState } from "react";

import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NewProject from "./components/NewProject";

const PROJ = {
  title: "Learning React",
  date: new Date().toLocaleDateString(),
  description:
    "Learn React from the group up <br></br>Start with the basics, finish with advanced knowledge",
};

function App() {
  const [addProject, setAddProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [highlighted, setHighlighted] = useState(0);

  function handleChangeHighlighted(index) {
    setHighlighted(index);
  }
  function addProjectButtonHandle() {
    setAddProject(true);
  }
  function cancelAddingProject() {
    setAddProject(false);
  }

  function addProjectHandle(newProject) {
    setProjects((prevProjects) => {
      const curProjects = [newProject, ...prevProjects];
      console.log(curProjects);
      return curProjects;
    });
    setAddProject(false);
  }
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projects}
          onAddProject={addProjectButtonHandle}
          onChangeHighlighted={handleChangeHighlighted}
          highlighted={highlighted}
        />
        {addProject && (
          <NewProject
            onCancel={cancelAddingProject}
            onSubmit={addProjectHandle}
          />
        )}
        {!addProject && projects.length === 0 && (
          <NoProjects onAddProject={addProjectButtonHandle} />
        )}
        {!addProject && projects.length > 0 && (
          <Project project={projects[highlighted]} />
        )}
      </main>
    </>
  );
}

export default App;
