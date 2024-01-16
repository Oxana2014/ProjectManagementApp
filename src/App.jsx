import {useState} from 'react'

import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import Project from './components/Project';

const PROJECTS = ['Project 1', 'React']
const PROJ = {title: "Learning React",
date: new Date().toLocaleDateString(),
goal: "Learn React from the group up",
description: "Start with the basics, finish with advanced knowledge"}

function App() {
const [projects, setProjects] = useState(PROJECTS)

function addProjectHandle(newProject) {
  setProjects(prevProjects => {
    const curProjects = [newProject, ...prevProjects]
return curProjects
  })
}
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <main className="h-screen my-8 flex gap-8">
        <Sidebar projects={projects} />
        {projects.length === 0 && <NoProjects />}
       {projects.length > 0 && <Project project={PROJ}/>}
      </main>
    </>
  );
}

export default App;
