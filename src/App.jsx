import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //undefined means that we are doing nothing
    projects: [],
    tasks: [],
  });

  function handleSelectProject(id) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null, //null means that we are adding a new project
      };
    });
  }
  function handleAddProject(projectData) {
    const projectId = Math.random().toString();
    const newProject = { ...projectData, id: projectId };
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: prevProjectsState.projects.filter(
          (project) => project.id !== prevProjectsState.selectedProjectId
        ),
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined, //undefined means we  are going to NoProjectsSelected
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevProjectsState) => {
      const taskId = Math.random().toString();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevProjectsState.selectedProjectId,
      };
      return {
        ...prevProjectsState,
        tasks: [newTask, ...prevProjectsState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        tasks: prevProjectsState.tasks.filter(
          (task) => task.id !== id
        ),
      };})
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  let content = (
    <SelectedProject
      onDelete={handleDeleteProject}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
