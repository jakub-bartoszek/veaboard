import { Display } from "./components/Display";
import { Keyboard } from "./components/Keyboard";

function App() {
 return (
  <div className="w-full h-screen overflow-hidden flex flex-col justify-evenly items-center p-24px box-border bg-[#3c3c3c]">
   <Display />
   <Keyboard />
  </div>
 );
}

export default App;
