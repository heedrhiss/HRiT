import GetStarted from "./Sections/GetStarted";
import Nav from "./Sections/Nav";
import Ribbon from "./Sections/Ribbon";
import RightGoal from "./Sections/RightGoal";
import Services from "./Sections/Services";

function App() {
  return (
    <div className="h-svh w-svw mx-auto overflow-x-hidden">
    <Nav/>
    <GetStarted/>
    <RightGoal/>
    <Services/>
    <Ribbon/>
    </div>
  );
}

export default App;
