import {useState} from 'react'

import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";

const PROJECTS = ['Project 1', 'React']

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
        <Sidebar />
        {projects.length === 0 && <NoProjects />}
       {projects.length > 0 && <h2>{projects[0]}</h2>}
      </main>
    </>
  );
}

export default App;
