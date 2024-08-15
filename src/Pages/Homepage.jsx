import Brief from "../Sections/Brief";
import Footer from "../Sections/Footer";
import GetStarted from "../Sections/GetStarted";
import Nav from "../Sections/Nav";
import Ribbon from "../Sections/Ribbon";
import RightGoal from "../Sections/RightGoal";
import Services from "../Sections/Services";
import ServicesBlog from "../Sections/ServicesBlog";


function Homepage() {
  return (
    <>
    <Nav/>
    <GetStarted/>
    <RightGoal/>
    <Services/>
    <Ribbon/>
    <ServicesBlog/>
    <Brief/>
    <Footer/>
    </>
  );
}

export default Homepage
