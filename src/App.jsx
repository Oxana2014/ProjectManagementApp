import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
       <NoProjects />
      </main>
    </>
  );
}

export default App;
