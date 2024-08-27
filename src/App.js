import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GetInTouch from "./Component/footer2/GetInTouch";

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

// import React from 'react';

// const GetInTouch = () => {
//   return (
//     <h2 
//       className="text-[36px] sm:text-[48px] font-[900] text-left mb-6 tracking-wide text-[#272727] leading-tight sm:leading-[60px]" 
//       style={{ 
//         WebkitTextStroke: '2px #FFFFFF80', 
//         border: '2px solid #FFFFFF80' 
//       }}
//     >
//       GET IN TOUCH
//     </h2>
//   );
// };

// export default GetInTouch;


