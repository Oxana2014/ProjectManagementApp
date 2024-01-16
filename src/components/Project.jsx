export default function Project({project}) {
    return <div>
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
        <p className="mb-4 text-stone-400">{project.date}</p>
        <p className="text-stone-800 my-4">{project.goal}</p>
        <p className="text-stone-800 my-4">{project.description}</p>
            </header>
    </div>
}