import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrandGrid from "./Component/Brands";
import FeaturedIn from "./Component/Featured";
import FooterContainer from "./Component/footer";
import GetInTouch from "./Component/footer2/GetInTouch";
import InfluencerMarketingSection from "./Component/influencerMarkteing";
import MostMediaExperienced from "./Component/MostMediaExperienced";
import Navbar from "./Component/Navbar/index";
import OurMilestonesSection from "./Component/OurMilestones";
import Home from "./screens/Home";
import AboutUs from "./screens/aboutUs";
import Work from "./screens/work";
import Connect from "./screens/connect";
import MediaSection from "./screens/media";
import ContactSection from "./screens/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/media" element={<MediaSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <GetInTouch />
    </Router>
  );
}

export default App;
