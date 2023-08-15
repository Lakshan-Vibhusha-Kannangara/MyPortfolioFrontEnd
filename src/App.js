

import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import Projects from "./components/Projects/Projects";
import TopNavbar from "./components/TopNavBar/TopNavBar";
import Courses from "./components/Courses/Courses.tsx";
import React, { useState, useEffect } from "react";
import PdfViewer from "./components/PdfViewer/PdfViewer";
import TechStack from "./components/TechStack/TechStack";
import Powered from "./components/Powered/Powered";

import Blog from "./components/Blog/Blog.tsx"
function App() {
  const [data, setData] = useState(null);
  const [essentialData, setEssentialData] = useState({});
  const [coursesData, setCoursesData] = useState({});
  const [userData, setUserData] = useState({});
  const [technicalData, setTechnicalData] = useState({});
  const [projlData, setProjlData] = useState([]);
  const [infoData, setInfoData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [technologyData, setTechnologyData] = useState([]);
const [blogData, setBlogData] = useState([]);
const [blogPosts, setBlogPosts] = useState([]);

const fetchBlogPosts = async () => {
  try {
    const response = await fetch("http://52.65.35.114:4002/blog");
    const data = await response.json();
    setBlogPosts(data);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
};
    const fetchUserData = async () => {
    try {
      const response = await fetch("http://52.65.35.114:4002/info");
      const jsonData = await response.json();
      setUserData(jsonData);

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const fetchBlogData = async () => {
    try {
      const response = await fetch("http://52.65.35.114:4002/info");
      const jsonData = await response.json();
      setBlogData(jsonData);

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };





  const fetchData = async () => {
    try {
      const response = await fetch("http://52.65.35.114:4002/projects");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchEssentials = async () => {
    try {
      const response = await fetch("http://52.65.35.114:4002/essential");
      const jsonData = await response.json();
      setEssentialData(jsonData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://52.65.35.114:4002/courses");
      const jsonData = await response.json();
      setCoursesData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTechnicalData = async () => {
    try {
      const response = await fetch("http://52.65.35.114:4002/technical");
      const jsonData = await response.json();
      setTechnicalData(jsonData);

    } catch (error) {
      console.error("Error fetching technical data:", error);
    }
  };
  const fetchInfoData = async () => {
    try {
      const response = await fetch('http://52.65.35.114:4002/info'); // Replace with your specific endpoint
      const jsonData = await response.json();
      setInfoData(jsonData.info[0]);

    } catch (error) {
      console.error('Error fetching info data:', error);
    }
  };


  const fetchProjectData = async () => {
    try {
      const response = await fetch("http://52.65.35.114:4002/projinfo");
      const jsonData = await response.json();
      setProjlData(jsonData.projinfo);

    } catch (error) {
      console.error("Error fetching project data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchTechnologyData = async () => {
    try {
      const response = await fetch('http://52.65.35.114:4002/technologies');
      const data = await response.json();
      
      if (data.success) {
        setTechnologyData(data.technology);
      } else {
        console.error('Failed to fetch technology data:', data);
      }
    } catch (error) {
      console.error('Error fetching technology data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchEssentials();
    fetchData();
    fetchCourses();
    fetchProjectData();
    fetchTechnicalData();
    fetchInfoData();
    fetchBlogData();
    fetchBlogPosts();
    fetchTechnologyData()
    

    
  }, []); // Fetch data when the component mounts


 
  return (
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
      <div>
        <Switch>
          <Route
            path="/home"
            render={(props) => (
              <Home essential={essentialData.success ? essentialData.essential[0] : {}} />
            )}
          ></Route>
         
         <Route
        path="/about"
        render={(props) => <UserProfile userData={userData.info} projlData={projlData} isLoading={isLoading}  technicalData={technicalData} />}
    
      ></Route>
          <Route path="/pdfviewer" component={PdfViewer}></Route>
          <Route path="/techstack" component={TechStack}></Route>

          <Route path="/powered" component={Powered}></Route>

          
      <Route
  path="/techstack"
  render={(props) =>
    technologyData.length > 0 ? (
      <TechStack {...props} technologyData={technologyData} />
    ) : (
      <div>Loading technology data...</div>
    )
  }
></Route>
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
            render={(props) => <Blog {...props} blogPosts={blogPosts.blogPosts} />}
            
          ></Route>
        </Switch>
      </div>
    </div>
 
 
 );
}

export default App;





