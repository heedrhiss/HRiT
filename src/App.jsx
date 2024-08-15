import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Services from "./Pages/Services";
import PageNotFound from "./Pages/PageNotFound";
import Testimonials from "./Pages/Testimonials";
import Connect from "./Pages/Connect";
import Resources from "./Pages/Resources";


function App() {
  return (
    <div className="h-svh w-svw mx-auto overflow-x-hidden">
    <BrowserRouter>
    <Routes>
      <Route index element={ <Homepage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Testimonials" element={<Testimonials/>}/>
      <Route path="/Resources" element={<Resources/>}/>
      <Route path="/Connect" element={<Connect/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
