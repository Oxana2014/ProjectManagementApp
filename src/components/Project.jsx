import Tasks from "./Tasks"

export default function Project({ project, highlighted, onDelete }) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {project.title}
        </h1>
        <menu className="flex items-center justify-end gap-4 my-4">
          <button onClick={() => onDelete(highlighted)} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </menu>
</div>
        <p className="mb-4 text-stone-400">{project.date}</p>
        <p className="text-stone-800 my-4">{project.description}</p>
      </header>
      <Tasks />
    </div>
  );
}
