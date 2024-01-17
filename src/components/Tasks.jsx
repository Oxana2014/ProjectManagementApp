import { useState, useRef } from "react";

const TASKS = ["React learn", "Practice", "Do exercises"]

export default function Tasks() {
  const [tasks, setTasks] = useState(TASKS);
const taskName = useRef()

function handleSubmit(event) {
event.preventDefault()
setTasks(prevTasks => {
    const curTasks = [taskName.current.value, ...prevTasks]
    return curTasks
})
taskName.current.value = ''
}
function handleClear(index) {
setTasks(prevTasks => {
    const curTasks = []
    for(let i = 0; i < prevTasks.length; i++) {
      if(i !== index)  curTasks.push(prevTasks[i])
    }
return curTasks
})
}

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <form onSubmit={handleSubmit} className="mt-4 text-right">
        <div className="flex items-center gap-4">
          <input ref={taskName} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
          <button type="submit" className="text-stone-700 hover:text-stone-950">
            Add Task
          </button>
        </div>
      </form>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task, index) => 
        <div key={Math.random().toString()} index={index} className="flex items-center justify-between">
          <p className="text-stone-800 my-4">{task}</p>
          <button onClick={() => handleClear(index)}>Clear</button>
        </div>
        )}
      </ul>
    </div>
  );
}
