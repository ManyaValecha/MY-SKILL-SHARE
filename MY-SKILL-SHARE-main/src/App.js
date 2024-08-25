import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";
import { Myskills } from "./components/myskills";
import { Addskill } from "./components/addskill";
import { Gallery } from "./components/gallery";
import { Reports } from "./components/reports";
import { Skillcategories } from "./components/skillcategories";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";

import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Dashboard data={landingPageData.Dashboard} />
      <Myskills data={landingPageData.Myskills} />
      <Addskill data={landingPageData.Addskill} />
      <Gallery data={landingPageData.Gallery} />
      <Reports data={landingPageData.Reports} />
      <Skillcategories data={landingPageData.Skillcategories} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
