import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Services from "./Pages/Services";
// import Brief from "./Sections/Brief";
// import Footer from "./Sections/Footer";
// import GetStarted from "./Sections/GetStarted";
// import Nav from "./Sections/Nav";
// import Ribbon from "./Sections/Ribbon";
// import RightGoal from "./Sections/RightGoal";
// import Services from "./Sections/Services";
// import ServicesBlog from "./Sections/ServicesBlog";

function App() {
  return (
    <div className="h-svh w-svw mx-auto overflow-x-hidden">
    <BrowserRouter>
    <Routes>
      <Route index element={ <Homepage/>}/>
      <Route path="/Services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
