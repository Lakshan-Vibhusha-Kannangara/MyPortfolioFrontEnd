import logo from './logo.svg';
import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.tsx';
import UserProfile from './components/UserProfile.tsx';
import Projects from './components/Projects.tsx';
import TopNavbar from './components/TopNavBar.tsx';
import Courses from './components/Courses.tsx'
import React, { useState, useEffect } from 'react';
import PdfViewer from './components/PdfViewer.tsx';
import TechStack from './components/TechStack';
function App() {
  const [data, setData] = useState(null);
  const [essentiakData, setEssentialData] = useState({
    

  });
  const fetchData = async () => {
    try {
      const response = await fetch('http://52.65.35.114:4002/projects'); 
      const jsonData = await response.json();
      setData(jsonData);
      console.log('Fetched data:', jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const fetchEssentials = async () => {
    try {
      const response = await fetch('http://52.65.35.114:4002/essential'); 
      const jsonData = await response.json();
      setEssentialData(jsonData);
      console.log('Fetched essential data:', jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchEssentials();
    fetchData();
  }, []); // Fetch data when the component mounts

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0',
        padding: '0',
        position: 'relative',
      }}
    >
      <TopNavbar></TopNavbar>
      <div>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={UserProfile}></Route>
          <Route path="/pdfviewer" component={PdfViewer}></Route>
          <Route path="/techstack" component={TechStack}></Route>
          <Route path="/courses" component={Courses}></Route>
          <Route
            path="/projects"
            render={(props) => <Projects {...props} data={data} />}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
