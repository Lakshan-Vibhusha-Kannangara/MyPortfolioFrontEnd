import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";

import Projects from "./components/Projects/Projects";
import TopNavbar from "./components/TopNavBar/TopNavBar";
import Courses from "./components/Courses/Courses.tsx";
import React, { useState, useEffect } from "react";
import Resume from "./components/Resume/Resume";
import TechStack from "./components/TechStack/TechStack";
import Powered from "./components/Powered/Powered";
import Blog from "./components/Blog/Blog.tsx";
import Research from "./components/Research/Research";
import axios from "axios";



import ProjectInfo from "./components/Projects/ProjectInfo";

function App() {
  const [data, setData] = useState(null);
  const [essentialData, setEssentialData] = useState({});
  const [interestData, setInterestData] = useState({ interests: [] });
  const [coursesData, setCoursesData] = useState({});

  const [technicalData, setTechnicalData] = useState([]);

  const [technologyData, setTechnologyData] = useState([]);

  const [blogPosts, setBlogPosts] = useState([]);

  const fetchData = async (url, setterFunction) => {
    try {
      const response = await axios.get(url);
      setterFunction(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      await Promise.all([
        fetchData(process.env.REACT_APP_PROJECTS_URL, setData),
        fetchData(process.env.REACT_APP_ESSENTIAL_URL, setEssentialData),
        fetchData(process.env.REACT_APP_COURSES_URL, setCoursesData),
        fetchData(process.env.REACT_APP_TECHNICAL_URL, setTechnicalData),
        fetchData(process.env.REACT_APP_BLOG_URL, setBlogPosts),
        fetchData(process.env.REACT_APP_TECHNOLOGIES_URL, setTechnologyData),
        fetchData(process.env.REACT_APP_INTERESTS_URL, setInterestData),
      ]);
    };

    fetchDataAsync();
  }, []);

  // This will log the fetched technologyData to the console

  return (
    <Switch>
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0",
        padding: "0",
        position: "relative",
      }}
    >
      <TopNavbar></TopNavbar>
      <div style={{ top: "30px", position: "relative" }}>
     
          <Route
            path="/home"
            render={(props) => (
              <Home
                technicalData={technicalData}
                essential={
                  essentialData.success ? essentialData.essential[0] : {}
                }
                interests={interestData.success ? interestData : {}}
              />
            )}
          ></Route>

          <Route path="/resume" component={Resume}></Route>
          <Route path="/researchr" component={Research}></Route>

          <Route
            path="/techstack"
            render={(props) => (
              <TechStack courses={technologyData.technology} />
            )}
          ></Route>

          <Route path="/powered" component={Powered}></Route>
         
      
          <Route path="/project/:projectId" component={ProjectInfo} />
          <Route
            path="/courses"
            render={(props) => <Courses courses={coursesData.course} />}
          ></Route>
          <Route
            path="/projects"
            render={(props) => <Projects {...props} data={data} />}
          ></Route>
         

          <Route
            path="/blog"
            render={(props) => <Blog blogPosts={blogPosts.blogPosts} />}
          ></Route>

      </div>
    </div>
    </Switch>
  );
}

export default App;
