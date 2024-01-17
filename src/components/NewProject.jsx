import {useRef} from "react"

export default function NewProject({onCancel, onSubmit}) {
const title= useRef()
const description = useRef()
const date = useRef()

const submitHandler = (event) => {
     event.preventDefault()
    const project = {
        title: title.current.value,
        description: description.current.value,
        date: date.current.value
    }
    title.current.value=""
    description.current.value = ""
    date.current.value = ""
   onSubmit(project)
  
}



  return (
    <form onSubmit={submitHandler} className="mt-4 ">
       <div className="w-[35rem] mt-16 ">
       <menu className="flex items-center justify-end gap-4 my-4">       
          <button type="reset" onClick={onCancel} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
          </menu>   
        </div>
 <div>
        <label htmlFor="title" className="text-sm font-bold uppercase text-stone-500">title</label>
        <input ref={title} id="title" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
 </div>
 <div>
        <label htmlFor="description" className="text-sm font-bold uppercase text-stone-500">description</label>
        <input ref={description} id="description" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
 </div>
 <div>
        <label htmlFor="date" className="text-sm font-bold uppercase text-stone-500">due date</label>
        <input ref={date} id="date" type="date" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
 </div>
    </form>
  );
}
