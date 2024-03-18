import React, { useEffect, useState } from 'react'
import './project_list_prof.css'
import {Link } from "react-router-dom";
import Loader from '../components/Faculty/Loader'

function TotalProjects(props) {
  const [showDetails, setShowDetails] = useState(false);

  const expand = () => {
    const projectDiv = document.getElementById(`project-${props.index}`);
    const button = document.getElementById(`expand-button-${props.index}`);
    if(projectDiv.style.height == '380px'){
      button.innerText ="Show More";
      projectDiv.style.height = '200px';
    }
    else{
      button.innerText ="Show Less ";
      projectDiv.style.height = '380px';
    }
    setShowDetails(!showDetails);
  };

  return (
    <div className={`each-project ${showDetails ? 'expanded' : ''}`} id={`project-${props.index}`}>
      <h2>{props.name}</h2>
      <p>{props.details}</p>
      <div className="normal-details">
      <Link className="a" to="/EnrolledStudents"><button>Enrolled Students</button></Link>
      <Link className="a" to="/Requests"><button>Requests</button></Link>
        
        
        <button id={`expand-button-${props.index}`} onClick={expand}>{showDetails ? "Show Less" : "Show More"}</button>
      </div>
      {showDetails && (
        <div className="side-karo">
          <div className='expanded-details'>
            <span style={{ color: 'blue', fontWeight: "530" }}>Open for: <span style={{ color: 'black', fontWeight: "500", fontSize: "15px" }}>{props.batches}</span></span>
            <span style={{ color: 'blue', fontWeight: "500" }}>Resume required: <span style={{ color: 'black', fontWeight: "500", fontSize: "15px" }}>{props.resume}</span></span>
            <span style={{ color: 'blue', fontWeight: "500" }}>Total Students: <span style={{ color: 'black', fontWeight: "500", fontSize: "15px" }}>{props.students}</span></span>
            <span style={{ color: 'blue', fontWeight: "500" }}>Additional Details: <span style={{ color: 'black', fontWeight: "500", fontSize: "15px" }}>{props.additional}</span></span>
          </div>
          <div className="second-details">
            <h4 style={{ color: 'blue' }}>Cpi Required: <span style={{ color: 'black', fontWeight: "500", fontSize: "15px" }}>{props.cpi}</span></h4>
            <h4 style={{ color: 'blue' }}>Pre-Requisite: <span style={{ color: 'black', fontWeight: "500", fontSize: "15px" }}>{props.preReq}</span></h4>
          </div>
          <div className="editing">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}


function Project_list_prof() {
  const [facultyData, setFacultyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cs253backederror404teamnotfoundmohammaadnasarsiddiqui.vercel.app/api/user/faculty/abhas'); //"abhas" should be replaced by "unique id" of professor signed in
        if (!response.ok) {
          throw new Error('Failed to fetch faculty data');
        }
        const data = await response.json();
        setFacultyData(data);
        console.log("data in prof project list");
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching faculty data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }


  return (
    <div>
      <div className="prof-projects-list">
        <div className="porjects-heading-note">
          <h2>Ongoing projects:-</h2>
          <Link className="a" to="/NewProject">
            <button>Add New Project</button>
          </Link>
        </div>
        {loading ? ( 
        <Loader  />
      ) : (
        facultyData && facultyData.projects.map((item, index) => (
          <TotalProjects
            key={index}
            index={index}
            name={item.name}
            details={item.description}
            cpi={item.cpirequired}
            batches={item.offeredByProf}
            preReq={item.prereg} // Joining prerequisites array into a comma-separated string
            resume={item.resumerequired ? 'Yes' : 'No'}
            students={item.maxstudents}
          />
        ))
      )}
      </div>
    </div>
  );
}

export default Project_list_prof;